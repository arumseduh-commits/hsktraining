import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import { HSK1_WORDS, DAYS_CONFIG as HSK1_DAYS } from '../data/hsk1Words';
import { HSK2_WORDS, DAYS_CONFIG_HSK2 } from '../data/hsk2Words';
import { loadLevelVocabulary, preCacheAllLevels } from '../services/vocabLoader';
import { getSupabase, isSupabaseConfigured } from '../services/supabaseClient';
import { fetchRemoteProgress, pushRemoteProgress, mergeLearningProgress } from '../services/cloudSync';

const LearningContext = createContext();

const STORAGE_KEY = 'hsk_turbo_progress_v2';

export function LearningProvider({ children }) {
  // Current HSK Level (1 to 9)
  const [currentLevel, setCurrentLevel] = useState(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_current_level`);
      return saved ? Number(saved) : 1;
    } catch {
      return 1;
    }
  });

  // Dynamic Words & Sprint Days Configuration
  const [words, setWords] = useState(() => {
    return currentLevel === 2 ? HSK2_WORDS : HSK1_WORDS;
  });

  const [daysConfig, setDaysConfig] = useState(() => {
    return currentLevel === 2 ? DAYS_CONFIG_HSK2 : HSK1_DAYS;
  });

  // Track word mastery status per level
  const [wordStatus, setWordStatus] = useState(() => {
    try {
      // Check level-specific key first
      const levelSaved = localStorage.getItem(`${STORAGE_KEY}_status_lvl_${currentLevel}`);
      if (levelSaved) return JSON.parse(levelSaved);

      // Fallback for legacy HSK 1 progress
      const legacySaved = localStorage.getItem('hsk1_turbo_progress_v1_status');
      if (currentLevel === 1 && legacySaved) return JSON.parse(legacySaved);

      return {};
    } catch {
      return {};
    }
  });

  const [activeDay, setActiveDay] = useState(1);
  const [audioSpeed, setAudioSpeed] = useState(0.85);

  const [examScores, setExamScores] = useState(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_exams`);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Official Certificate Exam History
  const [officialHistory, setOfficialHistory] = useState(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_official_exams`);
      if (saved) return JSON.parse(saved);
      const legacy = localStorage.getItem('hsk1_turbo_progress_v1_official_exams');
      return legacy ? JSON.parse(legacy) : [];
    } catch {
      return [];
    }
  });

  const [candidateName, setCandidateName] = useState(() => {
    return localStorage.getItem(`${STORAGE_KEY}_candidate_name`) || 
           localStorage.getItem('hsk1_turbo_progress_v1_candidate_name') || 
           'Pembelajar HSK';
  });

  // Supabase Auth & Cloud Sync States
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [isCloudSyncing, setIsCloudSyncing] = useState(false);
  const [lastSyncedAt, setLastSyncedAt] = useState(() => {
    return localStorage.getItem(`${STORAGE_KEY}_last_synced_at`) || null;
  });
  const [isSupabaseReady, setIsSupabaseReady] = useState(() => isSupabaseConfigured());

  // Ref to hold sync timeout for debouncing
  const syncDebounceRef = useRef(null);

  // Helper: Collect all level statuses from storage
  const getAllWordStatuses = useCallback(() => {
    const all = {};
    for (let lvl = 1; lvl <= 9; lvl++) {
      try {
        const saved = localStorage.getItem(`${STORAGE_KEY}_status_lvl_${lvl}`);
        if (saved) {
          all[lvl] = JSON.parse(saved);
        } else if (lvl === 1) {
          const legacy = localStorage.getItem('hsk1_turbo_progress_v1_status');
          if (legacy) all[1] = JSON.parse(legacy);
        }
      } catch {
        // ignore
      }
    }
    all[currentLevel] = wordStatus;
    return all;
  }, [currentLevel, wordStatus]);

  // Helper: Apply merged statuses into localStorage and current state
  const applyMergedWordStatuses = useCallback((mergedStatuses, targetLevel) => {
    if (!mergedStatuses) return;
    for (const [lvl, statuses] of Object.entries(mergedStatuses)) {
      try {
        localStorage.setItem(`${STORAGE_KEY}_status_lvl_${lvl}`, JSON.stringify(statuses));
        if (Number(lvl) === 1) {
          localStorage.setItem('hsk1_turbo_progress_v1_status', JSON.stringify(statuses));
        }
      } catch (e) {
        console.error(e);
      }
    }
    const levelToLoad = targetLevel || currentLevel;
    if (mergedStatuses[levelToLoad]) {
      setWordStatus(mergedStatuses[levelToLoad]);
    }
  }, [currentLevel]);

  // Handle User Signed In (Cloud Pull + Intelligent Merge + Cloud Push)
  const handleUserSignedIn = useCallback(async (signedUser) => {
    if (!signedUser) return;
    setIsCloudSyncing(true);

    try {
      const { data: cloudData, error } = await fetchRemoteProgress(signedUser.id);
      
      const localData = {
        candidateName,
        currentLevel,
        allWordStatuses: getAllWordStatuses(),
        officialHistory,
        examScores
      };

      if (cloudData) {
        // Merge cloud with local
        const merged = mergeLearningProgress(localData, cloudData);

        if (merged.candidateName) {
          setCandidateName(merged.candidateName);
        }
        if (merged.currentLevel) {
          setCurrentLevel(merged.currentLevel);
        }
        if (merged.officialHistory) {
          setOfficialHistory(merged.officialHistory);
        }
        if (merged.examScores) {
          setExamScores(merged.examScores);
        }
        applyMergedWordStatuses(merged.allWordStatuses, merged.currentLevel);

        // Push merged state back to Supabase to guarantee parity
        await pushRemoteProgress(signedUser, merged);

        const now = new Date().toISOString();
        setLastSyncedAt(now);
        localStorage.setItem(`${STORAGE_KEY}_last_synced_at`, now);
      } else {
        // User baru di cloud: push data lokal yang ada saat ini
        const userDisplayName = signedUser.user_metadata?.full_name || signedUser.email?.split('@')[0] || candidateName;
        if (userDisplayName && candidateName === 'Pembelajar HSK') {
          setCandidateName(userDisplayName);
          localData.candidateName = userDisplayName;
        }

        await pushRemoteProgress(signedUser, localData);
        const now = new Date().toISOString();
        setLastSyncedAt(now);
        localStorage.setItem(`${STORAGE_KEY}_last_synced_at`, now);
      }
    } catch (err) {
      console.error('Gagal sinkronisasi data cloud saat login:', err);
    } finally {
      setIsCloudSyncing(false);
    }
  }, [candidateName, currentLevel, getAllWordStatuses, officialHistory, examScores, applyMergedWordStatuses]);

  // Initialize Supabase Auth Listener
  useEffect(() => {
    const supabase = getSupabase();
    setIsSupabaseReady(isSupabaseConfigured());

    if (!supabase) {
      setAuthLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user);
        handleUserSignedIn(session.user);
      }
      setAuthLoading(false);
    }).catch(err => {
      console.error('Session check error:', err);
      setAuthLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        setUser(session.user);
        if (event === 'SIGNED_IN') {
          await handleUserSignedIn(session.user);
        }
      } else {
        setUser(null);
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [handleUserSignedIn]);

  // Refresh configuration when modal updates credentials
  const refreshSupabaseState = useCallback(() => {
    const ready = isSupabaseConfigured();
    setIsSupabaseReady(ready);
    const supabase = getSupabase();
    if (supabase) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) {
          setUser(session.user);
          handleUserSignedIn(session.user);
        }
      });
    }
  }, [handleUserSignedIn]);

  // Google Login Trigger
  const loginWithGoogle = async () => {
    const supabase = getSupabase();
    if (!supabase) {
      throw new Error('Supabase belum terkonfigurasi. Silakan atur URL & Anon Key terlebih dahulu.');
    }
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + window.location.pathname
      }
    });
    if (error) throw error;
    return data;
  };

  // Logout Trigger
  const logout = async () => {
    const supabase = getSupabase();
    if (supabase) {
      await supabase.auth.signOut();
    }
    setUser(null);
  };

  // Manual Trigger: Sinkronkan Sekarang
  const syncNow = async () => {
    if (!user) return;
    setIsCloudSyncing(true);
    try {
      const payload = {
        candidateName,
        currentLevel,
        allWordStatuses: getAllWordStatuses(),
        examScores,
        officialHistory
      };
      const { success } = await pushRemoteProgress(user, payload);
      if (success) {
        const now = new Date().toISOString();
        setLastSyncedAt(now);
        localStorage.setItem(`${STORAGE_KEY}_last_synced_at`, now);
      }
    } catch (err) {
      console.error('Manual sync error:', err);
    } finally {
      setIsCloudSyncing(false);
    }
  };

  // Auto-cache and load words when currentLevel changes
  useEffect(() => {
    let isCancelled = false;

    // Load words from auto-cache
    loadLevelVocabulary(currentLevel).then(({ words: loadedWords, daysConfig: loadedDays }) => {
      if (!isCancelled) {
        setWords(loadedWords);
        setDaysConfig(loadedDays);
      }
    });

    // Load level-specific word status
    try {
      const savedStatus = localStorage.getItem(`${STORAGE_KEY}_status_lvl_${currentLevel}`);
      if (savedStatus) {
        setWordStatus(JSON.parse(savedStatus));
      } else if (currentLevel === 1) {
        const legacy = localStorage.getItem('hsk1_turbo_progress_v1_status');
        setWordStatus(legacy ? JSON.parse(legacy) : {});
      } else {
        setWordStatus({});
      }
    } catch {
      setWordStatus({});
    }

    try {
      localStorage.setItem(`${STORAGE_KEY}_current_level`, currentLevel.toString());
    } catch (e) {
      console.error(e);
    }

    return () => {
      isCancelled = true;
    };
  }, [currentLevel]);

  // Pre-cache levels automatically during idle
  useEffect(() => {
    preCacheAllLevels();
  }, []);

  // Save word status to localStorage and trigger cloud debounced auto-sync
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_status_lvl_${currentLevel}`, JSON.stringify(wordStatus));
      if (currentLevel === 1) {
        localStorage.setItem('hsk1_turbo_progress_v1_status', JSON.stringify(wordStatus));
      }
    } catch (e) {
      console.error(e);
    }

    // Debounced Cloud Sync if user is logged in
    if (user) {
      if (syncDebounceRef.current) clearTimeout(syncDebounceRef.current);
      syncDebounceRef.current = setTimeout(() => {
        syncNow();
      }, 1500);
    }
  }, [wordStatus, currentLevel, user]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_exams`, JSON.stringify(examScores));
    } catch (e) {
      console.error(e);
    }
  }, [examScores]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_official_exams`, JSON.stringify(officialHistory));
      localStorage.setItem('hsk1_turbo_progress_v1_official_exams', JSON.stringify(officialHistory));
    } catch (e) {
      console.error(e);
    }
  }, [officialHistory]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_candidate_name`, candidateName);
      localStorage.setItem('hsk1_turbo_progress_v1_candidate_name', candidateName);
    } catch (e) {
      console.error(e);
    }
  }, [candidateName]);

  const recordOfficialExamResult = (resultData) => {
    setOfficialHistory(prev => [resultData, ...prev]);
  };

  // Update status for a word (e.g. 'mastered', 'reviewing', 'learning')
  const updateWordStatus = (id, status) => {
    setWordStatus(prev => ({
      ...prev,
      [id]: status
    }));
  };

  // Batch mark first 150 words
  const markFirst150Mastered = () => {
    const updated = { ...wordStatus };
    for (let i = 1; i <= Math.min(150, words.length); i++) {
      updated[i] = 'mastered';
    }
    setWordStatus(updated);
  };

  // Reset progress confirmation
  const resetAllProgress = () => {
    if (window.confirm("Apakah Anda yakin ingin mereset seluruh riwayat progres belajar di level ini?")) {
      setWordStatus({});
      setExamScores([]);
    }
  };

  // Add exam result
  const recordExamScore = (score, totalQuestions) => {
    const record = {
      id: Date.now(),
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      score,
      total: totalQuestions,
      percent: Math.round((score / totalQuestions) * 100),
      passed: (score / totalQuestions) >= 0.6
    };
    setExamScores(prev => [record, ...prev]);
  };

  // Calculate statistics
  const totalMastered = Object.values(wordStatus).filter(s => s === 'mastered').length;
  const totalReviewing = Object.values(wordStatus).filter(s => s === 'reviewing').length;
  const totalLearning = Object.values(wordStatus).filter(s => s === 'learning').length;

  const getDayStats = (dayNum) => {
    const dayWords = words.filter(w => w.day === dayNum);
    const mastered = dayWords.filter(w => wordStatus[w.id] === 'mastered').length;
    const reviewing = dayWords.filter(w => wordStatus[w.id] === 'reviewing').length;
    return {
      total: dayWords.length,
      mastered,
      reviewing,
      percent: Math.round((mastered / dayWords.length) * 100) || 0
    };
  };

  return (
    <LearningContext.Provider
      value={{
        words,
        daysConfig,
        wordStatus,
        updateWordStatus,
        markFirst150Mastered,
        resetAllProgress,
        currentLevel,
        setCurrentLevel,
        activeDay,
        setActiveDay,
        audioSpeed,
        setAudioSpeed,
        examScores,
        recordExamScore,
        officialHistory,
        recordOfficialExamResult,
        candidateName,
        setCandidateName,
        totalMastered,
        totalReviewing,
        totalLearning,
        getDayStats,
        // Cloud & Google Auth properties
        user,
        authLoading,
        isCloudSyncing,
        lastSyncedAt,
        isSupabaseReady,
        loginWithGoogle,
        logout,
        syncNow,
        refreshSupabaseState
      }}
    >
      {children}
    </LearningContext.Provider>
  );
}

export function useLearning() {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearning must be used within LearningProvider');
  }
  return context;
}

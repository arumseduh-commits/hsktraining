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

  // Track word mastery status for the active level
  const [wordStatus, setWordStatus] = useState(() => {
    try {
      const levelSaved = localStorage.getItem(`${STORAGE_KEY}_status_lvl_${currentLevel}`);
      if (levelSaved) return JSON.parse(levelSaved);

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

  // Supabase Auth States
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Refs to prevent infinite re-render/request loops
  const hasInitialSyncedRef = useRef(false);
  const syncDebounceRef = useRef(null);
  const stateRef = useRef({
    user: null,
    candidateName,
    currentLevel,
    wordStatus,
    examScores,
    officialHistory
  });

  // Keep stateRef fresh without triggering re-renders
  useEffect(() => {
    stateRef.current = {
      user,
      candidateName,
      currentLevel,
      wordStatus,
      examScores,
      officialHistory
    };
  }, [user, candidateName, currentLevel, wordStatus, examScores, officialHistory]);

  // Helper: Collect all level statuses from storage
  const getAllWordStatusesFromStorage = () => {
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
    // inject current in-memory status
    all[stateRef.current.currentLevel] = stateRef.current.wordStatus;
    return all;
  };

  // Silent Background Push to Cloud (Debounced, only on real user modifications)
  const scheduleSilentCloudSync = useCallback(() => {
    const activeUser = stateRef.current.user;
    if (!activeUser) return;

    if (syncDebounceRef.current) clearTimeout(syncDebounceRef.current);

    syncDebounceRef.current = setTimeout(async () => {
      try {
        const payload = {
          candidateName: stateRef.current.candidateName,
          currentLevel: stateRef.current.currentLevel,
          allWordStatuses: getAllWordStatusesFromStorage(),
          examScores: stateRef.current.examScores,
          officialHistory: stateRef.current.officialHistory
        };
        await pushRemoteProgress(activeUser, payload);
      } catch (err) {
        console.error('Silent sync error:', err);
      }
    }, 2500); // Wait 2.5s after user stops clicking
  }, []);

  // Perform Initial Sync Exactly Once upon User Login
  const performInitialCloudSync = async (signedUser) => {
    if (!signedUser || hasInitialSyncedRef.current) return;
    hasInitialSyncedRef.current = true;

    try {
      const { data: cloudData } = await fetchRemoteProgress(signedUser.id);
      
      const localData = {
        candidateName: stateRef.current.candidateName,
        currentLevel: stateRef.current.currentLevel,
        allWordStatuses: getAllWordStatusesFromStorage(),
        officialHistory: stateRef.current.officialHistory,
        examScores: stateRef.current.examScores
      };

      if (cloudData) {
        const merged = mergeLearningProgress(localData, cloudData);

        if (merged.candidateName) {
          setCandidateName(merged.candidateName);
          localStorage.setItem(`${STORAGE_KEY}_candidate_name`, merged.candidateName);
        }
        if (merged.currentLevel) {
          setCurrentLevel(merged.currentLevel);
          localStorage.setItem(`${STORAGE_KEY}_current_level`, merged.currentLevel.toString());
        }
        if (merged.officialHistory) {
          setOfficialHistory(merged.officialHistory);
          localStorage.setItem(`${STORAGE_KEY}_official_exams`, JSON.stringify(merged.officialHistory));
        }
        if (merged.examScores) {
          setExamScores(merged.examScores);
          localStorage.setItem(`${STORAGE_KEY}_exams`, JSON.stringify(merged.examScores));
        }

        // Save merged statuses into storage
        if (merged.allWordStatuses) {
          for (const [lvl, statuses] of Object.entries(merged.allWordStatuses)) {
            try {
              localStorage.setItem(`${STORAGE_KEY}_status_lvl_${lvl}`, JSON.stringify(statuses));
              if (Number(lvl) === 1) {
                localStorage.setItem('hsk1_turbo_progress_v1_status', JSON.stringify(statuses));
              }
            } catch (e) {
              console.error(e);
            }
          }
          const activeLvl = merged.currentLevel || stateRef.current.currentLevel;
          if (merged.allWordStatuses[activeLvl]) {
            setWordStatus(merged.allWordStatuses[activeLvl]);
          }
        }

        // Push parity result once
        await pushRemoteProgress(signedUser, merged);
      } else {
        // New user on cloud
        const googleName = signedUser.user_metadata?.full_name || signedUser.email?.split('@')[0];
        if (googleName && (stateRef.current.candidateName === 'Pembelajar HSK' || !stateRef.current.candidateName)) {
          setCandidateName(googleName);
          localData.candidateName = googleName;
          localStorage.setItem(`${STORAGE_KEY}_candidate_name`, googleName);
        }
        await pushRemoteProgress(signedUser, localData);
      }
    } catch (err) {
      console.error('Initial sync error:', err);
    }
  };

  // Initialize Supabase Auth (Runs ONCE on mount, zero re-trigger loops)
  useEffect(() => {
    const supabase = getSupabase();
    if (!supabase) {
      setAuthLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user);
        performInitialCloudSync(session.user);
      }
      setAuthLoading(false);
    }).catch(err => {
      console.error('Session error:', err);
      setAuthLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUser(session.user);
        if (event === 'SIGNED_IN') {
          performInitialCloudSync(session.user);
        }
      } else {
        setUser(null);
        hasInitialSyncedRef.current = false;
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  // Google Login Trigger
  const loginWithGoogle = async () => {
    const supabase = getSupabase();
    if (!supabase) throw new Error('Supabase client belum siap.');
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
    hasInitialSyncedRef.current = false;
  };

  // Auto-cache & load words when level changes
  useEffect(() => {
    let isCancelled = false;

    loadLevelVocabulary(currentLevel).then(({ words: loadedWords, daysConfig: loadedDays }) => {
      if (!isCancelled) {
        setWords(loadedWords);
        setDaysConfig(loadedDays);
      }
    });

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

  // Save word status to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_status_lvl_${currentLevel}`, JSON.stringify(wordStatus));
      if (currentLevel === 1) {
        localStorage.setItem('hsk1_turbo_progress_v1_status', JSON.stringify(wordStatus));
      }
    } catch (e) {
      console.error(e);
    }
  }, [wordStatus, currentLevel]);

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

  // User Actions (Trigger Silent Debounced Cloud Sync)
  const updateWordStatus = (id, status) => {
    setWordStatus(prev => {
      const updated = { ...prev, [id]: status };
      return updated;
    });
    scheduleSilentCloudSync();
  };

  const markFirst150Mastered = () => {
    const updated = { ...wordStatus };
    for (let i = 1; i <= Math.min(150, words.length); i++) {
      updated[i] = 'mastered';
    }
    setWordStatus(updated);
    scheduleSilentCloudSync();
  };

  const resetAllProgress = () => {
    if (window.confirm("Apakah Anda yakin ingin mereset seluruh riwayat progres belajar di level ini?")) {
      setWordStatus({});
      setExamScores([]);
      scheduleSilentCloudSync();
    }
  };

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
    scheduleSilentCloudSync();
  };

  const recordOfficialExamResult = (resultData) => {
    setOfficialHistory(prev => [resultData, ...prev]);
    scheduleSilentCloudSync();
  };

  const changeCandidateName = (newName) => {
    setCandidateName(newName);
    scheduleSilentCloudSync();
  };

  // Statistics
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
        setCandidateName: changeCandidateName,
        totalMastered,
        totalReviewing,
        totalLearning,
        getDayStats,
        // Auth properties
        user,
        authLoading,
        loginWithGoogle,
        logout
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

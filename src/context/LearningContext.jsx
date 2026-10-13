import React, { createContext, useContext, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { HSK1_WORDS } from '../data/hsk1Words';
import { HSK2_WORDS } from '../data/hsk2Words';
import { loadLevelVocabulary, preCacheAllLevels } from '../services/vocabLoader';
import { getSupabase } from '../services/supabaseClient';
import { fetchRemoteProgress, pushRemoteProgress, mergeLearningProgress } from '../services/cloudSync';
import { getGrammarByLevel } from '../data/grammarPoints';

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

  // Base raw vocabulary loaded for current level
  const [rawWords, setRawWords] = useState(() => {
    return currentLevel === 2 ? HSK2_WORDS : HSK1_WORDS;
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

  // Favorited vocabulary words for the active level
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_favorites_lvl_${currentLevel}`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleFavorite = useCallback((wordId) => {
    let isNowFav = false;
    setFavorites(prev => {
      const next = { ...prev };
      if (next[wordId]) {
        delete next[wordId];
        isNowFav = false;
      } else {
        next[wordId] = true;
        isNowFav = true;
      }
      try {
        localStorage.setItem(`${STORAGE_KEY}_favorites_lvl_${currentLevel}`, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
    return isNowFav;
  }, [currentLevel]);

  const isFavorite = useCallback((wordId) => {
    return Boolean(favorites[wordId]);
  }, [favorites]);

  const favoriteCount = useMemo(() => {
    return Object.keys(favorites).length;
  }, [favorites]);

  const [activeDay, setActiveDay] = useState(1);
  const [audioSpeed, setAudioSpeedState] = useState(() => {
    try {
      const saved = localStorage.getItem('hsk_audio_speed');
      return saved ? parseFloat(saved) : 1.05;
    } catch {
      return 1.05;
    }
  });

  const setAudioSpeed = useCallback((val) => {
    setAudioSpeedState(prev => {
      const next = typeof val === 'function' ? val(prev) : val;
      try {
        localStorage.setItem('hsk_audio_speed', next.toString());
      } catch {}
      return next;
    });
  }, []);

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

  // Periodic & Final Assessment States
  const [periodicAssessments, setPeriodicAssessments] = useState(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_periodic_assessments_lvl_${currentLevel}`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [finalAssessment, setFinalAssessment] = useState(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_final_assessment_lvl_${currentLevel}`);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [candidateName, setCandidateName] = useState(() => {
    return localStorage.getItem(`${STORAGE_KEY}_candidate_name`) || 
           localStorage.getItem('hsk1_turbo_progress_v1_candidate_name') || 
           'Pembelajar HSK';
  });

  const [hasSelectedLevel, setHasSelectedLevelState] = useState(() => {
    try {
      return localStorage.getItem(`${STORAGE_KEY}_has_selected_level`) === 'true';
    } catch {
      return false;
    }
  });

  const setHasSelectedLevel = (val) => {
    setHasSelectedLevelState(val);
    try {
      localStorage.setItem(`${STORAGE_KEY}_has_selected_level`, val ? 'true' : 'false');
    } catch (e) {
      console.error(e);
    }
  };

  // Daily Goal & Streak Tracking (SuperChinese Style)
  const [dailyTarget, setDailyTargetState] = useState(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_daily_target`);
      return saved ? Math.max(5, Math.min(50, Number(saved))) : 15;
    } catch {
      return 15;
    }
  });

  // Dynamic Days Configuration based on user's chosen dailyTarget & Integrated Grammar Clusters
  const daysConfig = useMemo(() => {
    if (!rawWords || rawWords.length === 0) return [];
    const target = Math.max(1, dailyTarget || 15);
    const total = rawWords.length;
    const totalDays = Math.ceil(total / target);
    const grammarList = getGrammarByLevel(currentLevel) || [];

    const gradientPalette = [
      "from-rose-500 to-red-600",
      "from-amber-500 to-orange-600",
      "from-emerald-500 to-teal-600",
      "from-blue-500 to-indigo-600",
      "from-purple-500 to-pink-600",
      "from-cyan-500 to-teal-600",
      "from-violet-500 to-indigo-600",
      "from-fuchsia-500 to-rose-600"
    ];

    const iconPalette = ["Compass", "Home", "Zap", "BookOpen", "Sparkles", "Target", "Rocket", "Award"];

    const result = [];
    for (let d = 1; d <= totalDays; d++) {
      const start = (d - 1) * target + 1;
      const end = Math.min(d * target, total);
      const slice = rawWords.slice((d - 1) * target, end);

      // Analyze dominant category
      const catCounts = {};
      slice.forEach(w => {
        const c = w.cat || 'Kosakata';
        catCounts[c] = (catCounts[c] || 0) + 1;
      });
      let topCat = 'Kosakata Inti';
      let maxCount = 0;
      for (const [c, cnt] of Object.entries(catCounts)) {
        if (cnt > maxCount) {
          maxCount = cnt;
          topCat = c;
        }
      }

      // Proportional grammar mapping: distribute all grammar points across the syllabus days
      const grammarStartIdx = Math.floor(((d - 1) * grammarList.length) / totalDays);
      const grammarEndIdx = Math.min(
        grammarList.length,
        Math.max(grammarStartIdx + 1, Math.floor((d * grammarList.length) / totalDays))
      );
      const dayGrammarPoints = grammarList.slice(grammarStartIdx, grammarEndIdx);

      const colorIndex = (d - 1) % gradientPalette.length;
      const iconIndex = (d - 1) % iconPalette.length;

      const mainGrammar = dayGrammarPoints[0];
      const grammarCleanTitle = mainGrammar ? mainGrammar.title.replace(/^\d+\.\s*/, '') : '';
      const displayTitle = grammarCleanTitle 
        ? `Hari ${d}: ${grammarCleanTitle}`
        : `Hari ${d}: Kosakata ${start} – ${end}`;

      result.push({
        day: d,
        title: displayTitle,
        targetWords: `${start} - ${end}`,
        count: slice.length,
        startIdx: start,
        endIdx: end,
        dominantCategory: topCat,
        badge: mainGrammar ? mainGrammar.category : topCat,
        grammarPoints: dayGrammarPoints,
        grammarTitle: dayGrammarPoints.map(g => g.title.replace(/^\d+\.\s*/, '')).join(' & '),
        grammarFormula: mainGrammar?.formula || '',
        desc: dayGrammarPoints.length > 0 
          ? `Kuasai ${slice.length} kosakata tematik bersama tata bahasa "${dayGrammarPoints.map(g => g.title.replace(/^\d+\.\s*/, '')).join(' & ')}".`
          : `Kuasai ${slice.length} kata dengan fokus kategori ${topCat}, Active Recall, dan audio refleks.`,
        color: gradientPalette[colorIndex],
        icon: iconPalette[iconIndex]
      });
    }
    return result;
  }, [rawWords, dailyTarget, currentLevel]);

  // Words with dynamic day assignment and attached grammar cluster context
  const words = useMemo(() => {
    if (!rawWords) return [];
    const target = Math.max(1, dailyTarget || 15);
    const grammarList = getGrammarByLevel(currentLevel) || [];
    const totalDays = Math.ceil(rawWords.length / target);

    return rawWords.map((w, idx) => {
      const day = Math.floor(idx / target) + 1;
      const grammarStartIdx = Math.floor(((day - 1) * grammarList.length) / totalDays);
      const grammarEndIdx = Math.min(
        grammarList.length,
        Math.max(grammarStartIdx + 1, Math.floor((day * grammarList.length) / totalDays))
      );
      const dayGrammarPoints = grammarList.slice(grammarStartIdx, grammarEndIdx);

      return {
        ...w,
        day,
        dayGrammarPoints,
        dayGrammarFocus: dayGrammarPoints[0]?.title || ''
      };
    });
  }, [rawWords, dailyTarget, currentLevel]);

  // Retrieve grammar points for a specific day
  const getDayGrammar = useCallback((dayNum) => {
    if (!dayNum || dayNum === 'all') return [];
    const dayCfg = daysConfig.find(d => d.day === Number(dayNum));
    return dayCfg?.grammarPoints || [];
  }, [daysConfig]);

  const [dailyLog, setDailyLog] = useState(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_daily_log`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [streakData, setStreakData] = useState(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_streak_data`);
      return saved ? JSON.parse(saved) : { currentStreak: 0, maxStreak: 0, lastCheckInDate: null };
    } catch {
      return { currentStreak: 0, maxStreak: 0, lastCheckInDate: null };
    }
  });

  // Date helper functions
  const getTodayDateStr = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getDayDifference = (dateStr1, dateStr2) => {
    if (!dateStr1 || !dateStr2) return null;
    const d1 = new Date(dateStr1 + 'T00:00:00');
    const d2 = new Date(dateStr2 + 'T00:00:00');
    const diffTime = Math.abs(d2 - d1);
    return Math.round(diffTime / (1000 * 60 * 60 * 24));
  };

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
    officialHistory,
    dailyTarget,
    dailyLog,
    streakData
  });

  // Keep stateRef fresh without triggering re-renders
  useEffect(() => {
    stateRef.current = {
      user,
      candidateName,
      currentLevel,
      wordStatus,
      examScores,
      officialHistory,
      dailyTarget,
      dailyLog,
      streakData
    };
  }, [user, candidateName, currentLevel, wordStatus, examScores, officialHistory, dailyTarget, dailyLog, streakData]);

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
    // inject meta for daily target and streak sync
    all._meta = {
      dailyTarget: stateRef.current.dailyTarget,
      dailyLog: stateRef.current.dailyLog,
      streakData: stateRef.current.streakData
    };
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
          setHasSelectedLevelState(true);
          localStorage.setItem(`${STORAGE_KEY}_has_selected_level`, 'true');
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

        // Restore daily target & streak metadata from cloud if exists
        const cloudMeta = cloudData?.word_status?._meta;
        if (cloudMeta) {
          if (cloudMeta.dailyTarget) {
            setDailyTargetState(cloudMeta.dailyTarget);
            localStorage.setItem(`${STORAGE_KEY}_daily_target`, cloudMeta.dailyTarget.toString());
          }
          if (cloudMeta.dailyLog) {
            setDailyLog(prev => {
              const mergedLogs = { ...prev, ...cloudMeta.dailyLog };
              localStorage.setItem(`${STORAGE_KEY}_daily_log`, JSON.stringify(mergedLogs));
              return mergedLogs;
            });
          }
          if (cloudMeta.streakData) {
            setStreakData(prev => {
              const mergedStreak = {
                currentStreak: Math.max(prev.currentStreak || 0, cloudMeta.streakData.currentStreak || 0),
                maxStreak: Math.max(prev.maxStreak || 0, cloudMeta.streakData.maxStreak || 0),
                lastCheckInDate: cloudMeta.streakData.lastCheckInDate || prev.lastCheckInDate
              };
              localStorage.setItem(`${STORAGE_KEY}_streak_data`, JSON.stringify(mergedStreak));
              return mergedStreak;
            });
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

    loadLevelVocabulary(currentLevel).then(({ words: loadedWords }) => {
      if (!isCancelled) {
        setRawWords(loadedWords);
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
      const savedFavs = localStorage.getItem(`${STORAGE_KEY}_favorites_lvl_${currentLevel}`);
      setFavorites(savedFavs ? JSON.parse(savedFavs) : {});
    } catch {
      setFavorites({});
    }

    try {
      const savedPA = localStorage.getItem(`${STORAGE_KEY}_periodic_assessments_lvl_${currentLevel}`);
      setPeriodicAssessments(savedPA ? JSON.parse(savedPA) : {});
    } catch {
      setPeriodicAssessments({});
    }

    try {
      const savedFA = localStorage.getItem(`${STORAGE_KEY}_final_assessment_lvl_${currentLevel}`);
      setFinalAssessment(savedFA ? JSON.parse(savedFA) : null);
    } catch {
      setFinalAssessment(null);
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

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_periodic_assessments_lvl_${currentLevel}`, JSON.stringify(periodicAssessments));
    } catch (e) {
      console.error(e);
    }
  }, [periodicAssessments, currentLevel]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_final_assessment_lvl_${currentLevel}`, JSON.stringify(finalAssessment));
    } catch (e) {
      console.error(e);
    }
  }, [finalAssessment, currentLevel]);

  // --- DAILY GOAL & STREAK LOGIC (SuperChinese Style) ---
  const todayStr = getTodayDateStr();
  const todayEntry = dailyLog[todayStr] || { wordIds: [], checkedIn: false };
  const todayLearnedCount = todayEntry.wordIds ? todayEntry.wordIds.length : 0;
  const todayTargetReached = todayLearnedCount >= dailyTarget;

  // Active streak calculation (with 1-day grace period)
  const activeStreak = (() => {
    if (!streakData.lastCheckInDate) return 0;
    const diff = getDayDifference(streakData.lastCheckInDate, todayStr);
    if (diff === null) return 0;
    // 0 = checked in today, 1 = checked in yesterday, 2 = 1-day grace period active
    if (diff <= 2) {
      return streakData.currentStreak || 0;
    }
    return 0;
  })();

  const isGracePeriodActive = (() => {
    if (!streakData.lastCheckInDate) return false;
    const diff = getDayDifference(streakData.lastCheckInDate, todayStr);
    return diff === 2 && !todayEntry.checkedIn;
  })();

  // Record word practiced today
  const recordWordLearnedToday = useCallback((wordId) => {
    if (!wordId) return;
    const today = getTodayDateStr();

    setDailyLog(prevLog => {
      const current = prevLog[today] || { wordIds: [], checkedIn: false };
      const currentSet = new Set(current.wordIds || []);
      currentSet.add(wordId);
      const newWordIds = Array.from(currentSet);
      const newCount = newWordIds.length;
      const targetReached = newCount >= stateRef.current.dailyTarget;

      const checkedIn = current.checkedIn || targetReached;

      // When newly achieving target today: auto check-in & increment streak
      if (!current.checkedIn && targetReached) {
        setStreakData(prevStreak => {
          let updatedStreak = prevStreak.currentStreak || 0;
          const lastDate = prevStreak.lastCheckInDate;

          if (!lastDate) {
            updatedStreak = 1;
          } else {
            const diff = getDayDifference(lastDate, today);
            if (diff === 0) {
              updatedStreak = prevStreak.currentStreak || 1;
            } else if (diff === 1 || diff === 2) {
              // 1 = yesterday, 2 = 1-day grace period! Streak preserved
              updatedStreak = (prevStreak.currentStreak || 0) + 1;
            } else {
              // Grace period exceeded, resets to 1
              updatedStreak = 1;
            }
          }

          const newMax = Math.max(prevStreak.maxStreak || 0, updatedStreak);
          const newStreakObj = {
            currentStreak: updatedStreak,
            maxStreak: newMax,
            lastCheckInDate: today
          };

          try {
            localStorage.setItem(`${STORAGE_KEY}_streak_data`, JSON.stringify(newStreakObj));
          } catch (e) {
            console.error(e);
          }
          return newStreakObj;
        });
      }

      const updatedLog = {
        ...prevLog,
        [today]: {
          wordIds: newWordIds,
          checkedIn
        }
      };

      try {
        localStorage.setItem(`${STORAGE_KEY}_daily_log`, JSON.stringify(updatedLog));
      } catch (e) {
        console.error(e);
      }

      return updatedLog;
    });

    scheduleSilentCloudSync();
  }, [scheduleSilentCloudSync]);

  // Set custom daily target (5 to 50 words)
  const setCustomDailyTarget = useCallback((newTarget) => {
    const clamped = Math.max(5, Math.min(50, Number(newTarget) || 15));
    setDailyTargetState(clamped);
    try {
      localStorage.setItem(`${STORAGE_KEY}_daily_target`, clamped.toString());
    } catch (e) {
      console.error(e);
    }

    // Check if current count now satisfies the new target
    const today = getTodayDateStr();
    setDailyLog(prevLog => {
      const current = prevLog[today];
      if (current && (current.wordIds?.length || 0) >= clamped && !current.checkedIn) {
        const updated = {
          ...prevLog,
          [today]: { ...current, checkedIn: true }
        };
        try {
          localStorage.setItem(`${STORAGE_KEY}_daily_log`, JSON.stringify(updated));
        } catch (e) {
          console.error(e);
        }

        setStreakData(prevStreak => {
          let updatedStreak = prevStreak.currentStreak || 0;
          const lastDate = prevStreak.lastCheckInDate;
          if (!lastDate) {
            updatedStreak = 1;
          } else {
            const diff = getDayDifference(lastDate, today);
            if (diff === 0) {
              updatedStreak = prevStreak.currentStreak || 1;
            } else if (diff === 1 || diff === 2) {
              updatedStreak = (prevStreak.currentStreak || 0) + 1;
            } else {
              updatedStreak = 1;
            }
          }
          const newStreakObj = {
            currentStreak: updatedStreak,
            maxStreak: Math.max(prevStreak.maxStreak || 0, updatedStreak),
            lastCheckInDate: today
          };
          try {
            localStorage.setItem(`${STORAGE_KEY}_streak_data`, JSON.stringify(newStreakObj));
          } catch (e) {
            console.error(e);
          }
          return newStreakObj;
        });

        return updated;
      }
      return prevLog;
    });

    scheduleSilentCloudSync();
  }, [scheduleSilentCloudSync]);

  // Get current week's 7 days for the visual check-in strip
  const getWeeklyDays = useCallback(() => {
    const now = new Date();
    const currentDayOfWeek = now.getDay(); // 0: Sun, 1: Mon...
    const distanceToMonday = (currentDayOfWeek + 6) % 7;
    
    const monday = new Date(now);
    monday.setDate(now.getDate() - distanceToMonday);
    
    const week = [];
    const dayNames = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
    const today = getTodayDateStr();

    for (let i = 0; i < 7; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, '0');
      const dd = String(d.getDate()).padStart(2, '0');
      const dateStr = `${yyyy}-${mm}-${dd}`;
      const logEntry = dailyLog[dateStr];
      const count = logEntry?.wordIds ? logEntry.wordIds.length : 0;
      const isChecked = !!logEntry?.checkedIn;

      week.push({
        label: dayNames[i],
        dateStr,
        dayNumber: d.getDate(),
        isToday: dateStr === today,
        isPast: dateStr < today,
        isFuture: dateStr > today,
        checkedIn: isChecked,
        count
      });
    }
    return week;
  }, [dailyLog]);

  // User Actions (Trigger Silent Debounced Cloud Sync)
  const updateWordStatus = (id, status) => {
    setWordStatus(prev => {
      const updated = { ...prev, [id]: status };
      return updated;
    });
    recordWordLearnedToday(id);
    scheduleSilentCloudSync();
  };

  const resetAllProgress = () => {
    setWordStatus({});
    setExamScores([]);
    setFavorites({});
    setPeriodicAssessments({});
    setFinalAssessment(null);
    try {
      localStorage.removeItem(`${STORAGE_KEY}_favorites_lvl_${currentLevel}`);
      localStorage.removeItem(`${STORAGE_KEY}_periodic_assessments_lvl_${currentLevel}`);
      localStorage.removeItem(`${STORAGE_KEY}_final_assessment_lvl_${currentLevel}`);
    } catch (e) {
      console.error(e);
    }
    scheduleSilentCloudSync();
  };

  const recordPeriodicAssessment = (checkpointId, resultData) => {
    setPeriodicAssessments(prev => {
      const existing = prev[checkpointId];
      const wasPassed = Boolean(existing?.passed);
      const isPassed = Boolean(resultData.passed) || wasPassed;
      const bestPercent = Math.max(existing?.percent || 0, resultData.percent || 0);

      const record = {
        ...resultData,
        percent: bestPercent,
        passed: isPassed,
        date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
      };
      return {
        ...prev,
        [checkpointId]: record
      };
    });
    scheduleSilentCloudSync();
  };

  const recordFinalAssessment = (resultData) => {
    setFinalAssessment(prev => {
      const wasPassed = Boolean(prev?.passed);
      const isPassed = Boolean(resultData.passed) || wasPassed;
      const bestPercent = Math.max(prev?.percent || 0, resultData.percent || 0);

      return {
        ...resultData,
        percent: bestPercent,
        passed: isPassed,
        date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
      };
    });
    scheduleSilentCloudSync();
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
      percent: dayWords.length > 0 ? Math.round((mastered / dayWords.length) * 100) : 0
    };
  };

  // Dynamic current active day: first day where mastery < 100%
  const currentActiveDay = useMemo(() => {
    if (!daysConfig || daysConfig.length === 0) return 1;
    for (const d of daysConfig) {
      const dayWords = words.filter(w => w.day === d.day);
      if (dayWords.length === 0) continue;
      const mastered = dayWords.filter(w => wordStatus[w.id] === 'mastered').length;
      if (mastered < dayWords.length) {
        return d.day;
      }
    }
    return 1;
  }, [daysConfig, words, wordStatus]);

  // Dynamic Periodic Checkpoints based on daysConfig
  const periodicCheckpoints = useMemo(() => {
    if (!daysConfig || daysConfig.length === 0) return [];
    const totalDays = daysConfig.length;
    const list = [];

    const levelWordsCount = rawWords ? rawWords.length : 500;
    const halfCount = Math.round(levelWordsCount / 2);

    if (totalDays <= 4) {
      list.push({
        id: 'checkpoint_day_2',
        day: 2,
        title: 'Evaluasi Berkala 1 (Hari 1 – 2)',
        desc: `Uji pengingatan kumulatif ~${halfCount} kosakata fondasi awal HSK ${currentLevel || 1}.`,
        coverageStartDay: 1,
        coverageEndDay: 2,
        questionCount: 15
      });
      list.push({
        id: 'checkpoint_day_4',
        day: 4,
        title: 'Evaluasi Berkala 2 (Hari 1 – 4)',
        desc: `Uji pengingatan kumulatif seluruh ${levelWordsCount} kosakata HSK ${currentLevel || 1}.`,
        coverageStartDay: 1,
        coverageEndDay: 4,
        questionCount: 20
      });
    } else {
      const step = totalDays <= 8 ? 2 : totalDays <= 15 ? 3 : 5;
      let count = 1;
      for (let d = step; d <= totalDays; d += step) {
        list.push({
          id: `checkpoint_day_${d}`,
          day: d,
          title: `Evaluasi Berkala ${count} (Hari 1 – ${d})`,
          desc: `Uji pengingatan kumulatif seluruh kosakata dari Hari 1 hingga Hari ${d} untuk HSK ${currentLevel || 1}.`,
          coverageStartDay: 1,
          coverageEndDay: d,
          questionCount: 15
        });
        count++;
      }
    }
    return list;
  }, [daysConfig, rawWords, currentLevel]);

  const completedCheckpointsCount = useMemo(() => {
    return periodicCheckpoints.filter(cp => periodicAssessments[cp.id]?.passed).length;
  }, [periodicCheckpoints, periodicAssessments]);

  const requiredCheckpointsCount = useMemo(() => {
    return Math.min(2, periodicCheckpoints.length);
  }, [periodicCheckpoints]);

  const isFinalAssessmentUnlocked = useMemo(() => {
    if (periodicCheckpoints.length === 0) return true;
    return completedCheckpointsCount >= requiredCheckpointsCount;
  }, [completedCheckpointsCount, requiredCheckpointsCount, periodicCheckpoints.length]);

  const isFinalAssessmentPassed = useMemo(() => {
    return Boolean(finalAssessment?.passed);
  }, [finalAssessment]);

  const isOfficialExamUnlocked = useMemo(() => {
    if (currentLevel > 1) return true;
    return isFinalAssessmentPassed;
  }, [currentLevel, isFinalAssessmentPassed]);

  return (
    <LearningContext.Provider
      value={{
        words,
        daysConfig,
        currentActiveDay,
        favorites,
        toggleFavorite,
        isFavorite,
        favoriteCount,
        wordStatus,
        updateWordStatus,
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
        getDayGrammar,
        // Periodic & Final Assessment exports
        periodicAssessments,
        finalAssessment,
        recordPeriodicAssessment,
        recordFinalAssessment,
        periodicCheckpoints,
        completedCheckpointsCount,
        requiredCheckpointsCount,
        isFinalAssessmentUnlocked,
        isFinalAssessmentPassed,
        isOfficialExamUnlocked,
        // Auth properties
        user,
        authLoading,
        loginWithGoogle,
        logout,
        // Onboarding Level Selection
        hasSelectedLevel,
        setHasSelectedLevel,
        // Daily Target & Streak Properties
        dailyTarget,
        setCustomDailyTarget,
        todayLearnedCount,
        todayTargetReached,
        activeStreak,
        isGracePeriodActive,
        streakData,
        dailyLog,
        getWeeklyDays,
        recordWordLearnedToday
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

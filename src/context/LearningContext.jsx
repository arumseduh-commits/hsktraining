import React, { createContext, useContext, useState, useEffect } from 'react';
import { HSK1_WORDS, DAYS_CONFIG as HSK1_DAYS } from '../data/hsk1Words';
import { HSK2_WORDS, DAYS_CONFIG_HSK2 } from '../data/hsk2Words';
import { loadLevelVocabulary, preCacheAllLevels } from '../services/vocabLoader';

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

  // Save word status to localStorage for the active level
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
        getDayStats
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

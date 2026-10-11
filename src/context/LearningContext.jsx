import React, { createContext, useContext, useState, useEffect } from 'react';
import { HSK1_WORDS } from '../data/hsk1Words';

const LearningContext = createContext();

const STORAGE_KEY = 'hsk1_turbo_progress_v1';

export function LearningProvider({ children }) {
  const [wordStatus, setWordStatus] = useState(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_status`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [currentLevel, setCurrentLevel] = useState(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_current_level`);
      return saved ? Number(saved) : 1;
    } catch {
      return 1;
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
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [candidateName, setCandidateName] = useState(() => {
    return localStorage.getItem(`${STORAGE_KEY}_candidate_name`) || 'Pembelajar HSK';
  });

  // Save to local storage on changes
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_current_level`, currentLevel.toString());
    } catch (e) {
      console.error(e);
    }
  }, [currentLevel]);

  // Save to local storage on changes
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_status`, JSON.stringify(wordStatus));
    } catch (e) {
      console.error(e);
    }
  }, [wordStatus]);

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
    } catch (e) {
      console.error(e);
    }
  }, [officialHistory]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_candidate_name`, candidateName);
    } catch (e) {
      console.error(e);
    }
  }, [candidateName]);

  const recordOfficialExamResult = (resultData) => {
    setOfficialHistory(prev => [resultData, ...prev]);
  };

  // Update status for a word (e.g. 'mastered', 'reviewing', 'unseen')
  const updateWordStatus = (id, status) => {
    setWordStatus(prev => ({
      ...prev,
      [id]: status
    }));
  };

  // Batch mark first 150 words (since user already mastered 150 words in 2 days!)
  const markFirst150Mastered = () => {
    const updated = { ...wordStatus };
    for (let i = 1; i <= 150; i++) {
      updated[i] = 'mastered';
    }
    setWordStatus(updated);
  };

  // Reset progress confirmation
  const resetAllProgress = () => {
    if (window.confirm("Apakah Anda yakin ingin mereset seluruh riwayat progres belajar?")) {
      setWordStatus({});
      setExamScores([]);
    }
  };

  // Add exam result
  const recordExamScore = (score, totalQuestions, details) => {
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
    const dayWords = HSK1_WORDS.filter(w => w.day === dayNum);
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
        words: HSK1_WORDS,
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

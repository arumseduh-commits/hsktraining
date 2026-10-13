import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Volume2, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ArrowRight, 
  Award,
  Check,
  Zap,
  Puzzle,
  RotateCw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { speakChinese } from '../utils/speech';
import { useLearning } from '../context/LearningContext';
import { getSentenceDrills } from '../data/sentenceDrills';

// Cute Panda Mascot Component matching user screenshots
function PandaMascot() {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
      <div className="w-11 h-11 rounded-2xl bg-amber-50/90 border-2 border-emerald-900/20 flex items-center justify-center shadow-xs">
        <span className="text-2xl select-none" role="img" aria-label="panda">🐼</span>
      </div>
      <div className="absolute -top-1 -right-0.5 text-xs select-none">🌸</div>
    </div>
  );
}

export default function DayHanziQuizModal({ 
  isOpen, 
  onClose, 
  day, 
  dayWords = [],
  initialMode = 'full',
  onCompleteQuiz
}) {
  const { audioSpeed, updateWordStatus, words, currentLevel } = useLearning();

  const [quizMode, setQuizMode] = useState(initialMode || 'full'); // 'full' (all words, e.g. 50 Qs) or 'interactive' (6 mixed Qs)
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  // States for choice-based questions (full_word_test, listening_phrase, hanzi_meaning)
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [showListeningHint, setShowListeningHint] = useState(false);

  // States for matching pairs question
  const [matchedIds, setMatchedIds] = useState(new Set());
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [selectedRight, setSelectedRight] = useState(null);
  const [mismatchIds, setMismatchIds] = useState([]);
  const mismatchTimeoutRef = useRef(null);

  // States for sentence building question
  const [availableTokens, setAvailableTokens] = useState([]);
  const [selectedTokens, setSelectedTokens] = useState([]);

  // Helper to get 3 unique distractors with different meanings
  const getDistractors = (targetWord, count = 3) => {
    const candidates = words.filter(w => w.id !== targetWord.id && w.arti !== targetWord.arti);
    return candidates.sort(() => Math.random() - 0.5).slice(0, count);
  };

  // Main question generator based on selected mode
  const generateQuestions = (targetMode) => {
    const pool = (dayWords && dayWords.length > 0) ? [...dayWords] : [...words];

    if (targetMode === 'full') {
      // MODE FULL: Test ALL words in batch (e.g. 50 words -> 50 questions!)
      // Shuffles the words order, and each question has 4 randomized options
      const shuffledBatch = [...pool].sort(() => Math.random() - 0.5);

      const fullQuestions = shuffledBatch.map((targetWord, idx) => {
        const distractors = getDistractors(targetWord, 3);
        const options = [targetWord, ...distractors].sort(() => Math.random() - 0.5);

        return {
          id: idx + 1,
          type: 'full_word_test',
          title: `Uji Kosakata #${idx + 1}`,
          prompt: 'Pilih arti bahasa Indonesia yang tepat:',
          targetWord,
          options,
          correctId: targetWord.id,
          correctArti: targetWord.arti
        };
      });

      setQuestions(fullQuestions);
      setCurrentIndex(0);
      setScore(0);
      setIsFinished(false);
      setUserAnswers([]);
      initQuestionState(fullQuestions[0]);
    } else {
      // MODE INTERACTIVE: 6 varied questions (Matching, Hanzi meaning, Sentence builder, Listening)
      const shuffledPool = [...pool].sort(() => Math.random() - 0.5);
      const generated = [];

      let wordPointer = 0;
      const nextWord = () => {
        const w = shuffledPool[wordPointer % shuffledPool.length];
        wordPointer++;
        return w;
      };

      // 1. Q1: Pasangkan kata dengan maknanya (Matching 3 pairs)
      const matchGroup1 = [nextWord(), nextWord(), nextWord()];
      const uniqueMatch1 = Array.from(new Map(matchGroup1.map(w => [w.id, w])).values());
      while (uniqueMatch1.length < 3 && words.length >= 3) {
        const extra = words[Math.floor(Math.random() * words.length)];
        if (!uniqueMatch1.some(w => w.id === extra.id)) {
          uniqueMatch1.push(extra);
        }
      }
      const left1 = uniqueMatch1.map(w => ({ id: w.id, hanzi: w.hanzi, pinyin: w.pinyin, word: w }));
      const right1 = [...uniqueMatch1].sort(() => Math.random() - 0.5).map(w => ({ id: w.id, arti: w.arti, word: w }));
      generated.push({
        id: 1,
        type: 'match_pairs',
        title: 'Pasangkan kata dengan maknanya',
        subtitle: 'Ketuk kata Mandarin dan artinya yang sesuai',
        leftCards: left1,
        rightCards: right1,
        totalPairs: uniqueMatch1.length
      });

      // 2. Q2: Tebak arti Hanzi (Strictly visual - NO AUDIO ALLOWED!)
      const target2 = nextWord();
      const distractors2 = getDistractors(target2, 3);
      const options2 = [target2, ...distractors2].sort(() => Math.random() - 0.5);
      generated.push({
        id: 2,
        type: 'hanzi_meaning',
        title: 'Apa arti karakter Hanzi ini?',
        targetWord: target2,
        options: options2,
        correctId: target2.id,
        correctArti: target2.arti
      });

      // 3. Q3: Susun Kalimat (Sentence Builder)
      const drills = getSentenceDrills(currentLevel || 1);
      const matchedDrill = drills.find(d => pool.some(w => d.targetHz.includes(w.hanzi))) || drills[Math.floor(Math.random() * drills.length)];
      generated.push({
        id: 3,
        type: 'sentence_builder',
        title: 'Susun kalimat yang benar',
        subtitle: matchedDrill.meaningId,
        targetHz: matchedDrill.targetHz,
        targetPy: matchedDrill.targetPy,
        meaningId: matchedDrill.meaningId,
        tokens: matchedDrill.tokens
      });

      // 4. Q4: 他说什么？ (Listening Audio Comprehension)
      const target4 = nextWord();
      const hasExample = target4.contoh && target4.contoh.length > 0;
      const audioText4 = hasExample ? target4.contoh : target4.hanzi;
      const distractorWords4 = getDistractors(target4, 2);
      
      const options4 = [
        {
          id: target4.id,
          hanzi: hasExample ? target4.contoh : target4.hanzi,
          pinyin: hasExample ? target4.contohPinyin : target4.pinyin,
          isCorrect: true
        },
        ...distractorWords4.map(dw => ({
          id: dw.id,
          hanzi: (hasExample && dw.contoh) ? dw.contoh : dw.hanzi,
          pinyin: (hasExample && dw.contohPinyin) ? dw.contohPinyin : dw.pinyin,
          isCorrect: false
        }))
      ].sort(() => Math.random() - 0.5);

      generated.push({
        id: 4,
        type: 'listening_phrase',
        title: '他说什么？',
        subtitle: 'Tā shuō shénme?',
        audioText: audioText4,
        targetWord: target4,
        options: options4,
        correctId: target4.id
      });

      // 5. Q5: Tebak arti Hanzi (Visual Recognition - Round 2 - NO AUDIO!)
      const target5 = nextWord();
      const distractors5 = getDistractors(target5, 3);
      const options5 = [target5, ...distractors5].sort(() => Math.random() - 0.5);
      generated.push({
        id: 5,
        type: 'hanzi_meaning',
        title: 'Apa arti karakter Hanzi ini?',
        targetWord: target5,
        options: options5,
        correctId: target5.id,
        correctArti: target5.arti
      });

      // 6. Q6: Pasangkan kata dengan maknanya (Babak 2 Penguatan)
      const matchGroup2 = [nextWord(), nextWord(), nextWord()];
      const uniqueMatch2 = Array.from(new Map(matchGroup2.map(w => [w.id, w])).values());
      while (uniqueMatch2.length < 3 && words.length >= 3) {
        const extra = words[Math.floor(Math.random() * words.length)];
        if (!uniqueMatch2.some(w => w.id === extra.id)) {
          uniqueMatch2.push(extra);
        }
      }
      const left2 = uniqueMatch2.map(w => ({ id: w.id, hanzi: w.hanzi, pinyin: w.pinyin, word: w }));
      const right2 = [...uniqueMatch2].sort(() => Math.random() - 0.5).map(w => ({ id: w.id, arti: w.arti, word: w }));
      generated.push({
        id: 6,
        type: 'match_pairs',
        title: 'Pasangkan kata dengan maknanya',
        subtitle: 'Ketuk kata Mandarin dan artinya yang sesuai',
        leftCards: left2,
        rightCards: right2,
        totalPairs: uniqueMatch2.length
      });

      setQuestions(generated);
      setCurrentIndex(0);
      setScore(0);
      setIsFinished(false);
      setUserAnswers([]);
      initQuestionState(generated[0]);
    }
  };

  // Sync mode and generate questions on open or mode switch
  useEffect(() => {
    if (!isOpen) return;
    const modeToUse = initialMode || 'full';
    setQuizMode(modeToUse);
    generateQuestions(modeToUse);
  }, [isOpen, initialMode, dayWords, words]);

  // Setup state for the specific question
  const initQuestionState = (q) => {
    setSelectedOption(null);
    setIsAnswered(false);
    setIsPlayingAudio(false);
    setShowListeningHint(false);
    setMatchedIds(new Set());
    setSelectedLeft(null);
    setSelectedRight(null);
    setMismatchIds([]);
    if (mismatchTimeoutRef.current) clearTimeout(mismatchTimeoutRef.current);

    if (q && q.type === 'sentence_builder') {
      const tokensWithId = q.tokens
        .map((text, idx) => ({ id: `${idx}-${text}`, text }))
        .sort(() => Math.random() - 0.5);
      setAvailableTokens(tokensWithId);
      setSelectedTokens([]);
    } else {
      setAvailableTokens([]);
      setSelectedTokens([]);
    }
  };

  const switchMode = (newMode) => {
    if (newMode === quizMode) return;
    setQuizMode(newMode);
    generateQuestions(newMode);
  };

  if (!isOpen) return null;

  const currentQ = questions[currentIndex];

  // Play audio for listening questions (ONLY for listening_phrase, NEVER for hanzi recognition!)
  const handlePlayAudio = (textToPlay) => {
    if (!textToPlay) return;
    setIsPlayingAudio(true);
    speakChinese(textToPlay, audioSpeed, () => {
      setIsPlayingAudio(false);
    });
  };

  // Logic for Matching Pairs Question (Plays pronunciation on click!)
  const handleSelectLeft = (item) => {
    if (matchedIds.has(item.id)) return;
    setSelectedLeft(item.id);

    // Prompt audio pronunciation of the tapped Hanzi card!
    speakChinese(item.hanzi, audioSpeed);

    if (selectedRight !== null) {
      checkPair(item.id, selectedRight);
    }
  };

  const handleSelectRight = (item) => {
    if (matchedIds.has(item.id)) return;
    setSelectedRight(item.id);
    if (selectedLeft !== null) {
      checkPair(selectedLeft, item.id);
    }
  };

  const checkPair = (leftId, rightId) => {
    if (leftId === rightId) {
      // Success match!
      const newMatched = new Set(matchedIds);
      newMatched.add(leftId);
      setMatchedIds(newMatched);
      setSelectedLeft(null);
      setSelectedRight(null);
      updateWordStatus(leftId, 'mastered');

      // Speak pronunciation confirmation on match!
      const matchedItem = currentQ.leftCards?.find(c => c.id === leftId);
      if (matchedItem) {
        speakChinese(matchedItem.hanzi, audioSpeed);
      }

      // If all matched, question complete!
      if (newMatched.size === currentQ.totalPairs) {
        setIsAnswered(true);
        setScore(s => s + 1);
        setUserAnswers(prev => [
          ...prev,
          {
            type: 'match_pairs',
            isCorrect: true,
            summary: `Mencocokkan ${currentQ.totalPairs} pasangan kata dengan tepat.`
          }
        ]);
      }
    } else {
      // Mismatch
      setMismatchIds([leftId, rightId]);
      if (mismatchTimeoutRef.current) clearTimeout(mismatchTimeoutRef.current);
      mismatchTimeoutRef.current = setTimeout(() => {
        setSelectedLeft(null);
        setSelectedRight(null);
        setMismatchIds([]);
      }, 600);
    }
  };

  // Logic for Sentence Builder Question
  const handleSelectToken = (token) => {
    if (isAnswered) return;
    setAvailableTokens(prev => prev.filter(t => t.id !== token.id));
    setSelectedTokens(prev => [...prev, token]);
  };

  const handleRemoveToken = (token) => {
    if (isAnswered) return;
    setSelectedTokens(prev => prev.filter(t => t.id !== token.id));
    setAvailableTokens(prev => [...prev, token]);
  };

  const handleResetTokens = () => {
    if (isAnswered || !currentQ || currentQ.type !== 'sentence_builder') return;
    const tokensWithId = currentQ.tokens
      .map((text, idx) => ({ id: `${idx}-${text}`, text }))
      .sort(() => Math.random() - 0.5);
    setAvailableTokens(tokensWithId);
    setSelectedTokens([]);
  };

  const handleCheckSentence = () => {
    if (isAnswered || !currentQ || currentQ.type !== 'sentence_builder') return;
    setIsAnswered(true);

    const builtText = selectedTokens.map(t => t.text).join('');
    const normBuilt = builtText.replace(/[。？！，、\s]/g, '');
    const normTarget = currentQ.targetHz.replace(/[。？！，、\s]/g, '');
    const isCorrect = (builtText === currentQ.targetHz) || (normBuilt === normTarget);

    if (isCorrect) {
      setScore(s => s + 1);
      speakChinese(currentQ.targetHz, audioSpeed);
      confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
    }

    setUserAnswers(prev => [
      ...prev,
      {
        question: currentQ,
        builtText,
        isCorrect
      }
    ]);
  };

  // Logic for multiple-choice questions (full_word_test, listening_phrase, hanzi_meaning)
  const handleSelectChoice = (option) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    let isCorrect = false;
    let targetWord = currentQ.targetWord;

    if (currentQ.type === 'full_word_test' || currentQ.type === 'hanzi_meaning') {
      isCorrect = option.id === currentQ.correctId;
    } else if (currentQ.type === 'listening_phrase') {
      isCorrect = option.id === currentQ.correctId;
    }

    if (isCorrect) {
      setScore(s => s + 1);
      if (targetWord) updateWordStatus(targetWord.id, 'mastered');
    } else {
      if (targetWord) updateWordStatus(targetWord.id, 'reviewing');
    }

    setUserAnswers(prev => [
      ...prev,
      {
        question: currentQ,
        selectedOption: option,
        isCorrect
      }
    ]);
  };

  // Move to next question or finalize
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      initQuestionState(questions[nextIdx]);
    } else {
      setIsFinished(true);
      const percent = Math.round((score / questions.length) * 100);
      if (percent >= 70) {
        confetti({
          particleCount: 75,
          spread: 75,
          origin: { y: 0.6 }
        });
      }
      if (onCompleteQuiz) {
        onCompleteQuiz(score, questions.length);
      }
    }
  };

  const percentScore = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
  const totalCount = dayWords?.length || words.length;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-md animate-fade-in">
      <div 
        className="w-full max-w-lg bg-[#fbf9f4] rounded-3xl shadow-2xl border border-[#2d4f43]/20 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header & Mode Switcher */}
        <div className="pt-4 px-5 pb-2 bg-[#fbf9f4]">
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
              title="Tutup Tes"
            >
              <X size={20} />
            </button>

            {/* Mode Switcher Pill */}
            <div className="flex items-center gap-1 bg-[#e8e2d5]/60 p-1 rounded-xl">
              <button
                onClick={() => switchMode('full')}
                className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                  quizMode === 'full' 
                    ? 'bg-[#2d5747] text-white shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                🏆 Uji Semua ({totalCount} Kata)
              </button>

              <button
                onClick={() => switchMode('interactive')}
                className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                  quizMode === 'interactive' 
                    ? 'bg-[#2d5747] text-white shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ⚡ Kuis Kilat (6 Soal)
              </button>
            </div>

            <div className="w-6" />
          </div>

          {/* Continuous Green Progress Bar */}
          {!isFinished && questions.length > 0 && (
            <div className="h-2 w-full bg-[#e8e2d5] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#3d7055] rounded-full transition-all duration-400"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          )}
        </div>

        {/* Main Content Body */}
        <div className="px-5 py-4 overflow-y-auto space-y-4 flex-1">
          {!isFinished && currentQ ? (
            <div className="space-y-4 animate-fade-in">
              {/* Progress Count Header */}
              <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                <span className="text-[#2d4f43]">
                  {quizMode === 'full' ? `Soal ${currentIndex + 1} dari ${questions.length}` : 'Ringkasan singkat'}
                </span>
                
                {quizMode === 'interactive' ? (
                  <div className="flex items-center gap-1.5">
                    {questions.map((_, i) => (
                      <div 
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i < currentIndex 
                            ? 'w-6 bg-[#2d5747]' 
                            : i === currentIndex 
                            ? 'w-8 bg-[#2d5747]' 
                            : 'w-6 bg-[#e0dacf]'
                        }`}
                      />
                    ))}
                    <span className="ml-1 text-[11px] font-mono text-slate-400 font-bold">
                      {currentIndex + 1}/{questions.length}
                    </span>
                  </div>
                ) : (
                  <span className="text-[11px] font-mono text-slate-400 font-bold">
                    {Math.round(((currentIndex + 1) / questions.length) * 100)}% Selesai
                  </span>
                )}
              </div>

              {/* Title & Cute Panda Header */}
              <div className="flex items-center justify-between gap-3 pt-1">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#1e3d30] leading-tight">
                    {currentQ.title}
                  </h3>
                  {currentQ.subtitle && (
                    <p className="text-xs font-mono text-[#3d7055] font-semibold mt-0.5">
                      {currentQ.subtitle}
                    </p>
                  )}
                </div>
                <PandaMascot />
              </div>

              {/* ---------------- MODE FULL: UJI SELURUH KATA (50 SOAL DENGAN OPSI ACAK) ---------------- */}
              {currentQ.type === 'full_word_test' && (
                <div className="space-y-4 pt-1">
                  {/* Big Hanzi Center Card (NO SOUND SPOILER!) */}
                  <div className="p-6 sm:p-7 rounded-2xl border-2 border-[#2d4f43]/30 bg-white text-center shadow-[0_3px_0_0_#2d4f43]/15 max-w-xs mx-auto space-y-1">
                    <span className="text-5xl sm:text-6xl font-black font-hanzi text-slate-900 block tracking-wider">
                      {currentQ.targetWord.hanzi}
                    </span>
                    {isAnswered && (
                      <span className="text-sm font-mono font-bold text-rose-500 block animate-fade-in">
                        {currentQ.targetWord.pinyin}
                      </span>
                    )}
                  </div>

                  {/* Question Prompt */}
                  <p className="text-xs font-bold text-[#2d5747] text-center">
                    {currentQ.prompt}
                  </p>

                  {/* 4 Randomized Options */}
                  <div className="space-y-2.5">
                    {currentQ.options.map((opt) => {
                      const isChosen = selectedOption?.id === opt.id;
                      const isCorrect = opt.id === currentQ.correctId;

                      let btnStyle = "border-[#2d4f43]/20 bg-white text-slate-800 hover:border-[#2d4f43]/50 shadow-[0_3px_0_0_#2d4f43]/10";
                      if (isAnswered) {
                        if (isCorrect) {
                          btnStyle = "border-[#2d5747] bg-[#2d5747] text-white shadow-md";
                        } else if (isChosen) {
                          btnStyle = "border-rose-500 bg-rose-50 text-rose-950";
                        } else {
                          btnStyle = "border-slate-200 bg-white text-slate-400 opacity-50";
                        }
                      } else if (isChosen) {
                        btnStyle = "border-[#2d5747] bg-emerald-50 text-[#1e3d30]";
                      }

                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleSelectChoice(opt)}
                          disabled={isAnswered}
                          className={`w-full p-4 rounded-2xl border-2 font-bold text-sm sm:text-base text-left transition-all cursor-pointer ${btnStyle}`}
                        >
                          <span>{opt.arti}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ---------------- TYPE 1: PASANGKAN KATA DENGAN MAKNANYA (WITH VOICE AUDIO ON CLICK) ---------------- */}
              {currentQ.type === 'match_pairs' && (
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {/* Left Column: Hanzi & Pinyin Cards */}
                  <div className="space-y-2.5">
                    {currentQ.leftCards.map((item) => {
                      const isMatched = matchedIds.has(item.id);
                      const isSelected = selectedLeft === item.id;
                      const isMismatch = mismatchIds.includes(item.id);

                      return (
                        <button
                          key={item.id}
                          onClick={() => handleSelectLeft(item)}
                          disabled={isMatched}
                          className={`w-full p-4 rounded-2xl border-2 transition-all flex flex-col items-center justify-center min-h-[95px] text-center cursor-pointer ${
                            isMatched
                              ? 'border-emerald-600 bg-emerald-50/70 text-emerald-900 opacity-60'
                              : isMismatch
                              ? 'border-rose-500 bg-rose-50 animate-shake text-rose-900'
                              : isSelected
                              ? 'border-[#2d5747] bg-[#2d5747] text-white shadow-md'
                              : 'border-[#2d4f43]/20 bg-white text-slate-800 hover:border-[#2d4f43]/50 shadow-[0_3px_0_0_#2d4f43]/10'
                          }`}
                        >
                          <span className="text-2xl sm:text-3xl font-black font-hanzi">
                            {item.hanzi}
                          </span>
                          <span className={`text-xs font-mono font-medium mt-1 ${
                            isSelected ? 'text-emerald-100' : 'text-[#3d7055]'
                          }`}>
                            {item.pinyin}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Column: Meaning in Indonesian Cards */}
                  <div className="space-y-2.5">
                    {currentQ.rightCards.map((item) => {
                      const isMatched = matchedIds.has(item.id);
                      const isSelected = selectedRight === item.id;
                      const isMismatch = mismatchIds.includes(item.id);

                      return (
                        <button
                          key={item.id}
                          onClick={() => handleSelectRight(item)}
                          disabled={isMatched}
                          className={`w-full p-4 rounded-2xl border-2 transition-all flex items-center justify-center min-h-[95px] text-center font-bold text-sm sm:text-base cursor-pointer ${
                            isMatched
                              ? 'border-emerald-600 bg-emerald-50/70 text-emerald-900 opacity-60'
                              : isMismatch
                              ? 'border-rose-500 bg-rose-50 animate-shake text-rose-900'
                              : isSelected
                              ? 'border-[#2d5747] bg-[#2d5747] text-white shadow-md'
                              : 'border-[#2d4f43]/20 bg-white text-slate-800 hover:border-[#2d4f43]/50 shadow-[0_3px_0_0_#2d4f43]/10'
                          }`}
                        >
                          <span>{item.arti}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ---------------- TYPE 2: TEBAK ARTI HANZI (NO AUDIO SPOILER!) ---------------- */}
              {currentQ.type === 'hanzi_meaning' && (
                <div className="space-y-4 pt-1">
                  {/* Center Hanzi Card (Strictly without sound to prevent giveaway) */}
                  <div className="p-6 rounded-2xl border-2 border-[#2d4f43]/30 bg-white text-center shadow-[0_3px_0_0_#2d4f43]/15 max-w-xs mx-auto">
                    <span className="text-5xl sm:text-6xl font-black font-hanzi text-slate-900 block tracking-wider">
                      {currentQ.targetWord.hanzi}
                    </span>
                  </div>

                  {/* 4 Indonesian Meaning Options */}
                  <div className="space-y-2.5">
                    {currentQ.options.map((opt) => {
                      const isChosen = selectedOption?.id === opt.id;
                      const isCorrect = opt.id === currentQ.correctId;

                      let btnStyle = "border-[#2d4f43]/20 bg-white text-slate-800 hover:border-[#2d4f43]/50 shadow-[0_3px_0_0_#2d4f43]/10";
                      if (isAnswered) {
                        if (isCorrect) {
                          btnStyle = "border-[#2d5747] bg-[#2d5747] text-white shadow-md";
                        } else if (isChosen) {
                          btnStyle = "border-rose-500 bg-rose-50 text-rose-950";
                        } else {
                          btnStyle = "border-slate-200 bg-white text-slate-400 opacity-50";
                        }
                      } else if (isChosen) {
                        btnStyle = "border-[#2d5747] bg-emerald-50 text-[#1e3d30]";
                      }

                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleSelectChoice(opt)}
                          disabled={isAnswered}
                          className={`w-full p-4 rounded-2xl border-2 font-bold text-sm sm:text-base text-left transition-all cursor-pointer ${btnStyle}`}
                        >
                          <span>{opt.arti}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ---------------- TYPE 3: SUSUN KALIMAT (SENTENCE BUILDER) ---------------- */}
              {currentQ.type === 'sentence_builder' && (
                <div className="space-y-4 pt-1">
                  {/* Sentence Construction Zone */}
                  <div className="min-h-[100px] p-4 rounded-2xl border-2 border-dashed border-[#2d4f43]/30 bg-white/90 flex flex-wrap items-center gap-2 shadow-inner">
                    {selectedTokens.length === 0 ? (
                      <span className="text-xs text-slate-400 font-medium italic select-none">
                        Ketuk gelembung kata di bawah untuk merangkai susunan kalimat...
                      </span>
                    ) : (
                      selectedTokens.map((tok) => (
                        <button
                          key={tok.id}
                          onClick={() => handleRemoveToken(tok)}
                          disabled={isAnswered}
                          className="px-3.5 py-2 rounded-xl bg-[#2d5747] hover:bg-[#224437] text-white font-extrabold text-base sm:text-lg font-hanzi shadow-xs active:scale-95 transition-all cursor-pointer flex items-center gap-1"
                          title="Ketuk untuk membatalkan kata ini"
                        >
                          <span>{tok.text}</span>
                        </button>
                      ))
                    )}
                  </div>

                  {/* Reset Button */}
                  {!isAnswered && selectedTokens.length > 0 && (
                    <div className="flex justify-end">
                      <button
                        onClick={handleResetTokens}
                        className="text-[11px] font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <RotateCcw size={12} />
                        <span>Ulangi Susunan</span>
                      </button>
                    </div>
                  )}

                  {/* Available Tokens Selection Bank */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block text-center">
                      Pilihan Kata:
                    </span>
                    <div className="flex flex-wrap items-center justify-center gap-2.5">
                      {availableTokens.map((tok) => (
                        <button
                          key={tok.id}
                          onClick={() => handleSelectToken(tok)}
                          disabled={isAnswered}
                          className="px-4 py-2.5 rounded-2xl border-2 border-[#2d4f43]/30 bg-white text-slate-900 font-black text-base sm:text-lg font-hanzi shadow-[0_3px_0_0_#2d4f43]/15 hover:border-[#2d4f43]/60 active:translate-y-0.5 transition-all cursor-pointer"
                        >
                          <span>{tok.text}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ---------------- TYPE 4: 他说什么？ (LISTENING AUDIO COMPREHENSION) ---------------- */}
              {currentQ.type === 'listening_phrase' && (
                <div className="space-y-4 pt-1">
                  {/* Big Audio Play Button */}
                  <button
                    onClick={() => handlePlayAudio(currentQ.audioText)}
                    className={`w-full py-4 px-6 rounded-2xl border-2 border-[#2d4f43]/30 bg-white hover:bg-emerald-50/40 text-[#1e453e] font-extrabold text-base sm:text-lg flex items-center justify-center gap-3 shadow-[0_3px_0_0_#2d4f43]/15 active:translate-y-0.5 transition-all cursor-pointer ${
                      isPlayingAudio ? 'ring-4 ring-emerald-200 bg-emerald-50' : ''
                    }`}
                  >
                    <Volume2 size={24} className={isPlayingAudio ? 'text-emerald-600 animate-pulse' : 'text-[#2d5747]'} />
                    <span>{isPlayingAudio ? 'Sedang Memutar Audio...' : 'Putar audio'}</span>
                  </button>

                  {/* Options List */}
                  <div className="space-y-2.5">
                    {currentQ.options.map((opt) => {
                      const isChosen = selectedOption?.id === opt.id;
                      const isCorrect = opt.id === currentQ.correctId;

                      let btnStyle = "border-[#2d4f43]/20 bg-white text-slate-800 hover:border-[#2d4f43]/50 shadow-[0_3px_0_0_#2d4f43]/10";
                      if (isAnswered) {
                        if (isCorrect) {
                          btnStyle = "border-[#2d5747] bg-[#2d5747] text-white shadow-md";
                        } else if (isChosen) {
                          btnStyle = "border-rose-500 bg-rose-50 text-rose-950";
                        } else {
                          btnStyle = "border-slate-200 bg-white text-slate-400 opacity-50";
                        }
                      } else if (isChosen) {
                        btnStyle = "border-[#2d5747] bg-emerald-50 text-[#1e3d30]";
                      }

                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleSelectChoice(opt)}
                          disabled={isAnswered}
                          className={`w-full p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${btnStyle}`}
                        >
                          <div className="font-extrabold text-base sm:text-lg font-hanzi">
                            {opt.hanzi}
                          </div>
                          <div className={`text-xs font-mono mt-0.5 ${
                            isAnswered && isCorrect ? 'text-emerald-100' : 'text-slate-500'
                          }`}>
                            {opt.pinyin}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Skip Audio Link */}
                  {!isAnswered && (
                    <div className="text-center pt-1">
                      <button
                        onClick={() => setShowListeningHint(true)}
                        className="text-[11px] font-bold uppercase tracking-wider text-[#3d7055] hover:text-[#1e3d30] underline decoration-dotted cursor-pointer"
                      >
                        {showListeningHint ? `Petunjuk Audio: ${currentQ.targetWord.pinyin}` : 'TAK BISA DENGAR SEKARANG'}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : isFinished ? (
            /* ---------------- RESULTS VIEW ---------------- */
            <div className="text-center space-y-5 animate-fade-in py-2">
              <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mx-auto shadow-lg ${
                percentScore >= 70 ? 'bg-emerald-600 text-white shadow-emerald-600/20' : 'bg-amber-500 text-white shadow-amber-500/20'
              }`}>
                {percentScore >= 70 ? <Award size={34} /> : <Zap size={34} />}
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#1e3d30]">
                  {percentScore >= 80 ? 'Luar Biasa! Kosakata Dikuasai!' : percentScore >= 60 ? 'Bagus! Terus Tingkatkan!' : 'Perlu Diulang Kembali'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Anda menjawab benar {score} dari {questions.length} kata {day !== 'all' ? `Hari ${day}` : 'yang dipelajari'}.
                </p>
              </div>

              {/* Score Metric Card */}
              <div className="p-4 rounded-2xl bg-white border border-[#2d4f43]/20 shadow-xs flex items-center justify-around text-center">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Skor</span>
                  <span className="text-2xl font-black font-mono text-[#1e3d30]">{percentScore}%</span>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Benar</span>
                  <span className="text-2xl font-black font-mono text-emerald-600">{score}</span>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Salah</span>
                  <span className="text-2xl font-black font-mono text-rose-600">{questions.length - score}</span>
                </div>
              </div>

              {/* Detailed Summary Review of ALL words tested */}
              <div className="text-left space-y-2 pt-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Ringkasan Seluruh {questions.length} Kata yang Diuji:
                </span>
                <div className="max-h-56 overflow-y-auto space-y-1.5 pr-1">
                  {userAnswers.map((item, idx) => (
                    <div 
                      key={idx}
                      className={`p-2.5 rounded-xl border flex items-center justify-between text-xs ${
                        item.isCorrect ? 'bg-emerald-50/60 border-emerald-200' : 'bg-rose-50/60 border-rose-200'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {item.question?.type === 'sentence_builder' ? (
                          <>
                            <span className="font-bold text-slate-800 font-hanzi">
                              {item.question.targetHz}
                            </span>
                            <span className="text-slate-500">• {item.question.meaningId}</span>
                          </>
                        ) : item.question?.targetWord ? (
                          <>
                            <span className="font-hanzi font-bold text-base text-slate-900">
                              {item.question.targetWord.hanzi}
                            </span>
                            <span className="font-mono text-[#2d5747] font-semibold">
                              {item.question.targetWord.pinyin}
                            </span>
                            <span className="text-slate-500">• {item.question.targetWord.arti}</span>
                          </>
                        ) : (
                          <span className="text-slate-700 font-medium">{item.summary || `Soal #${idx + 1}`}</span>
                        )}
                      </div>
                      <span className={`font-bold text-[11px] ${item.isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                        {item.isCorrect ? '✓ Benar' : '✕ Salah'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  onClick={() => {
                    generateQuestions(quizMode);
                  }}
                  className="py-3 px-4 rounded-2xl bg-white border border-[#2d4f43]/20 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw size={14} />
                  <span>Ulangi Tes</span>
                </button>

                <button
                  onClick={onClose}
                  className="py-3 px-4 rounded-2xl bg-[#1e453e] hover:bg-[#163530] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-md cursor-pointer"
                >
                  <Check size={14} />
                  <span>Selesai</span>
                </button>
              </div>
            </div>
          ) : null}
        </div>

        {/* ---------------- BOTTOM ACTION CONTAINER ---------------- */}
        {!isFinished && (
          <div className="p-4 bg-white border-t border-[#2d4f43]/15">
            {/* If Sentence Builder Question */}
            {currentQ?.type === 'sentence_builder' ? (
              !isAnswered ? (
                selectedTokens.length < currentQ.tokens.length ? (
                  <button
                    disabled
                    className="w-full py-4 rounded-2xl bg-[#e8e2d5] text-[#7d7568] font-bold text-sm text-center cursor-not-allowed select-none transition-colors"
                  >
                    Susun semua kata dulu ({selectedTokens.length}/{currentQ.tokens.length})
                  </button>
                ) : (
                  <button
                    onClick={handleCheckSentence}
                    className="w-full py-4 rounded-2xl bg-[#1e453e] hover:bg-[#163530] active:scale-98 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <span>Periksa Jawaban</span>
                    <ArrowRight size={16} />
                  </button>
                )
              ) : (
                <div className="space-y-2 animate-fade-in">
                  {selectedTokens.map(t => t.text).join('').replace(/[。？！，、\s]/g, '') === currentQ.targetHz.replace(/[。？！，、\s]/g, '') ? (
                    <div className="flex items-center gap-2 text-emerald-800 font-black text-base">
                      <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">
                        ✓
                      </div>
                      <span>Tepat! Susunan kalimat benar.</span>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-rose-800 font-black text-base">
                        <div className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs">
                          ✕
                        </div>
                        <span>Belum Tepat</span>
                      </div>
                      <p className="text-xs text-rose-700 font-medium">
                        Susunan yang benar: <strong>{currentQ.targetHz}</strong> ({currentQ.targetPy})
                      </p>
                    </div>
                  )}

                  <button
                    onClick={handleNext}
                    className="w-full py-4 rounded-2xl bg-[#1e453e] hover:bg-[#163530] active:scale-98 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <span>{currentIndex < questions.length - 1 ? 'Lanjut' : 'Lihat Hasil Akhir'}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              )
            ) : !isAnswered ? (
              /* For Choice, Full Word Test, and Match Pairs Questions */
              <button
                disabled
                className="w-full py-4 rounded-2xl bg-[#e8e2d5] text-[#7d7568] font-bold text-sm text-center cursor-not-allowed select-none transition-colors"
              >
                {currentQ?.type === 'match_pairs' ? 'Pasangkan semua pilihan dulu.' : 'Pilih jawabanmu dulu.'}
              </button>
            ) : (
              <div className="space-y-2 animate-fade-in">
                {/* Instant Feedback Banner */}
                {selectedOption?.id === currentQ?.correctId || currentQ?.type === 'match_pairs' ? (
                  <div className="flex items-center gap-2 text-emerald-800 font-black text-base">
                    <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">
                      ✓
                    </div>
                    <span>Tepat!</span>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-rose-800 font-black text-base">
                      <div className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs">
                        ✕
                      </div>
                      <span>Belum Tepat</span>
                    </div>
                    <p className="text-xs text-rose-700 font-medium">
                      Kunci Jawaban:{' '}
                      <strong>
                        {currentQ.correctArti || currentQ.targetWord?.arti || currentQ.targetWord?.hanzi}
                      </strong>
                    </p>
                  </div>
                )}

                {/* Continue CTA Button */}
                <button
                  onClick={handleNext}
                  className="w-full py-4 rounded-2xl bg-[#1e453e] hover:bg-[#163530] active:scale-98 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <span>{currentIndex < questions.length - 1 ? 'Lanjut' : 'Lihat Hasil Akhir'}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

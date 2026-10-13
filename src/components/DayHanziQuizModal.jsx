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
  Ear,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { speakChinese } from '../utils/speech';
import { useLearning } from '../context/LearningContext';

// Helper to determine pinyin tone number (1, 2, 3, or 4)
function getPinyinToneNumber(pinyin) {
  if (!pinyin) return 1;
  const lower = pinyin.toLowerCase();
  if (/[āēīōūǖ]/.test(lower)) return 1;
  if (/[áéíóúǘ]/.test(lower)) return 2;
  if (/[ǎěǐǒǔǚ]/.test(lower)) return 3;
  if (/[àèìòùǜ]/.test(lower)) return 4;
  return 1;
}

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
  onCompleteQuiz
}) {
  const { audioSpeed, updateWordStatus, words } = useLearning();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  // States for choice-based questions (listening_phrase, hanzi_meaning, tone_quiz)
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

  // Question generator combining all 4 interactive question formats
  useEffect(() => {
    if (!isOpen) return;

    const pool = (dayWords && dayWords.length >= 3) ? [...dayWords] : [...words];
    const shuffledPool = [...pool].sort(() => Math.random() - 0.5);

    const generated = [];

    // Helper to get 3 unique distractors
    const getDistractors = (targetWord, count = 3) => {
      const candidates = words.filter(w => w.id !== targetWord.id && w.arti !== targetWord.arti);
      return candidates.sort(() => Math.random() - 0.5).slice(0, count);
    };

    let wordPointer = 0;
    const nextWord = () => {
      const w = shuffledPool[wordPointer % shuffledPool.length];
      wordPointer++;
      return w;
    };

    // 1. QUESTION 1: Pasangkan kata dengan maknanya (Matching 3 pairs)
    const matchGroup1 = [nextWord(), nextWord(), nextWord()];
    // Deduplicate in case pool was small
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

    // 2. QUESTION 2: Tebak arti Hanzi (Hanzi to Indonesian meaning - STRICTLY NO AUDIO!)
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

    // 3. QUESTION 3: 他说什么？ (Listening Phrase / Sentence Audio Comprehension)
    const target3 = nextWord();
    const hasExample = target3.contoh && target3.contoh.length > 0;
    const audioText3 = hasExample ? target3.contoh : target3.hanzi;
    const distractorWords3 = getDistractors(target3, 2);
    
    const options3 = [
      {
        id: target3.id,
        hanzi: hasExample ? target3.contoh : target3.hanzi,
        pinyin: hasExample ? target3.contohPinyin : target3.pinyin,
        isCorrect: true
      },
      ...distractorWords3.map(dw => ({
        id: dw.id,
        hanzi: (hasExample && dw.contoh) ? dw.contoh : dw.hanzi,
        pinyin: (hasExample && dw.contohPinyin) ? dw.contohPinyin : dw.pinyin,
        isCorrect: false
      }))
    ].sort(() => Math.random() - 0.5);

    generated.push({
      id: 3,
      type: 'listening_phrase',
      title: '他说什么？',
      subtitle: 'Tā shuō shénme?',
      audioText: audioText3,
      targetWord: target3,
      options: options3,
      correctId: target3.id
    });

    // 4. QUESTION 4: Tebak Nada (Tone Identification)
    const target4 = nextWord();
    const toneNum4 = target4.tone || getPinyinToneNumber(target4.pinyin);
    const toneOptions4 = [
      { id: 1, label: 'nada 1', desc: 'Datar tinggi (—)' },
      { id: 2, label: 'nada 2', desc: 'Naik (/)' },
      { id: 3, label: 'nada 3', desc: 'Turun-naik (∨)' },
      { id: 4, label: 'nada 4', desc: 'Turun cepat (\\)' }
    ];
    generated.push({
      id: 4,
      type: 'tone_quiz',
      title: 'Tebak nada (tone) karakter ini',
      subtitle: 'Pilih nada suara yang tepat untuk pelafalan kata ini',
      targetWord: target4,
      options: toneOptions4,
      correctTone: toneNum4
    });

    // 5. QUESTION 5: Tebak arti Hanzi (Visual Recognition - NO AUDIO!)
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

    // 6. QUESTION 6: Pasangkan kata dengan maknanya (Babak 2 Penguatan)
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
    resetCurrentQuestionState();
  }, [isOpen, dayWords, words]);

  // Reset local state when transitioning between questions
  const resetCurrentQuestionState = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setIsPlayingAudio(false);
    setShowListeningHint(false);
    setMatchedIds(new Set());
    setSelectedLeft(null);
    setSelectedRight(null);
    setMismatchIds([]);
    if (mismatchTimeoutRef.current) clearTimeout(mismatchTimeoutRef.current);
  };

  if (!isOpen) return null;

  const currentQ = questions[currentIndex];

  // Play audio for listening questions (ONLY for listening_phrase, NEVER for hanzi_meaning!)
  const handlePlayAudio = (textToPlay) => {
    if (!textToPlay) return;
    setIsPlayingAudio(true);
    speakChinese(textToPlay, audioSpeed, () => {
      setIsPlayingAudio(false);
    });
  };

  // Logic for Matching Pairs Question
  const handleSelectLeft = (id) => {
    if (matchedIds.has(id)) return;
    setSelectedLeft(id);
    if (selectedRight !== null) {
      checkPair(id, selectedRight);
    }
  };

  const handleSelectRight = (id) => {
    if (matchedIds.has(id)) return;
    setSelectedRight(id);
    if (selectedLeft !== null) {
      checkPair(selectedLeft, id);
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

      // If all matched, question complete!
      if (newMatched.size === currentQ.totalPairs) {
        setIsAnswered(true);
        setScore(s => s + 1);
        setUserAnswers(prev => [
          ...prev,
          {
            type: 'match_pairs',
            isCorrect: true,
            summary: `Mencocokkan ${currentQ.totalPairs} pasangan kata dengan sukses.`
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

  // Logic for multiple-choice questions (listening_phrase, hanzi_meaning, tone_quiz)
  const handleSelectChoice = (option) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    let isCorrect = false;
    let targetWord = currentQ.targetWord;

    if (currentQ.type === 'hanzi_meaning') {
      isCorrect = option.id === currentQ.correctId;
    } else if (currentQ.type === 'listening_phrase') {
      isCorrect = option.id === currentQ.correctId;
    } else if (currentQ.type === 'tone_quiz') {
      isCorrect = option.id === currentQ.correctTone;
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
      setCurrentIndex(c => c + 1);
      resetCurrentQuestionState();
    } else {
      setIsFinished(true);
      const percent = Math.round((score / questions.length) * 100);
      if (percent >= 70) {
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
      if (onCompleteQuiz) {
        onCompleteQuiz(score, questions.length);
      }
    }
  };

  const percentScore = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-md animate-fade-in">
      <div 
        className="w-full max-w-lg bg-[#fbf9f4] rounded-3xl shadow-2xl border border-[#2d4f43]/20 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header & Progress */}
        <div className="pt-4 px-5 pb-2 bg-[#fbf9f4]">
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
              title="Tutup Tes"
            >
              <X size={20} />
            </button>

            <span className="text-[11px] font-black uppercase tracking-wider text-[#2d5747]">
              Uji Pengetahuan {day !== 'all' ? `Hari ${day}` : 'Harian'}
            </span>

            <div className="w-8" />
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
              {/* Ringkasan Singkat Segmented Dots */}
              <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                <span className="text-[#2d4f43]">Ringkasan singkat</span>
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

              {/* ---------------- TYPE 1: PASANGKAN KATA DENGAN MAKNANYA ---------------- */}
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
                          onClick={() => handleSelectLeft(item.id)}
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
                          onClick={() => handleSelectRight(item.id)}
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

              {/* ---------------- TYPE 2: TEBAK ARTI HANZI (NO AUDIO ALLOWED!) ---------------- */}
              {currentQ.type === 'hanzi_meaning' && (
                <div className="space-y-4 pt-1">
                  {/* Center Hanzi Card (Strictly without voice/audio button) */}
                  <div className="p-6 rounded-2xl border-2 border-[#2d4f43]/30 bg-white text-center shadow-[0_3px_0_0_#2d4f43]/15 max-w-xs mx-auto">
                    <span className="text-5xl sm:text-6xl font-black font-hanzi text-slate-900 block tracking-wider">
                      {currentQ.targetWord.hanzi}
                    </span>
                    {/* Audio is strictly NOT provided here because it would give away the answer */}
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

              {/* ---------------- TYPE 3: 他说什么？ (LISTENING AUDIO COMPREHENSION) ---------------- */}
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

              {/* ---------------- TYPE 4: TEBAK NADA (TONE IDENTIFICATION) ---------------- */}
              {currentQ.type === 'tone_quiz' && (
                <div className="space-y-4 pt-1">
                  {/* Center Hanzi + Pinyin Card */}
                  <div className="p-5 rounded-2xl border-2 border-[#2d4f43]/30 bg-white text-center shadow-[0_3px_0_0_#2d4f43]/15 max-w-xs mx-auto flex items-center justify-center gap-3">
                    <span className="text-4xl sm:text-5xl font-black font-hanzi text-slate-900">
                      {currentQ.targetWord.hanzi}
                    </span>
                    <span className="text-2xl font-bold font-mono text-[#2d5747]">
                      {currentQ.targetWord.pinyin}
                    </span>
                  </div>

                  {/* 4 Tone Options (nada 1, nada 2, nada 3, nada 4) */}
                  <div className="space-y-2.5">
                    {currentQ.options.map((opt) => {
                      const isChosen = selectedOption?.id === opt.id;
                      const isCorrect = opt.id === currentQ.correctTone;

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
                          className={`w-full p-4 rounded-2xl border-2 font-bold text-sm sm:text-base text-left transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                        >
                          <div>
                            <span>{opt.label}</span>
                            <span className={`text-xs ml-2 font-normal ${
                              isAnswered && isCorrect ? 'text-emerald-100' : 'text-slate-400'
                            }`}>
                              ({opt.desc})
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
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
                  {percentScore >= 80 ? 'Luar Biasa! Hanzi Dikuasai!' : percentScore >= 60 ? 'Bagus! Hampir Sempurna!' : 'Perlu Diulang Kembali'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Anda menjawab benar {score} dari {questions.length} variasi tes {day !== 'all' ? `Hari ${day}` : 'harian'}.
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

              {/* Detailed Summary Review */}
              <div className="text-left space-y-2 pt-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Catatan Evaluasi Tes:
                </span>
                <div className="max-h-48 overflow-y-auto space-y-1.5 pr-1">
                  {userAnswers.map((item, idx) => (
                    <div 
                      key={idx}
                      className={`p-2.5 rounded-xl border flex items-center justify-between text-xs ${
                        item.isCorrect ? 'bg-emerald-50/60 border-emerald-200' : 'bg-rose-50/60 border-rose-200'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {item.question?.targetWord ? (
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
                    // Trigger fresh generator
                    const ev = new Event('restart_quiz');
                    setCurrentIndex(0);
                    setScore(0);
                    setIsFinished(false);
                    setUserAnswers([]);
                    resetCurrentQuestionState();
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
            {!isAnswered ? (
              <button
                disabled
                className="w-full py-4 rounded-2xl bg-[#e8e2d5] text-[#7d7568] font-bold text-sm text-center cursor-not-allowed select-none transition-colors"
              >
                {currentQ?.type === 'match_pairs' ? 'Pasangkan semua pilihan dulu.' : 'Pilih jawabanmu dulu.'}
              </button>
            ) : (
              <div className="space-y-2 animate-fade-in">
                {/* Instant Feedback Banner */}
                {selectedOption?.id === currentQ?.correctId || 
                 selectedOption?.id === currentQ?.correctTone ||
                 currentQ?.type === 'match_pairs' ? (
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
                        {currentQ.type === 'hanzi_meaning' 
                          ? currentQ.correctArti 
                          : currentQ.type === 'tone_quiz' 
                          ? `nada ${currentQ.correctTone}` 
                          : currentQ.targetWord?.hanzi}
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

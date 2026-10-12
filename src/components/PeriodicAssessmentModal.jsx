import React, { useState, useEffect } from 'react';
import { 
  X, 
  Volume2, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  RotateCcw, 
  ArrowRight, 
  Award, 
  Clock, 
  Check, 
  Zap, 
  BookOpen,
  Calendar
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { speakChinese } from '../utils/speech';
import { useLearning } from '../context/LearningContext';

export default function PeriodicAssessmentModal({ 
  isOpen, 
  onClose, 
  checkpoint,
  onComplete
}) {
  const { words, audioSpeed, recordPeriodicAssessment } = useLearning();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  // Generate cumulative questions covering Days 1 to checkpoint.coverageEndDay
  const generateQuestions = React.useCallback(() => {
    if (!checkpoint || !words || words.length === 0) return [];

    // Filter cumulative words learned up to this checkpoint day
    const cumulativePool = words.filter(w => w.day >= checkpoint.coverageStartDay && w.day <= checkpoint.coverageEndDay);
    const pool = cumulativePool.length >= 10 ? cumulativePool : words;

    const count = Math.min(checkpoint.questionCount || 15, pool.length);
    const shuffledPool = [...pool].sort(() => Math.random() - 0.5);
    const selectedWords = shuffledPool.slice(0, count);

    return selectedWords.map((targetWord, idx) => {
      const qType = idx % 3; // 0: Hanzi -> Meaning, 1: Meaning -> Hanzi, 2: Audio -> Hanzi

      const distractorPool = (pool.length > 3 ? pool : words).filter(w => w.id !== targetWord.id);
      const shuffledDistractors = [...distractorPool].sort(() => Math.random() - 0.5).slice(0, 3);
      const options = [targetWord, ...shuffledDistractors].sort(() => Math.random() - 0.5);

      return {
        id: idx + 1,
        type: qType,
        targetWord,
        options,
        correctId: targetWord.id
      };
    });
  }, [checkpoint, words]);

  useEffect(() => {
    if (!isOpen) return;
    const qList = generateQuestions();
    setQuestions(qList);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
    setUserAnswers([]);
  }, [isOpen, generateQuestions]);

  const restartAssessment = () => {
    const qList = generateQuestions();
    setQuestions(qList);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
    setUserAnswers([]);
  };

  // Audio trigger
  useEffect(() => {
    if (questions.length > 0 && questions[currentIndex]?.type === 2 && !isFinished) {
      speakChinese(questions[currentIndex].targetWord.hanzi, audioSpeed);
    }
  }, [currentIndex, questions, isFinished, audioSpeed]);

  if (!isOpen || !checkpoint) return null;

  const currentQ = questions[currentIndex];

  const handleSelect = (option) => {
    if (isAnswered) return;
    setSelectedOption(option.id);
    setIsAnswered(true);

    const isCorrect = option.id === currentQ.correctId;
    if (isCorrect) {
      setScore(s => s + 1);
      speakChinese(currentQ.targetWord.hanzi, audioSpeed);
    }

    setUserAnswers(prev => [
      ...prev,
      {
        question: currentQ,
        selectedId: option.id,
        isCorrect
      }
    ]);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      const finalScore = score + (selectedOption === currentQ.correctId ? 0 : 0);
      const percent = Math.round((finalScore / questions.length) * 100);
      const passed = percent >= 70;

      if (passed) {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.6 }
        });
      }

      recordPeriodicAssessment(checkpoint.id, {
        score: finalScore,
        total: questions.length,
        percent,
        passed
      });

      if (onComplete) {
        onComplete(finalScore, questions.length, passed);
      }
    }
  };

  const percentScore = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
  const isPassed = percentScore >= 70;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fade-in">
      <div 
        className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-900 to-indigo-950 text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-rose-500 text-white flex items-center justify-center shadow-xs">
              <Calendar size={16} />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-md bg-white/20 text-rose-300">
                  Evaluasi Kelipatan Hari
                </span>
                <span className="text-[11px] text-slate-300">
                  Hari 1–{checkpoint.coverageEndDay}
                </span>
              </div>
              <h3 className="text-sm font-bold text-white mt-0.5">
                {checkpoint.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Progress Bar */}
        {!isFinished && questions.length > 0 && (
          <div className="h-1.5 w-full bg-slate-100 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-rose-500 to-amber-500 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        )}

        {/* Body Area */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          {!isFinished && currentQ ? (
            <div className="space-y-5 animate-fade-in">
              <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>Soal {currentIndex + 1} dari {questions.length}</span>
                <span>Target Lulus: ≥ 70%</span>
              </div>

              {/* Question Card */}
              <div className="text-center py-6 px-4 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                {currentQ.type === 0 && (
                  <>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      PILIH ARTI & PINYIN HANZI BERIKUT
                    </span>
                    <div className="text-6xl font-black text-slate-900 font-hanzi my-2">
                      {currentQ.targetWord.hanzi}
                    </div>
                    <button
                      onClick={() => speakChinese(currentQ.targetWord.hanzi, audioSpeed)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold hover:bg-rose-100 transition-colors cursor-pointer mt-1"
                    >
                      <Volume2 size={13} />
                      <span>Dengar Audio</span>
                    </button>
                  </>
                )}

                {currentQ.type === 1 && (
                  <>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      MANA KARAKTER HANZI YANG SESUAI?
                    </span>
                    <div className="text-2xl font-bold text-rose-600 font-mono">
                      {currentQ.targetWord.pinyin}
                    </div>
                    <div className="text-lg font-bold text-slate-900 mt-1">
                      "{currentQ.targetWord.arti}"
                    </div>
                    <button
                      onClick={() => speakChinese(currentQ.targetWord.hanzi, audioSpeed)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold hover:bg-rose-100 transition-colors cursor-pointer mt-2"
                    >
                      <Volume2 size={13} />
                      <span>Dengar Audio</span>
                    </button>
                  </>
                )}

                {currentQ.type === 2 && (
                  <>
                    <span className="text-[11px] font-bold text-indigo-500 uppercase tracking-wider block mb-2">
                      🎧 REFLEKS AUDIO: PILIH HANZI YANG ANDA DENGAR
                    </span>
                    <button
                      onClick={() => speakChinese(currentQ.targetWord.hanzi, audioSpeed)}
                      className="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-600 to-rose-500 text-white flex items-center justify-center mx-auto shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer my-2"
                    >
                      <Volume2 size={26} />
                    </button>
                    <p className="text-xs text-slate-400 mt-1">Ketuk untuk memutar ulang suara penutur</p>
                  </>
                )}
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentQ.options.map((option) => {
                  const isTarget = option.id === currentQ.correctId;
                  const isChosen = selectedOption === option.id;

                  let btnStyle = "bg-white border-slate-200 hover:border-slate-300 text-slate-800";
                  if (isAnswered) {
                    if (isTarget) {
                      btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/20";
                    } else if (isChosen) {
                      btnStyle = "bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-500/20";
                    } else {
                      btnStyle = "bg-slate-50 border-slate-100 text-slate-400 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelect(option)}
                      disabled={isAnswered}
                      className={`p-3.5 rounded-2xl border text-left transition-all font-semibold flex items-center justify-between cursor-pointer ${btnStyle}`}
                    >
                      <div>
                        {currentQ.type === 0 ? (
                          <>
                            <div className="text-xs font-mono text-rose-600 font-bold">{option.pinyin}</div>
                            <div className="text-xs font-bold text-slate-800 mt-0.5">{option.arti}</div>
                          </>
                        ) : (
                          <>
                            <div className="text-2xl font-black font-hanzi text-slate-900">{option.hanzi}</div>
                            {isAnswered && (
                              <div className="text-[11px] font-mono text-slate-500">{option.pinyin} • {option.arti}</div>
                            )}
                          </>
                        )}
                      </div>

                      {isAnswered && isTarget && (
                        <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                      )}
                      {isAnswered && isChosen && !isTarget && (
                        <XCircle size={18} className="text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              {isAnswered && (
                <div className="pt-2 animate-fade-in">
                  <button
                    onClick={handleNext}
                    className="w-full py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-98 cursor-pointer"
                  >
                    <span>{currentIndex < questions.length - 1 ? 'Soal Berikutnya' : 'Selesaikan Evaluasi'}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              )}
            </div>
          ) : isFinished ? (
            /* Results View */
            <div className="text-center space-y-5 animate-fade-in py-2">
              <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mx-auto shadow-lg ${
                isPassed ? 'bg-emerald-500 text-white shadow-emerald-500/20' : 'bg-amber-500 text-white shadow-amber-500/20'
              }`}>
                {isPassed ? <Award size={34} /> : <Zap size={34} />}
              </div>

              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${
                  isPassed ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                }`}>
                  {isPassed ? '✓ Lulus Evaluasi Berkala' : '! Perlu Peningkatan'}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {isPassed ? 'Selamat! Memori Kumulatif Terbukti Kuat!' : 'Belum Memenuhi Standar Kelulusan (≥ 70%)'}
                </h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  {isPassed 
                    ? `Hasil evaluasi membuktikan Anda mengingat kosakata dari Hari 1 hingga Hari ${checkpoint.coverageEndDay} dengan baik.`
                    : `Anda mendapatkan skor ${percentScore}%. Diperlukan minimal 70% untuk menyelesaikan evaluasi kelipatan hari ini.`}
                </p>
              </div>

              {/* Metric Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-around text-center">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Skor</span>
                  <span className={`text-2xl font-black font-mono ${isPassed ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {percentScore}%
                  </span>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Benar</span>
                  <span className="text-2xl font-black font-mono text-emerald-600">{score}</span>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Total Soal</span>
                  <span className="text-2xl font-black font-mono text-slate-800">{questions.length}</span>
                </div>
              </div>

              {/* Review List */}
              <div className="text-left space-y-2 pt-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Detail Soal yang Telah Dikerjakan:
                </span>
                <div className="max-h-48 overflow-y-auto space-y-1.5 pr-1">
                  {userAnswers.map((item, idx) => (
                    <div 
                      key={idx}
                      className={`p-2.5 rounded-xl border flex items-center justify-between text-xs ${
                        item.isCorrect ? 'bg-emerald-50/50 border-emerald-100' : 'bg-rose-50/50 border-rose-100'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-hanzi font-bold text-base text-slate-900">
                          {item.question.targetWord.hanzi}
                        </span>
                        <span className="font-mono text-rose-600">{item.question.targetWord.pinyin}</span>
                        <span className="text-slate-500">• {item.question.targetWord.arti}</span>
                      </div>
                      {item.isCorrect ? (
                        <span className="text-emerald-600 font-bold text-[11px]">✓ Benar</span>
                      ) : (
                        <span className="text-rose-600 font-bold text-[11px]">✕ Salah</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  onClick={restartAssessment}
                  className="py-2.5 px-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw size={14} />
                  <span>Ulangi Evaluasi</span>
                </button>

                <button
                  onClick={onClose}
                  className="py-2.5 px-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-md cursor-pointer"
                >
                  <Check size={14} />
                  <span>Tutup & Simpan</span>
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { 
  X, 
  Volume2, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ArrowRight, 
  Award,
  Check,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { speakChinese } from '../utils/speech';
import { useLearning } from '../context/LearningContext';

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
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  // Generate 10 randomized Hanzi questions from current day words
  useEffect(() => {
    if (!isOpen || !dayWords || dayWords.length === 0) return;

    const pool = [...dayWords].sort(() => Math.random() - 0.5);
    const count = Math.min(10, pool.length);
    const selectedBatch = pool.slice(0, count);

    const generated = selectedBatch.map((targetWord, idx) => {
      // Determine question type (0: Hanzi -> Pinyin/Arti, 1: Arti/Pinyin -> Hanzi, 2: Audio -> Hanzi)
      const qType = idx % 3;

      // Pick 3 distractors from all words (prefer same day or general pool)
      const distractorPool = words.filter(w => w.id !== targetWord.id);
      const shuffledDistractors = [...distractorPool].sort(() => Math.random() - 0.5).slice(0, 3);
      const rawOptions = [targetWord, ...shuffledDistractors].sort(() => Math.random() - 0.5);

      return {
        id: idx + 1,
        type: qType,
        targetWord,
        options: rawOptions,
        correctId: targetWord.id
      };
    });

    setQuestions(generated);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
    setUserAnswers([]);
  }, [isOpen, dayWords, words]);

  // Auto-play audio when audio-type question appears
  useEffect(() => {
    if (questions.length > 0 && questions[currentIndex]?.type === 2 && !isFinished) {
      const q = questions[currentIndex];
      speakChinese(q.targetWord.hanzi, audioSpeed);
    }
  }, [currentIndex, questions, isFinished, audioSpeed]);

  if (!isOpen) return null;

  const currentQ = questions[currentIndex];

  const handleSelect = (option) => {
    if (isAnswered) return;
    setSelectedOption(option.id);
    setIsAnswered(true);

    const isCorrect = option.id === currentQ.correctId;
    if (isCorrect) {
      setScore(s => s + 1);
      updateWordStatus(currentQ.targetWord.id, 'mastered');
      speakChinese(currentQ.targetWord.hanzi, audioSpeed);
    } else {
      updateWordStatus(currentQ.targetWord.id, 'reviewing');
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
      if (percent >= 70) {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 }
        });
      }
      if (onCompleteQuiz) {
        onCompleteQuiz(finalScore, questions.length);
      }
    }
  };

  const restartQuiz = () => {
    const pool = [...dayWords].sort(() => Math.random() - 0.5);
    const count = Math.min(10, pool.length);
    const selectedBatch = pool.slice(0, count);

    const generated = selectedBatch.map((targetWord, idx) => {
      const qType = idx % 3;
      const distractorPool = words.filter(w => w.id !== targetWord.id);
      const shuffledDistractors = [...distractorPool].sort(() => Math.random() - 0.5).slice(0, 3);
      const rawOptions = [targetWord, ...shuffledDistractors].sort(() => Math.random() - 0.5);

      return {
        id: idx + 1,
        type: qType,
        targetWord,
        options: rawOptions,
        correctId: targetWord.id
      };
    });

    setQuestions(generated);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
    setUserAnswers([]);
  };

  const percentScore = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in">
      <div 
        className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-rose-500 text-white flex items-center justify-center font-black text-xs shadow-xs">
              汉
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Uji Pengetahuan Hanzi {day !== 'all' ? `Hari ${day}` : 'Sesi Ini'}
              </h3>
              <p className="text-[11px] text-slate-500">
                {!isFinished ? `Soal ${currentIndex + 1} dari ${questions.length}` : 'Hasil Uji Hanzi'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Progress bar */}
        {!isFinished && questions.length > 0 && (
          <div className="h-1.5 w-full bg-slate-100 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-rose-500 to-amber-500 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        )}

        {/* Main Content Area */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          {!isFinished && currentQ ? (
            <div className="space-y-5 animate-fade-in">
              {/* Question Card */}
              <div className="text-center py-5 px-4 rounded-3xl bg-gradient-to-b from-slate-50 to-white border border-slate-200/80 shadow-2xs relative">
                {currentQ.type === 0 && (
                  <>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      PILIH ARTI & PINYIN YANG TEPAT
                    </span>
                    <div className="text-6xl font-black text-slate-900 font-hanzi my-2">
                      {currentQ.targetWord.hanzi}
                    </div>
                    <button
                      onClick={() => speakChinese(currentQ.targetWord.hanzi, audioSpeed)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold hover:bg-rose-100 transition-colors cursor-pointer mt-1"
                    >
                      <Volume2 size={13} />
                      <span>Dengar Pengucapan</span>
                    </button>
                  </>
                )}

                {currentQ.type === 1 && (
                  <>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      MANA KARAKTER HANZI UNTUK KATA INI?
                    </span>
                    <div className="text-2xl font-bold text-rose-500 font-mono">
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
                      🎧 REFLEKS MENDENGAR: PILIH HANZI YANG ANDA DENGAR
                    </span>
                    <button
                      onClick={() => speakChinese(currentQ.targetWord.hanzi, audioSpeed)}
                      className="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-500 to-rose-500 text-white flex items-center justify-center mx-auto shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer my-2"
                    >
                      <Volume2 size={26} />
                    </button>
                    <p className="text-xs text-slate-400 mt-1">Ketuk tombol untuk memutar ulang audio</p>
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

              {/* Next Question CTA */}
              {isAnswered && (
                <div className="pt-2 animate-fade-in">
                  <button
                    onClick={handleNext}
                    className="w-full py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-98 cursor-pointer"
                  >
                    <span>{currentIndex < questions.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil Akhir'}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              )}
            </div>
          ) : isFinished ? (
            /* Results View */
            <div className="text-center space-y-5 animate-fade-in py-2">
              <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mx-auto shadow-lg ${
                percentScore >= 70 ? 'bg-emerald-500 text-white shadow-emerald-500/20' : 'bg-amber-500 text-white shadow-amber-500/20'
              }`}>
                {percentScore >= 70 ? <Award size={32} /> : <Zap size={32} />}
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-900">
                  {percentScore >= 80 ? 'Luar Biasa! Hanzi Dikuasai!' : percentScore >= 60 ? 'Bagus! Hampir Sempurna!' : 'Perlu Diulang Kembali'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Anda menjawab benar {score} dari {questions.length} soal Hanzi {day !== 'all' ? `Hari ${day}` : ''}.
                </p>
              </div>

              {/* Score Metric Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-around text-center">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Skor Akhir</span>
                  <span className="text-2xl font-black font-mono text-slate-900">{percentScore}%</span>
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

              {/* Word Results Review List */}
              <div className="text-left space-y-2 pt-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Ringkasan Kosakata Diuji:
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
              <div className="grid grid-cols-2 gap-2 pt-3">
                <button
                  onClick={restartQuiz}
                  className="py-2.5 px-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw size={14} />
                  <span>Ulangi Tes</span>
                </button>

                <button
                  onClick={onClose}
                  className="py-2.5 px-3 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-rose-500/20 cursor-pointer"
                >
                  <Check size={14} />
                  <span>Selesai</span>
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

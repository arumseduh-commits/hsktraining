import React, { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  Clock, 
  Volume2, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MOCK_EXAM_QUESTIONS } from '../data/mockExam';
import { speakChinese } from '../utils/speech';
import { useLearning } from '../context/LearningContext';

export default function MockExamView() {
  const { audioSpeed, recordExamScore, examScores } = useLearning();

  const [examState, setExamState] = useState('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(900);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    setIsPlayingAudio(false);
  }, [currentIndex]);

  const handlePlayAudio = (text) => {
    setIsPlayingAudio(true);
    speakChinese(text, audioSpeed, () => {
      setIsPlayingAudio(false);
    });
  };

  const currentQ = MOCK_EXAM_QUESTIONS[currentIndex];

  const startExam = () => {
    setUserAnswers({});
    setCurrentIndex(0);
    setTimeLeft(900);
    setExamState('ongoing');
  };

  useEffect(() => {
    if (examState === 'ongoing') {
      timerRef.current = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) {
            clearInterval(timerRef.current);
            finishExam();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [examState]);

  const selectAnswer = (ansIdx) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: ansIdx
    }));
  };

  const finishExam = () => {
    clearInterval(timerRef.current);
    let correctCount = 0;
    MOCK_EXAM_QUESTIONS.forEach(q => {
      if (userAnswers[q.id] === q.answer) {
        correctCount++;
      }
    });

    const finalScore = Math.round((correctCount / MOCK_EXAM_QUESTIONS.length) * 100);
    recordExamScore(correctCount, MOCK_EXAM_QUESTIONS.length);
    setExamState('result');

    if (finalScore >= 60) {
      confetti({ particleCount: 60, spread: 75 });
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const answeredCount = Object.keys(userAnswers).length;
  let correctCount = 0;
  if (examState === 'result') {
    MOCK_EXAM_QUESTIONS.forEach(q => {
      if (userAnswers[q.id] === q.answer) correctCount++;
    });
  }
  const finalScore = Math.round((correctCount / MOCK_EXAM_QUESTIONS.length) * 100);
  const isPassed = finalScore >= 60;

  return (
    <div className="max-w-2xl mx-auto space-y-4 animate-fade-in pb-16">
      {/* INTRO SCREEN */}
      {examState === 'intro' && (
        <div className="card-subtle rounded-3xl p-6 sm:p-8 text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto shadow-sm">
            <Award size={28} />
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Simulasi Ujian HSK 1 (Standar 3.0)
            </h2>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto leading-relaxed">
              20 soal standar resmi (10 Listening & 10 Reading). Nilai kelulusan minimal <strong>60%</strong>.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2.5 max-w-sm mx-auto">
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[10px] text-slate-400 font-semibold block uppercase">Soal</span>
              <span className="text-base font-bold text-slate-900 font-mono">20</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[10px] text-slate-400 font-semibold block uppercase">Waktu</span>
              <span className="text-base font-bold text-slate-900 font-mono">15 Mnt</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[10px] text-slate-400 font-semibold block uppercase">Lulus</span>
              <span className="text-base font-bold text-emerald-600 font-mono">≥ 60%</span>
            </div>
          </div>

          {examScores.length > 0 && (
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-xs text-left max-w-sm mx-auto">
              <span className="text-[11px] font-semibold text-slate-400 block mb-0.5">Ujian Terakhir:</span>
              <div className="flex items-center justify-between font-mono font-semibold">
                <span className="text-slate-600">{examScores[0].date}</span>
                <span className={examScores[0].passed ? 'text-emerald-600' : 'text-rose-600'}>
                  {examScores[0].percent}/100 ({examScores[0].passed ? 'Lulus' : 'Belum'})
                </span>
              </div>
            </div>
          )}

          <button
            onClick={startExam}
            className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 active:scale-98 text-white font-bold text-xs rounded-2xl transition-all shadow-sm"
          >
            Mulai Ujian Sekarang
          </button>
        </div>
      )}

      {/* EXAM ONGOING */}
      {examState === 'ongoing' && (
        <div className="card-subtle rounded-3xl p-6 sm:p-7 space-y-5">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <span className="text-[10px] font-bold text-rose-500 uppercase tracking-wider block">
                {currentQ.section}
              </span>
              <span className="text-xs font-bold text-slate-800">
                Soal {currentIndex + 1} dari {MOCK_EXAM_QUESTIONS.length}
              </span>
            </div>

            <div className={`px-2.5 py-1 rounded-full font-mono text-xs font-bold flex items-center gap-1 ${
              timeLeft < 180 ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-700'
            }`}>
              <Clock size={13} className="text-slate-400" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>

          {/* Question Content */}
          <div className="space-y-3.5">
            {currentQ.type === 'listening' ? (
              <div className="bg-rose-50/40 border border-rose-100 rounded-2xl p-4 text-center space-y-2">
                <button
                  onClick={() => handlePlayAudio(currentQ.audioText)}
                  className={`w-14 h-14 rounded-full text-white mx-auto flex items-center justify-center shadow-sm active:scale-95 transition-all ${
                    isPlayingAudio
                      ? 'bg-rose-600 ring-4 ring-rose-200 animate-pulse'
                      : 'bg-rose-500 hover:bg-rose-600 shadow-rose-500/20'
                  }`}
                >
                  <Volume2 size={24} className={isPlayingAudio ? 'scale-110' : ''} />
                </button>
                <p className={`text-[11px] font-medium transition-colors ${isPlayingAudio ? 'text-rose-600 font-bold' : 'text-slate-400'}`}>
                  {isPlayingAudio ? 'Sedang Memutar Audio...' : 'Putar audio Mandarin'}
                </p>
              </div>
            ) : (
              currentQ.text && (
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3.5 text-center">
                  <p className="text-base font-bold text-slate-900 font-hanzi whitespace-pre-wrap">
                    {currentQ.text}
                  </p>
                </div>
              )
            )}

            <p className="text-xs sm:text-sm font-semibold text-slate-800">
              {currentQ.prompt}
            </p>

            {/* Options */}
            <div className="space-y-1.5 pt-1">
              {currentQ.options.map((opt, optIdx) => {
                const isSelected = userAnswers[currentQ.id] === optIdx;
                return (
                  <button
                    key={optIdx}
                    onClick={() => selectAnswer(optIdx)}
                    className={`w-full p-3 rounded-2xl border text-left text-xs font-medium flex items-center justify-between transition-all ${
                      isSelected
                        ? 'border-rose-500 bg-rose-50/40 text-slate-900 font-bold'
                        : 'border-slate-200/80 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    <span>{opt}</span>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      isSelected ? 'border-rose-500 bg-rose-500 text-white' : 'border-slate-300'
                    }`}>
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-100">
            <button
              onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
              disabled={currentIndex === 0}
              className="text-xs font-semibold text-slate-400 hover:text-slate-800 disabled:opacity-20 flex items-center gap-1"
            >
              <ChevronLeft size={15} />
              <span>Sebelumnya</span>
            </button>

            {currentIndex < MOCK_EXAM_QUESTIONS.length - 1 ? (
              <button
                onClick={() => setCurrentIndex(i => i + 1)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
              >
                <span>Berikutnya</span>
                <ChevronRight size={14} />
              </button>
            ) : (
              <button
                onClick={finishExam}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
              >
                Selesai ({answeredCount}/{MOCK_EXAM_QUESTIONS.length})
              </button>
            )}
          </div>
        </div>
      )}

      {/* EXAM RESULT */}
      {examState === 'result' && (
        <div className="card-subtle rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className={`w-14 h-14 rounded-2xl mx-auto flex items-center justify-center text-white shadow-sm ${
              isPassed ? 'bg-emerald-500' : 'bg-rose-500'
            }`}>
              {isPassed ? <Sparkles size={28} /> : <AlertTriangle size={28} />}
            </div>

            <h3 className="text-xl font-black text-slate-900">
              {isPassed ? 'SELAMAT, ANDA LULUS HSK 1!' : 'BELUM MENCAPAI TARGET'}
            </h3>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 max-w-xs mx-auto">
              <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Skor Akhir</span>
              <span className={`text-4xl font-black font-mono block ${isPassed ? 'text-emerald-600' : 'text-rose-600'}`}>
                {finalScore} <span className="text-sm text-slate-400">/ 100</span>
              </span>
              <span className="text-[11px] font-semibold text-slate-500 mt-0.5 block">
                Benar {correctCount} dari {MOCK_EXAM_QUESTIONS.length} Soal
              </span>
            </div>
          </div>

          {/* Review */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold text-slate-900 border-b border-slate-100 pb-2">
              Pembahasan Soal:
            </h4>

            <div className="space-y-2">
              {MOCK_EXAM_QUESTIONS.map((q, idx) => {
                const userAns = userAnswers[q.id];
                const isCorrect = userAns === q.answer;

                return (
                  <div
                    key={q.id}
                    className={`p-3 rounded-2xl border text-xs space-y-1.5 ${
                      isCorrect ? 'bg-emerald-50/40 border-emerald-200' : 'bg-rose-50/40 border-rose-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-800">#{idx + 1} {q.prompt}</span>
                      <span className={`font-bold text-[10px] ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {isCorrect ? 'Benar (+5)' : 'Salah'}
                      </span>
                    </div>

                    <p className="text-slate-500 italic text-[11px]">
                      💡 {q.explanation}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={startExam}
            className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl text-xs transition-all shadow-xs"
          >
            Ulangi Ujian
          </button>
        </div>
      )}
    </div>
  );
}

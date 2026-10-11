import React, { useState, useEffect, useRef } from 'react';
import { 
  Zap, 
  Clock, 
  Flame, 
  Volume2, 
  CheckCircle2, 
  XCircle, 
  Trophy 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLearning } from '../context/LearningContext';
import { speakChinese } from '../utils/speech';

export default function SpeedDrill({ initialDay = 'all' }) {
  const { words, audioSpeed, updateWordStatus, daysConfig } = useLearning();
  const sprintDaysList = daysConfig ? daysConfig.map(d => d.day) : [1, 2, 3, 4];

  const [drillMode, setDrillMode] = useState('hz_to_meaning');
  const [selectedDay, setSelectedDay] = useState(initialDay);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [missedWords, setMissedWords] = useState([]);

  const [currentQuestion, setCurrentQuestion] = useState(null);
  const timerRef = useRef(null);

  const wordPool = React.useMemo(() => {
    if (selectedDay === 'all') return words;
    return words.filter(w => w.day === Number(selectedDay));
  }, [words, selectedDay]);

  const generateQuestion = () => {
    if (wordPool.length < 4) return null;
    const targetIndex = Math.floor(Math.random() * wordPool.length);
    const targetWord = wordPool[targetIndex];

    const distractors = [];
    while (distractors.length < 3) {
      const rand = wordPool[Math.floor(Math.random() * wordPool.length)];
      if (rand.id !== targetWord.id && !distractors.some(d => d.id === rand.id)) {
        distractors.push(rand);
      }
    }

    const rawOptions = [targetWord, ...distractors].sort(() => Math.random() - 0.5);

    let promptText = '';
    let options = [];

    if (drillMode === 'hz_to_meaning') {
      promptText = targetWord.hanzi;
      options = rawOptions.map(o => ({
        label: o.arti,
        isCorrect: o.id === targetWord.id,
        ref: o
      }));
    } else if (drillMode === 'hz_to_py') {
      promptText = targetWord.hanzi;
      options = rawOptions.map(o => ({
        label: o.pinyin,
        isCorrect: o.id === targetWord.id,
        ref: o
      }));
    } else if (drillMode === 'audio_to_hz') {
      promptText = 'Dengarkan suara...';
      options = rawOptions.map(o => ({
        label: `${o.hanzi} (${o.pinyin})`,
        isCorrect: o.id === targetWord.id,
        ref: o
      }));
      speakChinese(targetWord.hanzi, audioSpeed);
    }

    return {
      targetWord,
      promptText,
      options
    };
  };

  const startGame = () => {
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setMissedWords([]);
    setTimeLeft(60);
    setIsPlaying(true);
    setCurrentQuestion(generateQuestion());
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) {
            clearInterval(timerRef.current);
            setIsPlaying(false);
            confetti({ particleCount: 45, spread: 60 });
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying]);

  const handleSelectOption = (option) => {
    if (!isPlaying || !currentQuestion) return;

    if (option.isCorrect) {
      const newScore = score + 10 + streak * 2;
      const newStreak = streak + 1;
      setScore(newScore);
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);
      updateWordStatus(currentQuestion.targetWord.id, 'mastered');
    } else {
      setStreak(0);
      setMissedWords(prev => [...prev, currentQuestion.targetWord]);
      updateWordStatus(currentQuestion.targetWord.id, 'reviewing');
    }

    setCurrentQuestion(generateQuestion());
  };

  return (
    <div className="max-w-lg mx-auto space-y-4 animate-fade-in pb-16">
      {/* START SCREEN */}
      {!isPlaying && timeLeft === 60 && (
        <div className="card-subtle rounded-3xl p-6 sm:p-8 text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto shadow-sm">
            <Zap size={28} />
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Speed Drill (Refleks 60 Detik)
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto leading-relaxed">
              Latih otak merespons arti dalam hitungan sepersekian detik. Kunci ingatan aktif tanpa jeda menerjemahkan.
            </p>
          </div>

          {/* Mode Pill Bar */}
          <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-2xl">
            <button
              onClick={() => setDrillMode('hz_to_meaning')}
              className={`py-2 px-1 text-xs font-semibold rounded-xl transition-all ${
                drillMode === 'hz_to_meaning'
                  ? 'bg-white text-slate-900 font-bold shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Hanzi ➔ Arti
            </button>
            <button
              onClick={() => setDrillMode('hz_to_py')}
              className={`py-2 px-1 text-xs font-semibold rounded-xl transition-all ${
                drillMode === 'hz_to_py'
                  ? 'bg-white text-slate-900 font-bold shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Hanzi ➔ Pinyin
            </button>
            <button
              onClick={() => setDrillMode('audio_to_hz')}
              className={`py-2 px-1 text-xs font-semibold rounded-xl transition-all ${
                drillMode === 'audio_to_hz'
                  ? 'bg-white text-slate-900 font-bold shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Suara ➔ Hanzi
            </button>
          </div>

          {/* Day selection */}
          <div className="flex items-center justify-center gap-1 overflow-x-auto no-scrollbar py-1">
            {['all', ...sprintDaysList].map(d => (
              <button
                key={d}
                onClick={() => setSelectedDay(d)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                  selectedDay === d
                    ? 'bg-slate-900 text-white font-bold'
                    : 'text-slate-500 hover:bg-slate-100'
                }`}
              >
                {d === 'all' ? `Semua (${words.length})` : `Hari ${d}`}
              </button>
            ))}
          </div>

          <button
            onClick={startGame}
            className="w-full py-3.5 bg-rose-500 hover:bg-rose-600 active:scale-98 text-white font-bold text-sm rounded-2xl shadow-sm transition-all"
          >
            Mulai Kuis 60 Detik
          </button>
        </div>
      )}

      {/* GAME ONGOING */}
      {isPlaying && currentQuestion && (
        <div className="card-subtle rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-mono text-xs font-bold">
              <Clock size={13} className="text-slate-400" />
              <span>{timeLeft}s</span>
            </div>

            {streak > 1 && (
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 font-black text-xs">
                <Flame size={13} className="text-amber-500" />
                <span>{streak}x STREAK</span>
              </div>
            )}

            <div className="text-right">
              <span className="text-[10px] text-slate-400 block font-semibold">SKOR</span>
              <span className="text-lg font-black text-slate-900 font-mono">{score}</span>
            </div>
          </div>

          {/* Prompt Box */}
          <div className="text-center py-6 bg-slate-50 rounded-2xl border border-slate-100">
            {drillMode === 'audio_to_hz' ? (
              <button
                onClick={() => speakChinese(currentQuestion.targetWord.hanzi, audioSpeed)}
                className="w-14 h-14 rounded-full bg-rose-500 text-white mx-auto flex items-center justify-center shadow-sm shadow-rose-500/20 active:scale-95 transition-all"
              >
                <Volume2 size={24} />
              </button>
            ) : (
              <div className="text-6xl font-black text-slate-900 font-hanzi">
                {currentQuestion.promptText}
              </div>
            )}
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {currentQuestion.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSelectOption(opt)}
                className="p-3.5 rounded-2xl border border-slate-200 hover:border-rose-400 hover:bg-rose-50/30 text-slate-800 font-bold text-sm text-center transition-all active:scale-98"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* GAME FINISHED */}
      {!isPlaying && timeLeft === 0 && (
        <div className="card-subtle rounded-3xl p-6 sm:p-8 text-center space-y-5">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
            <Trophy size={28} />
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900">Selesai!</h3>
            <p className="text-slate-400 text-xs mt-0.5">Sesi latihan refleks kilat 60 detik selesai.</p>
          </div>

          <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[10px] text-slate-400 block font-semibold uppercase">Total Skor</span>
              <span className="text-xl font-black text-slate-900 font-mono">{score}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[10px] text-slate-400 block font-semibold uppercase">Streak Terbaik</span>
              <span className="text-xl font-black text-amber-600 font-mono">{maxStreak}x</span>
            </div>
          </div>

          {missedWords.length > 0 && (
            <div className="text-left bg-rose-50/60 border border-rose-100 rounded-2xl p-3.5 space-y-2">
              <span className="text-xs font-bold text-rose-800 block">
                Evaluasi Kata yang Sempat Terlewat ({missedWords.length}):
              </span>
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {missedWords.map((w, idx) => (
                  <span
                    key={idx}
                    onClick={() => speakChinese(w.hanzi, audioSpeed)}
                    className="cursor-pointer px-2 py-1 bg-white border border-rose-200/80 rounded-xl text-xs font-medium flex items-center gap-1 shadow-2xs"
                  >
                    <span className="font-hanzi font-bold text-rose-600">{w.hanzi}</span>
                    <span className="text-[11px] text-slate-500 font-mono">{w.pinyin}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={startGame}
            className="w-full py-3 bg-slate-900 hover:bg-slate-800 active:scale-98 text-white font-bold rounded-2xl text-xs transition-all shadow-sm"
          >
            Latih Ulang
          </button>
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { 
  Puzzle, 
  RotateCcw, 
  CheckCircle2, 
  Volume2, 
  ArrowRight, 
  Lightbulb
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { getSentenceDrills } from '../data/sentenceDrills';
import { speakChinese } from '../utils/speech';
import { useLearning } from '../context/LearningContext';

export default function SentenceBuilder() {
  const { audioSpeed, recordWordLearnedToday, currentLevel } = useLearning();

  const drills = React.useMemo(() => {
    return getSentenceDrills(currentLevel);
  }, [currentLevel]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentDrill = drills[currentIndex] || drills[0];

  const [availableTokens, setAvailableTokens] = useState([]);
  const [selectedTokens, setSelectedTokens] = useState([]);
  const [status, setStatus] = useState('idle');

  // Reset index when level changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [currentLevel]);

  useEffect(() => {
    if (!currentDrill) return;
    const shuffled = currentDrill.tokens
      .map((text, idx) => ({ id: `${idx}-${text}`, text }))
      .sort(() => Math.random() - 0.5);
    setAvailableTokens(shuffled);
    setSelectedTokens([]);
    setStatus('idle');
  }, [currentIndex]);

  const handleSelectToken = (token) => {
    if (status === 'correct') return;
    setAvailableTokens(prev => prev.filter(t => t.id !== token.id));
    setSelectedTokens(prev => [...prev, token]);
  };

  const handleRemoveToken = (token) => {
    if (status === 'correct') return;
    setSelectedTokens(prev => prev.filter(t => t.id !== token.id));
    setAvailableTokens(prev => [...prev, token]);
  };

  const handleReset = () => {
    const shuffled = currentDrill.tokens
      .map((text, idx) => ({ id: `${idx}-${text}`, text }))
      .sort(() => Math.random() - 0.5);
    setAvailableTokens(shuffled);
    setSelectedTokens([]);
    setStatus('idle');
  };

  const handleCheck = () => {
    const builtText = selectedTokens.map(t => t.text).join('');
    if (builtText === currentDrill.targetHz) {
      setStatus('correct');
      speakChinese(currentDrill.targetHz, audioSpeed);
      confetti({ particleCount: 25, spread: 45 });
      if (recordWordLearnedToday) {
        recordWordLearnedToday(currentDrill.targetWordId || `sentence_${currentIndex}`);
      }
    } else {
      setStatus('wrong');
    }
  };

  const handleNext = () => {
    if (currentIndex < drills.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <div className="max-w-lg mx-auto space-y-4 animate-fade-in pb-16">
      {/* Top Header */}
      <div className="flex items-center justify-between p-2">
        <div>
          <h3 className="text-base font-bold text-slate-900 tracking-tight">Susun Tata Bahasa HSK {currentLevel || 1}</h3>
          <p className="text-xs text-slate-400 font-medium">Latihan {currentIndex + 1} dari {drills.length}</p>
        </div>

        <button
          onClick={handleReset}
          className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors"
          title="Reset susunan"
        >
          <RotateCcw size={15} />
        </button>
      </div>

      {/* Main Challenge Card */}
      <div className="card-subtle rounded-3xl p-6 sm:p-7 space-y-5">
        <div className="text-center">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Terjemahkan ke Bahasa Mandarin:
          </span>
          <h4 className="text-lg font-bold text-slate-900 mt-1">
            "{currentDrill.meaningId}"
          </h4>
        </div>

        {/* Dropping Zone */}
        <div className={`min-h-[64px] p-3 rounded-2xl border-2 border-dashed flex flex-wrap items-center justify-center gap-1.5 transition-all ${
          status === 'correct'
            ? 'bg-emerald-50/60 border-emerald-300'
            : status === 'wrong'
            ? 'bg-rose-50/60 border-rose-300'
            : 'bg-slate-50/60 border-slate-200'
        }`}>
          {selectedTokens.length === 0 ? (
            <span className="text-xs text-slate-400 font-normal italic">
              Ketuk kata di bawah sesuai urutan kalimat
            </span>
          ) : (
            selectedTokens.map(token => (
              <button
                key={token.id}
                onClick={() => handleRemoveToken(token)}
                className="px-3 py-1.5 bg-slate-900 text-white rounded-xl text-sm font-bold font-hanzi shadow-2xs hover:bg-rose-500 transition-all active:scale-95"
              >
                {token.text}
              </button>
            ))
          )}
        </div>

        {/* Available Tokens */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-semibold text-slate-400 block text-center uppercase tracking-wider">
            Pilihan Balok Kata:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {availableTokens.map(token => (
              <button
                key={token.id}
                onClick={() => handleSelectToken(token)}
                className="px-3.5 py-2 bg-slate-100 hover:bg-white text-slate-800 border border-slate-200 hover:border-slate-300 rounded-xl text-sm font-bold font-hanzi shadow-2xs transition-all active:scale-95"
              >
                {token.text}
              </button>
            ))}
          </div>
        </div>

        {/* Feedback Alert */}
        {status === 'correct' && (
          <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-3.5 space-y-1.5 animate-fade-in">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-xs">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Susunan Tepat!</span>
              </div>
              <button
                onClick={() => speakChinese(currentDrill.targetHz, audioSpeed)}
                className="p-1 text-emerald-800 hover:text-emerald-950"
              >
                <Volume2 size={15} />
              </button>
            </div>
            <p className="text-xs font-mono font-bold text-slate-800">{currentDrill.targetPy}</p>
            <p className="text-[11px] text-emerald-900/80 pt-0.5">
              💡 <strong>Rumus:</strong> {currentDrill.grammarTip}
            </p>
          </div>
        )}

        {status === 'wrong' && (
          <div className="bg-rose-50 border border-rose-200/80 rounded-xl p-2.5 text-center text-xs font-bold text-rose-700">
            Urutan belum tepat. Coba ketuk kata untuk membatalkan susunan.
          </div>
        )}

        {/* Action Button */}
        {status !== 'correct' ? (
          <button
            onClick={handleCheck}
            disabled={selectedTokens.length === 0}
            className="w-full py-3 bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-white font-bold rounded-2xl text-xs transition-all shadow-xs"
          >
            Periksa Susunan
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm"
          >
            <span>Soal Berikutnya</span>
            <ArrowRight size={14} />
          </button>
        )}
      </div>
    </div>
  );
}

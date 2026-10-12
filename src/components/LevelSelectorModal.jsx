import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { 
  Sparkles, 
  Check, 
  X, 
  ChevronRight, 
  Layers, 
  Lock, 
  BookOpen, 
  Calendar,
  Award
} from 'lucide-react';
import { HSK_LEVELS_CONFIG } from '../data/hskLevelsConfig';
import { useLearning } from '../context/LearningContext';

export default function LevelSelectorModal({ isOpen, onClose, isFirstTime = false, onProceedToTarget }) {
  const { currentLevel, setCurrentLevel, setHasSelectedLevel, dailyTarget } = useLearning();
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && !isFirstTime && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, isFirstTime]);

  if (!isOpen) return null;

  const handleSelectLevel = (levelNum) => {
    setCurrentLevel(levelNum);
    if (isFirstTime && onProceedToTarget) {
      onProceedToTarget(levelNum);
    } else {
      if (setHasSelectedLevel) setHasSelectedLevel(true);
      onClose();
    }
  };

  const filteredLevels = selectedCategory === 'all'
    ? HSK_LEVELS_CONFIG
    : HSK_LEVELS_CONFIG.filter(l => l.category === selectedCategory);

  return createPortal(
    <div 
      onClick={(e) => { if (!isFirstTime && e.target === e.currentTarget) onClose(); }}
      className="fixed inset-0 z-[100] flex items-start justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md overflow-y-auto animate-fade-in"
    >
      <div 
        className="bg-white rounded-3xl max-w-xl w-full p-5 sm:p-7 shadow-2xl border border-slate-100 my-6 sm:my-10 space-y-5 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-100 pb-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-600 text-[11px] font-bold border border-rose-100">
              <Sparkles size={11} />
              <span>{isFirstTime ? 'Langkah 1 dari 2 • Tingkat HSK' : 'Standar Baru HSK 3.0'}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
              {isFirstTime ? 'Pilih Tingkat HSK Awal Anda' : 'Ganti Tingkat HSK Belajar'}
            </h3>
            <p className="text-xs text-slate-500">
              {isFirstTime 
                ? 'Pilih jenjang yang ingin Anda mulai sekarang. Selanjutnya Anda akan memilih target belajar harian.'
                : 'Pilih jenjang HSK untuk mengubah fokus dashboard, kamus, dan modul latihan.'}
            </p>
          </div>

          {!isFirstTime && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer shrink-0"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100/80 rounded-2xl border border-slate-200/50">
          {[
            { id: 'all', label: 'Semua (1-9)' },
            { id: 'dasar', label: 'Dasar (1-3)' },
            { id: 'menengah', label: 'Menengah (4-6)' },
            { id: 'mahir', label: 'Mahir (7-9)' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex-1 py-1.5 px-2.5 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Level List */}
        <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
          {filteredLevels.map((lvl) => {
            const isCurrent = currentLevel === lvl.level;
            const isReady = lvl.level === 1 || lvl.level === 2;

            return (
              <div
                key={lvl.level}
                onClick={() => handleSelectLevel(lvl.level)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 group relative overflow-hidden ${
                  isCurrent
                    ? 'border-rose-500 bg-rose-50/50 ring-2 ring-rose-500/20 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/60'
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-sm shadow-xs bg-gradient-to-br ${lvl.color} shrink-0`}>
                    {lvl.code}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-bold text-sm text-slate-900 truncate">
                        {lvl.title}
                      </h4>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">
                        {lvl.cefr}
                      </span>
                      {lvl.level === 1 && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Rekomendasi Pemula
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                      {lvl.desc}
                    </p>
                    <div className="flex items-center gap-3 text-[10px] text-slate-400 font-medium mt-1">
                      <span>📚 {lvl.totalWords.toLocaleString()} Kata</span>
                      <span>✍️ {lvl.hanziCount} Hanzi</span>
                      <span>⚡ ~{Math.ceil(lvl.totalWords / (dailyTarget || 15))} Hari ({dailyTarget || 15} kata/hari)</span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  {isCurrent ? (
                    <span className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-rose-600 text-white text-xs font-bold shadow-xs">
                      <Check size={13} />
                      <span>Aktif</span>
                    </span>
                  ) : (
                    <button
                      className="px-3 py-1.5 rounded-xl bg-slate-900 group-hover:bg-rose-600 text-white text-xs font-bold transition-colors"
                    >
                      Pilih
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="pt-2 border-t border-slate-100 text-center">
          <p className="text-[11px] text-slate-400">
            Anda dapat mengganti tingkat HSK kapan saja melalui lencana HSK di pojok kiri atas aplikasi.
          </p>
        </div>

      </div>
    </div>,
    document.body
  );
}

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, 
  BookOpen, 
  Volume2, 
  Sparkles, 
  Lightbulb, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { speakChinese } from '../utils/speech';

export default function DayGrammarModal({ 
  isOpen, 
  onClose, 
  day, 
  grammarPoints = [], 
  currentLevel = 1,
  onStartStudy,
  audioSpeed = 0.85
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div 
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in"
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full p-5 sm:p-7 shadow-2xl border border-slate-100 space-y-5 animate-scale-up my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-100 pb-4 shrink-0">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[11px] font-bold border border-indigo-100">
              <BookOpen size={12} className="text-indigo-600" />
              <span>Tata Bahasa Hari ke-{day} • HSK {currentLevel}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
              Materi Tata Bahasa & Pola Kalimat
            </h3>
            <p className="text-xs text-slate-500">
              Kuasai {grammarPoints.length} poin tata bahasa penting yang terintegrasi langsung dengan kosakata hari ini.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            title="Tutup (Esc)"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Content List */}
        <div className="overflow-y-auto space-y-5 pr-1.5 flex-1">
          {grammarPoints.length === 0 ? (
            <div className="p-8 text-center text-slate-400 space-y-2">
              <BookOpen size={32} className="mx-auto text-slate-300" />
              <p className="text-sm font-semibold">Tidak ada tata bahasa khusus untuk hari ini.</p>
              <p className="text-xs">Fokus pada penguasaan memori kosakata dan audio refleks.</p>
            </div>
          ) : (
            grammarPoints.map((gp, idx) => (
              <div 
                key={gp.id || idx}
                className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-4 hover:border-indigo-200 transition-colors"
              >
                {/* Title & Category */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                    {gp.category || 'Tata Bahasa'}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    Poin #{gp.id}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  {gp.title}
                </h4>

                {/* Formula Box */}
                {gp.formula && (
                  <div className="p-3.5 rounded-xl bg-white border border-indigo-100 shadow-2xs space-y-1">
                    <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">
                      Rumus Pola:
                    </span>
                    <p className="font-mono text-xs sm:text-sm font-bold text-slate-800 break-words">
                      {gp.formula}
                    </p>
                  </div>
                )}

                {/* Indonesian Explanation */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {gp.desc}
                </p>

                {/* Examples */}
                {gp.contoh && gp.contoh.length > 0 && (
                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Contoh Kalimat Aplikatif (Klik Audio):
                    </span>
                    <div className="space-y-2">
                      {gp.contoh.map((ex, exIdx) => (
                        <div 
                          key={exIdx}
                          onClick={() => speakChinese(ex.hz, audioSpeed)}
                          className="p-3 rounded-xl bg-white border border-slate-200/70 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all cursor-pointer flex items-start justify-between gap-3 group"
                        >
                          <div className="space-y-0.5">
                            <p className="text-sm sm:text-base font-bold font-hanzi text-slate-900 group-hover:text-indigo-600 transition-colors">
                              {ex.hz}
                            </p>
                            <p className="text-xs font-mono text-rose-500 font-semibold">
                              {ex.py}
                            </p>
                            <p className="text-xs text-slate-500">
                              {ex.id}
                            </p>
                          </div>
                          <button
                            type="button"
                            className="p-2 rounded-lg bg-slate-100 group-hover:bg-indigo-100 text-slate-500 group-hover:text-indigo-600 transition-colors shrink-0"
                            title="Dengarkan Audio"
                          >
                            <Volume2 size={15} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Practical Tips */}
                {gp.tips && (
                  <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200/60 text-xs text-amber-900 flex items-start gap-2">
                    <Lightbulb size={15} className="text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-[11px] leading-relaxed">
                      <strong>Tips Penggunaan:</strong> {gp.tips}
                    </p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
          >
            Tutup
          </button>

          {onStartStudy && (
            <button
              onClick={() => {
                onClose();
                onStartStudy(day, 'flashcard');
              }}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Pelajari Kosakata Hari Ini</span>
              <ArrowRight size={14} />
            </button>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

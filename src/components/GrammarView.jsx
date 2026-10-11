import React from 'react';
import { BookOpen, Volume2, Lightbulb } from 'lucide-react';
import { GRAMMAR_POINTS } from '../data/grammarPoints';
import { speakChinese } from '../utils/speech';
import { useLearning } from '../context/LearningContext';

export default function GrammarView() {
  const { audioSpeed } = useLearning();

  return (
    <div className="max-w-3xl mx-auto space-y-5 animate-fade-in pb-16">
      {/* Header */}
      <div className="text-center max-w-lg mx-auto py-2">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          10 Tata Bahasa Inti HSK 1 (Standar 3.0)
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Kuasai 10 struktur utama ini untuk merangkai 500 kosakata Anda menjadi kalimat percakapan yang alami.
        </p>
      </div>

      {/* Grammar Cards */}
      <div className="space-y-4">
        {GRAMMAR_POINTS.map(point => (
          <div
            key={point.id}
            className="card-subtle rounded-3xl p-5 sm:p-6 space-y-3.5"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                {point.title}
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 font-mono">
                #{point.id}
              </span>
            </div>

            {/* Formula Block */}
            <div className="bg-slate-900 text-slate-100 rounded-2xl p-3.5 font-mono text-xs border border-slate-800 shadow-inner">
              <span className="text-amber-400 font-bold block text-[10px] mb-0.5 tracking-wider uppercase">RUMUS POLA:</span>
              <pre className="whitespace-pre-wrap font-sans font-semibold leading-relaxed text-xs">{point.formula}</pre>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-600 leading-relaxed">
              {point.desc}
            </p>

            {/* Example Sentences */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Contoh Kalimat:
              </span>
              <div className="space-y-1.5">
                {point.contoh.map((c, idx) => (
                  <div
                    key={idx}
                    className="flex items-start justify-between gap-2 p-2.5 rounded-xl bg-slate-50/80 border border-slate-100 hover:bg-rose-50/30 transition-colors"
                  >
                    <div>
                      <p className="text-sm font-bold text-slate-900 font-hanzi">
                        {c.hz}
                      </p>
                      <p className="text-xs font-mono text-rose-500">
                        {c.py}
                      </p>
                      <p className="text-[11px] text-slate-500 italic mt-0.5">
                        {c.id}
                      </p>
                    </div>

                    <button
                      onClick={() => speakChinese(c.hz, audioSpeed)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 transition-colors shrink-0"
                      title="Putar Audio"
                    >
                      <Volume2 size={15} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Tip */}
            {point.tips && (
              <div className="p-2.5 bg-amber-50/60 border border-amber-200/50 rounded-xl flex items-start gap-1.5 text-xs text-amber-900">
                <Lightbulb size={14} className="text-amber-600 shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed">
                  <strong>Kunci:</strong> {point.tips}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

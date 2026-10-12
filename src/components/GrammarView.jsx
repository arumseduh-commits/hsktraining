import React, { useState, useMemo } from 'react';
import { BookOpen, Volume2, Lightbulb, Search, X, Sparkles, Filter } from 'lucide-react';
import { GRAMMAR_POINTS, GRAMMAR_CATEGORIES } from '../data/grammarPoints';
import { speakChinese } from '../utils/speech';
import { useLearning } from '../context/LearningContext';

export default function GrammarView() {
  const { audioSpeed } = useLearning();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredGrammar = useMemo(() => {
    return GRAMMAR_POINTS.filter(point => {
      const matchCat = selectedCategory === 'Semua' || point.category === selectedCategory;
      if (!matchCat) return false;
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const matchTitle = point.title.toLowerCase().includes(q);
      const matchFormula = point.formula.toLowerCase().includes(q);
      const matchDesc = point.desc.toLowerCase().includes(q);
      const matchContoh = point.contoh.some(c => 
        c.hz.includes(q) || c.py.toLowerCase().includes(q) || c.id.toLowerCase().includes(q)
      );

      return matchTitle || matchFormula || matchDesc || matchContoh;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fade-in pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-7 text-white shadow-xl shadow-slate-900/10 border border-indigo-500/20 relative overflow-hidden">
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold border border-rose-500/30">
            <Sparkles size={13} className="text-rose-400" />
            <span>Kurikulum Resmi Standar 3.0</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            48 Tata Bahasa Lengkap HSK 1
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            Kuasai seluruh 48 rumus struktur, partikel (吗, 呢, 的, 了), kata tanya, negasi (不 vs 没), satuan, kata kerja modal, dan pola kalimat untuk mahir berbicara Mandarin.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative z-10 mt-5 flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-2xl p-1.5 border border-white/15 focus-within:border-rose-400 transition-colors">
          <Search size={16} className="text-slate-300 ml-2.5 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari tata bahasa (misal: bù, 吗, modal, satuan, waktu, kepemilikan)..."
            className="w-full bg-transparent text-white placeholder-slate-400 text-xs sm:text-sm px-2 py-1 outline-hidden"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors mr-1 cursor-pointer"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Subtle Hanzi Watermark */}
        <div className="absolute -right-4 -bottom-6 text-9xl font-black text-white/5 select-none pointer-events-none font-hanzi">
          语
        </div>
      </div>

      {/* Category Pills Navigation */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/50">
        {GRAMMAR_CATEGORIES.map(cat => {
          const isActive = selectedCategory === cat;
          const count = cat === 'Semua' 
            ? GRAMMAR_POINTS.length 
            : GRAMMAR_POINTS.filter(p => p.category === cat).length;

          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-rose-500 text-white font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <span>{cat}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Counter summary */}
      <div className="flex items-center justify-between px-2 text-xs text-slate-400">
        <span>Menampilkan {filteredGrammar.length} dari total 48 poin tata bahasa</span>
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery('')}
            className="text-rose-500 hover:underline cursor-pointer"
          >
            Hapus pencarian
          </button>
        )}
      </div>

      {/* Grammar Cards List */}
      {filteredGrammar.length === 0 ? (
        <div className="card-subtle rounded-3xl p-10 text-center space-y-3">
          <BookOpen size={36} className="text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-700">Tata Bahasa Tidak Ditemukan</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Tidak ada tata bahasa yang cocok dengan kata kunci "{searchQuery}". Coba gunakan kata kunci lain seperti "吗", "tidak", "satuan", atau "buku".
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('Semua'); }}
            className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold cursor-pointer"
          >
            Tampilkan Semua Tata Bahasa
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredGrammar.map(point => (
            <div
              key={point.id}
              className="card-subtle rounded-3xl p-5 sm:p-6 space-y-3.5 bg-white border border-slate-200/80 shadow-xs hover:border-rose-200 transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 mb-1 inline-block">
                    {point.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    {point.title}
                  </h3>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-xl bg-slate-900 text-white font-mono shrink-0">
                  #{point.id}
                </span>
              </div>

              {/* Formula Block */}
              <div className="bg-slate-900 text-slate-100 rounded-2xl p-3.5 font-mono text-xs border border-slate-800 shadow-inner">
                <span className="text-amber-400 font-bold block text-[10px] mb-1 tracking-wider uppercase">
                  RUMUS POLA:
                </span>
                <pre className="whitespace-pre-wrap font-sans font-semibold leading-relaxed text-xs text-amber-100">
                  {point.formula}
                </pre>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {point.desc}
              </p>

              {/* Example Sentences */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Contoh Kalimat Nyata:
                </span>
                <div className="space-y-1.5">
                  {point.contoh.map((c, idx) => (
                    <div
                      key={idx}
                      className="flex items-start justify-between gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-rose-50/40 transition-colors"
                    >
                      <div className="space-y-0.5">
                        <p className="text-sm sm:text-base font-bold text-slate-900 font-hanzi">
                          {c.hz}
                        </p>
                        <p className="text-xs font-mono text-rose-600 font-medium">
                          {c.py}
                        </p>
                        <p className="text-xs text-slate-500 italic">
                          {c.id}
                        </p>
                      </div>

                      <button
                        onClick={() => speakChinese(c.hz, audioSpeed)}
                        className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-100/60 transition-colors shrink-0 cursor-pointer"
                        title="Putar Audio Pengucapan"
                      >
                        <Volume2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Memory Tip */}
              {point.tips && (
                <div className="p-3 bg-amber-50/80 border border-amber-200/60 rounded-2xl flex items-start gap-2 text-xs text-amber-950">
                  <Lightbulb size={15} className="text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-xs leading-relaxed">
                    <strong>Trik Ingat:</strong> {point.tips}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

import React, { useState, useMemo, useEffect } from 'react';
import { BookOpen, Volume2, Lightbulb, Search, X, Sparkles, Filter, Layers, Check } from 'lucide-react';
import { 
  getGrammarByLevel, 
  getGrammarCategoriesByLevel, 
  HSK1_GRAMMAR_POINTS, 
  HSK2_GRAMMAR_POINTS 
} from '../data/grammarPoints';
import { speakChinese } from '../utils/speech';
import { useLearning } from '../context/LearningContext';

export default function GrammarView() {
  const { audioSpeed, currentLevel } = useLearning();
  
  // Tab level state: defaults to user's active learning level
  const [viewLevel, setViewLevel] = useState(() => currentLevel === 2 ? 2 : 1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  // Sync if global level changes
  useEffect(() => {
    if (currentLevel === 1 || currentLevel === 2) {
      setViewLevel(currentLevel);
    }
  }, [currentLevel]);

  // Handle switching level tabs
  const handleSwitchLevel = (lvl) => {
    setViewLevel(lvl);
    setSelectedCategory('Semua');
    setSearchQuery('');
  };

  const currentGrammarList = useMemo(() => {
    return getGrammarByLevel(viewLevel);
  }, [viewLevel]);

  const currentCategories = useMemo(() => {
    return getGrammarCategoriesByLevel(viewLevel);
  }, [viewLevel]);

  const filteredGrammar = useMemo(() => {
    return currentGrammarList.filter(point => {
      const matchCat = selectedCategory === 'Semua' || point.category === selectedCategory;
      if (!matchCat) return false;
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const matchTitle = point.title.toLowerCase().includes(q);
      const matchFormula = (point.formula || '').toLowerCase().includes(q);
      const matchDesc = (point.desc || '').toLowerCase().includes(q);
      const matchContoh = (point.contoh || []).some(c => 
        (c.hz || '').includes(q) || 
        (c.py || '').toLowerCase().includes(q) || 
        (c.id || '').toLowerCase().includes(q)
      );

      return matchTitle || matchFormula || matchDesc || matchContoh;
    });
  }, [currentGrammarList, searchQuery, selectedCategory]);

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fade-in pb-20">
      {/* Level Selector Tabs */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-100/90 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-2xs">
        <button
          onClick={() => handleSwitchLevel(1)}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
            viewLevel === 1
              ? 'bg-rose-500 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
          }`}
        >
          <Layers size={15} />
          <span>HSK 1 (48 Tata Bahasa Dasar)</span>
          {currentLevel === 1 && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/20 text-white font-mono">
              Aktif
            </span>
          )}
        </button>

        <button
          onClick={() => handleSwitchLevel(2)}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
            viewLevel === 2
              ? 'bg-amber-500 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
          }`}
        >
          <Sparkles size={15} />
          <span>HSK 2 (Standar 3.0 • 50 Poin)</span>
          {currentLevel === 2 && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/20 text-white font-mono">
              Aktif
            </span>
          )}
        </button>
      </div>

      {/* Header Banner */}
      <div className={`rounded-3xl p-6 sm:p-7 text-white shadow-xl shadow-slate-900/10 border relative overflow-hidden transition-all ${
        viewLevel === 2
          ? 'bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 border-amber-500/30'
          : 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border-indigo-500/20'
      }`}>
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md">
            <Sparkles size={13} className={viewLevel === 2 ? 'text-amber-400' : 'text-rose-400'} />
            <span className={viewLevel === 2 ? 'text-amber-200' : 'text-rose-200'}>
              Standar 3.0 MOE / CTI 汉考国际 • Tingkat HSK {viewLevel}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {viewLevel === 2 
              ? '50 Tata Bahasa Lengkap HSK 2 (Standar 3.0)' 
              : '48 Tata Bahasa Lengkap HSK 1'}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            {viewLevel === 2
              ? 'Kuasai seluruh kaidah percakapan praktis HSK 2: perbandingan (比 / 一样), preposisi arah & jarak (离 / 往 / 对 / 从到), kata kerja modal (可以 / 应该 / 得), aspek (过 / 着 / 快要), pelengkap (完 / 好 / 懂 / 得), dan kalimat majemuk (因为所以 / 虽然但是 / 如果就).'
              : 'Kuasai seluruh 48 rumus struktur, partikel (吗, 呢, 的, 了), kata tanya, negasi (不 vs 没), satuan, kata kerja modal, dan pola kalimat untuk membangun fondasi kokoh berbicara Mandarin.'}
          </p>
        </div>

        {/* Search Bar */}
        <div className={`relative z-10 mt-5 flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-2xl p-1.5 border transition-colors ${
          viewLevel === 2 ? 'focus-within:border-amber-400 border-white/15' : 'focus-within:border-rose-400 border-white/15'
        }`}>
          <Search size={16} className="text-slate-300 ml-2.5 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Cari tata bahasa HSK ${viewLevel} (misal: ${viewLevel === 2 ? '比, 过, 得, 离, 因为, modal' : 'bù, 吗, modal, satuan, waktu'})...`}
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
          {viewLevel === 2 ? '法' : '语'}
        </div>
      </div>

      {/* Category Pills Navigation */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/50">
        {currentCategories.map(cat => {
          const isActive = selectedCategory === cat;
          const count = cat === 'Semua' 
            ? currentGrammarList.length 
            : currentGrammarList.filter(p => p.category === cat).length;

          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? viewLevel === 2
                    ? 'bg-amber-500 text-white font-bold shadow-xs'
                    : 'bg-rose-500 text-white font-bold shadow-xs'
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
        <span>Menampilkan {filteredGrammar.length} dari total {currentGrammarList.length} poin tata bahasa HSK {viewLevel}</span>
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
        <div className="card-subtle rounded-3xl p-10 text-center space-y-3 bg-white border border-slate-200/80">
          <BookOpen size={36} className="text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-700">Tata Bahasa Tidak Ditemukan</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Tidak ada tata bahasa HSK {viewLevel} yang cocok dengan kata kunci "{searchQuery}". Coba gunakan kata kunci lain seperti "{viewLevel === 2 ? '比' : '吗'}", "perbandingan", atau "karena".
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('Semua'); }}
            className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold cursor-pointer"
          >
            Tampilkan Semua Tata Bahasa HSK {viewLevel}
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredGrammar.map(point => (
            <div
              key={point.id}
              className={`card-subtle rounded-3xl p-5 sm:p-6 space-y-3.5 bg-white border border-slate-200/80 shadow-xs transition-all ${
                viewLevel === 2 ? 'hover:border-amber-300' : 'hover:border-rose-200'
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md mb-1 inline-block ${
                    viewLevel === 2 
                      ? 'bg-amber-50 text-amber-700 border border-amber-200/60' 
                      : 'bg-rose-50 text-rose-700 border border-rose-200/60'
                  }`}>
                    {point.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    {point.title}
                  </h3>
                </div>
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-xl text-white font-mono shrink-0 ${
                  viewLevel === 2 ? 'bg-amber-600' : 'bg-slate-900'
                }`}>
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
                      className={`flex items-start justify-between gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-100 transition-colors ${
                        viewLevel === 2 ? 'hover:bg-amber-50/40' : 'hover:bg-rose-50/40'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <p className="text-sm sm:text-base font-bold text-slate-900 font-hanzi">
                          {c.hz}
                        </p>
                        <p className={`text-xs font-mono font-medium ${
                          viewLevel === 2 ? 'text-amber-700' : 'text-rose-600'
                        }`}>
                          {c.py}
                        </p>
                        <p className="text-xs text-slate-500 italic">
                          {c.id}
                        </p>
                      </div>

                      <button
                        onClick={() => speakChinese(c.hz, audioSpeed)}
                        className={`p-2 rounded-xl text-slate-400 transition-colors shrink-0 cursor-pointer ${
                          viewLevel === 2 
                            ? 'hover:text-amber-600 hover:bg-amber-100/60' 
                            : 'hover:text-rose-600 hover:bg-rose-100/60'
                        }`}
                        title="Putar Audio Pengucapan"
                      >
                        <Volume2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Memory Tip (if present) */}
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

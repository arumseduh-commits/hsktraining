import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Volume2, 
  Check, 
  X
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { speakChinese } from '../utils/speech';

export default function VocabListView() {
  const { words, wordStatus, updateWordStatus, audioSpeed, daysConfig } = useLearning();
  const sprintDaysList = daysConfig ? daysConfig.map(d => d.day) : [1, 2, 3, 4];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDay, setSelectedDay] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredWords = useMemo(() => {
    return words.filter(w => {
      if (selectedDay !== 'all' && w.day !== Number(selectedDay)) return false;

      const status = wordStatus[w.id] || 'unseen';
      if (selectedStatus === 'mastered' && status !== 'mastered') return false;
      if (selectedStatus === 'reviewing' && status !== 'reviewing') return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesHz = w.hanzi.includes(q);
        const matchesPy = w.pinyin.toLowerCase().includes(q);
        const matchesId = w.arti.toLowerCase().includes(q);
        if (!matchesHz && !matchesPy && !matchesId) return false;
      }

      return true;
    });
  }, [words, selectedDay, selectedStatus, searchQuery, wordStatus]);

  const toggleMastered = (id) => {
    const current = wordStatus[id];
    updateWordStatus(id, current === 'mastered' ? 'reviewing' : 'mastered');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4 animate-fade-in pb-16">
      {/* Search & Filter Header */}
      <div className="card-subtle rounded-3xl p-4 sm:p-5 space-y-3">
        {/* Search Input */}
        <div className="relative w-full">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari kata (Hanzi, Pinyin, atau Arti)..."
            className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all placeholder:text-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          {/* Day Pills */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar scroll-smooth max-w-full sm:max-w-md py-0.5">
            <button
              onClick={() => setSelectedDay('all')}
              className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                selectedDay === 'all' ? 'bg-slate-900 text-white font-bold' : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              Semua
            </button>
            {sprintDaysList.map(d => (
              <button
                key={d}
                onClick={() => setSelectedDay(d)}
                className={`px-2.5 py-1 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedDay === d ? 'bg-rose-500 text-white font-bold shadow-xs' : 'text-slate-500 hover:bg-slate-100'
                }`}
              >
                H{d}
              </button>
            ))}
          </div>

          {/* Status Pills */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setSelectedStatus('all')}
              className={`px-2.5 py-1 rounded-xl text-xs font-semibold transition-all ${
                selectedStatus === 'all' ? 'bg-slate-200/80 text-slate-800' : 'text-slate-400'
              }`}
            >
              Semua
            </button>
            <button
              onClick={() => setSelectedStatus('mastered')}
              className={`px-2.5 py-1 rounded-xl text-xs font-semibold transition-all ${
                selectedStatus === 'mastered' ? 'bg-emerald-100 text-emerald-800 font-bold' : 'text-slate-400'
              }`}
            >
              Dikuasai
            </button>
            <button
              onClick={() => setSelectedStatus('reviewing')}
              className={`px-2.5 py-1 rounded-xl text-xs font-semibold transition-all ${
                selectedStatus === 'reviewing' ? 'bg-amber-100 text-amber-800 font-bold' : 'text-slate-400'
              }`}
            >
              Diulang
            </button>
          </div>
        </div>

        <div className="text-[11px] text-slate-400 font-medium text-right pt-0.5">
          {filteredWords.length} dari {words.length} kosakata
        </div>
      </div>

      {/* Words Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
        {filteredWords.map(w => {
          const isMastered = wordStatus[w.id] === 'mastered';
          const isReviewing = wordStatus[w.id] === 'reviewing';

          return (
            <div
              key={w.id}
              className={`card-subtle rounded-2xl p-3.5 flex flex-col justify-between ${
                isMastered
                  ? 'border-emerald-200/60 bg-emerald-50/15'
                  : isReviewing
                  ? 'border-amber-200/60 bg-amber-50/15'
                  : ''
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-slate-900 font-hanzi">
                      {w.hanzi}
                    </span>
                    <button
                      onClick={() => speakChinese(w.hanzi, audioSpeed)}
                      className="p-1 rounded-full text-slate-400 hover:text-rose-500 transition-colors"
                      title="Dengar Suara"
                    >
                      <Volume2 size={15} />
                    </button>
                  </div>

                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-400">
                    H{w.day}
                  </span>
                </div>

                <div className="text-xs font-bold text-rose-500 font-mono">
                  {w.pinyin}
                </div>
                <div className="text-xs font-semibold text-slate-800 mt-0.5">
                  {w.arti}
                </div>
              </div>

              {/* Status Action */}
              <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-[10px] text-slate-300 font-mono">#{w.id}</span>
                <button
                  onClick={() => toggleMastered(w.id)}
                  className={`flex items-center gap-1 px-2 py-0.5 rounded-lg font-semibold transition-all ${
                    isMastered
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'text-slate-400 hover:text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Check size={12} className={isMastered ? 'text-emerald-600' : 'text-slate-300'} />
                  <span>{isMastered ? 'Dikuasai' : 'Tandai'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

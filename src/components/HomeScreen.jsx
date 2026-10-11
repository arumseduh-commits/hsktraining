import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  Layers, 
  Calendar, 
  BookOpen, 
  Award, 
  Zap,
  TrendingUp,
  Info,
  GraduationCap
} from 'lucide-react';
import { HSK_LEVELS_CONFIG, TOTAL_HSK9_WORDS } from '../data/hskLevelsConfig';
import { useLearning } from '../context/LearningContext';

export default function HomeScreen({ onSelectLevel, onOpenStudyTab, onOpenExamTab }) {
  const { 
    totalMastered, 
    words, 
    candidateName, 
    currentLevel, 
    setCurrentLevel,
    markFirst150Mastered
  } = useLearning();

  const [previewLevel, setPreviewLevel] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all'); // 'all', 'dasar', 'menengah', 'mahir'

  const totalHsk1Words = words.length;
  const hsk1Percent = Math.round((totalMastered / totalHsk1Words) * 100);

  // Overall journey toward HSK 9 (11,092 words)
  const overallJourneyPercent = ((totalMastered / TOTAL_HSK9_WORDS) * 100).toFixed(1);

  const handleCardClick = (lvlConfig) => {
    if (lvlConfig.level === 1) {
      setCurrentLevel(1);
      onOpenStudyTab();
    } else {
      setPreviewLevel(lvlConfig);
    }
  };

  const filteredLevels = selectedCategory === 'all'
    ? HSK_LEVELS_CONFIG
    : HSK_LEVELS_CONFIG.filter(l => l.category === selectedCategory);

  return (
    <div className="space-y-6 animate-fade-in pb-16 max-w-xl mx-auto">
      {/* User Greeting & Journey Milestone Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-3xl p-6 text-white shadow-lg shadow-slate-900/10 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[11px] font-semibold">
              <Sparkles size={11} className="text-rose-400" />
              <span>Target: Puncak HSK 9 (11.092 Kata)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
              Halo, {candidateName} 👋
            </h2>
          </div>

          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-400 text-white font-black text-lg flex items-center justify-center shadow-md shadow-rose-500/25 font-hanzi">
            汉
          </div>
        </div>

        {/* Global Journey Progress toward HSK 9 */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-300 font-medium">Perjalanan Kumulatif HSK 1 ➔ HSK 9</span>
            <span className="text-amber-300 font-bold font-mono">{totalMastered} / 11.092 kata ({overallJourneyPercent}%)</span>
          </div>
          <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden p-0.5 border border-white/10">
            <div 
              className="h-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400 rounded-full transition-all duration-700"
              style={{ width: `${Math.max(parseFloat(overallJourneyPercent), 1.5)}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[10px] text-slate-400 font-medium pt-0.5">
            <span>Level Aktif: <strong>HSK {currentLevel}</strong></span>
            <span>Target Puncak: <strong>HSK 9 (C2+ Native)</strong></span>
          </div>
        </div>

        {/* 3 Major HSK 3.0 Bands Indicator */}
        <div className="grid grid-cols-3 gap-2 pt-1 text-center">
          <div className="p-2 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[10px] text-slate-400 block font-semibold">Dasar (1-3)</span>
            <span className="text-xs font-bold text-rose-300">2.245 Kata</span>
          </div>
          <div className="p-2 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[10px] text-slate-400 block font-semibold">Menengah (4-6)</span>
            <span className="text-xs font-bold text-amber-300">5.456 Kata</span>
          </div>
          <div className="p-2 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[10px] text-slate-400 block font-semibold">Mahir (7-9)</span>
            <span className="text-xs font-bold text-emerald-300">11.092 Kata</span>
          </div>
        </div>
      </div>

      {/* Quick 150 Words Unlock Widget (For fast start) */}
      {totalMastered < 150 && (
        <div className="p-4 rounded-3xl bg-amber-50/80 border border-amber-200/80 flex items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-white font-bold flex items-center justify-center text-sm shadow-xs shrink-0">
              ⚡
            </div>
            <div>
              <h4 className="text-xs font-bold text-amber-950">Sudah hafal 150 kata pertama?</h4>
              <p className="text-[11px] text-amber-800">Tandai langsung 150 kata awal sebagai sudah dikuasai.</p>
            </div>
          </div>
          <button
            onClick={markFirst150Mastered}
            className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold shrink-0 transition-transform active:scale-95 shadow-xs"
          >
            Kunci 150
          </button>
        </div>
      )}

      {/* HSK 1 - HSK 9 INTERACTIVE CARDS LIST */}
      <div className="space-y-3.5">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
            <TrendingUp size={16} className="text-rose-500" />
            <span>Pilih Jenjang HSK (Standar 3.0)</span>
          </h3>
          <span className="text-xs text-slate-400 font-medium">9 Tingkatan</span>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-2xl border border-slate-200/60 overflow-x-auto no-scrollbar">
          {[
            { id: 'all', label: 'Semua (1-9)' },
            { id: 'dasar', label: 'Dasar (1-3)' },
            { id: 'menengah', label: 'Menengah (4-6)' },
            { id: 'mahir', label: 'Mahir (7-9)' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap text-center ${
                selectedCategory === cat.id
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards List */}
        <div className="space-y-3.5">
          {filteredLevels.map((lvl) => {
            const isLevel1 = lvl.level === 1;
            const progress = isLevel1 ? hsk1Percent : 0;
            const isCurrentActive = currentLevel === lvl.level;

            return (
              <div
                key={lvl.level}
                onClick={() => handleCardClick(lvl)}
                className={`card-subtle rounded-3xl p-5 cursor-pointer relative overflow-hidden transition-all duration-200 border ${
                  isCurrentActive 
                    ? 'border-rose-400/90 ring-2 ring-rose-500/10 shadow-md' 
                    : 'hover:border-slate-300'
                }`}
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center text-white font-black text-sm shadow-sm bg-gradient-to-br ${lvl.color}`}>
                      {lvl.code}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-slate-900">
                          {lvl.code}
                        </h4>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          CEFR {lvl.cefr}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-400 hidden sm:inline">
                          • {lvl.categoryLabel.split(' ')[0]}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-slate-500">
                        {lvl.title}
                      </p>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div>
                    {isLevel1 ? (
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-200/60">
                        {progress}% Selesai
                      </span>
                    ) : lvl.level === 2 ? (
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200/60">
                        Siap Dibuka
                      </span>
                    ) : (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-400 flex items-center gap-1">
                        <Lock size={10} />
                        <span>Level Lanjutan</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Level metrics pills */}
                <div className="flex flex-wrap items-center gap-1.5 my-3 text-[11px] font-semibold">
                  <span className="px-2.5 py-1 rounded-xl bg-slate-100 text-slate-700">
                    📚 {lvl.totalWords.toLocaleString()} Kata Total
                  </span>
                  <span className="px-2.5 py-1 rounded-xl bg-slate-100 text-slate-700">
                    ✍️ {lvl.hanziCount.toLocaleString()} Hanzi
                  </span>
                  <span className="px-2.5 py-1 rounded-xl bg-slate-100 text-slate-700">
                    ⏱️ {lvl.sprintProtocol.split(' ')[0]} {lvl.sprintProtocol.split(' ')[1]}
                  </span>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {lvl.desc}
                </p>

                {/* Progress bar (For Level 1) */}
                {isLevel1 && (
                  <div className="space-y-1 mb-4">
                    <div className="flex justify-between text-[11px] font-medium text-slate-400">
                      <span>Progres: {totalMastered} dari {totalHsk1Words} kata</span>
                      <span className="font-bold text-rose-600">{progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-rose-500 rounded-full transition-all duration-500"
                        style={{ width: `${Math.max(progress, 2)}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Action CTA */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    {isLevel1 ? 'Modul Siap Dipelajari' : 'Klik untuk rincian kurikulum'}
                  </span>

                  <div className="flex items-center gap-2">
                    {isLevel1 && onOpenExamTab && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenExamTab();
                        }}
                        className="flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold bg-rose-50 text-rose-600 hover:bg-rose-100 transition-all active:scale-95"
                        title="Simulasi Ujian Resmi HSK 1"
                      >
                        <Award size={13} />
                        <span>Ujian</span>
                      </button>
                    )}

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(lvl);
                      }}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-2xs ${
                        isLevel1 
                          ? 'bg-slate-900 hover:bg-rose-500 text-white active:scale-95' 
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      <span>{isLevel1 ? 'Masuk Belajar' : 'Lihat Detail'}</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Level Preview Modal for HSK 2-9 */}
      {previewLevel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 space-y-4">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-lg bg-gradient-to-br ${previewLevel.color}`}>
                {previewLevel.code}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-slate-900">{previewLevel.code} — {previewLevel.title}</h4>
                </div>
                <span className="text-xs font-semibold text-slate-500">Standar Internasional CEFR {previewLevel.cefr} • {previewLevel.categoryLabel}</span>
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-2xl text-xs text-slate-700 space-y-2">
              <p><strong>Target Kompetensi:</strong> {previewLevel.targetDescription}</p>
              <div className="grid grid-cols-2 gap-2 pt-1 font-semibold text-slate-600">
                <div>• Total: {previewLevel.totalWords.toLocaleString()} Kosakata</div>
                <div>• Tambahan: +{previewLevel.newWords.toLocaleString()} Kata Baru</div>
                <div>• Hanzi: {previewLevel.hanziCount.toLocaleString()} Karakter</div>
                <div>• Rekomendasi: {previewLevel.sprintProtocol}</div>
              </div>
            </div>

            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
              <Info size={16} className="text-amber-600 shrink-0 mt-0.5" />
              <span>
                Saat ini Anda berada di tahap <strong>HSK 1 (Sprint 4 Hari)</strong>. Setelah lulus simulasi ujian resmi HSK 1, kurikulum {previewLevel.code} akan langsung terbuka untuk dipelajari!
              </span>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setPreviewLevel(null)}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all"
              >
                Kembali ke Beranda
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

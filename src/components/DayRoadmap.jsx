import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Layers, 
  PenTool, 
  Zap, 
  Calendar,
  RotateCcw,
  CheckCircle2,
  Clock,
  Target
} from 'lucide-react';
import { DAYS_CONFIG } from '../data/hsk1Words';
import { useLearning } from '../context/LearningContext';

export default function DayRoadmap({ onSelectDayStudy }) {
  const { 
    totalMastered, 
    words, 
    getDayStats, 
    markFirst150Mastered,
    resetAllProgress,
    daysConfig,
    currentLevel,
    dailyTarget
  } = useLearning();

  const sprintDays = daysConfig || DAYS_CONFIG;

  const totalWords = words.length;
  const progressPercent = Math.round((totalMastered / totalWords) * 100);

  // Dynamic calculation based on user's chosen dailyTarget
  const targetPerDay = dailyTarget || Math.round(totalWords / sprintDays.length);
  const calculatedDays = targetPerDay > 0 ? Math.ceil(totalWords / targetPerDay) : sprintDays.length;

  // SVG Circular progress math
  const circleRadius = 40;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  return (
    <div className="space-y-6 animate-fade-in pb-16 max-w-5xl mx-auto">
      {/* Top Bento Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Hero Card with Apple Activity Ring */}
        <div className="md:col-span-2 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-lg shadow-slate-900/10">
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-md">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-rose-300 text-[11px] font-semibold backdrop-blur-md">
                <Sparkles size={12} className="text-rose-400" />
                <span>Target HSK {currentLevel}: ~{calculatedDays} Hari</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Kuasai {totalWords} Kosakata HSK {currentLevel} dalam <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300">~{calculatedDays} Hari</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                Kurikulum terstruktur {targetPerDay} kata per hari dengan metode Active Recall, latihan refleks audio, dan kanvas Tian Zi Ge.
              </p>
            </div>

            {/* Circular Progress Ring */}
            <div className="relative flex items-center justify-center shrink-0 mx-auto sm:mx-0">
              <svg className="w-28 h-28 transform -rotate-90">
                <circle
                  cx="56"
                  cy="56"
                  r={circleRadius}
                  className="text-slate-800"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                />
                <circle
                  cx="56"
                  cy="56"
                  r={circleRadius}
                  className="text-rose-500 transition-all duration-1000 ease-out"
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center text-center">
                <span className="text-2xl font-black tracking-tight text-white font-mono">
                  {progressPercent}%
                </span>
                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                  Target
                </span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="relative z-10 grid grid-cols-3 gap-2 pt-6 mt-6 border-t border-white/10 text-center sm:text-left">
            <div>
              <span className="text-[11px] text-slate-400 font-medium block">Dikuasai</span>
              <span className="text-base sm:text-lg font-bold text-white font-mono">{totalMastered} kata</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 font-medium block">Tersisa</span>
              <span className="text-base sm:text-lg font-bold text-slate-300 font-mono">{totalWords - totalMastered} kata</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 font-medium block">Target Harian</span>
              <span className="text-base sm:text-lg font-bold text-amber-400 font-mono">
                {targetPerDay} kata/hari
              </span>
            </div>
          </div>

          {/* Subtle Hanzi Watermark */}
          <div className="absolute -right-4 -bottom-10 text-[140px] font-black text-white/5 select-none pointer-events-none font-hanzi">
            {currentLevel === 2 ? '贰' : currentLevel === 3 ? '叁' : '壹'}
          </div>
        </div>

        {/* Quick Acceleration or Level Focus Widget */}
        <div className="card-subtle rounded-3xl p-6 flex flex-col justify-between bg-gradient-to-b from-amber-50/60 to-white border-amber-200/80">
          {currentLevel === 1 ? (
            <>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-sm shadow-xs shadow-amber-500/20">
                    ⚡
                  </div>
                  <span className="text-xs font-bold text-amber-900 tracking-wide uppercase">
                    Akselerasi Belajar
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  Sudah Hafal 150 Kata Pertama?
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Tandai 150 kata awal langsung sebagai <strong>"Sudah Dikuasai"</strong> untuk langsung fokus ke sisa kata berikutnya.
                </p>
              </div>

              <button
                onClick={markFirst150Mastered}
                className="mt-5 w-full py-2.5 px-4 rounded-2xl bg-amber-500 hover:bg-amber-600 active:scale-98 text-white font-bold text-xs shadow-sm transition-all"
              >
                Kunci 150 Kata Awal
              </button>
            </>
          ) : (
            <>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold text-sm shadow-xs shadow-rose-500/20">
                    🚀
                  </div>
                  <span className="text-xs font-bold text-rose-900 tracking-wide uppercase">
                    Fokus HSK {currentLevel}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  Target ~{calculatedDays} Hari HSK {currentLevel}
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Target harian: pelajari {targetPerDay} kosakata per hari dengan Flashcard dan Speed Drill.
                </p>
              </div>

              <button
                onClick={() => onSelectDayStudy(1, 'flashcard')}
                className="mt-5 w-full py-2.5 px-4 rounded-2xl bg-slate-900 hover:bg-rose-500 active:scale-98 text-white font-bold text-xs shadow-sm transition-all"
              >
                Mulai Hari 1 (Flashcard)
              </button>
            </>
          )}
        </div>
      </div>

      {/* Dynamic Sprint Cards Grid */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-sm font-bold tracking-tight text-slate-800 flex items-center gap-2">
            <Calendar size={16} className="text-rose-500" />
            <span>Rencana Kurikulum HSK {currentLevel} (Target {targetPerDay} Kata/Hari • ~{calculatedDays} Hari)</span>
          </h3>

          <button
            onClick={resetAllProgress}
            className="text-[11px] font-medium text-slate-400 hover:text-rose-500 flex items-center gap-1 transition-colors"
          >
            <RotateCcw size={12} />
            <span>Reset Data</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sprintDays.map(dayCfg => {
            const stats = getDayStats(dayCfg.day);
            const isCompleted = stats.percent === 100;

            return (
              <div 
                key={dayCfg.day}
                className="card-subtle rounded-3xl p-5 sm:p-6 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Kata {dayCfg.targetWords}
                    </span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      isCompleted 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' 
                        : stats.percent > 0
                        ? 'bg-amber-50 text-amber-700 border border-amber-100'
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      {stats.percent}% Selesai
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                    {dayCfg.title}
                  </h4>
                  
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {dayCfg.desc}
                  </p>

                  {/* Clean progress bar */}
                  <div className="mt-4 space-y-1">
                    <div className="flex justify-between text-[11px] font-medium text-slate-400">
                      <span>{stats.mastered} dikuasai</span>
                      <span>{stats.total - stats.mastered} tersisa</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-rose-500 rounded-full transition-all duration-500"
                        style={{ width: `${stats.percent}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => onSelectDayStudy(dayCfg.day, 'writing')}
                      className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-50 rounded-xl transition-colors"
                      title="Latihan Menulis Hanzi"
                    >
                      <PenTool size={15} />
                    </button>
                    <button
                      onClick={() => onSelectDayStudy(dayCfg.day, 'drill')}
                      className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-50 rounded-xl transition-colors"
                      title="Speed Drill 60 Detik"
                    >
                      <Zap size={15} />
                    </button>
                  </div>

                  <button
                    onClick={() => onSelectDayStudy(dayCfg.day, 'flashcard')}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-900 hover:bg-rose-500 text-white rounded-xl text-xs font-semibold transition-all active:scale-95 shadow-2xs"
                  >
                    <span>Mulai Belajar</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

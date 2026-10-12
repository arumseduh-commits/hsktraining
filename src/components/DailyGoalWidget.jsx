import React from 'react';
import { 
  Flame, 
  Target, 
  Check, 
  Settings, 
  Sparkles, 
  AlertCircle,
  Zap,
  TrendingUp,
  Award
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function DailyGoalWidget({ onOpenTargetModal }) {
  const { 
    dailyTarget, 
    todayLearnedCount, 
    todayTargetReached, 
    activeStreak,
    isGracePeriodActive,
    getWeeklyDays 
  } = useLearning();

  const progressPercent = Math.min(100, Math.round((todayLearnedCount / dailyTarget) * 100));
  const overCount = Math.max(0, todayLearnedCount - dailyTarget);
  const weekDays = getWeeklyDays ? getWeeklyDays() : [];

  return (
    <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm shadow-slate-900/5 space-y-4">
      {/* Top Header: Streak Flame & Target Switcher */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-xs transition-transform ${
            todayTargetReached 
              ? 'bg-gradient-to-tr from-amber-500 to-rose-500 text-white animate-pulse'
              : activeStreak > 0
                ? 'bg-amber-500 text-white'
                : 'bg-slate-100 text-slate-400'
          }`}>
            <Flame size={22} className={activeStreak > 0 ? 'fill-white' : ''} />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm sm:text-base font-black text-slate-900 flex items-center gap-1.5">
                <span>{activeStreak} Hari Streak</span>
                {todayTargetReached && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Absen ✓
                  </span>
                )}
              </h3>
            </div>

            <p className="text-[11px] text-slate-500">
              {todayTargetReached ? (
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <Check size={12} /> Target hari ini tuntas & absensi tercatat!
                </span>
              ) : isGracePeriodActive ? (
                <span className="text-amber-600 font-semibold flex items-center gap-1">
                  <AlertCircle size={12} /> Hari toleransi! Tuntaskan hari ini agar streak api tidak putus.
                </span>
              ) : (
                <span>Tuntaskan target harian untuk menjaga streak api 🔥</span>
              )}
            </p>
          </div>
        </div>

        {/* Setting Button */}
        <button
          type="button"
          onClick={onOpenTargetModal}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs font-bold transition-all cursor-pointer active:scale-95 shrink-0"
          title="Ubah Target Harian"
        >
          <Target size={13} className="text-rose-500" />
          <span className="font-mono">{dailyTarget}</span>
          <span className="hidden sm:inline">Kata/Hari</span>
          <Settings size={12} className="text-slate-400 ml-0.5" />
        </button>
      </div>

      {/* Progress Bar & Counter */}
      <div className="space-y-1.5 bg-slate-50/80 p-3.5 rounded-2xl border border-slate-100">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-slate-700">
            Progres Hari Ini: <strong className="text-slate-900 font-mono">{todayLearnedCount}</strong> / {dailyTarget} Kata
          </span>
          <span className={`font-black font-mono ${todayTargetReached ? 'text-emerald-600' : 'text-slate-600'}`}>
            {progressPercent}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="h-2.5 w-full bg-slate-200/80 rounded-full overflow-hidden p-0.5">
          <div 
            className={`h-full rounded-full transition-all duration-500 ${
              todayTargetReached
                ? 'bg-gradient-to-r from-amber-400 to-emerald-500'
                : 'bg-gradient-to-r from-rose-500 to-amber-500'
            }`}
            style={{ width: `${Math.max(progressPercent, 4)}%` }}
          />
        </div>

        {/* Over-achievement bonus banner */}
        {overCount > 0 && (
          <div className="pt-1 flex items-center gap-1.5 text-[11px] font-bold text-amber-700">
            <Sparkles size={12} className="text-amber-500 shrink-0" />
            <span>Luar biasa! +{overCount} kata ekstra dipelajari hari ini (Target Terlampaui)! 🔥</span>
          </div>
        )}
      </div>

      {/* 7-Day Weekly Streak Strip */}
      <div className="space-y-1.5">
        <div className="flex justify-between items-center text-[11px] text-slate-400 font-medium px-1">
          <span>Riwayat Absensi Minggu Ini</span>
          <span>Target: {dailyTarget} kata/hari</span>
        </div>

        <div className="grid grid-cols-7 gap-1.5">
          {weekDays.map((day) => {
            return (
              <div
                key={day.dateStr}
                className={`py-2 px-1 rounded-xl text-center border transition-all ${
                  day.isToday
                    ? day.checkedIn
                      ? 'bg-emerald-50 border-emerald-300 ring-2 ring-emerald-500/20'
                      : 'bg-amber-50 border-amber-300 ring-2 ring-amber-500/20'
                    : day.checkedIn
                      ? 'bg-emerald-50/70 border-emerald-200 text-emerald-800'
                      : 'bg-slate-50 border-slate-100 text-slate-400'
                }`}
              >
                <span className="block text-[10px] font-bold uppercase text-slate-500">
                  {day.label}
                </span>

                <div className="my-1 flex items-center justify-center">
                  {day.checkedIn ? (
                    <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                      <Check size={11} />
                    </div>
                  ) : day.isToday ? (
                    <div className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center animate-pulse shadow-xs">
                      <Zap size={11} />
                    </div>
                  ) : day.isPast ? (
                    <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center text-[10px] font-bold">
                      -
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-300 flex items-center justify-center text-[10px]">
                      •
                    </div>
                  )}
                </div>

                <span className="block text-[10px] font-mono text-slate-500">
                  {day.count > 0 ? `${day.count}k` : `${day.dayNumber}`}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

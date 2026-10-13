import React, { useState, useMemo } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  PenTool, 
  Zap, 
  Calendar,
  RotateCcw,
  CheckCircle2,
  Flame,
  Award,
  Lock,
  ShieldCheck,
  BookOpen,
  HelpCircle
} from 'lucide-react';
import { DAYS_CONFIG } from '../data/hsk1Words';
import { useLearning } from '../context/LearningContext';
import PeriodicAssessmentModal from './PeriodicAssessmentModal';
import FinalAssessmentModal from './FinalAssessmentModal';
import DayGrammarModal from './DayGrammarModal';
import DayHanziQuizModal from './DayHanziQuizModal';

export default function DayRoadmap({ onSelectDayStudy }) {
  const { 
    totalMastered, 
    words, 
    getDayStats, 
    resetAllProgress,
    daysConfig,
    currentLevel,
    dailyTarget,
    currentActiveDay,
    periodicAssessments,
    finalAssessment,
    periodicCheckpoints,
    completedCheckpointsCount,
    requiredCheckpointsCount,
    isFinalAssessmentUnlocked,
    isFinalAssessmentPassed
  } = useLearning();

  const sprintDays = daysConfig || DAYS_CONFIG;

  const totalWords = words.length;
  const progressPercent = Math.round((totalMastered / totalWords) * 100);

  // Dynamic calculation based on user's chosen dailyTarget
  const targetPerDay = dailyTarget || Math.round(totalWords / sprintDays.length);
  const calculatedDays = targetPerDay > 0 ? Math.ceil(totalWords / targetPerDay) : sprintDays.length;

  // Active day statistics & config
  const activeDayNum = currentActiveDay || 1;
  const activeDayStats = getDayStats(activeDayNum);
  const activeDayCfg = sprintDays.find(d => d.day === activeDayNum) || sprintDays[0];

  // Milestone Grouping (7 days per milestone)
  const milestoneSize = 7;
  const totalMilestones = Math.ceil(sprintDays.length / milestoneSize);
  
  const milestones = useMemo(() => {
    const list = [];
    for (let i = 0; i < totalMilestones; i++) {
      const startDay = i * milestoneSize + 1;
      const endDay = Math.min((i + 1) * milestoneSize, sprintDays.length);
      list.push({
        id: `tahap_${i + 1}`,
        index: i + 1,
        title: `Tahap ${i + 1}`,
        label: `Tahap ${i + 1} (H${startDay}–${endDay})`,
        startDay,
        endDay
      });
    }
    return list;
  }, [sprintDays.length, totalMilestones]);

  const activeMilestoneId = useMemo(() => {
    if (sprintDays.length <= 7) return 'all';
    const activeIndex = Math.floor((activeDayNum - 1) / milestoneSize);
    return `tahap_${activeIndex + 1}`;
  }, [activeDayNum, sprintDays.length]);

  const [selectedMilestone, setSelectedMilestone] = useState('active');
  const [activeCheckpointModal, setActiveCheckpointModal] = useState(null);
  const [isFinalModalOpen, setIsFinalModalOpen] = useState(false);
  const [isLockedNoticeOpen, setIsLockedNoticeOpen] = useState(false);
  const [selectedGrammarDay, setSelectedGrammarDay] = useState(null);
  const [activeQuizDay, setActiveQuizDay] = useState(null);

  const currentMilestoneFilter = selectedMilestone === 'active' ? activeMilestoneId : selectedMilestone;

  const displayedDays = useMemo(() => {
    if (sprintDays.length <= 7 || currentMilestoneFilter === 'all') {
      return sprintDays;
    }
    const m = milestones.find(item => item.id === currentMilestoneFilter);
    if (!m) return sprintDays;
    return sprintDays.filter(d => d.day >= m.startDay && d.day <= m.endDay);
  }, [sprintDays, currentMilestoneFilter, milestones]);

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
        <div className="card-subtle rounded-3xl p-6 flex flex-col justify-between bg-gradient-to-b from-rose-50/60 via-white to-white border-rose-200/80 shadow-xs">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold text-sm shadow-xs shadow-rose-500/20">
                  <Flame size={15} className="fill-white" />
                </div>
                <span className="text-xs font-bold text-rose-900 tracking-wide uppercase">
                  Fokus Hari Ini
                </span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">
                Hari {activeDayNum} dari {calculatedDays}
              </span>
            </div>

            <h3 className="text-base font-bold text-slate-900 leading-snug">
              {activeDayCfg?.title || `Hari ${activeDayNum}`}
            </h3>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              {activeDayCfg?.desc || 'Target belajar harian: kuasai kosakata hari ini dengan metode Active Recall.'}
            </p>

            <div className="mt-3.5 space-y-1">
              <div className="flex justify-between text-[11px] font-semibold text-slate-600">
                <span>Progres Hari {activeDayNum}</span>
                <span className="text-rose-600 font-mono">{activeDayStats.mastered}/{activeDayStats.total} ({activeDayStats.percent}%)</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-rose-500 rounded-full transition-all duration-500"
                  style={{ width: `${activeDayStats.percent}%` }}
                />
              </div>
            </div>
          </div>

          <div className="space-y-2 mt-5">
            <button
              onClick={() => onSelectDayStudy(activeDayNum, 'flashcard')}
              className="w-full py-2.5 px-4 rounded-2xl bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-600 active:scale-98 text-white font-bold text-xs shadow-sm shadow-rose-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>{activeDayStats.percent === 100 ? `Ulas Kembali Hari ${activeDayNum}` : `Lanjut Belajar Hari ${activeDayNum}`}</span>
              <ArrowRight size={13} />
            </button>

            <button
              onClick={() => setActiveQuizDay(activeDayNum)}
              className="w-full py-2.5 px-4 rounded-2xl bg-[#1e453e] hover:bg-[#163530] active:scale-98 text-white font-bold text-xs shadow-sm shadow-[#1e453e]/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <HelpCircle size={14} className="text-emerald-300" />
              <span>Uji Pengetahuan Hari ke-{activeDayNum} (Kuis Interaktif)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Sprint Cards Grid */}
      <div className="space-y-3 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
          <div>
            <h3 className="text-sm font-bold tracking-tight text-slate-800 flex items-center gap-2">
              <Calendar size={16} className="text-rose-500" />
              <span>Rencana Kurikulum HSK {currentLevel} ({sprintDays.length} Hari • {targetPerDay} Kata/Hari)</span>
            </h3>
            <p className="text-[11px] text-slate-400">
              Menampilkan {displayedDays.length} dari total {sprintDays.length} hari pembelajaran
            </p>
          </div>

          <button
            onClick={resetAllProgress}
            className="text-[11px] font-medium text-slate-400 hover:text-rose-500 flex items-center gap-1 transition-colors self-start sm:self-auto cursor-pointer"
          >
            <RotateCcw size={12} />
            <span>Reset Data</span>
          </button>
        </div>

        {/* Milestone Tahap Tabs (Shown if more than 7 days) */}
        {sprintDays.length > 7 && (
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => setSelectedMilestone('active')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1 ${
                selectedMilestone === 'active'
                  ? 'bg-rose-500 text-white shadow-xs'
                  : 'bg-white border border-slate-200/80 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Zap size={12} />
              <span>Tahap Aktif (Hari {activeDayNum})</span>
            </button>

            <button
              onClick={() => setSelectedMilestone('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedMilestone === 'all'
                  ? 'bg-slate-900 text-white font-bold shadow-xs'
                  : 'bg-white border border-slate-200/80 text-slate-600 hover:bg-slate-50'
              }`}
            >
              Semua ({sprintDays.length} Hari)
            </button>

            {milestones.map(m => {
              const isCurrent = currentMilestoneFilter === m.id && selectedMilestone !== 'all';
              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedMilestone(m.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-slate-900 text-white font-bold shadow-xs'
                      : 'bg-white border border-slate-200/80 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {m.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Day Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {displayedDays.map(dayCfg => {
            const stats = getDayStats(dayCfg.day);
            const isCompleted = stats.percent === 100;
            const isTodayActive = dayCfg.day === activeDayNum;

            return (
              <div 
                key={dayCfg.day}
                className={`card-subtle rounded-3xl p-5 sm:p-6 flex flex-col justify-between relative group transition-all ${
                  isTodayActive 
                    ? 'border-rose-300 ring-2 ring-rose-500/20 bg-gradient-to-b from-rose-50/30 via-white to-white shadow-md shadow-rose-500/5' 
                    : 'bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5 flex-wrap">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Kata {dayCfg.targetWords}
                      </span>
                      {dayCfg.dominantCategory && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200/60">
                          {dayCfg.dominantCategory}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1">
                      {isCompleted ? (
                        <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                          <CheckCircle2 size={11} />
                          <span>100% Selesai</span>
                        </span>
                      ) : isTodayActive ? (
                        <span className="bg-rose-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-2xs animate-pulse">
                          <Zap size={11} />
                          <span>Fokus Hari Ini</span>
                        </span>
                      ) : stats.percent > 0 ? (
                        <span className="bg-amber-50 text-amber-700 border border-amber-100 text-[10px] font-bold px-2 py-0.5 rounded-full">
                          {stats.percent}% Selesai
                        </span>
                      ) : (
                        <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-full">
                          Belum Mulai
                        </span>
                      )}
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                    {dayCfg.title}
                  </h4>
                  
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {dayCfg.desc}
                  </p>

                  {/* Grammar Focus Pill & Formula Preview */}
                  {dayCfg.grammarPoints && dayCfg.grammarPoints.length > 0 && (
                    <div className="mt-3 p-2.5 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-1 text-[10px] font-bold text-indigo-700 uppercase tracking-wider">
                          <BookOpen size={11} className="text-indigo-600 shrink-0" />
                          <span className="truncate">Tata Bahasa: {dayCfg.grammarTitle || dayCfg.grammarPoints[0].title}</span>
                        </div>
                        {dayCfg.grammarFormula && (
                          <p className="font-mono text-[11px] text-slate-700 font-semibold truncate mt-0.5">
                            {dayCfg.grammarFormula}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedGrammarDay(dayCfg);
                        }}
                        className="px-2 py-1 bg-white hover:bg-indigo-100/80 text-indigo-700 text-[10px] font-bold rounded-lg border border-indigo-200/80 transition-colors shrink-0 cursor-pointer shadow-2xs"
                        title="Buka Materi Tata Bahasa"
                      >
                        Detail
                      </button>
                    </div>
                  )}

                  {/* Clean progress bar */}
                  <div className="mt-4 space-y-1">
                    <div className="flex justify-between text-[11px] font-medium text-slate-400">
                      <span>{stats.mastered} dikuasai</span>
                      <span>{stats.total - stats.mastered} tersisa</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          isCompleted ? 'bg-emerald-500' : 'bg-rose-500'
                        }`}
                        style={{ width: `${stats.percent}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1">
                    {dayCfg.grammarPoints && dayCfg.grammarPoints.length > 0 && (
                      <button
                        onClick={() => setSelectedGrammarDay(dayCfg)}
                        className="p-2 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-xl transition-colors cursor-pointer"
                        title="Pelajari Tata Bahasa Hari Ini"
                      >
                        <BookOpen size={15} />
                      </button>
                    )}
                    <button
                      onClick={() => onSelectDayStudy(dayCfg.day, 'writing')}
                      className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
                      title="Latihan Menulis Hanzi"
                    >
                      <PenTool size={15} />
                    </button>
                    <button
                      onClick={() => onSelectDayStudy(dayCfg.day, 'drill')}
                      className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
                      title="Speed Drill 60 Detik"
                    >
                      <Zap size={15} />
                    </button>
                    <button
                      onClick={() => setActiveQuizDay(dayCfg.day)}
                      className="p-2 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 rounded-xl transition-colors cursor-pointer"
                      title={`Uji Pengetahuan Hari ${dayCfg.day} (Kuis Interaktif)`}
                    >
                      <HelpCircle size={15} />
                    </button>
                  </div>

                  <button
                    onClick={() => onSelectDayStudy(dayCfg.day, 'flashcard')}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all active:scale-95 shadow-2xs cursor-pointer ${
                      isCompleted 
                        ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' 
                        : isTodayActive
                        ? 'bg-rose-600 hover:bg-rose-700 text-white font-bold shadow-rose-600/20'
                        : 'bg-slate-900 hover:bg-rose-500 text-white'
                    }`}
                  >
                    <span>{isCompleted ? 'Ulas Kembali' : isTodayActive ? 'Lanjut Belajar' : 'Mulai Belajar'}</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Jalur Evaluasi Kelipatan Hari & Assesmen Final HSK 1 */}
      <div className="space-y-4 pt-6 mt-4 border-t border-slate-200/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-bold border border-indigo-100 mb-1">
              <ShieldCheck size={12} />
              <span>Sistem Evaluasi Bertahap</span>
            </div>
            <h3 className="text-base font-bold tracking-tight text-slate-900 flex items-center gap-2">
              <span>Evaluasi Kelipatan Hari & Assesmen Final</span>
            </h3>
            <p className="text-xs text-slate-500">
              Evaluasi berkala setiap beberapa kelipatan hari untuk mengingat kumulatif kata, lalu buka Assesmen Final untuk verifikasi kelulusan resmi.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-xl">
              Progres Evaluasi: <strong className="text-indigo-600">{completedCheckpointsCount}/{requiredCheckpointsCount}</strong>
            </span>
          </div>
        </div>

        {/* Checkpoint Cards (Evaluasi Kelipatan Hari) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {periodicCheckpoints.map((cp) => {
            const res = periodicAssessments[cp.id];
            const isCpPassed = Boolean(res?.passed);

            return (
              <div
                key={cp.id}
                className={`card-subtle rounded-3xl p-5 sm:p-6 flex flex-col justify-between border transition-all ${
                  isCpPassed 
                    ? 'bg-emerald-50/40 border-emerald-200/90 shadow-2xs' 
                    : 'bg-white border-slate-200/80 hover:border-indigo-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 uppercase tracking-wider">
                      Kelipatan Hari • Hari 1–{cp.coverageEndDay}
                    </span>

                    {isCpPassed ? (
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle2 size={11} />
                        <span>Lulus ({res.percent}%)</span>
                      </span>
                    ) : res ? (
                      <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                        Skor: {res.percent}% (Belum Lolos)
                      </span>
                    ) : (
                      <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Siap Dikerjakan
                      </span>
                    )}
                  </div>

                  <h4 className="text-base font-bold text-slate-900">
                    {cp.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {cp.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100/80 flex items-center justify-between gap-2">
                  <span className="text-[11px] text-slate-400 font-mono">
                    {cp.questionCount} Soal Kumulatif
                  </span>

                  <button
                    onClick={() => setActiveCheckpointModal(cp)}
                    className={`py-2 px-4 rounded-xl text-xs font-bold transition-all active:scale-95 shadow-2xs cursor-pointer flex items-center gap-1.5 ${
                      isCpPassed 
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    }`}
                  >
                    <span>{isCpPassed ? 'Uji Ulang Evaluasi' : 'Mulai Evaluasi Berkala'}</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Assesmen Final HSK 1 Card */}
        <div className={`rounded-3xl p-6 sm:p-7 border relative overflow-hidden transition-all shadow-md ${
          isFinalAssessmentPassed
            ? 'bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 border-emerald-500/40 text-white'
            : isFinalAssessmentUnlocked
            ? 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-rose-500/50 text-white ring-2 ring-rose-500/20'
            : 'bg-slate-900/95 border-slate-700/80 text-white'
        }`}>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md ${
                  isFinalAssessmentPassed
                    ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-400/30'
                    : isFinalAssessmentUnlocked
                    ? 'bg-rose-500/30 text-rose-300 border border-rose-400/30'
                    : 'bg-slate-800 text-slate-400 border border-slate-700'
                }`}>
                  Tahap Puncak HSK {currentLevel || 1}
                </span>

                {isFinalAssessmentPassed ? (
                  <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 size={13} />
                    <span>Lulus ({finalAssessment?.percent || 100}%) • Sertifikasi Terbuka</span>
                  </span>
                ) : isFinalAssessmentUnlocked ? (
                  <span className="text-[11px] font-bold text-amber-300 flex items-center gap-1">
                    <Sparkles size={13} />
                    <span>Syarat Terpenuhi • Siap Diambil</span>
                  </span>
                ) : (
                  <span className="text-[11px] font-semibold text-amber-400 flex items-center gap-1">
                    <Lock size={12} />
                    <span>Syarat: Selesaikan minimal {requiredCheckpointsCount} Evaluasi Berkala ({completedCheckpointsCount}/{requiredCheckpointsCount})</span>
                  </span>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white">
                Assesmen Final Kelulusan HSK {currentLevel || 1}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Ujian komprehensif 25 soal menguji {words.length} kosakata dan seluruh tata bahasa HSK {currentLevel || 1}. Luluskan assesmen ini untuk membuka Kuis Cepat lanjutan dan Ujian Resmi Bersertifikat!
              </p>
              <p className="text-[11px] text-slate-400 italic">
                * Jika Anda sudah bisa materi HSK {currentLevel || 1}, selesaikan evaluasi ini terlebih dahulu untuk langsung membuka seluruh kuis dan ujian HSK.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-2.5">
              {isFinalAssessmentUnlocked ? (
                <button
                  onClick={() => setIsFinalModalOpen(true)}
                  className={`py-3.5 px-6 rounded-2xl font-bold text-xs shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${
                    isFinalAssessmentPassed
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/20'
                      : 'bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white shadow-rose-500/20'
                  }`}
                >
                  <Award size={16} />
                  <span>{isFinalAssessmentPassed ? 'Uji Ulang Assesmen Final' : 'Mulai Assesmen Final ➔'}</span>
                </button>
              ) : (
                <button
                  onClick={() => setIsLockedNoticeOpen(true)}
                  className="py-3 px-5 rounded-2xl bg-slate-800 hover:bg-slate-700/80 text-slate-300 border border-slate-700 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Lock size={14} className="text-amber-400" />
                  <span>Assesmen Terkunci (Lihat Syarat)</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Periodic Assessment Modal */}
      {activeCheckpointModal && (
        <PeriodicAssessmentModal
          isOpen={Boolean(activeCheckpointModal)}
          checkpoint={activeCheckpointModal}
          onClose={() => setActiveCheckpointModal(null)}
        />
      )}

      {/* Final Assessment Modal */}
      <FinalAssessmentModal
        isOpen={isFinalModalOpen}
        onClose={() => setIsFinalModalOpen(false)}
      />

      {/* Locked Notice Dynamic Popup Modal */}
      {isLockedNoticeOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in">
          <div 
            className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200">
              <Lock size={26} />
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900">
                Assesmen Final Masih Terkunci
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Untuk memastikan Anda telah mengingat kosakata secara bertahap, Anda perlu menyelesaikan minimal <strong>{requiredCheckpointsCount} Evaluasi Berkala</strong> terlebih dahulu.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs space-y-1 text-left">
              <div className="flex justify-between font-medium text-slate-600">
                <span>Evaluasi Berkala Selesai:</span>
                <span className="font-bold text-indigo-600">{completedCheckpointsCount} dari {requiredCheckpointsCount}</span>
              </div>
              <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-500 rounded-full"
                  style={{ width: `${Math.min(100, (completedCheckpointsCount / requiredCheckpointsCount) * 100)}%` }}
                />
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={() => {
                  setIsLockedNoticeOpen(false);
                  const firstIncomplete = periodicCheckpoints.find(cp => !periodicAssessments[cp.id]?.passed) || periodicCheckpoints[0];
                  if (firstIncomplete) setActiveCheckpointModal(firstIncomplete);
                }}
                className="w-full py-3 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
              >
                Kerjakan Evaluasi Berkala Sekarang ➔
              </button>

              <button
                onClick={() => setIsLockedNoticeOpen(false)}
                className="w-full py-2.5 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Day Grammar Modal */}
      <DayGrammarModal
        isOpen={Boolean(selectedGrammarDay)}
        onClose={() => setSelectedGrammarDay(null)}
        day={selectedGrammarDay?.day}
        grammarPoints={selectedGrammarDay?.grammarPoints || []}
        currentLevel={currentLevel}
        onStartStudy={onSelectDayStudy}
      />

      {/* Day Hanzi Quiz Modal */}
      {activeQuizDay && (
        <DayHanziQuizModal
          isOpen={Boolean(activeQuizDay)}
          onClose={() => setActiveQuizDay(null)}
          day={activeQuizDay}
          dayWords={words.filter(w => w.day === activeQuizDay)}
        />
      )}
    </div>
  );
}

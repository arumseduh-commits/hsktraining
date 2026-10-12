import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Calendar, 
  BookOpen, 
  Award, 
  Zap, 
  PenTool, 
  Puzzle, 
  Search, 
  Headphones, 
  Play, 
  GraduationCap, 
  ChevronRight, 
  TrendingUp, 
  FileCheck, 
  ChevronDown, 
  Clock, 
  Check,
  ShieldCheck,
  Lock 
} from 'lucide-react';
import { HSK_LEVELS_CONFIG } from '../data/hskLevelsConfig';
import { useLearning } from '../context/LearningContext';
import DailyGoalWidget from './DailyGoalWidget';
import DailyTargetModal from './DailyTargetModal';

export default function HomeScreen({ 
  onOpenDialogueModal, 
  onOpenLevelSelector 
}) {
  const navigate = useNavigate();
  const [isTargetModalOpen, setIsTargetModalOpen] = useState(false);
  const { 
    totalMastered, 
    totalReviewing,
    words, 
    daysConfig,
    candidateName, 
    currentLevel, 
    officialHistory,
    user,
    dailyTarget,
    currentActiveDay,
    isFinalAssessmentPassed,
    isFinalAssessmentUnlocked,
    completedCheckpointsCount,
    requiredCheckpointsCount
  } = useLearning();

  const currentLevelConfig = HSK_LEVELS_CONFIG.find(l => l.level === currentLevel) || HSK_LEVELS_CONFIG[0];
  const totalWords = words?.length || currentLevelConfig.totalWords;
  const progressPercent = totalWords > 0 ? Math.round((totalMastered / totalWords) * 100) : 0;
  const unseenWords = Math.max(0, totalWords - totalMastered - totalReviewing);
  const calculatedDays = dailyTarget > 0 ? Math.ceil(totalWords / dailyTarget) : (daysConfig?.length || (currentLevel === 2 ? 8 : 4));

  // Latest Official Exam Attempt
  const latestOfficialExam = officialHistory && officialHistory.length > 0 ? officialHistory[0] : null;

  // Study Tools List for the Selected HSK Level
  const studyTools = [
    {
      id: 'roadmap',
      title: `Sprint Roadmap (~${calculatedDays} Hari)`,
      desc: `Fokus aktif: Hari ${currentActiveDay || 1}. Target mandiri ${dailyTarget} kata/hari menuju kelulusan HSK ${currentLevel}.`,
      tag: 'Jadwal Harian',
      icon: Calendar,
      color: 'bg-rose-50 text-rose-600 border-rose-100',
      iconBg: 'bg-rose-500 text-white',
      action: () => navigate('/study/roadmap')
    },
    {
      id: 'flashcard',
      title: 'Flashcard Cerdas Interaktif',
      desc: 'Kartu bolak-balik dengan audio suara penutur Beijing, pinyin & contoh kalimat.',
      tag: 'Hafalan Kata',
      icon: Layers,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
      iconBg: 'bg-indigo-500 text-white',
      action: () => navigate('/study/flashcard')
    },
    {
      id: 'drill',
      title: 'Speed Drill (Refleks Kilat)',
      desc: 'Kuis kilat refleks arti & pinyin untuk menguji daya ingat instan kata Mandarin.',
      tag: 'Kuis Cepat',
      icon: Zap,
      color: 'bg-amber-50 text-amber-700 border-amber-100',
      iconBg: 'bg-amber-500 text-white',
      action: () => navigate('/study/drill')
    },
    {
      id: 'writing',
      title: 'Tulis Hanzi (Kanvas Goresan)',
      desc: 'Latihan menulis karakter Hanzi goresan demi goresan di kanvas sentuh / mouse.',
      tag: 'Goresan Hanzi',
      icon: PenTool,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      iconBg: 'bg-emerald-500 text-white',
      action: () => navigate('/study/writing')
    },
    {
      id: 'sentence',
      title: 'Susun Kalimat (Sentence Puzzle)',
      desc: 'Latih susunan tata kata SPOK dan pola kalimat Mandarin dasar secara interaktif.',
      tag: 'Tata Kalimat',
      icon: Puzzle,
      color: 'bg-sky-50 text-sky-700 border-sky-100',
      iconBg: 'bg-sky-500 text-white',
      action: () => navigate('/study/sentence')
    },
    {
      id: 'vocab',
      title: `Kamus Kosakata (${totalWords} Kata)`,
      desc: `Pencarian cepat seluruh ${totalWords} kosakata HSK ${currentLevel} dengan audio dan contoh.`,
      tag: 'Kamus Lengkap',
      icon: Search,
      color: 'bg-purple-50 text-purple-700 border-purple-100',
      iconBg: 'bg-purple-500 text-white',
      action: () => navigate('/study/vocab')
    },
    {
      id: 'dialogue',
      title: 'Listening Percakapan Pria & Wanita',
      desc: 'Dialog penutur asli Beijing (Xiaoxiao & Yunxi, 18 Detik) + kuis pemahaman resmi.',
      tag: 'Audio Asli 18s',
      icon: Headphones,
      color: 'bg-blue-50 text-blue-700 border-blue-100',
      iconBg: 'bg-blue-600 text-white',
      action: () => onOpenDialogueModal && onOpenDialogueModal()
    },
    {
      id: 'official',
      title: `Simulasi Ujian Resmi HSK ${currentLevel}`,
      desc: 'Format ujian standar CTI, 100 poin berbatas waktu, lulus cetak sertifikat resmi digital!',
      tag: 'Sertifikat Digital',
      icon: Award,
      color: 'bg-rose-50 text-rose-700 border-rose-200',
      iconBg: 'bg-gradient-to-tr from-rose-500 to-amber-500 text-white',
      action: () => navigate('/official')
    },
    {
      id: 'grammar',
      title: `Tata Bahasa & Pola Kalimat HSK ${currentLevel}`,
      desc: 'Rangkuman tata bahasa penting, partikel dasar (的/了/吗), dan pola kalimat esensial.',
      tag: 'Tata Bahasa',
      icon: GraduationCap,
      color: 'bg-teal-50 text-teal-700 border-teal-100',
      iconBg: 'bg-teal-600 text-white',
      action: () => navigate('/grammar')
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-16 max-w-2xl mx-auto">
      {/* Active Level Hero Card */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-3xl p-6 text-white shadow-xl shadow-slate-900/10 space-y-5 border border-slate-800">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold border border-rose-500/30">
              <Sparkles size={12} className="text-rose-400" />
              <span>Standar Baru HSK 3.0 • CEFR {currentLevelConfig.cefr}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white pt-1 tracking-tight">
              {currentLevelConfig.code}: {currentLevelConfig.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
              {currentLevelConfig.desc}
            </p>
          </div>

          {/* Clickable Level Switcher Button on Hero */}
          <button
            onClick={onOpenLevelSelector}
            className="flex flex-col items-center justify-center p-2.5 sm:px-3.5 sm:py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all cursor-pointer group shrink-0 active:scale-95"
            title="Klik untuk Ganti Tingkat HSK"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-500 to-amber-400 text-white font-black text-sm flex items-center justify-center shadow-md mb-1 group-hover:scale-105 transition-transform">
              {currentLevelConfig.code}
            </div>
            <div className="flex items-center gap-1 text-[11px] font-bold text-rose-300 group-hover:text-white transition-colors">
              <span>Ganti</span>
              <ChevronDown size={11} className="group-hover:translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

        {/* Progress Metric Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 space-y-3">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-slate-300 font-medium">Progres Kosakata {currentLevelConfig.code}</span>
            <span className="text-amber-300 font-bold font-mono">
              {totalMastered} / {totalWords} kata ({progressPercent}%)
            </span>
          </div>

          {/* Visual Progress Bar */}
          <div className="h-2.5 w-full bg-black/40 rounded-full overflow-hidden p-0.5 border border-white/10">
            <div 
              className="h-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400 rounded-full transition-all duration-700"
              style={{ width: `${Math.max(progressPercent, 2)}%` }}
            />
          </div>

          {/* Stats Breakdown Grid */}
          <div className="grid grid-cols-3 gap-2 pt-1 text-center">
            <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] sm:text-[11px] text-emerald-300 block font-semibold">Dikuasai</span>
              <span className="text-xs sm:text-sm font-black text-white font-mono">{totalMastered} Kata</span>
            </div>
            <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] sm:text-[11px] text-amber-300 block font-semibold">Ditinjau</span>
              <span className="text-xs sm:text-sm font-black text-white font-mono">{totalReviewing} Kata</span>
            </div>
            <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] sm:text-[11px] text-slate-400 block font-semibold">Belum Mulai</span>
              <span className="text-xs sm:text-sm font-black text-white font-mono">{unseenWords} Kata</span>
            </div>
          </div>
        </div>

        {/* Quick Protocol Info */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-300 pt-1 border-t border-white/10">
          <div className="flex items-center gap-1.5">
            <Clock size={13} className="text-rose-400" />
            <span>Target Mandiri: <strong>{dailyTarget} kata/hari (~{calculatedDays} Hari)</strong> • Fokus: <strong>Hari {currentActiveDay || 1}</strong></span>
          </div>
          <button
            onClick={onOpenLevelSelector}
            className="text-rose-300 hover:text-white font-bold underline decoration-dotted transition-colors cursor-pointer"
          >
            Pindah ke HSK Lain ➔
          </button>
        </div>
      </div>

      {/* Daily Goal & Streak Check-in Widget (SuperChinese Style) */}
      <DailyGoalWidget onOpenTargetModal={() => setIsTargetModalOpen(true)} />

      {/* Assesmen Kelulusan Status Banner (HSK 1) */}
      {currentLevel === 1 && (
        <div 
          onClick={() => navigate('/study/roadmap')}
          className="p-4 rounded-3xl bg-white border border-slate-200/80 hover:border-indigo-300 shadow-2xs flex items-center justify-between gap-3 transition-all cursor-pointer group"
        >
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold shrink-0 ${
              isFinalAssessmentPassed
                ? 'bg-emerald-500 text-white shadow-xs'
                : isFinalAssessmentUnlocked
                ? 'bg-amber-500 text-white shadow-xs'
                : 'bg-indigo-50 text-indigo-600 border border-indigo-100'
            }`}>
              {isFinalAssessmentPassed ? <CheckCircle2 size={18} /> : isFinalAssessmentUnlocked ? <Award size={18} /> : <ShieldCheck size={18} />}
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <span>Evaluasi & Assesmen HSK 1</span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {isFinalAssessmentPassed 
                  ? '🏆 Assesmen Final Lulus! Sertifikasi Terbuka' 
                  : isFinalAssessmentUnlocked 
                  ? '⚡ Assesmen Final Siap Diambil!' 
                  : `Evaluasi Berkala: ${completedCheckpointsCount}/${requiredCheckpointsCount} Selesai`}
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-1">
                {isFinalAssessmentPassed
                  ? 'Seluruh 500 kosakata telah terverifikasi. Siap ikut ujian resmi!'
                  : isFinalAssessmentUnlocked
                  ? 'Selesaikan assesmen final untuk membuka ujian sertifikat resmi.'
                  : 'Selesaikan evaluasi kelipatan hari untuk membuka Assesmen Final.'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs font-bold text-indigo-600 group-hover:translate-x-0.5 transition-transform shrink-0">
            <span>Buka</span>
            <ChevronRight size={14} />
          </div>
        </div>
      )}

      {/* Latest Official Exam Card (If Available) */}
      {latestOfficialExam && (
        <div 
          onClick={() => navigate('/official')}
          className="p-4 rounded-3xl bg-gradient-to-r from-emerald-950 to-slate-900 border border-emerald-500/30 text-white flex items-center justify-between gap-3 shadow-md cursor-pointer hover:border-emerald-400/60 transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Award size={20} />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-300 uppercase tracking-wider">
                <Check size={12} />
                <span>Hasil Ujian Resmi Terakhir</span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white">
                Skor: {latestOfficialExam.score}/100 • {latestOfficialExam.passed ? 'Lulus Memuaskan' : 'Perlu Ulangi'}
              </h4>
              <p className="text-[11px] text-emerald-200/70">
                Sertifikat No: {latestOfficialExam.certificateNo || 'Tersedia'} • Klik untuk lihat sertifikat
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs font-bold text-emerald-300 group-hover:text-white transition-colors">
            <span>Buka</span>
            <ChevronRight size={14} />
          </div>
        </div>
      )}

      {/* Listening Dialogue Feature Quick Banner */}
      <div 
        onClick={onOpenDialogueModal}
        className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 text-white border border-indigo-500/30 shadow-lg shadow-indigo-950/20 flex items-center justify-between gap-4 cursor-pointer hover:border-indigo-400/60 transition-all group active:scale-[0.99]"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-400 flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0 group-hover:scale-105 transition-transform">
            <Headphones size={22} className="text-white" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-rose-300 bg-rose-500/20 px-2 py-0.5 rounded-full mb-0.5">
              <Sparkles size={11} className="text-rose-400" />
              <span>Audio Penutur Asli Beijing (18 Detik)</span>
            </div>
            <h4 className="text-sm font-bold text-white leading-snug">Listening Percakapan Pria & Wanita</h4>
            <p className="text-xs text-indigo-200/80 line-clamp-1">Simulasi dialog stasiun kereta api + kuis pemahaman resmi HSK</p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-rose-500 group-hover:bg-rose-600 text-white flex items-center justify-center transition-colors shadow-md">
            <Play size={15} className="fill-white ml-0.5" />
          </div>
        </div>
      </div>

      {/* Menu-Menu Aksi HSK Terpilih */}
      <div className="space-y-3.5">
        <div className="flex items-center justify-between px-1">
          <div>
            <h3 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <BookOpen size={18} className="text-rose-500" />
              <span>Menu Belajar HSK {currentLevel}</span>
            </h3>
            <p className="text-xs text-slate-500">Pilih modul latihan untuk mempercepat penguasaan {currentLevelConfig.code}</p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-100">
            {studyTools.length} Modul
          </span>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {studyTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.id}
                onClick={tool.action}
                className="card-subtle rounded-3xl p-4 sm:p-5 cursor-pointer border border-slate-200/80 hover:border-rose-400/80 hover:shadow-md transition-all group flex flex-col justify-between space-y-3 active:scale-[0.99]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-xs shrink-0 ${tool.iconBg}`}>
                    <Icon size={20} />
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${tool.color}`}>
                    {tool.tag}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-rose-600 transition-colors flex items-center justify-between">
                    <span>{tool.title}</span>
                    <ChevronRight size={15} className="text-slate-400 group-hover:text-rose-500 group-hover:translate-x-0.5 transition-all" />
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1">
                    {tool.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Switch Level Banner / Bottom Headline Navigation */}
      <div className="p-5 rounded-3xl bg-slate-100/90 border border-slate-200/80 text-center space-y-2">
        <h4 className="text-xs font-bold text-slate-700">Ingin beralih ke jenjang HSK lainnya?</h4>
        <p className="text-[11px] text-slate-500 max-w-md mx-auto">
          Anda sedang berada di dashboard <strong>{currentLevelConfig.code}</strong>. Klik tombol di bawah atau lencana HSK di pojok kiri atas kapan saja untuk berpindah ke HSK 2 s/d HSK 9.
        </p>
        <button
          onClick={onOpenLevelSelector}
          className="mt-2 inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shadow-2xs active:scale-95 cursor-pointer"
        >
          <Layers size={13} />
          <span>Ganti Tingkat HSK ({currentLevelConfig.code} ➔ Pilihan Lain)</span>
          <ChevronDown size={13} />
        </button>
      </div>

      {/* Daily Target Setting Modal */}
      <DailyTargetModal 
        isOpen={isTargetModalOpen} 
        onClose={() => setIsTargetModalOpen(false)} 
      />
    </div>
  );
}

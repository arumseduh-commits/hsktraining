import React from 'react';
import { 
  Home,
  BookOpen, 
  GraduationCap, 
  FileCheck, 
  User, 
  Volume2, 
  Smartphone,
  Sparkles,
  Headphones
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function Navbar({ activeTab, setActiveTab, onOpenIosModal, onOpenDialogueModal }) {
  const { 
    totalMastered, 
    words, 
    audioSpeed, 
    setAudioSpeed, 
    candidateName,
    currentLevel,
    user,
    isCloudSyncing
  } = useLearning();

  const totalWords = words.length;
  const progressPercent = Math.round((totalMastered / totalWords) * 100);

  const navItems = [
    { id: 'home', label: 'Beranda', icon: Home },
    { id: 'study', label: 'Belajar', icon: BookOpen },
    { id: 'grammar', label: 'Tata Bahasa', icon: GraduationCap },
    { id: 'official', label: 'Ujian Resmi HSK', icon: FileCheck },
    { id: 'profile', label: 'Akun', icon: User },
  ];

  return (
    <header className="sticky top-0 z-40 glass-nav transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Header Row */}
        <div className="h-16 flex items-center justify-between gap-3">
          {/* Logo & Brand */}
          <div 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2.5 cursor-pointer group select-none shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-rose-500 text-white font-bold text-lg flex items-center justify-center shadow-sm shadow-rose-500/20 group-hover:scale-105 transition-transform font-hanzi">
              汉
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold tracking-tight text-slate-900 text-sm sm:text-base">
                  HSK <span className="text-rose-500 font-extrabold">TURBO</span>
                </span>
                <span className="text-[10px] font-bold tracking-wider px-1.5 py-0.5 rounded-md bg-rose-50 text-rose-600 border border-rose-100">
                  HSK {currentLevel}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
                Standar 3.0 • Menuju HSK 9
              </p>
            </div>
          </div>

          {/* Desktop Metric Pill */}
          <div className="hidden lg:flex items-center gap-3 bg-slate-50/80 border border-slate-200/60 rounded-full px-3.5 py-1.5">
            <span className="text-xs font-semibold text-slate-500">
              Progres HSK 1
            </span>
            <div className="w-24 h-1.5 bg-slate-200/80 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-rose-500 to-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${Math.max(progressPercent, 3)}%` }}
              />
            </div>
            <span className="text-xs font-bold text-slate-900 font-mono">
              {totalMastered}/{totalWords} ({progressPercent}%)
            </span>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Audio Speed Pill */}
            <button
              onClick={() => setAudioSpeed(s => s === 0.85 ? 1.0 : 0.85)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100/80 hover:bg-slate-200/70 text-slate-600 transition-colors"
              title="Atur Kecepatan Suara Mandarin"
            >
              <Volume2 size={13} className="text-slate-400" />
              <span className="font-mono text-[11px]">{audioSpeed === 0.85 ? '0.85x' : '1.0x'}</span>
            </button>

            {/* iOS Button */}
            <button
              onClick={onOpenIosModal}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 hover:bg-slate-200/80 text-slate-700 transition-all active:scale-95"
            >
              <Smartphone size={13} className="text-rose-500" />
              <span>iOS</span>
            </button>

            {/* Listening Dialogue Pill */}
            <button
              onClick={onOpenDialogueModal}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 hover:bg-indigo-100/80 text-indigo-700 transition-all active:scale-95 border border-indigo-200/60 shadow-2xs"
              title="Coba Audio Percakapan Cowok & Cewek (18 Detik)"
            >
              <Headphones size={13} className="text-indigo-600" />
              <span className="hidden md:inline font-bold">Listening 18s</span>
              <span className="md:hidden text-[11px] font-bold">18s</span>
            </button>

            {/* User Profile Avatar Pill */}
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex items-center gap-2 pl-1.5 pr-3 py-1 rounded-full text-xs font-bold transition-all relative ${
                activeTab === 'profile'
                  ? 'bg-rose-500 text-white shadow-sm shadow-rose-500/25 ring-2 ring-rose-300'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
              title={user ? `Akun Google: ${user.email}` : "Menu Akun & Profil"}
            >
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[11px] font-hanzi overflow-hidden shrink-0 relative">
                {user?.user_metadata?.avatar_url ? (
                  <img src={user.user_metadata.avatar_url} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <span>{candidateName ? candidateName.slice(0, 1).toUpperCase() : '汉'}</span>
                )}
              </div>
              <span className="max-w-[80px] sm:max-w-[110px] truncate text-left">
                {user?.user_metadata?.full_name ? user.user_metadata.full_name.split(' ')[0] : candidateName.split(' ')[0]}
              </span>
              {user && (
                <span className={`w-2 h-2 rounded-full absolute -top-0.5 -right-0.5 border border-white ${
                  isCloudSyncing ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'
                }`} title={isCloudSyncing ? "Menyinkronkan..." : "Cloud Sync Aktif"} />
              )}
            </button>
          </div>
        </div>

        {/* Tab Pills Nav Bar (Desktop & Tablet) */}
        <div className="hidden sm:flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2.5 pt-0.5">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-rose-500 text-white shadow-sm shadow-rose-500/25 font-bold'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-white' : 'text-slate-400'} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}

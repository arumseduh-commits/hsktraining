import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Home,
  BookOpen, 
  GraduationCap, 
  FileCheck, 
  User, 
  Volume2, 
  Smartphone,
  Sparkles,
  Headphones,
  ChevronDown
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function Navbar({ onOpenIosModal, onOpenDialogueModal, onOpenLevelSelector }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { 
    totalMastered, 
    words, 
    audioSpeed, 
    setAudioSpeed, 
    candidateName,
    currentLevel,
    user
  } = useLearning();

  const totalWords = words.length;
  const progressPercent = Math.round((totalMastered / totalWords) * 100);

  const navItems = [
    { id: 'home', path: '/', label: 'Beranda', icon: Home },
    { id: 'study', path: '/study', label: 'Belajar', icon: BookOpen },
    { id: 'grammar', path: '/grammar', label: 'Tata Bahasa', icon: GraduationCap },
    { id: 'official', path: '/official', label: 'Ujian Resmi HSK', icon: FileCheck },
    { id: 'profile', path: '/profile', label: 'Akun', icon: User },
  ];

  const isItemActive = (item) => {
    if (item.id === 'home') {
      return location.pathname === '/' || location.pathname === '/home';
    }
    return location.pathname.startsWith(item.path);
  };

  return (
    <header className="sticky top-0 z-40 glass-nav transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Header Row */}
        <div className="h-16 flex items-center justify-between gap-3">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2.5 select-none shrink-0">
            <div 
              onClick={() => navigate('/')}
              className="w-9 h-9 rounded-xl bg-rose-500 text-white font-bold text-lg flex items-center justify-center shadow-sm shadow-rose-500/20 hover:scale-105 transition-transform font-hanzi cursor-pointer"
            >
              汉
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span 
                  onClick={() => navigate('/')}
                  className="font-bold tracking-tight text-slate-900 text-sm sm:text-base cursor-pointer"
                >
                  HSK <span className="text-rose-500 font-extrabold">TURBO</span>
                </span>
                
                {/* Level Switcher Badge */}
                <button
                  type="button"
                  onClick={onOpenLevelSelector}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-rose-50 hover:bg-rose-100/90 text-rose-700 border border-rose-200/80 font-bold text-[11px] shadow-2xs hover:shadow-xs transition-all cursor-pointer active:scale-95 group"
                  title="Ganti Tingkat HSK Belajar (HSK 1 - 9)"
                >
                  <span>HSK {currentLevel}</span>
                  <ChevronDown size={11} className="text-rose-500 group-hover:translate-y-0.5 transition-transform" />
                </button>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium hidden sm:flex">
                <span>Standar 3.0</span>
                <span>•</span>
                <button 
                  onClick={onOpenLevelSelector} 
                  className="hover:text-rose-600 transition-colors cursor-pointer underline decoration-dotted"
                >
                  Ganti Level
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Metric Pill */}
          <button
            type="button"
            onClick={onOpenLevelSelector}
            className="hidden lg:flex items-center gap-3 bg-slate-50/90 hover:bg-slate-100/80 border border-slate-200/70 rounded-full px-3.5 py-1.5 transition-all cursor-pointer active:scale-98 group"
            title="Klik untuk Ganti Tingkat HSK"
          >
            <div className="flex items-center gap-1 text-xs font-semibold text-slate-600">
              <span>HSK {currentLevel}</span>
              <ChevronDown size={12} className="text-slate-400 group-hover:text-slate-700" />
            </div>
            <div className="w-24 h-1.5 bg-slate-200/80 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-rose-500 to-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${Math.max(progressPercent, 3)}%` }}
              />
            </div>
            <span className="text-xs font-bold text-slate-900 font-mono">
              {totalMastered}/{totalWords} ({progressPercent}%)
            </span>
          </button>

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
              onClick={() => navigate('/profile')}
              className={`flex items-center gap-2 pl-1.5 pr-3 py-1 rounded-full text-xs font-bold transition-all relative ${
                location.pathname.startsWith('/profile')
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
            </button>
          </div>
        </div>

        {/* Tab Pills Nav Bar (Desktop & Tablet) */}
        <div className="hidden sm:flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2.5 pt-0.5">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = isItemActive(item);
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
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

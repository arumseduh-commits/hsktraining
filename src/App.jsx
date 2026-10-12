import React, { useState } from 'react';
import { LearningProvider, useLearning } from './context/LearningContext';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import StudyHubView from './components/StudyHubView';
import GrammarView from './components/GrammarView';
import OfficialExamView from './components/OfficialExamView';
import ProfileView from './components/ProfileView';
import IosModal from './components/IosModal';
import DialogueListeningModal from './components/DialogueListeningModal';
import LevelSelectorModal from './components/LevelSelectorModal';
import LoginScreen from './components/LoginScreen';
import { 
  Home, 
  BookOpen, 
  GraduationCap, 
  FileCheck, 
  User 
} from 'lucide-react';

function AppContent() {
  const { user, authLoading, hasSelectedLevel } = useLearning();
  const [activeTab, setActiveTab] = useState('home');
  const [studyInitialSubTab, setStudyInitialSubTab] = useState('roadmap');
  const [isIosModalOpen, setIsIosModalOpen] = useState(false);
  const [isDialogueModalOpen, setIsDialogueModalOpen] = useState(false);
  const [isLevelSelectorOpen, setIsLevelSelectorOpen] = useState(false);

  // Splash screen saat mengecek sesi login Supabase
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 flex flex-col items-center justify-center text-white space-y-4">
        <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-rose-500 to-amber-400 text-white font-black text-3xl flex items-center justify-center animate-pulse font-hanzi shadow-2xl shadow-rose-500/30 border border-white/20">
          汉
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <div className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
          <span>Memeriksa Sesi Akun...</span>
        </div>
      </div>
    );
  }

  // Wajib Login dengan Google sebelum masuk ke dalam materi HSK
  if (!user) {
    return <LoginScreen />;
  }

  // First-time onboarding: jika belum pernah memilih level HSK
  const shouldShowOnboarding = !hasSelectedLevel;

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 pb-24 sm:pb-12">
      {/* Top Header & Desktop Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        onOpenIosModal={() => setIsIosModalOpen(true)}
        onOpenDialogueModal={() => setIsDialogueModalOpen(true)}
        onOpenLevelSelector={() => setIsLevelSelectorOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 pt-5">
        {activeTab === 'home' && (
          <HomeScreen 
            onOpenStudyTab={(targetMode) => {
              setStudyInitialSubTab(targetMode || 'roadmap');
              setActiveTab('study');
            }}
            onOpenExamTab={() => setActiveTab('official')}
            onOpenGrammarTab={() => setActiveTab('grammar')}
            onOpenDialogueModal={() => setIsDialogueModalOpen(true)}
            onOpenLevelSelector={() => setIsLevelSelectorOpen(true)}
          />
        )}

        {activeTab === 'study' && (
          <StudyHubView 
            onOpenDialogueModal={() => setIsDialogueModalOpen(true)}
            initialSubTab={studyInitialSubTab}
          />
        )}

        {activeTab === 'grammar' && (
          <GrammarView />
        )}

        {activeTab === 'official' && (
          <OfficialExamView />
        )}

        {activeTab === 'profile' && (
          <ProfileView />
        )}
      </main>

      {/* Modals with React createPortal */}
      <IosModal 
        isOpen={isIosModalOpen} 
        onClose={() => setIsIosModalOpen(false)} 
      />

      <DialogueListeningModal 
        isOpen={isDialogueModalOpen} 
        onClose={() => setIsDialogueModalOpen(false)} 
      />

      {/* Level Selector Modal (First-time onboarding or Manual Switch) */}
      <LevelSelectorModal 
        isOpen={isLevelSelectorOpen || shouldShowOnboarding}
        isFirstTime={shouldShowOnboarding}
        onClose={() => setIsLevelSelectorOpen(false)}
      />

      {/* Mobile Floating Bottom Navigation Dock */}
      <nav className="fixed bottom-3 left-3 right-3 sm:hidden z-40 bg-white/95 backdrop-blur-xl border border-slate-200/80 px-2 py-1.5 rounded-3xl flex items-center justify-around shadow-xl shadow-slate-900/10 safe-bottom">
        <button
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center gap-1 py-1.5 px-2.5 rounded-2xl text-[10px] font-bold transition-all ${
            activeTab === 'home' 
              ? 'text-rose-600 bg-rose-50/80 scale-105' 
              : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          <Home size={19} className={activeTab === 'home' ? 'text-rose-600' : 'text-slate-400'} />
          <span>Beranda</span>
        </button>

        <button
          onClick={() => {
            setStudyInitialSubTab('roadmap');
            setActiveTab('study');
          }}
          className={`flex flex-col items-center gap-1 py-1.5 px-2.5 rounded-2xl text-[10px] font-bold transition-all ${
            activeTab === 'study' 
              ? 'text-rose-600 bg-rose-50/80 scale-105' 
              : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          <BookOpen size={19} className={activeTab === 'study' ? 'text-rose-600' : 'text-slate-400'} />
          <span>Belajar</span>
        </button>

        <button
          onClick={() => setActiveTab('grammar')}
          className={`flex flex-col items-center gap-1 py-1.5 px-2.5 rounded-2xl text-[10px] font-bold transition-all ${
            activeTab === 'grammar' 
              ? 'text-rose-600 bg-rose-50/80 scale-105' 
              : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          <GraduationCap size={19} className={activeTab === 'grammar' ? 'text-rose-600' : 'text-slate-400'} />
          <span>Tata Bahasa</span>
        </button>

        <button
          onClick={() => setActiveTab('official')}
          className={`flex flex-col items-center gap-1 py-1.5 px-2.5 rounded-2xl text-[10px] font-bold transition-all ${
            activeTab === 'official' 
              ? 'text-rose-600 bg-rose-50/80 scale-105' 
              : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          <FileCheck size={19} className={activeTab === 'official' ? 'text-rose-600' : 'text-slate-400'} />
          <span>Ujian HSK</span>
        </button>

        <button
          onClick={() => setActiveTab('profile')}
          className={`flex flex-col items-center gap-1 py-1.5 px-2.5 rounded-2xl text-[10px] font-bold transition-all ${
            activeTab === 'profile' 
              ? 'text-rose-600 bg-rose-50/80 scale-105' 
              : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          <User size={19} className={activeTab === 'profile' ? 'text-rose-600' : 'text-slate-400'} />
          <span>Akun</span>
        </button>
      </nav>
    </div>
  );
}

export default function App() {
  return (
    <LearningProvider>
      <AppContent />
    </LearningProvider>
  );
}

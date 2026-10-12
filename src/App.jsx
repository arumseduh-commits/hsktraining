import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
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
import DailyTargetModal from './components/DailyTargetModal';
import LoginScreen from './components/LoginScreen';
import { 
  Home, 
  BookOpen, 
  GraduationCap, 
  FileCheck, 
  User 
} from 'lucide-react';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, authLoading, hasSelectedLevel, setHasSelectedLevel } = useLearning();

  const [isIosModalOpen, setIsIosModalOpen] = useState(false);
  const [isDialogueModalOpen, setIsDialogueModalOpen] = useState(false);
  const [isLevelSelectorOpen, setIsLevelSelectorOpen] = useState(false);

  // Two-step onboarding: Step 1 = 'level', Step 2 = 'target'
  const [onboardingStep, setOnboardingStep] = useState(null);

  React.useEffect(() => {
    if (user && !hasSelectedLevel && !onboardingStep) {
      setOnboardingStep('level');
    } else if (hasSelectedLevel && onboardingStep) {
      setOnboardingStep(null);
    }
  }, [user, hasSelectedLevel, onboardingStep]);

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


  // Active status helpers for bottom navigation dock
  const isHomeActive = location.pathname === '/' || location.pathname === '/home';
  const isStudyActive = location.pathname.startsWith('/study');
  const isGrammarActive = location.pathname.startsWith('/grammar');
  const isOfficialActive = location.pathname.startsWith('/official');
  const isProfileActive = location.pathname.startsWith('/profile');

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 pb-24 sm:pb-12">
      {/* Top Header & Desktop Navigation */}
      <Navbar 
        onOpenIosModal={() => setIsIosModalOpen(true)}
        onOpenDialogueModal={() => setIsDialogueModalOpen(true)}
        onOpenLevelSelector={() => setIsLevelSelectorOpen(true)}
      />

      {/* Main View Router with Real URL Slugs */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 pt-5">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomeScreen 
                onOpenDialogueModal={() => setIsDialogueModalOpen(true)}
                onOpenLevelSelector={() => setIsLevelSelectorOpen(true)}
              />
            } 
          />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route 
            path="/study" 
            element={
              <StudyHubView 
                onOpenDialogueModal={() => setIsDialogueModalOpen(true)}
              />
            } 
          />
          <Route 
            path="/study/:mode" 
            element={
              <StudyHubView 
                onOpenDialogueModal={() => setIsDialogueModalOpen(true)}
              />
            } 
          />
          <Route path="/grammar" element={<GrammarView />} />
          <Route path="/official" element={<OfficialExamView />} />
          <Route path="/profile" element={<ProfileView />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
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

      {/* Level Selector Modal (Step 1: First-time onboarding or Manual Switch) */}
      <LevelSelectorModal 
        isOpen={isLevelSelectorOpen || onboardingStep === 'level'}
        isFirstTime={onboardingStep === 'level'}
        onClose={() => setIsLevelSelectorOpen(false)}
        onProceedToTarget={() => setOnboardingStep('target')}
      />

      {/* Daily Target Modal (Step 2: First-time onboarding) */}
      <DailyTargetModal 
        isOpen={onboardingStep === 'target'}
        isFirstTime={true}
        onClose={() => setOnboardingStep(null)}
        onCompleteOnboarding={() => {
          setHasSelectedLevel(true);
          setOnboardingStep(null);
        }}
      />

      {/* Mobile Floating Bottom Navigation Dock */}
      <nav className="fixed bottom-3 left-3 right-3 sm:hidden z-40 bg-white/95 backdrop-blur-xl border border-slate-200/80 px-2 py-1.5 rounded-3xl flex items-center justify-around shadow-xl shadow-slate-900/10 safe-bottom">
        <button
          onClick={() => navigate('/')}
          className={`flex flex-col items-center gap-1 py-1.5 px-2.5 rounded-2xl text-[10px] font-bold transition-all ${
            isHomeActive 
              ? 'text-rose-600 bg-rose-50/80 scale-105' 
              : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          <Home size={19} className={isHomeActive ? 'text-rose-600' : 'text-slate-400'} />
          <span>Beranda</span>
        </button>

        <button
          onClick={() => navigate('/study')}
          className={`flex flex-col items-center gap-1 py-1.5 px-2.5 rounded-2xl text-[10px] font-bold transition-all ${
            isStudyActive 
              ? 'text-rose-600 bg-rose-50/80 scale-105' 
              : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          <BookOpen size={19} className={isStudyActive ? 'text-rose-600' : 'text-slate-400'} />
          <span>Belajar</span>
        </button>

        <button
          onClick={() => navigate('/grammar')}
          className={`flex flex-col items-center gap-1 py-1.5 px-2.5 rounded-2xl text-[10px] font-bold transition-all ${
            isGrammarActive 
              ? 'text-rose-600 bg-rose-50/80 scale-105' 
              : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          <GraduationCap size={19} className={isGrammarActive ? 'text-rose-600' : 'text-slate-400'} />
          <span>Tata Bahasa</span>
        </button>

        <button
          onClick={() => navigate('/official')}
          className={`flex flex-col items-center gap-1 py-1.5 px-2.5 rounded-2xl text-[10px] font-bold transition-all ${
            isOfficialActive 
              ? 'text-rose-600 bg-rose-50/80 scale-105' 
              : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          <FileCheck size={19} className={isOfficialActive ? 'text-rose-600' : 'text-slate-400'} />
          <span>Ujian HSK</span>
        </button>

        <button
          onClick={() => navigate('/profile')}
          className={`flex flex-col items-center gap-1 py-1.5 px-2.5 rounded-2xl text-[10px] font-bold transition-all ${
            isProfileActive 
              ? 'text-rose-600 bg-rose-50/80 scale-105' 
              : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          <User size={19} className={isProfileActive ? 'text-rose-600' : 'text-slate-400'} />
          <span>Akun</span>
        </button>
      </nav>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LearningProvider>
        <AppContent />
      </LearningProvider>
    </BrowserRouter>
  );
}

import React, { useState } from 'react';
import { LearningProvider } from './context/LearningContext';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import StudyHubView from './components/StudyHubView';
import GrammarView from './components/GrammarView';
import OfficialExamView from './components/OfficialExamView';
import ProfileView from './components/ProfileView';
import IosModal from './components/IosModal';
import DialogueListeningModal from './components/DialogueListeningModal';
import { 
  Home, 
  BookOpen, 
  GraduationCap, 
  FileCheck, 
  User 
} from 'lucide-react';

function AppContent() {
  const [activeTab, setActiveTab] = useState('home');
  const [isIosModalOpen, setIsIosModalOpen] = useState(false);
  const [isDialogueModalOpen, setIsDialogueModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 pb-24 sm:pb-12">
      {/* Top Header & Desktop Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        onOpenIosModal={() => setIsIosModalOpen(true)}
        onOpenDialogueModal={() => setIsDialogueModalOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 pt-5">
        {activeTab === 'home' && (
          <HomeScreen 
            onOpenStudyTab={() => setActiveTab('study')}
            onOpenExamTab={() => setActiveTab('official')}
            onOpenDialogueModal={() => setIsDialogueModalOpen(true)}
          />
        )}

        {activeTab === 'study' && (
          <StudyHubView 
            onOpenDialogueModal={() => setIsDialogueModalOpen(true)}
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

      {/* Modal Dialogues */}
      <IosModal 
        isOpen={isIosModalOpen} 
        onClose={() => setIsIosModalOpen(false)} 
      />

      <DialogueListeningModal 
        isOpen={isDialogueModalOpen} 
        onClose={() => setIsDialogueModalOpen(false)} 
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
          onClick={() => setActiveTab('study')}
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

      {/* iOS Safari Home Screen Guide Modal */}
      <IosModal 
        isOpen={isIosModalOpen} 
        onClose={() => setIsIosModalOpen(false)} 
      />
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

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Compass, 
  Layers, 
  Zap, 
  PenTool, 
  Puzzle, 
  Search, 
  Award, 
  Headphones, 
  Sparkles, 
  Play 
} from 'lucide-react';
import DayRoadmap from './DayRoadmap';
import FlashcardMode from './FlashcardMode';
import SpeedDrill from './SpeedDrill';
import WritingCanvas from './WritingCanvas';
import SentenceBuilder from './SentenceBuilder';
import VocabListView from './VocabListView';
import MockExamView from './MockExamView';
import { useLearning } from '../context/LearningContext';

export default function StudyHubView({ onOpenDialogueModal }) {
  const { mode } = useParams();
  const navigate = useNavigate();
  const { currentLevel, daysConfig, words, dailyTarget } = useLearning();
  
  const studySubTab = mode || 'roadmap';
  const [selectedDayParam, setSelectedDayParam] = useState(1);

  const handleSelectDayStudy = (dayNum, targetMode = 'flashcard') => {
    setSelectedDayParam(dayNum);
    navigate(`/study/${targetMode}`);
  };

  const wordsCount = words ? words.length : (currentLevel === 2 ? 772 : 500);
  const calculatedDays = dailyTarget > 0 ? Math.ceil(wordsCount / dailyTarget) : (daysConfig ? daysConfig.length : (currentLevel === 2 ? 8 : 4));

  const subNavItems = [
    { id: 'roadmap', label: `Roadmap (~${calculatedDays} Hari)`, icon: Compass },
    { id: 'flashcard', label: 'Flashcard', icon: Layers },
    { id: 'dialogue', label: 'Listening Dialog 🎧', icon: Headphones },
    { id: 'drill', label: 'Speed Drill', icon: Zap },
    { id: 'writing', label: 'Tulis Hanzi', icon: PenTool },
    { id: 'sentence', label: 'Susun Kalimat', icon: Puzzle },
    { id: 'vocab', label: `Kamus ${wordsCount}`, icon: Search },
    { id: 'quick_quiz', label: 'Kuis Cepat', icon: Award },
  ];

  return (
    <div className="space-y-5 animate-fade-in pb-16 max-w-4xl mx-auto">
      {/* Listening Feature Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-4 sm:p-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md border border-indigo-500/30">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-400 flex items-center justify-center text-white shrink-0 shadow-md">
            <Headphones size={22} className="text-white" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-bold">
              <Sparkles size={11} />
              <span>Audio Percakapan Pria & Wanita (18 Detik)</span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">Listening Ujian HSK: Percakapan Stasiun Kereta</h3>
            <p className="text-xs text-indigo-200/80">Suara asli penutur Beijing (Xiaoxiao & Yunxi) + kuis pilihan ganda interaktif.</p>
          </div>
        </div>
        <button
          onClick={onOpenDialogueModal}
          className="px-4 py-2.5 bg-rose-500 hover:bg-rose-600 active:scale-95 text-white rounded-2xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 shrink-0"
        >
          <Play size={14} className="fill-white" />
          <span>Putar Dialog (18 Detik)</span>
        </button>
      </div>
      {/* Sub-navigation Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/50">
        {subNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = studySubTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigate(`/study/${item.id}`)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-white text-slate-900 font-bold shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Icon size={14} className={isActive ? 'text-rose-500' : 'text-slate-400'} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Active Study Tool */}
      <div>
        {studySubTab === 'roadmap' && (
          <DayRoadmap onSelectDayStudy={handleSelectDayStudy} />
        )}

        {studySubTab === 'flashcard' && (
          <FlashcardMode initialDay={selectedDayParam} />
        )}

        {studySubTab === 'dialogue' && (
          <div className="card-subtle rounded-3xl p-6 sm:p-8 text-center space-y-6 max-w-xl mx-auto border border-slate-200">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-rose-500 to-indigo-600 flex items-center justify-center text-white mx-auto shadow-lg shadow-rose-500/20">
              <Headphones size={32} />
            </div>
            
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-600 border border-rose-100">
                Simulasi Resmi HSK Listening (18 Detik)
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Percakapan Cowok & Cewek Mandarin
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Dengarkan dialog autentik antara 👨 Pria (Yunxi) dan 👩 Wanita (Xiaoxiao) menanyakan arah ke stasiun kereta, lalu jawab pertanyaan dari 🎙️ Narator.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-left">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60">
                <span className="text-[11px] font-bold text-slate-400 block uppercase">Format Ujian</span>
                <span className="text-xs font-bold text-slate-800">HSK Listening Part 3</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60">
                <span className="text-[11px] font-bold text-slate-400 block uppercase">Pemeran Suara</span>
                <span className="text-xs font-bold text-slate-800">Xiaoxiao & Yunxi Neural</span>
              </div>
            </div>

            <button
              onClick={onOpenDialogueModal}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-rose-500 to-indigo-600 hover:from-rose-600 hover:to-indigo-700 text-white font-bold text-sm shadow-md shadow-rose-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Play size={18} className="fill-white" />
              <span>Buka Audio Player & Soal</span>
            </button>
          </div>
        )}

        {studySubTab === 'drill' && (
          <SpeedDrill initialDay={selectedDayParam} />
        )}

        {studySubTab === 'writing' && (
          <WritingCanvas initialDay={selectedDayParam} />
        )}

        {studySubTab === 'sentence' && (
          <SentenceBuilder />
        )}

        {studySubTab === 'vocab' && (
          <VocabListView />
        )}

        {studySubTab === 'quick_quiz' && (
          <MockExamView />
        )}
      </div>
    </div>
  );
}

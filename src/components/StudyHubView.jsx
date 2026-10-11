import React, { useState } from 'react';
import { 
  Compass, 
  Layers, 
  Zap, 
  PenTool, 
  Puzzle, 
  Search,
  Award
} from 'lucide-react';
import DayRoadmap from './DayRoadmap';
import FlashcardMode from './FlashcardMode';
import SpeedDrill from './SpeedDrill';
import WritingCanvas from './WritingCanvas';
import SentenceBuilder from './SentenceBuilder';
import VocabListView from './VocabListView';
import MockExamView from './MockExamView';
import { useLearning } from '../context/LearningContext';

export default function StudyHubView() {
  const { currentLevel, daysConfig, words } = useLearning();
  const [studySubTab, setStudySubTab] = useState('roadmap');
  const [selectedDayParam, setSelectedDayParam] = useState(1);

  const handleSelectDayStudy = (dayNum, targetMode = 'flashcard') => {
    setSelectedDayParam(dayNum);
    setStudySubTab(targetMode);
  };

  const sprintDaysCount = daysConfig ? daysConfig.length : (currentLevel === 2 ? 8 : 4);
  const wordsCount = words ? words.length : (currentLevel === 2 ? 772 : 500);

  const subNavItems = [
    { id: 'roadmap', label: `Sprint ${sprintDaysCount} Hari`, icon: Compass },
    { id: 'flashcard', label: 'Flashcard', icon: Layers },
    { id: 'drill', label: 'Speed Drill', icon: Zap },
    { id: 'writing', label: 'Tulis Hanzi', icon: PenTool },
    { id: 'sentence', label: 'Susun Kalimat', icon: Puzzle },
    { id: 'vocab', label: `Kamus ${wordsCount}`, icon: Search },
    { id: 'quick_quiz', label: 'Kuis Cepat', icon: Award },
  ];

  return (
    <div className="space-y-5 animate-fade-in pb-16 max-w-4xl mx-auto">
      {/* Sub-navigation Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/50">
        {subNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = studySubTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setStudySubTab(item.id)}
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

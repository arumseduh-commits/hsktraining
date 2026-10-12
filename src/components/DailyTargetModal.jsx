import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  Target, 
  Sparkles, 
  X, 
  Check, 
  Flame, 
  Clock, 
  TrendingUp,
  Zap,
  Coffee,
  Rocket
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export default function DailyTargetModal({ isOpen, onClose }) {
  const { dailyTarget, setCustomDailyTarget, currentLevel, words } = useLearning();
  const [tempTarget, setTempTarget] = useState(dailyTarget);

  useEffect(() => {
    if (isOpen) {
      setTempTarget(dailyTarget);
    }
  }, [isOpen, dailyTarget]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const totalWords = words?.length || 500;
  const estimatedDays = Math.ceil(totalWords / tempTarget);

  const presets = [
    {
      id: 'santai',
      value: 5,
      label: 'Santai',
      icon: Coffee,
      desc: '5 kata/hari (~5 mnt)',
      color: 'border-blue-200 text-blue-700 bg-blue-50/60'
    },
    {
      id: 'standar',
      value: 15,
      label: 'Standar',
      icon: Target,
      desc: '15 kata/hari (Rekomendasi)',
      color: 'border-rose-200 text-rose-700 bg-rose-50/60'
    },
    {
      id: 'intensif',
      value: 30,
      label: 'Intensif',
      icon: Zap,
      desc: '30 kata/hari (~20 mnt)',
      color: 'border-amber-200 text-amber-700 bg-amber-50/60'
    },
    {
      id: 'turbo',
      value: 50,
      label: 'Turbo',
      icon: Rocket,
      desc: '50 kata/hari (Sprint Cepat)',
      color: 'border-purple-200 text-purple-700 bg-purple-50/60'
    }
  ];

  const handleSave = () => {
    setCustomDailyTarget(tempTarget);
    onClose();
  };

  return createPortal(
    <div 
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md overflow-y-auto animate-fade-in"
    >
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-7 shadow-2xl border border-slate-100 space-y-5 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-100 pb-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-600 text-[11px] font-bold border border-rose-100">
              <Flame size={12} className="text-rose-500 fill-rose-500" />
              <span>Target & Absensi Harian</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
              Atur Target Belajar Mandiri
            </h3>
            <p className="text-xs text-slate-500">
              Pilih ritme belajar yang cocok untuk Anda. Anda tetap bisa mengerjakan lebih banyak kata tanpa batasan!
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        {/* Preset Cards Grid */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 block">Pilihan Ritme Cepat:</label>
          <div className="grid grid-cols-2 gap-2.5">
            {presets.map((preset) => {
              const Icon = preset.icon;
              const isSelected = tempTarget === preset.value;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => setTempTarget(preset.value)}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer relative ${
                    isSelected
                      ? 'border-rose-500 bg-rose-50/70 ring-2 ring-rose-500/20 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5">
                      <Icon size={14} className={isSelected ? 'text-rose-600' : 'text-slate-500'} />
                      <span className="text-xs font-bold text-slate-900">{preset.label}</span>
                    </div>
                    {isSelected && (
                      <div className="w-4 h-4 rounded-full bg-rose-500 text-white flex items-center justify-center">
                        <Check size={10} />
                      </div>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500">{preset.desc}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Custom Slider */}
        <div className="space-y-3 p-4 bg-slate-50 rounded-2xl border border-slate-200/70">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-700">Kustomisasi Angka Target:</span>
            <span className="font-black text-rose-600 text-sm font-mono bg-white px-2.5 py-0.5 rounded-lg border border-rose-200 shadow-2xs">
              {tempTarget} Kata / Hari
            </span>
          </div>

          <input
            type="range"
            min={5}
            max={50}
            step={1}
            value={tempTarget}
            onChange={(e) => setTempTarget(Number(e.target.value))}
            className="w-full accent-rose-500 cursor-pointer h-2 bg-slate-200 rounded-lg appearance-none"
          />

          <div className="flex justify-between text-[10px] text-slate-400 font-semibold px-0.5">
            <span>Min: 5 kata</span>
            <span>25 kata</span>
            <span>Max: 50 kata</span>
          </div>
        </div>

        {/* Dynamic Estimation Box */}
        <div className="p-3.5 bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl border border-rose-200/60 flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-xs">
            <Sparkles size={16} />
          </div>
          <div className="text-xs text-slate-700 space-y-0.5">
            <h5 className="font-bold text-slate-900">
              Estimasi Selesai HSK {currentLevel}: ~{estimatedDays} Hari
            </h5>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Dengan konsisten menyelesaikan <strong>{tempTarget} kata per hari</strong>, Anda akan menguasai seluruh <strong>{totalWords} kosakata HSK {currentLevel}</strong> dalam waktu sekitar <strong>{estimatedDays} hari</strong> sprint!
            </p>
          </div>
        </div>

        {/* Overachievement note */}
        <div className="text-[11px] text-slate-400 text-center">
          💡 Catatan: Target ini adalah patokan harian absensi. Anda tetap bebas mempelajari lebih dari {tempTarget} kata setiap hari.
        </div>

        {/* Modal Buttons */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Batal
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold bg-rose-500 hover:bg-rose-600 text-white transition-all shadow-sm shadow-rose-500/25 active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
          >
            <Check size={14} />
            <span>Simpan Target ({tempTarget} Kata)</span>
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

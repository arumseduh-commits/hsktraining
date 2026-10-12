import React, { useState } from 'react';
import { 
  Award, 
  Volume2, 
  RotateCcw, 
  CheckCircle2, 
  FileText, 
  Sparkles, 
  TrendingUp,
  LogOut,
  ShieldCheck
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { TOTAL_HSK9_WORDS } from '../data/hskLevelsConfig';
import OfficialCertificateModal from './OfficialCertificateModal';

export default function ProfileView() {
  const { 
    candidateName, 
    setCandidateName, 
    totalMastered, 
    totalReviewing, 
    words, 
    officialHistory, 
    audioSpeed, 
    setAudioSpeed, 
    resetAllProgress,
    currentLevel,
    user,
    logout
  } = useLearning();

  const [inputName, setInputName] = useState(candidateName);
  const [isSavedNotice, setIsSavedNotice] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleSaveName = (e) => {
    e.preventDefault();
    if (inputName.trim()) {
      setCandidateName(inputName.trim());
      setIsSavedNotice(true);
      setTimeout(() => setIsSavedNotice(false), 2000);
    }
  };

  const totalJourneyWords = TOTAL_HSK9_WORDS; // HSK 1-9 (11,092 kata)
  const percentJourney = ((totalMastered / totalJourneyWords) * 100).toFixed(1);

  return (
    <div className="max-w-xl mx-auto space-y-6 animate-fade-in pb-20">
      
      {/* User Profile Header Card */}
      <div className="card-subtle rounded-3xl p-6 bg-white space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-rose-500 to-amber-500 text-white font-black text-2xl flex items-center justify-center shadow-md shadow-rose-500/20 font-hanzi overflow-hidden shrink-0 border border-slate-100">
              {user?.user_metadata?.avatar_url ? (
                <img 
                  src={user.user_metadata.avatar_url} 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                />
              ) : (
                candidateName.slice(0, 1).toUpperCase() || '汉'
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-slate-900 truncate">
                  {user?.user_metadata?.full_name || candidateName}
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-100 shrink-0">
                  HSK {currentLevel}
                </span>
              </div>
              {user?.email && (
                <p className="text-xs text-slate-500 truncate font-mono mt-0.5">
                  {user.email}
                </p>
              )}
              <p className="text-[11px] text-slate-400 mt-0.5">
                Target: Menguasai HSK 9 (11.092 Kata)
              </p>
            </div>
          </div>

          {user && (
            <button
              onClick={logout}
              className="px-3.5 py-2 bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-600 font-bold rounded-2xl text-xs flex items-center gap-1.5 transition-colors border border-slate-200/60 shrink-0 cursor-pointer active:scale-95"
              title="Keluar dari akun Google"
            >
              <LogOut size={14} />
              <span className="hidden sm:inline">Keluar</span>
            </button>
          )}
        </div>

        {/* Change Name Form for Certificate */}
        <form onSubmit={handleSaveName} className="pt-3 border-t border-slate-100 space-y-2">
          <label className="text-[11px] font-bold text-slate-500 block uppercase tracking-wider">
            Nama Peserta (Tercetak di Sertifikat Resmi):
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="Ketik Nama Anda..."
              className="flex-1 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs shrink-0 cursor-pointer"
            >
              Simpan
            </button>
          </div>
          {isSavedNotice && (
            <p className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1 animate-fade-in">
              <CheckCircle2 size={13} />
              <span>Nama berhasil disimpan untuk sertifikat!</span>
            </p>
          )}
        </form>
      </div>

      {/* Progress & Milestone Overview */}
      <div className="card-subtle rounded-3xl p-6 bg-white space-y-4">
        <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase flex items-center gap-1.5">
          <TrendingUp size={15} className="text-rose-500" />
          <span>Statistik Penguasaan HSK</span>
        </h4>

        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
            <span className="text-[10px] text-slate-400 font-semibold uppercase block">Kata Dikuasai</span>
            <span className="text-2xl font-black text-emerald-600 font-mono mt-0.5 block">{totalMastered}</span>
            <span className="text-[10px] text-slate-400">dari 500 kata HSK 1</span>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
            <span className="text-[10px] text-slate-400 font-semibold uppercase block">Menuju HSK 9</span>
            <span className="text-2xl font-black text-rose-600 font-mono mt-0.5 block">{percentJourney}%</span>
            <span className="text-[10px] text-slate-400">dari 11.092 kata total</span>
          </div>
        </div>

        {/* Milestone Milestones */}
        <div className="space-y-3 pt-2">
          {/* Milestone HSK 1 */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
              <span>Fondasi: HSK 1 (500 kata)</span>
              <span className="text-rose-600 font-mono">{totalMastered >= 500 ? '100%' : `${Math.round((totalMastered/500)*100)}%`}</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-rose-500 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, Math.round((totalMastered/500)*100))}%` }}
              />
            </div>
          </div>

          {/* Milestone HSK 3 */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
              <span>Tingkat Dasar: HSK 3 (2.245 kata)</span>
              <span className="text-amber-600 font-mono">{totalMastered >= 2245 ? '100%' : `${Math.round((totalMastered/2245)*100)}%`}</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-amber-500 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, Math.round((totalMastered/2245)*100))}%` }}
              />
            </div>
          </div>

          {/* Milestone HSK 6 */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
              <span>Tingkat Menengah: HSK 6 (5.456 kata)</span>
              <span className="text-blue-600 font-mono">{totalMastered >= 5456 ? '100%' : `${Math.round((totalMastered/5456)*100)}%`}</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, Math.round((totalMastered/5456)*100))}%` }}
              />
            </div>
          </div>

          {/* Milestone HSK 9 */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
              <span>Puncak Mahir: HSK 9 (11.092 kata)</span>
              <span className="text-purple-600 font-mono">{totalMastered >= 11092 ? '100%' : `${percentJourney}%`}</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-purple-500 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, parseFloat(percentJourney))}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Earned Certificates Vault */}
      <div className="card-subtle rounded-3xl p-6 bg-white space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase flex items-center gap-1.5">
            <Award size={15} className="text-amber-500" />
            <span>Koleksi Sertifikat HSK ({officialHistory.length})</span>
          </h4>
        </div>

        {officialHistory.length === 0 ? (
          <p className="text-xs text-slate-400 text-center py-4">
            Belum ada sertifikat. Selesaikan Ujian Resmi HSK untuk mendapatkan sertifikat kelulusan pertama Anda!
          </p>
        ) : (
          <div className="space-y-2">
            {officialHistory.map((cert) => (
              <div 
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="p-3 bg-slate-50 hover:bg-slate-100 rounded-2xl border border-slate-200/80 cursor-pointer flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs text-white ${
                    cert.passed ? 'bg-emerald-500' : 'bg-rose-500'
                  }`}>
                    {cert.passed ? '✓' : '✗'}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      Sertifikat HSK {cert.level || 1} • Skor {cert.totalScore}/200
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      {cert.date} • {cert.certNumber}
                    </div>
                  </div>
                </div>

                <span className="text-xs font-semibold text-rose-600 flex items-center gap-1">
                  <FileText size={13} />
                  <span>Buka</span>
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Settings & Reset */}
      <div className="card-subtle rounded-3xl p-6 bg-white space-y-3">
        <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase">
          Pengaturan Aplikasi
        </h4>

        <div className="flex items-center justify-between py-2 border-b border-slate-100 text-xs">
          <span className="font-medium text-slate-600">Kecepatan Pelafalan Audio:</span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setAudioSpeed(0.85)}
              className={`px-3 py-1 rounded-xl font-bold transition-all ${
                audioSpeed === 0.85 ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'
              }`}
            >
              0.85x (Pelan)
            </button>
            <button
              onClick={() => setAudioSpeed(1.0)}
              className={`px-3 py-1 rounded-xl font-bold transition-all ${
                audioSpeed === 1.0 ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'
              }`}
            >
              1.0x (Normal)
            </button>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-between text-xs">
          <span className="font-medium text-slate-600">Reset Semua Data Belajar:</span>
          <button
            onClick={resetAllProgress}
            className="px-3 py-1.5 text-rose-600 hover:bg-rose-50 rounded-xl font-bold border border-rose-200 transition-colors cursor-pointer"
          >
            Reset Progress
          </button>
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      {selectedCert && (
        <OfficialCertificateModal
          examResult={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </div>
  );
}

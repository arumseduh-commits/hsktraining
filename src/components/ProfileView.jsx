import React, { useState } from 'react';
import { 
  User, 
  Award, 
  Volume2, 
  RotateCcw, 
  CheckCircle2, 
  FileText, 
  Sparkles, 
  TrendingUp,
  Save,
  ShieldCheck,
  Cloud,
  RefreshCw,
  LogOut,
  AlertCircle
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { TOTAL_HSK9_WORDS } from '../data/hskLevelsConfig';
import OfficialCertificateModal from './OfficialCertificateModal';

function GoogleIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

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
    // Google & Cloud Sync
    user,
    authLoading,
    isCloudSyncing,
    lastSyncedAt,
    isSupabaseReady,
    loginWithGoogle,
    logout,
    syncNow,
    refreshSupabaseState
  } = useLearning();

  const [inputName, setInputName] = useState(candidateName);
  const [isSavedNotice, setIsSavedNotice] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [loginError, setLoginError] = useState(null);

  const handleSaveName = (e) => {
    e.preventDefault();
    if (inputName.trim()) {
      setCandidateName(inputName.trim());
      setIsSavedNotice(true);
      setTimeout(() => setIsSavedNotice(false), 2000);
      if (user) syncNow();
    }
  };

  const handleGoogleLogin = async () => {
    setLoginError(null);
    try {
      await loginWithGoogle();
    } catch (err) {
      console.error(err);
      setLoginError(err.message || 'Gagal login dengan Google');
    }
  };

  const formatLastSync = (isoString) => {
    if (!isoString) return 'Belum disinkronkan';
    try {
      const date = new Date(isoString);
      return date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ', ' + 
             date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
    } catch {
      return isoString;
    }
  };

  const totalJourneyWords = TOTAL_HSK9_WORDS; // HSK 1-9 (11,092 kata)
  const percentJourney = ((totalMastered / totalJourneyWords) * 100).toFixed(1);

  return (
    <div className="max-w-xl mx-auto space-y-6 animate-fade-in pb-20">
      
      {/* Google Login & Cloud Sync Card */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 text-white shadow-xl shadow-slate-900/10 space-y-4 border border-indigo-500/30">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/15 shrink-0">
              <Cloud size={24} className="text-indigo-300" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                <ShieldCheck size={11} />
                <span>Cloud Sync Otomatis</span>
              </div>
              <h3 className="text-base font-bold text-white mt-0.5">
                Simpan Progres ke Cloud
              </h3>
            </div>
          </div>
        </div>

        {/* User Logged In State */}
        {user ? (
          <div className="space-y-4 pt-1">
            <div className="flex items-center gap-3.5 bg-white/5 border border-white/10 rounded-2xl p-3.5">
              {user.user_metadata?.avatar_url ? (
                <img 
                  src={user.user_metadata.avatar_url} 
                  alt={user.email} 
                  className="w-12 h-12 rounded-full border-2 border-emerald-400 object-cover shrink-0"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white font-bold text-base flex items-center justify-center shrink-0">
                  {user.email?.slice(0, 1).toUpperCase()}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-white truncate">
                    {user.user_metadata?.full_name || candidateName}
                  </span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold">
                    Terhubung
                  </span>
                </div>
                <p className="text-xs text-slate-300 truncate font-mono">
                  {user.email}
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  Sinkron: {isCloudSyncing ? 'Sedang menyinkronkan...' : formatLastSync(lastSyncedAt)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={syncNow}
                disabled={isCloudSyncing}
                className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-bold rounded-2xl text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
              >
                <RefreshCw size={14} className={isCloudSyncing ? 'animate-spin' : ''} />
                <span>{isCloudSyncing ? 'Menyinkronkan...' : 'Sinkronkan Sekarang'}</span>
              </button>

              <button
                onClick={logout}
                className="py-2.5 px-4 bg-white/10 hover:bg-white/20 text-slate-200 font-bold rounded-2xl text-xs flex items-center justify-center gap-1.5 transition-colors border border-white/10"
              >
                <LogOut size={14} />
                <span>Keluar</span>
              </button>
            </div>
          </div>
        ) : (
          /* User NOT Logged In State */
          <div className="space-y-3.5 pt-1">
            <p className="text-xs text-indigo-200/90 leading-relaxed">
              Login dengan Google agar seluruh riwayat penguasaan kata, skor latihan, dan sertifikat tersimpan permanen di cloud dan otomatis sinkron antar perangkat (HP & Laptop).
            </p>

            {loginError && (
              <div className="p-3 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-xs text-rose-200 flex items-center gap-2">
                <AlertCircle size={15} className="shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <button
              onClick={handleGoogleLogin}
              className="w-full py-3 px-4 bg-white hover:bg-slate-50 text-slate-900 font-bold rounded-2xl text-xs flex items-center justify-center gap-2.5 transition-all shadow-lg active:scale-95"
            >
              <GoogleIcon className="w-4 h-4" />
              <span>Masuk dengan Google</span>
            </button>
          </div>
        )}
      </div>

      {/* Profile Card Header */}
      <div className="card-subtle rounded-3xl p-6 bg-white space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-rose-500 to-amber-500 text-white font-black text-2xl flex items-center justify-center shadow-md shadow-rose-500/20 font-hanzi overflow-hidden">
            {user?.user_metadata?.avatar_url ? (
              <img src={user.user_metadata.avatar_url} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              candidateName.slice(0, 1).toUpperCase() || '汉'
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-slate-900">{candidateName}</h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-100">
                Level: HSK {currentLevel}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Target Jangka Panjang: Menguasai HSK 9 (11.092 Kata)
            </p>
          </div>
        </div>

        {/* Change Name Form */}
        <form onSubmit={handleSaveName} className="pt-2 border-t border-slate-100 space-y-2">
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
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
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
            className="px-3 py-1.5 text-rose-600 hover:bg-rose-50 rounded-xl font-bold border border-rose-200 transition-colors"
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

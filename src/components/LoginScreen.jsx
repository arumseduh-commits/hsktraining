import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  BookOpen, 
  Headphones, 
  Award, 
  CheckCircle2, 
  AlertCircle,
  Loader2
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';

function GoogleIcon({ className = "w-5 h-5" }) {
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

export default function LoginScreen() {
  const { loginWithGoogle } = useLearning();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleLogin = async () => {
    setIsLoading(true);
    setErrorMsg(null);
    try {
      await loginWithGoogle();
    } catch (err) {
      console.error('Login error:', err);
      setErrorMsg(err.message || 'Gagal menghubungkan dengan Google. Coba lagi.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
      {/* Decorative Background Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full space-y-8 relative z-10 animate-fade-in">
        
        {/* Logo & Brand Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex w-20 h-20 rounded-3xl bg-gradient-to-tr from-rose-500 via-rose-600 to-amber-400 text-white font-black text-4xl items-center justify-center shadow-xl shadow-rose-500/25 font-hanzi border border-white/20">
            汉
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold border border-rose-500/30 mb-2">
              <Sparkles size={12} className="text-rose-400" />
              <span>Standar Baru HSK 3.0 • HSK 1 s/d HSK 9</span>
            </div>
            <h1 className="text-3xl font-black tracking-tight text-white">
              HSK <span className="text-rose-500 font-extrabold">TURBO</span>
            </h1>
            <p className="text-sm text-slate-300 mt-1 max-w-sm mx-auto font-medium">
              Pelajari & kuasai 11.092 kata Mandarin dengan audio asli, latihan interaktif, dan sertifikat resmi.
            </p>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center mb-2">
              <BookOpen size={16} />
            </div>
            <h4 className="text-xs font-bold text-white">11.092 Kata HSK</h4>
            <p className="text-[10px] text-slate-400 mt-0.5">HSK 1 sampai HSK 9 lengkap</p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-2">
              <Headphones size={16} />
            </div>
            <h4 className="text-xs font-bold text-white">Audio Asli Beijing</h4>
            <p className="text-[10px] text-slate-400 mt-0.5">Dialog native pria & wanita</p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-2">
              <Award size={16} />
            </div>
            <h4 className="text-xs font-bold text-white">Sertifikat Digital</h4>
            <p className="text-[10px] text-slate-400 mt-0.5">Simulasi ujian resmi CTI</p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
              <ShieldCheck size={16} />
            </div>
            <h4 className="text-xs font-bold text-white">Cloud Backup</h4>
            <p className="text-[10px] text-slate-400 mt-0.5">Progres tidak akan tereset</p>
          </div>
        </div>

        {/* Login Action Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-6 shadow-2xl space-y-4">
          <div className="text-center space-y-1">
            <h3 className="text-base font-bold text-white">
              Masuk untuk Memulai Belajar
            </h3>
            <p className="text-xs text-slate-300">
              Seluruh riwayat kata yang dihafal dan sertifikat tersimpan otomatis di akun Anda.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-xs text-rose-200 flex items-center gap-2">
              <AlertCircle size={15} className="shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Primary Google Login Button */}
          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full py-3.5 px-5 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-900 font-bold rounded-2xl text-sm flex items-center justify-center gap-3 transition-all shadow-xl shadow-black/20 group cursor-pointer disabled:opacity-70"
          >
            {isLoading ? (
              <>
                <Loader2 size={18} className="animate-spin text-slate-600" />
                <span className="text-slate-700">Menghubungkan ke Google...</span>
              </>
            ) : (
              <>
                <GoogleIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Masuk dengan Google</span>
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
            <CheckCircle2 size={13} className="text-emerald-400" />
            <span>Gratis • Tanpa Password • Akses Instan</span>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-[11px] text-slate-400">
          Standar Resmi Chinese Proficiency Grading Standards (CTI / Hanban 3.0)
        </p>

      </div>
    </div>
  );
}

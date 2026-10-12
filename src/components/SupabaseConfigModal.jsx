import React, { useState } from 'react';
import { 
  Database, 
  Key, 
  ExternalLink, 
  Copy, 
  Check, 
  X, 
  ShieldCheck, 
  Sparkles, 
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import { getSupabaseConfig, setCustomSupabaseConfig, clearCustomSupabaseConfig } from '../services/supabaseClient';

export default function SupabaseConfigModal({ isOpen, onClose, onConfigSaved }) {
  const currentConfig = getSupabaseConfig();
  const [url, setUrl] = useState(currentConfig.url || '');
  const [anonKey, setAnonKey] = useState(currentConfig.anonKey || '');
  const [isCopiedSql, setIsCopiedSql] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  if (!isOpen) return null;

  const sqlSchemaText = `-- 1. Buat Tabel Progres Pengguna
create table if not exists public.hsk_user_progress (
  id uuid references auth.users(id) on delete cascade primary key,
  email text,
  candidate_name text,
  avatar_url text,
  current_level integer default 1,
  word_status jsonb default '{}'::jsonb,
  exam_scores jsonb default '[]'::jsonb,
  official_history jsonb default '[]'::jsonb,
  last_synced_at timestamp with time zone default timezone('utc'::text, now()),
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- 2. Aktifkan RLS
alter table public.hsk_user_progress enable row level security;

-- 3. Kebijakan RLS (Policy)
drop policy if exists "Users can select own progress" on public.hsk_user_progress;
create policy "Users can select own progress" on public.hsk_user_progress for select using (auth.uid() = id);

drop policy if exists "Users can insert own progress" on public.hsk_user_progress;
create policy "Users can insert own progress" on public.hsk_user_progress for insert with check (auth.uid() = id);

drop policy if exists "Users can update own progress" on public.hsk_user_progress;
create policy "Users can update own progress" on public.hsk_user_progress for update using (auth.uid() = id);`;

  const handleCopySql = () => {
    navigator.clipboard.writeText(sqlSchemaText);
    setIsCopiedSql(true);
    setTimeout(() => setIsCopiedSql(false), 2500);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!url.trim() || !anonKey.trim()) {
      setStatusMessage({ type: 'error', text: 'Supabase URL dan Anon Key harus diisi!' });
      return;
    }

    if (!url.startsWith('https://')) {
      setStatusMessage({ type: 'error', text: 'Supabase URL harus diawali dengan https://' });
      return;
    }

    setCustomSupabaseConfig(url.trim(), anonKey.trim());
    setStatusMessage({ type: 'success', text: 'Konfigurasi Supabase berhasil disimpan! Siap login Google.' });
    
    if (onConfigSaved) onConfigSaved();
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    clearCustomSupabaseConfig();
    setUrl('');
    setAnonKey('');
    setStatusMessage({ type: 'info', text: 'Konfigurasi kustom dihapus.' });
    if (onConfigSaved) onConfigSaved();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 space-y-5 my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shadow-xs">
              <Database size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Pengaturan Database Supabase
              </h3>
              <p className="text-xs text-slate-400 font-medium">
                Koneksikan cloud untuk Google Login & Simpan Progres
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Info Banner */}
        <div className="p-3.5 bg-emerald-50/70 border border-emerald-200/60 rounded-2xl text-emerald-950 text-xs space-y-1">
          <div className="flex items-center gap-1.5 font-bold">
            <ShieldCheck size={14} className="text-emerald-600" />
            <span>Gratis & Aman (Row Level Security)</span>
          </div>
          <p className="text-emerald-800 leading-relaxed text-[11px]">
            Data progres tersimpan di database PostgreSQL Supabase milik Anda sendiri. Hanya akun Google Anda yang dapat mengakses data Anda.
          </p>
        </div>

        {/* Setup Form */}
        <form onSubmit={handleSave} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">
              1. Project URL Supabase
            </label>
            <div className="relative">
              <input
                type="url"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://xyzabcdefg.supabase.co"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
            </div>
            <p className="text-[10px] text-slate-400">
              Ditemukan di Supabase Dashboard ➔ Project Settings ➔ API ➔ Project URL
            </p>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">
              2. Anon (Public) API Key
            </label>
            <div className="relative">
              <input
                type="password"
                required
                value={anonKey}
                onChange={(e) => setAnonKey(e.target.value)}
                placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
            </div>
            <p className="text-[10px] text-slate-400">
              Ditemukan di Supabase Dashboard ➔ Project Settings ➔ API ➔ Project API keys (anon public)
            </p>
          </div>

          {statusMessage && (
            <div className={`p-3 rounded-xl text-xs font-semibold flex items-center gap-2 ${
              statusMessage.type === 'error' 
                ? 'bg-rose-50 text-rose-700 border border-rose-200' 
                : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
            }`}>
              {statusMessage.type === 'error' ? <AlertCircle size={15} /> : <Check size={15} />}
              <span>{statusMessage.text}</span>
            </div>
          )}

          <div className="flex items-center gap-2 pt-2">
            <button
              type="submit"
              className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs shadow-sm transition-all active:scale-95"
            >
              Simpan & Hubungkan
            </button>
            {currentConfig.isCustom && (
              <button
                type="button"
                onClick={handleReset}
                className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors"
              >
                Hapus
              </button>
            )}
          </div>
        </form>

        {/* SQL Schema Quick Copy Box */}
        <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
              <Database size={13} className="text-slate-500" />
              <span>Skrip Tabel Supabase (SQL)</span>
            </span>
            <button
              type="button"
              onClick={handleCopySql}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
                isCopiedSql 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {isCopiedSql ? <Check size={11} /> : <Copy size={11} />}
              <span>{isCopiedSql ? 'Tersalin!' : 'Salin SQL'}</span>
            </button>
          </div>
          <p className="text-[10px] text-slate-500 leading-relaxed">
            Jalankan skrip ini sekali di menu <strong>SQL Editor</strong> pada Supabase Dashboard Anda untuk membuat tabel <code className="bg-slate-200/60 px-1 py-0.5 rounded text-slate-800">hsk_user_progress</code> beserta aturan keamanannya.
          </p>
        </div>

        {/* 3-Step Setup Guide */}
        <div className="pt-2 border-t border-slate-100 text-left space-y-1.5">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            Panduan 3 Langkah Cepat Google OAuth di Supabase:
          </span>
          <ol className="text-[11px] text-slate-600 space-y-1 list-decimal list-inside leading-relaxed">
            <li>Buat proyek di <a href="https://supabase.com" target="_blank" rel="noreferrer" className="text-emerald-600 underline font-semibold">supabase.com</a>.</li>
            <li>Di <strong>Authentication ➔ Providers</strong>, aktifkan <strong>Google</strong> (masukkan Client ID & Secret dari Google Cloud).</li>
            <li>Jalankan <strong>Salin SQL</strong> di atas di tab SQL Editor, lalu tempel URL & Key di form ini.</li>
          </ol>
        </div>

      </div>
    </div>
  );
}

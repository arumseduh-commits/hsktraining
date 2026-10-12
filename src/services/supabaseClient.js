import { createClient } from '@supabase/supabase-js';

// Konfigurasi Project Supabase bawaan aplikasi
const DEFAULT_SUPABASE_URL = 'https://dogwcmjyjppwbrpmgiep.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvZ3djbWp5anBwd2JycG1naWVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE3OTI3MjMsImV4cCI6MjEwNzM2ODcyM30.MMUEwyt044ig0rMQZfgkLPLeqNV_fCbh31B1-8MbWl0';

const STORAGE_URL_KEY = 'hsk_supabase_url';
const STORAGE_KEY_KEY = 'hsk_supabase_anon_key';

let cachedClient = null;
let lastUsedUrl = '';
let lastUsedKey = '';

export function getSupabaseConfig() {
  const envUrl = import.meta.env.VITE_SUPABASE_URL || '';
  const envKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

  const localUrl = localStorage.getItem(STORAGE_URL_KEY) || '';
  const localKey = localStorage.getItem(STORAGE_KEY_KEY) || '';

  const url = localUrl.trim() || envUrl.trim() || DEFAULT_SUPABASE_URL;
  const anonKey = localKey.trim() || envKey.trim() || DEFAULT_SUPABASE_ANON_KEY;

  return {
    url,
    anonKey,
    isCustom: !!localUrl.trim(),
    isFromEnv: !!envUrl.trim() && !localUrl.trim()
  };
}

export function isSupabaseConfigured() {
  const { url, anonKey } = getSupabaseConfig();
  return Boolean(url && anonKey && url.startsWith('http'));
}

export function setCustomSupabaseConfig(url, anonKey) {
  if (url && anonKey) {
    localStorage.setItem(STORAGE_URL_KEY, url.trim());
    localStorage.setItem(STORAGE_KEY_KEY, anonKey.trim());
  } else {
    localStorage.removeItem(STORAGE_URL_KEY);
    localStorage.removeItem(STORAGE_KEY_KEY);
  }
  cachedClient = null;
}

export function clearCustomSupabaseConfig() {
  localStorage.removeItem(STORAGE_URL_KEY);
  localStorage.removeItem(STORAGE_KEY_KEY);
  cachedClient = null;
}

export function getSupabase() {
  const { url, anonKey } = getSupabaseConfig();

  if (!url || !anonKey || !url.startsWith('http')) {
    return null;
  }

  if (cachedClient && lastUsedUrl === url && lastUsedKey === anonKey) {
    return cachedClient;
  }

  try {
    cachedClient = createClient(url, anonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      }
    });
    lastUsedUrl = url;
    lastUsedKey = anonKey;
    return cachedClient;
  } catch (err) {
    console.error('Gagal menginisialisasi Supabase Client:', err);
    return null;
  }
}

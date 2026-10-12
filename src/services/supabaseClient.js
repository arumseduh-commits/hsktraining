import { createClient } from '@supabase/supabase-js';

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

  const url = localUrl.trim() || envUrl.trim();
  const anonKey = localKey.trim() || envKey.trim();

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

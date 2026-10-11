// Vocabulary Loader Service dengan Auto-Cache IndexedDB
// Menangani pemuatan otomatis dataset per level dan menyimpannya permanen di storage HP

import { HSK1_WORDS, DAYS_CONFIG as HSK1_DAYS } from '../data/hsk1Words';
import { HSK2_WORDS, DAYS_CONFIG_HSK2 } from '../data/hsk2Words';
import { getLevelFromCache, saveLevelToCache } from '../utils/indexedDbCache';

/**
 * Memuat kata & konfigurasi sprint untuk level tertentu secara otomatis.
 * 1. Cek IndexedDB terlebih dahulu (0ms / offline ready).
 * 2. Jika belum ada di IndexedDB, muat dari data lokal dan simpan ke IndexedDB otomatis di latar belakang.
 */
export async function loadLevelVocabulary(level = 1) {
  const targetLevel = Number(level);

  // 1. Coba ambil dari cache permanen IndexedDB
  try {
    const cached = await getLevelFromCache(targetLevel);
    if (cached && cached.words && cached.words.length > 0) {
      return {
        words: cached.words,
        daysConfig: cached.daysConfig,
        fromCache: true
      };
    }
  } catch (err) {
    console.warn('Gagal membaca IndexedDB:', err);
  }

  // 2. Ambil dari dataset bawaan
  let words = [];
  let daysConfig = [];

  if (targetLevel === 2) {
    words = HSK2_WORDS;
    daysConfig = DAYS_CONFIG_HSK2;
  } else {
    // Default Level 1
    words = HSK1_WORDS;
    daysConfig = HSK1_DAYS;
  }

  // 3. Simpan otomatis ke IndexedDB di background untuk akses permanen berikutnya
  saveLevelToCache(targetLevel, words, daysConfig).catch(e => console.warn(e));

  return {
    words,
    daysConfig,
    fromCache: false
  };
}

/**
 * Pre-cache level-level yang sering diakses di latar belakang saat aplikasi idle
 */
export function preCacheAllLevels() {
  if (typeof window === 'undefined') return;

  const runPreCache = () => {
    // Simpan Level 1 & 2 ke IndexedDB secara otomatis
    saveLevelToCache(1, HSK1_WORDS, HSK1_DAYS).catch(() => {});
    saveLevelToCache(2, HSK2_WORDS, DAYS_CONFIG_HSK2).catch(() => {});
  };

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(runPreCache);
  } else {
    setTimeout(runPreCache, 2000);
  }
}

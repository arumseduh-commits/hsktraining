// Sistem Cache Permanen Otomatis (IndexedDB) untuk HSK Turbo 3.0
// Menyimpan dataset kosakata per level secara permanen di storage HP/browser
// Mendukung akses 100% offline tanpa perlu koneksi internet berulang

const DB_NAME = 'HSK_TURBO_OFFLINE_DB';
const DB_VERSION = 1;
const STORE_NAME = 'vocab_modules';

/**
 * Membuka koneksi ke IndexedDB browser
 */
function openDB() {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      resolve(null);
      return;
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'level' });
      }
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      console.warn('IndexedDB gagal dibuka, beralih ke in-memory cache:', event.target.error);
      resolve(null);
    };
  });
}

/**
 * Mengambil data level dari cache permanen IndexedDB
 */
export async function getLevelFromCache(level) {
  try {
    const db = await openDB();
    if (!db) return null;

    return new Promise((resolve) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(Number(level));

      request.onsuccess = () => {
        if (request.result && request.result.words && request.result.words.length > 0) {
          resolve(request.result);
        } else {
          resolve(null);
        }
      };

      request.onerror = () => {
        resolve(null);
      };
    });
  } catch (err) {
    console.warn('Gagal membaca cache IndexedDB:', err);
    return null;
  }
}

/**
 * Menyimpan data level ke cache permanen IndexedDB secara otomatis
 */
export async function saveLevelToCache(level, words, daysConfig) {
  try {
    const db = await openDB();
    if (!db) return false;

    return new Promise((resolve) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const data = {
        level: Number(level),
        words,
        daysConfig,
        cachedAt: Date.now()
      };

      const request = store.put(data);

      request.onsuccess = () => {
        resolve(true);
      };

      request.onerror = () => {
        resolve(false);
      };
    });
  } catch (err) {
    console.warn('Gagal menyimpan ke cache IndexedDB:', err);
    return false;
  }
}

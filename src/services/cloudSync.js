import { getSupabase } from './supabaseClient';

const TABLE_NAME = 'hsk_user_progress';

/**
 * Mengambil progres pengguna dari tabel Supabase
 */
export async function fetchRemoteProgress(userId) {
  const supabase = getSupabase();
  if (!supabase || !userId) return { data: null, error: 'Supabase belum terkonfigurasi atau User ID tidak ada' };

  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select('*')
      .eq('id', userId)
      .maybeSingle();

    if (error) {
      console.error('Error fetching remote progress:', error);
      return { data: null, error: error.message };
    }

    return { data, error: null };
  } catch (err) {
    console.error('Exception fetching remote progress:', err);
    return { data: null, error: err.message };
  }
}

/**
 * Menyimpan progres pengguna ke tabel Supabase (Upsert)
 */
export async function pushRemoteProgress(user, progressPayload) {
  const supabase = getSupabase();
  if (!supabase || !user?.id) {
    return { success: false, error: 'Supabase client atau user tidak tersedia' };
  }

  try {
    const record = {
      id: user.id,
      email: user.email,
      candidate_name: progressPayload.candidateName || user.user_metadata?.full_name || 'Pembelajar HSK',
      avatar_url: user.user_metadata?.avatar_url || '',
      current_level: progressPayload.currentLevel || 1,
      word_status: progressPayload.allWordStatuses || {},
      exam_scores: progressPayload.examScores || [],
      official_history: progressPayload.officialHistory || [],
      last_synced_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from(TABLE_NAME)
      .upsert(record, { onConflict: 'id' })
      .select()
      .maybeSingle();

    if (error) {
      console.error('Error pushing progress to Supabase:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Exception pushing progress to Supabase:', err);
    return { success: false, error: err.message };
  }
}

/**
 * Menggabungkan progres lokal dengan cloud (Union merge agar tidak ada kata hafal yang hilang)
 */
export function mergeLearningProgress(localData, cloudData) {
  if (!cloudData) return localData;

  // 1. Merge all word statuses
  const localStatuses = localData.allWordStatuses || {};
  const cloudStatuses = cloudData.word_status || {};
  const mergedWordStatuses = { ...cloudStatuses };

  // Gabungkan per level
  const allLevels = new Set([
    ...Object.keys(localStatuses),
    ...Object.keys(cloudStatuses)
  ]);

  for (const lvl of allLevels) {
    const localLvl = localStatuses[lvl] || {};
    const cloudLvl = cloudStatuses[lvl] || {};

    mergedWordStatuses[lvl] = { ...cloudLvl };

    for (const [wordId, status] of Object.entries(localLvl)) {
      if (status === 'mastered' || !cloudLvl[wordId]) {
        mergedWordStatuses[lvl][wordId] = status;
      }
    }
  }

  // 2. Merge Official History (gabungkan tanpa duplikasi id/timestamp)
  const localHistory = localData.officialHistory || [];
  const cloudHistory = cloudData.official_history || [];
  const historyMap = new Map();

  [...cloudHistory, ...localHistory].forEach(item => {
    const key = item.id || item.date || JSON.stringify(item);
    if (!historyMap.has(key)) {
      historyMap.set(key, item);
    }
  });

  const mergedHistory = Array.from(historyMap.values()).sort(
    (a, b) => new Date(b.date || 0) - new Date(a.date || 0)
  );

  // 3. Merge Exam Scores
  const localExams = localData.examScores || [];
  const cloudExams = cloudData.exam_scores || [];
  const examMap = new Map();

  [...cloudExams, ...localExams].forEach(item => {
    const key = item.id || item.date || JSON.stringify(item);
    if (!examMap.has(key)) {
      examMap.set(key, item);
    }
  });

  const mergedExams = Array.from(examMap.values());

  return {
    candidateName: cloudData.candidate_name || localData.candidateName,
    currentLevel: cloudData.current_level || localData.currentLevel || 1,
    allWordStatuses: mergedWordStatuses,
    officialHistory: mergedHistory,
    examScores: mergedExams,
    lastSyncedAt: cloudData.last_synced_at || new Date().toISOString()
  };
}

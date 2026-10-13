// Humanized Chinese Speech Engine for HSK Turbo
// Dual-Engine System: Authentic Pre-rendered Studio Audio + High-Definition Neural Stream + Ranked Browser Voice Fallback
// Supports Multi-Speaker Dialogues with 0ms Latency and Studio Human Pronunciation

import examAudioManifest from '../data/examAudioManifest.json';

let cachedBestVoices = {
  any: null,
  female: null,
  male: null
};

let currentAudioElement = null;
let activeDialogueTimer = null;
let isSpeakingCancelled = false;
let activeUtterance = null; // WebKit garbage-collection prevention

// In-memory cache for instant 0ms audio playback
const audioMemoryCache = new Map();

export function cleanChineseText(text) {
  if (!text) return '';
  return text
    .replace(/^[ABab][:：]\s*/gm, '')
    .replace(/[A-Za-z][:：]\s*/g, '')
    .replace(/^(男|女|问|问题|听力|老师|学生)[:：]\s*/gm, '')
    .replace(/\n+/g, '，')
    .trim();
}

/**
 * Match a Mandarin sentence to an authentic pre-rendered studio MP3 file
 */
export function getLocalExamAudio(text) {
  if (!text) return null;
  const rawKey = text.trim();
  if (examAudioManifest[rawKey]) return examAudioManifest[rawKey];
  const cleaned = cleanChineseText(text);
  if (examAudioManifest[cleaned]) return examAudioManifest[cleaned];
  return null;
}

/**
 * Parse dialogue text into structured conversational turns
 * e.g. "男：你看见我的小猫了吗？\n女：在那儿，在椅子下面。"
 */
export function parseDialogueTurns(rawText) {
  if (!rawText) return [];
  const lines = rawText.split('\n').map(l => l.trim()).filter(Boolean);
  
  const segments = [];
  lines.forEach(line => {
    // If a line has "问：" embedded inside, split so narrator question has separate turn
    if (line.includes('问：') && !line.startsWith('问：')) {
      const parts = line.split(/(?=问：)/);
      parts.forEach(p => {
        if (p.trim()) segments.push(p.trim());
      });
    } else {
      segments.push(line);
    }
  });

  return segments.map((seg, idx) => {
    let speaker = 'general';
    let roleLabel = '';
    let pitch = 1.0;

    if (/^(女|妈妈|姐姐|妹妹|小姐|老师女)[:：]/.test(seg)) {
      speaker = 'female';
      roleLabel = 'Wanita';
      pitch = 1.12;
    } else if (/^(男|爸爸|哥哥|弟弟|先生|老师男)[:：]/.test(seg)) {
      speaker = 'male';
      roleLabel = 'Pria';
      pitch = 0.88;
    } else if (/^(问|问题|听力)[:：]/.test(seg)) {
      speaker = 'narrator';
      roleLabel = 'Pertanyaan Soal';
      pitch = 1.02;
    } else if (/^[Aa][:：]/.test(seg)) {
      speaker = 'female';
      roleLabel = 'Pembicara A';
      pitch = 1.10;
    } else if (/^[Bb][:：]/.test(seg)) {
      speaker = 'male';
      roleLabel = 'Pembicara B';
      pitch = 0.90;
    }

    const cleanText = seg
      .replace(/^(女|男|问|问题|听力|妈妈|爸爸|姐姐|妹妹|哥哥|弟弟|老师|学生|[A-Za-z])[:：]\s*/, '')
      .trim();

    return {
      index: idx,
      speaker,
      roleLabel,
      pitch,
      raw: seg,
      text: cleanText
    };
  }).filter(t => t.text.length > 0);
}

/**
 * Strict Voice Ranking Algorithm for Web Speech Fallback
 * Prioritizes Microsoft Online Natural, Google Neural, Apple Tingting/Sinji
 * Strictly de-prioritizes robotic Windows SAPI desktop voices (Huihui Desktop)
 */
function findBestVoice(gender = 'any') {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  const scored = voices
    .filter(v => {
      const l = (v.lang || '').toLowerCase();
      return l.startsWith('zh');
    })
    .map(v => {
      const name = (v.name || '').toLowerCase();
      const lang = (v.lang || '').toLowerCase();
      let score = 0;

      // Exact Mandarin zh-CN gets bonus
      if (lang === 'zh-cn' || lang === 'zh_cn') score += 30;

      // Tier 1: Microsoft Natural & Online Neural Voices (Edge / Win11)
      if (name.includes('natural') || name.includes('online')) score += 120;
      if (name.includes('neural')) score += 100;

      // Tier 2: Google Mandarin Human Voice (Chrome / Android)
      if (name.includes('google')) score += 80;

      // Tier 3: Apple Siri & High Quality Mandarin (iOS / macOS)
      if (name.includes('tingting') || name.includes('sin-ji') || name.includes('sinji') || name.includes('meijia') || name.includes('siri')) score += 70;

      // Gender affinity matching
      if (gender === 'female') {
        if (name.includes('xiaoxiao') || name.includes('tingting') || name.includes('xiaoyi') || name.includes('female')) score += 50;
      } else if (gender === 'male') {
        if (name.includes('yunxi') || name.includes('yunjian') || name.includes('male') || name.includes('kangkang')) score += 50;
      }

      // Strong penalty for archaic desktop robotic SAPI voices (Microsoft Huihui Desktop)
      if (name.includes('desktop') || name.includes('huihui') || name.includes('espeak')) {
        score -= 90;
      }

      return { voice: v, score };
    })
    .sort((a, b) => b.score - a.score);

  return scored[0]?.voice || null;
}

function refreshVoices() {
  cachedBestVoices.any = findBestVoice('any');
  cachedBestVoices.female = findBestVoice('female');
  cachedBestVoices.male = findBestVoice('male');
}

// Pre-warm voices
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  refreshVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    refreshVoices();
  };

  // iOS Safari audio unlock
  const unlockAudio = () => {
    try {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
      const warmUp = new SpeechSynthesisUtterance(' ');
      warmUp.volume = 0;
      warmUp.rate = 2;
      window.speechSynthesis.speak(warmUp);
    } catch {}
    window.removeEventListener('touchstart', unlockAudio);
    window.removeEventListener('click', unlockAudio);
  };
  window.addEventListener('touchstart', unlockAudio, { once: true, passive: true });
  window.addEventListener('click', unlockAudio, { once: true, passive: true });
}

/**
 * Stop any currently playing audio immediately
 */
export function stopChineseSpeech() {
  isSpeakingCancelled = true;
  if (activeDialogueTimer) {
    clearTimeout(activeDialogueTimer);
    activeDialogueTimer = null;
  }
  if (currentAudioElement) {
    try {
      currentAudioElement.pause();
      currentAudioElement.currentTime = 0;
    } catch {}
    currentAudioElement = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch {}
  }
}

/**
 * Preload Chinese audio in background memory so when clicked it plays instantly with 0ms delay
 */
export function preloadChineseAudio(rawText, speed = 1.05) {
  if (typeof window === 'undefined' || !rawText) return;

  // 1. Check local static audio first
  const localUrl = getLocalExamAudio(rawText);
  if (localUrl) {
    if (!audioMemoryCache.has(localUrl)) {
      try {
        const audio = new Audio();
        audio.preload = 'auto';
        audio.src = localUrl;
        audio.load();
        audioMemoryCache.set(localUrl, audio);
      } catch {}
    }
    return;
  }

  // 2. Preload dynamic turns
  const turns = parseDialogueTurns(rawText);
  turns.forEach(turn => {
    const textKey = turn.text.trim();
    if (!textKey || audioMemoryCache.has(textKey)) return;

    try {
      const localTurnUrl = getLocalExamAudio(textKey);
      const audioUrl = localTurnUrl || `https://translate.google.com/translate_tts?ie=UTF-8&tl=zh-CN&client=tw-ob&q=${encodeURIComponent(textKey)}`;
      const audio = new Audio();
      audio.preload = 'auto';
      audio.src = audioUrl;
      audio.playbackRate = Math.max(0.75, Math.min(1.35, speed || 1.05));
      audio.load();
      audioMemoryCache.set(textKey, audio);
    } catch {}
  });
}

/**
 * Play a single turn using Google Studio Neural Audio with In-Memory Caching & Watchdog
 */
function playTurnWithGoogleAudio(text, speed, onDone) {
  try {
    const textKey = text.trim();
    let audio = audioMemoryCache.get(textKey);

    if (!audio) {
      const localAudio = getLocalExamAudio(textKey);
      const audioUrl = localAudio || `https://translate.google.com/translate_tts?ie=UTF-8&tl=zh-CN&client=tw-ob&q=${encodeURIComponent(textKey)}`;
      audio = new Audio(audioUrl);
      audio.preload = 'auto';
      audioMemoryCache.set(textKey, audio);
    }

    currentAudioElement = audio;
    audio.playbackRate = Math.max(0.75, Math.min(1.35, speed || 1.05));
    audio.currentTime = 0;

    let isDone = false;
    const finish = (success) => {
      if (isDone) return;
      isDone = true;
      if (currentAudioElement === audio) currentAudioElement = null;
      onDone(success);
    };

    audio.onended = () => finish(true);
    audio.onerror = () => finish(false);

    // Watchdog: fallback if stalled
    const watchdog = setTimeout(() => {
      if (!isDone && audio.paused && audio.currentTime === 0) {
        finish(false);
      }
    }, 1500);

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          clearTimeout(watchdog);
        })
        .catch(() => {
          clearTimeout(watchdog);
          finish(false);
        });
    }
  } catch {
    onDone(false);
  }
}

/**
 * Fallback: Play turn with browser SpeechSynthesis using ranked Natural Voice
 */
function playTurnWithWebSpeech(turn, speed, onDone) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    onDone();
    return;
  }

  try {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(turn.text);
    utterance.lang = 'zh-CN';
    utterance.rate = Math.max(0.75, Math.min(1.15, speed || 0.90));
    utterance.pitch = turn.pitch || 1.0;

    const voice = cachedBestVoices[turn.speaker] || cachedBestVoices.any || findBestVoice(turn.speaker);
    if (voice) {
      utterance.voice = voice;
    }

    utterance.onend = () => {
      activeUtterance = null;
      onDone();
    };

    utterance.onerror = () => {
      activeUtterance = null;
      onDone();
    };

    activeUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  } catch {
    onDone();
  }
}

/**
 * Play single speech turn (Local/Google Neural first -> Web Speech ranked natural voice fallback)
 */
function playTurn(turn, speed, onDone) {
  if (isSpeakingCancelled) return;

  playTurnWithGoogleAudio(turn.text, speed, (googleSuccess) => {
    if (isSpeakingCancelled) return;

    if (googleSuccess) {
      onDone();
    } else {
      // Graceful fallback to Web Speech Natural Voice
      playTurnWithWebSpeech(turn, speed, onDone);
    }
  });
}

/**
 * Main function: Humanized Mandarin Speech
 * Seamlessly plays authentic studio MP3s or handles dynamic multi-speaker dialogues
 * 
 * @param {string} rawText - Mandarin text (e.g. single sentence or dialog "男：...\n女：...")
 * @param {number} speed - Playback speed (default 0.90)
 * @param {function} onEndCallback - Callback when full speech completes
 * @param {function} onSpeakerChange - Callback with current turn info ({ speaker, roleLabel, text })
 */
export function speakChinese(rawText, speed = 1.05, onEndCallback = null, onSpeakerChange = null) {
  if (!rawText) {
    if (onEndCallback) onEndCallback();
    return;
  }

  stopChineseSpeech();
  isSpeakingCancelled = false;

  // 1. PRIORITY 1: Check if an authentic pre-rendered static studio MP3 exists for this text!
  const localAudioUrl = getLocalExamAudio(rawText);
  if (localAudioUrl) {
    let audio = audioMemoryCache.get(localAudioUrl);
    if (!audio) {
      audio = new Audio(localAudioUrl);
      audio.preload = 'auto';
      audioMemoryCache.set(localAudioUrl, audio);
    }

    currentAudioElement = audio;
    audio.playbackRate = Math.max(0.75, Math.min(1.35, speed || 1.05));
    audio.currentTime = 0;

    let isDone = false;
    const finish = () => {
      if (isDone) return;
      isDone = true;
      if (currentAudioElement === audio) currentAudioElement = null;
      if (onSpeakerChange) onSpeakerChange(null);
      if (onEndCallback) onEndCallback();
    };

    audio.onended = finish;
    audio.onerror = () => {
      currentAudioElement = null;
      runDialogueTurns();
    };

    if (onSpeakerChange) {
      onSpeakerChange({ roleLabel: 'Rekaman Suara Alami', text: cleanChineseText(rawText) });
    }

    const p = audio.play();
    if (p !== undefined) {
      p.catch(() => {
        runDialogueTurns();
      });
    }
    return;
  }

  // 2. PRIORITY 2: Multi-turn conversational dialogue flow
  runDialogueTurns();

  function runDialogueTurns() {
    const turns = parseDialogueTurns(rawText);
    if (turns.length === 0) {
      if (onEndCallback) onEndCallback();
      return;
    }

    let currentTurnIndex = 0;

    function runNextTurn() {
      if (isSpeakingCancelled) return;

      if (currentTurnIndex >= turns.length) {
        if (onSpeakerChange) onSpeakerChange(null);
        if (onEndCallback) onEndCallback();
        return;
      }

      const currentTurn = turns[currentTurnIndex];
      if (onSpeakerChange) onSpeakerChange(currentTurn);

      playTurn(currentTurn, speed, () => {
        if (isSpeakingCancelled) return;

        currentTurnIndex++;
        if (currentTurnIndex < turns.length) {
          // Natural human breath pause between conversational turns (600ms)
          activeDialogueTimer = setTimeout(runNextTurn, 600);
        } else {
          if (onSpeakerChange) onSpeakerChange(null);
          if (onEndCallback) onEndCallback();
        }
      });
    }

    runNextTurn();
  }
}

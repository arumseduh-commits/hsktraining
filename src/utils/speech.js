// Humanized Chinese Speech Engine for HSK Turbo
// Dual-Engine System: High-Definition Neural Audio + Ranked Browser Voice Fallback
// Supports Multi-Speaker Dialogues (Female & Male conversational turns with natural breathing pauses)

let cachedBestVoices = {
  any: null,
  female: null,
  male: null
};

let currentAudioElement = null;
let activeDialogueTimer = null;
let isSpeakingCancelled = false;
let activeUtterance = null; // WebKit garbage-collection prevention

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
 * Strict Voice Ranking Algorithm
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

// In-memory cache for instant 0ms audio playback
const audioMemoryCache = new Map();

/**
 * Preload Chinese audio in background memory so when clicked it plays instantly with 0ms delay
 */
export function preloadChineseAudio(rawText, speed = 0.90) {
  if (typeof window === 'undefined' || !rawText) return;
  const turns = parseDialogueTurns(rawText);
  turns.forEach(turn => {
    const textKey = turn.text.trim();
    if (!textKey || audioMemoryCache.has(textKey)) return;

    try {
      const encoded = encodeURIComponent(textKey);
      const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=zh-CN&client=tw-ob&q=${encoded}`;
      const audio = new Audio();
      audio.preload = 'auto';
      audio.src = audioUrl;
      audio.playbackRate = Math.max(0.75, Math.min(1.25, speed || 0.9));
      audio.load();
      audioMemoryCache.set(textKey, audio);
    } catch {
      // Ignore background preload failures
    }
  });
}

/**
 * Play a single turn using Google Studio Neural Audio with In-Memory Caching & 300ms Watchdog
 */
function playTurnWithGoogleAudio(text, speed, onDone) {
  try {
    const textKey = text.trim();
    let audio = audioMemoryCache.get(textKey);

    if (!audio) {
      const encoded = encodeURIComponent(textKey);
      const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=zh-CN&client=tw-ob&q=${encoded}`;
      audio = new Audio(audioUrl);
      audio.preload = 'auto';
      audioMemoryCache.set(textKey, audio);
    }

    currentAudioElement = audio;
    audio.playbackRate = Math.max(0.75, Math.min(1.25, speed || 0.9));
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

    // Fast watchdog: if network stalls > 300ms, immediately cut over to instant local speech (0ms wait)
    const watchdog = setTimeout(() => {
      if (!isDone && audio.paused) {
        finish(false);
      }
    }, 300);

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
 * Play single speech turn (Google Neural first -> Web Speech ranked natural voice fallback)
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
 * Seamlessly handles single sentences and multi-speaker dialogues
 * 
 * @param {string} rawText - Mandarin text (e.g. single sentence or dialog "男：...\n女：...")
 * @param {number} speed - Playback speed (default 0.90)
 * @param {function} onEndCallback - Callback when full speech completes
 * @param {function} onSpeakerChange - Callback with current turn info ({ speaker, roleLabel, text })
 */
export function speakChinese(rawText, speed = 0.90, onEndCallback = null, onSpeakerChange = null) {
  if (!rawText) {
    if (onEndCallback) onEndCallback();
    return;
  }

  stopChineseSpeech();
  isSpeakingCancelled = false;

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

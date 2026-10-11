// Optimized Web Speech API Helper for HSK 1 Turbo
// Designed for instant 0ms latency on iOS Safari and Desktop browsers

let cachedVoice = null;
let activeUtterance = null; // Prevent WebKit garbage-collection bug!

function cleanChineseText(text) {
  if (!text) return '';
  return text
    .replace(/^[ABab][:：]\s*/gm, '') // Remove speaker prefixes "A: ", "B: "
    .replace(/[A-Za-z][:：]\s*/g, '')  // Remove any Latin label prefixes
    .replace(/\n+/g, '，')             // Replace newlines with natural Mandarin pause
    .trim();
}

function loadVoice() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  // 1. Try exact zh-CN voices
  // On iOS: "Tingting" (ting-ting), "Sin-Ji", "Yu-shu", "Siri"
  const zhCn = voices.find(v => v.lang === 'zh-CN' || v.lang === 'zh_CN');
  if (zhCn) {
    cachedVoice = zhCn;
    return cachedVoice;
  }

  // 2. Try any zh voice
  const anyZh = voices.find(v => v.lang.toLowerCase().startsWith('zh'));
  if (anyZh) {
    cachedVoice = anyZh;
    return cachedVoice;
  }

  return null;
}

// Pre-warm voices as soon as available
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  loadVoice();
  window.speechSynthesis.onvoiceschanged = () => {
    loadVoice();
  };

  // iOS Safari audio unlock on first user interaction
  const unlockAudio = () => {
    try {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
      // Silent warm-up
      const warmUp = new SpeechSynthesisUtterance(' ');
      warmUp.volume = 0;
      warmUp.rate = 2;
      window.speechSynthesis.speak(warmUp);
    } catch (e) {
      // Ignore
    }
    window.removeEventListener('touchstart', unlockAudio);
    window.removeEventListener('click', unlockAudio);
  };
  window.addEventListener('touchstart', unlockAudio, { once: true, passive: true });
  window.addEventListener('click', unlockAudio, { once: true, passive: true });
}

export function speakChinese(rawText, speed = 0.85, onEndCallback = null) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this browser.');
    return;
  }

  const cleanedText = cleanChineseText(rawText);
  if (!cleanedText) return;

  // If paused on iOS Safari, resume immediately
  if (window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
  }

  // If already speaking, cancel quickly
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }

  const utterance = new SpeechSynthesisUtterance(cleanedText);
  utterance.lang = 'zh-CN';
  utterance.rate = speed;
  utterance.pitch = 1.0;

  const voice = cachedVoice || loadVoice();
  if (voice) {
    utterance.voice = voice;
  }

  utterance.onend = () => {
    activeUtterance = null;
    if (onEndCallback) onEndCallback();
  };

  utterance.onerror = (e) => {
    console.warn('SpeechSynthesis error:', e);
    activeUtterance = null;
    if (onEndCallback) onEndCallback();
  };

  // Keep reference to prevent WebKit garbage collection prematurely ending speech
  activeUtterance = utterance;

  // Play immediately with zero delay
  window.speechSynthesis.speak(utterance);
}

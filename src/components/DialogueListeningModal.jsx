import React, { useState, useRef, useEffect } from 'react';
import { 
  Volume2, 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Headphones, 
  Eye, 
  EyeOff, 
  X,
  Clock,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DialogueListeningModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(17.5);
  const [playCount, setPlayCount] = useState(0);
  const [showTranscript, setShowTranscript] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [activeSpeakerIndex, setActiveSpeakerIndex] = useState(-1);

  const audioRef = useRef(null);

  const dialogueLines = [
    { 
      speaker: "男 (Pria)", 
      voiceTag: "Yunxi Neural",
      avatar: "👨",
      color: "border-blue-500/40 bg-blue-50/50",
      textColor: "text-blue-900",
      hanzi: "请问，去火车站怎么走？", 
      pinyin: "Qǐngwèn, qù huǒchēzhàn zěnme zǒu?", 
      arti: "Permisi, bagaimana jalan menuju stasiun kereta api?",
      start: 0, 
      end: 3.5 
    },
    { 
      speaker: "女 (Wanita)", 
      voiceTag: "Xiaoxiao Neural",
      avatar: "👩",
      color: "border-rose-500/40 bg-rose-50/50",
      textColor: "text-rose-900",
      hanzi: "一直往前面走，到了红绿灯往右拐，就在医院旁边。", 
      pinyin: "Yìzhí wǎng qiánmiàn zǒu, dào le hónglǜdēng wǎng yòu guǎi, jiù zài yīyuàn pángbiān.", 
      arti: "Jalan lurus ke depan, sampai lampu merah belok ke kanan, persis di sebelah rumah sakit.",
      start: 3.5, 
      end: 8.8 
    },
    { 
      speaker: "男 (Pria)", 
      voiceTag: "Yunxi Neural",
      avatar: "👨",
      color: "border-blue-500/40 bg-blue-50/50",
      textColor: "text-blue-900",
      hanzi: "离这里远不远？需要坐出租车吗？", 
      pinyin: "Lí zhèlǐ yuǎn bu yuǎn? Xūyào zuò chūzūchē ma?", 
      arti: "Apakah jauh dari sini? Perlu naik taksi?",
      start: 8.8, 
      end: 12.0 
    },
    { 
      speaker: "女 (Wanita)", 
      voiceTag: "Xiaoxiao Neural",
      avatar: "👩",
      color: "border-rose-500/40 bg-rose-50/50",
      textColor: "text-rose-900",
      hanzi: "不远，走路五分钟就到了。", 
      pinyin: "Bù yuǎn, zǒulù wǔ fēnzhōng jiù dào le.", 
      arti: "Tidak jauh, jalan kaki lima menit saja sudah sampai.",
      start: 12.0, 
      end: 15.0 
    },
    { 
      speaker: "问 (Narator Soal)", 
      voiceTag: "Yunyang Neural",
      avatar: "🎙️",
      color: "border-amber-500/40 bg-amber-50/50",
      textColor: "text-amber-950",
      hanzi: "问：去火车站需要坐出租车吗？", 
      pinyin: "Wèn: Qù huǒchēzhàn xūyào zuò chūzūchē ma?", 
      arti: "Pertanyaan: Apakah pergi ke stasiun kereta perlu naik taksi?",
      start: 15.0, 
      end: 18.0 
    }
  ];

  const options = [
    { id: 'A', text: "需要坐出租车", pinyin: "Xūyào zuò chūzūchē", arti: "Perlu naik taksi", isCorrect: false },
    { id: 'B', text: "不需要，走路就到", pinyin: "Bù xūyào, zǒulù jiù dào", arti: "Tidak perlu, jalan kaki saja sampai", isCorrect: true },
    { id: 'C', text: "要坐飞机去", pinyin: "Yào zuò fēijī qù", arti: "Harus naik pesawat terbang", isCorrect: false }
  ];

  useEffect(() => {
    if (!isOpen) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setIsPlaying(false);
      setSelectedAnswer(null);
      setActiveSpeakerIndex(-1);
    }
  }, [isOpen]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setPlayCount(c => c + 1);
      }).catch(err => console.error("Audio playback error:", err));
    }
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const time = audioRef.current.currentTime;
    setCurrentTime(time);

    // Identify active speaker line
    const activeIdx = dialogueLines.findIndex(line => time >= line.start && time < line.end);
    setActiveSpeakerIndex(activeIdx);
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setActiveSpeakerIndex(-1);
  };

  const handleSelectOption = (opt) => {
    setSelectedAnswer(opt);
    if (opt.isCorrect) {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#10b981', '#3b82f6', '#f59e0b']
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 space-y-5 my-8">
        
        {/* Hidden Audio Element pointing to authentic MP3 */}
        <audio 
          ref={audioRef}
          src="./audio/dialogue_demo.mp3"
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleAudioEnded}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration || 17.5)}
        />

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 text-white flex items-center justify-center shadow-md shadow-rose-500/20">
              <Headphones size={20} />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-100">
                  Cara B: Neural Audio MP3
                </span>
                <span className="text-[10px] font-semibold text-slate-400">18 Detik</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Listening Percakapan Pria & Wanita
              </h3>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Audio Player Card */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 text-white shadow-lg shadow-slate-900/10 space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold text-rose-300 tracking-wider uppercase">
                Standar Kaset Ujian Resmi CTI
              </span>
              <p className="text-xs text-slate-300 font-medium">
                Aktor: Yunxi (Pria) & Xiaoxiao (Wanita)
              </p>
            </div>
            <span className="text-[11px] font-mono text-slate-400 bg-white/10 px-2 py-0.5 rounded-md">
              Diputar: {playCount}x
            </span>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5">
            <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-rose-500 to-amber-400 transition-all duration-150"
                style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-slate-400">
              <span>0:{Math.floor(currentTime).toString().padStart(2, '0')}</span>
              <span>0:{Math.floor(duration).toString().padStart(2, '0')}</span>
            </div>
          </div>

          {/* Play / Pause / Replay Controls */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <button
              onClick={() => {
                if (audioRef.current) {
                  audioRef.current.currentTime = 0;
                  audioRef.current.play();
                  setIsPlaying(true);
                  setPlayCount(c => c + 1);
                }
              }}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all active:scale-95"
              title="Ulang dari Awal"
            >
              <RotateCcw size={16} />
            </button>

            <button
              onClick={togglePlay}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs shadow-md shadow-rose-500/30 transition-all active:scale-95"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              <span>{isPlaying ? 'Jeda Audio' : 'Putar Audio Soal'}</span>
            </button>
          </div>
        </div>

        {/* Question Prompt */}
        <div className="p-3.5 bg-amber-50/80 rounded-2xl border border-amber-200/60 space-y-1">
          <span className="text-[10px] font-bold text-amber-900 tracking-wider uppercase block">
            Pertanyaan Menyimak:
          </span>
          <p className="text-sm font-bold text-amber-950 font-hanzi">
            去火车站需要坐出租车吗？
          </p>
          <p className="text-[11px] text-amber-800 font-medium">
            (Qù huǒchēzhàn xūyào zuò chūzūchē ma? — Apakah ke stasiun kereta perlu naik taksi?)
          </p>
        </div>

        {/* Multiple Choice Options */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold text-slate-500 tracking-wider uppercase block">
            Pilih Jawaban Berdasarkan Percakapan:
          </span>
          {options.map((opt) => {
            const isSelected = selectedAnswer?.id === opt.id;
            let btnStyle = "border-slate-200 hover:border-slate-300 bg-white text-slate-700";

            if (isSelected) {
              btnStyle = opt.isCorrect 
                ? "border-emerald-500 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-500/20" 
                : "border-rose-500 bg-rose-50 text-rose-900 ring-2 ring-rose-500/20";
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelectOption(opt)}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start gap-3 ${btnStyle}`}
              >
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                  isSelected 
                    ? (opt.isCorrect ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white')
                    : 'bg-slate-100 text-slate-600'
                }`}>
                  {opt.id}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-xs">{opt.text}</div>
                  <div className="text-[11px] text-slate-400 font-medium">{opt.pinyin} • {opt.arti}</div>
                </div>
                {isSelected && (
                  opt.isCorrect 
                    ? <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" /> 
                    : <XCircle size={16} className="text-rose-600 shrink-0 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback Alert if Answered */}
        {selectedAnswer && (
          <div className={`p-3 rounded-2xl text-xs font-semibold animate-fade-in ${
            selectedAnswer.isCorrect 
              ? 'bg-emerald-50 border border-emerald-200 text-emerald-900' 
              : 'bg-rose-50 border border-rose-200 text-rose-900'
          }`}>
            {selectedAnswer.isCorrect 
              ? '🎉 Benar sekali! Si cewek berkata: "不远，走路五分钟就到了" (Tidak jauh, jalan kaki 5 menit sampai), jadi tidak butuh taksi.' 
              : '❌ Kurang tepat. Dengarkan kalimat terakhir cewek: tidak jauh, hanya butuh 5 menit jalan kaki.'}
          </div>
        )}

        {/* Toggle Transcript Button */}
        <div className="pt-2 border-t border-slate-100">
          <button
            onClick={() => setShowTranscript(s => !s)}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors"
          >
            {showTranscript ? <EyeOff size={14} /> : <Eye size={14} />}
            <span>{showTranscript ? 'Sembunyikan Naskah Percakapan' : 'Lihat Naskah Percakapan & Terjemahan'}</span>
          </button>

          {/* Transcript Content with Real-time Karaoke Highlight */}
          {showTranscript && (
            <div className="mt-3 space-y-2.5 max-h-52 overflow-y-auto pr-1 animate-fade-in">
              {dialogueLines.map((line, idx) => {
                const isActive = activeSpeakerIndex === idx;
                return (
                  <div 
                    key={idx}
                    className={`p-2.5 rounded-xl border text-xs transition-all ${line.color} ${
                      isActive ? 'ring-2 ring-rose-500 scale-[1.01] shadow-xs' : 'opacity-85'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold mb-0.5">
                      <span>{line.avatar}</span>
                      <span className={line.textColor}>{line.speaker}</span>
                      <span className="text-[10px] text-slate-400 font-normal">({line.voiceTag})</span>
                      {isActive && (
                        <span className="ml-auto text-[10px] font-bold text-rose-600 animate-pulse">
                          Sedang Berbicara...
                        </span>
                      )}
                    </div>
                    <div className="font-bold text-slate-900 font-hanzi text-sm">{line.hanzi}</div>
                    <div className="text-[11px] text-slate-500 font-mono">{line.pinyin}</div>
                    <div className="text-[11px] text-slate-600 mt-0.5 italic">{line.arti}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

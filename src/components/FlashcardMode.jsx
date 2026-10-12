import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Volume2, 
  RotateCw, 
  Check, 
  AlertCircle, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Shuffle, 
  Eye, 
  EyeOff, 
  Sparkles,
  Lightbulb,
  Star,
  Award,
  Zap,
  CheckCircle2,
  Compass
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLearning } from '../context/LearningContext';
import { speakChinese } from '../utils/speech';
import DayHanziQuizModal from './DayHanziQuizModal';

export default function FlashcardMode({ initialDay = 1 }) {
  const navigate = useNavigate();
  const { 
    words, 
    wordStatus, 
    updateWordStatus, 
    audioSpeed, 
    daysConfig,
    toggleFavorite,
    isFavorite,
    favoriteCount
  } = useLearning();
  const sprintDaysList = daysConfig ? daysConfig.map(d => d.day) : [1, 2, 3, 4];

  const [selectedDay, setSelectedDay] = useState(initialDay);
  const [filterStatus, setFilterStatus] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [hidePinyinInitially, setHidePinyinInitially] = useState(true);
  const [shuffled, setShuffled] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [isSessionCompleted, setIsSessionCompleted] = useState(false);
  const [isHanziQuizOpen, setIsHanziQuizOpen] = useState(false);
  const [reviewSessionList, setReviewSessionList] = useState(null);
  const toastTimeoutRef = useRef(null);

  const showToast = (msg) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToastMessage(msg);
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 2000);
  };

  const handleToggleFav = (e, word) => {
    e?.stopPropagation();
    if (!word) return;
    const isNowFav = toggleFavorite(word.id);
    showToast(isNowFav ? `⭐ "${word.hanzi}" ditambahkan ke Favorit` : `"${word.hanzi}" dihapus dari Favorit`);
  };

  useEffect(() => {
    if (initialDay !== undefined && initialDay !== null) {
      setSelectedDay(initialDay);
      setCurrentIndex(0);
      setIsSessionCompleted(false);
      setReviewSessionList(null);
    }
  }, [initialDay]);

  // Current session batch of words for the selected day
  const currentSessionBatch = useMemo(() => {
    if (selectedDay === 'all') return words;
    return words.filter(w => w.day === Number(selectedDay));
  }, [words, selectedDay]);

  const masteredInBatch = useMemo(() => {
    return currentSessionBatch.filter(w => wordStatus[w.id] === 'mastered');
  }, [currentSessionBatch, wordStatus]);

  const unmasteredInBatch = useMemo(() => {
    return currentSessionBatch.filter(w => wordStatus[w.id] !== 'mastered');
  }, [currentSessionBatch, wordStatus]);

  // Filtered words for active flashcard viewing
  const filteredWords = useMemo(() => {
    let list = words;
    if (selectedDay !== 'all') {
      list = list.filter(w => w.day === Number(selectedDay));
    }
    if (filterStatus === 'favorites') {
      list = list.filter(w => isFavorite(w.id));
    } else if (filterStatus === 'unmastered') {
      list = list.filter(w => wordStatus[w.id] !== 'mastered');
    } else if (filterStatus === 'reviewing') {
      list = list.filter(w => wordStatus[w.id] === 'reviewing');
    } else if (filterStatus === 'mastered') {
      list = list.filter(w => wordStatus[w.id] === 'mastered');
    }

    if (shuffled) {
      return [...list].sort(() => Math.random() - 0.5);
    }
    return list;
  }, [words, selectedDay, filterStatus, wordStatus, shuffled, isFavorite]);

  // Active deck: when user reviews unmastered words, use stable reviewSessionList to avoid skip-card mutations
  const activeWords = useMemo(() => {
    if (reviewSessionList && reviewSessionList.length > 0) {
      return reviewSessionList;
    }
    return filteredWords;
  }, [reviewSessionList, filteredWords]);

  const currentWord = activeWords[currentIndex] || activeWords[0];

  useEffect(() => {
    setIsFlipped(false);
  }, [currentIndex, selectedDay, filterStatus, reviewSessionList]);

  const handleNext = () => {
    if (currentIndex < activeWords.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Reached the end of the 50 words / session batch: show completion summary
      setIsSessionCompleted(true);
      setReviewSessionList(null);
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleStartReviewUnmastered = () => {
    if (unmasteredInBatch.length === 0) return;
    setReviewSessionList([...unmasteredInBatch]);
    setCurrentIndex(0);
    setIsSessionCompleted(false);
  };

  const handleRestartAll = () => {
    setReviewSessionList(null);
    setFilterStatus('all');
    setCurrentIndex(0);
    setIsSessionCompleted(false);
  };

  const handlePlayAudio = (e, text) => {
    e?.stopPropagation();
    speakChinese(text || currentWord?.hanzi, audioSpeed);
  };

  const handleRate = (status) => {
    if (!currentWord) return;
    updateWordStatus(currentWord.id, status);

    if (status === 'mastered') {
      confetti({
        particleCount: 18,
        spread: 35,
        origin: { y: 0.8 },
        colors: ['#10b981', '#3b82f6', '#f59e0b']
      });
    }

    setTimeout(() => {
      handleNext();
    }, 180);
  };

  useEffect(() => {
    if (isSessionCompleted) return;
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      } else if (e.code === 'ArrowRight') {
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === '1') {
        handleRate('reviewing');
      } else if (e.key === '2' || e.key === '3') {
        handleRate('mastered');
      } else if ((e.key === 'f' || e.key === 'F') && currentWord) {
        handleToggleFav(null, currentWord);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, activeWords.length, currentWord, isSessionCompleted]);

  const getTonePillClass = (tone) => {
    switch (tone) {
      case 1: return 'tone-pill-1';
      case 2: return 'tone-pill-2';
      case 3: return 'tone-pill-3';
      case 4: return 'tone-pill-4';
      default: return 'tone-pill-5';
    }
  };

  // RENDER COMPLETION SUMMARY SCREEN WHEN SESSION FINISHES
  if (isSessionCompleted) {
    const masteryPercent = currentSessionBatch.length > 0 
      ? Math.round((masteredInBatch.length / currentSessionBatch.length) * 100) 
      : 0;

    return (
      <div className="max-w-xl mx-auto space-y-5 animate-fade-in pb-16">
        <div className="card-subtle rounded-3xl p-6 sm:p-8 space-y-6 bg-white border border-slate-200/90 shadow-xl text-center">
          {/* Header */}
          <div className="space-y-2">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-amber-400 to-rose-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-rose-500/20">
              <Award size={34} />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-bold border border-rose-100">
              <Sparkles size={13} />
              <span>Sesi Belajar Selesai! 🎉</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              {selectedDay !== 'all' ? `Kosakata Hari ke-${selectedDay}` : 'Seluruh Kosakata'}
            </h2>
            <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
              Anda telah menuntaskan seluruh <strong>{filteredWords.length} kosakata</strong> pada sesi ini. Evaluasi pemahaman Anda sebelum melanjutkan:
            </p>
          </div>

          {/* Bento Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-100 text-left">
              <span className="text-[11px] font-bold text-emerald-700 uppercase flex items-center gap-1">
                <CheckCircle2 size={14} /> Sudah Dikuasai
              </span>
              <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-800 mt-1">
                {masteredInBatch.length} <span className="text-xs font-semibold text-emerald-600">kata</span>
              </div>
              <p className="text-[10px] text-emerald-600 mt-0.5">Memori aktif tersimpan kuat</p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-100 text-left">
              <span className="text-[11px] font-bold text-amber-800 uppercase flex items-center gap-1">
                <AlertCircle size={14} /> Ragu & Belum Hafal
              </span>
              <div className="text-2xl sm:text-3xl font-black font-mono text-amber-900 mt-1">
                {unmasteredInBatch.length} <span className="text-xs font-semibold text-amber-700">kata</span>
              </div>
              <p className="text-[10px] text-amber-700 mt-0.5">Perlu pengulangan khusus</p>
            </div>
          </div>

          {/* Progress bar visual */}
          <div className="space-y-1.5 text-left">
            <div className="flex justify-between text-xs font-bold text-slate-600">
              <span>Tingkat Penguasaan Sesi</span>
              <span className="font-mono text-rose-600">{masteryPercent}%</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-rose-500 to-emerald-500 rounded-full transition-all duration-700"
                style={{ width: `${masteryPercent}%` }}
              />
            </div>
          </div>

          {/* List of Words Needing Review */}
          <div className="space-y-2 text-left pt-1">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-800">
                {unmasteredInBatch.length > 0 
                  ? `Kata yang Belum Dikuasai (${unmasteredInBatch.length})` 
                  : 'Status Kosakata Selesai'}
              </span>
              <span className="text-[11px] text-slate-400">
                {unmasteredInBatch.length === 0 ? 'Semua Berhasil Dihafal' : 'Klik audio untuk mendengar'}
              </span>
            </div>

            {unmasteredInBatch.length > 0 ? (
              <div className="max-h-56 overflow-y-auto space-y-1.5 p-1 rounded-2xl bg-slate-50 border border-slate-100 pr-1.5">
                {unmasteredInBatch.map((word) => (
                  <div
                    key={word.id}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/70 hover:border-rose-200 transition-colors shadow-2xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl font-black font-hanzi text-slate-900">{word.hanzi}</span>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-mono text-rose-500 font-bold">{word.pinyin}</span>
                          <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${getTonePillClass(word.tone)}`}>
                            Nada {word.tone}
                          </span>
                        </div>
                        <span className="text-xs text-slate-600 line-clamp-1">{word.arti}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => speakChinese(word.hanzi, audioSpeed)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer shrink-0"
                      title="Putar Audio"
                    >
                      <Volume2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-center text-xs space-y-1">
                <Sparkles size={22} className="mx-auto text-emerald-600 mb-1" />
                <p className="font-bold text-sm">Luar Biasa! 100% Kosakata Sudah Dikuasai!</p>
                <p className="text-[11px] text-emerald-600">Semua kata pada sesi ini telah berhasil Anda ingat dengan sangat baik.</p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-2">
            {/* Action A: Ulas Kata Ragu-ragu & Belum Hafal */}
            {unmasteredInBatch.length > 0 && (
              <button
                onClick={handleStartReviewUnmastered}
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 active:scale-98 text-white font-bold text-xs shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <AlertCircle size={16} />
                <span>Ulas Kata Ragu-ragu & Belum Hafal ({unmasteredInBatch.length} Kata)</span>
              </button>
            )}

            {/* Action B: Uji Pengetahuan Hanzi Hari Ini */}
            <button
              onClick={() => setIsHanziQuizOpen(true)}
              className="w-full py-3.5 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 active:scale-98 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Zap size={16} className="text-amber-400" />
              <span>Uji Pengetahuan Hanzi {selectedDay !== 'all' ? `Hari ke-${selectedDay}` : 'Hari Ini'}</span>
            </button>

            {/* Action C: Ulas Semua & Navigasi */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleRestartAll}
                className="py-2.5 px-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RotateCw size={14} />
                <span>Ulas dari Awal</span>
              </button>

              <button
                onClick={() => navigate('/study/roadmap')}
                className="py-2.5 px-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Compass size={14} />
                <span>Ke Roadmap</span>
              </button>
            </div>
          </div>
        </div>

        {/* Hanzi Quiz Modal */}
        <DayHanziQuizModal
          isOpen={isHanziQuizOpen}
          onClose={() => setIsHanziQuizOpen(false)}
          day={selectedDay}
          dayWords={currentSessionBatch}
          onCompleteQuiz={() => {
            // Keep stats fresh
          }}
        />
      </div>
    );
  }

  // EMPTY LIST FALLBACK
  if (!currentWord) {
    return (
      <div className="card-subtle rounded-3xl p-8 sm:p-10 text-center max-w-md mx-auto my-12 space-y-3">
        {filterStatus === 'favorites' ? (
          <>
            <div className="w-14 h-14 rounded-3xl bg-amber-50 text-amber-500 flex items-center justify-center mx-auto shadow-xs border border-amber-100">
              <Star size={28} className="fill-amber-400 text-amber-500" />
            </div>
            <h3 className="text-base font-bold text-slate-800">Belum Ada Kata Favorit</h3>
            <p className="text-xs text-slate-400 max-w-xs mx-auto">
              Ketuk ikon bintang (⭐) pada kartu flashcard untuk menandai kata favorit yang ingin Anda latih khusus.
            </p>
            <button
              onClick={() => { setFilterStatus('all'); setCurrentIndex(0); }}
              className="mt-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold cursor-pointer transition-all"
            >
              Lihat Semua Kosakata
            </button>
          </>
        ) : (
          <>
            <Sparkles size={32} className="text-amber-500 mx-auto mb-2" />
            <h3 className="text-base font-bold text-slate-800">Semua Kata Dikuasai</h3>
            <p className="text-xs text-slate-400 mt-1 mb-5">
              Tidak ada kata tersisa dalam filter ini.
            </p>
            <button
              onClick={() => { setFilterStatus('all'); setSelectedDay('all'); setCurrentIndex(0); }}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold cursor-pointer"
            >
              Lihat Semua Kosakata
            </button>
          </>
        )}
      </div>
    );
  }

  const currentStatus = wordStatus[currentWord.id] || 'unseen';

  return (
    <div className="max-w-xl mx-auto space-y-4 animate-fade-in pb-16 relative">
      {/* Dynamic Toast Popup */}
      {toastMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[110] px-4 py-2 bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold rounded-2xl shadow-xl shadow-slate-900/20 border border-white/10 flex items-center gap-2 pointer-events-none animate-fade-in">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Sleek Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-1.5 bg-slate-100/70 rounded-2xl border border-slate-200/50">
        {/* Day Pills & Favorite Filter */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar max-w-full sm:max-w-xs scroll-smooth py-0.5">
          <button
            onClick={() => { setReviewSessionList(null); setSelectedDay('all'); setFilterStatus('all'); setCurrentIndex(0); setIsSessionCompleted(false); }}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
              selectedDay === 'all' && filterStatus !== 'favorites' && !reviewSessionList
                ? 'bg-white shadow-xs text-slate-900 font-bold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Semua
          </button>

          <button
            onClick={() => {
              setReviewSessionList(null);
              setFilterStatus(prev => prev === 'favorites' ? 'all' : 'favorites');
              setCurrentIndex(0);
              setIsSessionCompleted(false);
            }}
            className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
              filterStatus === 'favorites' && !reviewSessionList
                ? 'bg-amber-500 text-white shadow-xs font-bold'
                : 'text-slate-500 hover:text-slate-800 hover:bg-white/60'
            }`}
            title="Filter Kata Favorit"
          >
            <Star size={13} className={filterStatus === 'favorites' ? 'fill-white' : 'text-amber-500 fill-amber-400'} />
            <span className="text-[11px]">Favorit{favoriteCount > 0 ? ` (${favoriteCount})` : ''}</span>
          </button>

          {sprintDaysList.map(d => (
            <button
              key={d}
              onClick={() => { setReviewSessionList(null); setSelectedDay(d); if (filterStatus === 'favorites') setFilterStatus('all'); setCurrentIndex(0); setIsSessionCompleted(false); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedDay === d && filterStatus !== 'favorites' && !reviewSessionList
                  ? 'bg-rose-500 text-white shadow-xs font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Hari {d}
            </button>
          ))}
        </div>

        {/* Toggle Pills */}
        <div className="flex items-center gap-1 ml-auto">
          {reviewSessionList && (
            <button
              onClick={() => { setReviewSessionList(null); setCurrentIndex(0); }}
              className="px-2 py-1 rounded-lg bg-amber-100 text-amber-900 text-[10px] font-bold cursor-pointer hover:bg-amber-200"
              title="Keluar dari Sesi Ulas Kata Ragu"
            >
              Mode Ulas ✕
            </button>
          )}

          {filterStatus !== 'all' && (
            <button
              onClick={() => { setFilterStatus('all'); setCurrentIndex(0); }}
              className="px-2 py-1 rounded-lg bg-slate-200 text-slate-700 text-[10px] font-bold cursor-pointer"
              title="Reset Filter"
            >
              Filter: {filterStatus} ✕
            </button>
          )}

          <button
            onClick={() => setHidePinyinInitially(h => !h)}
            className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              hidePinyinInitially
                ? 'bg-white shadow-xs text-rose-600 font-bold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
            title="Sembunyikan Pinyin di Depan"
          >
            {hidePinyinInitially ? <EyeOff size={13} /> : <Eye size={13} />}
            <span className="text-[11px]">Hanzi Saja</span>
          </button>

          <button
            onClick={() => setShuffled(s => !s)}
            className={`p-1.5 rounded-xl text-xs transition-all cursor-pointer ${
              shuffled ? 'bg-amber-100 text-amber-800' : 'text-slate-400 hover:text-slate-700'
            }`}
            title="Acak Kartu"
          >
            <Shuffle size={14} />
          </button>
        </div>
      </div>

      {/* Progress & Card Index */}
      <div className="flex items-center justify-between text-xs px-2 text-slate-400 font-medium">
        <div className="flex items-center gap-2">
          <span>{currentIndex + 1} dari {activeWords.length} kata</span>
          {reviewSessionList && (
            <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold border border-amber-200">
              Ulas Kata Ragu ({activeWords.length})
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {currentStatus === 'mastered' && (
            <span className="text-emerald-600 font-semibold flex items-center gap-1 text-[11px]">
              ✓ Dikuasai
            </span>
          )}
          {currentStatus === 'reviewing' && (
            <span className="text-amber-600 font-semibold text-[11px]">
              ! Perlu Diulang
            </span>
          )}
          {currentStatus === 'unseen' && (
            <span className="text-slate-400 text-[11px]">
              Kata Baru
            </span>
          )}

          <button
            onClick={() => setIsSessionCompleted(true)}
            className="text-[10px] font-bold text-slate-400 hover:text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md cursor-pointer ml-1"
            title="Lihat ringkasan sesi sekarang"
          >
            Ringkasan
          </button>
        </div>
      </div>

      {/* Modern Minimalist 3D Flashcard */}
      <div 
        onClick={() => setIsFlipped(f => !f)}
        className="cursor-pointer select-none perspective-1000 min-h-[380px] w-full"
      >
        <div className={`relative w-full h-full min-h-[380px] transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}>
          {/* FRONT: PURE HANZI */}
          <div className="absolute inset-0 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md shadow-slate-900/5 flex flex-col justify-between backface-hidden">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                {currentWord.cat} • Hari {currentWord.day}
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={(e) => handleToggleFav(e, currentWord)}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-2xs cursor-pointer ${
                    isFavorite(currentWord.id)
                      ? 'bg-amber-50 text-amber-500 hover:bg-amber-100 ring-1 ring-amber-300'
                      : 'bg-slate-50 hover:bg-amber-50 text-slate-400 hover:text-amber-500'
                  }`}
                  title={isFavorite(currentWord.id) ? 'Hapus dari Favorit (F)' : 'Tambah ke Favorit (F)'}
                >
                  <Star 
                    size={17} 
                    className={`transition-transform active:scale-125 ${
                      isFavorite(currentWord.id) ? 'fill-amber-400 text-amber-500 scale-110' : ''
                    }`} 
                  />
                </button>

                <button
                  onClick={(e) => handlePlayAudio(e, currentWord.hanzi)}
                  className="w-9 h-9 rounded-full bg-slate-50 hover:bg-rose-50 text-slate-600 hover:text-rose-600 flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
                  title="Dengarkan Pengucapan"
                >
                  <Volume2 size={17} />
                </button>
              </div>
            </div>

            {/* Main Character */}
            <div className="text-center my-auto py-4">
              <div className="text-7xl sm:text-8xl font-black text-slate-900 font-hanzi tracking-wide mb-2">
                {currentWord.hanzi}
              </div>

              {!hidePinyinInitially && (
                <div className="text-xl font-bold text-rose-500 font-mono tracking-wider">
                  {currentWord.pinyin}
                </div>
              )}
            </div>

            {/* Hint Footer */}
            <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1 pt-2">
              <RotateCw size={12} />
              <span>Ketuk untuk melihat arti & pinyin</span>
            </div>
          </div>

          {/* BACK: MEANING & CONTEXT */}
          <div className="absolute inset-0 bg-white rounded-3xl p-6 sm:p-8 border border-rose-200/90 shadow-md shadow-slate-900/5 flex flex-col justify-between backface-hidden rotate-y-180">
            <div className="flex items-center justify-between">
              <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${getTonePillClass(currentWord.tone)}`}>
                Nada {currentWord.tone}
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={(e) => handleToggleFav(e, currentWord)}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-2xs cursor-pointer ${
                    isFavorite(currentWord.id)
                      ? 'bg-amber-50 text-amber-500 hover:bg-amber-100 ring-1 ring-amber-300'
                      : 'bg-slate-50 hover:bg-amber-50 text-slate-400 hover:text-amber-500'
                  }`}
                  title={isFavorite(currentWord.id) ? 'Hapus dari Favorit (F)' : 'Tambah ke Favorit (F)'}
                >
                  <Star 
                    size={17} 
                    className={`transition-transform active:scale-125 ${
                      isFavorite(currentWord.id) ? 'fill-amber-400 text-amber-500 scale-110' : ''
                    }`} 
                  />
                </button>

                <button
                  onClick={(e) => handlePlayAudio(e, currentWord.hanzi)}
                  className="w-9 h-9 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
                  title="Dengarkan Pengucapan"
                >
                  <Volume2 size={17} />
                </button>
              </div>
            </div>

            {/* Content Details */}
            <div className="my-auto space-y-3 py-1">
              <div className="text-center">
                <span className="text-3xl font-black text-slate-900 font-hanzi mr-2">
                  {currentWord.hanzi}
                </span>
                <span className="text-2xl font-bold text-rose-500 font-mono">
                  {currentWord.pinyin}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  {currentWord.arti}
                </h3>
              </div>

              {/* Example sentence */}
              {currentWord.contoh && (
                <div 
                  onClick={(e) => handlePlayAudio(e, currentWord.contoh)}
                  className="bg-slate-50 hover:bg-rose-50/50 border border-slate-100 rounded-2xl p-3 transition-colors cursor-pointer text-left"
                >
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    <span>Contoh Kalimat:</span>
                    <Volume2 size={12} className="text-rose-500" />
                  </div>
                  <p className="text-sm font-bold text-slate-900 font-hanzi">{currentWord.contoh}</p>
                  <p className="text-xs font-mono text-rose-500">{currentWord.contohPinyin}</p>
                  <p className="text-xs text-slate-500 italic mt-0.5">{currentWord.contohArti}</p>
                </div>
              )}

              {/* Memory tip */}
              {currentWord.tips && (
                <div className="bg-amber-50/70 border border-amber-200/50 rounded-2xl p-2.5 text-xs text-amber-900 flex items-start gap-1.5 text-left">
                  <Lightbulb size={14} className="text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-[11px] leading-relaxed">
                    <strong>Trik Ingat:</strong> {currentWord.tips}
                  </p>
                </div>
              )}
            </div>

            {/* Hint Footer */}
            <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1 pt-2">
              <RotateCw size={12} />
              <span>Ketuk untuk membalik kembali</span>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Apple-style Rating Buttons */}
      <div className="grid grid-cols-3 gap-2.5 pt-1">
        <button
          onClick={() => handleRate('reviewing')}
          className="py-3 px-2 bg-slate-100 hover:bg-rose-50 active:scale-95 text-slate-600 hover:text-rose-600 rounded-2xl font-bold text-xs transition-all flex items-center justify-center gap-1 cursor-pointer"
        >
          <X size={15} />
          <span>Belum Ingat</span>
        </button>

        <button
          onClick={() => handleRate('reviewing')}
          className="py-3 px-2 bg-slate-100 hover:bg-amber-50 active:scale-95 text-slate-600 hover:text-amber-700 rounded-2xl font-bold text-xs transition-all flex items-center justify-center gap-1 cursor-pointer"
        >
          <AlertCircle size={15} />
          <span>Ragu-ragu</span>
        </button>

        <button
          onClick={() => handleRate('mastered')}
          className="py-3 px-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white rounded-2xl font-bold text-xs transition-all shadow-sm flex items-center justify-center gap-1 cursor-pointer"
        >
          <Check size={15} />
          <span>Sudah Kuasai</span>
        </button>
      </div>

      {/* Prev / Next Nav */}
      <div className="flex items-center justify-between px-1 pt-1">
        <button
          onClick={handlePrev}
          className="text-xs font-semibold text-slate-400 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
        >
          <ChevronLeft size={15} />
          <span>Sebelumnya</span>
        </button>

        <button
          onClick={handleNext}
          className="text-xs font-semibold text-slate-400 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
        >
          <span>{currentIndex === filteredWords.length - 1 ? 'Selesai & Evaluasi' : 'Berikutnya'}</span>
          <ChevronRight size={15} />
        </button>
      </div>

      {/* Hanzi Quiz Modal */}
      <DayHanziQuizModal
        isOpen={isHanziQuizOpen}
        onClose={() => setIsHanziQuizOpen(false)}
        day={selectedDay}
        dayWords={currentSessionBatch}
      />
    </div>
  );
}

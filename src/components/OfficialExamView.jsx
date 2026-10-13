import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Award, 
  Clock, 
  Volume2, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw,
  Sparkles,
  FileText,
  User,
  History,
  Check,
  Lock,
  ArrowRight,
  ShieldCheck,
  Image as ImageIcon,
  Play
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { generateOfficialExam } from '../data/officialExamBank';
import { HSK1_PACKAGES_METADATA, getOfficialExamPackage } from '../data/hsk1OfficialExamPackages';
import { speakChinese, stopChineseSpeech, preloadChineseAudio } from '../utils/speech';
import { useLearning } from '../context/LearningContext';
import OfficialCertificateModal from './OfficialCertificateModal';

export default function OfficialExamView() {
  const navigate = useNavigate();
  const { 
    words, 
    audioSpeed, 
    setAudioSpeed,
    officialHistory, 
    recordOfficialExamResult, 
    candidateName, 
    setCandidateName,
    currentLevel,
    isFinalAssessmentPassed,
    completedCheckpointsCount,
    requiredCheckpointsCount 
  } = useLearning();

  const [examSession, setExamSession] = useState(null);
  const [examState, setExamState] = useState('menu'); // 'menu', 'testing', 'result'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(2100); // 35 minutes = 2100 seconds
  const [selectedCertResult, setSelectedCertResult] = useState(null);
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(candidateName);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeSpeakerTurn, setActiveSpeakerTurn] = useState(null);

  const timerRef = useRef(null);

  // Reset audio state and stop playback on question change or unmount + Proactive Preload for 0ms delay
  useEffect(() => {
    setIsPlayingAudio(false);
    setActiveSpeakerTurn(null);
    stopChineseSpeech();

    // Proactively preload audio for current question and upcoming question into RAM
    const curr = examSession?.allQuestions[currentIndex];
    if (curr?.audioText) {
      preloadChineseAudio(curr.audioText, audioSpeed);
    }
    const next = examSession?.allQuestions[currentIndex + 1];
    if (next?.audioText) {
      preloadChineseAudio(next.audioText, audioSpeed);
    }

    return () => {
      stopChineseSpeech();
    };
  }, [currentIndex, examSession, audioSpeed]);

  const handlePlayAudio = (text) => {
    if (isPlayingAudio) {
      stopChineseSpeech();
      setIsPlayingAudio(false);
      setActiveSpeakerTurn(null);
      return;
    }

    setIsPlayingAudio(true);
    speakChinese(
      text, 
      audioSpeed, 
      () => {
        setIsPlayingAudio(false);
        setActiveSpeakerTurn(null);
      },
      (turn) => {
        setActiveSpeakerTurn(turn);
      }
    );
  };

  // Start official exam session (11 Official CTI Packages or Adaptive Bank)
  const startNewExam = (packageId = 'h10901') => {
    const newExam = packageId === 'adaptive'
      ? generateOfficialExam(words)
      : getOfficialExamPackage(packageId);

    setExamSession(newExam);
    setUserAnswers({});
    setCurrentIndex(0);
    setTimeLeft(newExam.durationMinutes ? newExam.durationMinutes * 60 : 2100);
    setExamState('testing');

    // Instantly buffer first 2 questions into RAM
    if (newExam.allQuestions[0]?.audioText) preloadChineseAudio(newExam.allQuestions[0].audioText, audioSpeed);
    if (newExam.allQuestions[1]?.audioText) preloadChineseAudio(newExam.allQuestions[1].audioText, audioSpeed);
  };

  // Timer countdown
  useEffect(() => {
    if (examState === 'testing') {
      timerRef.current = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) {
            clearInterval(timerRef.current);
            finishExam();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [examState]);

  const currentQ = examSession?.allQuestions[currentIndex];

  const selectAnswer = (ansIdx) => {
    if (!currentQ) return;
    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: ansIdx
    }));
  };

  const finishExam = () => {
    clearInterval(timerRef.current);
    if (!examSession) return;

    let listeningCorrect = 0;
    let readingCorrect = 0;

    examSession.listeningQuestions.forEach(q => {
      if (userAnswers[q.id] === q.answer) listeningCorrect++;
    });

    examSession.readingQuestions.forEach(q => {
      if (userAnswers[q.id] === q.answer) readingCorrect++;
    });

    const isAdaptive = examSession.examId === 'ADAPTIVE_MOCK' || examSession.totalQuestions === 20;
    const ptsPerQ = isAdaptive ? 10 : 5;
    const listeningScore = listeningCorrect * ptsPerQ; // Max 100
    const readingScore = readingCorrect * ptsPerQ;     // Max 100
    const totalScore = listeningScore + readingScore; // Max 200
    const isPassed = totalScore >= (examSession.passScore || 120); // 60% of 200

    const certNumber = `H1${new Date().getFullYear().toString().slice(2)}${Math.floor(10000000 + Math.random() * 90000000)}`;

    const resultRecord = {
      id: Date.now(),
      examId: examSession.examId,
      title: examSession.title || 'Simulasi Ujian Resmi HSK 1',
      level: currentLevel || 1,
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      candidateName: candidateName || 'Pembelajar HSK',
      certNumber,
      certificateNo: certNumber,
      listeningScore,
      readingScore,
      score: totalScore,
      totalScore,
      passed: isPassed,
      answeredCount: Object.keys(userAnswers).length,
      totalQuestions: examSession.totalQuestions,
      questionsSnapshot: examSession.allQuestions,
      userAnswers
    };

    recordOfficialExamResult(resultRecord);
    setSelectedCertResult(resultRecord);
    setExamState('result');

    if (isPassed) {
      confetti({ particleCount: 80, spread: 85, origin: { y: 0.6 } });
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSaveName = () => {
    if (tempName.trim()) {
      setCandidateName(tempName.trim());
    }
    setIsEditingName(false);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fade-in pb-20">
      {/* MENU SCREEN (Dashboard Ujian Resmi & Riwayat) */}
      {examState === 'menu' && (
        <div className="space-y-6">
          {/* Hero Banner */}
          <div className="card-subtle rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden shadow-lg">
            <div className="relative z-10 max-w-xl space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold backdrop-blur-md border border-rose-500/30">
                <Award size={14} className="text-rose-400" />
                <span>Ujian Standar CTI (汉考国际)</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Ujian Sertifikasi Resmi HSK {currentLevel || 1} (Standar 3.0)
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Ujian dengan format dan standar penilaian resmi CTI (200 Poin). Setiap kali dimulai, <strong>soal akan berganti secara acak</strong> dari bank soal. Lulus ujian untuk mencetak sertifikat resmi Anda!
              </p>

              {/* Candidate Name Settings */}
              <div className="pt-2 flex items-center gap-2">
                <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full text-xs text-slate-200 border border-white/10">
                  <User size={13} className="text-rose-400" />
                  <span>Nama Peserta:</span>
                  {isEditingName ? (
                    <div className="flex items-center gap-1">
                      <input
                        type="text"
                        value={tempName}
                        onChange={(e) => setTempName(e.target.value)}
                        className="bg-black/40 text-white px-2 py-0.5 rounded text-xs focus:outline-none border border-rose-400"
                        placeholder="Nama Lengkap Anda"
                      />
                      <button
                        onClick={handleSaveName}
                        className="px-2 py-0.5 bg-rose-500 text-white rounded text-[10px] font-bold"
                      >
                        Simpan
                      </button>
                    </div>
                  ) : (
                    <span 
                      onClick={() => { setTempName(candidateName); setIsEditingName(true); }}
                      className="font-bold text-white underline cursor-pointer hover:text-rose-300"
                      title="Klik untuk ganti nama di sertifikat"
                    >
                      {candidateName}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="relative z-10 grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-white/10 text-center">
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block uppercase">Format Ujian Resmi</span>
                <span className="text-sm sm:text-base font-bold text-white font-mono">20 Dengar + 20 Baca</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block uppercase">Skor Maksimal</span>
                <span className="text-sm sm:text-base font-bold text-amber-300 font-mono">200 Poin</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block uppercase">Syarat Kelulusan</span>
                <span className="text-sm sm:text-base font-bold text-emerald-400 font-mono">≥ 120 Poin (60%)</span>
              </div>
            </div>

            <div className="absolute -right-6 -bottom-10 text-[160px] font-black text-white/5 select-none pointer-events-none font-hanzi">
              证
            </div>
          </div>

          {/* Prerequisite Notification (If not passed final assessment) */}
          {currentLevel === 1 && !isFinalAssessmentPassed && (
            <div className="p-4 sm:p-5 rounded-3xl bg-amber-50/90 border border-amber-200 text-amber-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Lock size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-amber-800 mb-0.5">
                    <span>Akses 11 Paket Terbuka Bebas • Status Sertifikasi Resmi 🔒</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-amber-950">Anda dapat langsung mencoba 11 paket simulasi ujian di bawah ini!</h4>
                  <p className="text-[11px] text-amber-800 mt-0.5 leading-relaxed">
                    Selesaikan <strong>Evaluasi Berkala</strong> ({completedCheckpointsCount}/{requiredCheckpointsCount} selesai) dan <strong>Assesmen Final HSK {currentLevel || 1}</strong> di Roadmap untuk memperoleh sertifikat resmi digital terverifikasi.
                  </p>
                </div>
              </div>

              <button
                onClick={() => navigate('/study/roadmap')}
                className="px-4 py-2.5 bg-amber-600 hover:bg-amber-700 active:scale-95 text-white font-bold text-xs rounded-xl shadow-xs transition-all shrink-0 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Buka Roadmap</span>
                <ArrowRight size={14} />
              </button>
            </div>
          )}

          <div className="space-y-6">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-rose-50 via-white to-amber-50/50 p-4 sm:p-5 rounded-3xl border border-rose-100 shadow-2xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-500 text-white text-[10px] font-black uppercase tracking-wider">
                      Standar CTI Resmi
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      11 Paket Tersedia
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900">
                    Koleksi Lengkap 11 Paket Ujian Asli HSK 1
                  </h3>
                  <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
                    Setiap paket berisi 40 butir soal asli (20 Menyimak + 20 Membaca), 25 soal bergambar autentik, durasi 35 menit, dan batas kelulusan 120/200 poin bersertifikat.
                  </p>
                </div>

                <button
                  onClick={() => startNewExam('adaptive')}
                  className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 active:scale-95 text-white font-bold text-xs rounded-2xl shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0"
                >
                  <Sparkles size={14} className="text-amber-400" />
                  <span>Latihan Acak Adaptif (20 Soal)</span>
                </button>
              </div>

              {/* 11 Packages Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {HSK1_PACKAGES_METADATA.map((pkg) => {
                  const attempts = officialHistory.filter(h => h.examId === pkg.code);
                  const bestScore = attempts.length > 0 ? Math.max(...attempts.map(h => h.totalScore || h.score || 0)) : null;
                  const isPassed = attempts.some(h => h.passed);

                  return (
                    <div 
                      key={pkg.id}
                      className="p-5 card-subtle rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:border-rose-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
                    >
                      <div className="space-y-3">
                        {/* Top Badges */}
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5">
                            <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[10px] font-black uppercase tracking-wider">
                              Paket {pkg.num.toString().padStart(2, '0')}
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold font-mono">
                              {pkg.code}
                            </span>
                          </div>

                          {isPassed ? (
                            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black flex items-center gap-1">
                              <CheckCircle2 size={12} className="text-emerald-600" />
                              <span>{bestScore}/200</span>
                            </span>
                          ) : bestScore !== null ? (
                            <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-black">
                              Skor: {bestScore}/200
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-full bg-slate-50 text-slate-400 text-[10px] font-semibold border border-slate-100">
                              Tahun {pkg.year}
                            </span>
                          )}
                        </div>

                        {/* Title & Desc */}
                        <div>
                          <h4 className="text-sm font-black text-slate-900 group-hover:text-rose-600 transition-colors">
                            {pkg.title}
                          </h4>
                          <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                            {pkg.desc}
                          </p>
                        </div>

                        {/* Feature Badges */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          <span className="px-2 py-0.5 rounded-lg bg-slate-100 text-slate-600 text-[10px] font-bold">
                            📝 40 Soal
                          </span>
                          <span className="px-2 py-0.5 rounded-lg bg-amber-50 text-amber-800 border border-amber-100/60 text-[10px] font-bold">
                            🖼️ 25 Gambar
                          </span>
                          <span className="px-2 py-0.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-100/60 text-[10px] font-bold">
                            ⏱️ 35 Menit
                          </span>
                        </div>
                      </div>

                      {/* Footer CTA */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] font-bold text-slate-400">
                          {attempts.length > 0 ? `${attempts.length}x dicoba` : 'Belum dikerjakan'}
                        </span>
                        <button
                          onClick={() => startNewExam(pkg.id)}
                          className="px-4 py-2 bg-rose-600 hover:bg-rose-700 active:scale-95 text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer flex items-center gap-1 group-hover:shadow-rose-500/20"
                        >
                          <span>Mulai Ujian</span>
                          <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          {/* EXAM HISTORY SECTION */}
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <History size={16} className="text-slate-400" />
                <span>Riwayat Ujian & Sertifikat ({officialHistory.length})</span>
              </h3>
            </div>

            {officialHistory.length === 0 ? (
              <div className="card-subtle rounded-3xl p-8 text-center text-slate-400 text-xs">
                Belum ada riwayat ujian resmi. Mulai ujian pertama Anda untuk mendapatkan sertifikat HSK {currentLevel || 1}!
              </div>
            ) : (
              <div className="space-y-2.5">
                {officialHistory.map((hist) => (
                  <div
                    key={hist.id}
                    className="card-subtle rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:border-slate-300 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shrink-0 ${
                        hist.passed ? 'bg-emerald-500' : 'bg-rose-500'
                      }`}>
                        {hist.passed ? '✓' : '✗'}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-slate-900 font-mono">
                            {hist.totalScore} / 200 Poin
                          </span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            hist.passed 
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                              : 'bg-rose-50 text-rose-700 border border-rose-200'
                          }`}>
                            {hist.passed ? '合格 (LULUS)' : '未合格 (BELUM)'}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {hist.date} {hist.time} • 听力: {hist.listeningScore} | 阅读: {hist.readingScore} • No: {hist.certNumber}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedCertResult(hist)}
                      className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1 self-end sm:self-center transition-colors"
                    >
                      <FileText size={13} />
                      <span>Buka Sertifikat</span>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* TESTING ACTIVE SCREEN */}
      {examState === 'testing' && currentQ && (
        <div className="card-subtle rounded-3xl p-6 sm:p-8 space-y-6">
          {/* Top Progress & Timer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-200 uppercase tracking-wider">
                  {currentQ.part}
                </span>
                {examSession.examId && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                    Set {examSession.examId}
                  </span>
                )}
              </div>
              <span className="text-xs font-bold text-slate-800 mt-1 block">
                Soal {currentIndex + 1} dari {examSession.totalQuestions} • Terjawab: {Object.keys(userAnswers).length}/{examSession.totalQuestions}
              </span>
            </div>

            <div className={`px-3 py-1 rounded-full font-mono text-xs font-bold flex items-center gap-1.5 self-start sm:self-auto ${
              timeLeft < 300 ? 'bg-rose-100 text-rose-700 animate-pulse' : 'bg-slate-100 text-slate-700'
            }`}>
              <Clock size={13} className="text-slate-400" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>

          {/* Master Exam Audio Track (Listening Section H10901) */}
          {examSession.audioUrl && currentIndex < (examSession.listeningQuestions?.length || 20) && (
            <div className="bg-gradient-to-r from-rose-50 via-white to-amber-50/50 border border-rose-200/90 rounded-2xl p-3.5 sm:p-4 space-y-2 shadow-2xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-rose-500 text-white flex items-center justify-center shadow-xs">
                    <Volume2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Audio Rekaman Resmi CTI HSK 1 ({examSession.examId || 'Set H10901'})</h4>
                    <p className="text-[11px] text-slate-500">Putar audio resmi ini untuk menyimak instruksi & dialog ujian nyata (15 Menit)</p>
                  </div>
                </div>
              </div>
              <audio 
                src={examSession.audioUrl} 
                controls 
                className="w-full h-9 rounded-lg"
                preload="metadata"
              />
            </div>
          )}

          {/* Question Body */}
          <div className="space-y-4">
            {/* Audio Button per question (Humanized Neural Voice) */}
            {currentQ.audioText && (
              <div className="bg-rose-50/40 border border-rose-100 rounded-2xl p-4 text-center space-y-2.5">
                <button
                  onClick={() => handlePlayAudio(currentQ.audioText)}
                  className={`w-14 h-14 rounded-full text-white mx-auto flex items-center justify-center shadow-sm active:scale-95 transition-all cursor-pointer ${
                    isPlayingAudio
                      ? 'bg-rose-600 ring-4 ring-rose-200 animate-pulse'
                      : 'bg-rose-500 hover:bg-rose-600 shadow-rose-500/20'
                  }`}
                  title={isPlayingAudio ? "Klik untuk menghentikan audio" : "Dengarkan audio Mandarin alami"}
                >
                  <Volume2 size={24} className={isPlayingAudio ? 'scale-110' : ''} />
                </button>

                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-center gap-1.5">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">
                      ✨ Suara Human AI (Studio Alami)
                    </span>
                    {currentQ.dialogSnippet && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                        🗣️ Dialog 2 Penutur
                      </span>
                    )}
                  </div>

                  {activeSpeakerTurn ? (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-600 text-white text-xs font-bold shadow-xs animate-pulse">
                      <span>🗣️ Sedang Berbicara: {activeSpeakerTurn.roleLabel || 'Penutur'}</span>
                    </div>
                  ) : (
                    <p className={`text-[11px] font-medium transition-colors ${isPlayingAudio ? 'text-rose-600 font-bold' : 'text-slate-500'}`}>
                      {isPlayingAudio ? 'Sedang memutar percakapan alami...' : 'Klik tombol di atas untuk menyimak audio standar penutur asli'}
                    </p>
                  )}

                  {/* Tempo Speed Pills */}
                  <div className="flex items-center justify-center gap-1.5 pt-1">
                    <span className="text-[10px] font-semibold text-slate-400 mr-1">Tempo:</span>
                    {[
                      { val: 0.95, label: '0.95x Santai' },
                      { val: 1.05, label: '1.05x Normal ⚡' },
                      { val: 1.15, label: '1.15x Tangkas' }
                    ].map(spd => (
                      <button
                        key={spd.val}
                        type="button"
                        onClick={() => setAudioSpeed(spd.val)}
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
                          Math.abs(audioSpeed - spd.val) < 0.04
                            ? 'bg-rose-500 text-white shadow-2xs scale-105'
                            : 'bg-white/80 text-slate-600 hover:bg-white border border-slate-200/60'
                        }`}
                      >
                        {spd.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Single Image Illustration (True/False or ABC) */}
            {currentQ.image && (
              <div className="flex flex-col items-center justify-center p-3 sm:p-4 bg-slate-50/90 rounded-2xl border border-slate-100">
                <img 
                  src={currentQ.image} 
                  alt="Ilustrasi Soal Resmi CTI" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                  className="max-h-56 sm:max-h-64 object-contain rounded-xl shadow-xs"
                />
                <span className="text-[10px] text-slate-400 mt-2 font-medium">Gambar Ilustrasi Ujian Resmi CTI</span>
              </div>
            )}

            {/* Grid Image Reference (A–F options) */}
            {currentQ.gridImage && (
              <div className="space-y-2">
                <div className="text-[11px] font-bold text-slate-600 uppercase flex items-center gap-1.5">
                  <ImageIcon size={14} className="text-rose-500" />
                  <span>Pilihan Gambar Referensi (A – F):</span>
                </div>
                <div className="flex justify-center p-3 sm:p-4 bg-slate-50/90 rounded-2xl border border-slate-100">
                  <img 
                    src={currentQ.gridImage} 
                    alt="Kisi Gambar Referensi A-F" 
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                    className="max-h-64 sm:max-h-80 w-auto object-contain rounded-xl shadow-xs"
                  />
                </div>
              </div>
            )}

            {/* Reading Passage / Sentence Text */}
            {currentQ.text && (
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                <p className="text-base sm:text-lg font-bold text-slate-900 font-hanzi whitespace-pre-wrap leading-relaxed">
                  {currentQ.text}
                </p>
              </div>
            )}

            {/* Statement text for True/False */}
            {currentQ.statementText && (
              <div className="p-3 bg-amber-50/70 border border-amber-200/50 rounded-xl text-center text-xs sm:text-sm font-semibold text-slate-800">
                Pernyataan yang dinilai: <strong>{currentQ.statementText}</strong>
              </div>
            )}

            <p className="text-xs sm:text-sm font-semibold text-slate-800">
              {currentQ.prompt}
            </p>

            {/* Options List */}
            <div className="space-y-2 pt-1">
              {currentQ.options.map((opt, optIdx) => {
                const isSelected = userAnswers[currentQ.id] === optIdx;
                return (
                  <button
                    key={optIdx}
                    onClick={() => selectAnswer(optIdx)}
                    className={`w-full p-3.5 rounded-2xl border text-left text-xs sm:text-sm font-medium flex items-center justify-between transition-all ${
                      isSelected
                        ? 'border-rose-500 bg-rose-50/40 text-slate-900 font-bold shadow-2xs'
                        : 'border-slate-200/80 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    <span>{opt}</span>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      isSelected ? 'border-rose-500 bg-rose-500 text-white' : 'border-slate-300'
                    }`}>
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Bar */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
              disabled={currentIndex === 0}
              className="text-xs font-semibold text-slate-400 hover:text-slate-800 disabled:opacity-20 flex items-center gap-1"
            >
              <ChevronLeft size={16} />
              <span>Sebelumnya</span>
            </button>

            {currentIndex < examSession.totalQuestions - 1 ? (
              <button
                onClick={() => setCurrentIndex(i => i + 1)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1"
              >
                <span>Berikutnya</span>
                <ChevronRight size={14} />
              </button>
            ) : (
              <button
                onClick={finishExam}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
              >
                Kirim Lembar Jawaban ({Object.keys(userAnswers).length}/{examSession.totalQuestions})
              </button>
            )}
          </div>
        </div>
      )}

      {/* RESULT SCREEN */}
      {examState === 'result' && selectedCertResult && (
        <div className="card-subtle rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className={`w-14 h-14 rounded-2xl mx-auto flex items-center justify-center text-white shadow-sm ${
              selectedCertResult.passed ? 'bg-emerald-500' : 'bg-rose-500'
            }`}>
              {selectedCertResult.passed ? <Sparkles size={28} /> : <AlertTriangle size={28} />}
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              {selectedCertResult.passed ? 'SELAMAT, ANDA LULUS UJIAN RESMI HSK 1!' : 'BELUM MEMENUHI STANDAR KELULUSAN'}
            </h3>

            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              {selectedCertResult.passed 
                ? 'Hasil evaluasi menunjukkan Anda telah menguasai kosakata dan struktur HSK 1 Standar 3.0.' 
                : 'Syarat kelulusan resmi adalah 120 dari 200 poin. Anda dapat mengulang ujian kapan pun dengan variasi soal baru.'}
            </p>

            {/* Score Breakdown Cards */}
            <div className="grid grid-cols-3 gap-2 max-w-md mx-auto pt-2">
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-[10px] text-slate-400 font-semibold block uppercase">听力 (Listening)</span>
                <span className="text-base font-bold text-slate-900 font-mono">{selectedCertResult.listeningScore} / 100</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-[10px] text-slate-400 font-semibold block uppercase">阅读 (Reading)</span>
                <span className="text-base font-bold text-slate-900 font-mono">{selectedCertResult.readingScore} / 100</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-[10px] text-slate-400 font-semibold block uppercase">总分 (Total)</span>
                <span className={`text-base font-black font-mono ${selectedCertResult.passed ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {selectedCertResult.totalScore} / 200
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setSelectedCertResult(selectedCertResult)}
              className="w-full sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-2xl text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <FileText size={15} />
              <span>Buka Sertifikat Resmi</span>
            </button>

            <button
              onClick={startNewExam}
              className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <RotateCcw size={15} />
              <span>Ulangi Ujian (Soal Baru)</span>
            </button>

            <button
              onClick={() => setExamState('menu')}
              className="w-full sm:w-auto px-5 py-3 text-slate-600 hover:text-slate-900 rounded-2xl text-xs font-semibold transition-colors"
            >
              Kembali ke Menu
            </button>
          </div>

          {/* Detailed Question Review */}
          {selectedCertResult.questionsSnapshot && (
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-900">
                Evaluasi Kunci Jawaban Soal yang Dikerjakan:
              </h4>

              <div className="space-y-2">
                {selectedCertResult.questionsSnapshot.map((q, idx) => {
                  const userAns = selectedCertResult.userAnswers[q.id];
                  const isCorrect = userAns === q.answer;
                  const pts = q.points || (selectedCertResult.totalQuestions === 40 || selectedCertResult.examId !== 'ADAPTIVE_MOCK' ? 5 : 10);

                  return (
                    <div
                      key={q.id}
                      className={`p-3.5 rounded-2xl border text-xs space-y-2 ${
                        isCorrect ? 'bg-emerald-50/40 border-emerald-200' : 'bg-rose-50/40 border-rose-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-800">
                          #{idx + 1} ({q.part})
                        </span>
                        <span className={`font-bold text-[10px] ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                          {isCorrect ? `Benar (+${pts} Poin)` : 'Salah (0 Poin)'}
                        </span>
                      </div>

                      {q.image && (
                        <div className="py-1">
                          <img 
                            src={q.image} 
                            alt={`Soal #${idx + 1}`} 
                            className="max-h-24 sm:max-h-28 object-contain rounded-lg border border-slate-200 bg-white" 
                          />
                        </div>
                      )}

                      {q.gridImage && (
                        <div className="py-1">
                          <img 
                            src={q.gridImage} 
                            alt={`Kisi Soal #${idx + 1}`} 
                            className="max-h-28 sm:max-h-36 object-contain rounded-lg border border-slate-200 bg-white" 
                          />
                        </div>
                      )}

                      {q.audioText && (
                        <p className="text-slate-600">Audio: <strong>{q.audioText}</strong></p>
                      )}
                      {q.text && (
                        <p className="text-slate-800 font-hanzi font-semibold">{q.text}</p>
                      )}

                      <p className="text-slate-700">{q.prompt}</p>

                      <p className="text-slate-600 pt-0.5">
                        Jawaban Anda: <strong className={isCorrect ? 'text-emerald-700' : 'text-rose-700'}>
                          {userAns !== undefined ? q.options[userAns] : '(Kosong)'}
                        </strong>
                        {!isCorrect && (
                          <span className="text-emerald-700 font-bold ml-2">
                            | Kunci: {q.options[q.answer]}
                          </span>
                        )}
                      </p>

                      <p className="text-slate-500 italic text-[11px] pt-0.5">
                        💡 {q.explanation}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Official Certificate Modal */}
      {selectedCertResult && (
        <OfficialCertificateModal
          examResult={selectedCertResult}
          onClose={() => setSelectedCertResult(null)}
        />
      )}
    </div>
  );
}

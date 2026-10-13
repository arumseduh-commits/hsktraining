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
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { generateOfficialExam } from '../data/officialExamBank';
import { speakChinese } from '../utils/speech';
import { useLearning } from '../context/LearningContext';
import OfficialCertificateModal from './OfficialCertificateModal';

export default function OfficialExamView() {
  const navigate = useNavigate();
  const { 
    words, 
    audioSpeed, 
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
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes = 1500 seconds
  const [selectedCertResult, setSelectedCertResult] = useState(null);
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(candidateName);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const timerRef = useRef(null);

  // Reset audio state on question change
  useEffect(() => {
    setIsPlayingAudio(false);
  }, [currentIndex]);

  const handlePlayAudio = (text) => {
    setIsPlayingAudio(true);
    speakChinese(text, audioSpeed, () => {
      setIsPlayingAudio(false);
    });
  };

  // Start new randomized official exam session
  const startNewExam = () => {
    if (!isFinalAssessmentPassed) {
      navigate('/study/roadmap');
      return;
    }
    const newExam = generateOfficialExam(words);
    setExamSession(newExam);
    setUserAnswers({});
    setCurrentIndex(0);
    setTimeLeft(1500);
    setExamState('testing');
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

    const listeningScore = listeningCorrect * 10; // Max 100
    const readingScore = readingCorrect * 10;     // Max 100
    const totalScore = listeningScore + readingScore; // Max 200
    const isPassed = totalScore >= 120; // 60% of 200

    const certNumber = `H1${new Date().getFullYear().toString().slice(2)}${Math.floor(10000000 + Math.random() * 90000000)}`;

    const resultRecord = {
      id: Date.now(),
      examId: examSession.examId,
      level: currentLevel || 1,
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      candidateName: candidateName || 'Pembelajar HSK',
      certNumber,
      listeningScore,
      readingScore,
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
                <span className="text-[10px] text-slate-400 font-semibold block uppercase">Struktur Ujian</span>
                <span className="text-sm sm:text-base font-bold text-white font-mono">10 Dengar + 10 Baca</span>
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

          {/* Action to Start Test or Unlock Banner */}
          {currentLevel === 1 && !isFinalAssessmentPassed ? (
            <div className="p-5 sm:p-6 rounded-3xl bg-amber-50/90 border border-amber-200 text-amber-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Lock size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-amber-800 mb-0.5">
                    <span>Ujian Bersertifikat Terkunci 🔒</span>
                  </div>
                  <h4 className="text-sm font-bold text-amber-950">Selesaikan Assesmen Final HSK {currentLevel || 1} Terlebih Dahulu</h4>
                  <p className="text-xs text-amber-800 mt-0.5 leading-relaxed">
                    Selesaikan <strong>Evaluasi Berkala</strong> ({completedCheckpointsCount}/{requiredCheckpointsCount} selesai) dan <strong>Assesmen Final HSK {currentLevel || 1}</strong> di Roadmap untuk membuka ujian ini.
                  </p>
                  <p className="text-[11px] text-amber-700 mt-1 italic">
                    * Jika Anda sudah menguasai HSK {currentLevel || 1}, selesaikan evaluasi di Roadmap sekarang untuk membuka sertifikasi seketika.
                  </p>
                </div>
              </div>

              <button
                onClick={() => navigate('/study/roadmap')}
                className="px-5 py-3 bg-amber-600 hover:bg-amber-700 active:scale-95 text-white font-bold text-xs rounded-2xl shadow-xs transition-all shrink-0 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Buka Assesmen di Roadmap</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-4 p-5 card-subtle rounded-3xl bg-white">
              <div>
                <h3 className="text-base font-bold text-slate-900">Siap Menguji Penguasaan HSK {currentLevel || 1} Anda?</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Waktu pengerjaan 25 menit. Soal baru yang segar akan diacak otomatis.
                </p>
              </div>

              <button
                onClick={startNewExam}
                className="px-6 py-3 bg-rose-500 hover:bg-rose-600 active:scale-95 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-sm transition-all shrink-0 cursor-pointer"
              >
                Mulai Ujian Baru
              </button>
            </div>
          )}

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
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <span className="text-[10px] font-bold text-rose-500 uppercase tracking-wider block">
                {currentQ.part}
              </span>
              <span className="text-xs font-bold text-slate-800">
                Soal {currentIndex + 1} dari {examSession.totalQuestions}
              </span>
            </div>

            <div className={`px-3 py-1 rounded-full font-mono text-xs font-bold flex items-center gap-1.5 ${
              timeLeft < 300 ? 'bg-rose-100 text-rose-700 animate-pulse' : 'bg-slate-100 text-slate-700'
            }`}>
              <Clock size={13} className="text-slate-400" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>

          {/* Question Body */}
          <div className="space-y-4">
            {/* Audio Section */}
            {currentQ.audioText && (
              <div className="bg-rose-50/40 border border-rose-100 rounded-2xl p-4 text-center space-y-2">
                <button
                  onClick={() => handlePlayAudio(currentQ.audioText)}
                  className={`w-14 h-14 rounded-full text-white mx-auto flex items-center justify-center shadow-sm active:scale-95 transition-all ${
                    isPlayingAudio
                      ? 'bg-rose-600 ring-4 ring-rose-200 animate-pulse'
                      : 'bg-rose-500 hover:bg-rose-600 shadow-rose-500/20'
                  }`}
                  title="Dengarkan Audio"
                >
                  <Volume2 size={24} className={isPlayingAudio ? 'scale-110' : ''} />
                </button>
                <p className={`text-[11px] font-medium transition-colors ${isPlayingAudio ? 'text-rose-600 font-bold' : 'text-slate-400'}`}>
                  {isPlayingAudio ? 'Sedang Memutar Audio...' : 'Putar rekaman audio Mandarin (zh-CN)'}
                </p>
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

                  return (
                    <div
                      key={q.id}
                      className={`p-3 rounded-2xl border text-xs space-y-1 ${
                        isCorrect ? 'bg-emerald-50/40 border-emerald-200' : 'bg-rose-50/40 border-rose-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-800">
                          #{idx + 1} ({q.part})
                        </span>
                        <span className={`font-bold text-[10px] ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                          {isCorrect ? 'Benar (+10 Poin)' : 'Salah (0 Poin)'}
                        </span>
                      </div>

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

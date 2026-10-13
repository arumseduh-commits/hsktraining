import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  X, 
  Volume2, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  RotateCcw, 
  ArrowRight, 
  Award, 
  Clock, 
  Check, 
  Zap, 
  BookOpen,
  GraduationCap,
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { speakChinese } from '../utils/speech';
import { useLearning } from '../context/LearningContext';
import { getGrammarByLevel } from '../data/grammarPoints';

export default function FinalAssessmentModal({ 
  isOpen, 
  onClose,
  onPassed
}) {
  const navigate = useNavigate();
  const { words, audioSpeed, recordFinalAssessment, currentLevel } = useLearning();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  // Generate 25 comprehensive questions for Final HSK Assessment
  const generateQuestions = React.useCallback(() => {
    if (!words || words.length === 0) return [];

    const generated = [];
    const pool = [...words].sort(() => Math.random() - 0.5);

    // 1. Hanzi Recognition (8 questions)
    for (let i = 0; i < 8; i++) {
      const target = pool[i];
      const distractors = words.filter(w => w.id !== target.id).sort(() => Math.random() - 0.5).slice(0, 3);
      const options = [target, ...distractors].sort(() => Math.random() - 0.5);
      generated.push({
        id: generated.length + 1,
        domain: "Pengenalan Karakter Hanzi",
        type: "hanzi_to_meaning",
        promptHz: target.hanzi,
        targetWord: target,
        options,
        correctId: target.id
      });
    }

    // 2. Meaning & Pinyin to Hanzi (7 questions)
    for (let i = 8; i < 15; i++) {
      const target = pool[i];
      const distractors = words.filter(w => w.id !== target.id).sort(() => Math.random() - 0.5).slice(0, 3);
      const options = [target, ...distractors].sort(() => Math.random() - 0.5);
      generated.push({
        id: generated.length + 1,
        domain: "Arti Kosakata & Pinyin",
        type: "meaning_to_hanzi",
        promptText: `"${target.arti}" (${target.pinyin})`,
        targetWord: target,
        options,
        correctId: target.id
      });
    }

    // 3. Audio Reflex & Listening (5 questions)
    for (let i = 15; i < 20; i++) {
      const target = pool[i];
      const distractors = words.filter(w => w.id !== target.id).sort(() => Math.random() - 0.5).slice(0, 3);
      const options = [target, ...distractors].sort(() => Math.random() - 0.5);
      generated.push({
        id: generated.length + 1,
        domain: "Audio Refleks Listening",
        type: "audio_to_hanzi",
        targetWord: target,
        options,
        correctId: target.id
      });
    }

    // 4. Grammar & Sentence Structure (5 questions from level grammar)
    const grammarDataset = getGrammarByLevel(currentLevel);
    const grammarPool = [...grammarDataset].sort(() => Math.random() - 0.5).slice(0, 5);
    grammarPool.forEach((gp) => {
      // Pick an example sentence from the grammar point
      const example = gp.contoh[0];
      const target = {
        id: `g_${gp.id}`,
        hanzi: example.hz,
        pinyin: example.py,
        arti: example.id
      };
      // Distractor grammar sentences
      const otherGps = grammarDataset.filter(g => g.id !== gp.id).sort(() => Math.random() - 0.5).slice(0, 3);
      const distractors = otherGps.map(og => ({
        id: `g_${og.id}`,
        hanzi: og.contoh[0].hz,
        pinyin: og.contoh[0].py,
        arti: og.contoh[0].id
      }));
      const options = [target, ...distractors].sort(() => Math.random() - 0.5);

      generated.push({
        id: generated.length + 1,
        domain: "Tata Bahasa & Pola Kalimat",
        type: "grammar_comprehension",
        grammarTitle: gp.title,
        grammarFormula: gp.formula,
        targetWord: target,
        options,
        correctId: target.id
      });
    });

    return generated;
  }, [words, currentLevel]);

  useEffect(() => {
    if (!isOpen) return;
    const qList = generateQuestions();
    setQuestions(qList);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
    setUserAnswers([]);
  }, [isOpen, generateQuestions]);

  const restartAssessment = () => {
    const qList = generateQuestions();
    setQuestions(qList);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
    setUserAnswers([]);
  };

  // Audio trigger
  useEffect(() => {
    if (questions.length > 0 && questions[currentIndex]?.type === 'audio_to_hanzi' && !isFinished) {
      speakChinese(questions[currentIndex].targetWord.hanzi, audioSpeed);
    }
  }, [currentIndex, questions, isFinished, audioSpeed]);

  if (!isOpen) return null;

  const currentQ = questions[currentIndex];

  const handleSelect = (option) => {
    if (isAnswered) return;
    setSelectedOption(option.id);
    setIsAnswered(true);

    const isCorrect = option.id === currentQ.correctId;
    if (isCorrect) {
      setScore(s => s + 1);
      speakChinese(currentQ.targetWord.hanzi, audioSpeed);
    }

    setUserAnswers(prev => [
      ...prev,
      {
        question: currentQ,
        selectedId: option.id,
        isCorrect
      }
    ]);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      const finalScore = score + (selectedOption === currentQ.correctId ? 0 : 0);
      const percent = Math.round((finalScore / questions.length) * 100);
      const passed = percent >= 70;

      if (passed) {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      }

      recordFinalAssessment({
        score: finalScore,
        total: questions.length,
        percent,
        passed
      });

      if (passed && onPassed) {
        onPassed();
      }
    }
  };

  const percentScore = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
  const isPassed = percentScore >= 70;

  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div 
        className="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4.5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-400 text-white flex items-center justify-center shadow-md font-bold">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-rose-500/30 text-rose-300 border border-rose-500/40">
                  Ujian Penentu Kelulusan HSK {currentLevel || 1}
                </span>
              </div>
              <h3 className="text-base font-bold text-white mt-0.5">
                Assesmen Final Kelulusan HSK {currentLevel || 1} (Standar 3.0)
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Progress Bar */}
        {!isFinished && questions.length > 0 && (
          <div className="h-1.5 w-full bg-slate-100 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-500 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        )}

        {/* Content Area */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          {!isFinished && currentQ ? (
            <div className="space-y-5 animate-fade-in">
              <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold text-[10px]">
                  {currentQ.domain}
                </span>
                <span>Soal {currentIndex + 1} dari {questions.length} (Passing: 70%)</span>
              </div>

              {/* Question Card */}
              <div className="text-center py-6 px-4 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                {currentQ.type === 'hanzi_to_meaning' && (
                  <>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      PILIH ARTI & PINYIN DARI KARAKTER INI
                    </span>
                    <div className="text-6xl font-black text-slate-900 font-hanzi my-2">
                      {currentQ.promptHz}
                    </div>
                    <button
                      onClick={() => speakChinese(currentQ.promptHz, audioSpeed)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold hover:bg-rose-100 transition-colors cursor-pointer mt-1"
                    >
                      <Volume2 size={13} />
                      <span>Dengar Pengucapan</span>
                    </button>
                  </>
                )}

                {currentQ.type === 'meaning_to_hanzi' && (
                  <>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      PILIH KARAKTER HANZI YANG TEPAT
                    </span>
                    <div className="text-xl font-bold text-slate-900 my-2">
                      {currentQ.promptText}
                    </div>
                    <button
                      onClick={() => speakChinese(currentQ.targetWord.hanzi, audioSpeed)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold hover:bg-rose-100 transition-colors cursor-pointer mt-1"
                    >
                      <Volume2 size={13} />
                      <span>Dengar Audio</span>
                    </button>
                  </>
                )}

                {currentQ.type === 'audio_to_hanzi' && (
                  <>
                    <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider block mb-2">
                      🎧 REFLEKS AUDIO: MANA HANZI YANG ANDA DENGAR?
                    </span>
                    <button
                      onClick={() => speakChinese(currentQ.targetWord.hanzi, audioSpeed)}
                      className="w-16 h-16 rounded-full bg-gradient-to-tr from-rose-500 to-indigo-600 text-white flex items-center justify-center mx-auto shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer my-2"
                    >
                      <Volume2 size={26} />
                    </button>
                    <p className="text-xs text-slate-400 mt-1">Ketuk untuk mendengarkan kembali</p>
                  </>
                )}

                {currentQ.type === 'grammar_comprehension' && (
                  <>
                    <span className="text-[11px] font-bold text-rose-600 uppercase tracking-wider block mb-1">
                      TATA BAHASA: {currentQ.grammarTitle}
                    </span>
                    <p className="text-xs text-slate-500 font-mono mb-2">Pola: {currentQ.grammarFormula}</p>
                    <p className="text-sm font-bold text-slate-800">
                      Manakah contoh kalimat yang menerapkan pola tata bahasa ini dengan benar?
                    </p>
                  </>
                )}
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentQ.options.map((option) => {
                  const isTarget = option.id === currentQ.correctId;
                  const isChosen = selectedOption === option.id;

                  let btnStyle = "bg-white border-slate-200 hover:border-slate-300 text-slate-800";
                  if (isAnswered) {
                    if (isTarget) {
                      btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/20";
                    } else if (isChosen) {
                      btnStyle = "bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-500/20";
                    } else {
                      btnStyle = "bg-slate-50 border-slate-100 text-slate-400 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelect(option)}
                      disabled={isAnswered}
                      className={`p-3.5 rounded-2xl border text-left transition-all font-semibold flex items-center justify-between cursor-pointer ${btnStyle}`}
                    >
                      <div>
                        {currentQ.type === 'hanzi_to_meaning' ? (
                          <>
                            <div className="text-xs font-mono text-rose-600 font-bold">{option.pinyin}</div>
                            <div className="text-xs font-bold text-slate-800 mt-0.5">{option.arti}</div>
                          </>
                        ) : currentQ.type === 'grammar_comprehension' ? (
                          <>
                            <div className="text-sm font-bold font-hanzi text-slate-900">{option.hanzi}</div>
                            <div className="text-[11px] font-mono text-rose-600">{option.pinyin}</div>
                            {isAnswered && (
                              <div className="text-[11px] text-slate-500 italic">{option.arti}</div>
                            )}
                          </>
                        ) : (
                          <>
                            <div className="text-2xl font-black font-hanzi text-slate-900">{option.hanzi}</div>
                            {isAnswered && (
                              <div className="text-[11px] font-mono text-slate-500">{option.pinyin} • {option.arti}</div>
                            )}
                          </>
                        )}
                      </div>

                      {isAnswered && isTarget && (
                        <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                      )}
                      {isAnswered && isChosen && !isTarget && (
                        <XCircle size={18} className="text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Next Question CTA */}
              {isAnswered && (
                <div className="pt-2 animate-fade-in">
                  <button
                    onClick={handleNext}
                    className="w-full py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-98 cursor-pointer"
                  >
                    <span>{currentIndex < questions.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil Assesmen Final'}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              )}
            </div>
          ) : isFinished ? (
            /* Results View */
            <div className="text-center space-y-5 animate-fade-in py-2">
              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto shadow-xl ${
                isPassed 
                  ? 'bg-gradient-to-tr from-emerald-500 to-teal-400 text-white shadow-emerald-500/25' 
                  : 'bg-amber-500 text-white shadow-amber-500/20'
              }`}>
                {isPassed ? <Award size={44} /> : <Zap size={44} />}
              </div>

              <div>
                <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold mb-2 ${
                  isPassed 
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                    : 'bg-amber-50 text-amber-800 border border-amber-200'
                }`}>
                  {isPassed ? `🏆 LULUS ASSESMEN FINAL HSK ${currentLevel || 1}` : '! BELUM MEMENUHI AMBANG KELULUSAN'}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {isPassed 
                    ? `Selamat! Seluruh Kosakata & Tata Bahasa HSK ${currentLevel || 1} Terbukti Dikuasai!` 
                    : 'Skor Anda Belum Mencapai 70%'}
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 max-w-md mx-auto leading-relaxed">
                  {isPassed 
                    ? `Anda telah membuktikan penguasaan komprehensif atas ${words.length} kosakata dan tata bahasa HSK ${currentLevel || 1}. Seluruh Kuis Cepat dan Ujian Resmi Bersertifikat kini telah terbuka penuh untuk Anda ikuti!`
                    : `Anda memperoleh skor ${percentScore}% (${score}/${questions.length} benar). Diperlukan minimal 70% untuk lulus Assesmen Final dan membuka Ujian Sertifikat Resmi.`}
                </p>
              </div>

              {/* Metric Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-around text-center">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Skor Kelulusan</span>
                  <span className={`text-3xl font-black font-mono ${isPassed ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {percentScore}%
                  </span>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Jawaban Benar</span>
                  <span className="text-3xl font-black font-mono text-emerald-600">{score}</span>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Status Akses</span>
                  <span className={`text-xs font-bold block mt-1 ${isPassed ? 'text-emerald-700' : 'text-amber-700'}`}>
                    {isPassed ? 'Terbuka Penuh 🔓' : 'Masih Terkunci 🔒'}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                {isPassed ? (
                  <>
                    <button
                      onClick={() => {
                        onClose();
                        navigate('/official');
                      }}
                      className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 active:scale-98 text-white font-bold text-xs shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <FileCheck size={16} />
                      <span>Ambil Ujian Sertifikat HSK Resmi Sekarang ➔</span>
                    </button>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => {
                          onClose();
                          navigate('/study/quick_quiz');
                        }}
                        className="py-2.5 px-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Zap size={14} className="text-amber-500" />
                        <span>Coba Kuis Cepat</span>
                      </button>

                      <button
                        onClick={onClose}
                        className="py-2.5 px-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Check size={14} />
                        <span>Selesai & Ke Roadmap</span>
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={restartAssessment}
                      className="py-3 px-3 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <RotateCcw size={14} />
                      <span>Ulangi Assesmen Final</span>
                    </button>

                    <button
                      onClick={onClose}
                      className="py-3 px-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Pelajari Lagi di Roadmap</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

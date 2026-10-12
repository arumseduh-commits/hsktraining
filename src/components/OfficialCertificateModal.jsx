import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Printer, CheckCircle2, Award, Download, ShieldCheck } from 'lucide-react';

export default function OfficialCertificateModal({ examResult, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!examResult) return null;

  const handlePrint = () => {
    window.print();
  };

  const isPassed = examResult.passed;

  return createPortal(
    <div 
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="fixed inset-0 z-[100] flex items-start justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md overflow-y-auto animate-fade-in print:p-0 print:bg-white"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl border border-slate-100 relative my-6 sm:my-10 print:shadow-none print:border-none print:p-4 animate-scale-up">
        {/* Close Button (Hidden on Print) */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors print:hidden"
        >
          <X size={20} />
        </button>

        {/* Action Bar (Print / Download) */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Sertifikat Resmi HSK
            </span>
          </div>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-all active:scale-95"
          >
            <Printer size={14} />
            <span>Cetak / Simpan PDF</span>
          </button>
        </div>

        {/* THE OFFICIAL HSK SCORE REPORT DOCUMENT */}
        <div className="relative border-4 border-amber-600/30 rounded-2xl p-6 sm:p-8 bg-[#fffdfa] shadow-inner space-y-6 text-slate-900 overflow-hidden">
          {/* Ornate Corner Accents */}
          <div className="absolute top-2 left-2 text-amber-700/30 text-xs font-mono select-none">❖</div>
          <div className="absolute top-2 right-2 text-amber-700/30 text-xs font-mono select-none">❖</div>
          <div className="absolute bottom-2 left-2 text-amber-700/30 text-xs font-mono select-none">❖</div>
          <div className="absolute bottom-2 right-2 text-amber-700/30 text-xs font-mono select-none">❖</div>

          {/* Certificate Header */}
          <div className="text-center space-y-1">
            <div className="text-xs font-bold text-amber-800 tracking-widest uppercase">
              CHINESE TESTING INTERNATIONAL (汉考国际)
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 font-hanzi">
              汉语水平考试成绩报告
            </h2>
            <h3 className="text-sm sm:text-base font-bold text-slate-700 tracking-wider">
              CHINESE PROFICIENCY TEST SCORE REPORT
            </h3>
            <div className="inline-block px-3 py-0.5 rounded-full bg-red-100 text-red-800 text-xs font-bold tracking-widest mt-1">
              HSK (一级) • LEVEL 1 (STANDAR 3.0)
            </div>
          </div>

          {/* Candidate Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-amber-700/20 text-xs">
            <div>
              <span className="text-slate-400 block text-[10px] font-semibold">姓名 / NAMA:</span>
              <strong className="text-slate-900 font-bold">{examResult.candidateName || 'Pembelajar HSK'}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] font-semibold">准考证号 / TICKET NO:</span>
              <strong className="text-slate-800 font-mono text-[11px]">{examResult.certNumber}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] font-semibold">考试日期 / DATE:</span>
              <strong className="text-slate-800">{examResult.date}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] font-semibold">国籍 / NATIONALITY:</span>
              <strong className="text-slate-800">Indonesia</strong>
            </div>
          </div>

          {/* Official Score Breakdown Table */}
          <div className="space-y-1">
            <table className="w-full text-center border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-amber-100/60 text-slate-800 font-bold border-b border-amber-300">
                  <th className="py-2.5 px-3 text-left">科目 / Subjek</th>
                  <th className="py-2.5 px-3">满分 / Skor Maks</th>
                  <th className="py-2.5 px-3">得分 / Nilai Anda</th>
                  <th className="py-2.5 px-3">评级 / Predikat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-100">
                <tr>
                  <td className="py-2.5 px-3 text-left font-bold text-slate-800">
                    听力 (Listening)
                  </td>
                  <td className="py-2.5 px-3 text-slate-500 font-mono">100</td>
                  <td className="py-2.5 px-3 font-bold font-mono text-base text-slate-900">
                    {examResult.listeningScore}
                  </td>
                  <td className="py-2.5 px-3 text-xs font-semibold text-slate-600">
                    {examResult.listeningScore >= 80 ? '优秀 (Sangat Baik)' : examResult.listeningScore >= 60 ? '良好 (Baik)' : '需提高 (Cukup)'}
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 text-left font-bold text-slate-800">
                    阅读 (Reading)
                  </td>
                  <td className="py-2.5 px-3 text-slate-500 font-mono">100</td>
                  <td className="py-2.5 px-3 font-bold font-mono text-base text-slate-900">
                    {examResult.readingScore}
                  </td>
                  <td className="py-2.5 px-3 text-xs font-semibold text-slate-600">
                    {examResult.readingScore >= 80 ? '优秀 (Sangat Baik)' : examResult.readingScore >= 60 ? '良好 (Baik)' : '需提高 (Cukup)'}
                  </td>
                </tr>
                <tr className="bg-amber-50/50 font-bold">
                  <td className="py-3 px-3 text-left text-slate-900">
                    总分 (TOTAL SCORE)
                  </td>
                  <td className="py-3 px-3 text-slate-600 font-mono">200</td>
                  <td className="py-3 px-3 font-mono text-xl font-black text-rose-600">
                    {examResult.totalScore}
                  </td>
                  <td className="py-3 px-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                      isPassed ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                    }`}>
                      {isPassed ? '合格 (LULUS)' : '未合格 (BELUM LULUS)'}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="text-[10px] text-slate-400 text-right pt-1">
              *Syarat nilai kelulusan resmi HSK 1: Minimal 120 dari 200 poin (60%).
            </p>
          </div>

          {/* Official Competency & Red Seal Stamp */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left text-[11px] text-slate-600 max-w-sm space-y-1">
              <p className="font-bold text-slate-800">
                能力说明 / Deskripsi Kompetensi:
              </p>
              <p className="leading-relaxed text-slate-500 italic">
                {isPassed 
                  ? "Peserta telah memenuhi standar HSK 1 versi 3.0. Mampu memahami serta menggunakan kata dan frasa Mandarin sederhana sehari-hari untuk memenuhi kebutuhan komunikasi praktis dasar."
                  : "Peserta belum memenuhi nilai ambang batas 120 poin. Disarankan mengulang latihan pada kosakata yang belum dikuasai."}
              </p>
            </div>

            {/* Red Circular Stamp (Official Seal) */}
            <div className="relative shrink-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border-2 border-dashed border-red-600/80 p-1 flex items-center justify-center rotate-[-12deg] select-none shadow-xs">
                <div className="w-full h-full rounded-full border border-red-600 flex flex-col items-center justify-center text-red-600 text-center p-1 font-serif leading-tight">
                  <span className="text-[7px] font-bold tracking-tighter">CHINESE TESTING INTL</span>
                  <span className="text-[9px] font-black my-0.5 font-hanzi">成绩合格</span>
                  <span className="text-[7px] font-bold">汉考国际委员会</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center text-xs text-slate-400 mt-5 print:hidden">
          Hasil ujian ini tersimpan di riwayat perangkat Anda dan dapat dicetak kapan saja.
        </div>
      </div>
    </div>,
    document.body
  );
}

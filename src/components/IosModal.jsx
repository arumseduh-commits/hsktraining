import React from 'react';
import { createPortal } from 'react-dom';
import { Share, PlusSquare, Smartphone, X, CheckCircle2 } from 'lucide-react';

export default function IosModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return createPortal(
    <div 
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in"
    >
      <div 
        className="bg-white rounded-[32px] max-w-sm w-full p-6 shadow-2xl border border-slate-100 relative animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="text-center space-y-2 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mx-auto shadow-md">
            <Smartphone size={24} className="text-rose-400" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Pasang di iPhone / iPad</h3>
          <p className="text-xs text-slate-400 max-w-xs mx-auto">
            Jalankan dalam mode layar penuh (fullscreen) tanpa browser bar.
          </p>
        </div>

        <div className="space-y-2.5 my-4">
          <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 font-bold flex items-center justify-center text-xs shrink-0">
              1
            </div>
            <div className="text-xs">
              <p className="font-semibold text-slate-800">Buka di Safari iPhone</p>
              <p className="text-slate-400 mt-0.5">Buka link web ini melalui aplikasi <strong>Safari</strong>.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 font-bold flex items-center justify-center text-xs shrink-0">
              2
            </div>
            <div className="text-xs">
              <p className="font-semibold text-slate-800 flex items-center gap-1">
                Tekan tombol Share <Share size={13} className="text-blue-500" />
              </p>
              <p className="text-slate-400 mt-0.5">Ikon kotak berpanah atas di bilah bawah.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 font-bold flex items-center justify-center text-xs shrink-0">
              3
            </div>
            <div className="text-xs">
              <p className="font-semibold text-slate-800 flex items-center gap-1">
                "Add to Home Screen" <PlusSquare size={13} className="text-emerald-500" />
              </p>
              <p className="text-slate-400 mt-0.5">Pilih <strong>"Tambahkan ke Layar Utama"</strong> lalu tekan <strong>Tambah</strong>.</p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-4 w-full py-3 bg-slate-900 text-white rounded-2xl font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
        >
          Siap Belajar
        </button>
      </div>
    </div>,
    document.body
  );
}

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AlertTriangle, AlertCircle, Info, X } from 'lucide-react';

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title = "Konfirmasi Tindakan",
  message = "Apakah Anda yakin ingin melanjutkan tindakan ini?",
  confirmText = "Ya, Lanjutkan",
  cancelText = "Batal",
  type = "danger" // 'danger', 'warning', 'info'
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const typeConfig = {
    danger: {
      icon: AlertTriangle,
      iconBg: "bg-rose-50 text-rose-600 border border-rose-100",
      confirmBtn: "bg-rose-600 hover:bg-rose-700 text-white shadow-rose-600/20",
    },
    warning: {
      icon: AlertCircle,
      iconBg: "bg-amber-50 text-amber-600 border border-amber-100",
      confirmBtn: "bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/20",
    },
    info: {
      icon: Info,
      iconBg: "bg-blue-50 text-blue-600 border border-blue-100",
      confirmBtn: "bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20",
    }
  };

  const config = typeConfig[type] || typeConfig.danger;
  const Icon = config.icon;

  return createPortal(
    <div 
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in"
    >
      <div 
        className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-100 space-y-4 my-8 transform transition-all animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Icon + Close */}
        <div className="flex items-start justify-between">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${config.iconBg} shadow-xs`}>
            <Icon size={24} />
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-1.5">
          <h3 className="text-base font-bold text-slate-900">
            {title}
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            {message}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2.5 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200/80 transition-colors cursor-pointer"
          >
            {cancelText}
          </button>
          <button
            type="button"
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer ${config.confirmBtn}`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

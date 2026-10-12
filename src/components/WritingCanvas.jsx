import React, { useRef, useState, useEffect } from 'react';
import { 
  Eraser, 
  RotateCcw, 
  Volume2, 
  Eye, 
  EyeOff, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Palette
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { speakChinese } from '../utils/speech';

export default function WritingCanvas({ initialDay = 1 }) {
  const { words, audioSpeed, updateWordStatus, daysConfig, recordWordLearnedToday } = useLearning();
  const sprintDaysList = daysConfig ? daysConfig.map(d => d.day) : [1, 2, 3, 4];

  const [selectedDay, setSelectedDay] = useState(initialDay);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showGhost, setShowGhost] = useState(true);
  const [brushWidth, setBrushWidth] = useState(7);

  useEffect(() => {
    if (initialDay !== undefined && initialDay !== null) {
      setSelectedDay(initialDay);
      setCurrentIndex(0);
    }
  }, [initialDay]);

  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const historyRef = useRef([]);

  const dayWords = words.filter(w => selectedDay === 'all' || w.day === Number(selectedDay));
  const currentWord = dayWords[currentIndex] || dayWords[0];

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height)
    };
  };

  const startDrawing = (e) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { x, y } = getCoordinates(e);

    historyRef.current.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    if (historyRef.current.length > 10) historyRef.current.shift();

    if (recordWordLearnedToday && currentWord?.id) {
      recordWordLearnedToday(currentWord.id);
    }

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = brushWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { x, y } = getCoordinates(e);

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = (e) => {
    if (!isDrawing) return;
    e?.preventDefault();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    historyRef.current = [];
  };

  const undoCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas || historyRef.current.length === 0) return;
    const ctx = canvas.getContext('2d');
    const lastState = historyRef.current.pop();
    ctx.putImageData(lastState, 0, 0);
  };

  useEffect(() => {
    clearCanvas();
  }, [currentIndex, selectedDay]);

  const handleNext = () => {
    if (currentIndex < dayWords.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(dayWords.length - 1);
    }
  };

  return (
    <div className="max-w-md mx-auto space-y-4 animate-fade-in pb-16">
      {/* Day Filter Pills */}
      <div className="flex items-center justify-between gap-2 p-1.5 bg-slate-100/70 rounded-2xl border border-slate-200/50">
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar scroll-smooth max-w-[240px] sm:max-w-xs py-0.5">
          {['all', ...sprintDaysList].map(d => (
            <button
              key={d}
              onClick={() => { setSelectedDay(d); setCurrentIndex(0); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedDay === d
                  ? 'bg-rose-500 text-white font-bold shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {d === 'all' ? 'Semua' : `Hari ${d}`}
            </button>
          ))}
        </div>

        <span className="text-[11px] font-mono text-slate-400 font-semibold px-2">
          {currentIndex + 1}/{dayWords.length}
        </span>
      </div>

      {/* Target Word Info Card */}
      {currentWord && (
        <div className="card-subtle rounded-3xl p-4 flex items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-rose-500 font-mono">
                {currentWord.pinyin}
              </span>
              <button
                onClick={() => speakChinese(currentWord.hanzi, audioSpeed)}
                className="p-1 rounded-full text-slate-400 hover:text-rose-500 transition-colors"
              >
                <Volume2 size={16} />
              </button>
            </div>
            <p className="text-xs font-bold text-slate-800 mt-0.5">{currentWord.arti}</p>
          </div>

          <button
            onClick={() => updateWordStatus(currentWord.id, 'mastered')}
            className="flex items-center gap-1 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-xl text-xs font-bold border border-emerald-200 transition-all active:scale-95"
          >
            <Check size={13} />
            <span>Kuasai</span>
          </button>
        </div>
      )}

      {/* Tian Zi Ge Canvas Drawing Box */}
      <div className="relative aspect-square max-w-[320px] mx-auto rounded-3xl overflow-hidden tian-zi-ge touch-none">
        {/* Ghost Template Character (for tracing) */}
        {showGhost && currentWord && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
            <span className="text-[150px] font-black text-rose-500/12 font-hanzi leading-none">
              {currentWord.hanzi}
            </span>
          </div>
        )}

        <canvas
          ref={canvasRef}
          width={320}
          height={320}
          className="absolute inset-0 w-full h-full z-10 cursor-crosshair touch-none"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
      </div>

      {/* Floating Toolbar Pill Dock */}
      <div className="flex items-center justify-between gap-2 max-w-[320px] mx-auto p-1.5 bg-white/90 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setShowGhost(g => !g)}
            className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all ${
              showGhost ? 'bg-rose-50 text-rose-600 border border-rose-200/80' : 'text-slate-400 hover:text-slate-700'
            }`}
          >
            {showGhost ? <Eye size={13} /> : <EyeOff size={13} />}
            <span className="text-[11px]">Jiplak</span>
          </button>

          <button
            onClick={undoCanvas}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-800 transition-colors"
            title="Undo"
          >
            <RotateCcw size={15} />
          </button>

          <button
            onClick={clearCanvas}
            className="p-1.5 rounded-xl text-slate-400 hover:text-rose-500 transition-colors"
            title="Hapus Kanvas"
          >
            <Eraser size={15} />
          </button>
        </div>

        {/* Thickness */}
        <div className="flex items-center gap-1 px-1">
          {[4, 7, 10].map(w => (
            <button
              key={w}
              onClick={() => setBrushWidth(w)}
              className={`w-5 h-5 rounded-full flex items-center justify-center ${
                brushWidth === w ? 'bg-slate-900 text-white' : 'hover:bg-slate-100'
              }`}
            >
              <div 
                className="bg-current rounded-full" 
                style={{ width: `${w}px`, height: `${w}px` }} 
              />
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between max-w-[320px] mx-auto pt-1">
        <button
          onClick={handlePrev}
          className="text-xs font-semibold text-slate-400 hover:text-slate-800 flex items-center gap-1"
        >
          <ChevronLeft size={15} />
          <span>Sebelumnya</span>
        </button>

        <button
          onClick={handleNext}
          className="text-xs font-semibold text-slate-900 hover:text-rose-600 flex items-center gap-1"
        >
          <span>Berikutnya</span>
          <ChevronRight size={15} />
        </button>
      </div>
    </div>
  );
}

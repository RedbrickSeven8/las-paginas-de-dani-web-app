import React, { useState, useEffect } from 'react';
import { Play, Pause, Grid, Film } from 'lucide-react';

const TOTAL_FRAMES = 20;
const FRAME_DURATION = 90; // ms per frame (~11 fps)

// Preload image paths
const FRAME_PATHS = Array.from({ length: TOTAL_FRAMES }, (_, i) => 
  `/animation/frame_${i.toString().padStart(2, '0')}.webp`
);

export const HeroAnimation: React.FC = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [viewMode, setViewMode] = useState<'animated' | 'grid'>('animated');

  // Preload images into browser memory on mount
  useEffect(() => {
    FRAME_PATHS.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Frame tick animation loop
  useEffect(() => {
    if (!isPlaying || viewMode !== 'animated') return;

    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % TOTAL_FRAMES);
    }, FRAME_DURATION);

    return () => clearInterval(interval);
  }, [isPlaying, viewMode]);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative text-left">
      {/* Top Header Bar */}
      <div className="bg-slate-950/80 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="font-mono text-[11px] font-semibold tracking-wider text-slate-300 uppercase">
            {viewMode === 'animated' ? `FRAME ${currentFrame + 1} / ${TOTAL_FRAMES}` : 'CUADRÍCULA SECUENCIAL'}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {viewMode === 'animated' && (
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          )}

          <button
            type="button"
            onClick={() => setViewMode(viewMode === 'animated' ? 'grid' : 'animated')}
            className={`px-2 py-1 rounded text-[11px] font-medium flex items-center gap-1 transition-colors ${
              viewMode === 'grid' ? 'bg-[#FF5E14] text-white' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
          >
            {viewMode === 'animated' ? (
              <>
                <Grid className="w-3 h-3" />
                <span>Ver cuadrícula</span>
              </>
            ) : (
              <>
                <Film className="w-3 h-3" />
                <span>Ver animación</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Display Screen */}
      <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
        {viewMode === 'animated' ? (
          <div className="relative w-full h-full">
            {/* Render all frames stacked with instant opacity switch for zero flickering */}
            {FRAME_PATHS.map((src, index) => {
              const isActive = index === currentFrame;
              return (
                <img
                  key={src}
                  src={src}
                  alt={`Fotograma secuencial ${index + 1}`}
                  loading="eager"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-75 ${
                    isActive ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                />
              );
            })}
          </div>
        ) : (
          /* Grid View Mode */
          <div className="w-full h-full overflow-y-auto max-h-[380px] p-2 bg-slate-950">
            <div className="grid grid-cols-3 gap-1.5">
              {FRAME_PATHS.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => {
                    setCurrentFrame(index);
                    setViewMode('animated');
                  }}
                  className={`relative rounded overflow-hidden border transition-all cursor-pointer ${
                    currentFrame === index ? 'border-[#FF5E14] ring-1 ring-[#FF5E14]' : 'border-slate-800 hover:border-slate-600'
                  }`}
                >
                  <img src={src} alt={`Frame ${index + 1}`} className="w-full h-auto object-cover" />
                  <span className="absolute bottom-1 right-1 bg-black/80 text-[9px] font-mono text-white px-1 rounded">
                    #{index + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Interactive Frame Timeline Scrubber */}
      <div className="p-3 bg-slate-950 border-t border-slate-800">
        <div className="flex items-center gap-2 mb-2">
          <input
            type="range"
            min={0}
            max={TOTAL_FRAMES - 1}
            value={currentFrame}
            onChange={(e) => {
              setIsPlaying(false);
              setCurrentFrame(Number(e.target.value));
            }}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#FF5E14]"
            aria-label="Línea de tiempo de fotogramas"
          />
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span>Secuencia fluida (izq. a der., arriba a abajo)</span>
          <span className="font-mono text-slate-300">
            {((currentFrame / (TOTAL_FRAMES - 1)) * 100).toFixed(0)}%
          </span>
        </div>
      </div>
    </div>
  );
};

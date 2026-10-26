import React, { useState } from 'react';
import { QrCode, Wifi } from 'lucide-react';

export const NfcDemo: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'menu' | 'review'>('menu');
  const [tapped, setTapped] = useState<boolean>(false);

  const triggerTap = (mode: 'menu' | 'review') => {
    setActiveMode(mode);
    setTapped(true);
    setTimeout(() => {
      setTapped(false);
    }, 1200);
  };

  return (
    <section id="nfc-demo" className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
              Tarjetas NFC con QR
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed">
              Cada plan incluye tarjetas físicas. Al acercar el teléfono o escanear el código QR, abre tu página web o la ficha de reseñas de Google.
            </p>

            <ul className="space-y-2 text-xs text-slate-700">
              <li>&bull; Funciona en Android y iPhone sin instalar aplicaciones.</li>
              <li>&bull; Chip NFC al contacto y código QR impreso.</li>
              <li>&bull; Uso para menús de restaurantes o reseñas de clientes.</li>
            </ul>

            <div className="pt-2 flex gap-2">
              <button
                type="button"
                onClick={() => triggerTap('menu')}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold cursor-pointer ${
                  activeMode === 'menu' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                Probar Menú
              </button>

              <button
                type="button"
                onClick={() => triggerTap('review')}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold cursor-pointer ${
                  activeMode === 'review' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                Probar Reseñas
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-xs">
              <div
                onClick={() => triggerTap(activeMode)}
                className="bg-slate-900 text-white p-5 rounded-xl border border-slate-800 cursor-pointer relative"
              >
                <div className="flex justify-between items-center mb-8">
                  <Wifi className="w-5 h-5 text-[#FF5E14] rotate-90" />
                  <QrCode className="w-6 h-6 text-white" />
                </div>

                <div className="text-sm font-bold mb-1">Las páginas de Dani</div>
                <div className="text-xs text-slate-400 mb-6">
                  {activeMode === 'menu' ? 'Toca para abrir Menú' : 'Toca para abrir Reseñas'}
                </div>

                <div className="text-[10px] text-slate-500 border-t border-slate-800 pt-2 flex justify-between">
                  <span>NFC CHIP</span>
                  <span className="text-[#FF5E14]">Tocar tarjeta</span>
                </div>

                {tapped && (
                  <div className="absolute inset-0 bg-[#FF5E14]/30 rounded-xl flex items-center justify-center">
                    <span className="bg-white text-slate-900 font-bold text-xs px-3 py-1.5 rounded-md">
                      Lectura NFC
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-3 p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 flex justify-between items-center">
                <span>Resultado en móvil:</span>
                <strong className="text-slate-900">
                  {activeMode === 'menu' ? 'Menú web abierto' : 'Reseña Google abierta'}
                </strong>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

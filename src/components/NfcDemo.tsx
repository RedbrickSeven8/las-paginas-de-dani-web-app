import React, { useState } from 'react';
import { Smartphone, QrCode, Wifi, Star, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

export const NfcDemo: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'menu' | 'review'>('menu');
  const [tapped, setTapped] = useState<boolean>(false);

  const triggerTap = (mode: 'menu' | 'review') => {
    setActiveMode(mode);
    setTapped(true);
    setTimeout(() => {
      setTapped(false);
    }, 1500);
  };

  return (
    <section id="nfc-demo" className="py-20 bg-white border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Explanation */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#FF5E14] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Innovación Tangible para tu Negocio</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 leading-tight">
              Tarjetas Inteligentes NFC + Código QR Incluidas
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              No solo te entregamos un enlace en la nube. Te entregamos <strong>tarjetas físicas de contacto instantáneo</strong>. Tus clientes solo tienen que acercar su celular o escanear el código QR para acceder al instante a tu catálogo o calificar tu negocio en Google.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>Cero descargas de apps:</strong> Funciona nativamente con iPhone y Android mediante chip NFC integrado.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>Doble vía de acceso:</strong> Chip NFC al contacto + código QR grabado para compatibilidad con el 100% de dispositivos.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>Mayor captación y reseñas:</strong> Multiplica las reseñas de 5 estrellas en Google Maps de clientes satisfechos al momento.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => triggerTap('menu')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeMode === 'menu'
                    ? 'bg-[#0F172A] text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Smartphone className="w-4 h-4 text-[#FF5E14]" />
                <span>Simular Apertura de Catálogo</span>
              </button>

              <button
                type="button"
                onClick={() => triggerTap('review')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeMode === 'review'
                    ? 'bg-[#0F172A] text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>Simular Reseña de Google</span>
              </button>
            </div>
          </div>

          {/* Right Interactive Simulator */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* NFC Physical Card Render */}
              <div
                onClick={() => triggerTap(activeMode)}
                className="bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white p-6 rounded-2xl shadow-2xl border border-slate-700 relative cursor-pointer transform hover:-translate-y-1 transition-all group"
              >
                <div className="flex justify-between items-start mb-10">
                  <div className="flex items-center gap-2">
                    <Wifi className="w-6 h-6 text-[#FF5E14] rotate-90" />
                    <span className="text-xs font-mono tracking-widest text-slate-400">CONTACTLESS NFC</span>
                  </div>
                  <div className="p-2 bg-white/10 rounded-lg">
                    <QrCode className="w-7 h-7 text-white" />
                  </div>
                </div>

                <div className="space-y-1 mb-8">
                  <div className="text-lg font-bold font-display text-white">
                    Las páginas de Dani
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {activeMode === 'menu' ? 'Toque aquí para abrir el Catálogo Web' : 'Toque aquí para calificar en Google'}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-[10px] text-slate-400">
                  <span>CHIP ID: NFC-DANI-2026</span>
                  <span className="text-[#FF5E14] font-bold group-hover:underline flex items-center gap-1">
                    <span>¡Haz clic para probar!</span>
                  </span>
                </div>

                {tapped && (
                  <div className="absolute inset-0 bg-[#FF5E14]/20 backdrop-blur-xs rounded-2xl flex items-center justify-center animate-in fade-in">
                    <span className="bg-white text-slate-900 font-extrabold text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                      <Wifi className="w-4 h-4 text-[#FF5E14] animate-ping" />
                      <span>¡Señal NFC Detectada!</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Simulated Mobile Notification Preview */}
              <div className="mt-5 bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm text-left">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800 mb-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span>Notificación en el teléfono del cliente:</span>
                </div>
                
                {activeMode === 'menu' ? (
                  <div className="text-xs text-slate-600 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">Abriendo Menú &bull; Impacto Burger</p>
                      <p className="text-[11px] text-slate-500">impactoburger.surge.sh</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </div>
                ) : (
                  <div className="text-xs text-slate-600 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">Calificar en Google Maps (★★★★★)</p>
                      <p className="text-[11px] text-slate-500">Dejar reseña pública en 1 clic</p>
                    </div>
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

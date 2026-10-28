import React from 'react';

export const NfcDemo: React.FC = () => {
  return (
    <section id="nfc-demo" className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase">
              <span>Módulo Físico para tu Comercio</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
              Tarjetas Inteligentes NFC con Código QR
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed">
              Cada plan incluye tarjetas físicas inteligentes. Ideal para comercios y empresarios que no tenían página web: al acercar el teléfono o escanear el código QR impreso, tus clientes abren al instante tu página web, catálogo o ficha de reseñas en Google.
            </p>

            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E14]"></span>
                <span>Funciona en Android e iPhone de forma nativa sin instalar aplicaciones.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E14]"></span>
                <span>Chip NFC de alto alcance al contacto + Código QR de respaldo impreso.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E14]"></span>
                <span>Perfecto para mostradores de locales, cartas digitales o intercambio de contacto.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="/nfc-card.jpg"
                alt="Tarjeta física inteligente NFC con código QR de Las páginas de Dani"
                loading="lazy"
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

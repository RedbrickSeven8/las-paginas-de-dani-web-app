import React from 'react';
import type { PageRoute } from '../types';
import { CheckCircle2, MessageCircle, ArrowLeft, Zap } from 'lucide-react';

interface ThankYouPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({ onRouteChange }) => {
  return (
    <div className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      
      <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/10">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#FF5E14] text-xs font-bold uppercase tracking-wider mb-4">
        <Zap className="w-3.5 h-3.5" />
        <span>Solicitud Recibida con Éxito</span>
      </div>

      <h1 className="text-3xl sm:text-5xl font-black font-display text-slate-900 tracking-tight mb-4">
        ¡Gracias por contactar a Las páginas de Dani!
      </h1>

      <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
        Tu solicitud ha sido registrada y tu conversación de WhatsApp ha sido preparada. Dani o uno de nuestros asesores técnicos te atenderá en breve para poner tu negocio en internet en menos de 24 horas.
      </p>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 text-left shadow-xs mb-8 space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
          ¿Qué ocurre a continuación?
        </h2>

        <div className="space-y-3 text-xs sm:text-sm text-slate-600">
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              1
            </span>
            <p>
              Revisamos la información de tu marca, logo y requerimientos en el chat de WhatsApp.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              2
            </span>
            <p>
              Confirmamos el plan seleccionado e iniciamos la maquetación web de inmediato.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              3
            </span>
            <p>
              En 24 horas recibes el link de tu web publicado en alta velocidad y programamos el despacho de tus tarjetas NFC físicas.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={() => onRouteChange('home')}
          className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-black text-white px-6 py-3.5 rounded-xl font-bold text-xs transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a la Página Principal</span>
        </button>

        <a
          href="https://wa.me/573000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#FF5E14] hover:bg-[#E04E0B] text-white px-6 py-3.5 rounded-xl font-bold text-xs transition-colors cursor-pointer shadow-md shadow-orange-500/20"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Abrir WhatsApp Ahora Mismo</span>
        </a>
      </div>

    </div>
  );
};

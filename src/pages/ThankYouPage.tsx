import React from 'react';
import type { PageRoute } from '../types';
import { CheckCircle2, ArrowLeft, Zap } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

interface ThankYouPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({ onRouteChange }) => {
  return (
    <div className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      
      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-5">
        <CheckCircle2 className="w-8 h-8" />
      </div>

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#FF5E14] text-xs font-bold uppercase tracking-wider mb-3">
        <Zap className="w-3.5 h-3.5" />
        <span>Solicitud Recibida</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight mb-3">
        Gracias por contactar a Las páginas de Dani
      </h1>

      <p className="text-slate-600 text-sm max-w-lg mx-auto mb-8">
        Tu mensaje ha sido generado para WhatsApp. Responderemos para iniciar el desarrollo en 24 horas.
      </p>

      <div className="bg-white rounded-xl border border-slate-200 p-6 text-left mb-8 space-y-3 text-xs text-slate-600">
        <div className="font-bold text-slate-900 uppercase">Siguientes pasos:</div>
        <div>1. Confirmar el plan y los datos de tu empresa por WhatsApp.</div>
        <div>2. Envío de logo, textos y fotos del negocio.</div>
        <div>3. Montaje y entrega en 24 horas con tarjeta NFC física.</div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          onClick={() => onRouteChange('home')}
          className="inline-flex items-center gap-2 bg-slate-900 hover:bg-black text-white px-5 py-3 rounded-lg font-bold text-xs cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al inicio</span>
        </button>

        <a
          href="https://wa.me/573000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-lg font-bold text-xs cursor-pointer shadow-md"
        >
          <WhatsAppIcon className="w-4 h-4 fill-white" />
          <span>Abrir chat de WhatsApp</span>
        </a>
      </div>

    </div>
  );
};

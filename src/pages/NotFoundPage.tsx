import React from 'react';
import type { PageRoute } from '../types';
import { AlertCircle, Home } from 'lucide-react';

interface NotFoundPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onRouteChange }) => {
  return (
    <div className="py-24 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      
      <div className="w-20 h-20 bg-orange-100 text-[#FF5E14] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/10">
        <AlertCircle className="w-10 h-10" />
      </div>

      <div className="inline-block px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-mono font-bold uppercase mb-4">
        Error 404 &bull; Enlace no encontrado
      </div>

      <h1 className="text-3xl sm:text-5xl font-black font-display text-slate-900 tracking-tight mb-4">
        ¡Ups! Esta página no existe
      </h1>

      <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-md mx-auto">
        La dirección a la que intentas ingresar ha cambiado o no está disponible. No te preocupes, puedes volver a la página principal o contactarnos de inmediato.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={() => onRouteChange('home')}
          className="inline-flex items-center gap-2 bg-[#FF5E14] hover:bg-[#E04E0B] text-white px-6 py-3.5 rounded-xl font-bold text-xs transition-colors cursor-pointer shadow-md shadow-orange-500/20"
        >
          <Home className="w-4 h-4" />
          <span>Volver al Inicio</span>
        </button>

        <button
          onClick={() => {
            onRouteChange('home');
            setTimeout(() => {
              document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-3.5 rounded-xl font-bold text-xs transition-colors cursor-pointer"
        >
          <span>Ver Planes de Servicio</span>
        </button>
      </div>

    </div>
  );
};

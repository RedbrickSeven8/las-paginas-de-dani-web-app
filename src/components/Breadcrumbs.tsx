import React from 'react';
import type { PageRoute } from '../types';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  currentRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
  customLabel?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentRoute, onRouteChange, customLabel }) => {
  if (currentRoute === 'home') return null;

  const routeNames: Record<PageRoute, string> = {
    home: 'Inicio',
    privacy: 'Política de Privacidad',
    terms: 'Términos y Condiciones',
    cookies: 'Política de Cookies',
    'thank-you': 'Solicitud Confirmada',
    '404': 'Página No Encontrada',
  };

  const label = customLabel || routeNames[currentRoute];

  return (
    <nav aria-label="Miga de pan" className="bg-slate-100/70 border-b border-slate-200 py-2.5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500 font-medium">
        <button
          onClick={() => onRouteChange('home')}
          className="flex items-center gap-1 hover:text-[#FF5E14] transition-colors cursor-pointer"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Inicio</span>
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-semibold truncate">{label}</span>
      </div>
    </nav>
  );
};

import React, { useState } from 'react';
import type { PageRoute } from '../types';
import { Zap, Menu, X, MessageCircle } from 'lucide-react';

interface NavbarProps {
  currentRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
  onOpenLeadModal: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onRouteChange, onOpenLeadModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    if (currentRoute !== 'home') {
      onRouteChange('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              onRouteChange('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
          >
            <div className="h-11 w-11 rounded-xl bg-[#0F172A] flex items-center justify-center p-2 group-hover:bg-[#FF5E14] transition-colors duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight font-display text-slate-900 block leading-tight">
                Las páginas de <span className="text-[#FF5E14]">Dani</span>
              </span>
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                Webs en 24h &bull; Colombia
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <button
              onClick={() => handleNavClick('servicios')}
              className="hover:text-[#FF5E14] transition-colors py-1 cursor-pointer"
            >
              Planes y Precios
            </button>
            <button
              onClick={() => handleNavClick('calculadora')}
              className="hover:text-[#FF5E14] transition-colors py-1 cursor-pointer flex items-center gap-1.5"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-[#10B981]"></span>
              Cotizador en Vivo
            </button>
            <button
              onClick={() => handleNavClick('nfc-demo')}
              className="hover:text-[#FF5E14] transition-colors py-1 cursor-pointer"
            >
              Tarjetas NFC
            </button>
            <button
              onClick={() => handleNavClick('testimonios')}
              className="hover:text-[#FF5E14] transition-colors py-1 cursor-pointer"
            >
              Portafolio Real
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="hover:text-[#FF5E14] transition-colors py-1 cursor-pointer"
            >
              Preguntas
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => onOpenLeadModal('Contacto Directo')}
              className="inline-flex items-center gap-2 bg-[#FF5E14] hover:bg-[#E04E0B] text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-md shadow-orange-500/20 active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pedir por WhatsApp</span>
            </button>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg border border-slate-200"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => handleNavClick('servicios')}
            className="block w-full text-left py-2 font-medium text-slate-700 hover:text-[#FF5E14]"
          >
            Planes y Precios
          </button>
          <button
            onClick={() => handleNavClick('calculadora')}
            className="block w-full text-left py-2 font-medium text-slate-700 hover:text-[#FF5E14]"
          >
            Cotizador Interactivo
          </button>
          <button
            onClick={() => handleNavClick('nfc-demo')}
            className="block w-full text-left py-2 font-medium text-slate-700 hover:text-[#FF5E14]"
          >
            Tarjetas NFC
          </button>
          <button
            onClick={() => handleNavClick('testimonios')}
            className="block w-full text-left py-2 font-medium text-slate-700 hover:text-[#FF5E14]"
          >
            Portafolio Real
          </button>
          <button
            onClick={() => handleNavClick('faq')}
            className="block w-full text-left py-2 font-medium text-slate-700 hover:text-[#FF5E14]"
          >
            Preguntas Frecuentes
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLeadModal('Contacto Directo Móvil');
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#FF5E14] text-white py-3 rounded-lg font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pedir por WhatsApp (24h)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

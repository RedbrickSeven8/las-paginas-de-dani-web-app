import React, { useState } from 'react';
import type { PageRoute } from '../types';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
  onOpenLeadModal: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onRouteChange }) => {
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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              onRouteChange('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center group py-2"
          >
            <img
              src="/logo.png"
              alt="Logo Las páginas de Dani"
              className="h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-slate-600">
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
              Calculadora
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
              Páginas entregadas
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="hover:text-[#FF5E14] transition-colors py-1 cursor-pointer"
            >
              Preguntas
            </button>
          </nav>

          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg border border-slate-200"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 text-left">
          <button
            onClick={() => handleNavClick('servicios')}
            className="block w-full text-left py-2 text-xs font-semibold text-slate-700 hover:text-[#FF5E14]"
          >
            Planes y Precios
          </button>
          <button
            onClick={() => handleNavClick('calculadora')}
            className="block w-full text-left py-2 text-xs font-semibold text-slate-700 hover:text-[#FF5E14]"
          >
            Calculadora
          </button>
          <button
            onClick={() => handleNavClick('nfc-demo')}
            className="block w-full text-left py-2 text-xs font-semibold text-slate-700 hover:text-[#FF5E14]"
          >
            Tarjetas NFC
          </button>
          <button
            onClick={() => handleNavClick('testimonios')}
            className="block w-full text-left py-2 text-xs font-semibold text-slate-700 hover:text-[#FF5E14]"
          >
            Páginas entregadas
          </button>
          <button
            onClick={() => handleNavClick('faq')}
            className="block w-full text-left py-2 text-xs font-semibold text-slate-700 hover:text-[#FF5E14]"
          >
            Preguntas
          </button>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import type { PageRoute } from '../types';
import { Zap, MessageCircle } from 'lucide-react';

interface FooterProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenLeadModal: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange, onOpenLeadModal }) => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-[#FF5E14] flex items-center justify-center text-white">
                <Zap className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold font-display text-white">
                Las páginas de Dani
              </span>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed">
              Páginas web en 24 horas y tarjetas NFC. Modelo por suscripción mensual.
            </p>

            <div className="text-xs text-slate-500">
              Responsable: "las paginas de dani" &bull; Colombia
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold uppercase text-slate-400">Navegación</div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>
                <a
                  href="#servicios"
                  onClick={(e) => {
                    e.preventDefault();
                    onRouteChange('home');
                    setTimeout(() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' }), 50);
                  }}
                  className="hover:text-[#FF5E14]"
                >
                  Planes y Precios
                </a>
              </li>
              <li>
                <a
                  href="#calculadora"
                  onClick={(e) => {
                    e.preventDefault();
                    onRouteChange('home');
                    setTimeout(() => document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' }), 50);
                  }}
                  className="hover:text-[#FF5E14]"
                >
                  Calculadora
                </a>
              </li>
              <li>
                <a
                  href="#nfc-demo"
                  onClick={(e) => {
                    e.preventDefault();
                    onRouteChange('home');
                    setTimeout(() => document.getElementById('nfc-demo')?.scrollIntoView({ behavior: 'smooth' }), 50);
                  }}
                  className="hover:text-[#FF5E14]"
                >
                  Tarjetas NFC
                </a>
              </li>
              <li>
                <a
                  href="#testimonios"
                  onClick={(e) => {
                    e.preventDefault();
                    onRouteChange('home');
                    setTimeout(() => document.getElementById('testimonios')?.scrollIntoView({ behavior: 'smooth' }), 50);
                  }}
                  className="hover:text-[#FF5E14]"
                >
                  Portafolio
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    onRouteChange('home');
                    setTimeout(() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }), 50);
                  }}
                  className="hover:text-[#FF5E14]"
                >
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold uppercase text-slate-400">Legal</div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => onRouteChange('privacy')}
                  className="hover:text-[#FF5E14] cursor-pointer"
                >
                  Política de Privacidad
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onRouteChange('terms')}
                  className="hover:text-[#FF5E14] cursor-pointer"
                >
                  Términos y Condiciones
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onRouteChange('cookies')}
                  className="hover:text-[#FF5E14] cursor-pointer"
                >
                  Política de Cookies
                </button>
              </li>
            </ul>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenLeadModal('Footer')}
                className="inline-flex items-center gap-1.5 bg-[#FF5E14] hover:bg-[#E04E0B] text-white text-xs font-bold px-3 py-2 rounded-lg cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Pedir por WhatsApp</span>
              </button>
            </div>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-[11px] text-slate-500 flex justify-between items-center">
          <span>© {new Date().getFullYear()} "las paginas de dani"</span>
          <span>Entrega en 24 horas</span>
        </div>

      </div>
    </footer>
  );
};

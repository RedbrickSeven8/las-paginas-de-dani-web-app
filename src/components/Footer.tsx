import React from 'react';
import type { PageRoute } from '../types';
import { Zap, MessageCircle, Shield, Clock } from 'lucide-react';

interface FooterProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenLeadModal: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange, onOpenLeadModal }) => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#FF5E14] flex items-center justify-center p-2 text-white">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-xl font-black font-display tracking-tight text-white">
                Las páginas de Dani
              </span>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Diseño y desarrollo web en 24 horas con tarjeta NFC inteligente física incluida. Modelo de suscripción todo incluido pensado para pequeñas y medianas empresas en Colombia.
            </p>

            <div className="text-xs text-slate-500 space-y-1 pt-2">
              <p><strong>Responsable de la web:</strong> "las paginas de dani"</p>
              <p>Bogotá, Medellín y cobertura en toda Colombia.</p>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Navegación Rápida
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="#servicios"
                  onClick={(e) => {
                    e.preventDefault();
                    onRouteChange('home');
                    setTimeout(() => {
                      document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="hover:text-[#FF5E14] transition-colors"
                >
                  Planes y Precios (4 Niveles)
                </a>
              </li>
              <li>
                <a
                  href="#calculadora"
                  onClick={(e) => {
                    e.preventDefault();
                    onRouteChange('home');
                    setTimeout(() => {
                      document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="hover:text-[#FF5E14] transition-colors"
                >
                  Cotizador Interactivo en Vivo
                </a>
              </li>
              <li>
                <a
                  href="#nfc-demo"
                  onClick={(e) => {
                    e.preventDefault();
                    onRouteChange('home');
                    setTimeout(() => {
                      document.getElementById('nfc-demo')?.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="hover:text-[#FF5E14] transition-colors"
                >
                  Tarjetas NFC Inteligentes
                </a>
              </li>
              <li>
                <a
                  href="#testimonios"
                  onClick={(e) => {
                    e.preventDefault();
                    onRouteChange('home');
                    setTimeout(() => {
                      document.getElementById('testimonios')?.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="hover:text-[#FF5E14] transition-colors"
                >
                  Portafolio y Clientes Reales
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    onRouteChange('home');
                    setTimeout(() => {
                      document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="hover:text-[#FF5E14] transition-colors"
                >
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Legalidad y Transparencia
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => onRouteChange('privacy')}
                  className="hover:text-[#FF5E14] transition-colors cursor-pointer text-left"
                >
                  Política de Privacidad
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onRouteChange('terms')}
                  className="hover:text-[#FF5E14] transition-colors cursor-pointer text-left"
                >
                  Términos y Condiciones del Servicio
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onRouteChange('cookies')}
                  className="hover:text-[#FF5E14] transition-colors cursor-pointer text-left"
                >
                  Política de Cookies
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onRouteChange('thank-you')}
                  className="hover:text-[#FF5E14] transition-colors cursor-pointer text-left"
                >
                  Página de Agradecimiento
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onRouteChange('404')}
                  className="hover:text-[#FF5E14] transition-colors cursor-pointer text-left"
                >
                  Página 404 de Demostración
                </button>
              </li>
            </ul>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenLeadModal('Contacto Footer')}
                className="inline-flex items-center gap-2 bg-[#FF5E14] hover:bg-[#E04E0B] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-all shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Hablar con Dani en WhatsApp</span>
              </button>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} "las paginas de dani". Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-emerald-500" />
              <span>Garantía de Entrega en 24h</span>
            </span>
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-[#FF5E14]" />
              <span>Hosting & Mantenimiento Asegurado</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

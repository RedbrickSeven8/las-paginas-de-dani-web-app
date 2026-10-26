import React, { useState } from 'react';
import type { PortfolioItem } from '../types';
import { ExternalLink, CheckCircle, Clock, Smartphone, Layers } from 'lucide-react';

interface PortfolioSectionProps {
  items: PortfolioItem[];
  onOpenLeadModal: (name: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ items, onOpenLeadModal }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="testimonios" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#FF5E14] text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Casos Reales en Vivo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900">
            Páginas Entregadas y Operando en Colombia
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Páginas web funcionales, entregadas en 24 horas y con visitantes reales. Haz clic en cualquiera de ellas para visitarla en vivo y comprobar su rendimiento.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {items.map((item, idx) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === idx
                  ? 'bg-[#0F172A] text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {items[activeTab] && (
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm transition-all text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-[11px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#FF5E14]" />
                    <span>Entrega: {items[activeTab].deliveryTime}</span>
                  </span>
                  <span className="px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Sitio en Vivo y Verificado</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
                  {items[activeTab].name}
                </h3>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Nicho: {items[activeTab].clientType}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {items[activeTab].description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {items[activeTab].tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-white border border-slate-200 rounded-md text-[11px] font-medium text-slate-600">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={items[activeTab].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-black text-white px-5 py-3 rounded-xl font-bold text-xs transition-colors shadow-sm"
                  >
                    <span>Visitar {items[activeTab].name} en Vivo</span>
                    <ExternalLink className="w-4 h-4 text-[#FF5E14]" />
                  </a>

                  <button
                    type="button"
                    onClick={() => onOpenLeadModal(`Inspirado en ${items[activeTab].name}`)}
                    className="inline-flex items-center gap-2 text-[#FF5E14] hover:text-[#E04E0B] font-bold text-xs py-3 px-2 cursor-pointer hover:underline"
                  >
                    <span>Quiero una web similar para mi negocio</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-md bg-white border border-slate-300 rounded-2xl shadow-xl overflow-hidden">
                  
                  <div className="bg-slate-100 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 bg-white px-3 py-0.5 rounded border border-slate-200 truncate max-w-[200px]">
                      {items[activeTab].url}
                    </div>
                    <Smartphone className="w-3.5 h-3.5 text-slate-400" />
                  </div>

                  <div className="p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white min-h-[220px] flex flex-col justify-center items-center text-center relative group">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <ExternalLink className="w-7 h-7 text-[#FF5E14]" />
                    </div>
                    <div className="text-xl font-bold font-display text-white mb-1">
                      {items[activeTab].name}
                    </div>
                    <p className="text-xs text-slate-300 max-w-xs mb-4">
                      Desarrollada, probada y desplegada por Las páginas de Dani.
                    </p>
                    <a
                      href={items[activeTab].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#FF5E14] text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-[#E04E0B] transition-colors"
                    >
                      <span>Abrir página web</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

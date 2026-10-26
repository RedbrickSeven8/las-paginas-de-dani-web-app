import React, { useState } from 'react';
import type { PortfolioItem } from '../types';
import { ExternalLink, RefreshCw } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface PortfolioSectionProps {
  items: PortfolioItem[];
  onOpenLeadModal: (name: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ items, onOpenLeadModal }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [iframeKey, setIframeKey] = useState<number>(0);

  const activeItem = items[activeTab] || items[0];

  return (
    <section id="testimonios" className="py-16 bg-white border-t border-slate-200 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
            Páginas entregadas
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Páginas publicadas y en funcionamiento con vista previa en vivo.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {items.map((item, idx) => (
            <button
              key={item.name}
              type="button"
              onClick={() => {
                setActiveTab(idx);
                setIframeKey((prev) => prev + 1);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold cursor-pointer transition-all ${
                activeTab === idx
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {activeItem && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            
            {/* Info Column */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-[11px] font-bold text-[#FF5E14] uppercase">
                  {activeItem.clientType} &bull; Entrega en {activeItem.deliveryTime}
                </span>
                <h3 className="text-2xl font-bold font-display text-slate-900 mt-1">
                  {activeItem.name}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {activeItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-white border border-slate-200 rounded-md text-[10px] font-semibold text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={activeItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-black text-white px-4 py-2.5 rounded-lg font-bold text-xs transition-colors"
                >
                  <span>Abrir enlace</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#FF5E14]" />
                </a>

                <button
                  type="button"
                  onClick={() => onOpenLeadModal(activeItem.name)}
                  className="inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 rounded-lg font-bold text-xs transition-colors cursor-pointer"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                  <span>Pedir web similar</span>
                </button>
              </div>
            </div>

            {/* Iframe with lazy loading */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-300 rounded-xl overflow-hidden shadow-lg">
                <div className="bg-slate-100 border-b border-slate-200 px-4 py-2 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <span className="ml-2 font-mono text-[11px] text-slate-500 truncate max-w-[220px]">
                      {activeItem.url}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIframeKey((prev) => prev + 1)}
                    className="text-slate-400 hover:text-slate-700 p-1 rounded"
                    title="Recargar vista previa"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="relative w-full h-[450px] bg-slate-100">
                  <iframe
                    key={`${activeItem.url}-${iframeKey}`}
                    src={activeItem.url}
                    title={`Vista previa en vivo de ${activeItem.name}`}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    className="w-full h-full border-0 bg-white"
                  />
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

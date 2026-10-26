import React, { useState } from 'react';
import type { PortfolioItem } from '../types';
import { ExternalLink } from 'lucide-react';

interface PortfolioSectionProps {
  items: PortfolioItem[];
  onOpenLeadModal: (name: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ items, onOpenLeadModal }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="testimonios" className="py-16 bg-white border-t border-slate-200 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
            Páginas entregadas
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Páginas publicadas y en funcionamiento. Haz clic para abrirlas.
          </p>
        </div>

        <div className="flex gap-2 mb-6">
          {items.map((item, idx) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-lg text-xs font-bold cursor-pointer ${
                activeTab === idx ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {items[activeTab] && (
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
            <div>
              <span className="text-[11px] font-bold text-[#FF5E14] uppercase">
                {items[activeTab].clientType} &bull; Entrega {items[activeTab].deliveryTime}
              </span>
              <h3 className="text-xl font-bold font-display text-slate-900 mt-1">
                {items[activeTab].name}
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                {items[activeTab].description}
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={items[activeTab].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-black text-white px-4 py-2 rounded-lg font-bold text-xs"
              >
                <span>Visitar web</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#FF5E14]" />
              </a>

              <button
                type="button"
                onClick={() => onOpenLeadModal(items[activeTab].name)}
                className="text-[#FF5E14] hover:underline font-bold text-xs cursor-pointer"
              >
                Pedir una web similar
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

import React from 'react';
import type { PricingPlan } from '../types';
import { Check, X, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  plans: PricingPlan[];
  onSelectPlan: (plan: PricingPlan) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ plans, onSelectPlan }) => {
  const formatCOP = (num: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section id="servicios" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
            Planes y Precios
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Entrega en 24 horas y mensualidad obligatoria de 1 año.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {plans.map((plan) => {
            const isHighlighted = !!plan.highlight;

            return (
              <div
                key={plan.id}
                className={`rounded-xl flex flex-col justify-between transition-all relative text-left p-5 ${
                  isHighlighted
                    ? 'bg-white border-2 border-[#FF5E14] shadow-md'
                    : 'bg-white border border-slate-200'
                }`}
              >
                {plan.tag && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF5E14] text-white text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full">
                    {plan.tag}
                  </div>
                )}

                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Plan {plan.number}
                  </div>
                  <h3 className="text-base font-bold font-display text-slate-900 mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    {plan.idealFor}
                  </p>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 mb-5">
                    <div className="text-xs text-slate-500">Precio inicial:</div>
                    <div className="text-xl font-black font-display text-slate-900">
                      {formatCOP(plan.setupPrice)}
                    </div>
                    <div className="mt-1 pt-1 border-t border-slate-200 text-xs">
                      <span className="text-slate-500">Mensual: </span>
                      <strong className="text-[#FF5E14]">{formatCOP(plan.monthlyPrice)}/mes</strong>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4 text-xs text-slate-700">
                    <div className="font-bold text-[11px] uppercase tracking-wider text-slate-400">
                      Incluye:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-400 pt-3 border-t border-slate-100 mb-5">
                    <div className="font-bold text-[11px] uppercase tracking-wider text-slate-400">
                      No incluye:
                    </div>
                    {plan.notIncluded.map((notFeat, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <X className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                        <span>{notFeat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full py-2.5 px-3 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    isHighlighted
                      ? 'bg-[#FF5E14] hover:bg-[#E04E0B] text-white'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <span>Elegir Plan {plan.number}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </div>
            );
          })}
        </div>

        <div className="mt-8 p-4 rounded-xl bg-slate-100 border border-slate-200 text-left text-xs text-slate-700">
          <strong>Condición técnica:</strong> No se hacen tiendas online con pagos en la web, bases de datos complejas ni catálogos de más de 50 productos.
        </div>

      </div>
    </section>
  );
};

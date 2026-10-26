import React from 'react';
import type { PricingPlan } from '../types';
import { Check, X, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

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
    <section id="servicios" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#FF5E14] text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Paquetización 100% Clara</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900">
            Nuestros 4 Planes de Servicio
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Reglas transparentes desde el día uno. Escoge el nivel exacto que necesita tu negocio y ten tu web al aire en 24 horas con tarjeta NFC incluida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan) => {
            const isHighlighted = !!plan.highlight;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl flex flex-col justify-between transition-all duration-300 relative text-left ${
                  isHighlighted
                    ? 'bg-white border-2 border-[#FF5E14] shadow-xl shadow-orange-500/10 lg:-translate-y-2'
                    : 'bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
                }`}
              >
                {plan.tag && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF5E14] text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md whitespace-nowrap">
                    {plan.tag}
                  </div>
                )}

                <div className="p-6">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Nivel 0{plan.number}
                  </div>
                  <h3 className="text-lg font-bold font-display text-slate-900 mb-2 leading-snug">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-500 min-h-[40px] mb-5">
                    {plan.idealFor}
                  </p>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 mb-6">
                    <div className="text-xs text-slate-500 font-medium">Inversión inicial:</div>
                    <div className="text-2xl font-black font-display text-slate-900 leading-tight">
                      {formatCOP(plan.setupPrice)}
                    </div>
                    <div className="mt-2 pt-2 border-t border-slate-200 flex justify-between items-center text-xs">
                      <span className="text-slate-500">Mantenimiento:</span>
                      <span className="font-bold text-[#FF5E14]">
                        {formatCOP(plan.monthlyPrice)} <span className="font-normal text-slate-400">/mes</span>
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-6 text-xs text-slate-700">
                    <span className="font-bold text-[11px] uppercase tracking-wider text-slate-400 block mb-2">
                      Lo que incluye:
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 text-xs text-slate-500 pt-3 border-t border-slate-100">
                    <span className="font-bold text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                      No incluye (Filtro claro):
                    </span>
                    {plan.notIncluded.map((notFeat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <X className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-tight text-slate-400">{notFeat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 pt-0 mt-auto">
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isHighlighted
                        ? 'bg-[#FF5E14] hover:bg-[#E04E0B] text-white shadow-md shadow-orange-500/20 active:scale-95'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>Elegir Plan 0{plan.number}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <div className="flex items-center justify-center gap-1 mt-2 text-[10px] text-slate-400">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>Tarjeta NFC física incluida</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        <div className="mt-12 max-w-4xl mx-auto p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-left flex items-start gap-3.5">
          <div className="p-2 bg-amber-200/60 rounded-xl text-amber-800 shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div className="text-xs text-amber-900 space-y-1">
            <h4 className="font-bold text-sm">Política de Especialidad y Rapidez</h4>
            <p>
              Para garantizar la entrega en <strong>24 Horas</strong> y la tarifa más asequible del mercado colombiano, <strong>NO realizamos</strong> páginas complejas de e-commerce transaccional, tiendas en línea con pasarelas bancarias externas, webs conectadas a ERPs empresariales o páginas con más de 50 productos. Nuestro modelo está 100% optimizado para la captación directa y ventas por WhatsApp.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

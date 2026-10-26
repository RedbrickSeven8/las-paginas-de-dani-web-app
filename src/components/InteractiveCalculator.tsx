import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface InteractiveCalculatorProps {
  onSelectCalculatedPlan: (details: {
    planName: string;
    totalSetup: number;
    totalMonthly: number;
    summary: string;
  }) => void;
}

export const InteractiveCalculator: React.FC<InteractiveCalculatorProps> = ({ onSelectCalculatedPlan }) => {
  const [selectedPlanTier, setSelectedPlanTier] = useState<number>(3);
  const [extraNfcCards, setExtraNfcCards] = useState<number>(2);
  const [includeCopywriting, setIncludeCopywriting] = useState<boolean>(false);
  const [includeCustomDomainSearch, setIncludeCustomDomainSearch] = useState<boolean>(false);

  const tierConfigs: Record<number, { name: string; setup: number; monthly: number; description: string }> = {
    1: { name: 'Plan 1: Landing', setup: 550000, monthly: 55000, description: 'One-page informativa' },
    2: { name: 'Plan 2: Landing Animada', setup: 750000, monthly: 75000, description: 'Animación y botón WhatsApp' },
    3: { name: 'Plan 3: Web con Catálogo', setup: 950000, monthly: 95000, description: 'Hasta 50 productos' },
    4: { name: 'Plan 4: Web Pro', setup: 1250000, monthly: 125000, description: 'Carrito a WhatsApp' },
  };

  const currentTier = tierConfigs[selectedPlanTier];
  const nfcCardUnitPrice = 35000;
  const copywritingAddon = includeCopywriting ? 80000 : 0;
  const domainAddon = includeCustomDomainSearch ? 45000 : 0;

  const totalSetup = currentTier.setup + (extraNfcCards * nfcCardUnitPrice) + copywritingAddon + domainAddon;
  const totalMonthly = currentTier.monthly;

  const formatCOP = (num: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(num);
  };

  const handleProceed = () => {
    const summary = `${currentTier.name} | Total Inicial: ${formatCOP(totalSetup)} | Mensual: ${formatCOP(totalMonthly)}`;
    onSelectCalculatedPlan({
      planName: currentTier.name,
      totalSetup,
      totalMonthly,
      summary,
    });
  };

  return (
    <section id="calculadora" className="py-16 bg-slate-900 text-white text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            Calculadora de precio
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Calcula el total inicial y mensual según el plan y las tarjetas adicionales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          <div className="lg:col-span-7 bg-slate-800 rounded-xl p-6 border border-slate-700 space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                1. Plan
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[1, 2, 3, 4].map((tier) => {
                  const item = tierConfigs[tier];
                  const isSelected = selectedPlanTier === tier;
                  return (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setSelectedPlanTier(tier)}
                      className={`text-left p-3.5 rounded-lg border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#FF5E14] bg-[#FF5E14]/10'
                          : 'border-slate-700 bg-slate-800/40 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                        <span>{item.name}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#FF5E14]" />}
                      </div>
                      <div className="text-xs text-slate-300 font-semibold">
                        {formatCOP(item.setup)} + {formatCOP(item.monthly)}/m
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700">
              <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                <span>2. Tarjetas NFC adicionales: +{extraNfcCards}</span>
                <span className="text-[#FF5E14]">+{formatCOP(extraNfcCards * nfcCardUnitPrice)}</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="1"
                value={extraNfcCards}
                onChange={(e) => setExtraNfcCards(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#FF5E14]"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>0</span>
                <span>5</span>
                <span>10</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700 space-y-2.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                3. Opciones adicionales
              </label>

              <label className="flex items-center justify-between p-3 rounded-lg border border-slate-700 bg-slate-800/40 cursor-pointer text-xs">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={includeCopywriting}
                    onChange={(e) => setIncludeCopywriting(e.target.checked)}
                    className="text-[#FF5E14] rounded"
                  />
                  <span>Redacción de textos (+{formatCOP(80000)})</span>
                </div>
              </label>

              <label className="flex items-center justify-between p-3 rounded-lg border border-slate-700 bg-slate-800/40 cursor-pointer text-xs">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={includeCustomDomainSearch}
                    onChange={(e) => setIncludeCustomDomainSearch(e.target.checked)}
                    className="text-[#FF5E14] rounded"
                  />
                  <span>Gestión de dominio (+{formatCOP(45000)})</span>
                </div>
              </label>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-800 rounded-xl p-6 border border-slate-700 space-y-4">
            <h3 className="text-sm font-bold uppercase text-slate-400">Total a pagar</h3>
            
            <div className="p-4 rounded-lg bg-slate-900 border border-slate-700 space-y-2">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-slate-400">Pago inicial:</span>
                <span className="text-2xl font-black text-white">{formatCOP(totalSetup)}</span>
              </div>
              <div className="flex justify-between items-baseline pt-2 border-t border-slate-800">
                <span className="text-xs text-slate-400">Mensualidad:</span>
                <span className="text-base font-bold text-[#FF5E14]">{formatCOP(totalMonthly)}/mes</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleProceed}
              className="w-full flex items-center justify-center gap-2 bg-[#FF5E14] hover:bg-[#E04E0B] text-white py-3 rounded-lg font-bold text-xs transition-all cursor-pointer"
            >
              <span>Continuar con esta cotización</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

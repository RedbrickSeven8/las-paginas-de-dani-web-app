import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, Smartphone, Layers, ShieldCheck } from 'lucide-react';

interface InteractiveCalculatorProps {
  onSelectCalculatedPlan: (details: {
    planName: string;
    totalSetup: number;
    totalMonthly: number;
    summary: string;
  }) => void;
}

export const InteractiveCalculator: React.FC<InteractiveCalculatorProps> = ({ onSelectCalculatedPlan }) => {
  const [selectedPlanTier, setSelectedPlanTier] = useState<number>(3); // Default Plan 3 (Más popular)
  const [extraNfcCards, setExtraNfcCards] = useState<number>(2); // extra tarjetas NFC
  const [includeCopywriting, setIncludeCopywriting] = useState<boolean>(true);
  const [includeCustomDomainSearch, setIncludeCustomDomainSearch] = useState<boolean>(true);

  // Precios base
  const tierConfigs: Record<number, { name: string; setup: number; monthly: number; description: string }> = {
    1: { name: 'Plan 1: Landing Esencial', setup: 550000, monthly: 55000, description: 'One-page ultra directa en 24h' },
    2: { name: 'Plan 2: Landing Animada', setup: 750000, monthly: 75000, description: 'Visual dinámico + botón WhatsApp' },
    3: { name: 'Plan 3: Web con Catálogo/Menú', setup: 950000, monthly: 95000, description: 'Hasta 50 productos con filtros' },
    4: { name: 'Plan 4: Pro + 2 Funcionalidades', setup: 1250000, monthly: 125000, description: 'Carrito a WhatsApp + cotizador' },
  };

  const currentTier = tierConfigs[selectedPlanTier];

  // Adicionales
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
    const summary = `Cotización Calculada: ${currentTier.name} | Total Inicial: ${formatCOP(totalSetup)} | Mensualidad: ${formatCOP(totalMonthly)} (${extraNfcCards} tarjetas NFC extras, Copy: ${includeCopywriting ? 'Sí' : 'No'}, Dominio: ${includeCustomDomainSearch ? 'Sí' : 'No'})`;
    onSelectCalculatedPlan({
      planName: currentTier.name,
      totalSetup,
      totalMonthly,
      summary,
    });
  };

  return (
    <section id="calculadora" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5E14]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FF5E14] text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Herramienta Interactiva en Vivo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            Simula tu Inversión Exacta en Segundos
          </h2>
          <p className="text-slate-400 text-base mt-3">
            Sin costos ocultos ni letras pequeñas. Elige el tipo de web, tus tarjetas inteligentes NFC adicionales y obtén tu presupuesto instantáneo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl p-6 sm:p-8 space-y-8">
            
            {/* Step 1: Base Tier Selection */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider text-slate-300 mb-4 flex items-center justify-between">
                <span>1. Selecciona el Tipo de Web</span>
                <span className="text-xs text-[#FF5E14] font-semibold">Entrega en 24h</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((tier) => {
                  const item = tierConfigs[tier];
                  const isSelected = selectedPlanTier === tier;
                  return (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setSelectedPlanTier(tier)}
                      className={`text-left p-4 rounded-xl border transition-all cursor-pointer relative ${
                        isSelected
                          ? 'border-[#FF5E14] bg-[#FF5E14]/10 ring-1 ring-[#FF5E14]'
                          : 'border-slate-700 bg-slate-800/50 hover:border-slate-500'
                      }`}
                    >
                      {tier === 3 && (
                        <span className="absolute -top-2.5 right-3 bg-[#FF5E14] text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase text-white shadow-sm">
                          Popular
                        </span>
                      )}
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-200">{item.name}</span>
                        {isSelected && <Check className="w-4 h-4 text-[#FF5E14]" />}
                      </div>
                      <p className="text-xs text-slate-400 mb-2">{item.description}</p>
                      <div className="text-sm font-extrabold text-white">
                        {formatCOP(item.setup)}{' '}
                        <span className="text-[11px] font-normal text-slate-400">+ {formatCOP(item.monthly)}/m</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Tarjetas NFC extras Slider */}
            <div className="pt-4 border-t border-slate-700/80">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-[#FF5E14]" />
                  <span>2. Tarjetas Inteligentes NFC Extras (+QR)</span>
                </label>
                <span className="text-base font-extrabold text-[#FF5E14]">
                  +{extraNfcCards} {extraNfcCards === 1 ? 'tarjeta' : 'tarjetas'}
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-4">
                Cada paquete ya incluye 1 tarjeta física lista. Agrega más para tus puntos de mesa, personal o sucursales ({formatCOP(nfcCardUnitPrice)} c/u).
              </p>
              
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="1"
                  value={extraNfcCards}
                  onChange={(e) => setExtraNfcCards(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#FF5E14]"
                />
              </div>
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>0 extra</span>
                <span>5 extras</span>
                <span>10 extras</span>
              </div>
            </div>

            {/* Step 3: Add-on Checkboxes */}
            <div className="pt-4 border-t border-slate-700/80 space-y-3">
              <label className="block text-sm font-bold uppercase tracking-wider text-slate-300 mb-2">
                3. Opciones de Lanzamiento Express
              </label>

              <label className="flex items-center justify-between p-3.5 rounded-xl border border-slate-700 bg-slate-800/40 hover:bg-slate-800 cursor-pointer transition-colors">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeCopywriting}
                    onChange={(e) => setIncludeCopywriting(e.target.checked)}
                    className="rounded border-slate-600 text-[#FF5E14] focus:ring-[#FF5E14] w-4 h-4"
                  />
                  <div>
                    <span className="text-xs font-bold text-slate-200 block">Redacción Vendedora de Textos (Copywriting)</span>
                    <span className="text-[11px] text-slate-400">Creamos los textos persuasivos listos para vender si no tienes redactado nada.</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-300">+{formatCOP(80000)}</span>
              </label>

              <label className="flex items-center justify-between p-3.5 rounded-xl border border-slate-700 bg-slate-800/40 hover:bg-slate-800 cursor-pointer transition-colors">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeCustomDomainSearch}
                    onChange={(e) => setIncludeCustomDomainSearch(e.target.checked)}
                    className="rounded border-slate-600 text-[#FF5E14] focus:ring-[#FF5E14] w-4 h-4"
                  />
                  <div>
                    <span className="text-xs font-bold text-slate-200 block">Gestión de Dominio .COM / .CO Express</span>
                    <span className="text-[11px] text-slate-400">Verificamos disponibilidad, configuración de DNS y enlace a la nube.</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-300">+{formatCOP(45000)}</span>
              </label>
            </div>

          </div>

          {/* Real-time Summary Card (Sticky/Responsive) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-700">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF5E14]">Presupuesto Proyectado</span>
                <h3 className="text-lg font-bold font-display text-white">Resumen en Tiempo Real</h3>
              </div>
              <div className="w-9 h-9 rounded-xl bg-orange-500/20 text-[#FF5E14] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>

            <div className="py-6 space-y-3.5 text-xs text-slate-300">
              <div className="flex justify-between items-center py-1">
                <span className="text-slate-400">Base: {currentTier.name}</span>
                <span className="font-semibold text-white">{formatCOP(currentTier.setup)}</span>
              </div>
              
              <div className="flex justify-between items-center py-1">
                <span className="text-slate-400">Tarjetas NFC físicas: 1 incluida {extraNfcCards > 0 ? `+ ${extraNfcCards} extras` : ''}</span>
                <span className="font-semibold text-white">+{formatCOP(extraNfcCards * nfcCardUnitPrice)}</span>
              </div>

              {includeCopywriting && (
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">Redacción y Copywriting</span>
                  <span className="font-semibold text-white">+{formatCOP(80000)}</span>
                </div>
              )}

              {includeCustomDomainSearch && (
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">Configuración de Dominio</span>
                  <span className="font-semibold text-white">+{formatCOP(45000)}</span>
                </div>
              )}
            </div>

            {/* Total Display */}
            <div className="pt-5 border-t border-slate-700 space-y-4">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-700/60">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-xs uppercase tracking-wider text-slate-400">Inversión Inicial Única:</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                    {formatCOP(totalSetup)}
                  </span>
                </div>
                <div className="flex justify-between items-baseline pt-2 border-t border-slate-800 text-xs">
                  <span className="text-slate-400">Mantenimiento mensual fijo:</span>
                  <span className="font-bold text-[#FF5E14] text-base">
                    {formatCOP(totalMonthly)} <span className="text-[11px] font-normal text-slate-400">/ mes</span>
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Entrega completa en 24 horas garantizada.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Membresía anual: soporte, fotos, precios y hosting asegurados.</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleProceed}
                className="w-full flex items-center justify-center gap-2 bg-[#FF5E14] hover:bg-[#E04E0B] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-xl shadow-orange-500/20 active:scale-95 transition-all cursor-pointer"
              >
                <span>Apartar Cupo con esta Cotización</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-[10px] text-slate-500">
                Al hacer clic validarás tus datos y te transferiremos a WhatsApp con la cotización desglosada.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React, { lazy, Suspense } from 'react';
import type { PricingPlan, PortfolioItem } from '../types';
import { AnimateIn } from '../components/AnimateIn';
import { HeroAnimation } from '../components/HeroAnimation';
import { Clock, ShieldCheck, ArrowRight, Smartphone } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

// Lazy loaded components with animation on scroll
const PricingSection = lazy(() =>
  import('../components/PricingSection').then((m) => ({ default: m.PricingSection }))
);
const InteractiveCalculator = lazy(() =>
  import('../components/InteractiveCalculator').then((m) => ({ default: m.InteractiveCalculator }))
);
const NfcDemo = lazy(() =>
  import('../components/NfcDemo').then((m) => ({ default: m.NfcDemo }))
);
const PortfolioSection = lazy(() =>
  import('../components/PortfolioSection').then((m) => ({ default: m.PortfolioSection }))
);
const FaqSection = lazy(() =>
  import('../components/FaqSection').then((m) => ({ default: m.FaqSection }))
);

const SectionLoader: React.FC = () => (
  <div className="py-16 flex items-center justify-center text-xs text-slate-400">
    <div className="w-5 h-5 border-2 border-slate-300 border-t-[#FF5E14] rounded-full animate-spin mr-2"></div>
    <span>Cargando...</span>
  </div>
);

interface HomePageProps {
  plans: PricingPlan[];
  portfolio: PortfolioItem[];
  onOpenLeadModal: (serviceName?: string, defaultMsg?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ plans, portfolio, onOpenLeadModal }) => {
  return (
    <div className="flex flex-col min-h-screen text-slate-900">
      
      {/* HERO SECTION - FIRST VIEWPORT */}
      <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-orange-50/20 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <AnimateIn direction="down" delay={100}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold tracking-wide">
                  <span className="text-[#FF5E14]">ENTREGA EN 24 HORAS</span>
                  <span className="text-slate-400">&bull;</span>
                  <span>Colombia</span>
                </div>
              </AnimateIn>

              <AnimateIn direction="up" delay={200}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-slate-950 leading-[1.08]">
                  Tu página web lista mañana.
                </h1>
              </AnimateIn>

              <AnimateIn direction="up" delay={300}>
                <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
                  Diseño, hosting, dominio y tarjetas NFC físicas con QR. Mantenimiento mensual por suscripción.
                </p>
              </AnimateIn>

              {/* FIRST VIEWPORT MAIN CTA */}
              <AnimateIn direction="up" delay={400}>
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onOpenLeadModal('Hero CTA Principal', 'Hola Dani, quiero mi web en 24 horas.')}
                    className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-black text-base shadow-lg shadow-emerald-500/20 active:scale-95 transition-all cursor-pointer"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-white" />
                    <span>Pedir por WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="#servicios"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 px-6 py-4 rounded-xl font-bold text-sm transition-colors cursor-pointer"
                  >
                    <span>Ver Planes</span>
                  </a>
                </div>
              </AnimateIn>

              <AnimateIn direction="up" delay={500}>
                <div className="pt-3 grid grid-cols-3 gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#FF5E14] shrink-0" />
                    <span>Entrega en 24h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-[#FF5E14] shrink-0" />
                    <span>Tarjeta NFC + QR</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Mantenimiento</span>
                  </div>
                </div>
              </AnimateIn>
            </div>

            {/* Right Column: Hero Sequential Animation replaces the specifications card */}
            <div className="lg:col-span-6">
              <AnimateIn direction="left" delay={300}>
                <HeroAnimation />
              </AnimateIn>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="sobre-nosotros" className="py-16 bg-white border-t border-slate-200 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn direction="up">
            <div className="max-w-2xl mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-950">
                Cómo funciona el servicio
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Hacemos la web, la publicamos en el hosting y te entregamos el link con tarjetas NFC. Requiere pago mensual por 1 año.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <AnimateIn direction="up" delay={100}>
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 h-full">
                <div className="text-xs font-bold text-[#FF5E14] mb-1">PASO 1</div>
                <h3 className="font-bold text-slate-900 text-sm font-display mb-1">Acuerdo</h3>
                <p className="text-xs text-slate-600">Envías datos, fotos y logo por WhatsApp.</p>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={200}>
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 h-full">
                <div className="text-xs font-bold text-[#FF5E14] mb-1">PASO 2</div>
                <h3 className="font-bold text-slate-900 text-sm font-display mb-1">Montaje</h3>
                <p className="text-xs text-slate-600">Montamos la web al hosting y dominio en 24 horas.</p>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={300}>
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 h-full">
                <div className="text-xs font-bold text-[#FF5E14] mb-1">PASO 3</div>
                <h3 className="font-bold text-slate-900 text-sm font-display mb-1">Tarjetas NFC</h3>
                <p className="text-xs text-slate-600">Recibes tarjetas físicas para acercar o escanear QR.</p>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={400}>
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 h-full">
                <div className="text-xs font-bold text-[#FF5E14] mb-1">PASO 4</div>
                <h3 className="font-bold text-slate-900 text-sm font-display mb-1">Soporte</h3>
                <p className="text-xs text-slate-600">La mensualidad cubre cambios de precios, datos y fotos.</p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* PRICING PLANS (LAZY LOADED) */}
      <Suspense fallback={<SectionLoader />}>
        <AnimateIn direction="up">
          <PricingSection
            plans={plans}
            onSelectPlan={(plan) => {
              onOpenLeadModal(plan.name, plan.whatsappMessage);
            }}
          />
        </AnimateIn>
      </Suspense>

      {/* CALCULATOR (LAZY LOADED) */}
      <Suspense fallback={<SectionLoader />}>
        <AnimateIn direction="up">
          <InteractiveCalculator
            onSelectCalculatedPlan={(details) => {
              onOpenLeadModal(details.planName, `Hola Dani, calculé mi plan:\n- ${details.planName}\n- Inicial: $${details.totalSetup.toLocaleString('es-CO')}\n- Mensual: $${details.totalMonthly.toLocaleString('es-CO')}\nQuiero empezar.`);
            }}
          />
        </AnimateIn>
      </Suspense>

      {/* NFC DEMO (LAZY LOADED) */}
      <Suspense fallback={<SectionLoader />}>
        <AnimateIn direction="up">
          <NfcDemo />
        </AnimateIn>
      </Suspense>

      {/* PORTFOLIO (LAZY LOADED WITH IFRAME) */}
      <Suspense fallback={<SectionLoader />}>
        <AnimateIn direction="up">
          <PortfolioSection
            items={portfolio}
            onOpenLeadModal={(name) => {
              onOpenLeadModal(name, `Hola Dani, me interesa una web como la de ${name}.`);
            }}
          />
        </AnimateIn>
      </Suspense>

      {/* FAQ (LAZY LOADED) */}
      <Suspense fallback={<SectionLoader />}>
        <AnimateIn direction="up">
          <FaqSection />
        </AnimateIn>
      </Suspense>

      {/* BOTTOM CTA */}
      <section id="contacto" className="py-16 bg-slate-950 text-white text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <AnimateIn direction="up">
            <h2 className="text-2xl sm:text-4xl font-black font-display text-white">
              Tu web lista en 24 horas
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Escríbenos por WhatsApp para iniciar hoy.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={() => onOpenLeadModal('CTA Final', 'Hola Dani, quiero iniciar mi web hoy.')}
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-all cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                <span>Contactar por WhatsApp</span>
              </button>
            </div>
          </AnimateIn>
        </div>
      </section>

    </div>
  );
};

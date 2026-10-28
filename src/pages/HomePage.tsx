import React, { lazy, Suspense } from 'react';
import type { PricingPlan, PortfolioItem } from '../types';
import { AnimateIn } from '../components/AnimateIn';
import { HeroAnimation } from '../components/HeroAnimation';
import { ArrowRight, Globe, CheckCircle2, Zap, Sparkles, AlertTriangle } from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

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
    <span>Cargando contenido...</span>
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
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold tracking-wide">
                  <span className="text-[#FF5E14]">¿TU NEGOCIO AÚN NO TIENE WEB?</span>
                  <span className="text-slate-400">&bull;</span>
                  <span>Lista en 24 Horas</span>
                </div>
              </AnimateIn>

              <AnimateIn direction="up" delay={200}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-slate-950 leading-[1.08]">
                  Si tu negocio no está en internet, tus clientes le están comprando a la competencia.
                </h1>
              </AnimateIn>

              <AnimateIn direction="up" delay={300}>
                <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
                  Pensar que "no necesitas página web" te cuesta ventas todos los días. Te entregamos un sitio web profesional listo en 24 horas con hosting, dominio, soporte y <strong>tarjeta inteligente NFC con QR</strong> para tu local.
                </p>
              </AnimateIn>

              {/* FIRST VIEWPORT MAIN CTA */}
              <AnimateIn direction="up" delay={400}>
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onOpenLeadModal('Hero CTA Principal', 'Hola Dani, mi comercio no tiene página web y quiero dejar de perder ventas.')}
                    className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-black text-base shadow-lg shadow-emerald-500/20 active:scale-95 transition-all cursor-pointer"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-white" />
                    <span>Digitalizar mi Negocio Hoy</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="#servicios"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 px-6 py-4 rounded-xl font-bold text-sm border border-slate-200 transition-colors"
                  >
                    <span>Ver Planes desde $550.000</span>
                  </a>
                </div>
              </AnimateIn>

              <AnimateIn direction="up" delay={500}>
                <div className="pt-2 grid grid-cols-3 gap-2 border-t border-slate-200/80 text-[11px] font-semibold text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Cero enredos técnicos</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Dominio + Hosting</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Tarjeta NFC con QR</span>
                  </div>
                </div>
              </AnimateIn>

            </div>

            {/* VIDEO HERO PRESERVED STRICTLY */}
            <div className="lg:col-span-6">
              <AnimateIn direction="left" delay={300}>
                <HeroAnimation />
              </AnimateIn>
            </div>

          </div>
        </div>
      </section>

      {/* POR QUÉ TU NEGOCIO NECESITA PAGINA WEB */}
      <section className="py-14 bg-white border-y border-slate-200 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
              El riesgo de no tener presencia web
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-950 mt-1">
              "No necesito web"... el error más costoso de un comercio hoy
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Hoy más del 85% de los clientes buscan un negocio en Google o escanean un QR antes de comprar. Si no te encuentran, eligen al negocio de al lado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimateIn direction="up" delay={100}>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF5E14] flex items-center justify-center font-bold mb-4">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-display mb-2">
                    Gana la Credibilidad que te Falta
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Un negocio con sitio web transmite confianza inmediata. Tus clientes verifican tus productos, precios y ubicación en segundos sin dudar.
                  </p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={200}>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#25D366] flex items-center justify-center font-bold mb-4">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-display mb-2">
                    Ventas Directas a tu WhatsApp
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Tu página web funciona como un vendedor activo 24/7 que le muestra tu catálogo a los clientes y te envía las cotizaciones armadas a tu WhatsApp.
                  </p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={300}>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-display mb-2">
                    Tarjeta NFC Física de Regalo
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Tus clientes acercan su teléfono a la tarjeta NFC o escanean el QR en tu local para ver tu web, catálogo o dejar reseñas positivas en Google.
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA EL PROCESO DE DIGITALIZACIÓN */}
      <section className="py-14 bg-slate-50 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
              Proceso simple en 4 pasos
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Diseñado para que comerciantes y empresarios obtengan su web sin complicarse.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <AnimateIn direction="up" delay={100}>
              <div className="p-5 rounded-xl bg-white border border-slate-200 h-full shadow-xs">
                <div className="text-xs font-bold text-[#FF5E14] mb-1">PASO 1</div>
                <h3 className="font-bold text-slate-900 text-sm font-display mb-1">Contacto</h3>
                <p className="text-xs text-slate-600">Eliges el plan ideal para tu negocio y nos escribes por WhatsApp.</p>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={200}>
              <div className="p-5 rounded-xl bg-white border border-slate-200 h-full shadow-xs">
                <div className="text-xs font-bold text-[#FF5E14] mb-1">PASO 2</div>
                <h3 className="font-bold text-slate-900 text-sm font-display mb-1">Desarrollo 24h</h3>
                <p className="text-xs text-slate-600">Montamos el sitio web con tu información, logos y catálogo.</p>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={300}>
              <div className="p-5 rounded-xl bg-white border border-slate-200 h-full shadow-xs">
                <div className="text-xs font-bold text-[#FF5E14] mb-1">PASO 3</div>
                <h3 className="font-bold text-slate-900 text-sm font-display mb-1">Tarjeta NFC</h3>
                <p className="text-xs text-slate-600">Recibes tu tarjeta física inteligente con chip NFC y código QR.</p>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={400}>
              <div className="p-5 rounded-xl bg-white border border-slate-200 h-full shadow-xs">
                <div className="text-xs font-bold text-[#FF5E14] mb-1">PASO 4</div>
                <h3 className="font-bold text-slate-900 text-sm font-display mb-1">Soporte Continuo</h3>
                <p className="text-xs text-slate-600">Nos encargamos de las actualizaciones y mantenimiento mensual.</p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* PRICING PLANS */}
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

      {/* CALCULATOR */}
      <Suspense fallback={<SectionLoader />}>
        <AnimateIn direction="up">
          <InteractiveCalculator
            onSelectCalculatedPlan={(details) => {
              onOpenLeadModal(details.planName, `Hola Dani, mi comercio no tiene página web. Calculé mi plan:\n- ${details.planName}\n- Inicial: $${details.totalSetup.toLocaleString('es-CO')}\n- Mensual: $${details.totalMonthly.toLocaleString('es-CO')}\nQuiero contratar hoy.`);
            }}
          />
        </AnimateIn>
      </Suspense>

      {/* NFC DEMO PRESERVED STRICTLY */}
      <Suspense fallback={<SectionLoader />}>
        <AnimateIn direction="up">
          <NfcDemo />
        </AnimateIn>
      </Suspense>

      {/* PORTFOLIO */}
      <Suspense fallback={<SectionLoader />}>
        <AnimateIn direction="up">
          <PortfolioSection
            items={portfolio}
            onOpenLeadModal={(name) => {
              onOpenLeadModal(name, `Hola Dani, mi comercio no tiene página web y me interesa una solución similar a ${name}.`);
            }}
          />
        </AnimateIn>
      </Suspense>

      {/* FAQ */}
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
              No dejes que tu competencia se quede con tus clientes
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Escríbenos por WhatsApp y te asesoramos para lanzar tu web en 24 horas.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={() => onOpenLeadModal('CTA Final', 'Hola Dani, mi negocio no tiene sitio web y quiero crearlo hoy.')}
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-all cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                <span>Hablar por WhatsApp con Dani</span>
              </button>
            </div>
          </AnimateIn>
        </div>
      </section>

    </div>
  );
};

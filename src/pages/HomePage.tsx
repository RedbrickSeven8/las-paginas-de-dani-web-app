import React from 'react';
import type { PricingPlan, PortfolioItem } from '../types';
import { InteractiveCalculator } from '../components/InteractiveCalculator';
import { NfcDemo } from '../components/NfcDemo';
import { PricingSection } from '../components/PricingSection';
import { PortfolioSection } from '../components/PortfolioSection';
import { FaqSection } from '../components/FaqSection';
import { Zap, Clock, ShieldCheck, ArrowRight, MessageCircle, Star, Sparkles, Check, Smartphone } from 'lucide-react';

interface HomePageProps {
  plans: PricingPlan[];
  portfolio: PortfolioItem[];
  onOpenLeadModal: (serviceName?: string, defaultMsg?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ plans, portfolio, onOpenLeadModal }) => {
  return (
    <div className="flex flex-col min-h-screen text-slate-900">
      
      <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-orange-50/20 to-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold tracking-wide shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-[#10B981] animate-ping"></span>
                <span className="text-[#FF5E14]">ENTREGA EN 24 HORAS</span>
                <span className="text-slate-400">&bull;</span>
                <span>Colombia</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-slate-950 leading-[1.08]">
                Tu página web lista <br className="hidden sm:inline" />
                <span className="text-[#FF5E14]">mañana mismo</span>, <br className="hidden sm:inline" />
                sin enredos técnicos.
              </h1>

              <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
                Hacemos tu web profesional, la alojamos en servidores de alta velocidad, te regalamos <strong>tarjetas inteligentes NFC con QR</strong> para tus clientes y nos encargamos de todo el mantenimiento mensual. Sin complicaciones ni costos exorbitantes.
              </p>

              {/* FIRST VIEWPORT MAIN CTA (PRIMARY ACTION) */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenLeadModal('Hero CTA Principal', 'Hola Dani, quiero tener mi página web lista en 24 horas. ¿Qué necesitamos para empezar hoy?')}
                  className="inline-flex items-center justify-center gap-3 bg-[#FF5E14] hover:bg-[#E04E0B] text-white px-8 py-4 rounded-xl font-black text-base shadow-xl shadow-orange-500/25 active:scale-95 transition-all cursor-pointer group"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Empezar mi Web en WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 px-6 py-4 rounded-xl font-bold text-sm transition-colors cursor-pointer"
                >
                  <span>Ver Planes desde $550.000</span>
                </a>
              </div>

              <div className="pt-3 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FF5E14] shrink-0" />
                  <span>Entrega en <strong>24 horas</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-[#FF5E14] shrink-0" />
                  <span><strong>Tarjeta NFC + QR</strong> gratis</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Mantenimiento cubierto</span>
                </div>
              </div>

            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-800 space-y-5 relative">
                  
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/50">
                      ● EN VIVO &bull; LISTO EN 24H
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-between">
                      <span className="text-slate-300">Desarrollo y hosting express:</span>
                      <strong className="text-emerald-400">1 Día Hábil</strong>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-between">
                      <span className="text-slate-300">Tarjeta Inteligente NFC física:</span>
                      <strong className="text-white">Incluida (con QR)</strong>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-between">
                      <span className="text-slate-300">Soporte, fotos y cambio precios:</span>
                      <strong className="text-white">Mensualidad fija</strong>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-between">
                      <span className="text-slate-300">Inversión inicial desde:</span>
                      <strong className="text-[#FF5E14] text-base font-black">$550.000 COP</strong>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                      <span className="text-white font-bold ml-1">5.0</span>
                    </div>
                    <span className="text-slate-400">Empresas en Colombia</span>
                  </div>

                </div>

                <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-white border border-slate-200 text-slate-900 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                    <Check className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-bold text-slate-900">NexPlay, Gave & Impacto</p>
                    <p className="text-[10px] text-slate-500">Páginas operando al 100%</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="sobre-nosotros" className="py-20 bg-white border-t border-slate-200 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 text-[#FF5E14]" />
                <span>Sobre Las páginas de Dani</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-950">
                Un modelo diferente: <br />
                <span className="text-[#FF5E14]">Cero complicaciones</span> para tu negocio.
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Las agencias tradicionales cobran sumas desproporcionadas, demoran meses en entregar y luego te dejan a tu suerte con paneles técnicos indescifrables.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                En <strong>Las páginas de Dani</strong> invertimos la fórmula: nosotros construimos la web en 24 horas, la publicamos en nuestros servidores de alto desempeño y nos encargamos de todo el soporte técnico mes a mes por una cuota fija. Tú solo te preocupas por recibir clientes y pedidos por WhatsApp.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-black font-display text-slate-900 mb-1">24 Horas</div>
                  <div className="text-xs text-slate-500">Tiempo récord garantizado de publicación y entrega.</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-black font-display text-[#FF5E14] mb-1">100% Gestionado</div>
                  <div className="text-xs text-slate-500">Tú no tocas código ni servidores. Todo resuelto por Dani.</div>
                </div>
              </div>

            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#FF5E14] flex items-center justify-center font-bold">
                    1
                  </div>
                  <h3 className="font-bold text-slate-900 text-base font-display">Acuerdo Rápido</h3>
                  <p className="text-xs text-slate-600">
                    Nos envías tu logo, fotos y datos por WhatsApp. Definimos el plan ideal en 15 minutos.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#FF5E14] flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="font-bold text-slate-900 text-base font-display">Montaje y Publicación</h3>
                  <p className="text-xs text-slate-600">
                    Construimos la web optimizada para móviles, la conectamos al hosting y te entregamos tu link.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#FF5E14] flex items-center justify-center font-bold">
                    3
                  </div>
                  <h3 className="font-bold text-slate-900 text-base font-display">Tarjeta NFC Física</h3>
                  <p className="text-xs text-slate-600">
                    Recibes tus tarjetas programadas para acercar al celular de tus clientes en mostrador o eventos.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#FF5E14] flex items-center justify-center font-bold">
                    4
                  </div>
                  <h3 className="font-bold text-slate-900 text-base font-display">Soporte Continuo</h3>
                  <p className="text-xs text-slate-600">
                    ¿Cambiaste un precio o número? Nos avisas por WhatsApp y lo actualizamos de inmediato.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      <PricingSection
        plans={plans}
        onSelectPlan={(plan) => {
          onOpenLeadModal(plan.name, plan.whatsappMessage);
        }}
      />

      <InteractiveCalculator
        onSelectCalculatedPlan={(details) => {
          onOpenLeadModal(details.planName, `Hola Dani, calculé mi cotización personalizada:\n- Plan: ${details.planName}\n- Inversión inicial: $${details.totalSetup.toLocaleString('es-CO')}\n- Mensualidad: $${details.totalMonthly.toLocaleString('es-CO')}\n¿Cuándo podemos empezar mi web de 24 horas?`);
        }}
      />

      <NfcDemo />

      <PortfolioSection
        items={portfolio}
        onOpenLeadModal={(name) => {
          onOpenLeadModal(name, `Hola Dani, vi en el portafolio el caso de ${name} y me gustó mucho. Quiero algo similar para mi empresa.`);
        }}
      />

      <FaqSection />

      <section id="contacto" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-[#FF5E14] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Empieza Hoy &bull; En Vivo Mañana</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white leading-tight">
            ¿Listo para ver tu negocio en internet en 24 horas?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Hablemos directamente por WhatsApp. Te mostramos cómo quedará tu web y preparamos tus tarjetas inteligentes NFC.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenLeadModal('CTA Final de Conversión', 'Hola Dani, quiero solicitar mi página web en 24 horas. ¿Qué cupos tienes disponibles hoy?')}
              className="inline-flex items-center gap-3 bg-[#FF5E14] hover:bg-[#E04E0B] text-white px-8 py-4 rounded-xl font-black text-base shadow-2xl shadow-orange-500/40 active:scale-95 transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chatear con Dani en WhatsApp</span>
            </button>
          </div>

          <p className="text-xs text-slate-500 pt-2">
            Sin intermediarios &bull; Respuesta rápida en minutos &bull; Cobertura en toda Colombia
          </p>

        </div>
      </section>

    </div>
  );
};

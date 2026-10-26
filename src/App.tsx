import React, { useState, useEffect } from 'react';
import type { PageRoute, PricingPlan, PortfolioItem } from './types';
import { getInitialPlans, getInitialPortfolio } from './data/siteData';
import { Navbar } from './components/Navbar';
import { Breadcrumbs } from './components/Breadcrumbs';
import { LeadModal } from './components/LeadModal';
import { CookieBanner } from './components/CookieBanner';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PrivacyPage, TermsPage, CookiesPage } from './pages/LegalPages';
import { ThankYouPage } from './pages/ThankYouPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Toaster } from 'sonner';
import { MessageCircle } from 'lucide-react';

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadServiceName, setLeadServiceName] = useState('');
  const [leadDefaultMessage, setLeadDefaultMessage] = useState('');

  const [plans] = useState<PricingPlan[]>(() => getInitialPlans());
  const [portfolio] = useState<PortfolioItem[]>(() => getInitialPortfolio());

  useEffect(() => {
    const titles: Record<PageRoute, string> = {
      home: 'Las páginas de Dani | Páginas Web Disruptivas en 24 Horas & Tarjetas NFC',
      privacy: 'Política de Privacidad | Las páginas de Dani',
      terms: 'Términos y Condiciones del Servicio | Las páginas de Dani',
      cookies: 'Política de Cookies | Las páginas de Dani',
      'thank-you': '¡Gracias por tu Solicitud! | Las páginas de Dani',
      '404': 'Página No Encontrada (404) | Las páginas de Dani'
    };
    document.title = titles[currentRoute] || 'Las páginas de Dani';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentRoute]);

  const handleOpenLeadModal = (serviceName?: string, defaultMsg?: string) => {
    setLeadServiceName(serviceName || 'General');
    setLeadDefaultMessage(defaultMsg || '');
    setIsLeadModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] selection:bg-[#FF5E14] selection:text-white">
      <Toaster position="top-right" richColors />

      <Navbar
        currentRoute={currentRoute}
        onRouteChange={setCurrentRoute}
        onOpenLeadModal={handleOpenLeadModal}
      />

      <Breadcrumbs
        currentRoute={currentRoute}
        onRouteChange={setCurrentRoute}
      />

      <main className="flex-1">
        {currentRoute === 'home' && (
          <HomePage
            plans={plans}
            portfolio={portfolio}
            onOpenLeadModal={handleOpenLeadModal}
          />
        )}
        {currentRoute === 'privacy' && <PrivacyPage onRouteChange={setCurrentRoute} />}
        {currentRoute === 'terms' && <TermsPage onRouteChange={setCurrentRoute} />}
        {currentRoute === 'cookies' && <CookiesPage onRouteChange={setCurrentRoute} />}
        {currentRoute === 'thank-you' && <ThankYouPage onRouteChange={setCurrentRoute} />}
        {currentRoute === '404' && <NotFoundPage onRouteChange={setCurrentRoute} />}
      </main>

      <Footer
        onRouteChange={setCurrentRoute}
        onOpenLeadModal={handleOpenLeadModal}
      />

      <aside aria-label="Contacto Rápido" className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => handleOpenLeadModal('Boton Flotante WhatsApp', 'Hola Dani, quiero cotizar una página web para mi negocio.')}
          className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 font-bold text-sm hover:scale-105 active:scale-95 transition-all cursor-pointer group"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="hidden sm:inline">¿Hablamos por WhatsApp?</span>
        </button>
      </aside>

      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        serviceName={leadServiceName}
        defaultMessage={leadDefaultMessage}
        onRouteChange={setCurrentRoute}
      />

      <CookieBanner onRouteChange={setCurrentRoute} />
    </div>
  );
};

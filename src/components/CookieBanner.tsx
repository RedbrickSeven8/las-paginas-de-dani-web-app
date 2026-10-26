import React, { useState, useEffect } from 'react';
import type { PageRoute } from '../types';
import { logConsentAudit } from '../services/auditLogger';
import { Cookie, Shield } from 'lucide-react';

interface CookieBannerProps {
  onRouteChange: (route: PageRoute) => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onRouteChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('las_paginas_dani_cookie_consent');
      if (!consent) {
        setIsVisible(true);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('las_paginas_dani_cookie_consent', 'accepted');
    } catch {
      // ignore
    }
    logConsentAudit({
      termsAccepted: false,
      privacyAccepted: true,
      method: 'CookieBanner_Accept_All',
    });
    setIsVisible(false);
  };

  const handleReject = () => {
    try {
      localStorage.setItem('las_paginas_dani_cookie_consent', 'rejected_analytics');
    } catch {
      // ignore
    }
    logConsentAudit({
      termsAccepted: false,
      privacyAccepted: false,
      method: 'CookieBanner_Essential_Only',
    });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside aria-label="Consentimiento de Cookies" className="fixed bottom-4 left-4 right-4 md:left-8 md:max-w-md z-50 bg-slate-900 text-white p-5 rounded-2xl shadow-2xl border border-slate-800 animate-in fade-in slide-in-from-bottom-5">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-[#FF5E14]/20 rounded-xl text-[#FF5E14] shrink-0">
          <Cookie className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-sm font-bold font-display text-white mb-1">
            Control de Privacidad y Cookies
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            Utilizamos únicamente cookies técnicas indispensables para el funcionamiento y auditoría técnica del cotizador. Evaluamos el consentimiento previo antes de activar analítica de terceros.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleAccept}
              className="bg-[#FF5E14] hover:bg-[#E04E0B] text-white text-xs font-bold px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              Aceptar Todo
            </button>
            <button
              onClick={handleReject}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              Solo Técnicas
            </button>
            <button
              onClick={() => onRouteChange('cookies')}
              className="text-xs text-slate-400 hover:text-white underline cursor-pointer flex items-center gap-1"
            >
              <Shield className="w-3 h-3" />
              <span>Ver Política</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

import React, { useState, useEffect } from 'react';
import type { PageRoute } from '../types';
import { logConsentAudit } from '../services/auditLogger';
import { X, ShieldCheck, AlertCircle, Mail, Send } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import confetti from 'canvas-confetti';
import { toast } from 'sonner';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  defaultMessage?: string;
  onRouteChange: (route: PageRoute) => void;
}

const PLAN_OPTIONS = [
  { id: 'Plan 1', label: 'Plan 1: Landing Page ($550.000 + $55.000/mes)' },
  { id: 'Plan 2', label: 'Plan 2: Landing Animada ($750.000 + $75.000/mes)' },
  { id: 'Plan 3', label: 'Plan 3: Web con Catálogo ($950.000 + $95.000/mes)' },
  { id: 'Plan 4', label: 'Plan 4: Web Pro con Funciones Extra ($1.250.000 + $125.000/mes)' },
];

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  serviceName,
  defaultMessage,
  onRouteChange
}) => {
  const [selectedPlan, setSelectedPlan] = useState<string>('Plan 1');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!serviceName) {
      setSelectedPlan('Plan 1');
      return;
    }
    const lower = serviceName.toLowerCase();
    if (lower.includes('plan 1') || lower.includes('landing page') && !lower.includes('animad')) {
      setSelectedPlan('Plan 1');
    } else if (lower.includes('plan 2') || lower.includes('animad')) {
      setSelectedPlan('Plan 2');
    } else if (lower.includes('plan 3') || lower.includes('catálogo') || lower.includes('catalogo')) {
      setSelectedPlan('Plan 3');
    } else if (lower.includes('plan 4') || lower.includes('pro')) {
      setSelectedPlan('Plan 4');
    } else {
      setSelectedPlan('Plan 1');
    }
  }, [serviceName]);

  if (!isOpen) return null;

  const sendEmailNotification = async (name: string, phone: string, plan: string, msg: string) => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('phone', phone);
      formData.append('plan', plan);
      formData.append('message', msg);
      formData.append('_subject', `Nuevo Prospecto (Sin Página Web): ${name} - ${plan}`);
      formData.append('_captcha', 'false');

      await fetch('https://formsubmit.co/laspaginasdedani@gmail.com', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
    } catch {
      // Notificación asíncrona no bloqueante
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!clientName.trim()) {
      setErrorMsg('Ingresa tu nombre o el de tu negocio/comercio.');
      return;
    }

    if (!clientPhone.trim() || clientPhone.replace(/\D/g, '').length < 7) {
      setErrorMsg('Ingresa un número de WhatsApp válido.');
      return;
    }

    if (!termsAccepted || !privacyAccepted) {
      setErrorMsg('Debes aceptar los Términos y la Política de Privacidad.');
      return;
    }

    setIsSubmitting(true);

    logConsentAudit({
      termsAccepted: true,
      privacyAccepted: true,
      method: 'LeadModal_Form_Submit',
      clientName: clientName.trim(),
      clientPhone: clientPhone.trim(),
      serviceSelected: selectedPlan,
    });

    const baseText = defaultMessage
      ? `${defaultMessage} (Selección: ${selectedPlan})`
      : `Hola Dani, no tengo página web en mi comercio/negocio. Soy ${clientName.trim()}, mi número es ${clientPhone.trim()} y quiero información para contratar el ${selectedPlan}.`;

    sendEmailNotification(
      clientName.trim(),
      clientPhone.trim(),
      selectedPlan,
      baseText
    );

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // non-blocking
    }

    toast.success('Notificación enviada a laspaginasdedani@gmail.com. Abriendo WhatsApp...');

    const encoded = encodeURIComponent(baseText);
    const waUrl = `https://wa.me/573058921629?text=${encoded}`;

    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
      onClose();
      onRouteChange('thank-you');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative text-left">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-emerald-100 text-[#25D366] rounded-xl shrink-0">
            <WhatsAppIcon className="w-6 h-6 fill-[#25D366]" />
          </div>
          <div>
            <h3 className="text-base font-extrabold text-slate-900 font-display">
              Digitaliza tu Comercio Hoy
            </h3>
            <p className="text-xs text-slate-500">
              Obtén tu sitio web listo en 24 horas y contacto directo a WhatsApp
            </p>
          </div>
        </div>

        {errorMsg && (
          <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2 text-xs text-red-700">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Plan o Servicio de Interés
            </label>
            <select
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)}
              className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#25D366] text-xs font-medium text-slate-900 bg-white"
            >
              {PLAN_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Nombre o Nombre de tu Comercio / Empresa *
            </label>
            <input
              type="text"
              required
              value={clientName}
              onChange={(e) => {
                setClientName(e.target.value);
                if (errorMsg) setErrorMsg('');
              }}
              placeholder="Ej. Pedro Gómez - Tienda Don Pedro"
              className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#25D366] text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Número de WhatsApp de Contacto *
            </label>
            <input
              type="tel"
              required
              value={clientPhone}
              onChange={(e) => {
                setClientPhone(e.target.value);
                if (errorMsg) setErrorMsg('');
              }}
              placeholder="Ej. 300 123 4567"
              className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#25D366] text-xs"
            />
          </div>

          <div className="pt-2 space-y-2 border-t border-slate-100 text-xs text-slate-600">
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => {
                  setTermsAccepted(e.target.checked);
                  if (errorMsg) setErrorMsg('');
                }}
                className="mt-0.5 rounded border-slate-300 text-[#25D366] focus:ring-[#25D366]"
              />
              <span>
                Acepto los{' '}
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onRouteChange('terms');
                  }}
                  className="text-slate-900 underline font-semibold"
                >
                  Términos y Condiciones
                </button>.
              </span>
            </label>

            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={privacyAccepted}
                onChange={(e) => {
                  setPrivacyAccepted(e.target.checked);
                  if (errorMsg) setErrorMsg('');
                }}
                className="mt-0.5 rounded border-slate-300 text-[#25D366] focus:ring-[#25D366]"
              />
              <span>
                Acepto la{' '}
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onRouteChange('privacy');
                  }}
                  className="text-slate-900 underline font-semibold"
                >
                  Política de Privacidad
                </button>.
              </span>
            </label>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-xl font-bold text-xs shadow-md transition-all cursor-pointer disabled:opacity-75"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>{isSubmitting ? 'Enviando...' : 'Pedir por WhatsApp'}</span>
              <Send className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 pt-1">
            <Mail className="w-3 h-3 text-[#FF5E14]" />
            <span>Copia de confirmación enviada a laspaginasdedani@gmail.com</span>
          </div>

          <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Datos protegidos por "las paginas de dani".</span>
          </div>
        </form>

      </div>
    </div>
  );
};

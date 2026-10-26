import React, { useState } from 'react';
import type { PageRoute } from '../types';
import { logConsentAudit } from '../services/auditLogger';
import { X, Send, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { toast } from 'sonner';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  defaultMessage?: string;
  onRouteChange: (route: PageRoute) => void;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  serviceName,
  defaultMessage,
  onRouteChange
}) => {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!clientName.trim()) {
      setErrorMsg('Por favor ingresa tu nombre o el de tu negocio.');
      return;
    }

    if (!clientPhone.trim() || clientPhone.replace(/\D/g, '').length < 7) {
      setErrorMsg('Por favor ingresa un número de WhatsApp válido.');
      return;
    }

    if (!termsAccepted || !privacyAccepted) {
      setErrorMsg('Debes aceptar independientemente los Términos y la Política de Privacidad.');
      return;
    }

    // Registrar auditoría técnica obligatoria (estrictamente interno)
    logConsentAudit({
      termsAccepted: true,
      privacyAccepted: true,
      method: 'LeadModal_Form_Submit',
      clientName: clientName.trim(),
      clientPhone: clientPhone.trim(),
      serviceSelected: serviceName || 'General',
    });

    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    toast.success('¡Datos validados! Redirigiendo a WhatsApp...');

    const baseText = defaultMessage || `Hola Dani, mi nombre es ${clientName.trim()}. Me interesa cotizar el servicio: ${serviceName}. Mi número de contacto es ${clientPhone.trim()}.`;
    const encoded = encodeURIComponent(baseText);
    const waUrl = `https://wa.me/573000000000?text=${encoded}`;

    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      onClose();
      onRouteChange('thank-you');
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative text-left">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF5E14] flex items-center justify-center font-bold">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-display text-slate-900">
              Cotiza en WhatsApp en 24h
            </h3>
            <p className="text-xs text-slate-500">
              Servicio seleccionado: <strong className="text-slate-800">{serviceName || 'Plan Personalizado'}</strong>
            </p>
          </div>
        </div>

        <p className="text-xs text-slate-600 mt-2 mb-6">
          Ingresa tus datos para conectarte directamente con Dani sin intermediarios y preparar tu propuesta.
        </p>

        {errorMsg && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-xs text-red-700">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Nombre o Nombre de tu Empresa <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={clientName}
              onChange={(e) => {
                setClientName(e.target.value);
                if (errorMsg) setErrorMsg('');
              }}
              placeholder="Ej. Carlos Mendoza / Restaurante El Sabor"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF5E14] text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Número de WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              value={clientPhone}
              onChange={(e) => {
                setClientPhone(e.target.value);
                if (errorMsg) setErrorMsg('');
              }}
              placeholder="Ej. 312 345 6789"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF5E14] text-sm"
            />
          </div>

          <div className="pt-2 space-y-2.5 border-t border-slate-100">
            <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => {
                  setTermsAccepted(e.target.checked);
                  if (errorMsg) setErrorMsg('');
                }}
                className="mt-0.5 rounded border-slate-300 text-[#FF5E14] focus:ring-[#FF5E14]"
              />
              <span>
                Acepto expresamente los{' '}
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onRouteChange('terms');
                  }}
                  className="text-[#FF5E14] hover:underline font-medium"
                >
                  Términos y Condiciones
                </button>{' '}
                del servicio gestionado en Colombia.
              </span>
            </label>

            <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600">
              <input
                type="checkbox"
                checked={privacyAccepted}
                onChange={(e) => {
                  setPrivacyAccepted(e.target.checked);
                  if (errorMsg) setErrorMsg('');
                }}
                className="mt-0.5 rounded border-slate-300 text-[#FF5E14] focus:ring-[#FF5E14]"
              />
              <span>
                Acepto la{' '}
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onRouteChange('privacy');
                  }}
                  className="text-[#FF5E14] hover:underline font-medium"
                >
                  Política de Privacidad
                </button>{' '}
                y tratamiento de datos por parte de "las paginas de dani".
              </span>
            </label>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#FF5E14] hover:bg-[#E04E0B] text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-orange-500/25 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Abrir Chat en WhatsApp con Dani</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Tus datos están protegidos. Respuesta en menos de 15 minutos.</span>
          </div>
        </form>

      </div>
    </div>
  );
};

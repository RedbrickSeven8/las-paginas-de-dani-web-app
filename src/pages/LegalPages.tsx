import React from 'react';
import type { PageRoute } from '../types';
import { ArrowLeft, Shield, FileText, Cookie } from 'lucide-react';

interface LegalPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const PrivacyPage: React.FC<LegalPageProps> = ({ onRouteChange }) => {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      <button
        onClick={() => onRouteChange('home')}
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#FF5E14] mb-8 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Volver al Inicio</span>
      </button>

      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-orange-100 text-[#FF5E14]">
          <Shield className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-extrabold font-display text-slate-950">
          Política de Privacidad
        </h1>
      </div>
      <p className="text-xs text-slate-400 mb-8">
        Última actualización: 2026. Cumplimiento con la Ley 1581 de 2012 (Habeas Data Colombia) y RGPD.
      </p>

      <div className="space-y-6 text-sm text-slate-700 leading-relaxed bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2 font-display">1. Responsable del Tratamiento de Datos</h2>
          <p>
            El responsable del tratamiento de los datos personales recopilados a través de este portal web es <strong>"las paginas de dani"</strong> (en adelante "El Prestador"), con domicilio y operaciones en Colombia.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2 font-display">2. Finalidad del Tratamiento de Datos</h2>
          <p>
            Los datos personales suministrados (nombre, número de contacto, empresa y preferencias de servicio) son utilizados exclusivamente para:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600">
            <li>Establecer comunicación directa vía WhatsApp o correo electrónico para la cotización y entrega de servicios web.</li>
            <li>Gestionar el mantenimiento mensual y altas de dominios o tarjetas NFC.</li>
            <li>Mantener un registro técnico interno de auditoría de los consentimientos otorgados conforme a la normativa vigente.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2 font-display">3. Derechos del Titular (Habeas Data)</h2>
          <p>
            Conforme a la Ley 1581 de 2012, el titular de la información tiene derecho a conocer, actualizar, rectificar y solicitar la supresión de sus datos personales en cualquier momento notificando directamente a través de los canales oficiales de WhatsApp del Prestador.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2 font-display">4. No Transferencia a Terceros</h2>
          <p>
            "las paginas de dani" garantiza que no vende, cede ni comercializa bases de datos personales a agencias externas de publicidad ni a intermediarios no autorizados.
          </p>
        </div>
      </div>
    </div>
  );
};

export const TermsPage: React.FC<LegalPageProps> = ({ onRouteChange }) => {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      <button
        onClick={() => onRouteChange('home')}
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#FF5E14] mb-8 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Volver al Inicio</span>
      </button>

      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-orange-100 text-[#FF5E14]">
          <FileText className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-extrabold font-display text-slate-950">
          Términos y Condiciones del Servicio
        </h1>
      </div>
      <p className="text-xs text-slate-400 mb-8">
        Vigente para todos los contratos y adquisiciones de "las paginas de dani" en Colombia.
      </p>

      <div className="space-y-6 text-sm text-slate-700 leading-relaxed bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2 font-display">1. Modelo de Negocio y Entrega en 24 Horas</h2>
          <p>
            "las paginas de dani" diseña, maqueta y publica el sitio web según el plan escogido y lo aloja en infraestructura propia de alta disponibilidad. Por la naturaleza del modelo asequible, el cliente no dispone de acceso directo a los paneles de administración de hosting ni servidor. El cliente recibe el enlace web en línea y, en su caso, la cantidad pactada de tarjetas inteligentes NFC físicas impresas con QR.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2 font-display">2. Membresía y Cuota Mensual Obligatoria</h2>
          <p>
            La adquisición de la página web está supeditada a un cobro mensual obligatorio durante el periodo contractual inicial de un (1) año (suscripción gestionada). 
          </p>
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 my-2 text-xs">
            <strong>Condición de Suspensión:</strong> En caso de no registrarse el pago de la mensualidad en la fecha acordada, el sitio web quedará suspendido automáticamente hasta su regularización.
          </div>
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2 font-display">3. Alcance de la Mensualidad (Qué cubre y qué no)</h2>
          <p className="mb-2"><strong>La mensualidad cubre:</strong></p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600 mb-4">
            <li>Hosting de alta velocidad y certificado de seguridad SSL continuo.</li>
            <li>Mantenimiento preventivo y correctivo.</li>
            <li>Cambios comerciales recurrentes: actualizar números de teléfono, direcciones, reemplazo de fotos existentes y modificación de precios o productos en el catálogo.</li>
          </ul>
          <p className="mb-2"><strong>La mensualidad NO cubre:</strong></p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Rediseños estructurales completos o cambio integral de plantilla.</li>
            <li>Nuevas funcionalidades o reemplazo de la arquitectura base.</li>
            <li>Creación de contenido audiovisual desde cero (producción de videos, sesiones fotográficas).</li>
            <li>Migraciones a servidores externos durante la vigencia del contrato.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2 font-display">4. Finalización y Renovación Anual</h2>
          <p>
            Al cumplirse el primer año, el cliente podrá renovar su suscripción por un año adicional para mantener el servicio activo y mantenido, o bien finalizar la suscripción. En caso de finalizar, se le entregará el código fuente de la página web (no la web publicada ni el hospedaje).
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2 font-display">5. Exclusiones Técnicas Expresas</h2>
          <p>
            No se realizan plataformas de comercio electrónico transaccional con pasarelas bancarias, sitios con bases de datos relacionales complejas o catálogos que excedan de 50 productos.
          </p>
        </div>
      </div>
    </div>
  );
};

export const CookiesPage: React.FC<LegalPageProps> = ({ onRouteChange }) => {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      <button
        onClick={() => onRouteChange('home')}
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#FF5E14] mb-8 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Volver al Inicio</span>
      </button>

      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-orange-100 text-[#FF5E14]">
          <Cookie className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-extrabold font-display text-slate-950">
          Política de Cookies
        </h1>
      </div>
      <p className="text-xs text-slate-400 mb-8">
        Evaluación de consentimiento previo y transparencia técnica.
      </p>

      <div className="space-y-6 text-sm text-slate-700 leading-relaxed bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2 font-display">1. ¿Qué son las Cookies?</h2>
          <p>
            Las cookies son pequeños ficheros que se descargan en el navegador para permitir el funcionamiento de simuladores interactivos, recordar el estado de tu selección de planes y auditar internamente el cumplimiento del consentimiento.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2 font-display">2. Cookies Técnicas e Indispensables</h2>
          <p>
            Este sitio web utiliza cookies técnicas para recordar el estado de tu cotización en el simulador en vivo y almacenar la confirmación de lectura de políticas. Estas cookies no requieren consentimiento previo para su ejecución puesto que son indispensables para el servicio solicitado por el usuario.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2 font-display">3. Consentimiento Previo en Analítica</h2>
          <p>
            Evaluamos el consentimiento previo antes de la ejecución de cualquier cookie de rendimiento, analítica de comportamiento o terceros. El usuario puede revocar o rechazar las cookies no esenciales mediante el banner inferior en cualquier momento.
          </p>
        </div>
      </div>
    </div>
  );
};

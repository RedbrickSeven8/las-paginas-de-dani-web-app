import type { PricingPlan, PortfolioItem } from '../types';

export const getInitialPlans = (): PricingPlan[] => [
  {
    id: 'plan-1',
    number: 1,
    name: 'Landing Page Esencial',
    setupPrice: 550000,
    monthlyPrice: 55000,
    idealFor: 'Comerciantes y empresarios que NO tienen página web y necesitan su presencia digital inicial.',
    features: [
      'Entrega garantizada en 24 horas',
      'Presencia digital profesional en una sola página',
      'Hosting de alta velocidad y dominio .com/.co incluido',
      '1 Tarjeta inteligente NFC física con código QR',
      'Soporte y cambios de textos, fotos y teléfonos',
      'Certificado de seguridad SSL incluido'
    ],
    notIncluded: [
      'Animaciones avanzadas',
      'Múltiples secciones dinámicas',
      'Catálogo extenso de productos',
      'Pagos en línea o bases de datos'
    ],
    whatsappMessage: 'Hola Dani, soy comerciante/empresario sin página web y quiero el Plan 1 (Landing Esencial) de $550.000 + $55.000/mes.'
  },
  {
    id: 'plan-2',
    number: 2,
    name: 'Landing Animada & Comercial',
    setupPrice: 750000,
    monthlyPrice: 75000,
    idealFor: 'Negocios sin sitio web que buscan destacar visualmente con interacciones atractivas y captación directa.',
    features: [
      'Entrega garantizada en 24 horas',
      'Transiciones interactivas y animaciones visuales',
      'Botonera directa a WhatsApp y llamadas',
      'Hosting y dominio incluidos',
      '1 Tarjeta NFC física con código QR para tu local o negocio',
      'Mantenimiento continuo y cambios ilimitados de datos'
    ],
    notIncluded: [
      'Catálogo de productos',
      'Pasarelas de pago online',
      'Bases de datos complejas'
    ],
    whatsappMessage: 'Hola Dani, no tengo página web en mi negocio y quiero el Plan 2 (Landing Animada) de $750.000 + $75.000/mes.'
  },
  {
    id: 'plan-3',
    number: 3,
    name: 'Web con Catálogo Digital',
    setupPrice: 950000,
    monthlyPrice: 95000,
    highlight: true,
    tag: 'MÁS ELEGIDO POR NEGOCIOS',
    idealFor: 'Locales, restaurantes y empresas sin presencia web que necesitan mostrar hasta 50 productos o servicios.',
    features: [
      'Entrega garantizada en 24 horas',
      'Estructura completa de 1 o varias páginas',
      'Catálogo/Menú interactivo de hasta 50 productos con filtros',
      'Tarjetas NFC físicas impresas con QR para atención a clientes',
      'Hosting de alto rendimiento y dominio profesional',
      'Actualización mensual de precios, fotos y productos'
    ],
    notIncluded: [
      'Más de 50 productos',
      'Pasarelas de pago online externas',
      'Sistemas con usuarios y contraseñas'
    ],
    whatsappMessage: 'Hola Dani, mi comercio no tiene página web y quiero el Plan 3 (Web con Catálogo) de $950.000 + $95.000/mes.'
  },
  {
    id: 'plan-4',
    number: 4,
    name: 'Web Pro con Pedidos a WhatsApp',
    setupPrice: 1250000,
    monthlyPrice: 125000,
    tag: 'PEDIDOS DIRECTOS',
    idealFor: 'Negocios que no tienen web y desean recibir pedidos armados con carrito directamente en su WhatsApp.',
    features: [
      'Entrega garantizada en 24 horas',
      'Catálogo completo hasta 50 productos con buscador en vivo',
      'Carrito de cotización y pedidos directos a tu WhatsApp',
      'Tarjetas NFC inteligentes físicas con código QR',
      'Hosting pro, dominio personalizado y certificado SSL',
      'Mantenimiento técnico y soporte continuo'
    ],
    notIncluded: [
      'Ecommerce con cobro automático con tarjeta de crédito',
      'Inicios de sesión o paneles complejos',
      'Bases de datos relacionales externas'
    ],
    whatsappMessage: 'Hola Dani, no tengo página web y quiero el Plan 4 (Web Pro con Pedidos a WhatsApp) de $1.250.000 + $125.000/mes.'
  }
];

export const getInitialPortfolio = (): PortfolioItem[] => [
  {
    name: 'Impacto Burger',
    clientType: 'Restaurante / Comida Rápida',
    deliveryTime: '24 horas',
    url: 'https://impactoburger.surge.sh',
    description: 'De no tener presencia web a contar con un menú digital interactivo para mesas con tarjetas NFC y QR.',
    tags: ['Menú Digital', 'NFC y QR', 'Sin Web Previa'],
    accentColor: '#F59E0B'
  },
  {
    name: 'NexPlay Colombia',
    clientType: 'Comercio de Videojuegos',
    deliveryTime: '24 horas',
    url: 'https://nexplaycol.online',
    description: 'Negocio local que no contaba con sitio web y ahora recibe pedidos organizados directo a WhatsApp.',
    tags: ['Catálogo', 'Pedidos WhatsApp', 'Presencia Digital'],
    accentColor: '#8B5CF6'
  },
  {
    name: 'Gave Propiedades',
    clientType: 'Inmobiliaria y Servicios',
    deliveryTime: '24 horas',
    url: 'https://gave-propiedades.surge.sh',
    description: 'Empresa sin página web que modernizó su captación de clientes con catálogo de inmuebles y filtros.',
    tags: ['Inmuebles', 'Contacto Directo', 'Digitalización'],
    accentColor: '#0EA5E9'
  }
];

export const FAQS = [
  {
    question: '¿Por qué contratar una página web si mi negocio o comercio nunca ha tenido una?',
    answer: 'Porque hoy el 85% de los clientes buscan en Google o escanean un QR antes de comprar. Sin sitio web, tu negocio pierde credibilidad y clientes frente a competidores que sí están digitalizados.'
  },
  {
    question: '¿Cómo es posible entregar la página en solo 24 horas?',
    answer: 'Nuestra arquitectura técnica ya está completamente optimizada y probada. Nos envías los datos básicos de tu negocio y en 24 horas tu sitio web queda publicado y funcionando.'
  },
  {
    question: '¿Qué cubre la cuota mensual de mantenimiento?',
    answer: 'Cubre el hosting de velocidad, la renovación del dominio, certificado de seguridad SSL, soporte técnico y todos los cambios que necesites en precios, teléfonos, direcciones, fotos y datos de tu comercio.'
  },
  {
    question: '¿Recibo notificaciones por correo de los clientes que me escriben?',
    answer: 'Sí. Cada vez que un visitante completa el formulario para contactarte por WhatsApp, recibes inmediatamente una notificación en laspaginasdedani@gmail.com con el nombre, teléfono y plan de interés del cliente.'
  },
  {
    question: '¿Cómo funcionan las tarjetas NFC con código QR?',
    answer: 'Recibes tarjetas físicas para tu local o uso personal. Al acercar la tarjeta al smartphone del cliente o escanear el QR, abre al instante tu página web o menú sin instalar aplicaciones.'
  },
  {
    question: '¿Qué ocurre si no realizo el pago de la mensualidad?',
    answer: 'El servicio se pausa de manera temporal hasta que regularices la mensualidad, garantizando la protección de tus archivos e información.'
  },
  {
    question: '¿Hacen tiendas con pagos automáticos con tarjeta o bases de datos complejas?',
    answer: 'No. Nos enfocamos exclusivamente en webs rápidas de alta conversión que redirigen ventas directas a tu WhatsApp o contacto, eliminando costos y complejidades de pasarelas de pago o registros de usuario.'
  }
];

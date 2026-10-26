import type { PricingPlan, PortfolioItem } from '../types';

export const getInitialPlans = (): PricingPlan[] => [
  {
    id: 'plan-1',
    number: 1,
    name: 'Landing Page',
    setupPrice: 550000,
    monthlyPrice: 55000,
    idealFor: 'Información básica de contacto y servicios en una sola pantalla.',
    features: [
      'Entrega en 24 horas',
      'One-Page informativa',
      'Hosting y dominio incluidos',
      '1 Tarjeta NFC física con código QR',
      'Cambios de textos, fotos y teléfonos',
      'Certificado SSL'
    ],
    notIncluded: [
      'Animaciones',
      'Múltiples páginas',
      'Catálogo de productos',
      'Pagos en línea o bases de datos'
    ],
    whatsappMessage: 'Hola Dani, quiero el Plan 1 (Landing Page) de $550.000 y $55.000 mensual.'
  },
  {
    id: 'plan-2',
    number: 2,
    name: 'Landing Animada',
    setupPrice: 750000,
    monthlyPrice: 75000,
    idealFor: 'Información con animación y enlace directo a WhatsApp.',
    features: [
      'Entrega en 24 horas',
      'Transiciones visuales',
      'Botón directo a WhatsApp',
      'Hosting y dominio incluidos',
      '1 Tarjeta NFC física con código QR',
      'Cambios de datos y fotos'
    ],
    notIncluded: [
      'Catálogo de productos',
      'Pagos en línea',
      'Bases de datos'
    ],
    whatsappMessage: 'Hola Dani, quiero el Plan 2 (Landing Animada) de $750.000 y $75.000 mensual.'
  },
  {
    id: 'plan-3',
    number: 3,
    name: 'Web con Catálogo',
    setupPrice: 950000,
    monthlyPrice: 95000,
    highlight: true,
    tag: 'MÁS ELEGIDO',
    idealFor: 'Restaurantes, comercio o servicios con hasta 50 productos.',
    features: [
      'Entrega en 24 horas',
      '1 o varias páginas',
      'Menú o catálogo de hasta 50 productos',
      'Tarjetas NFC impresas con QR',
      'Hosting y dominio incluidos',
      'Actualización de precios y productos'
    ],
    notIncluded: [
      'Más de 50 productos',
      'Pasarelas de pago online',
      'Bases de datos externas'
    ],
    whatsappMessage: 'Hola Dani, quiero el Plan 3 (Web con Catálogo) de $950.000 y $95.000 mensual.'
  },
  {
    id: 'plan-4',
    number: 4,
    name: 'Web Pro con Funciones Extra',
    setupPrice: 1250000,
    monthlyPrice: 125000,
    tag: 'PEDIDOS WHATSAPP',
    idealFor: 'Negocios que toman pedidos directos a WhatsApp desde la web.',
    features: [
      'Entrega en 24 horas',
      'Menú o catálogo de hasta 50 productos',
      'Hasta 2 funciones extra (carrito de pedidos a WhatsApp)',
      'Tarjetas NFC impresas con QR',
      'Hosting y dominio incluidos',
      'Mantenimiento mensual'
    ],
    notIncluded: [
      'Ecommerce con pasarelas de pago',
      'Usuarios o contraseñas',
      'Bases de datos complejas'
    ],
    whatsappMessage: 'Hola Dani, quiero el Plan 4 (Web Pro con Pedidos a WhatsApp) de $1.250.000 y $125.000 mensual.'
  }
];

export const getInitialPortfolio = (): PortfolioItem[] => [
  {
    name: 'Impacto Burger',
    clientType: 'Restaurante',
    deliveryTime: '24 horas',
    url: 'https://impactoburger.surge.sh',
    description: 'Menú digital para mesas con tarjetas NFC y escaneo QR.',
    tags: ['Menú Digital', 'NFC y QR'],
    accentColor: '#F59E0B'
  },
  {
    name: 'NexPlay Colombia',
    clientType: 'Videojuegos y Tecnología',
    deliveryTime: '24 horas',
    url: 'https://nexplaycol.online',
    description: 'Catálogo de consolas y videojuegos con pedidos directos a WhatsApp.',
    tags: ['Catálogo', 'Pedidos WhatsApp'],
    accentColor: '#8B5CF6'
  },
  {
    name: 'Gave Propiedades',
    clientType: 'Bienes Raíces',
    deliveryTime: '24 horas',
    url: 'https://gave-propiedades.surge.sh',
    description: 'Listado de inmuebles con filtros y contacto con asesores.',
    tags: ['Inmuebles', 'Filtros'],
    accentColor: '#0EA5E9'
  }
];

export const FAQS = [
  {
    question: '¿Por qué la entrega es en 24 horas?',
    answer: 'La estructura y la configuración técnica ya están resueltas. Solo se cargan tus datos, fotos y productos acordados.'
  },
  {
    question: '¿Qué cubre la cuota mensual?',
    answer: 'Hosting, dominio, certificado de seguridad y cambios de precios, productos, fotos, teléfonos y direcciones. No cubre rediseños completos ni funciones nuevas.'
  },
  {
    question: '¿Qué pasa si no pago la mensualidad?',
    answer: 'La página se suspende hasta que registres el pago.'
  },
  {
    question: '¿Qué ocurre al terminar el año?',
    answer: 'Renuevas por otro año o terminas el servicio y te entregamos los archivos de código.'
  },
  {
    question: '¿Cómo funcionan las tarjetas NFC?',
    answer: 'Acercas la tarjeta al teléfono del cliente o este escanea el QR. Abre de inmediato la web, el menú o el formulario de reseñas de Google.'
  },
  {
    question: '¿Hacen tiendas con pagos online o bases de datos?',
    answer: 'No. No se hacen pasarelas de pago, registros de usuario ni bases de datos.'
  }
];

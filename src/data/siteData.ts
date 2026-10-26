import type { PricingPlan, PortfolioItem } from '../types';

export const getInitialPlans = (): PricingPlan[] => [
  {
    id: 'plan-1',
    number: 1,
    name: 'Landing Page Esencial',
    setupPrice: 550000,
    monthlyPrice: 55000,
    idealFor: 'Negocios que necesitan presencia digital inmediata y contacto directo sin rodeos.',
    features: [
      'Entrega garantizada en 24 Horas',
      'Estructura One-Page informativa de alta velocidad',
      'Hosting de alta disponibilidad y dominio gestionado',
      'Adaptada 100% a celulares y computadores',
      'Tarjeta NFC inteligente física con código QR incluida',
      'Mantenimiento mensual incluido (cambio de datos, fotos y precios)',
      'Certificado SSL seguro HTTPS incluido'
    ],
    notIncluded: [
      'Animaciones complejas o micro-interacciones',
      'Múltiples páginas o catálogos extensos',
      'Pasarela de pagos en línea o carrito',
      'Bases de datos o sistemas de usuarios'
    ],
    whatsappMessage: 'Hola Dani, me interesa contratar el Plan 1 (Landing Page Esencial) de $550.000 + $55.000/mes. Quiero tener mi web lista en 24 horas.'
  },
  {
    id: 'plan-2',
    number: 2,
    name: 'Landing Page Animada',
    setupPrice: 750000,
    monthlyPrice: 75000,
    idealFor: 'Marcas y profesionales que buscan captar atención con dinamismo visual y conversión directa a WhatsApp.',
    features: [
      'Entrega garantizada en 24 Horas',
      'Diseño visual dinámico con animaciones sutiles y micro-interacciones',
      'Botón interactivo y flotante para WhatsApp con prellenado de mensaje',
      'Hosting de alto rendimiento y dominio gestionado',
      'Tarjeta NFC inteligente física con código QR para tu local o visitas',
      'Mantenimiento mensual incluido (actualizaciones de precios y fotos)',
      'Optimización SEO local y marcado Schema profesional'
    ],
    notIncluded: [
      'Catálogo amplio de más de 10 productos',
      'Pasarela de cobros en línea',
      'Bases de datos complejas',
      'Sistemas de usuario o intranet'
    ],
    whatsappMessage: 'Hola Dani, quiero solicitar el Plan 2 (Landing Page Animada) de $750.000 + $75.000/mes. Me gustaría empezar ya para tenerla mañana.'
  },
  {
    id: 'plan-3',
    number: 3,
    name: 'Web Interactiva con Catálogo',
    setupPrice: 950000,
    monthlyPrice: 95000,
    highlight: true,
    tag: 'MÁS POPULAR',
    idealFor: 'Restaurantes, gastrobares, marcas de moda o servicios con portafolio o menú de hasta 50 productos.',
    features: [
      'Entrega garantizada en 24 Horas',
      '1 o varias páginas estructuradas según tu necesidad',
      'Menú o catálogo interactivo de hasta 50 productos con filtros',
      'Pack de tarjetas NFC inteligentes impresas con QR para mesas o clientes',
      'Hosting, dominio y mantenimiento técnico mensual asegurado',
      'Soporte mensual: agregar o quitar productos, cambiar fotos y precios',
      'Diseño interactivo ágil y ultra veloz'
    ],
    notIncluded: [
      'Catálogos superiores a 50 referencias',
      'Pasarela de pagos directos tipo e-commerce',
      'Bases de datos conectadas a ERPs externos',
      'Rediseños estructurales completos en la mensualidad'
    ],
    whatsappMessage: 'Hola Dani, quiero contratar el Plan 3 (Web Interactiva con Catálogo) de $950.000 + $95.000/mes para mi negocio.'
  },
  {
    id: 'plan-4',
    number: 4,
    name: 'Web Interactiva Pro + Extras',
    setupPrice: 1250000,
    monthlyPrice: 125000,
    tag: 'MÁXIMA CONVERSIÓN',
    idealFor: 'Negocios comerciales que quieren pedidos automáticos por WhatsApp y funcionalidades extra.',
    features: [
      'Entrega garantizada en 24 Horas',
      'Incluye menú o catálogo de productos interactivo (hasta 50 ítems)',
      'Hasta 2 funcionalidades a medida (ej. Carrito interactivo que envía el pedido desglosado a WhatsApp)',
      'Calculadora / cotizador de pedidos en tiempo real',
      'Pack premium de tarjetas NFC impresas con QR para interacción presencial',
      'Hosting cloud de alta velocidad y dominio gestionado',
      'Mantenimiento continuo y cambios prioritarios mes a mes'
    ],
    notIncluded: [
      'Plataformas complejas de e-commerce transaccional con pasarelas bancarias',
      'Bases de datos con login de usuarios o membresías',
      'Más de 50 productos en catálogo',
      'Desarrollo de software a medida fuera de las 2 funcionalidades'
    ],
    whatsappMessage: 'Hola Dani, quiero el Plan 4 (Web Interactiva Pro con Carrito a WhatsApp) de $1.250.000 + $125.000/mes. ¿Cuándo arrancamos?'
  }
];

export const getInitialPortfolio = (): PortfolioItem[] => [
  {
    name: 'NexPlay Colombia',
    clientType: 'Gamer & Entretenimiento Digital',
    deliveryTime: '24 Horas',
    url: 'https://nexplaycol.online',
    description: 'Plataforma con identidad dinámica, catálogo interactivo de juegos y pedidos directos a WhatsApp para la comunidad gamer en Colombia.',
    tags: ['Web Interactiva', 'Catálogo Gamer', 'Pedidos WhatsApp'],
    accentColor: '#8B5CF6'
  },
  {
    name: 'Gave Propiedades',
    clientType: 'Inmobiliaria & Bienes Raíces',
    deliveryTime: '24 Horas',
    url: 'https://gave-propiedades.surge.sh',
    description: 'Catálogo inmobiliario corporativo y rápido con visualización limpia de inmuebles, filtro de propiedades y contacto express con asesores.',
    tags: ['Inmobiliaria', 'Bento Grid', 'Captación B2B'],
    accentColor: '#0EA5E9'
  },
  {
    name: 'Impacto Burger',
    clientType: 'Gastronomía & Restaurante',
    deliveryTime: '24 Horas',
    url: 'https://impactoburger.surge.sh',
    description: 'Menú digital interactivo con escaneo de código QR en mesa y tarjetas NFC para fidelización y reseñas automáticas de clientes.',
    tags: ['Menú Digital', 'Tarjetas NFC / QR', 'Gastrobar'],
    accentColor: '#F59E0B'
  }
];

export const FAQS = [
  {
    question: '¿Por qué la entrega es en solo 24 horas?',
    answer: 'Porque eliminamos los meses de reuniones burocráticas y el código innecesario. Diseñamos con un sistema ágil y probado enfocado en ventas, permitiéndonos maquetar, afinar y publicar tu web y dejarla en línea el mismo día.'
  },
  {
    question: '¿Por qué el precio es mucho más accesible que una agencia tradicional?',
    answer: 'Porque aplicamos un modelo de servicio gestionado con membresía anual obligatoria. Nosotros nos encargamos del hosting de alto rendimiento, del dominio, de la seguridad y del mantenimiento. Tú no tienes que lidiar con paneles técnicos ni pagar miles de dólares por adelantado.'
  },
  {
    question: '¿Qué cubre exactamente la cuota mensual de mantenimiento?',
    answer: 'La mensualidad cubre el hosting de alta velocidad, certificado SSL, actualizaciones técnicas de seguridad y mantenimientos comerciales cotidianos: cambiar números de teléfono, direcciones, añadir o actualizar fotos, modificar productos y ajustar precios. NO cubre rediseños completos, ecommerce transaccional ni creación de videos o contenidos desde cero.'
  },
  {
    question: '¿Cómo funcionan las tarjetas NFC con código QR?',
    answer: 'Te entregamos tarjetas inteligentes físicas programadas. Cuando un cliente acerca su teléfono (NFC) o escanea el código QR impreso, abre instantáneamente tu página web, tu menú digital o la pantalla para dejarte una reseña de 5 estrellas en Google.'
  },
  {
    question: '¿Qué sucede si un mes no se registra el pago?',
    answer: 'El servicio está supeditado a un pago mensual continuo durante el año. En caso de no registrarse el pago en la fecha acordada, la página se suspende temporalmente hasta su regularización.'
  },
  {
    question: '¿Qué pasa al cabo del primer año de servicio?',
    answer: 'Tendrás dos opciones transparentes: renovar tu membresía anual para seguir disfrutando del hosting y mantenimiento continuo, o bien finalizar el servicio y recibir el paquete con el código fuente de tu página web.'
  },
  {
    question: '¿Hacen tiendas virtuales con pasarelas de pago o bases de datos complejas?',
    answer: 'No. Somos honestos y transparentes con nuestra especialidad: webs ágiles y catálogos de venta de hasta 50 productos con cierre de pedidos por WhatsApp. No hacemos e-commerce con carrito de pagos bancarios, ni sistemas con bases de datos complejas ni intranets.'
  }
];

export type PageRoute = 'home' | 'privacy' | 'terms' | 'cookies' | 'thank-you' | '404';

export interface ConsentRecord {
  id: string;
  timestamp: string;
  isoDate: string;
  termsAccepted: boolean;
  privacyAccepted: boolean;
  method: string;
  userAgent: string;
  clientName?: string;
  clientPhone?: string;
  serviceSelected?: string;
}

export interface PricingPlan {
  id: string;
  number: number;
  name: string;
  setupPrice: number;
  monthlyPrice: number;
  highlight?: boolean;
  tag?: string;
  idealFor: string;
  features: string[];
  notIncluded: string[];
  whatsappMessage: string;
}

export interface PortfolioItem {
  name: string;
  clientType: string;
  deliveryTime: string;
  url: string;
  description: string;
  tags: string[];
  accentColor: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  openGraph?: {
    title?: string;
    description?: string;
    type?: 'website' | 'article' | 'product';
    image?: string;
    url?: string;
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    title?: string;
    description?: string;
    image?: string;
    creator?: string;
  };
  structuredData?: any;
}

export const defaultSEO: SEOConfig = {
  title: "SuaNuvem - Provedor de Cloud Computing Brasileiro",
  description: "Soluções completas em cloud computing com infraestrutura nacional. Hospedagem, servidores virtuais, backup e segurança de dados com suporte 24/7.",
  keywords: [
    "cloud computing",
    "provedor cloud brasil",
    "hospedagem cloud",
    "servidor virtual",
    "infraestrutura cloud",
    "backup cloud",
    "segurança dados",
    "cloud nacional"
  ],
  openGraph: {
    type: 'website',
    title: "SuaNuvem - Provedor de Cloud Computing Brasileiro",
    description: "Infraestrutura cloud nacional com alta disponibilidade, segurança e suporte especializado 24/7.",
    image: "/og-image.jpg",
    url: "https://suanuvem.io"
  },
  twitter: {
    card: 'summary_large_image',
    title: "SuaNuvem - Cloud Computing Nacional",
    description: "Infraestrutura cloud brasileira com alta performance e segurança.",
    image: "/twitter-image.jpg",
    creator: "@suanuvem"
  }
};

export const companyStructuredData = {
  "@context": "https://schema.org",
  "@type": "TechnologyCompany",
  "name": "SuaNuvem",
  "alternateName": "SuaNuvem Cloud Computing",
  "description": "Provedor brasileiro de soluções em cloud computing, oferecendo infraestrutura, hospedagem e serviços gerenciados com foco em segurança e performance.",
  "url": "https://suanuvem.io",
  "logo": {
    "@type": "ImageObject",
    "url": "https://suanuvem.io/logo.png",
    "width": 200,
    "height": 60
  },
  "foundingDate": "2020",
  "founder": {
    "@type": "Person",
    "name": "Nome do Fundador"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Exemplo, 123",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "01000-000",
    "addressCountry": "BR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-11-1234-5678",
    "contactType": "customer service",
    "availableLanguage": ["Portuguese", "English"],
    "areaServed": "BR"
  },
  "sameAs": [
    "https://linkedin.com/company/suanuvem",
    "https://twitter.com/suanuvem",
    "https://github.com/suanuvem"
  ],
  "offers": {
    "@type": "AggregateOffer",
    "offerCount": "10",
    "lowPrice": "29.90",
    "highPrice": "999.90",
    "priceCurrency": "BRL",
    "category": "Cloud Computing Services"
  },
  "serviceType": [
    "Cloud Computing",
    "Web Hosting",
    "Virtual Private Servers",
    "Backup Services",
    "Content Delivery Network",
    "Database as a Service"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Brazil"
  }
}; 
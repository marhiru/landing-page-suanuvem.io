// Gerador de schemas structured data para diferentes tipos de páginas

export interface ServiceSchema {
  name: string;
  description: string;
  provider: string;
  areaServed: string;
  availableChannel: {
    url: string;
    name: string;
  };
  offers: {
    price: string;
    priceCurrency: string;
    description: string;
  }[];
}

export interface ArticleSchema {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image: string;
  url: string;
}

export interface FAQSchema {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export function generateServiceSchema(service: ServiceSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": service.provider,
      "url": "https://suanuvem.io"
    },
    "areaServed": {
      "@type": "Country", 
      "name": service.areaServed
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": service.availableChannel.url,
      "serviceName": service.availableChannel.name
    },
    "offers": service.offers.map(offer => ({
      "@type": "Offer",
      "price": offer.price,
      "priceCurrency": offer.priceCurrency,
      "description": offer.description,
      "seller": {
        "@type": "Organization",
        "name": "SuaNuvem"
      }
    }))
  };
}

export function generateArticleSchema(article: ArticleSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.headline,
    "description": article.description,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization", 
      "name": "SuaNuvem",
      "logo": {
        "@type": "ImageObject",
        "url": "https://suanuvem.io/logo.png"
      }
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "image": {
      "@type": "ImageObject",
      "url": article.image
    },
    "url": article.url,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    }
  };
}

export function generateFAQSchema(faq: FAQSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.questions.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SuaNuvem",
    "url": "https://suanuvem.io",
    "description": "Provedor brasileiro de cloud computing com infraestrutura nacional",
    "publisher": {
      "@type": "Organization",
      "name": "SuaNuvem"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://suanuvem.io/busca?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
}

// Schemas pré-definidos para SuaNuvem
export const suaNuvemSchemas = {
  cloudHosting: generateServiceSchema({
    name: "Hospedagem Cloud",
    description: "Hospedagem em nuvem com alta disponibilidade e performance otimizada",
    provider: "SuaNuvem",
    areaServed: "Brazil",
    availableChannel: {
      url: "https://suanuvem.io/hospedagem-cloud",
      name: "Hospedagem Cloud SuaNuvem"
    },
    offers: [
      {
        price: "29.90",
        priceCurrency: "BRL",
        description: "Plano Básico - 1GB RAM, 10GB SSD"
      },
      {
        price: "99.90",
        priceCurrency: "BRL", 
        description: "Plano Profissional - 4GB RAM, 40GB SSD"
      }
    ]
  }),

  virtualServers: generateServiceSchema({
    name: "Servidores Virtuais VPS",
    description: "Servidores virtuais privados com recursos dedicados e controle total",
    provider: "SuaNuvem",
    areaServed: "Brazil",
    availableChannel: {
      url: "https://suanuvem.io/servidores-virtuais",
      name: "VPS SuaNuvem"
    },
    offers: [
      {
        price: "59.90",
        priceCurrency: "BRL",
        description: "VPS Starter - 2GB RAM, 20GB SSD"
      },
      {
        price: "199.90",
        priceCurrency: "BRL",
        description: "VPS Premium - 8GB RAM, 80GB SSD"
      }
    ]
  }),

  website: generateWebsiteSchema()
}; 
import { useMemo } from 'react';

interface ProductStructuredDataProps {
  product: {
    name: string;
    description: string;
    price: number;
    currency: string;
    availability: 'InStock' | 'OutOfStock' | 'PreOrder';
    sku: string;
    brand: string;
    category: string;
    image?: string;
    rating?: {
      ratingValue: number;
      reviewCount: number;
    };
  };
}

export function ProductStructuredData({ product }: ProductStructuredDataProps) {
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    "category": product.category,
    "sku": product.sku,
    "image": product.image,
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": product.currency,
      "availability": `https://schema.org/${product.availability}`,
      "seller": {
        "@type": "Organization",
        "name": "SuaNuvem"
      },
      "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    },
    "aggregateRating": product.rating ? {
      "@type": "AggregateRating",
      "ratingValue": product.rating.ratingValue,
      "reviewCount": product.rating.reviewCount,
      "bestRating": 5,
      "worstRating": 1
    } : undefined
  }), [product]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
} 
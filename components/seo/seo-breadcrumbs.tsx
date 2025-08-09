import { useMemo } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOBreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function SEOBreadcrumbs({ items, className = "" }: SEOBreadcrumbsProps) {
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://suanuvem.io${item.url}`
    }))
  }), [items]);

  return (
    <>
      {/* Structured Data para breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      {/* Breadcrumbs visuais */}
      <nav 
        aria-label="Breadcrumb" 
        className={`flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 ${className}`}
      >
        {items.map((item, index) => (
          <div key={item.url} className="flex items-center">
            {index > 0 && (
              <ChevronRight 
                className="w-4 h-4 mx-2 text-gray-400" 
                aria-hidden="true" 
              />
            )}
            {index === items.length - 1 ? (
              <span 
                className="font-medium text-gray-900 dark:text-gray-100"
                aria-current="page"
              >
                {item.name}
              </span>
            ) : (
              <Link 
                href={item.url}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  );
} 
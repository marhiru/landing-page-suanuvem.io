import Head from 'next/head';
import { SEOConfig } from '@/lib/seo/seo-config';

interface SEOHeadProps {
  config: SEOConfig;
}

export function SEOHead({ config }: SEOHeadProps) {
  const {
    title,
    description,
    keywords,
    canonical,
    noindex,
    nofollow,
    openGraph,
    twitter,
    structuredData
  } = config;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Robots */}
      <meta 
        name="robots" 
        content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} 
      />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Viewport and Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Performance and Core Web Vitals Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Open Graph / Facebook */}
      {openGraph && (
        <>
          <meta property="og:type" content={openGraph.type || 'website'} />
          <meta property="og:title" content={openGraph.title || title} />
          <meta property="og:description" content={openGraph.description || description} />
          {openGraph.image && <meta property="og:image" content={openGraph.image} />}
          {openGraph.url && <meta property="og:url" content={openGraph.url} />}
          <meta property="og:site_name" content="SuaNuvem" />
          <meta property="og:locale" content="pt_BR" />
        </>
      )}
      
      {/* Twitter */}
      {twitter && (
        <>
          <meta name="twitter:card" content={twitter.card || 'summary_large_image'} />
          <meta name="twitter:title" content={twitter.title || title} />
          <meta name="twitter:description" content={twitter.description || description} />
          {twitter.image && <meta name="twitter:image" content={twitter.image} />}
          {twitter.creator && <meta name="twitter:creator" content={twitter.creator} />}
          <meta name="twitter:site" content="@suanuvem" />
        </>
      )}
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Theme and PWA */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
    </Head>
  );
} 
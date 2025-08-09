import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap', // Otimização para Core Web Vitals
});

export const metadata: Metadata = {
  metadataBase: new URL('https://suanuvem.io'),
  title: {
    default: "SuaNuvem - Provedor de Cloud provider",
    template: "%s | SuaNuvem Cloud"
  },
  description: "Soluções completas em cloud computing com infraestrutura nacional. Hospedagem, servidores virtuais, backup e segurança de dados com suporte 24/7 em português.",
  keywords: [
    "cloud computing brasil",
    "provedor cloud nacional", 
    "hospedagem cloud",
    "servidor virtual vps",
    "infraestrutura cloud",
    "backup cloud seguro",
    "database cloud",
    "kubernetes brasil"
  ],
  authors: [{ name: "SuaNuvem" }],
  creator: "SuaNuvem",
  publisher: "SuaNuvem",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://suanuvem.io',
    siteName: 'SuaNuvem',
    title: 'SuaNuvem - Provedor de Cloud provider',
    description: 'Infraestrutura cloud nacional com alta disponibilidade, segurança avançada e suporte especializado 24/7. Hospedagem, VPS e backup.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SuaNuvem - Cloud provider',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SuaNuvem - Cloud prodiver',
    description: 'Infraestrutura cloud com alta performance, segurança e suporte em português.',
    creator: '@suanuvem',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'seu-google-verification-code',
    yandex: 'seu-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth w-full">
      <head>
        {/* Structured Data para a empresa */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Paulista, 1000",
                "addressLocality": "São Paulo",
                "addressRegion": "SP", 
                "postalCode": "01310-100",
                "addressCountry": "BR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-11-3000-5000",
                "contactType": "customer service",
                "availableLanguage": ["Portuguese", "English"],
                "areaServed": "BR",
                "hoursAvailable": "24/7"
              },
              "sameAs": [
                "https://linkedin.com/company/suanuvem",
                "https://twitter.com/suanuvem",
                "https://github.com/suanuvem"
              ],
              "serviceType": [
                "Cloud Computing",
                "Web Hosting", 
                "Virtual Private Servers",
                "Backup Services",
                "Database as a Service",
                "Kubernetes Services"
              ],
              "areaServed": {
                "@type": "Country",
                "name": "Brazil"
              },
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Cloud Computing Services",
                  "description": "Soluções completas de computação em nuvem"
                },
                "priceCurrency": "BRL",
                "priceRange": "R$ 29,90 - R$ 9.999,90"
              }
            })
          }}
        />
        
        {/* Performance Hints para Core Web Vitals */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* App Icons otimizados */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
      </head>
      <body className={`${inter.variable} antialiased overflow-auto w-full dark min-h-screen`}>
        {children}
      </body>
    </html>
  );
}

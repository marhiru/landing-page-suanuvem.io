import { useRouter } from 'next/router';
import { SEOConfig, defaultSEO } from '@/lib/seo/seo-config';

export function useSEO(pageConfig?: Partial<SEOConfig>): SEOConfig {
  const router = useRouter();
  
  const baseUrl = 'https://suanuvem.io';
  const currentUrl = `${baseUrl}${router.asPath}`;
  
  const seoConfig: SEOConfig = {
    ...defaultSEO,
    ...pageConfig,
    canonical: pageConfig?.canonical || currentUrl,
    openGraph: {
      ...defaultSEO.openGraph,
      ...pageConfig?.openGraph,
      url: pageConfig?.openGraph?.url || currentUrl,
    },
    twitter: {
      ...defaultSEO.twitter,
      ...pageConfig?.twitter,
    }
  };
  
  return seoConfig;
} 
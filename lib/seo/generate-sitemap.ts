// Utilitário para gerar sitemap dinamicamente (para uso em build time)
export interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  images?: Array<{
    loc: string;
    title?: string;
    caption?: string;
  }>;
}

export function generateSitemap(entries: SitemapEntry[], baseUrl: string = 'https://suanuvem.io'): string {
  const sitemapHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

  const sitemapEntries = entries.map(entry => {
    const images = entry.images?.map(img => `
    <image:image>
      <image:loc>${img.loc}</image:loc>
      ${img.title ? `<image:title>${img.title}</image:title>` : ''}
      ${img.caption ? `<image:caption>${img.caption}</image:caption>` : ''}
    </image:image>`).join('') || '';

    return `
  <url>
    <loc>${baseUrl}${entry.url}</loc>
    ${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ''}
    ${entry.changefreq ? `<changefreq>${entry.changefreq}</changefreq>` : ''}
    ${entry.priority ? `<priority>${entry.priority}</priority>` : ''}${images}
  </url>`;
  }).join('');

  return `${sitemapHeader}${sitemapEntries}
</urlset>`;
}

// Exemplo de uso para gerar sitemap das páginas da SuaNuvem
export const suaNuvemSitemapEntries: SitemapEntry[] = [
  {
    url: '/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: 1.0,
    images: [{
      loc: 'https://suanuvem.io/og-image.jpg',
      title: 'SuaNuvem - Cloud Computing Brasileiro',
      caption: 'Provedor brasileiro de soluções em cloud computing'
    }]
  },
  {
    url: '/hospedagem-cloud',
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/servidores-virtuais',
    changefreq: 'weekly', 
    priority: 0.9
  },
  {
    url: '/backup-cloud',
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: '/sobre',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: '/contato',
    changefreq: 'monthly',
    priority: 0.6
  },
  {
    url: '/precos',
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: '/blog',
    changefreq: 'daily',
    priority: 0.7
  }
]; 
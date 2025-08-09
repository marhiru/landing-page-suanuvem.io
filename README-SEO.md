# Sistema SEO Completo - SuaNuvem

Este documento explica como usar o sistema de SEO implementado para a SuaNuvem, provedor brasileiro de cloud computing.

## 📁 Estrutura de Arquivos Criados

```
📦 Projeto SuaNuvem
├── 📂 lib/seo/
│   ├── 📄 seo-config.ts          # Configurações e tipos base
│   ├── 📄 generate-sitemap.ts    # Gerador de sitemap dinâmico
│   └── 📄 schema-generator.ts    # Gerador de structured data
├── 📂 components/seo/
│   ├── 📄 seo-head.tsx           # Componente de metadados
│   ├── 📄 seo-breadcrumbs.tsx   # Breadcrumbs com structured data
│   └── 📄 structured-data-products.tsx  # Schema para produtos
├── 📂 hooks/
│   └── 📄 use-seo.tsx            # Hook personalizado para SEO
├── 📂 public/
│   ├── 📄 robots.txt             # Configuração para crawlers
│   ├── 📄 sitemap.xml            # Mapa do site
│   └── 📄 site.webmanifest       # Manifest PWA
└── 📄 app/layout.tsx             # Layout otimizado com SEO
```

## 🚀 Como Usar

### 1. Configuração Básica (já implementada)

O arquivo `app/layout.tsx` já está configurado com:
- ✅ Metadados otimizados para cloud computing
- ✅ Open Graph e Twitter Cards
- ✅ Structured Data da empresa
- ✅ Performance hints para Core Web Vitals
- ✅ Idioma pt-BR
- ✅ Security headers

### 2. Usando SEO em Páginas Específicas

#### Para uma página de produto/serviço:

```tsx
// pages/hospedagem-cloud.tsx ou app/hospedagem-cloud/page.tsx
import { Metadata } from 'next';
import { SEOBreadcrumbs } from '@/components/seo/seo-breadcrumbs';
import { suaNuvemSchemas } from '@/lib/seo/schema-generator';

export const metadata: Metadata = {
  title: "Hospedagem Cloud - Infraestrutura Nacional",
  description: "Hospedagem em nuvem com alta disponibilidade, performance otimizada e suporte 24/7. Infraestrutura brasileira com SLA 99.9%.",
  keywords: ["hospedagem cloud", "hospedagem brasil", "cloud hosting nacional"],
};

export default function HostagemCloudPage() {
  const breadcrumbs = [
    { name: "Início", url: "/" },
    { name: "Serviços", url: "/servicos" },
    { name: "Hospedagem Cloud", url: "/hospedagem-cloud" }
  ];

  return (
    <div>
      {/* Structured data para o serviço */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(suaNuvemSchemas.cloudHosting)
        }}
      />
      
      {/* Breadcrumbs com SEO */}
      <SEOBreadcrumbs items={breadcrumbs} className="mb-6" />
      
      {/* Conteúdo da página */}
      <h1>Hospedagem Cloud Nacional</h1>
      {/* ... resto do conteúdo */}
    </div>
  );
}
```

#### Para um artigo de blog:

```tsx
// app/blog/[slug]/page.tsx
import { generateArticleSchema } from '@/lib/seo/schema-generator';

export default function BlogPostPage() {
  const articleSchema = generateArticleSchema({
    headline: "Como Escolher o Melhor Provedor de Cloud Computing",
    description: "Guia completo para escolher o provedor ideal...",
    author: "Equipe SuaNuvem",
    datePublished: "2025-01-16",
    image: "https://suanuvem.io/blog/cloud-guide.jpg",
    url: "https://suanuvem.io/blog/escolher-provedor-cloud"
  });

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema)
        }}
      />
      {/* Conteúdo do artigo */}
    </article>
  );
}
```

#### Para página de FAQ:

```tsx
// app/faq/page.tsx
import { generateFAQSchema } from '@/lib/seo/schema-generator';

export default function FAQPage() {
  const faqSchema = generateFAQSchema({
    questions: [
      {
        question: "Qual é o SLA da SuaNuvem?",
        answer: "Oferecemos SLA de 99.9% de uptime para todos os nossos serviços de cloud computing."
      },
      {
        question: "Os dados ficam em território brasileiro?",
        answer: "Sim, toda nossa infraestrutura está localizada no Brasil, garantindo conformidade com a LGPD."
      }
    ]
  });

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      {/* Conteúdo da FAQ */}
    </div>
  );
}
```

### 3. Configurações Importantes

#### Verificação nos Search Consoles:
Atualize os códigos de verificação em `app/layout.tsx`:
```tsx
verification: {
  google: 'seu-google-verification-code-aqui',
  yandex: 'seu-yandex-verification-code-aqui',
},
```

#### Imagens necessárias:
Crie estas imagens na pasta `public/`:
- 📸 `og-image.jpg` (1200x630px) - Para Open Graph
- 📸 `twitter-image.jpg` (1200x600px) - Para Twitter Cards
- 📸 `logo.png` (200x60px) - Logo da empresa
- 📸 `favicon.ico` - Favicon principal
- 📸 `apple-touch-icon.png` (180x180px)
- 📸 `favicon-32x32.png` e `favicon-16x16.png`
- 📸 `android-chrome-192x192.png` e `android-chrome-512x512.png`

## 🎯 Benefícios Implementados

### ✅ Core Web Vitals
- Font display: swap para melhor LCP
- Preconnect para recursos críticos
- DNS prefetch otimizado

### ✅ SEO Técnico
- Structured Data completo (Empresa, Serviços, FAQ, Artigos)
- Open Graph e Twitter Cards
- Breadcrumbs com schema
- Sitemap XML com imagens
- Robots.txt otimizado

### ✅ Performance
- Hints de performance para navegadores
- Memoização de schemas
- Lazy loading de structured data

### ✅ Acessibilidade
- Lang="pt-BR" 
- Meta viewport otimizado
- Breadcrumbs semânticos
- Security headers

## 📊 Monitoramento

Após a implementação, monitore:

1. **Google Search Console**
   - Rich results (structured data)
   - Core Web Vitals
   - Indexação do sitemap

2. **PageSpeed Insights**
   - Pontuação de performance
   - LCP, FID, CLS

3. **Ferramentas de Teste**
   - [Rich Results Test](https://search.google.com/test/rich-results)
   - [Structured Data Testing Tool](https://validator.schema.org/)

## 🔧 Customização

Para adicionar novos serviços, edite `lib/seo/schema-generator.ts`:

```tsx
export const suaNuvemSchemas = {
  // ... schemas existentes
  
  novoServico: generateServiceSchema({
    name: "Novo Serviço Cloud",
    description: "Descrição do novo serviço",
    provider: "SuaNuvem",
    areaServed: "Brazil",
    availableChannel: {
      url: "https://suanuvem.io/novo-servico",
      name: "Novo Serviço SuaNuvem"
    },
    offers: [
      {
        price: "49.90",
        priceCurrency: "BRL",
        description: "Plano básico do novo serviço"
      }
    ]
  })
};
```

## 🎉 Resultado Esperado

Com esta implementação, a SuaNuvem terá:
- 🎯 Melhor ranking no Google para termos relacionados a cloud computing Brasil
- 📈 Rich snippets nos resultados de busca
- 🚀 Core Web Vitals otimizados
- 🔍 Melhor indexação e crawling
- 📱 Experiência mobile otimizada
- 🇧🇷 Foco no mercado brasileiro de cloud

---

**Próximos passos:** Configurar Google Analytics, Search Console e começar a criar conteúdo otimizado para as keywords-alvo! 
"use client";

import React from "react";
import {
  Workflow,
  Shield,
  Cloud,
  Layers,
  Server,
  Settings,
  HardDrive,
  Zap,
} from "lucide-react";

export default function FeaturesBentoGrid() {
  return (
    <section id="features" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl w-full mx-4 font-bold mb-4">
            Infraestrutura que Funciona
            <br />
            Automatize. Implemente.{" "}
            <span className="text-3xl font-black text-transparent bg-gradient-to-b from-primary via-90% to-primary/30 bg-clip-text transform scale-105 inline-block">
              Cresça.
            </span>
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Automatize processos, migre com segurança
            e construa infraestrutura que cresce com você.
          </p>
        </div>

        {/* Bento Grid Layout - Otimizado para 1920x1080 */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
          {/* Linha 1: 6 + 6 = 12 */}
          {/* 1. Integração de Sistemas com N8N */}
          <div className="md:col-span-3 lg:col-span-6 p-8 bg-card rounded-xl border hover:shadow-lg transition-all">
            <Workflow className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-xl font-semibold mb-4">Integração de Sistemas com N8N</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Automatize processos e conecte suas ferramentas sem escrever uma linha de código. 
              Fluxos de trabalho inteligentes que integram seus sistemas, APIs e bancos de dados.
            </p>
          </div>

          {/* 2. Pentest (Em breve) */}
          <div className="md:col-span-3 lg:col-span-6 p-8 bg-card rounded-xl border hover:shadow-lg transition-all relative">
            <div className="absolute top-4 right-4">
              <span className="text-xs text-destructive bg-destructive/10 px-2 py-1 rounded-full">
                Em breve
              </span>
            </div>
            <Shield className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-xl font-semibold mb-4">Pentest</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Descubra vulnerabilidades antes que elas sejam exploradas. 
              Identificação de brechas de segurança com relatórios claros e recomendações acionáveis.
            </p>
          </div>

          {/* Linha 2: 4 + 4 + 4 = 12 */}
          {/* 3. Migração de Sistema para sua Nuvem */}
          <div className="md:col-span-2 lg:col-span-4 p-6 bg-card rounded-xl border hover:shadow-lg transition-all">
            <Cloud className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-3">Migração de Sistema para sua Nuvem</h3>
            <p className="text-muted-foreground text-sm">
              Transfira seus sistemas para a nuvem com zero dor de cabeça. 
              Da análise inicial à validação pós-implantação, garantindo alta disponibilidade.
            </p>
          </div>

          {/* 4. Consultoria de Arquitetura */}
          <div className="md:col-span-2 lg:col-span-4 p-6 bg-card rounded-xl border hover:shadow-lg transition-all">
            <Layers className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-3">Consultoria de Arquitetura</h3>
            <p className="text-muted-foreground text-sm">
              Projetamos arquiteturas escaláveis, seguras e resilientes sob medida. 
              Cloud pública, privada ou híbrida com ambiente robusto e de alto desempenho.
            </p>
          </div>

          {/* 5. Venda de VDS */}
          <div className="md:col-span-2 lg:col-span-4 p-6 bg-card rounded-xl border hover:shadow-lg transition-all">
            <Server className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-3">Venda de VDS</h3>
            <p className="text-muted-foreground text-sm">
              Servidores virtuais dedicados de alta performance com recursos personalizáveis. 
              Provisionamento rápido, suporte especializado e infraestrutura com alta disponibilidade.
            </p>
          </div>

          {/* Linha 3: 6 + 6 = 12 */}
          {/* 6. Consultoria DevOps */}
          <div className="md:col-span-3 lg:col-span-6 p-8 bg-card rounded-xl border hover:shadow-lg transition-all">
            <Settings className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-xl font-semibold mb-4">Consultoria DevOps</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Acelere seus ciclos de entrega com pipelines otimizados e CI/CD automatizado. 
              Reduz falhas em produção e promove cultura de colaboração entre dev e ops.
            </p>
          </div>

          {/* 7. Backups Georredundantes */}
          <div className="md:col-span-3 lg:col-span-6 p-8 bg-card rounded-xl border hover:shadow-lg transition-all">
            <HardDrive className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-xl font-semibold mb-4">Backups Georredundantes</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Garanta a continuidade do seu negócio com backups automáticos distribuídos geograficamente. 
              Armazenamento confiável, restauração rápida e políticas personalizadas.
            </p>
          </div>

          {/* Linha 4: 12 = 12 */}
          {/* 8. Soluções Personalizadas */}
          <div className="md:col-span-6 lg:col-span-12 p-10 bg-card rounded-xl border hover:shadow-lg transition-all">
            <Zap className="w-12 h-12 text-primary mb-8" />
            <h3 className="text-2xl font-semibold mb-6">Soluções Personalizadas</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Cada projeto é único. Desenvolvemos soluções sob medida que se adaptam 
              às suas necessidades específicas e objetivos de negócio. 
              Nossa abordagem flexível garante que cada solução seja perfeitamente alinhada 
              com sua estratégia e infraestrutura existente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

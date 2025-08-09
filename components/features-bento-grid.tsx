"use client";

import React from "react";
import {
  Workflow,
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
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="flex flex-col text-2xl font-semibold mb-3 sm:mb-4 leading-tight sm:leading-normal">
            Infraestrutura que Funciona. {" "}
            <span className="ml-2 text-transparent bg-gradient-to-br from-foreground via-95% to-primary/80 bg-clip-text transform scale-105 inline-block">
              Automatize. Implemente. Cresça.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto leading-tight sm:leading-relaxed break-normal hyphens-auto">
            Automatize processos, migre com segurança e construa infraestrutura
            que cresce com você.
          </p>
        </div>

        {/* Bento Grid Layout - Otimizado para 1920x1080 */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
          {/* Linha 1: 6 + 6 = 12 */}
          {/* 1. Integração de Sistemas com N8N */}
          <div className="md:col-span-3 lg:col-span-6 p-4 sm:p-8 bg-card rounded-xl border hover:shadow-lg transition-all">
            <Workflow className="size-6 text-primary mb-3 sm:mb-6" />
            <h3 className="text-base sm:text-base font-semibold mb-2 sm:mb-4">
              Integração de Sistemas com N8N
            </h3>
            <p className="text-sm sm:text-sm text-muted-foreground leading-tight sm:leading-relaxed break-normal hyphens-auto">
              Automatize processos e conecte suas ferramentas sem escrever uma
              linha de código. Fluxos de trabalho inteligentes que integram seus
              sistemas, APIs e bancos de dados.
            </p>
          </div>

          {/* 2. Soluções Personalizadas */}
          <div className="flex flex-col gap-3 sm:gap-4 md:col-span-3 lg:col-span-6 p-4 sm:p-8 bg-card rounded-xl border hover:shadow-lg transition-all">
            <Zap className="size-6 text-primary" />
            <h3 className="text-base sm:text-base font-semibold">
              Soluções Personalizadas
            </h3>
            <p className="text-sm sm:text-sm text-muted-foreground leading-tight sm:leading-relaxed break-normal hyphens-auto">
              Cada projeto é único. Desenvolvemos soluções sob medida que se
              adaptam às suas necessidades específicas e objetivos de negócio.
            </p>
          </div>

          {/* Linha 2: 4 + 4 + 4 = 12 */}
          {/* 3. Migração de Sistema para sua Nuvem */}
          <div className="flex flex-col gap-3 sm:gap-4 md:col-span-2 lg:col-span-4 p-4 sm:p-6 bg-card rounded-xl border hover:shadow-lg transition-all">
            <Cloud className="size-6 text-primary" />
            <h3 className="text-base sm:text-base font-semibold">
              Migração de Sistema para sua Nuvem
            </h3>
            <p className="text-sm sm:text-sm text-muted-foreground leading-tight sm:leading-relaxed break-normal hyphens-auto">
              Transfira seus sistemas para a nuvem com zero dor de cabeça. Da
              análise inicial à validação pós-implantação, garantindo alta
              disponibilidade.
            </p>
          </div>

          {/* 4. Consultoria de Arquitetura */}
          <div className="md:col-span-2 lg:col-span-4 p-4 sm:p-6 bg-card rounded-xl border hover:shadow-lg transition-all">
            <Layers className="size-6 text-primary mb-2 sm:mb-4" />
            <h3 className="text-base sm:text-base font-semibold mb-2 sm:mb-3">
              Consultoria de Arquitetura
            </h3>
            <p className="text-sm sm:text-sm text-muted-foreground leading-tight sm:leading-relaxed break-normal hyphens-auto">
              Projetamos arquiteturas escaláveis, seguras e resilientes sob
              medida. Cloud pública, privada ou híbrida com ambiente robusto e
              de alto desempenho.
            </p>
          </div>

          {/* 5. Venda de VDS */}
          <div className="md:col-span-2 lg:col-span-4 p-4 sm:p-6 bg-card rounded-xl border hover:shadow-lg transition-all">
            <Server className="size-6 text-primary mb-2 sm:mb-4" />
            <h3 className="text-base sm:text-base font-semibold mb-2 sm:mb-3">
              Venda de VDS
            </h3>
            <p className="text-sm sm:text-sm text-muted-foreground leading-tight sm:leading-relaxed break-normal hyphens-auto">
              Servidores virtuais dedicados de alta performance com recursos
              personalizáveis. Provisionamento rápido, suporte especializado e
              infraestrutura com alta disponibilidade.
            </p>
          </div>

          {/* Linha 3: 6 + 6 = 12 */}
          {/* 6. Consultoria DevOps */}
          <div className="md:col-span-3 lg:col-span-6 p-4 sm:p-8 bg-card rounded-xl border hover:shadow-lg transition-all">
            <Settings className="size-6 text-primary mb-3 sm:mb-6" />
            <h3 className="text-base sm:text-base font-semibold mb-2 sm:mb-4">
              Consultoria DevOps
            </h3>
            <p className="text-sm sm:text-sm text-muted-foreground leading-tight sm:leading-relaxed break-normal hyphens-auto">
              Acelere seus ciclos de entrega com pipelines otimizados e CI/CD
              automatizado. Reduz falhas em produção e promove cultura de
              colaboração entre dev e ops.
            </p>
          </div>

          {/* 7. Backups Georredundantes */}
          <div className="md:col-span-3 lg:col-span-6 p-4 sm:p-8 bg-card rounded-xl border hover:shadow-lg transition-all">
            <HardDrive className="size-6 text-primary mb-3 sm:mb-6" />
            <h3 className="text-base sm:text-base font-semibold mb-2 sm:mb-4">
              Backups Georredundantes
            </h3>
            <p className="text-sm sm:text-sm text-muted-foreground leading-tight sm:leading-relaxed break-normal hyphens-auto">
              Garanta a continuidade do seu negócio com backups automáticos
              distribuídos geograficamente. Armazenamento confiável, restauração
              rápida e políticas personalizadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

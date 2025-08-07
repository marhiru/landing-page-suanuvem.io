"use client";

import React from "react";
import {
  Workflow,
  Shield,
  Cloud,
  Layers,
  Server,
  Settings,
  Lock,
  HardDrive,
  Zap,
  ArrowRight,
  Database,
  GitBranch,
  Activity,
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

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* 1. Integração de Sistemas com N8N */}
          <div className="p-6 bg-card rounded-xl border hover:shadow-lg transition-all">
            <Workflow className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-3">Integração de Sistemas com N8N</h3>
            <p className="text-muted-foreground text-sm">
              Automatize processos e conecte suas ferramentas sem escrever uma linha de código. 
              Fluxos de trabalho inteligentes que integram seus sistemas, APIs e bancos de dados.
            </p>
          </div>

          {/* 2. Pentest (Em breve) */}
          <div className="p-6 bg-card rounded-xl border hover:shadow-lg transition-all relative">
            <div className="absolute top-4 right-4">
              <span className="text-xs text-destructive bg-destructive/10 px-2 py-1 rounded-full">
                Em breve
              </span>
            </div>
            <Shield className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-3">Pentest</h3>
            <p className="text-muted-foreground text-sm">
              Descubra vulnerabilidades antes que elas sejam exploradas. 
              Identificação de brechas de segurança com relatórios claros e recomendações acionáveis.
            </p>
          </div>

          {/* 3. Migração de Sistema para sua Nuvem */}
          <div className="p-6 bg-card rounded-xl border hover:shadow-lg transition-all">
            <Cloud className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-3">Migração de Sistema para sua Nuvem</h3>
            <p className="text-muted-foreground text-sm">
              Transfira seus sistemas para a nuvem com zero dor de cabeça. 
              Da análise inicial à validação pós-implantação, garantindo alta disponibilidade e performance.
            </p>
          </div>

          {/* 4. Consultoria de Arquitetura */}
          <div className="p-6 bg-card rounded-xl border hover:shadow-lg transition-all">
            <Layers className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-3">Consultoria de Arquitetura</h3>
            <p className="text-muted-foreground text-sm">
              Projetamos arquiteturas escaláveis, seguras e resilientes sob medida. 
              Cloud pública, privada ou híbrida com ambiente robusto e de alto desempenho.
            </p>
          </div>

          {/* 5. Venda de VDS */}
          <div className="p-6 bg-card rounded-xl border hover:shadow-lg transition-all">
            <Server className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-3">Venda de VDS</h3>
            <p className="text-muted-foreground text-sm">
              Servidores virtuais dedicados de alta performance com recursos personalizáveis. 
              Provisionamento rápido, suporte especializado e infraestrutura com alta disponibilidade.
            </p>
          </div>

          {/* 6. Consultoria DevOps */}
          <div className="p-6 bg-card rounded-xl border hover:shadow-lg transition-all">
            <Settings className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-3">Consultoria DevOps</h3>
            <p className="text-muted-foreground text-sm">
              Acelere seus ciclos de entrega com pipelines otimizados e CI/CD automatizado. 
              Reduz falhas em produção e promove cultura de colaboração entre dev e ops.
            </p>
          </div>

          {/* 7. Criptografia Ponta a Ponta */}
          <div className="p-6 bg-card rounded-xl border hover:shadow-lg transition-all">
            <Lock className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-3">Criptografia Ponta a Ponta</h3>
            <p className="text-muted-foreground text-sm">
              Proteja seus dados em todas as etapas da comunicação. 
              Soluções sob medida para garantir confidencialidade, integridade e conformidade LGPD/GDPR.
            </p>
          </div>

          {/* 8. Backups Georredundantes */}
          <div className="p-6 bg-card rounded-xl border hover:shadow-lg transition-all">
            <HardDrive className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-3">Backups Georredundantes</h3>
            <p className="text-muted-foreground text-sm">
              Garanta a continuidade do seu negócio com backups automáticos distribuídos geograficamente. 
              Armazenamento confiável, restauração rápida e políticas personalizadas.
            </p>
          </div>

          {/* 9. Card de Destaque */}
          <div className="p-6 bg-card rounded-xl border hover:shadow-lg transition-all">
            <Zap className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-3">Soluções Personalizadas</h3>
            <p className="text-muted-foreground text-sm">
              Cada projeto é único. Desenvolvemos soluções sob medida que se adaptam 
              às suas necessidades específicas e objetivos de negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

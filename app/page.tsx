"use client";

import {
  ArrowRight,
  Check,
  Users,
  Zap,
  Cloud,
  Server,
  ChevronRight,
  Network,
} from "lucide-react";
import HeroSection from "@/components/hero-section";
import Navigation from "@/components/navigation";
import SocialProof from "@/components/social-proof";
import BigNumberSocialProof from "@/components/big-number-social-proof";
import AutoScalingAnalytics from "@/components/auto-scaling-analytics";
import FeaturesBentoGrid from "@/components/features-bento-grid";
import CustomerStories from "@/components/customer-stories";

export default function LandingPage() {
  const timelineSteps = [
    {
      day: "Semana 1",
      title: "Avaliação e Planejamento",
      items: [
        "Auditoria completa da infraestrutura em 2 dias",
        "Estratégia de migração personalizada",
        "Revisão de segurança e compliance",
      ],
    },
    {
      day: "Semana 2-3",
      title: "Execução da Migração",
      items: [
        "Migração automatizada de workloads",
        "Monitoramento em tempo real",
        "Treinamento e transferência de conhecimento",
      ],
    },
    {
      day: "Semana 4",
      title: "Otimização e Suporte",
      items: [
        "Ajuste de performance e otimização de custos",
        "Setup de monitoramento 24/7",
        "Suporte e manutenção contínuos",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Social Proof - Logo Wall */}
      <SocialProof />

      {/* Big Number Social Proof */}
      <BigNumberSocialProof />

      {/* Auto-scaling Analytics Section */}
      <AutoScalingAnalytics />

      {/* Features Bento Grid */}
      <FeaturesBentoGrid />

      {/* Customer Stories */}
      <CustomerStories />

      {/* Implementation Timeline */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Veja o que você consegue com a Suanuvem em apenas{" "}
              <span className="text-primary">4 semanas</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {timelineSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="p-8 bg-card glass rounded-xl border">
                  <div className="text-primary font-bold text-sm mb-2">
                    {step.day}
                  </div>
                  <h3 className="text-xl font-semibold mb-6">{step.title}</h3>
                  <ul className="space-y-3">
                    {step.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {i < timelineSteps.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 text-primary transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-5xl font-bold">
              Pronto para escalar na nuvem?
            </h2>
            <p className="text-xl text-muted-foreground">
              Junte-se a 2.000+ empresas que já usam a Suanuvem para
              transformação cloud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2">
                Teste gratuito
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-border bg-background text-foreground rounded-lg hover:bg-muted transition-all font-semibold text-lg">
                Agendar demonstração
              </button>
            </div>
            <p className="text-sm text-muted-foreground">
              Sem cartão de crédito • Teste de 14 dias • Setup em 5 minutos
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-primary-foreground font-bold" />
                </div>
                <span className="text-xl font-bold">Suanuvem</span>
              </div>
              <p className="text-muted-foreground">
                Soluções cloud modernas para negócios modernos.
              </p>
            </div>

            {[
              {
                title: "Serviços",
                links: [
                  "Migração Cloud",
                  "Multi-Cloud",
                  "DevOps",
                  "Consultoria",
                ],
              },
              {
                title: "Empresa",
                links: ["Sobre", "Carreiras", "Blog", "Casos de Sucesso"],
              },
              {
                title: "Suporte",
                links: ["Central de Ajuda", "Contato", "Status", "Comunidade"],
              },
            ].map((column, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Suanuvem. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Segurança
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
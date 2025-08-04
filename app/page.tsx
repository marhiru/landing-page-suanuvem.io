"use client";

import { Cloud, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/navigation";
import BigNumberSocialProof from "@/components/big-number-social-proof";
import AutoScalingAnalytics from "@/components/auto-scaling-analytics";
import FeaturesBentoGrid from "@/components/features-bento-grid";
import CustomerStories from "@/components/customer-stories";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

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

  const contentVariants = {
    initial: {
      opacity: 0,
      visibility: "hidden",
    },
    animate: {
      opacity: 100,
      visibility: "visible",
    },
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Navigation */}
      <Navigation />

      <div
      >
        <BigNumberSocialProof />

        <AutoScalingAnalytics />

        <FeaturesBentoGrid />

        <CustomerStories />

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
                <Button
                  size={"lg"}
                  className="bg-primary h-12 flex items-center justify-center text-base text-primary-foreground gap-2 group/button-main"
                >
                  PRIMARY OPTION
                  <div className="bg-input/20 size-6 text-primary-foreground justify-center items-center flex overflow-clip relative rounded-full p-1">
                    <ArrowUpRight className="size-5 absolute -translate-x-3.5 translate-y-3.5 group-hover/button-main:translate-0 duration-200 ease-in-out transition-transform" />
                    <ArrowUpRight className="size-5 absolute group-hover/button-main:translate-x-3.5 group-hover/button-main:-translate-y-3.5 duration-200 ease-in-out transition-transform" />
                  </div>
                </Button>
                <Button
                  size={"lg"}
                  className="text-base h-12"
                  variant="outline"
                >
                  SECOND OPTION
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Sem cartão de crédito • Teste de 14 dias • Setup em 5 minutos
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-8 border-border bg-card/50">
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
                  links: [
                    "Central de Ajuda",
                    "Contato",
                    "Status",
                    "Comunidade",
                  ],
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
    </div>
  );
}

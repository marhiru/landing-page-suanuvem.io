"use client";

import { Cloud } from "lucide-react";
import Navigation from "@/components/navigation";
import BigNumberSocialProof from "@/components/big-number-social-proof";
import AutoScalingAnalytics from "@/components/auto-scaling-analytics";
import FeaturesBentoGrid from "@/components/features-bento-grid";
import FAQSection from "@/components/faq-section";
import { Logo } from "@/components/logo";

export default function Page() {
  return (
    <div className="min-h-screen mx-auto overflow-y-hidden bg-background flex flex-col items-center justify-center transition-colors duration-300">
      <Navigation />

      <div className="py-14 w-full items-center justify-center max-w-full lg:max-w-6xl">
        <BigNumberSocialProof />

        <AutoScalingAnalytics />

        <FeaturesBentoGrid />

        {/* <CustomerStories /> */}

        <FAQSection />
      </div>
      <footer className="border-t py-8 w-full border-border bg-card/50">
        <div className="w-full px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Logo 
                  size="sm"
                  color="currentColor"
                  className="text-foreground"
                  aria-label="SUANVEM - Página inicial"
                />
              </div>
              <p className="text-muted-foreground">
                Soluções cloud modernas para negócios modernos.
              </p>
            </div>

            {[
              {
                title: "Serviços",
                links: [
                  "Computação",
                  "Armazenamento", 
                  "Redes & CDN",
                  "Segurança",
                ],
              },
              {
                title: "Soluções",
                links: ["Migração", "DevOps", "Consultoria"],
              },
            ].map((column, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <a
                        href="#features"
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

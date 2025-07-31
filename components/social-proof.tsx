import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function SocialProof() {
  const socialProofLogos = [
    "Cooruja",
    // "Microsoft",
    // "Google Cloud",
    // "Docker",
    // "Kubernetes",
    // "Terraform",
    // "RedHat",
    // "VMware",
  ];

  return (
    <section className="py-12 border-b border-border">
      <div className="container mx-auto px-6">
        <p className="text-center text-muted-foreground font-medium text-base mb-8">
          Confiada por gigantes que revolucionaram sua infraestrutura
        </p>
        <div className="flex flex-wrap justify-center items-center gap-2 opacity-60">
          {socialProofLogos.map((logo, i) => (
            <div
              key={i}
              className="text-lg relative flex justify-center items-center select-none font-semibold text-foreground group/logo"
            >
              <span className="group-hover/logo:blur-sm px-6 transition-all">
                {logo}
              </span>
              <Button
                size="sm"
                className="absolute bg-transparent hover:bg-transparent hover:text-foreground font-semibold text-foreground border-none opacity-0 group-hover/logo:opacity-100"
              >
                Ver case
                <ArrowRight />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function SocialProof() {
  const socialProofLogos = [
    "AWS",
    "Microsoft",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "Terraform",
    "RedHat",
    "VMware",
  ];

  return (
    <section className="py-12 border-b border-border">
      <div className="container mx-auto px-6">
        <p className="text-center text-muted-foreground mb-8">
          Confiada por 2.000+ empresas no mundo para transformação cloud
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          {socialProofLogos.map((logo, i) => (
            <div key={i} className="text-lg font-semibold text-foreground">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
import React from "react";
import { Building, Server, Target, TrendingUp } from "lucide-react";

// Types para as estatísticas
interface Stat {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function BigNumberSocialProof() {
  const stats: Stat[] = [
    { value: "2K+", label: "Empresas Migradas", icon: Building },
    { value: "1M+", label: "Workloads Migrados", icon: Server },
    { value: "99.9%", label: "Sucesso em Migrações", icon: Target },
    { value: "40%", label: "Economia Média", icon: TrendingUp },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">
          2.000+ empresas migraram{" "}
          <span className="text-primary">1M+ workloads</span> com a Suanuvem
        </h2>
        <div className="grid md:grid-cols-4 gap-8 mt-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
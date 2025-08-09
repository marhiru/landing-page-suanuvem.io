import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// Add imports for Card components
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

// Types para os dados de depoimentos
interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  metric: string;
  avatar: string;
}

export default function CustomerStories() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "A Suanuvem migrou toda nossa infraestrutura para a nuvem em 2 semanas. Zero downtime e 60% de redução de custos.",
      author: "Carlos Silva",
      title: "CTO",
      company: "TechBrasil Corp",
      metric: "60% redução de custos",
      avatar: "/placeholder.svg?width=60&height=60",
    },
    {
      quote:
        "A estratégia multi-cloud nos deu a flexibilidade que precisávamos. Agora escalamos globalmente sem dor de cabeça.",
      author: "Ana Rodriguez",
      title: "Diretora de Infraestrutura",
      company: "GlobalTech Solutions",
      metric: "300% scaling mais rápido",
      avatar: "/placeholder.svg?width=60&height=60",
    },
    {
      quote:
        "A migração foi perfeita. O time deles cuidou de tudo enquanto focamos no nosso negócio. Serviço excepcional.",
      author: "Roberto Santos",
      title: "CEO",
      company: "StartupFlow",
      metric: "Zero interrupção do negócio",
      avatar: "/placeholder.svg?width=60&height=60",
    },
  ];

  return (
    <section id="customers" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Não acredite apenas na nossa palavra
          </h2>
        </div>

        <div className="flex xs:flex-row flex-col mx-auto items-center justify-center gap-8">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="p-4 bg-card border">
              <CardHeader className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>
                    {testimonial.author.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-semibold text-card-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.title}, {testimonial.company}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-lg tracking-tight font-medium text-card-foreground leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </CardContent>
              <CardFooter className="p-0 pt-4 border-t border-border">
                <div className="text-sm tracking-tight font-semibold text-primary">
                  {testimonial.metric}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

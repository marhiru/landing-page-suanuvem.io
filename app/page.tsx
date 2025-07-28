import { CardContent } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle } from "lucide-react"
import Hero from "@/components/hero"
import BentoCard from "@/components/bento-card"

export default function LandingPage() {
  const features = [
    {
      icon: "/placeholder.svg?height=48&width=48",
      title: "Integração com N8N",
      description: "Automatize processos com integrações visuais, seguras e de fácil manutenção via N8N.",
      className: "md:col-span-1",
      backgroundPattern: "bg-gradient-to-br from-blue-50 to-white dark:from-blue-900 dark:to-background",
      iconColor: "text-blue-600",
      titleFontWeight: "font-bold",
      hoverEffect: "shadow-grow",
    },
    {
      icon: "/placeholder.svg?height=48&width=48",
      title: "Migração de Sistemas",
      description: "Migramos seus sistemas para ambientes internos com foco em performance e controle total.",
      className: "md:col-span-1",
      backgroundPattern: "bg-gradient-to-br from-purple-50 to-white dark:from-purple-900 dark:to-background",
      iconColor: "text-purple-600",
      titleFontWeight: "font-semibold",
      hoverEffect: "border-glow",
    },
    {
      icon: "/placeholder.svg?height=48&width=48",
      title: "Consultoria DevOps",
      description: "Melhore seu ciclo de entrega com pipelines automatizadas e boas práticas de CI/CD.",
      className: "md:col-span-2 lg:col-span-2",
      backgroundPattern: "bg-gradient-to-br from-green-50 to-white dark:from-green-900 dark:to-background",
      iconColor: "text-green-600",
      titleFontWeight: "font-extrabold",
      hoverEffect: "rotate-subtle",
    },
    {
      icon: "/placeholder.svg?height=48&width=48",
      title: "Servidores Virtuais Dedicados",
      description: "Hospede com segurança em ambientes isolados, com recursos garantidos e suporte especializado.",
      className: "md:col-span-1",
      backgroundPattern: "bg-gradient-to-br from-yellow-50 to-white dark:from-yellow-900 dark:to-background",
      iconColor: "text-yellow-600",
      titleFontWeight: "font-medium",
      hoverEffect: "shadow-grow",
    },
    {
      icon: "/placeholder.svg?height=48&width=48",
      title: "Arquitetura sob medida",
      description: "Desenhamos arquiteturas escaláveis, resilientes e aderentes ao seu negócio.",
      className: "md:col-span-1",
      backgroundPattern: "bg-gradient-to-br from-red-50 to-white dark:from-red-900 dark:to-background",
      iconColor: "text-red-600",
      titleFontWeight: "font-bold",
      hoverEffect: "border-glow",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header is now rendered in layout.tsx */}

      {/* Hero Section */}
      <Hero />

      {/* Key Features - Bento Grid */}
      <section id="features" className="container mx-auto px-5 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-[1.2]">
            Soluções completas para sua infraestrutura
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <BentoCard
              key={index}
              delay={index * 150 + Math.random() * 100} // Stagger and slight randomness
              {...feature}
            />
          ))}
        </div>
      </section>

      {/* Why Section */}
      <section id="why-us" className="bg-gradient-to-r from-slate-900 to-secondary text-white py-24">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-12 leading-[1.2]">Por que escolher a Sua Nuvem?</h2>
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {[
                "Foco total em performance, segurança e automação.",
                "Especialistas em DevOps, N8N e infraestrutura dedicada.",
                "Atendimento consultivo e suporte próximo em cada fase.",
              ].map((point, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <CheckCircle className="h-8 w-8 text-accent mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <p className="text-lg text-slate-200 leading-[1.5]">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audience Sections */}
      <section id="cases" className="container mx-auto px-5 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Casos de sucesso</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              role: "Gestor de TI",
              quote: "Reduzimos em 60% o tempo de deploy com a ajuda da equipe da Sua Nuvem.",
              benefits: ["Implementação de pipelines CI/CD", "Migração com zero downtime", "Monitoramento contínuo"],
            },
            {
              role: "Startup em crescimento",
              quote: "Com o VDS da Sua Nuvem conseguimos escalar sem depender de clouds genéricas.",
              benefits: ["Ambientes personalizados", "Recursos garantidos", "Acompanhamento técnico próximo"],
            },
            {
              role: "Desenvolvedor Freelancer",
              quote: "Nunca foi tão fácil integrar automações com o N8N. A consultoria salvou meu projeto!",
              benefits: ["Integrações prontas para produção", "Templates reutilizáveis", "Documentação assistida"],
            },
          ].map((testimonial, index) => (
            <Card
              key={index}
              className="ring-1 ring-border bg-primary/10 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardContent className="p-8">
                <Badge
                  variant="secondary"
                  className="mb-6 bg-primary text-primary-foreground px-4 py-2 text-sm font-medium pointer-events-none"
                >
                  {testimonial.role}
                </Badge>
                <blockquote className="text-xl text-muted-foreground mb-8 italic leading-[1.5] font-medium">
                  "{testimonial.quote}"
                </blockquote>
                <ul className="space-y-3">
                  {testimonial.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground leading-[1.5]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-background py-24">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-[1.2]">Como funciona</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                step: 1,
                action: "Entre em contato com nosso time",
                description: "Vamos entender sua necessidade e sugerir a melhor solução possível.",
              },
              {
                step: 2,
                action: "Receba uma proposta personalizada",
                description: "Com base na análise, montamos um plano técnico e comercial sob medida.",
              },
              {
                step: 3,
                action: "Implantação e suporte contínuo",
                description: "Acompanhamos a implementação e seguimos monitorando sua infraestrutura.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-200">
                  {step.step}
                </div>
                <h3 className="text-2xl font-semibold text-secondary-foreground mb-4 leading-[1.3]">{step.action}</h3>
                <p className="text-muted-foreground leading-[1.5] max-w-sm mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted text-primary-foreground py-24">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-[1.2]">
            Pronto para transformar sua infraestrutura?
          </h2>
          <p className="text-xl mb-12 text-blue-100 leading-[1.5] max-w-2xl mx-auto">
            Fale com nossos especialistas e descubra como podemos impulsionar sua operação.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-slate-100 min-h-[44px] px-8 font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Fale com um especialista
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}

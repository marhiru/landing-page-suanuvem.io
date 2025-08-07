"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Shield, Cloud, Zap, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ComponentType<{ className?: string }>;
}

const faqData: FAQItem[] = [
  {
    question: "Como funciona o processo de migração para a nuvem?",
    answer: "Nossa migração é dividida em 4 semanas: análise e planejamento (Semana 1), execução automatizada (Semanas 2-3) e otimização pós-implantação (Semana 4). Garantimos zero downtime, alta disponibilidade e monitoramento 24/7 durante todo o processo. Nossa equipe cuida de toda a jornada, desde a análise inicial até a validação final.",
    icon: Cloud,
  },
  {
    question: "Como vocês garantem a segurança dos nossos dados?",
    answer: "Implementamos múltiplas camadas de segurança: criptografia ponta a ponta para todos os dados em trânsito e repouso, pentest regular para identificar vulnerabilidades, backups georredundantes distribuídos globalmente, e compliance com LGPD/GDPR. Nossa infraestrutura segue as melhores práticas de segurança da indústria.",
    icon: Shield,
  },
  {
    question: "Como a automação pode melhorar nossos processos?",
    answer: "Com N8N, criamos fluxos de trabalho inteligentes que conectam suas ferramentas sem código. Automatizamos tarefas repetitivas, sincronizamos dados entre sistemas, e implementamos pipelines DevOps otimizados. Isso reduz erros manuais em 90%, acelera entregas e libera sua equipe para tarefas estratégicas.",
    icon: Zap,
  },
  {
    question: "Qual a diferença entre VDS e outros tipos de servidores?",
    answer: "Nossos VDS oferecem controle total com recursos dedicados, provisionamento em minutos e alta performance. Diferente de servidores compartilhados, você tem isolamento completo, escalabilidade sob demanda e suporte especializado. Ideal para projetos que exigem liberdade técnica, performance consistente e crescimento previsível.",
    icon: Server,
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Perguntas Frequentes
            </motion.h2>
            <motion.p 
              className="text-base text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Tire suas dúvidas sobre nossos serviços de transformação digital e infraestrutura cloud
            </motion.p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((item, index) => {
              const Icon = item.icon;
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden p-0 border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <Button
                      variant="ghost"
                      className="w-full h-auto py-6 text-left justify-between"
                      onClick={() => toggleFAQ(index)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="font-semibold text-lg">
                          {item.question}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      </motion.div>
                    </Button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <CardContent className="px-6 pb-6 pt-0">
                            <div className="pl-10">
                              <p className="text-muted-foreground leading-relaxed">
                                {item.answer}
                              </p>
                            </div>
                          </CardContent>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-primary/10 border border-primary/10 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Nossa equipe de especialistas está pronta para ajudar você a encontrar a solução ideal para seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary">
                  Falar com Especialista
                </Button>
                <Button size="lg" variant="outline">
                  Ver Todos os Serviços
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
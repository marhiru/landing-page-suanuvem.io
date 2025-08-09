"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Cloud, Server, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ComponentType<{ className?: string }>;
}

const faqData: FAQItem[] = [
  {
    question: "Como funciona a migração?",
    answer: "Nossa migração é dividida em 4 fases: análise, execução automatizada, otimização e validação. Garantimos zero downtime e monitoramento 24/7 durante todo o processo. Nossa equipe cuida de toda a jornada, desde o planejamento até a entrega final.",
    icon: Cloud,
  },
  {
    question: "Possui segurança dos dados?",
    answer: "Implementamos criptografia ponta a ponta, pentest regular, backups georredundantes e compliance com LGPD/GDPR. Nossa infraestrutura segue as melhores práticas de segurança da indústria para proteger seus dados.",
    icon: Shield,
  },
  // {
  //   question: "Como a automação melhora nossos processos?",
  //   answer: "Criamos fluxos de trabalho inteligentes que conectam suas ferramentas sem código. Automatizamos tarefas repetitivas, sincronizamos dados entre sistemas e implementamos pipelines DevOps. Isso reduz erros manuais e acelera entregas.",
  //   icon: Zap,
  // },
  {
    question: "Oque diferencia uma VDS ?",
    answer: "Nossos VDS oferecem controle total com recursos dedicados, provisionamento em minutos e alta performance. Diferente de servidores compartilhados, você tem isolamento completo, escalabilidade sob demanda e suporte especializado.",
    icon: Server,
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-20 flex">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Flex layout for title/subtitle and FAQ items */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-start">
            {/* Title and subtitle section */}
            <div className="lg:w-1/3 lg:sticky lg:top-8">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Perguntas Frequentes
              </motion.h2>
              <motion.p 
                className="text-sm sm:text-base text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Tire suas dúvidas sobre nossos serviços de transformação digital e infraestrutura cloud
              </motion.p>
            </div>

            {/* FAQ Items section */}
            <div className="lg:w-2/3 space-y-3 sm:space-y-4">
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
                    <div>
                      <Button
                        variant="ghost"
                        className="w-full h-auto py-4 sm:py-4 text-left justify-between hover:bg-foreground transition-all"
                        onClick={() => toggleFAQ(index)}
                      >
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="flex-shrink-0">
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                          </div>
                          <span className="font-semibold break-words text-base sm:text-lg">
                            {item.question}
                          </span>
                        </div>
                        <motion.div
                          animate={{ rotate: isOpen ? 135 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                        </motion.div>
                      </Button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0, filter: "blur(2px)" }}
                            animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
                            exit={{ height: 0, opacity: 0, filter: "blur(6px)" }}
                            transition={{ duration: 0.150, ease: "easeInOut" }}
                          >
                            <CardContent className="pb-4 sm:pb-6 pt-2 overflow-clip">
                              <div className="">
                                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                  {item.answer}
                                </p>
                              </div>
                            </CardContent>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div 
            className="text-center mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-primary/10 border border-primary/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Pronto para começar?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-md mx-auto">
                Nossa equipe de especialistas está pronta para ajudar você a encontrar a solução ideal para seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" className="bg-primary">
                  Falar com um Especialista
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
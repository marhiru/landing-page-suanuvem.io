import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Building, Server, Target, TrendingUp } from "lucide-react";
import CobolIcon from "./icons/cobol";
import CIcon from "./icons/c";
import CPPIcon from "./icons/cpp";
import DartIcon from "./icons/dart";
import GoIcon from "./icons/go";
import KotlinIcon from "./icons/kotlin";

// Types para as estatísticas
interface Stat {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Types para os logos/ícones
interface LogoItem {
  icon: React.ComponentType<{ 
    width?: number | string;
    height?: number | string;
    className?: string;
    fill?: string;
  }>;
}

export default function BigNumberSocialProof() {
  const stats: Stat[] = [
    { value: "2K+", label: "Empresas Migradas", icon: Building },
    { value: "1M+", label: "Workloads Migrados", icon: Server },
    { value: "99.9%", label: "Sucesso em Migrações", icon: Target },
    { value: "40%", label: "Economia Média", icon: TrendingUp },
  ];

  const logoGroups: LogoItem[][] = [
    [
      { 
        icon: CobolIcon,
      },
      { 
        icon: CIcon,
      },
      { 
        icon: CPPIcon,
      },
      { 
        icon: DartIcon,
      },
    ],
    // Grupo 2: Frameworks
    [
      { 
        icon: GoIcon,
      },
      { 
        icon: KotlinIcon,
      },
      { 
        icon: CobolIcon, // Placeholder até criar o ícone
      },
      { 
        icon: CobolIcon, // Placeholder até criar o ícone
      },
    ],
    // Grupo 3: Ferramentas
    [
      { 
        icon: CobolIcon, // Placeholder até criar o ícone
      },
      { 
        icon: CobolIcon, // Placeholder até criar o ícone
      },
      { 
        icon: CobolIcon, // Placeholder até criar o ícone
      },
      { 
        icon: CobolIcon, // Placeholder até criar o ícone
      },
    ],
  ];

  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  // Alternar grupos a cada 2 segundos
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentGroupIndex((prevIndex) => (prevIndex + 1) % logoGroups.length);
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, [logoGroups.length]);

  return (
    <section className="py-16">
      <div className="mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Migre sua infraestrutura, não importa a
          <span className="text-5xl text-primary ml-2 italic font-normal tracking-tight font-serif">
            tecnologia
          </span>
        </h2>
        
        {/* Logo Wall com AnimatePresence */}
        <div className="flex w-full gap-12 items-center justify-center mt-12 relative">
          <AnimatePresence mode="wait">
            {logoGroups[currentGroupIndex].map((logo, i) => (
              <motion.div
                key={`${currentGroupIndex}-${i}`}
                initial={{ 
                  opacity: 0, 
                  scale: 0.8, 
                  y: 20,
                  filter: "blur(8px)"
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  filter: "blur(0px)"
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.8, 
                  y: -20,
                  filter: "blur(8px)"
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  mass: 0.8,
                  duration: 0.8,
                  delay: i * 0.15,
                  ease: "easeInOut"
                }}
                className="text-center p-1"
                whileHover={{ 
                  scale: 1.05,
                  transition: { 
                    type: "spring",
                    stiffness: 400,
                    damping: 15
                  }
                }}
              >
                <motion.div
                  className="flex items-center justify-center mx-auto"
                >
                  <logo.icon
                    className="size-24"
                    fill="#aaa"
                  />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Indicadores de grupo */}
        {/* <div className="flex justify-center mt-8 space-x-2">
          {logoGroups.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentGroupIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentGroupIndex
                  ? "bg-primary"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              whileHover={{ 
                scale: 1.2,
                transition: { 
                  type: "spring",
                  stiffness: 400,
                  damping: 15
                }
              }}
              whileTap={{ 
                scale: 0.9,
                transition: { 
                  type: "spring",
                  stiffness: 400,
                  damping: 15
                }
              }}
              aria-label={`Ir para grupo ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}

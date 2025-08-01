import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Building, Server, Target, TrendingUp } from "lucide-react";
import CobolIcon from "./icons/cobol";
import CIcon from "./icons/c";
import CPPIcon from "./icons/cpp";
import DartIcon from "./icons/dart";
import GoIcon from "./icons/go";
import KotlinIcon from "./icons/kotlin";
import { IconCloud } from "./icon-cloud";

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

  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "kubernetes",
    "microsoftazure",
    "cypress",
    "docker",
    "git",
    "portainer",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "cobol",
  ];

  const icons = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/b3d2bc`
  );

  return (
    <section className="py-16">
      <div className="mx-auto px-6 text-center">
        <h2 className="text-4xl tracking-tight font-bold mb-8">
          Migre sua infraestrutura, <br /> não importa a 
          <span className="text-5xl bg-gradient-to-r from-foreground to-primary text-transparent bg-clip-text ml-2 italic font-normal tracking-tight font-serif">
            tecnologia
          </span>
        </h2>

        <div className="flex w-full gap-12 items-center justify-center mt-12 relative">
          <AnimatePresence mode="wait">
            <IconCloud images={icons} />
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

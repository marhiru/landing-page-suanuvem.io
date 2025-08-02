"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon, Cloud } from "lucide-react";
import { motion } from "motion/react";

export default function Navigation() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDark(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const logoVariants = {
    initial: {
      y: 400,
      x: 450,
      fontSize: "100px",
    },
    animate: {
      y: 0,
      x: 0,
      fontSize: "14px",
    },
  };

  const navVariants = {
    initial: {
      border: "none",
    },
    animate: {
      border: "1px bottom #fff",
    },
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className="fixed top-3.5 right-6 z-50 p-3 rounded-full bg-card glass border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-primary" />
        ) : (
          <Moon className="w-5 h-5 text-primary" />
        )}
      </button>

      <motion.nav
        variants={navVariants}
        initial={{ border: "none" }}
        className="relative z-40 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div
              className="flex relative w-32 gap-2 items-center justify-start space-x-2"
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex  items-center justify-center relative">
                <Cloud className="w-5 h-5 text-primary-foreground font-bold" />
              </div>
                <motion.span
                  variants={logoVariants}
                  initial="initial"
                  animate="animate"
                  transition={{
                    duration: 1,
                    delay: 3,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="absolute font-bold antialiased translate-x-10 tracking-wide"
                >
                  Suanuvem
                </motion.span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-foreground hover:text-primary transition-colors"
              >
                Recursos
              </a>
              <a
                href="#customers"
                className="text-foreground hover:text-primary transition-colors"
              >
                Clientes
              </a>
              <a
                href="#pricing"
                className="text-foreground hover:text-primary transition-colors"
              >
                Preços
              </a>
              <button className="text-foreground hover:text-primary transition-colors">
                Entrar
              </button>
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold">
                Começar
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}

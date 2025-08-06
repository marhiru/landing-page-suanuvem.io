"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon, Cloud } from "lucide-react";
import { Button as BaseComp } from "@/components/ui/button";
import { motion } from "motion/react";

const Button = motion(BaseComp);

export default function Navigation() {
  const [isDark, setIsDark] = useState(true);
  const [isFloating, setIsFloating] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDark(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Verificar breakpoint lg (1024px)
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    let ticking = false;

    const updateFloatingState = () => {
      const scrollY = window.scrollY;
      setIsFloating(scrollY > 100);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateFloatingState);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const logoVariants = {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    buttonInitial: {
      opacity: 0,
      x: 20,
    },
    buttonAnimate: {
      opacity: 1,
      x: 0,
    },
  };

  const navVariants = {
    initial: {
      borderBottom: isLargeScreen ? "1px solid var(--border)" : "none",
      backdropFilter: "blur(8px)",
      boxShadow: "none",
      borderRadius: "0px",
      marginTop: isLargeScreen ? "0px" : "0px",
      maxWidth: isLargeScreen ? "100%" : "100%",
      marginLeft: isLargeScreen ? "auto" : "0px",
      marginRight: isLargeScreen ? "auto" : "0px",
      paddingLeft: isLargeScreen ? "1.5rem" : "0px",
      paddingRight: isLargeScreen ? "1.5rem" : "0px",
      transform: "translate3d(0, 0, 0)",
    },
    floating: {
      border: isLargeScreen ? "1px solid var(--border)" : "none",
      backdropFilter: "blur(16px)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      borderRadius: "16px",
      marginTop: isLargeScreen ? "14px" : "0px",
      maxWidth: isLargeScreen ? "72rem" : "100%",
      marginLeft: isLargeScreen ? "auto" : "0px",
      marginRight: isLargeScreen ? "auto" : "0px",
      paddingLeft: isLargeScreen ? "1.5rem" : "0px",
      paddingRight: isLargeScreen ? "1.5rem" : "0px",
      transform: "translate3d(0, 0, 0)",
    },
    normal: {
      borderBottom: isLargeScreen ? "1px solid var(--border)" : "none",
      backdropFilter: "blur(8px)",
      boxShadow: "none",
      borderRadius: "0px",
      marginTop: isLargeScreen ? "0px" : "0px",
      maxWidth: isLargeScreen ? "100%" : "100%",
      marginLeft: isLargeScreen ? "auto" : "0px",
      marginRight: isLargeScreen ? "auto" : "0px",
      paddingLeft: isLargeScreen ? "1.5rem" : "0px",
      paddingRight: isLargeScreen ? "1.5rem" : "0px",
      transform: "translate3d(0, 0, 0)",
    },
  };

  const itemVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 100,
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
        initial="initial"
        animate="normal"
        style={{
          willChange: "transform, max-width, margin, padding",
          backfaceVisibility: "hidden",
          perspective: "1000px",
          transformStyle: "preserve-3d"
        }}
        transition={{
          maxWidth: {
            duration: 0.6,
            ease: "easeInOut"
          },
          marginTop: {
            duration: 0.8,
            ease: "easeOut"
          },
          borderRadius: {
            duration: 0.2,
            ease: "easeInOut"
          },
          boxShadow: {
            duration: 0.6,
            ease: "easeOut"
          },
          marginLeft: {
            duration: 0.8,
            ease: "easeInOut"
          },
          marginRight: {
            duration: 0.8,
            ease: "easeInOut"
          },
        }}
        className={`fixed top-0 w-full bg-background/20 z-40`}
      >
        <div className="container mx-auto px-6 py-4" style={{ transform: "translate3d(0, 0, 0)", backfaceVisibility: "hidden" }}>
          <motion.div
            style={{
              transform: "translate3d(0, 0, 0)",
              willChange: "auto",
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d"
            }}
            className="flex items-center justify-between"
          >
            <div className="flex w-32 gap-2 items-center justify-start">
              <motion.div
                className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center relative"
                variants={logoVariants}
                initial="initial"
                animate="animate"
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 15,
                }}
              >
                <Cloud className="w-5 h-5 text-primary-foreground font-bold" />
              </motion.div>
              <motion.p
                className="font-bold antialiased tracking-normal"
                variants={itemVariants}
                initial="initial"
                animate="animate"
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
              >
                Suanuvem
              </motion.p>
            </div>
            <div className="flex gap-8 items-center justify-between">
              <motion.div
                variants={itemVariants}
                initial="initial"
                animate="animate"
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
                className="hidden md:flex items-center space-x-6"
              >
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
              </motion.div>
              <Button
                transition={{
                  duration: 0.5,
                }}
                variants={logoVariants}
                initial="buttonInitial"
                animate="buttonAnimate"
              // className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold"
              >
                Começar
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { Cloud } from "lucide-react";
import { motion } from "motion/react";

export default function Navigation() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
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

  // Removed unused scroll effect

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
                  href="#features"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Soluções
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
}

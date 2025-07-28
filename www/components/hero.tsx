"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";

export default function Hero() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center min-h-screen px-5 py-16 lg:py-24 text-center animate-fade-in-initial">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-6 items-center w-full">
          <h1 className="flex flex-col gap-2 max-w-2xl items-center text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
            Tenha controles sobre suas operações
          </h1>
          <p className="text-lg text-muted-foreground tracking-tight font-medium max-w-xl mx-auto">
            Consultoria DevOps, integrações com N8N, servidores dedicados e
            migração de sistemas — tudo para impulsionar sua operação.
          </p>
        </div>
        <Button
          size="lg"
          className="bg-primary hover:ring-2 ring-border ring-offset-2 hover:bg-primary/80 text-primary-foreground hover:scale-[1.02] transition-all duration-200 shadow-lg hover:  inset-60"
        >
          Fale com um especialista
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <div className="relative mt-12">
          <div className="bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Dashboard de infraestrutura"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

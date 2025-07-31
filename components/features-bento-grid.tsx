"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Users,
  Zap,
  Cloud,
  Server,
  Workflow,
  Settings,
  ArrowRightLeft,
  Layers,
  HardDrive,
  Activity,
  Database,
  Cpu,
  Network,
  GitBranch,
} from "lucide-react";

export default function FeaturesBentoGrid() {
  const [pipelineStep, setPipelineStep] = useState(0);
  const [pipelineTimer, setPipelineTimer] = useState(0);

  // Pipeline animation effect
  useEffect(() => {
    let timerInterval: NodeJS.Timeout;
    
    const stepInterval = setInterval(() => {
      setPipelineStep(prev => {
        const nextStep = (prev + 1) % 3;
        setPipelineTimer(0);
        return nextStep;
      });
    }, 1000);

    timerInterval = setInterval(() => {
      setPipelineTimer(prev => prev + 0.1);
    }, 10000);

    return () => {
      clearInterval(stepInterval);
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <section id="features" className="py-16 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Funcionalidade Completa,
          </h2>
          <h2 className="text-4xl font-bold mb-4">
            Experiência <span className="text-primary">Simplificada</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Configure infraestruturas como automação N8N, consultoria DevOps,
            migrações internas, ou qualquer outro layout imaginável, com
            estilos personalizáveis e elementos de UI.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {/* N8N Integration - Large Card */}
          <div className="md:col-span-2 lg:col-span-2 h-80 p-6 bg-card rounded-xl border hover:shadow-lg flex flex-col">
            <div className="flex-1 space-y-1">
              <div className="flex items-start justify-between">
                <div>
                  <Workflow className="w-10 h-10 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">
                    Integração com N8N
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Automatize fluxos de trabalho complexos com mais de 400
                    integrações nativas.
                  </p>
                </div>
              </div>

              {/* N8N Workflow Mockup */}
              <div className="bg-muted/50 rounded-lg p-4 mb-2 space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Workflow ativo
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Database className="w-4 h-4 text-blue-400" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Workflow className="w-4 h-4 text-green-400" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Cloud className="w-4 h-4 text-purple-400" />
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  Database → Processamento → Deploy Cloud
                </div>
              </div>
            </div>

            <div className="text-sm font-medium text-primary mt-auto">
              50+ conectores prontos
            </div>
          </div>

          {/* DevOps Consulting - Medium Card */}
          <div className="md:col-span-2 lg:col-span-2 h-80 p-6 bg-card rounded-xl border hover:shadow-lg flex flex-col">
            <Settings className="w-10 h-10 text-primary mb-3" />
            <h3 className="text-lg font-semibold mb-2">Consultoria DevOps</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Implementação de CI/CD e práticas DevOps modernas.
            </p>

            {/* DevOps Pipeline */}
            <div className="bg-muted/50 rounded-lg p-3 mb-4 flex-1">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs">
                  <GitBranch className={`w-3 h-3 transition-all duration-100 ${
                    pipelineStep === 0 ? 'text-foreground transition-all' : 'text-muted-foreground'
                  }`} />
                  <span className={`transition-colors duration-1000 ${
                    pipelineStep === 0 ? 'text-foreground' : 
                    pipelineStep >= 0 ? 'text-muted-foreground' : 'text-muted-foreground'
                  }`}>
                    Build {pipelineStep > 0 ? '✓' : pipelineStep === 0 ? '→' : '○'}
                  </span>
                  <div className={`ml-auto text-xs transition-all duration-100 ${
                    pipelineStep === 0 ? 'text-foreground font-bold' : 'text-muted-foreground'
                  }`}>
                    {pipelineStep === 0 ? `${pipelineTimer.toFixed(1)}s` : '2.3s'}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Activity className={`w-3 h-3 transition-all duration-100 ${
                    pipelineStep === 1 ? 'text-destructive transition-all' : 'text-muted-foreground'
                  }`} />
                  <span className={`transition-colors duration-1000 ${
                    pipelineStep === 1 ? 'text-destructive font-semibold' : 
                    pipelineStep >= 1 ? 'text-muted-foreground' : 'text-muted-foreground'
                  }`}>
                    Test {pipelineStep > 1 ? '✓' : pipelineStep === 1 ? '→' : '○'}
                  </span>
                  <div className={`ml-auto text-xs transition-all duration-100 ${
                    pipelineStep === 1 ? 'text-destructive font-bold' : 'text-muted-foreground'
                  }`}>
                    {pipelineStep === 1 ? `${pipelineTimer.toFixed(1)}s` : '1.8s'}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Zap className={`w-3 h-3 transition-all duration-100 ${
                    pipelineStep === 2 ? 'text-primary transition-all' : 'text-muted-foreground'
                  }`} />
                  <span className={`transition-colors duration-500 ${
                    pipelineStep === 2 ? 'text-primary font-semibold' : 
                    pipelineStep >= 2 ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    Deploy {pipelineStep > 2 ? '✓' : pipelineStep === 2 ? '→' : '○'}
                  </span>
                  <div className={`ml-auto text-xs transition-all duration-100 ${
                    pipelineStep === 2 ? 'text-primary font-bold' : 'text-muted-foreground'
                  }`}>
                    {pipelineStep === 2 ? `${pipelineTimer.toFixed(1)}s` : '0.9s'}
                  </div>
                </div>

                {/* Pipeline visualization with animated progress */}
                <div className="mt-4 pt-3 border-t border-border/50">
                  <div className="text-xs text-muted-foreground mb-2">
                    Pipeline Status
                  </div>
                  <div className="flex gap-1">
                    <div 
                      className={`h-1 rounded transition-all duration-500 ${
                        pipelineStep === 0 
                          ? 'bg-foreground flex-[1.5]' 
                          : pipelineStep >= 0 
                            ? 'bg-foreground/20 flex-[0.8]' 
                            : 'bg-muted flex-[0.8]'
                      }`}
                    ></div>
                    <div 
                      className={`h-1 rounded transition-all duration-500 ${
                        pipelineStep === 1 
                          ? 'bg-destructive flex-[1.5]' 
                          : pipelineStep >= 1 
                            ? 'bg-destructive/20 flex-[0.8]' 
                            : 'bg-muted flex-[0.8]'
                      }`}
                    ></div>
                    <div 
                      className={`h-1 rounded transition-all duration-500 ${
                        pipelineStep === 2 
                          ? 'bg-primary flex-[1.5]' 
                          : pipelineStep >= 2 
                            ? 'bg-primary opacity-20 flex-[0.8]' 
                            : 'bg-muted flex-[0.8]'
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-sm font-medium text-primary mt-auto">
              3x deploy mais rápido
            </div>
          </div>

          {/* VDS Sales - Compact Card */}
          <div className="md:col-span-2 lg:col-span-2 h-80 p-6 bg-card rounded-xl border hover:shadow-lg flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <HardDrive className="w-8 h-8 text-primary" />
              <div className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                Online
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-2">VDS</h3>
            <p className="text-muted-foreground text-xs mb-4">
              Servidores virtuais dedicados de alta performance.
            </p>

            {/* Compact Server Stats */}
            <div className="flex gap-2 mb-4 flex-1">
              <div className="bg-muted/50 rounded-lg p-2 text-center flex flex-col w-full justify-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Cpu className="w-4 h-4 text-primary" />
                  <span className="font-bold text-sm">16</span>
                </div>
                <div className="text-xs text-muted-foreground">CPU</div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-2 text-center flex flex-col w-full justify-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Server className="w-4 h-4 text-secondary" />
                  <span className="font-bold text-sm">64GB</span>
                </div>
                <div className="text-xs text-muted-foreground">RAM</div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-2 text-center flex flex-col w-full justify-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Database className="w-4 h-4 text-accent" />
                  <span className="font-bold text-sm">1TB</span>
                </div>
                <div className="text-xs text-muted-foreground">SSD</div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-auto">
              <div className="text-sm font-medium text-primary">
                99.9% SLA
              </div>
              <div className="flex items-center gap-1 text-xs text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Healthy</span>
              </div>
            </div>
          </div>

          {/* Migration Services - Large Card */}
          <div className="md:col-span-4 lg:col-span-3 h-80 p-6 bg-card rounded-xl border hover:shadow-lg flex flex-col">
            <ArrowRightLeft className="w-10 h-10 text-primary mb-3" />
            <h3 className="text-xl font-semibold mb-2">
              Migração para Estrutura Interna
            </h3>
            <p className="text-muted-foreground mb-6">
              Migração segura de workloads para infraestrutura dedicada com
              zero perda de dados.
            </p>

            {/* Migration Progress */}
            <div className="bg-muted/50 rounded-lg p-4 flex-1">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">
                  Progresso da Migração
                </span>
                <span className="text-sm text-primary">87%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2 mb-4">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: "87%" }}
                ></div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-xs">
                <div className="text-center">
                  <div className="text-green-400 font-medium">✓ Database</div>
                  <div className="text-muted-foreground">Concluído</div>
                </div>
                <div className="text-center">
                  <div className="text-primary font-medium">
                    → Applications
                  </div>
                  <div className="text-muted-foreground">Em progresso</div>
                </div>
                <div className="text-center">
                  <div className="text-muted-foreground">○ DNS</div>
                  <div className="text-muted-foreground">Pendente</div>
                </div>
              </div>
            </div>

            <div className="text-sm font-medium text-primary mt-4">
              Zero perda de dados garantida
            </div>
          </div>

          {/* Architecture Consulting - Large Card */}
          <div className="md:col-span-4 lg:col-span-3 h-80 p-6 bg-card rounded-xl border hover:shadow-lg flex flex-col">
            <Layers className="w-10 h-10 text-primary mb-3" />
            <h3 className="text-lg font-semibold mb-2">
              Consultoria em Arquitetura
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Design de arquiteturas escaláveis e resilientes para empresas.
            </p>

            {/* Architecture Diagram */}
            <div className="bg-muted/50 rounded-lg p-4 flex-1">
              <div className="grid grid-cols-3 gap-4 items-center h-full">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-xs text-muted-foreground">Users</div>
                  <div className="text-xs text-blue-400 font-medium">
                    10K+ Active
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Network className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Load Balancer
                  </div>
                  <div className="text-xs text-green-400 font-medium">
                    99.9% Uptime
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Server className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Microservices
                  </div>
                  <div className="text-xs text-purple-400 font-medium">
                    Auto Scale
                  </div>
                </div>
              </div>
            </div>

            <div className="text-sm font-medium text-primary mt-4">
              Arquiteturas enterprise
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
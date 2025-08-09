import { Area, AreaChart } from "recharts";
import { ChartConfig, ChartContainer } from "./ui/chart";
import { Ripple } from "./ripple";
import { Fingerprint, TrendingUp } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Badge } from "./ui/badge";
import { Globe } from "./globe";

// Type para dados do gráfico
interface ScalingDataPoint {
  scaling: number;
}

export default function AutoScalingAnalytics() {
  const shouldReduceMotion = useReducedMotion();
  
  const chartConfig = {
    scaling: {
      label: "Taxa de crescimento",
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig;
  const scalingData: ScalingDataPoint[] = [
    { scaling: 0 },
    { scaling: 16 },
    { scaling: 20 },
    { scaling: 32 },
    { scaling: 40 },
    { scaling: 60 },
    { scaling: 66 },
    { scaling: 86 },
    { scaling: 100 },
  ];

  return (
    <section className="pt-4 pb-16">
      {/* Mobile-first container - vertical layout by default, horizontal on larger screens */}
      <div className="container max-w-6xl mx-auto border border-border">
        {/* Mobile: Single column, vertical cards */}
        {/* Tablet: Two columns */}
        {/* Desktop: Three columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 lg:gap-0">
          {/* Criptografia - Foco em segurança */}
          <div className="flex flex-col justify-between relative min-h-[280px] sm:min-h-[320px] lg:min-h-[400px] aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto">
            <div className="flex flex-col items-start p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground mb-2">
                Criptografia de ponta a ponta
              </h3>
              <p className="text-sm sm:text-xs text-muted-foreground mb-4">
                Criptografia de ponta a ponta, garantindo conformidade LGPD com
                latência mínima e alta disponibilidade.
              </p>
            </div>

            <div className="relative flex flex-col items-center justify-center flex-1 min-h-[120px] sm:min-h-[140px]">
              <Fingerprint className="z-10 size-8 sm:size-10 lg:size-7 font-medium tracking-tighter text-foreground" />

              <Ripple 
                mainCircleSize={shouldReduceMotion ? 40 : 60} 
                mainCircleOpacity={1} 
                numCircles={shouldReduceMotion ? 2 : 3} 
              />
            </div>
          </div>

          {/* Crescimento - Foco em resultados */}
          <div
            id="features-2"
            className="flex flex-col justify-between min-h-[280px] sm:min-h-[320px] lg:min-h-[400px] aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto relative overflow-hidden sm:border-x sm:border-x-border lg:border-x lg:border-x-border"
          >
            <div className="flex flex-col items-start p-4 sm:p-6 relative z-10">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 tracking-tight">
                Crescimento 5x mais rápido
              </h3>
              <p className="text-sm sm:text-xs text-muted-foreground">
                Infraestrutura multi-região por todo brasil que acelera seu
                crescimento em 5x através de datacenters distribuídos, garantindo
                performance otimizada e redundância.
              </p>
            </div>

            <div className="absolute flex top-full left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full items-center justify-center scale-75 sm:scale-90 lg:scale-100">
              <Globe />
            </div>
            <div
              style={{
                background:
                  "radial-gradient(150% 150% at 50% 0, transparent 40%, var(--foreground) 90%, transparent 100%)",
              }}
              className="absolute inset-0 opacity-20"
            />
          </div>

          {/* Gráfico - Foco em dados */}
          <div className="flex flex-col justify-between min-h-[280px] sm:min-h-[320px] lg:min-h-[400px] aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto relative overflow-hidden">
            <div className="flex flex-col items-start p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 tracking-tight">
                Análise em tempo real
              </h3>
              <p className="text-sm sm:text-xs text-muted-foreground">
                Sistema de monitoramento em tempo real através de datacenters
                distribuídos pelo Brasil, fornecendo métricas de crescimento com
                latência mínima e alta confiabilidade.
              </p>
            </div>

            <motion.div
              initial={{ opacity: shouldReduceMotion ? 1 : 0, filter: shouldReduceMotion ? "none" : "blur(4px)" }}
              animate={{ opacity: 1, filter: "none" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
              className="flex flex-col items-start justify-start gap-2 px-4 sm:px-6 lg:px-12"
            >
              <span className="tracking-wide font-semibold ml-1 text-sm sm:text-base">Hoje:</span>
              <motion.div className="flex items-center justify-start gap-2">
                <motion.span 
                  className="text-2xl sm:text-3xl lg:text-4xl tracking-wide font-medium"
                  initial={{ scale: shouldReduceMotion ? 1 : 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
                >
                  500
                </motion.span>
                <Badge className="[&>svg]:size-3 sm:[&>svg]:size-4 font-semibold bg-background text-xs text-primary">
                  <TrendingUp />
                  25%
                </Badge>
              </motion.div>
            </motion.div>
            
            <div
              className="absolute inset-0 z-10"
              style={{
                background: `
                    linear-gradient(180deg, transparent 0%, transparent calc(100% - 1px), rgba(255, 255, 255, 0.1) calc(100% - 1px), transparent 100%),
                    linear-gradient(0deg, transparent 0%, transparent calc(100% - 1px), rgba(255, 255, 255, 0.1) calc(100% - 1px), transparent 100%),
                    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.002) 0%, transparent 50%)
                  `,
                backgroundSize:
                  "20px 20px, 40px 20px, 150% 100%, 100% 100%, 100% 100%",
                backgroundPosition: "0 0, 0 0, 0 0, 0 0, 0 0",
              }}
            />
            
            <div className="h-32 sm:h-40 lg:h-64 w-full relative flex-1">
              <ChartContainer
                className="overflow-clip h-full w-full relative z-20"
                config={chartConfig}
              >
                <AreaChart className="z-50" data={scalingData}>
                  <defs>
                    <linearGradient
                      id="scalingGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="100%"
                        stopColor="var(--chart-1)"
                        stopOpacity={0.1}
                      />
                      <stop
                        offset="100%"
                        stopColor="var(--chart-1)"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="scaling"
                    stroke="var(--chart-1)"
                    strokeWidth={1}
                    color="var(--chart-1)"
                    fillOpacity={1}
                    fill="url(#scalingGradient)"
                  />
                </AreaChart>
              </ChartContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

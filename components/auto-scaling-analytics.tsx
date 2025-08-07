import { Area, AreaChart } from "recharts";
import { ChartConfig, ChartContainer } from "./ui/chart";
import { Ripple } from "./ripple";
import { Fingerprint, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "./ui/badge";

// Type para dados do gráfico
interface ScalingDataPoint {
  scaling: number;
}

export default function AutoScalingAnalytics() {
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
      <div className="container max-w-6xl h-[512] border border-border grid grid-cols-3 mx-auto">
        {/* Criptografia - Foco em segurança */}
        <div className="flex flex-col justify-between relative h-auto">
          <div className="flex flex-col items-start p-4">
            <h3 className="text-xl font-semibold tracking-tight text-foreground mb-2">
              Criptografia de ponta a ponta
            </h3>
            <p className="text-xs text-muted-foreground mb-4">
              Criptografia de ponta a ponta que protege seus dados com
              conformidade LGPD/GDPR, mantendo performance otimizada.
            </p>
          </div>

          <div className="relative flex size-full flex-col items-center justify-center">
            <Fingerprint className="z-10 size-7 font-medium tracking-tighter text-foreground" />

            <Ripple mainCircleSize={80} mainCircleOpacity={1} numCircles={3} />
          </div>
        </div>

        {/* Crescimento - Foco em resultados */}
        <div
          id="features-2"
          className="flex flex-col justify-between h-auto border-x border-x-border relative overflow-hidden"
        >
          <div className="flex flex-col items-start p-4 relative z-10">
            <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">
              Crescimento 5x mais rápido
            </h3>
            <p className="text-xs text-muted-foreground">
              Metodologia comprovada que acelera seu crescimento em 5x através
              de otimizações inteligentes, garantindo resultados mensuráveis e
              sustentáveis.
            </p>
          </div>

          {/* Gradiente sutil */}
          <div
            style={{
              background:
                "radial-gradient(150% 150% at 50% 0, transparent 40%, var(--primary) 90%, transparent 100%)",
            }}
            className="absolute inset-0 opacity-20"
          />
        </div>

        {/* Gráfico - Foco em dados */}
        <div className="flex flex-col justify-between h-auto relative overflow-hidden">
          <div className="flex flex-col items-start p-4">
            <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">
              Análise em tempo real
            </h3>
            <p className="text-xs text-muted-foreground">
              Sistema de monitoramento em tempo real que acompanha suas métricas de crescimento com dashboards interativos, fornecendo insights acionáveis e relatórios detalhados.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            animate={{ opacity: 1, filter: "none" }}
            className="flex flex-col items-start justify-start gap-2 px-12"
          >
            <span className="tracking-wide font-semibold ml-1">Hoje:</span>
            <motion.div className="flex items-center justify-start gap-2">
              <motion.span className="text-4xl tracking-wide font-medium">
                500
              </motion.span>
              <Badge className="[&>svg]:size-4 font-semibold bg-background text-xs text-primary">
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
          <div className="h-64 w-full relative">
            {/* Grid de fundo shiny */}
            <ChartContainer
              className="overflow-clip h-64 scale-105 w-full relative z-20"
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
    </section>
  );
}

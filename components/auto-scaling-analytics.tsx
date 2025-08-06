import { Area, AreaChart, YAxis } from "recharts";
import { Badge } from "./ui/badge";
import { ChartConfig, ChartContainer } from "./ui/chart";
import CryptographyIllustration from "./illustrations/cryptography-illustration";
import DataFlowIllustration from "./illustrations/data-flow-illustration";
import { Ripple } from "./ripple";
import { Lock } from "lucide-react";

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
      <div className="container max-w-6xl h-[512] border border-border grid grid-cols-3 gap-4 mx-auto">
        {/* Criptografia - Foco em segurança */}
        <div className="flex flex-col justify-between p-4 h-auto">
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-semibold tracking-tight text-foreground mb-2">
              Criptografia de ponta a ponta
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Segurança máxima para seus dados
            </p>
          </div>

          <div className="relative flex size-full flex-col items-center justify-center">
            <Lock className="z-10 text-4xl font-medium tracking-tighter text-primary mb-4" />
            <Ripple
              mainCircleSize={60}
              mainCircleOpacity={0.6}
              numCircles={4}
            />
          </div>
        </div>

        {/* Crescimento - Foco em resultados */}
        <div id="features-2" className="flex flex-col justify-between p-6 h-auto border-x border-x-border relative overflow-hidden">
          <div className="flex flex-col items-start relative z-10">
            <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">
              Crescimento 5x mais rápido
            </h3>
            <p className="text-sm text-muted-foreground">
              Resultados comprovados
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
        <div className="flex flex-col justify-between overflow-clip px-2 py-4 h-auto">
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">
              Análise em tempo real
            </h3>
            <p className="text-sm text-muted-foreground">
              Métricas de crescimento
            </p>
          </div>

          <div className="h-64 w-full">
            <ChartContainer
              className="overflow-clip h-64 scale-125 w-full"
              config={chartConfig}
            >
              <AreaChart data={scalingData}>
                <defs>
                  <linearGradient
                    id="scalingGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
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

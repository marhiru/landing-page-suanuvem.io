import React from "react";
import { Area, AreaChart, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Badge } from "./ui/badge";
import { ChartConfig, ChartContainer } from "./ui/chart";

// Type para dados do gráfico
interface ScalingDataPoint {
  scaling: number;

}

export default function AutoScalingAnalytics() {
  // Dados simplificados do gráfico - métrica unificada de scaling
  const chartConfig = {
    scaling: {
      label: "Taxa de crescimento",
      color: "hsl(var(--primary))",
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
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-2 w-full items-center justify-center text-center mb-12">
          {/* <div className="text-sm bg-primary/10 font-bold"> */}
          <Badge className="bg-primary/10 tracking-normal" variant="outline">
            Auto-scaling{" "}
            <span className="bg-gradient-to-r text-xs from-foreground via-90% to-primary/80 bg-clip-text text-transparent">
              Inteligente
            </span>
          </Badge>
          {/* </div>   */}
          <div className="div">
            <h3 className="text-3xl font-semibold text-foreground mb-1 tracking-tight">
              Empresas crescem 5x mais rápido
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto tracking-tight">
              Veja como nossa tecnologia acelera o crescimento empresarial
            </p>
          </div>
        </div>

        {/* Chart Only */}
        <div className="bg-card rounded-xl border p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="inline-flex items-center px-1 py-1 rounded-full text-primary text-sm tracking-tight font-semibold mb-3">
                Média de crescimento de clientes que usam nossa plataforma
              </div>

              <p className="text-sm text-muted-foreground"></p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 rounded-full bg-foreground"></div>
              <span className="text-foreground font-medium">
                Taxa de Crescimento
              </span>
            </div>
          </div>

          <div className="h-80 w-full">
            <ChartContainer config={chartConfig}>
              <AreaChart data={scalingData}>
                <defs>
                  <linearGradient
                    id="scalingGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#e8e8e3" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="#e8e8e3" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#e8e8e3" }}
                  domain={[0, 100]}
                />
                <Area
                  type="monotone"
                  dataKey="scaling"
                  stroke="hsl(var(--primary))"
                  strokeWidth={1}
                  color="hsl(var(--primary))"
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

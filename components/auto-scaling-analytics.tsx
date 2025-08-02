import { Area, AreaChart, YAxis } from "recharts";
import { Badge } from "./ui/badge";
import { ChartConfig, ChartContainer } from "./ui/chart";

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
    <section className="py-16">
      <div className="container grid grid-rows-2 mx-auto">
        <div className="flex flex-col justify-between border border-border col-span-3 rounded-[var(--radius)] w-1/3 overflow-clip h-[446px] p-0">
          <div className="flex flex-col items-start p-6">
            <h3 className="text-2xl font-semibold text-foreground mb-1 tracking-tight">
              Empresas crescem 5x mais rápido
            </h3>
            <p className="text-base text-muted-foreground">
              Veja como nossa tecnologia acelera o crescimento empresarial
            </p>
          </div>

          <div className="h-80 w-full justify-end overflow-clip col-span-12">
            <ChartContainer className="aspect-auto w-full" config={chartConfig}>
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
                      stopOpacity={0.2}
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
        <div className="flex flex-col justify-between border border-border col-span-2 rounded-[var(--radius)] w-1/3 overflow-clip h-[446px] p-0">
          <div className="flex flex-col items-start p-6">
            <h3 className="text-2xl font-semibold text-foreground mb-1 tracking-tight">
              Empresas crescem 5x mais rápido
            </h3>
            <p className="text-base text-muted-foreground">
              Veja como nossa tecnologia acelera o crescimento empresarial
            </p>
          </div>

          <div className="h-80 w-full justify-end overflow-clip">
            <ChartContainer className="aspect-auto w-full" config={chartConfig}>
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
                      stopOpacity={0.2}
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
        <div className="flex flex-col justify-between border border-border rounded-[var(--radius)] w-1/3 overflow-clip h-[446px] p-0">
          <div className="flex flex-col items-start p-6">
            <h3 className="text-2xl font-semibold text-foreground mb-1 tracking-tight">
              Empresas crescem 5x mais rápido
            </h3>
            <p className="text-base text-muted-foreground">
              Veja como nossa tecnologia acelera o crescimento empresarial
            </p>
          </div>

          <div className="h-80 w-full justify-end overflow-clip">
            <ChartContainer className="aspect-auto w-full" config={chartConfig}>
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
                      stopOpacity={0.2}
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

import React from "react";
import { TrendingUp, Cpu, BarChart } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, XAxis, YAxis } from "recharts";

// Types para as métricas e dados do gráfico
interface MetricCardData {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  value: string | number;
  subtitle: string;
  iconColor: string;
}

interface ScalingDataPoint {
  time: string;
  cpu: number;
  memory: number;
  requests: number;
}

interface ChartConfig {
  [key: string]: {
    label: string;
    color: string;
  };
}

export default function AutoScalingAnalytics() {
  // Dados das métricas principais
  const metricsData: MetricCardData[] = [
    {
      title: "Instâncias Ativas",
      icon: TrendingUp,
      value: 12,
      subtitle: "+3 nas últimas 2h",
      iconColor: "text-green-400",
    },
    {
      title: "CPU Médio",
      icon: Cpu,
      value: "68%",
      subtitle: "Dentro do target",
      iconColor: "text-primary",
    },
    {
      title: "Requests/min",
      icon: BarChart,
      value: 680,
      subtitle: "Pico: 12:00",
      iconColor: "text-accent",
    },
  ];

  // Dados do gráfico de scaling
  const scalingData: ScalingDataPoint[] = [
    { time: "00:00", cpu: 25, memory: 45, requests: 1200 },
    { time: "04:00", cpu: 35, memory: 52, requests: 1800 },
    { time: "08:00", cpu: 68, memory: 71, requests: 4500 },
    { time: "12:00", cpu: 82, memory: 85, requests: 6800 },
    { time: "16:00", cpu: 75, memory: 78, requests: 5200 },
    { time: "20:00", cpu: 45, memory: 58, requests: 2800 },
  ];

  // Configuração do gráfico
  const chartConfig: ChartConfig = {
    cpu: {
      label: "CPU Usage",
      color: "hsl(var(--primary))",
    },
    memory: {
      label: "Memory Usage", 
      color: "hsl(var(--secondary))",
    },
    requests: {
      label: "Requests/min",
      color: "hsl(var(--accent))",
    },
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Auto-scaling <span className="text-primary">Inteligente</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monitoramento em tempo real e escalonamento automático baseado em demanda
          </p>
        </div>

        {/* Metrics Overview */}
        <div className="grid md:grid-cols-6 gap-6 mb-8">
          {metricsData.map((metric, index) => (
            <div key={index} className="md:col-span-2 bg-card glass rounded-xl border p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">{metric.title}</h3>
                <metric.icon className={`w-5 h-5 ${metric.iconColor}`} />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
              <div className={`text-sm ${metric.iconColor}`}>{metric.subtitle}</div>
            </div>
          ))}
        </div>

        {/* Main Chart */}
        <div className="bg-card glass rounded-xl border p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Performance das Últimas 24h</h3>
              <p className="text-sm text-muted-foreground">Monitoramento de recursos e auto-scaling</p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-muted-foreground">CPU</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <span className="text-muted-foreground">Memory</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                <span className="text-muted-foreground">Requests</span>
              </div>
            </div>
          </div>

          <ChartContainer config={chartConfig} className="h-80 p-0 w-full">
            <AreaChart data={scalingData}>
              <defs>
                <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#78d982" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#78d982" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorMemory" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="time" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="cpu"
                stroke="#78d982"
                fillOpacity={1}
                fill="url(#colorCpu)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="memory"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorMemory)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="requests"
                stroke="#a855f7"
                fillOpacity={1}
                fill="url(#colorRequests)"
                strokeWidth={2}
                scale={0.1}
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </div>
    </section>
  );
} 
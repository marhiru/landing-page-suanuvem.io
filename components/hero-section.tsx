import {
    Star,
    ArrowRight,
    PlayCircle,
    Check,
} from "lucide-react";

// Types para as atividades do dashboard
interface Activity {
  service: string;
  region: string;
  status: string;
  color: "green" | "blue" | "gray";
}

export default function HeroSection() {
  // Data para as atividades do dashboard mockup
  const recentActivities: Activity[] = [
    {
      service: "Auto-scaling ativado",
      region: "us-east-1",
      status: "concluído",
      color: "green",
    },
    {
      service: "Backup criado", 
      region: "eu-west-1",
      status: "executando",
      color: "blue",
    },
    {
      service: "Scan de segurança",
      region: "ap-south-1", 
      status: "concluído",
      color: "green",
    },
  ];

  // Data para o gráfico mockup
  const chartData = [30, 45, 60, 80, 65, 90, 75, 85, 70, 95];

  return (
    <header className="relative overflow-hidden min-h-[800px] flex items-center">
      {/* Background Layer 1: Base Gradient */}
      <div className="absolute inset-0 modern-hero-bg"></div>
      
      {/* Background Layer 2: Animated Geometric Elements */}
      <div className="absolute inset-0">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
          <div className="shape shape-6"></div>
        </div>
      </div>

      {/* Background Layer 3: Grid Pattern */}
      <div className="absolute inset-0 hero-grid-pattern opacity-20"></div>

      {/* Background Layer 4: Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-primary/5"></div>

      {/* Background Layer 5: Noise Texture */}
      <div className="absolute inset-0 noise-texture opacity-10"></div>

      {/* Content Container */}
      <div className="relative container mx-auto px-6 py-24 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              {/* Floating Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 floating-badge">
                <Star className="w-4 h-4 animate-pulse" />
                5 estrelas · 500+ migrações bem-sucedidas
              </div>
              
              {/* Main Heading with Gradient Text */}
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="text-white block mb-2">
                  Migração cloud.
                </span>
                <span className="block">
                  <span className="gradient-text-primary animate-gradient-x">
                    Simplificada.
                  </span>
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-xl text-white/80 leading-relaxed max-w-xl backdrop-blur-sm">
                Consultoria especializada, migração sem riscos e gestão
                multi-cloud. Escale seu negócio com confiança na nuvem.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group btn-primary-modern px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300">
                Começar gratuitamente
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group px-8 py-4 border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white rounded-xl hover:bg-white/10 hover:border-white/30 transition-all font-semibold text-lg flex items-center gap-2">
                <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Ver demonstração
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                Sem taxa de setup
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                Cancele quando quiser
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                SLA 99.9% uptime
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Mockup */}
          <div className="relative animate-fade-in-right">
            {/* Main Dashboard */}
            <div className="bg-card/90 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl modern-glass-effect">
              <div className="space-y-6">
                {/* Dashboard Header with Live Status */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-card-foreground">
                    Infraestrutura Cloud
                  </h3>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-primary font-medium">Todos os Sistemas Online</span>
                  </div>
                </div>

                {/* Enhanced Metrics Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm rounded-xl border border-primary/20">
                    <div className="text-2xl font-bold text-primary animate-pulse">
                      99.9%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Uptime
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-secondary/10 to-secondary/5 backdrop-blur-sm rounded-xl border border-secondary/20">
                    <div className="text-2xl font-bold text-secondary">
                      847
                    </div>
                    <div className="text-sm text-muted-foreground">
                      VMs Ativas
                    </div>
                  </div>
                </div>

                {/* Enhanced Chart Area */}
                <div className="h-32 bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-sm rounded-xl flex items-end p-4 border border-accent/20">
                  <div className="flex items-end gap-2 w-full">
                    {chartData.map((height, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-t from-primary to-primary/50 rounded-sm flex-1 animate-pulse"
                        style={{ 
                          height: `${height}%`,
                          animationDelay: `${i * 100}ms`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Enhanced Recent Activity */}
                <div className="space-y-3">
                  <h4 className="font-medium text-card-foreground">
                    Atividade em Tempo Real
                  </h4>
                  {recentActivities.map((activity, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-muted/50 backdrop-blur-sm rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.color === 'green' ? 'bg-green-400' : 
                          activity.color === 'blue' ? 'bg-blue-400' : 'bg-gray-400'
                        } ${activity.status === 'executando' ? 'animate-pulse' : ''}`}></div>
                        <div>
                          <div className="font-medium text-card-foreground">
                            {activity.service}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {activity.region}
                          </div>
                        </div>
                      </div>
                      <div className={`text-sm font-medium ${
                        activity.color === 'green' ? 'text-green-400' :
                        activity.color === 'blue' ? 'text-blue-400' : 'text-gray-400'
                      }`}>
                        {activity.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Mobile Mockup */}
            <div className="absolute -bottom-8 -right-8 w-36 h-64 bg-card/90 backdrop-blur-xl rounded-3xl border border-white/10 p-4 shadow-2xl modern-glass-effect animate-float">
              <div className="space-y-4 h-full">
                <div className="h-4 bg-gradient-to-r from-primary to-primary/50 rounded-lg opacity-80"></div>
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-3 bg-muted/70 rounded"></div>
                  ))}
                </div>
                <div className="mt-auto h-10 bg-gradient-to-r from-primary to-accent rounded-lg"></div>
              </div>
            </div>

            {/* Floating Notification */}
            <div className="absolute -top-4 -left-4 bg-card/95 backdrop-blur-xl rounded-2xl border border-green-500/20 p-4 shadow-lg animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div>
                  <div className="text-sm font-medium text-card-foreground">
                    Migração Concluída
                  </div>
                  <div className="text-xs text-muted-foreground">
                    3 workloads transferidos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 
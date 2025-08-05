// Componente de ilustração criativa para criptografia
export default function CryptographyIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 200 200"
        className="w-32 h-32 text-foreground"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradientes melhorados */}
        <defs>
          {/* Gradiente principal do escudo - azul para verde */}
          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#10B981" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.08" />
          </linearGradient>
          
          {/* Gradiente do cadeado - azul vibrante */}
          <linearGradient id="lockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          
          {/* Gradiente de brilho para efeitos */}
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          
          {/* Gradiente para partículas */}
          <radialGradient id="particleGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </radialGradient>
          
          {/* Filtro de glow melhorado */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Filtro de sombra */}
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#1E293B" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Escudo de proteção com cores melhoradas */}
        <path
          d="M100 20 L140 40 L140 80 C140 120 100 160 100 160 C100 160 60 120 60 80 L60 40 Z"
          fill="url(#shieldGradient)"
          stroke="url(#glowGradient)"
          strokeWidth="2.5"
          className="animate-pulse"
          filter="url(#shadow)"
        />

        {/* Cadeado principal com gradiente rico */}
        <rect
          x="85"
          y="70"
          width="30"
          height="40"
          rx="4"
          fill="url(#lockGradient)"
          stroke="url(#glowGradient)"
          strokeWidth="2"
          filter="url(#glow)"
        />

        {/* Arco do cadeado com brilho */}
        <path
          d="M85 70 Q100 60 115 70"
          stroke="url(#glowGradient)"
          strokeWidth="3.5"
          fill="none"
          filter="url(#glow)"
          strokeLinecap="round"
        />

        {/* Fechadura com cor contrastante */}
        <circle
          cx="100"
          cy="90"
          r="3"
          fill="#F1F5F9"
          stroke="#3B82F6"
          strokeWidth="1.5"
        />

        {/* Códigos binários com cores diferentes */}
        <text
          x="30"
          y="30"
          className="text-xs fill-slate-600 dark:fill-slate-400 opacity-70"
          style={{ fontFamily: 'monospace', fontWeight: '600' }}
        >
          1010
        </text>
        <text
          x="150"
          y="50"
          className="text-xs fill-emerald-600 dark:fill-emerald-400 opacity-70"
          style={{ fontFamily: 'monospace', fontWeight: '600' }}
        >
          1101
        </text>
        <text
          x="40"
          y="150"
          className="text-xs fill-violet-600 dark:fill-violet-400 opacity-70"
          style={{ fontFamily: 'monospace', fontWeight: '600' }}
        >
          0110
        </text>

        {/* Conexões seguras com cores diferentes */}
        <line
          x1="40"
          y1="40"
          x2="80"
          y2="80"
          stroke="#10B981"
          strokeWidth="1.5"
          strokeDasharray="4,4"
          className="animate-pulse"
          opacity="0.6"
        />
        <line
          x1="160"
          y1="60"
          x2="120"
          y2="90"
          stroke="#8B5CF6"
          strokeWidth="1.5"
          strokeDasharray="4,4"
          className="animate-pulse"
          opacity="0.6"
        />

        {/* Partículas de segurança com cores vibrantes */}
        <circle
          cx="50"
          cy="60"
          r="2.5"
          fill="url(#particleGradient)"
          className="animate-ping"
          filter="url(#glow)"
        />
        <circle
          cx="150"
          cy="100"
          r="2"
          fill="#8B5CF6"
          className="animate-ping"
          style={{ animationDelay: '0.5s' }}
          filter="url(#glow)"
        />
        <circle
          cx="70"
          cy="140"
          r="1.5"
          fill="#F59E0B"
          className="animate-ping"
          style={{ animationDelay: '1s' }}
          filter="url(#glow)"
        />
        
        {/* Partículas adicionais para mais riqueza visual */}
        <circle
          cx="130"
          cy="40"
          r="1"
          fill="#EF4444"
          className="animate-ping"
          style={{ animationDelay: '1.5s' }}
          opacity="0.8"
        />
        <circle
          cx="45"
          cy="120"
          r="1.2"
          fill="#06B6D4"
          className="animate-ping"
          style={{ animationDelay: '2s' }}
          opacity="0.8"
        />

        {/* Escudo de verificação com cor vibrante */}
        <path
          d="M100 120 L110 130 L120 110"
          stroke="#10B981"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-pulse"
          filter="url(#glow)"
        />
        
        {/* Elementos decorativos adicionais */}
        <circle
          cx="100"
          cy="100"
          r="35"
          fill="none"
          stroke="url(#glowGradient)"
          strokeWidth="1"
          opacity="0.3"
          strokeDasharray="5,5"
          className="animate-pulse"
        />
        
        {/* Pontos de conexão */}
        <circle
          cx="80"
          cy="80"
          r="1.5"
          fill="#3B82F6"
          opacity="0.8"
        />
        <circle
          cx="120"
          cy="90"
          r="1.5"
          fill="#10B981"
          opacity="0.8"
        />
      </svg>
    </div>
  );
} 
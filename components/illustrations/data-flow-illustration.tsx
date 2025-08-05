import { Database, Terminal } from "lucide-react";
import { Badge } from "../ui/badge";
import { useRef, useEffect, useState } from "react";

// Componente de ilustração do fluxo de dados de criptografia (versão simplificada)
export default function DataFlowIllustration() {
    const firstBadgeRef = useRef<HTMLDivElement>(null);
    const secondBadgeRef = useRef<HTMLDivElement>(null);
    const [linePosition, setLinePosition] = useState({
        left: 0,
        right: 0,
        top: 0
    });

    useEffect(() => {
        const calculateLinePosition = () => {
            if (!firstBadgeRef.current || !secondBadgeRef.current) return;

            const firstBadge = firstBadgeRef.current;
            const secondBadge = secondBadgeRef.current;
            const container = firstBadge.parentElement;

            if (!container) return;

            const firstRect = firstBadge.getBoundingClientRect();
            const secondRect = secondBadge.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            // Calcular posições relativas ao container
            const firstRight = firstRect.right - containerRect.left;
            const secondLeft = secondRect.left - containerRect.left;
            const centerY = (firstRect.top + firstRect.bottom) / 2 - containerRect.top;

            setLinePosition({
                left: firstRight,
                right: containerRect.width - secondLeft,
                top: centerY
            });
        };

        // Calcular posição inicial
        calculateLinePosition();

        // Observer para detectar mudanças de tamanho
        const resizeObserver = new ResizeObserver(() => {
            // Pequeno delay para garantir que o layout foi atualizado
            setTimeout(calculateLinePosition, 0);
        });

        // Observar o container e os badges
        if (firstBadgeRef.current?.parentElement) {
            resizeObserver.observe(firstBadgeRef.current.parentElement);
        }
        if (firstBadgeRef.current) {
            resizeObserver.observe(firstBadgeRef.current);
        }
        if (secondBadgeRef.current) {
            resizeObserver.observe(secondBadgeRef.current);
        }

        // Cleanup
        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div className="relative w-full gap-4 h-full flex items-center justify-center">
            {/* Linha conectora entre os badges - posicionada dinamicamente */}
            <div 
                className="absolute h-0.5 bg-muted-foreground/30 z-0"
                style={{
                    left: `${linePosition.left}px`,
                    right: `${linePosition.right}px`,
                    top: `${linePosition.top}px`,
                    transform: 'translateY(-50%)'
                }}
                aria-hidden="true"
            />
            
            <Badge
                ref={firstBadgeRef}
                variant="outline"
                className="text-muted-foreground relative z-10"
            >
                <Database className="size-4" />
                Data
            </Badge>
            <Badge
                ref={secondBadgeRef}
                variant="outline"
                className="text-muted-foreground relative z-10"
            >
                <Terminal />
                Relay
            </Badge>
        </div>
    );
} 
import { Database, Terminal } from "lucide-react";
import { Badge } from "../ui/badge";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function DataFlowIllustration() {
  const dataBadgeRef = useRef<HTMLDivElement>(null);
  const relayBadgeRef = useRef<HTMLDivElement>(null);
  const serverRef = useRef<HTMLDivElement>(null);

  const [linePositions, setLinePositions] = useState({
    dataToRelay: { left: 0, right: 0, top: 0 },
    relayToServer: { left: 0, right: 0, top: 0 },
  });

  useEffect(() => {
    const calculateLinePositions = () => {
      if (!dataBadgeRef.current || !relayBadgeRef.current || !serverRef.current)
        return;

      const dataBadge = dataBadgeRef.current;
      const relayBadge = relayBadgeRef.current;
      const server = serverRef.current;
      const container = dataBadge.parentElement;

      if (!container) return;

      const dataRect = dataBadge.getBoundingClientRect();
      const relayRect = relayBadge.getBoundingClientRect();
      const serverRect = server.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const dataRight = dataRect.right - containerRect.left;
      const relayLeft = relayRect.left - containerRect.left;
      const relayRight = relayRect.right - containerRect.left;
      const serverLeft = serverRect.left - containerRect.left;

      const dataCenterY =
        (dataRect.top + dataRect.bottom) / 2 - containerRect.top;
      const relayCenterY =
        (relayRect.top + relayRect.bottom) / 2 - containerRect.top;
      const serverCenterY =
        (serverRect.top + serverRect.bottom) / 2 - containerRect.top;

      setLinePositions({
        dataToRelay: {
          left: dataRight,
          right: containerRect.width - relayLeft,
          top: dataCenterY,
        },
        relayToServer: {
          left: relayRight,
          right: containerRect.width - serverLeft,
          top: relayCenterY,
        },
      });
    };

    calculateLinePositions();

    const resizeObserver = new ResizeObserver(() => {
      setTimeout(calculateLinePositions, 0);
    });

    if (dataBadgeRef.current?.parentElement) {
      resizeObserver.observe(dataBadgeRef.current.parentElement);
    }
    [dataBadgeRef, relayBadgeRef, serverRef].forEach((ref) => {
      if (ref.current) {
        resizeObserver.observe(ref.current);
      }
    });

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const ConnectorLine = ({
    position,
    delay = 0,
  }: {
    position: { left: number; right: number; top: number };
    delay?: number;
  }) => (
    <>
      <div
        className="absolute h-0.5 bg-muted-foreground/30"
        style={{
          left: `${position.left}px`,
          right: `${position.right}px`,
          top: `${position.top}px`,
          transform: "translateY(-50%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute h-0.5"
        style={{
          left: `${position.left}px`,
          right: `${position.right}px`,
          top: `${position.top}px`,
          transform: "translateY(-50%)",
        }}
        aria-hidden="true"
      >
        <motion.div
          className="h-[2px] w-6 rounded-full bg-gradient-to-r from-transparent to-primary shadow-lg shadow-primary/50 relative"
          style={{
            position: "absolute",
            top: "0%",
            left: "-90%",
            transform: "translateY(-50%)",
          }}
          animate={{
            x: [0, "350%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
            delay: delay, 
          }}
        >
          {/* Círculo marcador no final do beam */}
          <div className="absolute -right-1 top-1/2 transform shadow-[0_0_8px_rgba(179,182,181,0.8),0_0_16px_rgba(179,182,181,0.6)] -translate-y-1/2 w-2 h-2 bg-primary rounded-full" />
        </motion.div>
      </div>
    </>
  );

  return (
    <div className="relative w-full gap-12 h-full flex items-center justify-center">
      {/* Linhas conectoras - primeira linha começa imediatamente, segunda após 0.5s */}
      <ConnectorLine position={linePositions.dataToRelay} delay={0} />
      <ConnectorLine position={linePositions.relayToServer} delay={1} />

      <Badge
        ref={dataBadgeRef}
        variant="outline"
        className="flex flex-col gap-2 text-muted-foreground p-0 bg-background rounded-[var(--radius)] relative z-10"
      >
        <div className="flex border-b border-b-border px-2 py-0 gap-2 size-full">
            <Database className="size-4" />
            <div className="h-auto bg-border w-px" />
          raw_data
        </div>
        021m2k01dk
      </Badge>
      <motion.div
      >
        <Badge
          ref={relayBadgeRef}
          variant="outline"
          className="text-muted-foreground bg-background border-primary shadow-primary/50 shadow-[0_0_12px_rgba(59,130,246,0.9)] relative z-50"
        >
          <Terminal />
          Relay
        </Badge>
      </motion.div>
      <Badge
        ref={serverRef}
        variant="outline"
        className="text-muted-foreground bg-background relative z-10"
      >
        <Terminal />
        Server
      </Badge>
    </div>
  );
}

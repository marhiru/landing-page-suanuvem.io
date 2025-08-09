import React, { ComponentPropsWithoutRef, CSSProperties } from "react";

import { cn } from "@/lib/utils";
import { CanvasRevealEffect } from "./canvas-reveal-effect";

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
}

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className,
  ...props
}: RippleProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom_20%,white,transparent)]",
        className
      )}
      {...props}
    >
      <CanvasRevealEffect
        animationSpeed={8}
        opacities={[0.8, 1]}
        showGradient={false}
        containerClassName="absolute inset-0 bg-black/5"
        colors={[
          [179, 182, 181],
          [232, 121, 249],
          // [179, 182, 181],
          [179, 182, 181],
        ]}
        dotSize={2}
      />
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = "solid";

        return (
          <div
            key={i}
            className={cn(`absolute rounded-[2%] border bg-primary/25`, {
              "shadow-[0_0_10px_rgba(179,182,181,0.6),0_0_4px_rgba(179,182,181,0.2),0_0_60px_rgba(179,182,181,0.2)]":
                i === 0,
            })}
            style={
              {
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                maskImage:
                  i === 0
                    ? "none"
                    : "radial-gradient(circle at center, var(--primary) 60%, transparent)",
                borderStyle,
                borderWidth: "1px",
                borderColor: `var(--muted-foreground)`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(0.80)",
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";

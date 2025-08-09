"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG: COBEOptions = {
  width: 1200,
  height: 1200,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 5.66,
  theta: -0.5,
  dark: 1,
  diffuse: 0.3,
  mapSamples: 12000,
  mapBrightness: 4,
  baseColor: [0.4, 0.6, 0.55],
  markerColor: [0.6, 1, 0.8],
  glowColor: [0.4, 0.5, 0.45],
  markers: [
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [-22.9068, -43.1729], size: 0.1 },
    { location: [-15.7942, -47.8822], size: 0.08 },
    { location: [-12.9714, -38.5011], size: 0.07 },
    { location: [-3.7319, -38.5267], size: 0.06 },
    { location: [-19.9167, -43.9345], size: 0.08 },
    { location: [-3.1190, -60.0217], size: 0.05 },
    { location: [-25.4284, -49.2733], size: 0.07 },
    { location: [-8.0476, -34.8770], size: 0.06 },
    { location: [-30.0346, -51.2177], size: 0.07 },
    { location: [-16.6864, -49.2653], size: 0.05 },
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    let canvasWidth = 0;
    
    const onResize = () => {
      if (canvasRef.current) {
        canvasWidth = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: canvasWidth * 2,
      height: canvasWidth * 2,
      onRender: () => {
        // Empty onRender function - removed unused state parameter
      },
    });

    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0);
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}

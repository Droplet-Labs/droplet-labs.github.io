"use client";

import { motion } from "framer-motion";
import { ParallaxLayer } from "./parallax-layer";
import { cn } from "@/lib/utils";

export function GradientOrb({
  color = "rgba(6,182,212,0.15)",
  size = 400,
  className,
  parallaxSpeed = 0.3,
  floatDuration = 8,
}: {
  color?: string;
  size?: number;
  className?: string;
  parallaxSpeed?: number;
  floatDuration?: number;
}) {
  return (
    <ParallaxLayer speed={parallaxSpeed} className={cn("absolute", className)}>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />
    </ParallaxLayer>
  );
}

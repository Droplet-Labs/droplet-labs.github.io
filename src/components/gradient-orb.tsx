"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function GradientOrb({
  color = "rgba(6,182,212,0.15)",
  size = 400,
  className,
  floatDuration = 8,
}: {
  color?: string;
  size?: number;
  className?: string;
  floatDuration?: number;
}) {
  return (
    <div className={cn("absolute", className)}>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="orb-blur"
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          willChange: "transform",
        }}
      />
    </div>
  );
}

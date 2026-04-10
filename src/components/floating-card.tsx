"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function FloatingCard({
  rotation = 2,
  className,
  children,
  floatDuration = 6,
}: {
  rotation?: number;
  className?: string;
  children: React.ReactNode;
  floatDuration?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        "bg-white/[0.06] border border-white/[0.08] floating-card-blur rounded-xl p-4",
        className
      )}
      style={{ transform: `rotate(${rotation}deg)`, willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}

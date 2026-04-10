"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function MotionWrapper({
  children,
  className,
  delay = 0,
  y = 60,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" as const }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

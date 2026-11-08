"use client";

import { motion } from "framer-motion";
import { problem } from "@/lib/constants";
import { GradientOrb } from "@/components/gradient-orb";
import { StaggerGrid, staggerItemVariants } from "@/components/stagger-grid";
import { MotionWrapper } from "@/components/motion-wrapper";

export function Problem() {
  return (
    <section id="problem" className="scroll-mt-20 py-20 md:py-28 relative">
      <GradientOrb
        color="rgba(6,182,212,0.06)"
        size={250}
        className="left-[-5%] top-[20%]"
      />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <MotionWrapper>
          <span className="font-[family-name:var(--font-jetbrains)] text-sm text-water-dark-cyan tracking-[0.2em]">
            {problem.eyebrow}
          </span>
          <h2 className="font-[family-name:var(--font-outfit)] text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-3">
            {problem.heading}
          </h2>
        </MotionWrapper>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {problem.columns.map((column) => (
            <motion.div
              key={column.title}
              variants={staggerItemVariants}
              className="bg-white rounded-xl p-6 relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-200/80"
            >
              <h3 className="font-[family-name:var(--font-outfit)] text-lg font-semibold text-foreground">
                {column.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mt-2">
                {column.body}
              </p>
            </motion.div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}

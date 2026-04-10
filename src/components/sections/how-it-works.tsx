"use client";

import { motion } from "framer-motion";
import { steps } from "@/lib/constants";
import { GradientOrb } from "@/components/gradient-orb";
import { StaggerGrid, staggerItemVariants } from "@/components/stagger-grid";
import { MotionWrapper } from "@/components/motion-wrapper";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-20 md:py-28 relative">
      <GradientOrb
        color="rgba(6,182,212,0.04)"
        size={200}
        className="left-[20%] top-0"
        parallaxSpeed={0.15}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <MotionWrapper>
          <span className="font-[family-name:var(--font-jetbrains)] text-xs text-water-dark-cyan tracking-[0.2em]">
            {"// PROCESS"}
          </span>
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-3">
            How it works
          </h2>
        </MotionWrapper>

        <StaggerGrid className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={staggerItemVariants}
              className="bg-white rounded-xl p-6 relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-200/80"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl"
                style={{
                  background: `linear-gradient(90deg, ${step.color}, transparent)`,
                }}
              />
              <span
                className="font-[family-name:var(--font-jetbrains)] text-3xl font-bold block mb-3"
                style={{ color: step.colorFaded }}
              >
                {step.number}
              </span>
              <h3 className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                {step.description}
              </p>
            </motion.div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}

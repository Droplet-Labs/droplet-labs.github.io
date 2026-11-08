"use client";

import { motion } from "framer-motion";
import { faq } from "@/lib/constants";
import { StaggerGrid, staggerItemVariants } from "@/components/stagger-grid";
import { MotionWrapper } from "@/components/motion-wrapper";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <MotionWrapper>
          <span className="font-[family-name:var(--font-jetbrains)] text-sm text-water-dark-cyan tracking-[0.2em]">
            {faq.eyebrow}
          </span>
          <h2 className="font-[family-name:var(--font-outfit)] text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-3">
            {faq.heading}
          </h2>
        </MotionWrapper>

        <StaggerGrid className="flex flex-col gap-3 mt-10">
          {faq.items.map((item) => (
            <motion.div
              key={item.q}
              variants={staggerItemVariants}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80"
            >
              <h3 className="font-[family-name:var(--font-outfit)] text-base font-semibold text-foreground">
                {item.q}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mt-2">
                {item.a}
              </p>
            </motion.div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}

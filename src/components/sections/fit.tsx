"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { fit } from "@/lib/constants";
import { StaggerGrid, staggerItemVariants } from "@/components/stagger-grid";
import { MotionWrapper } from "@/components/motion-wrapper";

export function Fit() {
  return (
    <section id="fit" className="scroll-mt-20 py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <MotionWrapper>
          <span className="font-[family-name:var(--font-jetbrains)] text-sm text-water-dark-cyan tracking-[0.2em]">
            {fit.eyebrow}
          </span>
          <h2 className="font-[family-name:var(--font-outfit)] text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-3">
            {fit.heading}
          </h2>
        </MotionWrapper>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {fit.columns.map((column, index) => {
            const Icon = index === 0 ? Check : X;
            const iconClass =
              index === 0 ? "text-water-dark-cyan" : "text-muted-foreground";
            return (
              <motion.div
                key={column.title}
                variants={staggerItemVariants}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-200/80"
              >
                <h3 className="font-[family-name:var(--font-outfit)] text-lg font-semibold text-foreground">
                  {column.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {column.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-base text-muted-foreground leading-relaxed"
                    >
                      <Icon
                        size={16}
                        className={`${iconClass} shrink-0 mt-1.5`}
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </StaggerGrid>
      </div>
    </section>
  );
}

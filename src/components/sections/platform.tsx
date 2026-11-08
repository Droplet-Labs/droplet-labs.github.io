"use client";

import { motion } from "framer-motion";
import { platform } from "@/lib/constants";
import { GradientOrb } from "@/components/gradient-orb";
import { StaggerGrid, staggerItemVariants } from "@/components/stagger-grid";
import { MotionWrapper } from "@/components/motion-wrapper";

const cardColor = {
  border: "rgba(6,182,212,0.12)",
  glow: "rgba(6,182,212,0.1)",
  number: "#0891b2",
};

export function Platform() {
  return (
    <section id="platform" className="scroll-mt-20 py-20 md:py-28 relative">
      <GradientOrb
        color="rgba(6,182,212,0.06)"
        size={250}
        className="right-[-5%] top-[20%]"
      />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <MotionWrapper>
          <span className="font-[family-name:var(--font-jetbrains)] text-sm text-water-dark-cyan tracking-[0.2em]">
            {platform.eyebrow}
          </span>
          <h2 className="font-[family-name:var(--font-outfit)] text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-3">
            {platform.heading}
          </h2>
        </MotionWrapper>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {platform.capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              variants={staggerItemVariants}
              className="bg-white rounded-xl p-6 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              style={{
                border: `1px solid ${cardColor.border}`,
                boxShadow: `0 2px 16px ${cardColor.glow}`,
              }}
            >
              {/* Inner glow orb */}
              <div
                className="absolute -top-4 -right-4 w-[70px] h-[70px] rounded-full blur-[15px]"
                style={{
                  background: `radial-gradient(circle, ${cardColor.glow}, transparent)`,
                }}
              />

              <span
                className="font-[family-name:var(--font-jetbrains)] text-sm tracking-[0.15em]"
                style={{ color: cardColor.number }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-[family-name:var(--font-outfit)] text-lg font-semibold text-foreground mt-2">
                {capability.title}
              </h3>
              {capability.detail && (
                <p className="text-base text-muted-foreground leading-relaxed mt-2">
                  {capability.detail}
                </p>
              )}
            </motion.div>
          ))}
        </StaggerGrid>

        <MotionWrapper>
          <p className="mt-10 text-center text-lg font-medium text-foreground border-t border-water-cyan/20 pt-8">
            {platform.boundary}
          </p>
        </MotionWrapper>
      </div>
    </section>
  );
}

"use client";

import { demosSection } from "@/lib/constants";
import { GradientOrb } from "@/components/gradient-orb";
import { MotionWrapper } from "@/components/motion-wrapper";

export function Demos() {
  return (
    <section
      id="demos"
      className="scroll-mt-20 py-20 md:py-28 relative"
      style={{
        background: "linear-gradient(180deg, #e8f4f2 0%, #e0f4f0 100%)",
      }}
    >
      <GradientOrb
        color="rgba(6,182,212,0.06)"
        size={200}
        className="left-[-5%] top-[30%]"
      />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <MotionWrapper>
          <span className="font-[family-name:var(--font-jetbrains)] text-sm text-water-dark-cyan tracking-[0.2em]">
            {demosSection.eyebrow}
          </span>
          <h2 className="font-[family-name:var(--font-outfit)] text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-3">
            {demosSection.heading}
          </h2>
          <p className="text-muted-foreground text-base mt-2">
            {demosSection.note}
          </p>
        </MotionWrapper>
      </div>
    </section>
  );
}

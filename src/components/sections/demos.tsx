"use client";

import { motion } from "framer-motion";
import { demos } from "@/lib/constants";
import { GradientOrb } from "@/components/gradient-orb";
import { StaggerGrid, staggerItemVariants } from "@/components/stagger-grid";
import { MotionWrapper } from "@/components/motion-wrapper";

function DemoPreview({ type }: { type: string }) {
  const base = "w-full h-full opacity-50";
  switch (type) {
    case "dashboard":
      return (
        <div className={`${base} grid grid-cols-3 gap-1.5 p-3`}>
          <div className="bg-water-cyan/15 rounded" />
          <div className="bg-water-sky/12 rounded" />
          <div className="bg-water-cyan/10 rounded" />
          <div className="bg-water-sky/[0.08] rounded col-span-2" />
          <div className="bg-water-cyan/12 rounded" />
        </div>
      );
    case "admin":
      return (
        <div className={`${base} flex gap-1.5 p-3`}>
          <div className="w-[30%] bg-water-teal/12 rounded" />
          <div className="flex-1 flex flex-col gap-1">
            <div className="h-4 bg-water-teal/[0.08] rounded" />
            <div className="h-4 bg-water-teal/[0.06] rounded" />
            <div className="h-4 bg-water-teal/[0.08] rounded" />
          </div>
        </div>
      );
    case "chat":
      return (
        <div
          className={`${base} flex flex-col gap-1.5 p-3 justify-end`}
        >
          <div className="h-4 bg-water-cyan/[0.08] rounded-full w-[70%] self-start" />
          <div className="h-4 bg-water-sky/12 rounded-full w-[55%] self-end" />
          <div className="h-4 bg-water-cyan/[0.08] rounded-full w-[65%] self-start" />
          <div className="h-3 bg-water-cyan/[0.06] rounded w-full mt-1" />
        </div>
      );
    case "wizard":
      return (
        <div
          className={`${base} flex flex-col items-center justify-center gap-2 p-3`}
        >
          <div className="flex gap-2.5">
            <div className="w-6 h-6 rounded-full bg-water-cyan/15" />
            <div className="w-6 h-6 rounded-full bg-water-teal/12" />
            <div className="w-6 h-6 rounded-full bg-water-sky/10" />
          </div>
          <div className="h-1.5 w-[60%] bg-water-cyan/10 rounded mt-1" />
          <div className="h-5 w-[40%] bg-water-cyan/[0.08] rounded mt-1" />
        </div>
      );
    default:
      return null;
  }
}

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
            {"// DEMOS"}
          </span>
          <h2 className="font-[family-name:var(--font-outfit)] text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-3">
            See it in action
          </h2>
          <p className="text-muted-foreground text-base mt-2">
            Click through, break things — it&apos;s all real code
          </p>
        </MotionWrapper>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {demos.map((demo) => (
            <motion.div
              key={demo.title}
              variants={staggerItemVariants}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="h-32 md:h-40 border-b border-slate-100"
                style={{
                  background:
                    "linear-gradient(135deg, #ecfeff, #f0f9ff)",
                }}
              >
                <DemoPreview type={demo.previewType} />
              </div>
              <div className="p-5">
                <h3 className="font-[family-name:var(--font-outfit)] text-base font-semibold text-foreground">
                  {demo.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {demo.description}
                </p>
                <span className="font-[family-name:var(--font-jetbrains)] text-sm text-water-dark-cyan mt-3 inline-block">
                  Try demo &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}

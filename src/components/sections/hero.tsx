"use client";

import { motion } from "framer-motion";
import { GradientOrb } from "@/components/gradient-orb";
import { FloatingCard } from "@/components/floating-card";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" as const },
});

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, #041c2c 0%, #0a2a3c 30%, #0d3448 60%, #164e63 85%)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-32 md:pb-40 relative flex flex-col justify-center min-h-[calc(100vh-64px)]">
        {/* Gradient Orbs */}
        <GradientOrb
          color="rgba(6,182,212,0.2)"
          size={400}
          className="right-[-5%] top-[10%]"
        />
        <GradientOrb
          color="rgba(34,211,238,0.15)"
          size={200}
          className="right-[20%] bottom-[15%]"
          floatDuration={6}
        />
        <GradientOrb
          color="rgba(8,145,178,0.12)"
          size={150}
          className="left-[5%] bottom-[30%]"
          floatDuration={10}
        />

        {/* Floating Glass Cards (desktop only) */}
        <div className="hidden md:block">
          <FloatingCard
            rotation={2}
            className="absolute right-12 top-24 w-[200px] z-[1]"
            floatDuration={7}
          >
            <div className="flex gap-1.5 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-water-cyan/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-water-sky/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-water-teal/30" />
            </div>
            <div className="h-1.5 w-[85%] bg-water-cyan/15 rounded mb-1.5" />
            <div className="h-1.5 w-[60%] bg-water-cyan/10 rounded mb-1.5" />
            <div className="h-1.5 w-[72%] bg-water-cyan/[0.08] rounded" />
            <div className="mt-3 flex gap-1.5">
              <div className="h-5 w-14 bg-gradient-to-r from-water-cyan/20 to-water-sky/15 rounded" />
              <div className="h-5 w-10 bg-white/[0.06] rounded" />
            </div>
          </FloatingCard>

          <FloatingCard
            rotation={-1.5}
            className="absolute right-28 bottom-20 w-[160px] z-[1]"
            floatDuration={5}
          >
            <div className="h-14 bg-water-cyan/[0.08] rounded-lg mb-2.5 flex items-center justify-center">
              <div className="flex gap-2">
                <div className="w-5 h-5 rounded-full border border-water-cyan/30" />
                <div className="w-5 h-5 rounded-full border border-water-sky/20" />
              </div>
            </div>
            <div className="h-1 w-[65%] bg-water-cyan/10 rounded" />
          </FloatingCard>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-xl">
          <motion.span
            {...fadeUp(0)}
            className="font-[family-name:var(--font-jetbrains)] text-xs text-cyan-300/70 tracking-[0.2em]"
          >
            {"// WEB · SAAS · AI"}
          </motion.span>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-[family-name:var(--font-outfit)] text-5xl md:text-7xl font-bold tracking-tighter leading-[1.02] text-white mt-4"
          >
            We build software
            <br />
            that scales
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="text-white/50 text-base md:text-lg leading-relaxed mt-6 max-w-md"
          >
            From pixel-perfect websites to full-stack SaaS platforms —
            supercharged with AI. We ship fast, build smart, and don&apos;t do
            mediocre.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex gap-3 mt-8">
            <a
              href="#contact"
              className="inline-flex items-center bg-white text-ocean-teal font-bold text-sm py-3 px-7 rounded-xl hover:bg-white/90 transition-colors"
            >
              Start a Project
            </a>
            <a
              href="#demos"
              className="inline-flex items-center border border-white/15 bg-white/5 backdrop-blur text-white/80 text-sm py-3 px-7 rounded-xl hover:bg-white/10 transition-colors"
            >
              See Live Demos
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.4)}
            className="flex gap-8 md:gap-12 mt-12 pt-7 border-t border-white/[0.08]"
          >
            {[
              { value: "4–6 wk", label: "Avg time to launch" },
              { value: "Pre-built", label: "SaaS modules" },
              { value: "End-to-end", label: "Build to support" },
            ].map((stat) => (
              <div key={stat.value}>
                <span className="font-[family-name:var(--font-outfit)] text-white font-bold text-base">
                  {stat.value}
                </span>
                <br />
                <span className="text-white/35 text-xs">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

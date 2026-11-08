"use client";

import { motion } from "framer-motion";
import { GradientOrb } from "@/components/gradient-orb";
import { PlatformStack } from "@/components/platform-stack";
import { hero, CALENDLY_URL } from "@/lib/constants";

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

        {/* Hero Content */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12 items-center">
          <div>
            <motion.span
              {...fadeUp(0)}
              className="font-[family-name:var(--font-jetbrains)] text-xs text-cyan-300/70 tracking-[0.2em]"
            >
              {hero.eyebrow}
            </motion.span>

            <motion.h1
              {...fadeUp(0.1)}
              className="font-[family-name:var(--font-outfit)] text-5xl md:text-6xl font-bold tracking-tighter leading-[1.05] text-white mt-4"
            >
              {hero.headline}
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-white/50 text-base md:text-lg leading-relaxed mt-6 max-w-md"
            >
              {hero.sub}
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="flex gap-3 mt-8">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-ocean-teal font-bold text-sm py-3 px-7 rounded-xl hover:bg-white/90 transition-colors"
              >
                {hero.primaryCta}
              </a>
              <a
                href="#demos"
                className="inline-flex items-center border border-white/15 bg-white/5 backdrop-blur text-white/80 text-sm py-3 px-7 rounded-xl hover:bg-white/10 transition-colors"
              >
                {hero.secondaryCta}
              </a>
            </motion.div>

            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-wrap gap-8 md:gap-12 mt-12 pt-7 border-t border-white/[0.08]"
            >
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <span className="font-[family-name:var(--font-outfit)] text-white font-bold text-base">
                    {stat.value}
                  </span>
                  <br />
                  <span className="text-white/35 text-xs">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.3)} className="hidden md:block">
            <PlatformStack layers={hero.stack} caption={hero.stackCaption} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

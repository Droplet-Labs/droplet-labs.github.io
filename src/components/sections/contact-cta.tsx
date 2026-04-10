"use client";

import { motion } from "framer-motion";
import { GradientOrb } from "@/components/gradient-orb";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" as const },
  transition: { duration: 0.8, delay, ease: "easeOut" as const },
});

export function ContactCta() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 relative overflow-hidden py-24 md:py-32"
      style={{ background: "#041c2c" }}
    >
      <GradientOrb
        color="rgba(6,182,212,0.1)"
        size={300}
        className="left-[20%] top-[30%]"
        parallaxSpeed={0.2}
      />
      <GradientOrb
        color="rgba(14,165,233,0.08)"
        size={200}
        className="right-[20%] bottom-[10%]"
        parallaxSpeed={0.3}
        floatDuration={6}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.span
          {...fadeUp(0)}
          className="font-[family-name:var(--font-jetbrains)] text-xs text-water-dark-cyan tracking-[0.2em]"
        >
          {"// LET'S GO"}
        </motion.span>

        <motion.h2
          {...fadeUp(0.1)}
          className="font-[family-name:var(--font-outfit)] text-3xl md:text-5xl font-bold tracking-tight text-white mt-4"
        >
          Got an idea? Let&apos;s build it.
        </motion.h2>

        <motion.p
          {...fadeUp(0.2)}
          className="text-white/50 text-base mt-4 max-w-md mx-auto"
        >
          Tell us what you need — we&apos;ll tell you how fast we can ship it.
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row gap-3 justify-center mt-10"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center bg-white text-ocean-teal font-bold text-sm py-3.5 px-8 rounded-xl hover:bg-white/90 transition-colors"
          >
            Book a Call
          </a>
          <a
            href="mailto:hello@dropletlabs.com"
            className="inline-flex items-center justify-center border border-white/15 bg-white/5 backdrop-blur text-white/80 text-sm py-3.5 px-8 rounded-xl hover:bg-white/10 transition-colors"
          >
            Email Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

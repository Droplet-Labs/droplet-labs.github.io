"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/constants";
import { GradientOrb } from "@/components/gradient-orb";
import { StaggerGrid, staggerItemVariants } from "@/components/stagger-grid";
import { MotionWrapper } from "@/components/motion-wrapper";

export function ServicesBuild() {
  return (
    <section id="services" className="scroll-mt-20 py-20 md:py-28 relative">
      <GradientOrb
        color="rgba(6,182,212,0.06)"
        size={250}
        className="left-[-5%] top-[20%]"
        parallaxSpeed={0.15}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <MotionWrapper>
          <span className="font-[family-name:var(--font-jetbrains)] text-sm text-water-dark-cyan tracking-[0.2em]">
            {"// SERVICES"}
          </span>
          <h2 className="font-[family-name:var(--font-outfit)] text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-3">
            What we build
          </h2>
        </MotionWrapper>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {services.map((service) => (
            <motion.div
              key={service.number}
              variants={staggerItemVariants}
              className="bg-white rounded-xl p-6 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              style={{
                border: `1px solid ${service.color.border}`,
                boxShadow: `0 2px 16px ${service.color.glow}`,
              }}
            >
              {/* Inner glow orb */}
              <div
                className="absolute -top-4 -right-4 w-[70px] h-[70px] rounded-full blur-[15px]"
                style={{
                  background: `radial-gradient(circle, ${service.color.glow}, transparent)`,
                }}
              />

              <span
                className="font-[family-name:var(--font-jetbrains)] text-sm tracking-[0.15em]"
                style={{ color: service.color.tagText }}
              >
                {service.number}
              </span>
              <h3 className="font-[family-name:var(--font-outfit)] text-lg font-semibold text-foreground mt-2">
                {service.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mt-2">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-[family-name:var(--font-jetbrains)] text-sm px-2.5 py-1 rounded"
                    style={{
                      backgroundColor: service.color.tagBg,
                      color: service.color.tagText,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}

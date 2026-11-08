"use client";

import { ownership } from "@/lib/constants";
import { MotionWrapper } from "@/components/motion-wrapper";

export function Ownership() {
  return (
    <section
      id="ownership"
      className="scroll-mt-20 py-16 md:py-20"
      style={{ background: "#0d3448" }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <MotionWrapper>
          <h2 className="font-[family-name:var(--font-outfit)] text-4xl md:text-5xl font-bold tracking-tight text-white">
            {ownership.heading}
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mt-4">
            {ownership.body}
          </p>
        </MotionWrapper>
      </div>
    </section>
  );
}

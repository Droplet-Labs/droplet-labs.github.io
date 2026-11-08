"use client";

import { useEffect, useRef, useState } from "react";
import { story } from "@/lib/constants";
import { PlatformDiagram, type Stage } from "@/components/platform-diagram";

// 1-based index of the last chapter whose top has crossed the viewport
// midline, or 0 before the first one. Set on every scroll, so scrolling
// back up reverses the stages.
function useStage(container: React.RefObject<HTMLElement | null>): Stage {
  const [stage, setStage] = useState<Stage>(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const midline = window.innerHeight / 2;
      const chapters = container.current?.querySelectorAll("article") ?? [];
      let next = 0;
      chapters.forEach((el, i) => {
        if (el.getBoundingClientRect().top <= midline) next = i + 1;
      });
      setStage(Math.min(next, 5) as Stage);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [container]);

  return stage;
}

function useCompact(): boolean {
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 859px)");
    const apply = () => setCompact(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return compact;
}

export function Descent() {
  const chaptersRef = useRef<HTMLDivElement | null>(null);
  const stage = useStage(chaptersRef);
  const compact = useCompact();

  return (
    <section
      id="platform"
      className="scroll-mt-16 bg-[#041c2c] text-white grid grid-cols-1 md:grid-cols-2"
    >
      <div className="sticky top-16 md:top-0 h-[44vh] md:h-screen bg-[#041c2c] flex items-center justify-center px-5 md:px-10">
        <PlatformDiagram stage={stage} compact={compact} />
      </div>

      <div ref={chaptersRef} className="px-5 md:pl-8 md:pr-16">
        {story.chapters.map((chapter) => (
          <article
            key={chapter.tag}
            className="min-h-[56vh] md:min-h-screen flex flex-col justify-start md:justify-center pt-8 md:pt-0 max-w-[30ch]"
          >
            <span className="font-[family-name:var(--font-jetbrains)] text-[13px] text-[#06b6d4] mb-4">
              {chapter.tag}
            </span>
            <h2 className="text-[28px] md:text-[clamp(34px,4vw,56px)] font-semibold tracking-[-0.03em] leading-none">
              {chapter.heading}
            </h2>
            <p className="mt-5 text-base md:text-[19px] leading-relaxed text-white/60 max-w-[38ch]">
              {chapter.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

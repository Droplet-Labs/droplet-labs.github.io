import { story } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen grid place-items-center text-center overflow-hidden pt-16"
      style={{
        background:
          "linear-gradient(180deg, #0a3448 0%, #06283a 60%, #041c2c 100%)",
      }}
    >
      <div className="px-5 md:px-8 pb-24">
        <div
          className="w-3.5 h-3.5 rounded-full bg-white mx-auto mb-10 story-bob"
          style={{
            boxShadow:
              "0 0 0 6px rgba(255,255,255,0.12), 0 0 40px 10px rgba(6,182,212,0.6)",
          }}
          aria-hidden="true"
        />
        <h1 className="text-[clamp(48px,8vw,120px)] font-semibold tracking-[-0.03em] leading-[0.95] text-white">
          {story.hero.headline}
        </h1>
        <p className="text-[clamp(20px,3.4vw,50px)] font-medium text-white/70 leading-snug mt-7 max-w-[26ch] mx-auto">
          {story.hero.sub}
        </p>
      </div>

      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 text-[13px] text-white/60">
        <span>{story.hero.hint}</span>
        <span
          className="block w-px h-9 story-hint"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.6), transparent)",
          }}
          aria-hidden="true"
        />
      </div>

      <svg
        className="absolute bottom-[-2px] inset-x-0 w-full h-[120px]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,60 C240,110 480,10 720,60 C960,110 1200,10 1440,60 L1440,120 L0,120 Z"
          fill="#041c2c"
        />
      </svg>
    </section>
  );
}

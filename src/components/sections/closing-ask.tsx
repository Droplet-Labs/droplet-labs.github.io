import { story, CALENDLY_URL } from "@/lib/constants";

export function ClosingAsk() {
  return (
    <section className="bg-[#041c2c] text-white py-20 px-5 md:px-8 text-center">
      <p className="text-[clamp(24px,3vw,36px)] font-semibold tracking-[-0.02em] max-w-[24ch] mx-auto">
        {story.closing.line}
      </p>
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 rounded-full bg-white text-[#041c2c] font-semibold px-7 py-4 text-[17px] hover:bg-white/90 transition-colors"
      >
        {story.closing.cta}
      </a>
    </section>
  );
}

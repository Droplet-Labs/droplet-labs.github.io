import { story, CALENDLY_URL, CONTACT_EMAIL } from "@/lib/constants";

const DOT_DELAYS = [0, 0.4, 0.8, 1.2, 1.6];

export function Rise() {
  return (
    <section
      id="contact"
      className="scroll-mt-16 min-h-screen grid place-items-center text-center px-5 md:px-8"
      style={{
        background:
          "linear-gradient(180deg, #041c2c 0%, #164e63 55%, #e8f4f2 100%)",
      }}
    >
      <div className="py-24">
        <div className="flex justify-center gap-[18px] mb-9" aria-hidden="true">
          {DOT_DELAYS.map((delay) => (
            <span
              key={delay}
              className="w-3 h-3 rounded-full bg-white story-bob"
              style={{
                boxShadow: "0 0 24px 6px rgba(6,182,212,0.55)",
                animationDelay: `${delay}s`,
              }}
            />
          ))}
        </div>
        <h2 className="text-[clamp(40px,6vw,88px)] font-semibold tracking-[-0.03em] leading-none text-white">
          {story.rise.heading}
        </h2>
        <p className="mt-6 max-w-[44ch] mx-auto text-xl text-white/75">
          {story.rise.body}
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 rounded-full bg-white text-[#041c2c] font-semibold px-7 py-4 text-[17px] hover:bg-white/90 transition-colors"
        >
          {story.rise.cta}
        </a>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-5 block text-white/70 underline underline-offset-4 hover:text-white transition-colors"
        >
          {story.rise.emailLabel}
        </a>
      </div>
    </section>
  );
}

import { demosSection } from "@/lib/constants";

export function Demos() {
  return (
    <section id="demos" className="scroll-mt-16 py-20 md:py-[104px]">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8">
        <h2 className="text-[clamp(34px,3.6vw,48px)] font-semibold tracking-[-0.03em] leading-none text-[#0f172a]">
          {demosSection.heading}
        </h2>
        <p className="mt-3 text-[17px] text-[#4b5a6b]">{demosSection.note}</p>
      </div>
    </section>
  );
}

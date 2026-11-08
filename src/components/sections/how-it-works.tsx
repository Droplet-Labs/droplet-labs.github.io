import { steps, processSection } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 py-20 md:py-[104px]">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8">
        <h2 className="text-[clamp(34px,3.6vw,48px)] font-semibold tracking-[-0.03em] leading-none text-[#0f172a]">
          {processSection.heading}
        </h2>

        <ol className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14 list-none p-0">
          {steps.map((step, index) => (
            <li key={step.title} className="pt-[18px] border-t-2 border-[#0f172a]">
              <span className="font-[family-name:var(--font-jetbrains)] text-[13px] text-[#0e7490]">
                {index + 1}
              </span>
              <h3 className="text-[22px] font-semibold tracking-[-0.015em] mt-2.5 text-[#0f172a]">
                {step.title}
              </h3>
              <p className="text-base text-[#4b5a6b] leading-relaxed mt-2">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

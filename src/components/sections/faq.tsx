import { faq } from "@/lib/constants";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-16 py-20 md:py-[104px]">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8">
        <h2 className="text-[clamp(34px,3.6vw,48px)] font-semibold tracking-[-0.03em] leading-none text-[#0f172a]">
          {faq.heading}
        </h2>

        <dl className="mt-14 border-t border-[rgba(8,145,178,0.22)]">
          {faq.items.map((item) => (
            <div
              key={item.q}
              className="py-6 border-b border-[rgba(8,145,178,0.22)]"
            >
              <dt className="text-xl font-semibold tracking-[-0.01em] text-[#0f172a]">
                {item.q}
              </dt>
              <dd className="mt-2 text-[17px] text-[#4b5a6b] leading-relaxed max-w-[60ch]">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

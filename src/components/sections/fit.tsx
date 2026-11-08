import { fit } from "@/lib/constants";

export function Fit() {
  return (
    <section id="fit" className="scroll-mt-16 py-20 md:py-[104px]">
      <div className="max-w-[1120px] mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <h2 className="text-[clamp(34px,3.6vw,48px)] font-semibold tracking-[-0.03em] leading-none text-[#0f172a]">
          {fit.heading}
        </h2>

        <div className="flex flex-col gap-10">
          {fit.columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold text-[#0f172a]">
                {column.title}
              </h3>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-[17px] text-[#4b5a6b] leading-relaxed">
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

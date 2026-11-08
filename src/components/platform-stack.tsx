export function PlatformStack({
  layers,
  caption,
}: {
  layers: readonly [string, string, string];
  caption: string;
}) {
  const [agents, platform, cloud] = layers;
  const base =
    "border rounded-xl px-5 py-4 text-center text-sm font-[family-name:var(--font-outfit)]";

  return (
    <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
      <div
        className={`${base} bg-water-cyan/25 border-water-cyan/50 text-white font-semibold`}
      >
        {agents}
      </div>
      <div
        className={`${base} bg-white/[0.06] border-dashed border-water-cyan/40 text-white py-6`}
      >
        <span className="font-semibold">{platform}</span>
        <span className="block text-cyan-200/70 text-xs mt-1">{caption}</span>
      </div>
      <div
        className={`${base} bg-white/[0.06] border-white/[0.08] text-cyan-100/60`}
      >
        {cloud}
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";

export function WaveDivider({
  direction,
  className,
}: {
  direction: "hero-to-body" | "body-to-cta";
  className?: string;
}) {
  if (direction === "hero-to-body") {
    return (
      <div className={cn("relative -mt-px -mb-px bg-[#0d3448]", className)}>
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full h-[60px] md:h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C240,100 480,20 720,60 C960,100 1200,30 1440,50 L1440,120 L0,120 Z"
            fill="#e8f4f2"
            fillOpacity="0.5"
          />
          <path
            d="M0,60 C300,110 600,10 900,70 C1100,100 1300,40 1440,60 L1440,120 L0,120 Z"
            fill="#e8f4f2"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={cn("relative -mt-px -mb-px bg-body-tint", className)}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full h-[60px] md:h-[120px]"
        preserveAspectRatio="none"
      >
        <path
          d="M0,80 C240,20 480,100 720,60 C960,20 1200,90 1440,70 L1440,120 L0,120 Z"
          fill="#041c2c"
          fillOpacity="0.5"
        />
        <path
          d="M0,60 C300,10 600,110 900,50 C1100,20 1300,80 1440,40 L1440,120 L0,120 Z"
          fill="#041c2c"
        />
      </svg>
    </div>
  );
}

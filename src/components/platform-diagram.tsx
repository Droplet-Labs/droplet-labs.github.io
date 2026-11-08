import { story } from "@/lib/constants";
import { cn } from "@/lib/utils";

export type Stage = 0 | 1 | 2 | 3 | 4 | 5;

// Stage at which each layer (top to bottom) lights up. Layers 4 and 5 light
// together at stage 4; stage 5 turns everything "owned".
const LIT_AT = [1, 2, 3, 4, 4] as const;

export function PlatformDiagram({
  stage,
  compact = false,
}: {
  stage: Stage;
  compact?: boolean;
}) {
  const owned = stage === 5;

  return (
    <svg
      viewBox="0 0 520 620"
      className="w-full max-w-[520px] max-h-[calc(100vh-48px)] h-auto"
      aria-label="The platform beneath an agent"
      role="img"
    >
      {/* surface line and the agent */}
      <path
        d="M0 40 C 90 20, 170 60, 260 40 S 430 20, 520 40"
        stroke="rgba(165,243,252,0.35)"
        fill="none"
        strokeWidth="1.5"
      />
      <circle cx="260" cy="40" r="14" fill="rgba(6,182,212,0.5)" />
      <circle cx="260" cy="40" r="7" fill="#fff" />
      <path className={cn("flow", stage >= 1 && "on")} d="M260 50 V 100" />

      {story.layers.map((layer, i) => (
        <g
          key={layer.title}
          className={cn(
            "layer",
            !owned && stage >= LIT_AT[i] && "on",
            owned && "owned"
          )}
          transform={`translate(60, ${100 + 96 * i})`}
        >
          <rect width="400" height="78" rx="14" />
          <text
            x="20"
            y={compact ? 48 : 34}
            fontSize={compact ? 24 : 15}
            fontWeight="600"
            style={{ fontFamily: "inherit" }}
          >
            {layer.title}
          </text>
          {!compact && (
            <text
              className="sub"
              x="20"
              y="56"
              fontSize="12"
              style={{ fontFamily: "inherit" }}
            >
              {layer.sub}
            </text>
          )}
        </g>
      ))}

      <text
        className={cn("fade", owned && "on")}
        x="260"
        y="600"
        textAnchor="middle"
        fontSize={compact ? 16 : 13}
        fill="rgba(165,243,252,0.6)"
        style={{ fontFamily: "inherit" }}
      >
        {story.cloudCaption}
      </text>

      <g className={cn("fade", owned && "on")}>
        <rect
          x="330"
          y="8"
          width="130"
          height="24"
          rx="12"
          fill="rgba(20,184,166,0.18)"
          stroke="rgba(94,234,212,0.8)"
        />
        <text
          x="395"
          y="24"
          textAnchor="middle"
          fontSize="12"
          fill="#5eead4"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          {story.ownedTag}
        </text>
      </g>
    </svg>
  );
}

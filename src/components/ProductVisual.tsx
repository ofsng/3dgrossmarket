import Image from "next/image";
import type { ShapeKey } from "@/lib/products";

type Props = {
  shape: ShapeKey;
  hue: number;
  image?: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

function Shape({ shape, hue }: { shape: ShapeKey; hue: number }) {
  const c1 = `hsl(${hue} 70% 62%)`;
  const c2 = `hsl(${(hue + 28) % 360} 75% 45%)`;
  const line = `hsl(${hue} 60% 78%)`;
  const id = `g-${shape}-${hue}`;

  const common = {
    fill: `url(#${id})`,
    stroke: line,
    strokeWidth: 1.4,
    strokeOpacity: 0.55,
  };

  return (
    <svg
      viewBox="0 0 200 200"
      className="h-full w-full"
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c1} />
          <stop offset="100%" stopColor={c2} />
        </linearGradient>
        <pattern
          id={`${id}-layers`}
          width="6"
          height="6"
          patternUnits="userSpaceOnUse"
        >
          <rect width="6" height="1" fill="#fff" opacity="0.14" />
        </pattern>
      </defs>

      {shape === "mask" && (
        <g {...common}>
          <path d="M100 26c34 0 54 16 54 44 0 44-24 96-54 104-30-8-54-60-54-104 0-28 20-44 54-44Z" />
          <ellipse cx="76" cy="92" rx="14" ry="9" fill={line} opacity="0.75" stroke="none" />
          <ellipse cx="124" cy="92" rx="14" ry="9" fill={line} opacity="0.75" stroke="none" />
          <path d="M82 138q18 12 36 0" fill="none" stroke={line} strokeWidth="3" strokeOpacity="0.8" />
        </g>
      )}

      {shape === "box" && (
        <g {...common}>
          <path d="M100 34 170 68v70l-70 34-70-34V68Z" />
          <path d="M30 68 100 102l70-34M100 102v70" fill="none" stroke={line} strokeWidth="2" strokeOpacity="0.7" />
        </g>
      )}

      {shape === "ball" && (
        <g {...common}>
          <circle cx="100" cy="100" r="66" />
          {[0, 60, 120].map((r) => (
            <ellipse
              key={r}
              cx="100"
              cy="100"
              rx="66"
              ry="24"
              fill="none"
              stroke={line}
              strokeWidth="2"
              strokeOpacity="0.6"
              transform={`rotate(${r} 100 100)`}
            />
          ))}
        </g>
      )}

      {shape === "figure" && (
        <g {...common}>
          <path d="M60 150c0-26 14-34 14-54 0-16-12-22-12-38 0-14 12-24 30-24s34 12 34 30c0 22-18 28-18 44 0 18 16 24 16 42 0 14-14 22-32 22s-32-8-32-22Z" />
          {[0, 1, 2, 3].map((i) => (
            <path
              key={i}
              d={`M66 ${104 + i * 14}q34 10 68 0`}
              fill="none"
              stroke={line}
              strokeWidth="2"
              strokeOpacity="0.55"
            />
          ))}
        </g>
      )}

      {shape === "gear" && (
        <g {...common}>
          <path d="M100 30 118 40l20-4 8 19 19 8-4 20 10 18-14 15 1 20-20 4-13 16-19-8-19 8-13-16-20-4 1-20-14-15 10-18-4-20 19-8 8-19 20 4Z" />
          <circle cx="100" cy="100" r="24" fill="#0b0f14" opacity="0.45" stroke={line} strokeWidth="2" />
        </g>
      )}

      {shape === "vase" && (
        <g {...common}>
          <path d="M78 34h44l-6 26c18 14 28 34 28 56 0 30-20 50-44 50s-44-20-44-50c0-22 10-42 28-56Z" />
          <path d="M68 96q32 16 64 0M64 120q36 16 72 0" fill="none" stroke={line} strokeWidth="2" strokeOpacity="0.6" />
        </g>
      )}

      {shape === "part" && (
        <g {...common}>
          <path d="M44 62h112a10 10 0 0 1 10 10v56a10 10 0 0 1-10 10H44a10 10 0 0 1-10-10V72a10 10 0 0 1 10-10Z" />
          <circle cx="62" cy="100" r="9" fill="#0b0f14" opacity="0.5" stroke={line} strokeWidth="2" />
          <circle cx="138" cy="100" r="9" fill="#0b0f14" opacity="0.5" stroke={line} strokeWidth="2" />
          <path d="M84 100h32" stroke={line} strokeWidth="3" strokeOpacity="0.8" />
        </g>
      )}

      {shape === "keychain" && (
        <g {...common}>
          <circle cx="100" cy="52" r="16" fill="none" stroke={line} strokeWidth="5" strokeOpacity="0.8" />
          <path d="M66 76h68a10 10 0 0 1 10 10v54a10 10 0 0 1-10 10H66a10 10 0 0 1-10-10V86a10 10 0 0 1 10-10Z" />
          <path d="M74 106h52M74 124h34" stroke={line} strokeWidth="3" strokeOpacity="0.7" />
        </g>
      )}

      <rect width="200" height="200" fill={`url(#${id}-layers)`} />
    </svg>
  );
}

export default function ProductVisual({
  shape,
  hue,
  image,
  alt,
  className = "",
  priority,
}: Props) {
  return (
    <div
      className={`relative overflow-hidden bg-[var(--surface-2)] ${className}`}
      style={{
        backgroundImage: image
          ? undefined
          : `radial-gradient(circle at 30% 25%, hsl(${hue} 55% 22%), var(--surface-2) 70%)`,
      }}
    >
      {image ? (
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          priority={priority}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center p-6">
          <Shape shape={shape} hue={hue} />
        </div>
      )}
    </div>
  );
}

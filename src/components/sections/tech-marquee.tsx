"use client";

import { getPortfolio } from "@/lib/portfolio";

export function TechMarquee() {
  const { marquee } = getPortfolio();
  const row1 = [...marquee, ...marquee];
  const row2 = [...[...marquee].reverse(), ...[...marquee].reverse()];

  return (
    <section
      className="marquee-pause relative overflow-hidden border-y border-border bg-surface/50 py-5"
      aria-label="Technologies"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-20" />

      <div className="flex animate-marquee gap-8 whitespace-nowrap pb-3">
        {row1.map((item, i) => (
          <span
            key={`a-${item}-${i}`}
            className="inline-flex items-center gap-2.5 font-mono text-xs text-text-secondary transition-colors hover:text-text-primary sm:text-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary shadow-sm shadow-primary/40" />
            {item}
          </span>
        ))}
      </div>
      <div className="flex animate-marquee-reverse gap-8 whitespace-nowrap opacity-50">
        {row2.map((item, i) => (
          <span
            key={`b-${item}-${i}`}
            className="inline-flex items-center gap-2.5 font-mono text-xs text-text-muted sm:text-sm"
          >
            <span className="h-1 w-1 rounded-full bg-secondary/60" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

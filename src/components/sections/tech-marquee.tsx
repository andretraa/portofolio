"use client";

import { getPortfolio } from "@/lib/portfolio";

export function TechMarquee() {
  const { marquee } = getPortfolio();
  const items = [...marquee, ...marquee];

  return (
    <section
      className="relative overflow-hidden border-y border-border bg-surface/40 py-5"
      aria-label="Technologies"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      <div className="flex animate-marquee gap-8 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-3 font-mono text-sm text-text-secondary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

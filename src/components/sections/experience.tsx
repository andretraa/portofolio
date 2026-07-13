"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "@/components/ui";
import {
  getDefaultExperienceId,
  getPortfolio,
  getSectionConfig,
  getSectionNumber,
} from "@/lib/portfolio";
import { AnimatedSection, FadeUp } from "@/lib/animations";

export function Experience() {
  const { experience } = getPortfolio();
  const section = getSectionConfig("experience");
  const heading = section?.heading;
  const [activeId, setActiveId] = useState<string | null>(
    getDefaultExperienceId()
  );

  return (
    <AnimatedSection
      id="experience"
      className={section?.className ?? "section-padding section-glow"}
    >
      <div className="section-container">
        {heading && (
          <FadeUp>
            <SectionHeading
              number={getSectionNumber("experience")}
              label={heading.label}
              title={heading.title}
              subtitle={heading.subtitle}
              align={heading.align}
            />
          </FadeUp>
        )}

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />

          {experience.map((item, index) => {
            const isActive = activeId === item.id;
            return (
              <FadeUp key={item.id} delay={index * 0.1}>
                <div className="relative mb-10 last:mb-0">
                  <div
                    className={`absolute left-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 transition-all duration-300 md:left-1/2 ${
                      isActive
                        ? "border-primary bg-primary shadow-lg shadow-primary/40"
                        : "border-border bg-background"
                    }`}
                  />

                  <button
                    type="button"
                    className={`ml-14 w-full rounded-2xl border p-6 text-left transition-all duration-300 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                      index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                    } ${
                      isActive
                        ? "glass-card border-primary/30 glow-primary"
                        : "border-border bg-surface/40 hover:border-primary/20 hover:bg-surface/60"
                    }`}
                    onClick={() =>
                      setActiveId(isActive ? null : item.id)
                    }
                    aria-expanded={isActive}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-mono text-sm font-medium text-primary">
                          {item.year}
                        </span>
                        <h3 className="mt-1 font-heading text-lg font-semibold text-text-primary">
                          {item.title}
                        </h3>
                        <p className="mt-0.5 text-sm text-text-secondary">
                          {item.company}
                        </p>
                      </div>
                      <motion.span
                        animate={{ rotate: isActive ? 180 : 0 }}
                        className="mt-1 text-text-muted"
                      >
                        ▾
                      </motion.span>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                            {item.description}
                          </p>
                          <ul className="mt-4 space-y-2.5">
                            {item.highlights.map((highlight) => (
                              <li
                                key={highlight}
                                className="flex items-start gap-3 text-sm text-text-secondary"
                              >
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-secondary" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

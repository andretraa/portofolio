"use client";

import { motion } from "framer-motion";
import { journey } from "@/data/experience";
import { SectionHeading } from "@/components/ui";
import { AnimatedSection, FadeUp } from "@/lib/animations";

export function Journey() {
  return (
    <AnimatedSection id="journey" className="section-padding section-glow">
      <div className="section-container">
        <FadeUp>
          <SectionHeading
            label="Timeline"
            title="Journey"
            subtitle="From intern to senior engineer — building expertise across domains."
          />
        </FadeUp>

        <div className="relative overflow-x-auto pb-4">
          <div className="absolute top-[3.25rem] right-8 left-8 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />

          <div className="flex min-w-max items-start gap-0 px-2">
            {journey.map((step, index) => (
              <FadeUp key={`${step.year}-${step.label}`} delay={index * 0.07}>
                <div className="flex items-start">
                  <div className="flex w-28 flex-col items-center md:w-36">
                    <span className="font-mono text-xs text-primary">
                      {step.year}
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="relative z-10 mt-3 flex h-11 w-11 items-center justify-center rounded-full border-2 border-primary/50 bg-surface shadow-lg shadow-primary/10"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-primary to-secondary" />
                    </motion.div>
                    <span className="mt-4 max-w-[110px] text-center text-sm leading-snug text-text-secondary">
                      {step.label}
                    </span>
                  </div>
                  {index < journey.length - 1 && (
                    <div className="mt-[3.25rem] flex items-center">
                      <div className="h-px w-8 bg-gradient-to-r from-primary/40 to-secondary/40 md:w-12" />
                      <span className="text-text-muted/40">→</span>
                      <div className="h-px w-8 bg-gradient-to-r from-secondary/40 to-primary/40 md:w-12" />
                    </div>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

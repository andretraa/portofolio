"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/skills";
import { SectionHeading } from "@/components/ui";
import { AnimatedSection, FadeUp } from "@/lib/animations";

const categoryColors: Record<string, string> = {
  Backend: "#4F46E5",
  Frontend: "#06B6D4",
  Mobile: "#8B5CF6",
  Database: "#10B981",
  Infrastructure: "#F59E0B",
  Design: "#EC4899",
};

export function TechStack() {
  return (
    <AnimatedSection
      id="tech-stack"
      className="section-padding bg-surface/20 section-glow"
    >
      <div className="section-container">
        <FadeUp>
          <SectionHeading
            label="Tools"
            title="Tech Stack"
            subtitle="Technologies I work with to build reliable software."
          />
        </FadeUp>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(techStack).map(([category, items], catIndex) => {
            const color = categoryColors[category] ?? "#4F46E5";
            return (
              <FadeUp key={category} delay={catIndex * 0.06}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card group h-full rounded-2xl p-6 transition-all duration-300 hover:border-primary/20"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div
                      className="h-2 w-2 rounded-full"
                      style={{ background: color, boxShadow: `0 0 12px ${color}60` }}
                    />
                    <h3 className="font-heading text-sm font-semibold tracking-wider text-text-primary uppercase">
                      {category}
                    </h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {items.map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.06 + i * 0.04 }}
                        className="rounded-lg border border-border bg-background/60 px-3 py-1.5 font-mono text-sm text-text-secondary transition-all duration-300 hover:border-primary/30 hover:text-text-primary"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

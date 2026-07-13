"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui";
import { getPortfolio, getSectionConfig } from "@/lib/portfolio";
import { AnimatedSection, FadeUp } from "@/lib/animations";

export function TechStack() {
  const { techStack } = getPortfolio();
  const section = getSectionConfig("tech-stack");
  const heading = section?.heading;

  return (
    <AnimatedSection
      id="tech-stack"
      className={section?.className ?? "section-padding section-glow"}
    >
      <div className="section-container">
        {heading && (
          <FadeUp>
            <SectionHeading
              label={heading.label}
              title={heading.title}
              subtitle={heading.subtitle}
              align={heading.align}
            />
          </FadeUp>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((category, catIndex) => (
            <FadeUp key={category.category} delay={catIndex * 0.06}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="glass-card group h-full rounded-2xl p-6 transition-all duration-300 hover:border-primary/20"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className="h-2 w-2 rounded-full"
                    style={{
                      background: category.color,
                      boxShadow: `0 0 12px ${category.color}60`,
                    }}
                  />
                  <h3 className="font-heading text-sm font-semibold tracking-wider text-text-primary uppercase">
                    {category.category}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
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
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

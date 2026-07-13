"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui";
import { getPortfolio, getSectionConfig } from "@/lib/portfolio";
import { AnimatedSection, FadeUp } from "@/lib/animations";

export function Projects() {
  const { projects } = getPortfolio();
  const section = getSectionConfig("projects");
  const heading = section?.heading;

  return (
    <AnimatedSection
      id="projects"
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

        <div className="space-y-20">
          {projects.map((project, index) => (
            <FadeUp key={project.id} delay={index * 0.05}>
              <article
                className={`group grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative lg:[direction:ltr]"
                >
                  <div
                    className="absolute -inset-3 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: `${project.accent}20` }}
                  />
                  <div
                    className={`relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${project.gradient}`}
                  >
                    <div className="absolute inset-0 grid-bg opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

                    <div className="absolute top-5 left-5 font-mono text-xs text-text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                      <div
                        className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 text-xl font-bold backdrop-blur-sm"
                        style={{
                          background: `linear-gradient(135deg, ${project.accent}30, transparent)`,
                          color: project.accent,
                        }}
                      >
                        {project.initials}
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-sm text-text-secondary">
                        {project.tagline}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <div className="lg:[direction:ltr]">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="font-mono text-sm text-primary">
                      {project.year}
                    </span>
                    <span className="h-px flex-1 bg-border" />
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">
                    {project.name}
                  </h3>
                  <p
                    className="mt-1 text-sm font-medium"
                    style={{ color: project.accent }}
                  >
                    {project.tagline}
                  </p>

                  <p className="mt-5 leading-relaxed text-text-secondary">
                    {project.description}
                  </p>

                  <div className="mt-8">
                    <h4 className="font-mono text-xs tracking-widest text-text-muted uppercase">
                      Contribution
                    </h4>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {project.contributions.map((item) => (
                        <li
                          key={item}
                          className="rounded-lg border border-border bg-surface/80 px-3 py-1.5 text-xs text-text-secondary transition-colors hover:border-primary/20 hover:text-text-primary"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-mono text-xs tracking-widest text-text-muted uppercase">
                      Tech Stack
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border px-3 py-1 font-mono text-xs"
                          style={{
                            borderColor: `${project.accent}30`,
                            background: `${project.accent}10`,
                            color: project.accent,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

import { SectionHeading } from "@/components/ui";
import { getPortfolio, getSectionConfig } from "@/lib/portfolio";
import { AnimatedSection, FadeUp } from "@/lib/animations";

export function Skills() {
  const { skills } = getPortfolio();
  const section = getSectionConfig("skills");
  const heading = section?.heading;

  return (
    <AnimatedSection
      id="skills"
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

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <FadeUp key={skill} delay={index * 0.04}>
              <div className="group relative overflow-hidden rounded-xl border border-border bg-surface/40 p-5 transition-all duration-300 hover:border-primary/25 hover:bg-surface/70">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-secondary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-mono text-xs text-primary transition-all duration-300 group-hover:bg-primary/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium text-text-primary transition-colors group-hover:text-primary">
                    {skill}
                  </span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

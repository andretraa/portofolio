import { SectionHeading } from "@/components/ui";
import { getPortfolio, getSectionConfig } from "@/lib/portfolio";
import { AnimatedSection, FadeUp } from "@/lib/animations";

export function About() {
  const { about } = getPortfolio();
  const section = getSectionConfig("about");
  const heading = section?.heading;

  return (
    <AnimatedSection
      id="about"
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

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            {about.paragraphs.map((paragraph, index) => (
              <FadeUp key={index} delay={index * 0.1}>
                <p className="text-lg leading-relaxed text-text-secondary">
                  {paragraph}
                </p>
              </FadeUp>
            ))}
          </div>

          <div className="space-y-4">
            {about.highlights.map((item, index) => (
              <FadeUp key={item.label} delay={0.15 + index * 0.08}>
                <div className="glass-card group rounded-2xl p-5 transition-all duration-300 hover:border-primary/20">
                  <p className="font-mono text-xs tracking-widest text-primary uppercase">
                    {item.label}
                  </p>
                  <p className="mt-2 font-heading text-lg font-semibold text-text-primary transition-colors group-hover:text-primary">
                    {item.value}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

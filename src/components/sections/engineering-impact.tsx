import { AnimatedCounter, SectionHeading } from "@/components/ui";
import { getPortfolio, getSectionConfig } from "@/lib/portfolio";
import { AnimatedSection, FadeUp } from "@/lib/animations";

export function EngineeringImpact() {
  const { impact } = getPortfolio();
  const section = getSectionConfig("impact");
  const heading = section?.heading;

  return (
    <AnimatedSection
      id="impact"
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

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impact.map((stat, index) => (
            <FadeUp key={stat.id} delay={index * 0.08}>
              <div className="gradient-border group rounded-2xl p-px">
                <div className="glass-card h-full rounded-2xl p-8 text-center transition-all duration-300 group-hover:border-primary/20">
                  <p className="font-heading text-4xl font-bold md:text-5xl">
                    <span className="gradient-text">
                      <AnimatedCounter
                        id={`counter-${stat.id}`}
                        value={stat.value}
                        suffix={stat.suffix ?? "+"}
                      />
                    </span>
                  </p>
                  <p className="mt-3 text-sm text-text-secondary">
                    {stat.label}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

import { impactStats } from "@/data/skills";
import { AnimatedCounter, SectionHeading } from "@/components/ui";
import { AnimatedSection, FadeUp } from "@/lib/animations";

export function EngineeringImpact() {
  return (
    <AnimatedSection
      id="impact"
      className="section-padding bg-surface/20 section-glow"
    >
      <div className="section-container">
        <FadeUp>
          <SectionHeading
            label="Impact"
            title="Engineering Impact"
            subtitle="Measurable contributions across projects and production systems."
            align="center"
          />
        </FadeUp>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, index) => (
            <FadeUp key={stat.label} delay={index * 0.08}>
              <div className="gradient-border group rounded-2xl p-px">
                <div className="glass-card h-full rounded-2xl p-8 text-center transition-all duration-300 group-hover:border-primary/20">
                  <p className="font-heading text-4xl font-bold md:text-5xl">
                    <span className="gradient-text">
                      <AnimatedCounter
                        id={`counter-${stat.label}`}
                        value={stat.value}
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

import { SectionHeading } from "@/components/ui";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { getPortfolio, getSectionConfig, getSectionNumber } from "@/lib/portfolio";
import { AnimatedSection, FadeUp } from "@/lib/animations";

export function About() {
  const { about } = getPortfolio();
  const section = getSectionConfig("about");
  const heading = section?.heading;

  return (
    <AnimatedSection
      id="about"
      className="section-padding section-glow section-alt"
    >
      <div className="section-container">
        {heading && (
          <FadeUp>
            <SectionHeading
              label={heading.label}
              title={heading.title}
              subtitle={heading.subtitle}
              align={heading.align}
              number={getSectionNumber("about")}
            />
          </FadeUp>
        )}

        <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
          <FadeUp className="lg:col-span-2">
            <CardSpotlight className="glass-card h-full rounded-2xl p-6 md:p-8">
              <p className="text-lg leading-relaxed text-text-secondary md:text-xl">
                {about.paragraphs[0]}
              </p>
              {about.paragraphs[1] && (
                <p className="mt-5 text-base leading-relaxed text-text-secondary">
                  {about.paragraphs[1]}
                </p>
              )}
            </CardSpotlight>
          </FadeUp>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-5">
            {about.highlights.map((item, index) => (
              <FadeUp key={item.label} delay={0.1 + index * 0.08}>
                <CardSpotlight className="glass-card group h-full rounded-2xl p-5 transition-all duration-300 hover:border-primary/25">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 font-mono text-xs text-primary">
                    0{index + 1}
                  </div>
                  <p className="font-mono text-[10px] tracking-widest text-primary uppercase">
                    {item.label}
                  </p>
                  <p className="mt-2 font-heading text-base font-semibold text-text-primary transition-colors group-hover:text-primary md:text-lg">
                    {item.value}
                  </p>
                </CardSpotlight>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

import { SectionHeading } from "@/components/ui";
import { AnimatedSection, FadeUp } from "@/lib/animations";

const highlights = [
  { label: "Focus", value: "Backend & Systems" },
  { label: "Domain", value: "Healthcare & Enterprise" },
  { label: "Approach", value: "End-to-End Delivery" },
];

export function About() {
  return (
    <AnimatedSection id="about" className="section-padding section-glow">
      <div className="section-container">
        <FadeUp>
          <SectionHeading
            label="About"
            title="Who I Am"
            subtitle="Engineer yang membangun produk digital dari nol hingga production."
          />
        </FadeUp>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <FadeUp>
              <p className="text-lg leading-relaxed text-text-secondary">
                Saya adalah Software Engineer yang fokus pada pengembangan
                backend, web application, mobile application, dan deployment
                server.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-lg leading-relaxed text-text-secondary">
                Saya senang membangun produk yang scalable, maintainable, dan
                memiliki dampak nyata bagi pengguna. Pengalaman saya meliputi
                pengembangan sistem kesehatan, marketplace, company profile,
                hingga deployment infrastructure.
              </p>
            </FadeUp>
          </div>

          <div className="space-y-4">
            {highlights.map((item, index) => (
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

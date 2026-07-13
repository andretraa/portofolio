import { ArrowIcon, MagneticButton, SectionHeading } from "@/components/ui";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { ContactIcon } from "@/components/icons/contact-icons";
import { getPortfolio, getSectionConfig, getSectionNumber } from "@/lib/portfolio";
import { AnimatedSection, FadeUp } from "@/lib/animations";

export function Contact() {
  const { contact, site } = getPortfolio();
  const section = getSectionConfig("contact");
  const heading = section?.heading;

  return (
    <AnimatedSection
      id="contact"
      className={section?.className ?? "section-padding section-glow"}
    >
      <div className="section-container">
        {heading && (
          <FadeUp>
            <SectionHeading
              number={getSectionNumber("contact")}
              label={heading.label}
              title={heading.title}
              subtitle={heading.subtitle}
              align={heading.align}
            />
          </FadeUp>
        )}

        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {contact.channels.map((channel, index) => (
            <FadeUp key={channel.id} delay={index * 0.07}>
              <a
                href={channel.href}
                className="block h-full"
                {...(channel.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <CardSpotlight className="group glass-card flex h-full items-start gap-4 rounded-2xl p-6 transition-all duration-300 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20">
                  <ContactIcon type={channel.icon} />
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-text-primary transition-colors group-hover:text-primary">
                    {channel.label}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {channel.description}
                  </p>
                </div>
                </CardSpotlight>
              </a>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="mt-14 flex flex-col items-center gap-4">
            <p className="text-sm text-text-muted">{contact.cvNote}</p>
            <MagneticButton
              href={site.cvUrl}
              variant="primary"
              download
              icon={<ArrowIcon />}
            >
              {contact.cvButtonLabel}
            </MagneticButton>
          </div>
        </FadeUp>
      </div>
    </AnimatedSection>
  );
}

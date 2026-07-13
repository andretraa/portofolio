import { ArrowIcon, MagneticButton, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/lib/site-config";
import { AnimatedSection, FadeUp } from "@/lib/animations";

const contactLinks = [
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    description: siteConfig.email,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 6h16v12H4V6z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    description: "Connect professionally",
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 11v5M8 8v.01M12 16v-3a2 2 0 114 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: siteConfig.github,
    description: "View my code",
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 19c-4 1.5-4-2.5-6-3m12 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 3S18.73 2.5 17 4.5a13.38 13.38 0 00-7 0C8.27 2.5 7.09 3 7.09 3A5.07 5.07 0 005 4.77 5.44 5.44 0 003.5 8.55c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: siteConfig.instagram,
    description: "Follow my journey",
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="7" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

export function Contact() {
  return (
    <AnimatedSection
      id="contact"
      className="section-padding bg-surface/20 section-glow"
    >
      <div className="section-container">
        <FadeUp>
          <SectionHeading
            label="Contact"
            title="Get In Touch"
            subtitle="Open to opportunities, collaborations, and interesting projects."
            align="center"
          />
        </FadeUp>

        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {contactLinks.map((link, index) => (
            <FadeUp key={link.label} delay={index * 0.07}>
              <a
                href={link.href}
                className="group glass-card flex items-start gap-4 rounded-2xl p-6 transition-all duration-300 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5"
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20">
                  {link.icon}
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-text-primary transition-colors group-hover:text-primary">
                    {link.label}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {link.description}
                  </p>
                </div>
              </a>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="mt-14 flex flex-col items-center gap-4">
            <p className="text-sm text-text-muted">
              Prefer a document? Download my full resume.
            </p>
            <MagneticButton
              href={siteConfig.cvUrl}
              variant="primary"
              download
              icon={<ArrowIcon />}
            >
              Download CV
            </MagneticButton>
          </div>
        </FadeUp>
      </div>
    </AnimatedSection>
  );
}

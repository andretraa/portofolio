"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { getPortfolio, getSectionConfig, getSectionNumber } from "@/lib/portfolio";
import { AnimatedSection, FadeUp, FadeLeft, FadeRight } from "@/lib/animations";

export function About() {
  const { about } = getPortfolio();
  const section = getSectionConfig("about");
  const heading = section?.heading;

  const getStatIcon = (index: number) => {
    switch (index) {
      case 0: // Projects Completed
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-primary">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 0 1 3.75 18.4V14.15m16.5 0a9.003 9.003 0 0 0-16.5 0m16.5 0a9 9 0 0 0-16.5 0M15 11.25V4.875A1.125 1.125 0 0 0 13.875 3.75h-3.75A1.125 1.125 0 0 0 9 4.875v6.375m6 0H9" />
          </svg>
        );
      case 1: // Happy Clients
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-primary">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
          </svg>
        );
      case 2: // Education cap
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-primary">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A5.906 5.906 0 0 1 12 3.453a5.906 5.906 0 0 1 7.742 3.447 50.57 50.57 0 0 0-2.658.813m-15.482 0C6.72 9.617 9.223 9.375 12 9.375c2.777 0 5.281.242 7.74 1.122m-15.48 0v7.147c0 .607.406 1.117.994 1.214l5.817.962a1.125 1.125 0 0 0 .37 0l5.817-.962a1.125 1.125 0 0 0 .994-1.214V11.27" />
          </svg>
        );
      default: // Calendar/Clock
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-primary">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        );
    }
  };

  return (
    <AnimatedSection
      id="about"
      className="section-padding section-glow section-alt border-t border-border/20"
    >
      <div className="section-container">
        {heading && (
          <FadeUp className="mb-12">
            <SectionHeading
              number={getSectionNumber("about") ?? "01"}
              label={heading.label}
              title={heading.title}
              align="center"
            />
          </FadeUp>
        )}

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">

          {/* Left Column: Portrait Squircle Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <FadeLeft className="w-full flex justify-center">
              <div className="relative aspect-[3/4] w-full max-w-[320px] rounded-[36px] overflow-hidden bg-gradient-to-br from-primary/45 to-secondary/35 p-0.5 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-15 blur-xl" />
                <div className="relative h-full w-full rounded-[34.5px] bg-surface overflow-hidden flex items-center justify-center">
                  <Image
                    src="/about-photo.jpg"
                    alt="Andre Tri Rizky Ariyanto"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                    sizes="(max-w-768px) 100vw, 320px"
                    priority
                  />
                </div>
              </div>
            </FadeLeft>
          </div>

          {/* Right Column: Text & Stats Grid */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            <FadeRight delay={0.1}>
              <div className="mt-6 space-y-4">
                <p className="text-base leading-relaxed text-text-secondary">
                  {about.paragraphs[0]}
                </p>
                {about.paragraphs[1] && (
                  <p className="text-sm leading-relaxed text-text-muted">
                    {about.paragraphs[1]}
                  </p>
                )}
              </div>
            </FadeRight>

            {/* Stats Grid */}
            <div className="mt-8 grid gap-4 grid-cols-2 sm:gap-5">
              {about.highlights.map((item, index) => (
                <FadeUp key={item.label} delay={0.15 + index * 0.08}>
                  <CardSpotlight className="glass-card group flex items-start gap-3.5 rounded-2xl p-4.5 transition-all duration-300 hover:border-primary/25">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                      {getStatIcon(index)}
                    </div>
                    <div>
                      <p className="font-heading text-lg font-bold text-text-primary transition-colors group-hover:text-primary leading-none">
                        {item.value}
                      </p>
                      <p className="mt-1.5 font-mono text-[9px] tracking-wider text-text-muted uppercase sm:text-[10px] leading-tight">
                        {item.label}
                      </p>
                    </div>
                  </CardSpotlight>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

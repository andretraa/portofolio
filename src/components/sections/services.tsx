"use client";

import { SectionHeading } from "@/components/ui";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { getSectionConfig, getSectionNumber } from "@/lib/portfolio";
import { AnimatedSection, FadeUp } from "@/lib/animations";

export function Services() {
  const section = getSectionConfig("services");
  const heading = section?.heading ?? {
    label: "Expertise",
    title: "My Services",
    subtitle: "Professional design solutions tailored to your brand needs.",
    align: "center" as const,
  };

  const services = [
    {
      title: "Graphic Design",
      bullets: [
        "Social Media Design",
        "Banner Design",
        "Poster Design",
        "Branding & Identity",
      ],
      iconColor: "from-purple-600 to-indigo-600",
      textColor: "text-purple-400",
      svgIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.83 17.606a2.19 2.19 0 0 1-.774.508l-3.356 1.12a.75.75 0 0 1-.961-.96l1.12-3.357a2.19 2.19 0 0 1 .508-.774L16.862 4.487Zm0 0L19.5 7.125" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
      ),
    },
    {
      title: "UI/UX Design",
      bullets: [
        "Mobile App Design",
        "Dashboard Design",
        "Landing Page Design",
        "Wireframe & Prototype",
      ],
      iconColor: "from-blue-600 to-cyan-500",
      textColor: "text-blue-400",
      svgIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
    },
    {
      title: "Content Creator",
      bullets: [
        "Video Editing & Production",
        "Content Planning & Scripting",
        "Social Media Reel & TikTok Design",
        "Video Thumbnail & Asset Design",
      ],
      iconColor: "from-pink-600 to-rose-500",
      textColor: "text-pink-400",
      svgIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="m15 10 4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2Z" />
        </svg>
      ),
    },
  ];

  return (
    <AnimatedSection
      id="services"
      className="section-padding section-glow section-alt border-t border-border/20"
    >
      <div className="section-container">
        <FadeUp>
          <SectionHeading
            number={getSectionNumber("services") ?? "03"}
            label={heading.label}
            title={heading.title}
            subtitle={heading.subtitle}
            align="center"
          />
        </FadeUp>

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <FadeUp key={service.title} delay={index * 0.15}>
              <CardSpotlight className="glass-card flex flex-col items-center p-8 text-center md:items-start md:text-left rounded-2xl border border-border/60 hover:border-primary/45 transition-all">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.iconColor} shadow-lg`}>
                  {service.svgIcon}
                </div>
                
                <h3 className="mt-6 font-heading text-xl font-bold text-text-primary md:text-2xl">
                  {service.title}
                </h3>
                
                <ul className="mt-6 space-y-3.5 w-full text-left">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3 font-heading text-sm text-text-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`h-4.5 w-4.5 shrink-0 ${service.textColor}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardSpotlight>
            </FadeUp>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

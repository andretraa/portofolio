"use client";

import { SectionHeading } from "@/components/ui";
import { getPortfolio, getSectionConfig, getSectionNumber } from "@/lib/portfolio";
import { AnimatedSection, FadeUp } from "@/lib/animations";

export function Experience() {
  const { experience } = getPortfolio();
  const section = getSectionConfig("experience");
  const heading = section?.heading ?? {
    label: "Career",
    title: "My Experience",
    subtitle: "My professional journey over the years.",
  };

  const getTimelineIcon = (index: number) => {
    switch (index) {
      case 0: // 2023: Intern
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 0 1 3.75 18.4V14.15m16.5 0a9.003 9.003 0 0 0-16.5 0m16.5 0a9 9 0 0 0-16.5 0M15 11.25V4.875A1.125 1.125 0 0 0 13.875 3.75h-3.75A1.125 1.125 0 0 0 9 4.875v6.375m6 0H9" />
          </svg>
        );
      case 1: // 2024: Freelance
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Z" />
          </svg>
        );
      default: // 2025: UIUX Goal
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
          </svg>
        );
    }
  };

  const getTimelineColor = (index: number) => {
    switch (index) {
      case 0:
        return "bg-indigo-600 text-white shadow-indigo-600/30";
      case 1:
        return "bg-blue-600 text-white shadow-blue-600/30";
      default:
        return "bg-teal-500 text-white shadow-teal-500/30";
    }
  };

  return (
    <AnimatedSection
      id="experience"
      className="section-padding section-glow border-t border-border/20"
    >
      <div className="section-container">
        <FadeUp>
          <SectionHeading
            number={getSectionNumber("experience") ?? "05"}
            label={heading.label}
            title="My Experience"
            subtitle={heading.subtitle}
            align="center"
          />
        </FadeUp>

        <div className="relative mt-16 mx-auto max-w-5xl">
          {/* Horizontal connecting line on desktop */}
          <div
            className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2.5px] bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-400 opacity-50"
            aria-hidden="true"
          />

          <div className="grid gap-10 md:grid-cols-3 md:gap-6 relative z-10">
            {experience.map((item, index) => (
              <FadeUp key={item.id} delay={index * 0.15}>
                <div className="flex flex-col items-center text-center">
                  
                  {/* Timeline Indicator Ring & Icon */}
                  <div className={`flex h-14 w-14 items-center justify-center rounded-full border-4 border-background shadow-lg transition-transform duration-300 hover:scale-115 ${getTimelineColor(index)}`}>
                    {getTimelineIcon(index)}
                  </div>

                  {/* Year Tag */}
                  <span className="mt-5 font-mono text-sm font-bold text-primary">
                    {item.year}
                  </span>

                  {/* Job/School Title */}
                  <h3 className="mt-2 font-heading text-lg font-bold text-text-primary">
                    {item.title}
                  </h3>

                  {/* Subtitle / Company */}
                  <p className="mt-1 font-heading text-xs font-semibold text-text-muted">
                    {item.company}
                  </p>

                  {/* Task Description Paragraph */}
                  <p className="mt-4 max-w-[280px] text-xs leading-relaxed text-text-secondary">
                    {item.description}
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

"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui";
import { getPortfolio, getSectionConfig, getSectionNumber } from "@/lib/portfolio";
import { AnimatedSection, FadeUp } from "@/lib/animations";
import { ProjectGallery } from "./project-gallery";
import { ProjectModal } from "./project-modal";
import type { Project, ProjectImage } from "@/types/portfolio";

type ProjectWithImages = Project & { images: ProjectImage[] };

export function Projects() {
  const { projects } = getPortfolio();
  const section = getSectionConfig("projects");
  const heading = section?.heading;
  const [modalProject, setModalProject] = useState<ProjectWithImages | null>(null);
  const [modalIndex, setModalIndex] = useState(0);

  const openGallery = (project: ProjectWithImages, imageIndex = 0) => {
    setModalProject(project);
    setModalIndex(imageIndex);
  };

  return (
    <>
      <AnimatedSection
        id="projects"
        className={section?.className ?? "section-padding section-glow section-alt"}
      >
        <div className="section-container">
        {heading && (
          <FadeUp>
            <SectionHeading
              number={getSectionNumber("projects")}
              label={heading.label}
              title={heading.title}
              subtitle={heading.subtitle}
              align={heading.align}
            />
          </FadeUp>
        )}

        <FadeUp delay={0.05}>
          <div className="mobile-bleed mb-16 flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide sm:gap-4 md:gap-5">
            {projects.map((project, i) => (
              <button
                key={`featured-${project.id}`}
                type="button"
                onClick={() => openGallery(project, 0)}
                className="group relative w-64 shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-surface text-left transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 md:w-72"
              >
                {project.images[0] && (
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="288px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                  </div>
                )}
                <div className="p-4">
                  <span className="font-mono text-[10px] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1 font-heading font-semibold text-text-primary group-hover:text-primary">
                    {project.name}
                  </p>
                  <p className="mt-0.5 line-clamp-1 text-xs text-text-secondary">
                    {project.tagline}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </FadeUp>

        <div className="space-y-20">
            {projects.map((project, index) => (
              <FadeUp key={project.id} delay={index * 0.05}>
                <article
                  className={`group grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    index % 2 === 1 ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="relative lg:[direction:ltr]"
                  >
                    <ProjectGallery
                      project={project}
                      index={index}
                      onOpen={(i) => openGallery(project, i)}
                    />
                  </motion.div>

                  <div className="lg:[direction:ltr]">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="font-mono text-sm text-primary">
                        {project.year}
                      </span>
                      <span className="h-px flex-1 bg-border" />
                      {project.images.length > 0 && (
                        <button
                          type="button"
                          onClick={() => openGallery(project, 0)}
                          className="font-mono text-xs text-text-muted transition-colors hover:text-primary"
                        >
                          {project.images.length} screenshots →
                        </button>
                      )}
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">
                      {project.name}
                    </h3>
                    <p
                      className="mt-1 text-sm font-medium"
                      style={{ color: project.accent }}
                    >
                      {project.tagline}
                    </p>

                    <p className="mt-5 leading-relaxed text-text-secondary">
                      {project.description}
                    </p>

                    {project.images.length > 0 && (
                      <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
                        {project.images.map((image, i) => (
                          <button
                            key={image.id}
                            type="button"
                            onClick={() => openGallery(project, i)}
                            className="group/thumb relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border border-border transition-all hover:border-primary/40"
                            aria-label={image.caption}
                          >
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={80}
                              height={56}
                              className="h-full w-full object-cover object-top transition-transform group-hover/thumb:scale-110"
                            />
                          </button>
                        ))}
                      </div>
                    )}

                    <div className="mt-8">
                      <h4 className="font-mono text-xs tracking-widest text-text-muted uppercase">
                        Contribution
                      </h4>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {project.contributions.map((item) => (
                          <li
                            key={item}
                            className="rounded-lg border border-border bg-surface/80 px-3 py-1.5 text-xs text-text-secondary transition-colors hover:border-primary/20 hover:text-text-primary"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-mono text-xs tracking-widest text-text-muted uppercase">
                        Tech Stack
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border px-3 py-1 font-mono text-xs"
                            style={{
                              borderColor: `${project.accent}30`,
                              background: `${project.accent}10`,
                              color: project.accent,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <ProjectModal
        project={modalProject}
        initialIndex={modalIndex}
        onClose={() => setModalProject(null)}
      />
    </>
  );
}

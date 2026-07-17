"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading, TiltCard } from "@/components/ui";
import { getPortfolio, getSectionNumber } from "@/lib/portfolio";
import { AnimatedSection, FadeUp } from "@/lib/animations";
import { ProjectModal } from "./project-modal";
import type { Project, ProjectImage } from "@/types/portfolio";

type ProjectWithImages = Project & { images: ProjectImage[] };

export function Projects() {
  const { projects, designerSkills, designTools } = getPortfolio();
  const [filter, setFilter] = useState("All");
  const [modalProject, setModalProject] = useState<ProjectWithImages | null>(null);
  const [modalIndex, setModalIndex] = useState(0);

  const categories = ["All", "Branding", "UI/UX", "Social Media", "Web Design"];

  const getFilteredProjects = () => {
    if (filter === "All") return projects;
    // Map filter names to data taglines
    const filterMapping: Record<string, string> = {
      "Branding": "Branding Design",
      "UI/UX": "UI/UX Design",
      "Social Media": "Social Media",
      "Web Design": "Web Design",
    };
    const targetTagline = filterMapping[filter];
    return projects.filter((p) => p.tagline === targetTagline);
  };

  const openGallery = (project: ProjectWithImages, imageIndex = 0) => {
    setModalProject(project);
    setModalIndex(imageIndex);
  };

  const renderSkillIcon = (name: string) => {
    switch (name) {
      case "Social Media Design":
        return (
          <svg className="h-3.5 w-3.5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        );
      case "Branding & Visual Identity":
        return (
          <svg className="h-3.5 w-3.5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="7" />
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
          </svg>
        );
      case "Feed Instagram Design":
        return (
          <svg className="h-3.5 w-3.5 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        );
      case "Carousel Design":
        return (
          <svg className="h-3.5 w-3.5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        );
      case "Thumbnail Design (YouTube)":
        return (
          <svg className="h-3.5 w-3.5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        );
      case "Content Planner":
        return (
          <svg className="h-3.5 w-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        );
      case "Editing":
        return (
          <svg className="h-3.5 w-3.5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <line x1="20" y1="4" x2="8.12" y2="15.88" />
            <line x1="14.47" y1="14.48" x2="20" y2="20" />
            <line x1="8.12" y1="8.12" x2="12" y2="12" />
          </svg>
        );
      case "Design Tools":
        return (
          <svg className="h-3.5 w-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
          </svg>
        );
      case "Figma":
        return (
          <svg className="h-4 w-4 text-[#F24E1E]" viewBox="0 0 384 512" fill="currentColor">
            <path d="M115.2 256c0-42.5 34.5-76.8 76.8-76.8h76.8v153.6h-76.8c-42.5 0-76.8-34.3-76.8-76.8zm0-153.6c0-42.5 34.5-76.8 76.8-76.8h76.8v153.6h-76.8c-42.5 0-76.8-34.3-76.8-76.8zm153.6 307.2h-76.8c-30.8 0-58.8-18.1-71.2-46.1 12.4-28 40.4-46.1 71.2-46.1h76.8v92.2zm-153.6 46.1c0-42.5 34.5-76.8 76.8-76.8h76.8v76.8c0 42.5-34.5 76.8-76.8 76.8-42.5 0-76.8-34.3-76.8-76.8zm153.6-199.7h76.8c42.5 0 76.8-34.3 76.8-76.8s-34.3-76.8-76.8-76.8h-76.8v153.6z"/>
          </svg>
        );
      case "Canva":
        return (
          <div className="h-4 w-4 rounded-md bg-[#00C4CC] flex items-center justify-center text-[7px] font-black text-white leading-none">
            C
          </div>
        );
      case "CapCut":
        return (
          <div className="h-4 w-4 rounded-md bg-white flex items-center justify-center text-[7px] font-black text-black leading-none">
            CC
          </div>
        );
      case "HTML / CSS":
        return (
          <span className="text-[9px] font-mono font-bold text-orange-500">H5</span>
        );
      case "JavaScript":
        return (
          <span className="text-[9px] font-mono font-bold text-yellow-500">JS</span>
        );
      default:
        return (
          <span className="text-[9px] font-mono font-bold text-cyan-500">R</span>
        );
    }
  };

  return (
    <>
      <AnimatedSection id="projects" className="section-padding section-glow section-alt border-t border-border/20">
        <div className="section-container">
          <FadeUp className="mb-12">
            <SectionHeading
              number={getSectionNumber("projects") ?? "03"}
              label="Work"
              title="My Portfolio"
              subtitle="Selected work from my design portfolio."
              align="center"
            />
          </FadeUp>

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            
            {/* Left Column: My Skills (4/12 columns) */}
            <div className="lg:col-span-4 flex flex-col">
              <FadeUp>
                <span className="font-mono text-xs tracking-widest text-primary uppercase">Specialty</span>
                <h2 className="mt-2 font-heading text-2xl font-bold text-text-primary">My Skills</h2>
              </FadeUp>

              <div className="mt-8 space-y-6">
                {(designerSkills ?? []).map((skill, index) => (
                  <FadeUp key={skill.name} delay={index * 0.08}>
                    <div>
                      <div className="flex items-center justify-between font-heading text-xs font-semibold text-text-primary">
                        <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-surface-elevated border border-border/40 shadow-sm">
                            {renderSkillIcon(skill.name)}
                          </div>
                          <div className="flex flex-col">
                            <span className="leading-tight">{skill.name}</span>
                            {skill.description && (
                              <span className="text-[10px] text-text-muted font-normal mt-0.5 leading-none">
                                {skill.description}
                              </span>
                            )}
                          </div>
                        </div>
                        <span className="text-primary">{skill.level}%</span>
                      </div>
                      
                      <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-surface-elevated border border-border/40">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>

              {/* Design Tools Subsection */}
              <div className="mt-10 space-y-6">
                <FadeUp delay={0.25}>
                  <h3 className="font-heading text-lg font-bold text-text-primary">Design Tools</h3>
                </FadeUp>

                {(designTools ?? []).map((skill, index) => (
                  <FadeUp key={skill.name} delay={0.3 + index * 0.08}>
                    <div>
                      <div className="flex items-center justify-between font-heading text-xs font-semibold text-text-primary">
                        <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-surface-elevated border border-border/40 shadow-sm">
                            {renderSkillIcon(skill.name)}
                          </div>
                          <span className="leading-tight">{skill.name}</span>
                        </div>
                        <span className="text-primary">{skill.level}%</span>
                      </div>

                      <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-surface-elevated border border-border/40">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>

            {/* Right Column: Featured Projects (8/12 columns) */}
            <div className="lg:col-span-8 flex flex-col">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <FadeUp>
                  <span className="font-mono text-xs tracking-widest text-primary uppercase">Portfolio</span>
                  <h2 className="mt-2 font-heading text-2xl font-bold text-text-primary">Featured Projects</h2>
                </FadeUp>

                {/* Filter Tabs */}
                <FadeUp delay={0.05} className="flex flex-wrap gap-1.5 self-start sm:self-auto">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`rounded-full px-3.5 py-1.5 font-heading text-xs font-medium transition-all ${
                        filter === cat
                          ? "bg-primary text-white shadow-lg shadow-primary/25"
                          : "bg-surface-elevated text-text-secondary border border-border/40 hover:border-primary/25 hover:text-text-primary"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </FadeUp>
              </div>

              {/* Projects Grid */}
              <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-5">
                <AnimatePresence mode="popLayout">
                  {getFilteredProjects().map((project) => {
                    const getProjectThumbnail = (id: string) => {
                      switch (id) {
                        case "klikmedis":
                          return "/projects/klikmedis/emr.png";
                        case "baytgo":
                          return "/projects/baytgo/mobile.png";
                        case "webyouneed":
                          return "/projects/webyouneed/homepage.png";
                        case "daksa":
                          return "/projects/daksa/profile.png";
                        case "packaging-design":
                          return "/projects/daksa/packaging.png";
                        default:
                          return "/projects/jaksimpus/dashboard.png";
                      }
                    };
                    const fallbackImg = getProjectThumbnail(project.id);
                    return (
                      <TiltCard key={project.id} className="h-full">
                        <motion.div
                          layout
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                          className="group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-border bg-surface shadow-md hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl transition-all"
                          onClick={() => openGallery(project as unknown as ProjectWithImages, 0)}
                        >
                          <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-elevated border-b border-border/50">
                            <Image
                              src={fallbackImg}
                              alt={project.name}
                              fill
                              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-w-768px) 100vw, 240px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                              <span className="font-heading text-xs font-semibold text-white">View Details →</span>
                            </div>
                          </div>
                          <div className="p-4 flex items-center justify-between gap-2">
                            <div>
                              <p className="font-heading text-[13px] font-bold text-text-primary leading-snug group-hover:text-primary transition-colors">
                                {project.name}
                              </p>
                              <p className="mt-0.5 font-mono text-[9px] text-text-muted uppercase tracking-wider">
                                {project.tagline}
                              </p>
                            </div>
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-3.5 w-3.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                              </svg>
                            </div>
                          </div>
                        </motion.div>
                      </TiltCard>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>

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

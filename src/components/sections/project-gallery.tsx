"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TiltCard } from "@/components/ui/tilt-card";
import type { Project, ProjectImage } from "@/types/portfolio";

type ProjectWithImages = Project & { images: ProjectImage[] };

interface ProjectGalleryProps {
  project: ProjectWithImages;
  index: number;
  onOpen: (imageIndex: number) => void;
}

export function ProjectGallery({ project, index, onOpen }: ProjectGalleryProps) {
  const images = project.images;
  const hasImages = images.length > 0;
  const [main, ...rest] = images;

  if (!hasImages) {
    return (
      <div
        className={`relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${project.gradient}`}
      >
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
          <div
            className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 text-xl font-bold backdrop-blur-sm"
            style={{
              background: `linear-gradient(135deg, ${project.accent}30, transparent)`,
              color: project.accent,
            }}
          >
            {project.initials}
          </div>
          <h3 className="font-heading text-2xl font-bold text-text-primary">
            {project.name}
          </h3>
        </div>
      </div>
    );
  }

  return (
    <TiltCard accent={project.accent} className="group/gallery">
      <button
        type="button"
        onClick={() => onOpen(0)}
        className="relative block w-full cursor-zoom-in text-left"
        aria-label={`Open ${project.name} gallery`}
      >
        <div
          className="absolute -inset-4 rounded-3xl opacity-0 blur-3xl transition-opacity duration-700 group-hover/gallery:opacity-100"
          style={{ background: `${project.accent}30` }}
        />

        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/20 transition-shadow duration-500 group-hover/gallery:shadow-[0_0_60px_rgba(0,0,0,0.4)]">
          <div
            className="absolute inset-x-0 top-0 z-10 h-px"
            style={{
              background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
            }}
          />

          <div className="grid grid-cols-4 grid-rows-2 gap-1.5 p-1.5">
            <div className="relative col-span-3 row-span-2 overflow-hidden rounded-xl">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={main.src}
                  alt={main.alt}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover/gallery:scale-[1.05]"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-black/30 font-mono text-xs text-white/80 backdrop-blur-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="absolute right-3 bottom-3 left-3 flex items-end justify-between">
                  <div>
                    <p
                      className="font-heading text-lg font-bold text-white md:text-xl"
                      style={{ textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}
                    >
                      {project.name}
                    </p>
                    <p className="text-xs text-white/70 md:text-sm">
                      {project.tagline}
                    </p>
                  </div>
                  <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 font-mono text-[10px] text-white backdrop-blur-md">
                    {images.length} screens
                  </span>
                </div>
              </div>
            </div>

            {rest.slice(0, 2).map((image) => (
              <div key={image.id} className="relative overflow-hidden rounded-lg">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-top transition-all duration-500 group-hover/gallery:scale-110 group-hover/gallery:brightness-110"
                    sizes="200px"
                  />
                  <div className="absolute inset-0 bg-background/30 transition-colors group-hover/gallery:bg-transparent" />
                </div>
              </div>
            ))}
          </div>

          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover/gallery:opacity-100"
            initial={false}
          >
            <span
              className="flex scale-90 items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover/gallery:scale-100 group-hover/gallery:opacity-100"
              style={{
                borderColor: `${project.accent}60`,
                background: `linear-gradient(135deg, ${project.accent}50, ${project.accent}20)`,
                boxShadow: `0 0 60px ${project.accent}40`,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M15 3h6v6M14 10l7-7M9 21H3v-6M10 14l-7 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Explore Project
            </span>
          </motion.div>
        </div>
      </button>
    </TiltCard>
  );
}

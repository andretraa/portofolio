"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Project, ProjectImage } from "@/types/portfolio";

type ProjectWithImages = Project & { images: ProjectImage[] };

interface ProjectModalProps {
  project: ProjectWithImages | null;
  initialIndex?: number;
  onClose: () => void;
}

export function ProjectModal({
  project,
  initialIndex = 0,
  onClose,
}: ProjectModalProps) {
  const [index, setIndex] = useState(initialIndex);
  const images = project?.images ?? [];
  const total = images.length;

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex, project?.id]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (!project) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose, goNext, goPrev]);

  if (!project || total === 0) return null;

  const current = images[index];

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} gallery`}
        >
          <motion.button
            type="button"
            className="absolute inset-0 bg-background/90 backdrop-blur-2xl"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-label="Close gallery"
          />

          <motion.div
            className="relative z-10 flex w-full max-w-3xl max-h-[90vh] flex-col overflow-y-auto rounded-3xl border border-border bg-surface shadow-2xl shadow-black/60 scrollbar-none"
            initial={{ opacity: 0, scale: 0.88, y: 40, rotateX: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
          >
            {total > 1 && (
              <div className="absolute top-0 right-0 left-0 z-20 flex h-1">
                {images.map((_, i) => (
                  <div
                    key={i}
                    className="h-full flex-1 transition-all duration-300"
                    style={{
                      background:
                        i === index
                          ? project.accent
                          : "rgba(15, 23, 42, 0.08)",
                    }}
                  />
                ))}
              </div>
            )}
            <div
              className="absolute inset-x-0 top-0 h-1"
              style={{
                background: `linear-gradient(90deg, ${project.accent}, transparent)`,
              }}
            />

            <div className="flex items-center justify-between shrink-0 border-b border-border px-5 py-4 md:px-6">
              <div>
                <p className="font-mono text-xs text-primary">{project.year}</p>
                <h3 className="font-heading text-lg font-bold text-text-primary md:text-xl">
                  {project.name}
                </h3>
                <p className="text-sm text-text-secondary">{project.tagline}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-text-secondary transition-colors hover:border-primary/30 hover:text-text-primary"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="relative bg-background/50">
              <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-[16/9]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={current.src}
                      alt={current.alt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 80vw"
                      priority
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {total > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={goPrev}
                      className="absolute top-1/2 left-4 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/70 text-text-primary backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-background"
                      aria-label="Previous image"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      className="absolute top-1/2 right-4 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/70 text-text-primary backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-background"
                      aria-label="Next image"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              <div className="flex items-center justify-between border-t border-border px-5 py-3 md:px-6">
                <p className="text-sm text-text-secondary">{current.caption}</p>
                <span className="font-mono text-xs text-text-muted">
                  {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
              </div>
            </div>

            {total > 1 && (
              <div className="flex gap-2 overflow-x-auto shrink-0 border-t border-border p-4 md:p-5">
                {images.map((image, i) => (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border transition-all md:h-20 md:w-32 ${
                      i === index
                        ? "border-primary ring-2 ring-primary/30"
                        : "border-border opacity-60 hover:opacity-100"
                    }`}
                    aria-label={`View ${image.caption}`}
                    aria-current={i === index}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            )}

            <div className="grid gap-4 shrink-0 border-t border-border p-5 md:grid-cols-2 md:p-6">
              <div>
                <p className="font-mono text-xs tracking-widest text-text-muted uppercase">
                  Stack
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border px-2.5 py-1 font-mono text-xs"
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
              <div>
                <p className="font-mono text-xs tracking-widest text-text-muted uppercase">
                  Contribution
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.contributions.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-border bg-background/60 px-2.5 py-1 text-xs text-text-secondary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

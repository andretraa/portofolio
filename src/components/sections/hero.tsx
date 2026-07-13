"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowIcon, MagneticButton } from "@/components/ui";
import { siteConfig } from "@/lib/site-config";
import { FadeUp } from "@/lib/animations";

function CodeVisual() {
  const lines = [
    { indent: 0, content: "const engineer = {", color: "text-secondary" },
    { indent: 1, content: 'name: "Ridwan",', color: "text-text-primary" },
    {
      indent: 1,
      content: 'role: "Senior Software Engineer",',
      color: "text-text-primary",
    },
    { indent: 1, content: "skills: [", color: "text-text-primary" },
    { indent: 2, content: '"Laravel", "Golang",', color: "text-success" },
    { indent: 2, content: '"React Native", "Next.js"', color: "text-success" },
    { indent: 1, content: "],", color: "text-text-primary" },
    { indent: 1, content: "build: () => deploy()", color: "text-primary" },
    { indent: 0, content: "};", color: "text-secondary" },
  ];

  return (
    <div className="relative animate-float">
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/25 via-transparent to-secondary/20 blur-3xl animate-pulse-glow" />
      <div className="shine-border relative overflow-hidden rounded-2xl">
        <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-surface/90 p-6 backdrop-blur-sm glow-primary">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="relative">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/70" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <div className="h-3 w-3 rounded-full bg-green-500/70" />
              </div>
              <span className="font-mono text-xs text-text-muted">
                portfolio.ts
              </span>
            </div>
            <pre className="font-mono text-[13px] leading-relaxed">
              {lines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.07, duration: 0.4 }}
                  className="flex"
                >
                  <span className="mr-4 w-5 shrink-0 text-right text-text-muted/40 select-none">
                    {i + 1}
                  </span>
                  <span style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                    <span className={line.color}>{line.content}</span>
                    {i === lines.length - 1 && (
                      <span className="ml-0.5 inline-block h-4 w-2 bg-primary/80 cursor-blink" />
                    )}
                  </span>
                </motion.div>
              ))}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
    >
      <span className="font-mono text-[10px] tracking-widest text-text-muted uppercase">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="flex h-8 w-5 items-start justify-center rounded-full border border-border p-1"
      >
        <div className="h-1.5 w-1 rounded-full bg-primary" />
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const parallaxX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const parallaxY = useTransform(springY, [-0.5, 0.5], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden"
      onMouseMove={handleMouseMove}
      aria-label="Hero"
    >
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />

      <motion.div
        className="pointer-events-none absolute top-1/3 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[100px]"
        style={{ x: parallaxX, y: parallaxY }}
      />
      <motion.div
        className="pointer-events-none absolute right-1/4 bottom-1/3 h-80 w-80 rounded-full bg-secondary/8 blur-[80px]"
        style={{ x: parallaxX, y: parallaxY }}
      />

      <div className="section-container relative z-10 py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <FadeUp>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-1.5 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                <span className="font-mono text-xs text-text-secondary">
                  Available for opportunities
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="mb-3 font-mono text-sm tracking-wide text-secondary">
                Hello, I&apos;m
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <h1 className="font-heading text-5xl font-bold tracking-tight md:text-6xl lg:text-[5.5rem] lg:leading-[1.05]">
                <span className="gradient-text">Ridwan</span>
                <span className="text-primary">.</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-5 font-heading text-xl text-text-secondary md:text-2xl">
                Senior{" "}
                <span className="text-text-primary">Software Engineer</span>
              </p>
            </FadeUp>

            <FadeUp delay={0.25}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-text-secondary md:text-lg">
                Building reliable software — from backend architecture to
                production deployment.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-3">
                <MagneticButton
                  href="#projects"
                  variant="primary"
                  icon={<ArrowIcon />}
                >
                  View Projects
                </MagneticButton>
                <MagneticButton
                  href={siteConfig.cvUrl}
                  variant="secondary"
                  download
                >
                  Download CV
                </MagneticButton>
              </div>
            </FadeUp>

            <FadeUp delay={0.35}>
              <div className="mt-6 flex flex-wrap gap-3">
                <MagneticButton
                  href={siteConfig.github}
                  variant="ghost"
                  external
                >
                  GitHub
                </MagneticButton>
                <MagneticButton
                  href={siteConfig.linkedin}
                  variant="ghost"
                  external
                >
                  LinkedIn
                </MagneticButton>
              </div>
            </FadeUp>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ x: parallaxX, y: parallaxY }}
            className="hidden lg:block"
          >
            <CodeVisual />
          </motion.div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

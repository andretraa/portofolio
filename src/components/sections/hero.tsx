"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowIcon, MagneticButton } from "@/components/ui";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { RotatingText } from "@/components/ui/rotating-text";
import { buildCodeLines, getPortfolio } from "@/lib/portfolio";
import { FadeUp } from "@/lib/animations";

function CodeVisual() {
  const { profile } = getPortfolio();
  const lines = buildCodeLines();

  return (
    <div className="relative animate-float perspective-1000">
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
                {profile.codeSnippet.fileName}
              </span>
            </div>
            <pre className="font-mono text-[13px] leading-relaxed">
              {lines.map((line, i) => (
                <motion.div
                  key={`${line.content}-${i}`}
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
  const { profile } = getPortfolio();
  const primaryCtas = profile.ctas.filter((cta) => cta.variant !== "ghost");
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const parallaxX = useTransform(springX, [-0.5, 0.5], [-24, 24]);
  const parallaxY = useTransform(springY, [-0.5, 0.5], [-24, 24]);

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
      <div className="absolute inset-0 aurora-bg opacity-60" />
      <FloatingParticles />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background" />

      <motion.div
        className="pointer-events-none absolute top-1/3 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]"
        style={{ x: parallaxX, y: parallaxY }}
      />
      <motion.div
        className="pointer-events-none absolute right-1/4 bottom-1/3 h-80 w-80 rounded-full bg-secondary/10 blur-[100px]"
        style={{ x: parallaxX, y: parallaxY }}
      />

      <div className="section-container relative z-10 py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            {profile.available && (
              <FadeUp>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-success/20 bg-success/5 px-4 py-1.5 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                  </span>
                  <span className="font-mono text-xs text-success">
                    {profile.availabilityText}
                  </span>
                </div>
              </FadeUp>
            )}

            <FadeUp delay={0.1}>
              <p className="mb-3 font-mono text-sm tracking-wide text-secondary">
                {profile.greeting}
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <h1 className="font-heading text-5xl font-bold tracking-tight text-glow md:text-6xl lg:text-[5.5rem] lg:leading-[1.05]">
                <span className="gradient-text">{profile.displayName}</span>
                <span className="text-primary">.</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-5 font-heading text-xl text-text-secondary md:text-2xl">
                {profile.roleHighlight ? (
                  <>
                    {profile.role.replace(profile.roleHighlight, "").trim()}{" "}
                    <span className="text-text-primary">
                      {profile.roleHighlight}
                    </span>
                  </>
                ) : (
                  profile.role
                )}
              </p>
            </FadeUp>

            <FadeUp delay={0.22}>
              <p className="mt-3 font-heading text-lg text-text-secondary md:text-xl">
                Building{" "}
                <RotatingText phrases={profile.rotatingPhrases} />
              </p>
            </FadeUp>

            <FadeUp delay={0.25}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-text-secondary md:text-lg">
                {profile.tagline}
              </p>
            </FadeUp>

            <FadeUp delay={0.28}>
              <div className="mt-8 flex flex-wrap gap-6 border-y border-border py-5">
                {profile.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-heading text-2xl font-bold text-primary md:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-xs text-text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                {primaryCtas.map((cta) => (
                  <MagneticButton
                    key={cta.id}
                    href={cta.href}
                    variant={cta.variant}
                    external={cta.external}
                    download={cta.download}
                    icon={cta.showArrow ? <ArrowIcon /> : undefined}
                  >
                    {cta.label}
                  </MagneticButton>
                ))}
              </div>
            </FadeUp>

            {profile.socialLinks.length > 0 && (
              <FadeUp delay={0.35}>
                <div className="mt-5 flex flex-wrap gap-3">
                  {profile.socialLinks.map((link) => (
                    <MagneticButton
                      key={link.id}
                      href={link.href}
                      variant={link.variant ?? "ghost"}
                      external
                    >
                      {link.label}
                    </MagneticButton>
                  ))}
                </div>
              </FadeUp>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, rotateY: -8 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ x: parallaxX, y: parallaxY }}
            className="hidden perspective-1000 lg:block"
          >
            <CodeVisual />
          </motion.div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

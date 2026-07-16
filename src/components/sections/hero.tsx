"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowIcon, MagneticButton } from "@/components/ui";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { getPortfolio } from "@/lib/portfolio";
import { FadeUp } from "@/lib/animations";

function DesignShowcaseDeck() {
  const cards = [
    {
      id: "jaksimpus",
      title: "Coffee Shop - Brand Identity",
      src: "/projects/jaksimpus/dashboard.png",
    },
    {
      id: "klikmedis",
      title: "Mobile Banking - UI/UX App",
      src: "/projects/klikmedis/emr.png",
    },
    {
      id: "webyouneed",
      title: "Landing Page - Web Design",
      src: "/projects/webyouneed/homepage.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [cards.length]);

  const getCardStyle = (index: number) => {
    const position = (index - activeIndex + cards.length) % cards.length;
    
    if (position === 0) {
      return {
        zIndex: 3,
        rotate: 0,
        scale: 1,
        x: 0,
        y: 0,
        opacity: 1,
      };
    } else if (position === 1) {
      return {
        zIndex: 2,
        rotate: 6,
        scale: 0.92,
        x: 40,
        y: 20,
        opacity: 0.85,
      };
    } else {
      return {
        zIndex: 1,
        rotate: -6,
        scale: 0.84,
        x: -40,
        y: 35,
        opacity: 0.65,
      };
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-[420px] sm:h-[500px] lg:h-[540px] w-full rounded-3xl border border-border/40 bg-surface/10 backdrop-blur-[1px] p-6 overflow-hidden bg-[radial-gradient(rgba(255,255,255,0.04)_1.2px,transparent_1.2px)] bg-[size:16px_16px]">
      
      {/* Figma-like Canvas Corner Ticks */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-primary/30" />
      <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-primary/30" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-primary/30" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-primary/30" />

      {/* Designer Canvas Info Overlays */}
      <div className="absolute top-4 left-4 hidden sm:flex items-center gap-2 font-mono text-[9px] text-text-muted/60 select-none">
        <span className="flex h-1.5 w-1.5 rounded-full bg-primary/70 animate-pulse" />
        <span>CANVAS_BOARD</span>
        <span className="text-border">|</span>
        <span>X: 1280 Y: 720</span>
      </div>

      <div className="absolute top-4 right-4 hidden sm:flex items-center gap-1.5 font-mono text-[9px] text-text-muted/60 select-none bg-surface-elevated/40 px-2 py-0.5 rounded border border-border/30">
        <span>Zoom: 95%</span>
      </div>

      {/* Floating Mini Toolbar Mockup */}
      <div className="absolute bottom-4 left-4 hidden md:flex items-center gap-1.5 rounded-lg border border-border/60 bg-surface/95 px-2 py-1 shadow-lg backdrop-blur-md select-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3 w-3 text-primary">
          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.83 17.606a2.19 2.19 0 0 1-.774.508l-3.356 1.12a.75.75 0 0 1-.961-.96l1.12-3.357a2.19 2.19 0 0 1 .508-.774L16.862 4.487Zm0 0L19.5 7.125" />
        </svg>
        <span className="font-heading text-[10px] font-bold text-text-secondary">Pen Tool</span>
        <span className="h-3 w-px bg-border" />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3 w-3 text-text-muted">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75h16.5v16.5H3.75V3.75z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3 w-3 text-text-muted">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        </svg>
      </div>

      {/* Floating Designer Cursor Mockup */}
      <div className="absolute top-[22%] right-[12%] pointer-events-none select-none z-30 hidden lg:block animate-float">
        <div className="relative">
          <svg className="h-5 w-5 text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] fill-current" viewBox="0 0 24 24">
            <path d="M4.5 3v15.2l4.7-4.4 5.8 8.8 2.5-1.6-5.8-8.8 7.3-.1z"/>
          </svg>
          <span className="absolute left-4 top-4 rounded-md bg-primary px-1.5 py-0.5 font-mono text-[8px] font-bold text-white shadow-md">
            Andre
          </span>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent pointer-events-none" />
      
      {/* Cards stack */}
      <div className="relative h-[340px] w-full max-w-[290px] sm:h-[400px] sm:max-w-[340px]">
        {cards.map((card, index) => {
          const style = getCardStyle(index);
          return (
            <motion.div
              key={card.id}
              className="absolute inset-0 origin-center rounded-2xl border border-border bg-surface p-2.5 shadow-2xl transition-all cursor-pointer select-none"
              animate={style}
              transition={{ type: "spring", stiffness: 100, damping: 18 }}
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative h-[82%] w-full overflow-hidden rounded-xl bg-background border border-border/50">
                <Image
                  src={card.src}
                  alt={card.title}
                  fill
                  className="object-cover object-top pointer-events-none"
                  sizes="(max-w-768px) 100vw, 400px"
                  priority={index === 0}
                  unoptimized
                />
              </div>
              <div className="flex h-[18%] items-center justify-between px-2.5">
                <span className="font-heading text-[10px] font-bold text-text-primary sm:text-xs">
                  {card.title}
                </span>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[8px] font-medium text-primary">
                  Design
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 flex gap-2.5 z-20">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "w-6 bg-primary shadow-sm shadow-primary/45"
                : "w-2 bg-text-muted/40 hover:bg-text-muted/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
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
      className="relative flex min-h-[100dvh] items-center overflow-hidden"
      onMouseMove={handleMouseMove}
      aria-label="Hero"
    >
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 aurora-bg opacity-80" />
      <FloatingParticles />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <motion.div
        className="pointer-events-none absolute top-1/3 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]"
        style={{ x: parallaxX, y: parallaxY }}
      />
      <motion.div
        className="pointer-events-none absolute right-1/4 bottom-1/3 h-80 w-80 rounded-full bg-secondary/10 blur-[100px]"
        style={{ x: parallaxX, y: parallaxY }}
      />

      <div className="section-container relative z-10 py-16 pt-[4.5rem] sm:py-20 sm:pt-24 md:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            {profile.available && (
              <FadeUp>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-success/25 bg-success/10 px-3.5 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                  </span>
                  <span className="font-mono text-[11px] text-success sm:text-xs">
                    {profile.availabilityText}
                  </span>
                </div>
              </FadeUp>
            )}

            <FadeUp delay={0.1}>
              <p className="mb-2 font-mono text-xs tracking-widest text-secondary uppercase sm:text-sm">
                {profile.greeting}
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <h1 className="font-heading text-[2.65rem] font-bold leading-[1.02] tracking-tight text-glow sm:text-5xl md:text-6xl lg:text-[5.25rem]">
                <span className="gradient-text">{profile.displayName}</span>
                <span className="text-primary">.</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-4 font-heading text-lg text-text-secondary sm:text-xl md:text-2xl">
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



            <FadeUp delay={0.25}>
              <p className="mt-5 text-sm leading-relaxed text-text-secondary sm:text-base md:text-lg">
                {profile.tagline}
              </p>
            </FadeUp>

            <FadeUp delay={0.28}>
              <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
                {primaryCtas.map((cta) => (
                  <MagneticButton
                    key={cta.id}
                    href={cta.href}
                    variant={cta.variant}
                    external={cta.external}
                    download={cta.download}
                    icon={cta.showArrow ? <ArrowIcon /> : undefined}
                    className="w-full justify-center sm:w-auto"
                  >
                    {cta.label}
                  </MagneticButton>
                ))}
              </div>
            </FadeUp>

            {profile.socialLinks.length > 0 && (
              <FadeUp delay={0.32}>
                <div className="mt-3 flex gap-2.5 sm:gap-3">
                  {profile.socialLinks.map((link) => (
                    <MagneticButton
                      key={link.id}
                      href={link.href}
                      variant={link.variant ?? "ghost"}
                      external
                      className="flex-1 justify-center sm:flex-none sm:w-auto"
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
            className="perspective-1000 block w-full lg:w-auto mt-8 lg:mt-0"
          >
            <DesignShowcaseDeck />
          </motion.div>
        </div>

        {/* Stats Dashboard Bar */}
        <FadeUp delay={0.38}>
          <div className="mt-12 grid grid-cols-3 gap-4 rounded-2xl border border-border bg-surface/35 p-5 backdrop-blur-sm sm:gap-6 md:p-6 lg:mt-16">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent sm:text-3xl md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 font-mono text-[9px] tracking-widest text-text-muted uppercase sm:text-[10px] md:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="font-mono text-[9px] tracking-widest text-text-muted uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-[18px] rounded-full border border-border/80 p-1"
        >
          <div className="mx-auto h-1 w-1 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}

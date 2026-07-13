"use client";

import { motion } from "framer-motion";
import { ArrowIcon, MagneticButton } from "@/components/ui";
import { getPortfolio } from "@/lib/portfolio";
import { FloatingParticles } from "@/components/ui/floating-particles";

export function Spotlight() {
  const { spotlight } = getPortfolio();

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <FloatingParticles />
      <div className="absolute inset-0 aurora-bg opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="gradient-border mx-auto max-w-4xl rounded-3xl p-px"
        >
          <div className="relative overflow-hidden rounded-3xl bg-surface/80 px-8 py-16 text-center backdrop-blur-xl md:px-16 md:py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
            <div className="relative">
              <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
                Ready to collaborate?
              </p>
              <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                <span className="gradient-text">{spotlight.title}</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
                {spotlight.subtitle}
              </p>
              <div className="mt-10 flex justify-center">
                <MagneticButton
                  href={spotlight.ctaHref}
                  variant="primary"
                  icon={<ArrowIcon />}
                >
                  {spotlight.ctaLabel}
                </MagneticButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, type Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function AnimatedSection({ children, className = "", id }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
    >
      {children}
    </motion.section>
  );
}

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FadeUp({ children, className = "", delay = 0 }: FadeUpProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

interface FadeLeftProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FadeLeft({ children, className = "", delay = 0 }: FadeLeftProps) {
  return (
    <motion.div
      className={className}
      variants={fadeLeft}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

interface FadeRightProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FadeRight({ children, className = "", delay = 0 }: FadeRightProps) {
  return (
    <motion.div
      className={className}
      variants={fadeRight}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

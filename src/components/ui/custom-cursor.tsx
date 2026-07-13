"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 500, damping: 35 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 35 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.body.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.body.removeEventListener("mouseleave", leave);
    };
  }, [mouseX, mouseY]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[200] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/50 md:block"
        style={{ x: springX, y: springY }}
        animate={{ scale: clicking ? 0.8 : 1 }}
        transition={{ duration: 0.15 }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[199] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary md:block"
        style={{ x: mouseX, y: mouseY }}
        aria-hidden="true"
      />
    </>
  );
}

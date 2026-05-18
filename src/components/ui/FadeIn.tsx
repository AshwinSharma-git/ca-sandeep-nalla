"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  once?: boolean;
  amount?: number;
};

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
  none: { x: 0, y: 0 },
};

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance,
  once = true,
  amount = 0.2,
}: Props) {
  const reduce = useReducedMotion();
  const base = offsets[direction];
  const scale = distance ?? 1;
  const offset = reduce
    ? { x: 0, y: 0 }
    : { x: base.x * scale, y: base.y * scale };

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: reduce ? 0 : duration,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

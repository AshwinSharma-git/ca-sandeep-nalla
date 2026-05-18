"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  lift?: number;
};

export function HoverLift({ children, className, lift = 5 }: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      whileHover={reduce ? undefined : { y: -lift }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";

import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;

  delay?: number;

  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  className = "",
}: FadeInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
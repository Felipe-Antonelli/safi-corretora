"use client";

import { LazyMotion, MotionConfig, domAnimation, m } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Animação sutil de entrada (fade + leve subida) quando o bloco
 * aparece na tela. Com prefers-reduced-motion, o movimento é
 * desativado (reducedMotion="user"). LazyMotion mantém o bundle leve.
 */
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <m.div
          className={className}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: "easeOut", delay }}
        >
          {children}
        </m.div>
      </LazyMotion>
    </MotionConfig>
  );
}

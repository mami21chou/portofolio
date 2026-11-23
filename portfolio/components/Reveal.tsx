"use client";
import { motion } from "framer-motion";

// Chaque ligne de titre se lève derrière un masque.
export default function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <span className={`block overflow-hidden pb-[0.14em] ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-8%" }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useT } from "@/lib/i18n";

function Row({ words, dir, italic }: { words: string[]; dir: 1 | -1; italic?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], dir === 1 ? ["0%", "-28%"] : ["-28%", "0%"]);
  const line = [...words, ...words, ...words];
  return (
    <div ref={ref} className="overflow-hidden py-1.5">
      <motion.p style={{ x }} className={`whitespace-nowrap font-display text-[clamp(2.6rem,6.4vw,6rem)] leading-[1.08] tracking-[-0.02em] ${italic ? "italic opacity-60" : ""}`}>
        {line.map((w, i) => (
          <span key={i} className="mr-[0.45em]">{w}<span aria-hidden className="ml-[0.45em] opacity-40">·</span></span>
        ))}
      </motion.p>
    </div>
  );
}

export default function Skills() {
  const t = useT();
  const all = t.skills.words;
  const half = Math.ceil(all.length / 2);
  return (
    <section aria-labelledby="competences-titre" className="overflow-hidden bg-fg py-20 text-canvas md:py-28">
      <h2 id="competences-titre" className="sr-only">{t.skills.title}</h2>
      <ul className="sr-only">{all.map((w) => <li key={w}>{w}</li>)}</ul>
      <div aria-hidden>
        <Row words={all.slice(0, half)} dir={1} />
        <Row words={all.slice(half)} dir={-1} italic />
      </div>
    </section>
  );
}

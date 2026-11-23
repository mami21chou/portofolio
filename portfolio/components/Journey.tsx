"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { profile } from "@/lib/data";
import { useT } from "@/lib/i18n";
import Reveal from "./Reveal";

type Item = { year: string; title: string; place: string };

function Timeline({ title, items }: { title: string; items: Item[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  return (
    <div ref={ref}>
      <h3 className="mb-10 font-display text-3xl italic">{title}</h3>
      <ol className="relative pl-9">
        <span aria-hidden className="absolute left-0 top-1 h-[calc(100%-0.5rem)] w-px bg-line/40" />
        <motion.span aria-hidden style={{ scaleY: scrollYProgress }} className="absolute left-0 top-1 h-[calc(100%-0.5rem)] w-px origin-top bg-accent" />
        {items.map((it) => (
          <li key={it.title} className="relative pb-10 last:pb-0">
            <span aria-hidden className="absolute -left-[calc(2.25rem+3px)] top-[0.55rem] h-[7px] w-[7px] rounded-full bg-accent" />
            <p className="font-display text-lg italic text-muted">{it.year}</p>
            <p className="mt-1 max-w-md text-[1.1rem] leading-snug">{it.title}</p>
            <p className="mt-1 text-muted">{it.place}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Journey() {
  const t = useT();
  return (
    <section id="parcours" aria-labelledby="parcours-titre" className="px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 md:mb-20">
          <h2 id="parcours-titre" className="font-display text-[clamp(2.2rem,4.2vw,4rem)] leading-none tracking-[-0.02em]">
            <Reveal key={t.journey.title}>{t.journey.title}</Reveal>
          </h2>
          <a href={profile.cv} download className="inline-flex items-center gap-3 rounded-full border border-line/70 px-6 py-3 text-[0.92rem] transition-colors duration-500 hover:bg-fg hover:text-canvas">
            {t.journey.cv}
            <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v11M7 11l5 5 5-5M5 20h14" /></svg>
          </a>
        </div>
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <Timeline title={t.journey.formations} items={t.journey.f} />
          <div className="space-y-16">
            <Timeline title={t.journey.experiences} items={t.journey.e} />
            <div>
              <h3 className="mb-6 font-display text-3xl italic">{t.journey.languages}</h3>
              <ul>
                {t.journey.langs.map((l) => (
                  <li key={l.name} className="flex items-baseline justify-between gap-6 border-t border-line/50 py-4 last:border-b">
                    <span className="text-[1.1rem]">{l.name}</span>
                    <span className="font-display text-lg italic text-muted">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

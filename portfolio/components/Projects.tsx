"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { BrowserFrame, PhoneFrame } from "./Devices";
import Reveal from "./Reveal";
import { GithubIcon } from "./Icons";

function Scene({ p, last }: { p: Project; last: boolean }) {
  const tr = useT();
  const c = tr.projects.items[p.slug];
  const ref = useRef<HTMLDivElement>(null);
  // la scène se range sous la suivante
  const { scrollYProgress: out } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(out, [0, 1], [1, last ? 1 : 0.93]);
  const dim = useTransform(out, [0, 1], [0, last ? 0 : 0.5]);
  // parallaxe des appareils pendant que la scène traverse l'écran
  const { scrollYProgress: pass } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBrowser = useTransform(pass, [0, 1], [30, -30]);
  const yPhone = useTransform(pass, [0, 1], [80, -70]);
  const yLeft = useTransform(pass, [0, 1], [50, -30]);
  const yMid = useTransform(pass, [0, 1], [10, -10]);
  const yRight = useTransform(pass, [0, 1], [70, -50]);
  const t = p.theme;

  return (
    <div ref={ref} className="relative mb-6 md:mb-0 md:h-[106svh]">
      <motion.article
        style={{ scale, background: t.bg, color: t.fg }}
        aria-labelledby={`${p.slug}-titre`}
        className="relative origin-top overflow-hidden rounded-[1.6rem] md:sticky md:top-[9svh] md:h-[82svh] md:rounded-[2rem]"
      >
        {/* lumière en haut à droite, comme un éclairage de studio */}
        <div aria-hidden className="pointer-events-none absolute -right-[10%] -top-[30%] h-[80%] w-[70%] rounded-full opacity-40" style={{ background: "radial-gradient(closest-side, rgba(255,255,255,.35), rgba(255,255,255,0))" }} />

        <div className={`relative grid h-full gap-10 px-6 py-10 ${p.phones ? "md:grid-cols-[minmax(0,4.2fr)_minmax(0,8.4fr)]" : "md:grid-cols-[minmax(0,5fr)_minmax(0,7.6fr)]"} md:items-center md:gap-8 md:px-12 md:py-0 lg:px-14`}>
          <div className="flex flex-col justify-center">
            <h3 id={`${p.slug}-titre`} className="font-display text-[clamp(2.3rem,3.8vw,3.7rem)] leading-[1] tracking-[-0.02em]">{p.title}</h3>
            <p className="mt-5 max-w-[30rem] text-[1.02rem] leading-relaxed" style={{ color: t.muted }}>{c.text}</p>

            <ul className="mt-8 max-w-[30rem]">
              {c.features.map((f) => (
                <li key={f} className="border-t py-3 text-[0.94rem] leading-snug" style={{ borderColor: t.line }}>{f}</li>
              ))}
              <li aria-hidden className="border-t" style={{ borderColor: t.line }} />
            </ul>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label={tr.projects.tech}>
              {p.stack.map((s) => (
                <li key={s} className="rounded-full px-3 py-1 text-[0.78rem]" style={{ background: t.chip }}>{s}</li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-[0.9rem] font-medium transition-transform duration-500 ease-silk hover:-translate-y-0.5" style={{ background: t.button, color: t.buttonFg }}>
                <GithubIcon />{tr.projects.code}
              </a>
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 rounded-full border px-5 py-3 text-[0.9rem] transition-opacity duration-300 hover:opacity-70" style={{ borderColor: t.line }}>
                  {tr.projects.live}
                  <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9" /></svg>
                </a>
              )}
            </div>
          </div>

          {p.phones ? (
            <div className="grid grid-cols-3 items-center gap-3 pb-6 md:gap-4 md:pb-0 lg:gap-6">
              {p.phones.map((ph, i) => (
                <motion.figure key={ph.role} style={{ y: i === 1 ? yMid : i === 0 ? yLeft : yRight }} className={i === 1 ? "md:scale-[1.1]" : ""}>
                  <PhoneFrame media={ph.media} label={`${tr.projects.demoPhone.replace("{t}", p.title)}, ${tr.projects.roles[ph.role]}`} />
                  <figcaption className="mt-3 text-center text-[0.78rem] tracking-wide md:text-[0.85rem]" style={{ color: t.muted }}>{tr.projects.roles[ph.role]}</figcaption>
                </motion.figure>
              ))}
            </div>
          ) : (
            <div className="relative pb-12 md:pb-0">
              <motion.div style={{ y: yBrowser }} className="md:mr-[4%]">
                {p.desktop && <BrowserFrame media={p.desktop} label={tr.projects.demoDesktop.replace("{t}", p.title)} />}
              </motion.div>
              {p.mobile && (
                <motion.div style={{ y: yPhone }} className="absolute -bottom-0 right-0 w-[30%] min-w-[110px] md:-bottom-[10%] md:-right-[1%] md:w-[24%]">
                  <PhoneFrame media={p.mobile} label={tr.projects.demoPhone.replace("{t}", p.title)} />
                </motion.div>
              )}
            </div>
          )}
        </div>

        <motion.div aria-hidden style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-black" />
      </motion.article>
    </div>
  );
}

export default function Projects() {
  const t = useT();
  return (
    <section id="projets" aria-labelledby="projets-titre" className="px-4 pb-24 pt-8 md:px-8 md:pb-32 md:pt-20">
      <div className="mx-auto max-w-[1340px]">
        <div className="mx-auto mb-12 flex max-w-[1240px] flex-wrap items-end justify-between gap-6 px-2 md:mb-16 md:px-0">
          <h2 id="projets-titre" className="font-display text-[clamp(2.2rem,4.2vw,4rem)] leading-none tracking-[-0.02em]">
            <Reveal key={t.projects.title}>{t.projects.title}</Reveal>
          </h2>
          <p className="max-w-[22rem] text-muted">{t.projects.lead}</p>
        </div>

        {projects.map((p, i) => (
          <Scene key={p.slug} p={p} last={i === projects.length - 1} />
        ))}

        <p className="mx-auto mt-16 max-w-[1240px] px-2 text-muted md:mt-24 md:px-0">
          <span className="font-display text-xl italic text-fg">{t.projects.other.title}</span>
          <span className="mx-3 text-line">/</span>
          {t.projects.other.text}
        </p>
      </div>
    </section>
  );
}

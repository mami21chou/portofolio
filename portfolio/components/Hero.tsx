"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { profile } from "@/lib/data";
import { useT } from "@/lib/i18n";

const ease = [0.76, 0, 0.24, 1] as const;
const D = 1.7; // on attend la fin du rideau d'ouverture

function Line({ children, delay, className = "" }: { children: React.ReactNode; delay: number; className?: string }) {
  return (
    <span className={`block overflow-hidden pb-[0.12em] ${className}`}>
      <motion.span className="block" initial={{ y: "115%" }} animate={{ y: "0%" }} transition={{ duration: 1.3, ease, delay }}>
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const t = useT();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const archY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  const mx = useMotionValue(0), my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 45, damping: 18 }), sy = useSpring(my, { stiffness: 45, damping: 18 });
  const onMove = (e: React.MouseEvent) => {
    mx.set(e.clientX / window.innerWidth - 0.5);
    my.set(e.clientY / window.innerHeight - 0.5);
  };
  const chipAx = useTransform(sx, [-0.5, 0.5], [-16, 16]);
  const chipAy = useTransform(sy, [-0.5, 0.5], [-10, 10]);
  const chipBx = useTransform(sx, [-0.5, 0.5], [20, -20]);
  const chipBy = useTransform(sy, [-0.5, 0.5], [12, -12]);
  const glowX = useTransform(sx, [-0.5, 0.5], ["35%", "75%"]);
  const glowY = useTransform(sy, [-0.5, 0.5], ["20%", "65%"]);

  return (
    <section ref={ref} onMouseMove={onMove} className="relative min-h-[100svh] overflow-hidden px-6 pb-20 pt-28 md:px-12">
      {/* lumières douces en fond */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[10%] top-[8%] h-[55vmax] w-[55vmax] rounded-full opacity-60 [animation:drift-a_26s_ease-in-out_infinite]" style={{ background: "radial-gradient(closest-side, rgb(var(--soft) / .9), rgb(var(--soft) / 0))" }} />
        <div className="absolute -right-[12%] top-[10%] h-[48vmax] w-[48vmax] rounded-full opacity-50 [animation:drift-b_32s_ease-in-out_infinite]" style={{ background: "radial-gradient(closest-side, rgb(var(--accent) / .32), rgb(var(--accent) / 0))" }} />
        <motion.div className="absolute h-[40vmax] w-[40vmax] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40" style={{ left: glowX, top: glowY, background: "radial-gradient(closest-side, rgb(var(--surface) / .7), rgb(var(--surface) / 0))" }} />
      </div>

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 lg:min-h-[calc(100svh-9rem)] lg:grid-cols-12">
        {/* Texte : le métier d'abord */}
        <motion.div style={{ y: textY }} className="order-2 lg:order-1 lg:col-span-7">
          <h1 className="font-display text-[clamp(2.5rem,4.9vw,4.7rem)] leading-[1.03] tracking-[-0.02em]">
            <Line delay={D}>{t.hero.l1}</Line>
            <Line delay={D + 0.12} className="italic text-muted">{t.hero.l2}</Line>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: D + 0.5 }}
            className="mt-8 max-w-[33rem] text-[1.06rem] leading-relaxed text-muted"
          >
            {t.hero.text}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: D + 0.65 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#projets" className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-[0.95rem] font-medium text-accentfg transition-transform duration-500 ease-silk hover:-translate-y-0.5">
              {t.hero.seeProjects}
              <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-500 ease-silk group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
            </a>
            <a href={profile.cv} download className="inline-flex items-center gap-3 rounded-full border border-line/70 px-7 py-3.5 text-[0.95rem] transition-colors duration-500 hover:bg-fg hover:text-canvas">
              {t.hero.cv}
            </a>
          </motion.div>
        </motion.div>

        {/* Portrait en arche */}
        <motion.div style={{ y: archY }} className="order-1 lg:order-2 lg:col-span-5">
          <div className="relative mx-auto w-[min(72vw,330px)] lg:ml-auto lg:mr-0 lg:w-[min(100%,380px)]">
            <motion.div
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }} animate={{ clipPath: "inset(0% 0% 0% 0%)" }} transition={{ duration: 1.5, ease, delay: D - 0.3 }}
              className="relative aspect-[3/4] overflow-hidden rounded-t-[999px] rounded-b-[1.6rem] shadow-[0_50px_90px_-30px_rgba(41,32,29,.55)]"
              style={{ background: "linear-gradient(180deg,#E2D4C5 0%,#B99D8D 58%,#A46247 100%)" }}
            >
              <motion.div initial={{ scale: 1.25 }} animate={{ scale: 1.02 }} transition={{ duration: 2, ease, delay: D - 0.3 }} className="absolute inset-0">
                <Image src="/adji-cutout.webp" alt={`${t.hero.portrait} ${profile.name}`} fill priority sizes="(min-width:1024px) 380px, 72vw" className="object-cover object-[50%_8%]" />
              </motion.div>
            </motion.div>

            {/* repères métier */}
            <motion.span style={{ x: chipAx, y: chipAy }} className="absolute -left-4 top-[22%] hidden sm:block lg:-left-16">
              <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease, delay: D + 0.9 }} className="flex items-center gap-2 rounded-full border border-line/50 bg-canvas/70 px-4 py-2 text-[0.82rem] shadow-lg backdrop-blur-md">
                {t.hero.chips[0]}
              </motion.span>
            </motion.span>
            <motion.span style={{ x: chipBx, y: chipBy }} className="absolute -right-3 top-[52%] hidden sm:block lg:-right-10">
              <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease, delay: D + 1.05 }} className="flex items-center gap-2 rounded-full border border-line/50 bg-canvas/70 px-4 py-2 text-[0.82rem] shadow-lg backdrop-blur-md">
                {t.hero.chips[1]}
              </motion.span>
            </motion.span>
            <motion.span style={{ x: chipAx, y: chipBy }} className="absolute -left-2 bottom-[9%] hidden sm:block lg:-left-10">
              <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease, delay: D + 1.2 }} className="flex items-center gap-2 rounded-full border border-line/50 bg-canvas/70 px-4 py-2 text-[0.82rem] shadow-lg backdrop-blur-md">
                {t.hero.chips[2]}
              </motion.span>
            </motion.span>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: D + 1.3 }} className="mt-5 text-center text-[0.85rem] text-muted lg:text-right">
              {profile.name}, {t.contact.cityValue}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

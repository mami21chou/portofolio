"use client";
import { useT } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Services() {
  const t = useT();
  return (
    <section id="expertise" aria-labelledby="expertise-titre" className="px-6 pb-16 pt-28 md:px-12 md:pb-24 md:pt-40">
      <div className="mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-12 lg:gap-10">
        <h2 id="expertise-titre" className="font-display text-[clamp(2rem,3.7vw,3.5rem)] leading-[1.08] tracking-[-0.02em] lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
          <Reveal key={t.services.h[0]}>{t.services.h[0]}</Reveal>
          <Reveal key={t.services.h[1]} delay={0.1}>{t.services.h[1]}</Reveal>
          <Reveal key={t.services.h[2]} delay={0.2} className="italic text-muted">{t.services.h[2]}</Reveal>
        </h2>

        <ul className="lg:col-span-7">
          {t.services.items.map((s) => (
            <li key={s.title} className="grid gap-3 border-t border-line/50 py-9 first:border-t-0 first:pt-2 md:grid-cols-12 md:gap-8 md:py-11">
              <h3 className="font-display text-[1.65rem] leading-tight md:col-span-5">{s.title}</h3>
              <p className="max-w-[28rem] leading-relaxed text-muted md:col-span-7">{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import { useLang, useT } from "@/lib/i18n";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const t = useT();
  const { lang, setLang } = useLang();
  const links = [
    { href: "#expertise", label: t.nav.expertise },
    { href: "#projets", label: t.nav.projects },
    { href: "#parcours", label: t.nav.journey },
    { href: "#contact", label: t.nav.contact },
  ];
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${solid ? "border-b border-line/30 bg-canvas/75 backdrop-blur-xl" : "border-b border-transparent"}`}>
      <div className="px-6 md:px-12"><div className="mx-auto flex h-[68px] max-w-[1240px] items-center justify-between">
        <a href="#" aria-label={`${profile.name}, ${t.header.home}`} className="font-display text-xl italic leading-none">
          {profile.short}
        </a>
        <div className="flex items-center gap-3 md:gap-8">
          <nav aria-label={t.header.mainNav} className="hidden md:block">
            <ul className="flex gap-8 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="group relative inline-block py-1">
                    {l.label}
                    <span className="absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-fg transition-transform duration-500 ease-silk group-hover:origin-left group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={profile.cv}
            download
            aria-label={t.header.cvLabel}
            className="rounded-full border border-line/60 px-4 py-2 text-sm transition-colors duration-500 hover:bg-fg hover:text-canvas"
          >
            {t.header.cv}
          </a>
          <button
            type="button"
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            aria-label={t.header.toEn}
            lang={lang === "fr" ? "en" : "fr"}
            className="grid h-10 min-w-10 place-items-center rounded-full border border-line/60 px-2 text-[0.8rem] font-medium tracking-wider transition-colors duration-500 hover:bg-fg hover:text-canvas"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <ThemeToggle />
        </div>
      </div></div>
    </header>
  );
}

"use client";
import { profile } from "@/lib/data";
import { useEffect, useState } from "react";
import { useT } from "@/lib/i18n";
import Reveal from "./Reveal";
import { GithubIcon, LinkedinIcon, MailIcon, WhatsappIcon } from "./Icons";

export default function Contact() {
  const t = useT();
  // Sur ordinateur, « mailto: » ne fait rien sans application de messagerie : on ouvre Gmail.
  const [coarse, setCoarse] = useState(true);
  useEffect(() => { setCoarse(window.matchMedia("(pointer: coarse)").matches); }, []);
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`;
  const wa = `${profile.whatsapp}?text=${encodeURIComponent(t.contact.whatsappText)}`;
  const rows = [
    { label: t.contact.email, value: profile.email, href: coarse ? `mailto:${profile.email}` : gmail, icon: <MailIcon />, external: !coarse },
    { label: t.contact.whatsapp, value: profile.phone, href: wa, icon: <WhatsappIcon />, external: true },
    { label: "LinkedIn", value: profile.name, href: profile.linkedin, icon: <LinkedinIcon />, external: true },
    { label: "GitHub", value: "mami21chou", href: profile.github, icon: <GithubIcon />, external: true },
  ];
  return (
    <footer id="contact" aria-labelledby="contact-titre" className="bg-deep px-6 pb-10 pt-24 text-[#EDE8E1] md:px-12 md:pt-36">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <h2 id="contact-titre" className="font-display text-[clamp(2.3rem,5vw,4.8rem)] leading-[1] tracking-[-0.02em]">
              <Reveal key={t.contact.h1}>{t.contact.h1}</Reveal>
              <Reveal key={t.contact.h2} delay={0.12} className="italic text-[#B99D8D]">{t.contact.h2}</Reveal>
            </h2>
            <a href={profile.cv} download className="mt-12 inline-flex items-center gap-3 rounded-full bg-[#EDE8E1] px-6 py-3 text-[0.92rem] font-medium text-[#29201D] transition-transform duration-500 ease-silk hover:-translate-y-0.5">
              {t.contact.cv}
              <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v11M7 11l5 5 5-5M5 20h14" /></svg>
            </a>
          </div>

          <ul className="lg:col-span-6 lg:self-end">
            {rows.map((r) => (
              <li key={r.label} className="border-t border-white/15 last:border-b">
                <a
                  href={r.href}
                  {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 py-5 transition-colors hover:text-white"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 text-[#D9C9B9] transition-colors duration-500 group-hover:bg-[#EDE8E1] group-hover:text-[#29201D]">{r.icon}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.8rem] text-[#B99D8D]">{r.label}</span>
                    <span className="block break-words text-[1.05rem] md:text-[1.15rem]">{r.value}</span>
                  </span>
                  <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 shrink-0 opacity-50 transition-all duration-500 ease-silk group-hover:translate-x-1 group-hover:opacity-100" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-20 flex flex-wrap items-center justify-between gap-3 text-sm text-[#B99D8D]">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>{t.contact.cityValue}</span>
        </p>
      </div>
    </footer>
  );
}

"use client";
import { useEffect, useRef } from "react";
import type { Media } from "@/lib/data";

// Vidéo de démonstration : ne joue que lorsqu'elle est visible.
export function DemoVideo({ media, label }: { media: Media; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) v.play().catch(() => {}); else v.pause(); },
      { threshold: 0.2 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <video ref={ref} muted loop playsInline preload="metadata" poster={media.poster} aria-label={label} className="h-full w-full object-cover object-top">
      <source src={media.src} type="video/mp4" />
    </video>
  );
}

export function BrowserFrame({ media, label, className = "" }: { media: Media; label: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-white/15 bg-[#17100D] shadow-[0_45px_90px_-25px_rgba(0,0,0,.6)] ${className}`}>
      <div className="flex h-6 items-center gap-1.5 bg-[#241A16] px-3">
        <i className="h-2 w-2 rounded-full bg-white/25" /><i className="h-2 w-2 rounded-full bg-white/25" /><i className="h-2 w-2 rounded-full bg-white/25" />
        <span className="ml-3 h-3 w-1/3 rounded-full bg-white/10" />
      </div>
      <div className="aspect-[16/10] bg-[#17100D]">
        <DemoVideo media={media} label={label} />
      </div>
    </div>
  );
}

// Mockup de téléphone : cadre titane, boutons latéraux, îlot et reflet sur la vitre.
export function PhoneFrame({ media, label, className = "" }: { media: Media; label: string; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* boutons latéraux */}
      <span aria-hidden className="absolute -left-[1.6%] top-[17%] h-[4.5%] w-[2%] rounded-l-sm bg-[#3a312d]" />
      <span aria-hidden className="absolute -left-[1.6%] top-[24%] h-[8%] w-[2%] rounded-l-sm bg-[#3a312d]" />
      <span aria-hidden className="absolute -left-[1.6%] top-[34%] h-[8%] w-[2%] rounded-l-sm bg-[#3a312d]" />
      <span aria-hidden className="absolute -right-[1.6%] top-[28%] h-[12%] w-[2%] rounded-r-sm bg-[#3a312d]" />

      {/* cadre */}
      <div
        className="relative rounded-[17%/7.8%] p-[2.6%] shadow-[0_50px_90px_-25px_rgba(0,0,0,.7),0_18px_30px_-12px_rgba(0,0,0,.45)]"
        style={{ background: "linear-gradient(145deg,#8c7d73 0%,#3b312c 22%,#1b1411 55%,#4a3d36 80%,#8c7d73 100%)" }}
      >
        {/* bordure noire intérieure */}
        <div className="relative rounded-[15%/6.9%] bg-black p-[1.6%]">
          <div className="relative aspect-[390/844] overflow-hidden rounded-[13.5%/6.2%] bg-[#17100D]">
            <DemoVideo media={media} label={label} />
            {/* îlot dynamique */}
            <span aria-hidden className="absolute left-1/2 top-[1.5%] h-[2.8%] w-[27%] -translate-x-1/2 rounded-full bg-black" />
            {/* reflet de la vitre */}
            <span aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(115deg,rgba(255,255,255,.16) 0%,rgba(255,255,255,0) 32%)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

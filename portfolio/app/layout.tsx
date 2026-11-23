import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { SITE_URL, profile } from "@/lib/data";
import SmoothScroll from "@/components/SmoothScroll";
import Providers from "@/components/Providers";

const display = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-display", display: "swap" });
const sans = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const title = "Développeuse fullstack et IA à Dakar | Adji Aïssatou Wade Sambe";
const description =
  "Développeuse fullstack à Dakar : applications web et mobile complètes, sécurisées et intelligentes, avec intégration de l'IA et automatisation des tâches répétitives.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s | Adji Aïssatou Wade Sambe" },
  description,
  keywords: ["développeuse fullstack", "développeuse web Dakar", "développeuse IA", "React", "Next.js", "Django", "RAG", "n8n", "automatisation", "Sénégal", "portfolio"],
  authors: [{ name: profile.name }],
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", siteName: profile.name, locale: "fr_SN", type: "website", images: [{ url: "/og.jpg", width: 1200, height: 630, alt: `${profile.name}, développeuse fullstack et IA` }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EDE8E1" },
    { media: "(prefers-color-scheme: dark)", color: "#1A1310" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Développeuse fullstack et IA",
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  url: SITE_URL,
  image: `${SITE_URL}/adji-cutout.webp`,
  address: { "@type": "PostalAddress", addressLocality: "Dakar", addressCountry: "SN" },
  knowsAbout: ["React", "Next.js", "Python", "Django", "Intelligence artificielle", "RAG", "Automatisation", "n8n"],
  sameAs: [profile.linkedin, profile.github].filter(Boolean),
};

// Applique le thème avant le premier affichage pour éviter tout flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">
        <Providers>
          <SmoothScroll />
          {children}
        </Providers>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}

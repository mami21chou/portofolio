// Tout le contenu du site vit ici.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://adjiaissatouwade.com";

export const profile = {
  name: "Adji Aïssatou Wade Sambe",
  short: "A. W. Sambe",
  email: "adjiaissatouwade@gmail.com",
  phone: "+221 70 853 87 52",
  phoneHref: "+221708538752",
  whatsapp: "https://wa.me/221708538752",
  city: "Dakar, Sénégal",
  linkedin: "https://www.linkedin.com/in/adji-a%C3%AFssatou-wade-sambe-860326257/",
  github: "https://github.com/mami21chou?tab=repositories",
  cv: "/cv-adji-aissatou-wade-sambe.pdf",
};

export type Media = { src: string; poster: string };
export type Project = {
  slug: string;
  title: string;
  stack: string[];
  github: string;
  live?: string;
  theme: { bg: string; fg: string; muted: string; line: string; chip: string; button: string; buttonFg: string };
  desktop?: Media;
  mobile?: Media;
  phones?: { role: "pecheur" | "acheteur" | "livreur"; media: Media }[];
};

const media = (slug: string, device: string): Media => ({
  src: `/projects/${slug}/${device}.mp4`,
  poster: `/projects/${slug}/${device}.jpg`,
});

export const projects: Project[] = [
  {
    slug: "lebougui",
    title: "LebouGui",
    stack: ["React", "Django REST", "MySQL", "FastAPI", "Whisper", "Docker"],
    github: "https://github.com/mami21chou/Lebougui",
    theme: { bg: "linear-gradient(135deg,#B8714F 0%,#A46247 42%,#7A3E2B 100%)", fg: "#F9F6F2", muted: "rgba(249,246,242,.78)", line: "rgba(249,246,242,.28)", chip: "rgba(249,246,242,.14)", button: "#F9F6F2", buttonFg: "#4A2314" },
    phones: [
      { role: "pecheur", media: media("lebougui", "pecheur") },
      { role: "acheteur", media: media("lebougui", "acheteur") },
      { role: "livreur", media: media("lebougui", "livreur") },
    ],
  },
  {
    slug: "smarthelp",
    title: "Smarthelp",
    stack: ["React", "Tailwind CSS", "Framer Motion", "RAG", "Whisper"],
    github: "https://github.com/mami21chou/Smart_help_Front",
    theme: { bg: "linear-gradient(135deg,#43302A 0%,#2B1F1B 50%,#17100D 100%)", fg: "#EDE8E1", muted: "rgba(237,232,225,.72)", line: "rgba(237,232,225,.2)", chip: "rgba(237,232,225,.1)", button: "#D9C9B9", buttonFg: "#29201D" },
    desktop: media("smarthelp", "desktop"),
    mobile: media("smarthelp", "mobile"),
  },
  {
    slug: "sunu-idee",
    title: "Sunu idée",
    stack: ["JavaScript", "Tailwind CSS", "LocalStorage", "IA"],
    github: "https://github.com/mami21chou/Sunu-idee",
    live: "https://sunu-idee2-5f7j.vercel.app/",
    theme: { bg: "linear-gradient(135deg,#E3D6C8 0%,#D2BFAE 45%,#B99D8D 100%)", fg: "#29201D", muted: "rgba(41,32,29,.76)", line: "rgba(41,32,29,.22)", chip: "rgba(41,32,29,.08)", button: "#29201D", buttonFg: "#EDE8E1" },
    desktop: media("sunu-idee", "desktop"),
    mobile: media("sunu-idee", "mobile"),
  },
];

"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { content, type Lang } from "./content";

type Ctx = { lang: Lang; setLang: (l: Lang) => void };
const LangCtx = createContext<Ctx>({ lang: "fr", setLang: () => {} });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  // Langue choisie, sinon langue du navigateur
  useEffect(() => {
    let l: Lang = "fr";
    try {
      const s = localStorage.getItem("lang");
      if (s === "fr" || s === "en") l = s;
      else if (!navigator.language.toLowerCase().startsWith("fr")) l = "en";
    } catch {}
    setLangState(l);
  }, []);

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("lang", l); } catch {}
  };
  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);
export const useT = () => content[useContext(LangCtx).lang];

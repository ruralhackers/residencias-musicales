"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import * as content from "@/content/site";
import { translate, translateContent } from "@/content/translations";

const LanguageContext = createContext<"gl" | "es">("gl");

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<"gl" | "es">("gl");
  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = locale === "gl" ? "Residencias Musicais — Anceu" : "Residencias Musicales — Anceu";
    document.querySelector('meta[name="description"]')?.setAttribute("content", translate(content.site.description, locale));
  }, [locale]);
  return (
    <LanguageContext.Provider value={locale}>
      <div className="page-shell pt-12">
        <button type="button" onClick={() => setLocale(locale === "gl" ? "es" : "gl")}
          lang={locale === "gl" ? "es" : "gl"}
          aria-label={locale === "gl" ? "Cambiar a español" : "Cambiar a galego"}
          className="min-h-[44px] min-w-[44px] text-left text-xs underline underline-offset-4 transition-opacity hover:opacity-60">
          {locale === "gl" ? "ES" : "GAL"}
        </button>
      </div>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const locale = useContext(LanguageContext);
  return (text: string) => translate(text, locale);
}

export function useContent() {
  return translateContent(content, useContext(LanguageContext));
}

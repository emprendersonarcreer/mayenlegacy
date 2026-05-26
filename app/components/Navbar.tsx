"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "../../i18n/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FAF7F2]/90 backdrop-blur-sm border-b border-[#EADCC6]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-serif text-xl text-[#4A90E2] tracking-widest">NASHELI MAYÉN</span>

        {/* Links en escritorio */}
        <div className="hidden md:flex gap-8 text-sm text-[#4A90E2] tracking-wider items-center">
          <a href="/#sobre-mi" className="hover:text-[#9A7B0A] transition-colors">{t("about")}</a>
          <a href="/#proyectos" className="hover:text-[#9A7B0A] transition-colors">{t("projects")}</a>
          <a href="/conferencista" className="hover:text-[#9A7B0A] transition-colors">{t("speaker")}</a>
          <a href="/#testimonios" className="hover:text-[#9A7B0A] transition-colors">{t("testimonials")}</a>
          <a href="/#contacto" className="hover:text-[#9A7B0A] transition-colors">{t("contact")}</a>

          {/* Selector de idioma */}
          <div className="flex items-center gap-1 border-l border-[#EADCC6] pl-6">
            <button
              onClick={() => switchLocale("es")}
              className={`text-xs tracking-wider transition-colors px-1 ${locale === "es" ? "text-[#9A7B0A] font-bold" : "text-gray-400 hover:text-[#4A90E2]"}`}
              aria-label="Español"
            >
              🇲🇽 ES
            </button>
            <span className="text-gray-300 text-xs">|</span>
            <button
              onClick={() => switchLocale("en")}
              className={`text-xs tracking-wider transition-colors px-1 ${locale === "en" ? "text-[#9A7B0A] font-bold" : "text-gray-400 hover:text-[#4A90E2]"}`}
              aria-label="English"
            >
              🇺🇸 EN
            </button>
          </div>
        </div>

        {/* Botón hamburguesa en móvil */}
        <button
          className="md:hidden text-[#4A90E2]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menú"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Menú desplegable en móvil */}
      {isOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-t border-[#EADCC6] px-6 py-4 flex flex-col gap-4 text-sm text-[#4A90E2] tracking-wider">
          <a href="/#sobre-mi" className="hover:text-[#9A7B0A] transition-colors py-2" onClick={() => setIsOpen(false)}>{t("about")}</a>
          <a href="/#proyectos" className="hover:text-[#9A7B0A] transition-colors py-2" onClick={() => setIsOpen(false)}>{t("projects")}</a>
          <a href="/conferencista" className="hover:text-[#9A7B0A] transition-colors py-2" onClick={() => setIsOpen(false)}>{t("speaker")}</a>
          <a href="/#testimonios" className="hover:text-[#9A7B0A] transition-colors py-2" onClick={() => setIsOpen(false)}>{t("testimonials")}</a>
          <a href="/#contacto" className="hover:text-[#9A7B0A] transition-colors py-2" onClick={() => setIsOpen(false)}>{t("contact")}</a>

          {/* Selector de idioma móvil */}
          <div className="flex items-center gap-2 pt-2 border-t border-[#EADCC6]">
            <button
              onClick={() => { switchLocale("es"); setIsOpen(false); }}
              className={`text-xs tracking-wider transition-colors ${locale === "es" ? "text-[#9A7B0A] font-bold" : "text-gray-400"}`}
            >
              🇲🇽 Español
            </button>
            <span className="text-gray-300 text-xs">|</span>
            <button
              onClick={() => { switchLocale("en"); setIsOpen(false); }}
              className={`text-xs tracking-wider transition-colors ${locale === "en" ? "text-[#9A7B0A] font-bold" : "text-gray-400"}`}
            >
              🇺🇸 English
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

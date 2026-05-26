import type { Metadata } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Navbar from "../components/Navbar";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactForm from "../components/ContactForm";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Home");
  return {
    title: "Nasheli Mayén | Conferencista · Autora · Fundadora",
    openGraph: {
      title: "Nasheli Mayén | Conferencista · Autora · Fundadora",
      description: t("hero.description"),
      url: "https://mayenlegacy.com",
      images: [{ url: "/nasheli-azul2.png", width: 800, height: 1000, alt: "Nasheli Mayén" }],
    },
  };
}

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      <Navbar />

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <p className="text-[#9A7B0A] tracking-[0.3em] text-sm">{t("hero.tagline")}</p>
            <h1 className="font-serif text-5xl md:text-6xl text-[#2C4A7C] leading-tight">
              Nasheli<br />Mayén
            </h1>
            <p className="text-[#4A90E2] text-lg tracking-wide">{t("hero.subtitle")}</p>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">{t("hero.description")}</p>
            <div className="flex gap-4 mt-4">
              <a href="#proyectos"
                className="bg-[#4A90E2] text-white px-8 py-3 tracking-wider text-sm hover:bg-[#2C4A7C] transition-colors">
                {t("hero.cta1")}
              </a>
              <a href="#contacto"
                className="border border-[#4A90E2] text-[#4A90E2] px-8 py-3 tracking-wider text-sm hover:bg-[#E6F1FA] transition-colors">
                {t("hero.cta2")}
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="relative w-[380px] h-[520px]">
              <Image src="/nasheli-azul2.png" alt="Nasheli Mayén" fill className="object-cover object-center" priority />
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-[#9A7B0A] -z-10" />
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center order-2 md:order-1">
            <div className="relative w-[380px] h-[500px]">
              <Image src="/nasheli-azul.png" alt="Nasheli Mayén" fill className="object-cover object-top" />
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-[#9A7B0A] -z-10" />
          </div>
          <div className="flex flex-col gap-6 order-1 md:order-2">
            <p className="text-[#9A7B0A] tracking-[0.3em] text-sm">{t("about.label")}</p>
            <h2 className="font-serif text-4xl text-[#2C4A7C] leading-tight">{t("about.title")}</h2>
            <div className="w-12 h-[2px] bg-[#9A7B0A]" />
            <p className="text-gray-600 leading-relaxed">
              {t("about.p1before")}{" "}
              <span className="italic text-[#2C4A7C] font-medium">{t("about.p1highlight")}</span>
            </p>
            <p className="text-gray-600 leading-relaxed">{t("about.p2")}</p>
            <p className="text-gray-600 leading-relaxed">
              {t("about.p3before")}{" "}
              <span className="text-[#2C4A7C] font-medium">{t("about.p3highlight")}</span>{" "}
              {t("about.p3after")}
            </p>
            <div className="grid grid-cols-3 gap-4 mt-2 pt-6 border-t border-[#EADCC6]">
              <div className="flex flex-col gap-1">
                <p className="font-serif text-3xl text-[#9A7B0A]">{t("about.stat1number")}</p>
                <p className="text-xs text-gray-400 tracking-wider leading-tight whitespace-pre-line">{t("about.stat1label")}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-serif text-3xl text-[#9A7B0A]">3</p>
                <p className="text-xs text-gray-400 tracking-wider leading-tight whitespace-pre-line">{t("about.stat2label")}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-serif text-3xl text-[#4A90E2]">∞</p>
                <p className="text-xs text-gray-400 tracking-wider leading-tight whitespace-pre-line">{t("about.stat3label")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="py-24 bg-[#E6F1FA]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#9A7B0A] tracking-[0.3em] text-sm text-center mb-3">{t("projects.label")}</p>
          <h2 className="font-serif text-4xl text-[#2C4A7C] text-center mb-16">{t("projects.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF7F2] p-10 flex flex-col gap-4 border-t-4 border-[#9A7B0A]">
              <p className="text-[#9A7B0A] tracking-[0.3em] text-xs">{t("projects.essentia.tagline")}</p>
              <h3 className="font-serif text-3xl text-[#2C4A7C]">{t("projects.essentia.title")}</h3>
              <p className="text-gray-600 leading-relaxed">{t("projects.essentia.description")}</p>
              <a href="/essentia" className="inline-block bg-[#9A7B0A] text-white text-xs tracking-widest px-6 py-2 w-fit hover:bg-[#b8962e] transition-colors">
                {t("projects.essentia.cta")}
              </a>
            </div>
            <div className="bg-[#FAF7F2] p-10 flex flex-col gap-4 border-t-4 border-[#4A90E2]">
              <p className="text-[#4A90E2] tracking-[0.3em] text-xs">{t("projects.alkalination.tagline")}</p>
              <h3 className="font-serif text-3xl text-[#2C4A7C]">{t("projects.alkalination.title")}</h3>
              <p className="text-gray-600 leading-relaxed">{t("projects.alkalination.description")}</p>
              <a href="/alkalination" className="inline-block bg-[#4A90E2] text-white text-xs tracking-widest px-6 py-2 w-fit hover:bg-[#2C4A7C] transition-colors">
                {t("projects.alkalination.cta")}
              </a>
            </div>
            <div className="bg-[#FAF7F2] p-10 flex flex-col gap-4 border-t-4 border-[#2C4A7C]">
              <p className="text-[#2C4A7C] tracking-[0.3em] text-xs">{t("projects.speaker.tagline")}</p>
              <h3 className="font-serif text-3xl text-[#2C4A7C]">{t("projects.speaker.title")}</h3>
              <p className="text-gray-600 leading-relaxed">{t("projects.speaker.description")}</p>
              <a href="/conferencista" className="inline-block bg-[#2C4A7C] text-white text-xs tracking-widest px-6 py-2 w-fit hover:bg-[#4A90E2] transition-colors">
                {t("projects.speaker.cta")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FRASE */}
      <section className="py-20 bg-[#2C4A7C]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-serif text-2xl md:text-3xl text-white leading-relaxed italic">
            &ldquo;{t("quote")}&rdquo;
          </p>
          <div className="w-16 h-[1px] bg-[#9A7B0A] mx-auto mt-8" />
        </div>
      </section>

      {/* TESTIMONIOS */}
      <TestimonialsSection />

      {/* CONTACTO */}
      <section id="contacto" className="py-24 bg-[#FAF7F2]">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#9A7B0A] tracking-[0.3em] text-sm mb-3">{t("contact.label")}</p>
            <h2 className="font-serif text-4xl text-[#2C4A7C] mb-4">{t("contact.title")}</h2>
            <div className="w-12 h-[2px] bg-[#9A7B0A] mx-auto mb-6" />
            <p className="text-gray-600 leading-relaxed">{t("contact.description")}</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-[#FAF7F2] border-t border-[#EADCC6]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-serif text-[#4A90E2] tracking-widest mb-2">NASHELI MAYÉN</p>
          <p className="text-gray-400 text-sm tracking-wider">{t("footer.tagline")}</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://www.instagram.com/nasheli_mayen_essentia" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#9A7B0A] transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg>
            </a>
          </div>
          <p className="text-gray-400 text-xs mt-4">{t("footer.rights")}</p>
        </div>
      </footer>
    </main>
  );
}

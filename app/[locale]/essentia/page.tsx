import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import WaitlistForm from "../../components/WaitlistForm";
import LatestBlogPreview from "../../components/LatestBlogPreview";
import { Link } from "../../../i18n/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Essentia.meta");
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: "ESSENTIA | Nasheli Mayén",
      description: t("description"),
      url: "https://mayenlegacy.com/essentia",
      images: [{ url: "/nasheli-azul.png", width: 800, height: 1000, alt: "ESSENTIA — Nasheli Mayén" }],
    },
  };
}

export default function Essentia() {
  const t = useTranslations("Essentia");
  const pillars = t.raw("pillars.items") as Array<{ number: string; title: string; desc: string }>;
  const forWhoItems = t.raw("forWho.items") as string[];

  return (
    <main className="min-h-screen bg-[#FAF7F2] overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#9A7B0A] tracking-[0.4em] text-xs mb-6">{t("hero.tagline")}</p>
          <div className="relative inline-block mb-8">
            <div className="w-16 h-[1px] bg-[#9A7B0A] mx-auto mb-6" />
            <h1 className="font-serif text-5xl sm:text-7xl md:text-9xl text-[#2C4A7C] tracking-widest leading-none">
              ESSENTIA
            </h1>
            <div className="w-16 h-[1px] bg-[#9A7B0A] mx-auto mt-6" />
          </div>
          <p className="text-gray-500 text-sm tracking-[0.3em] mb-6">{t("hero.subtitle")}</p>
          <span className="inline-block bg-[#EADCC6] text-[#2C4A7C] text-xs tracking-[0.3em] px-6 py-2 mb-10">
            {t("hero.badge")}
          </span>
          <p className="font-serif text-xl md:text-2xl text-[#2C4A7C] italic leading-relaxed mb-6">
            {t("hero.quote")}
          </p>
          <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">{t("hero.description")}</p>
        </div>
      </section>

      {/* LOS 3 PILARES */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#9A7B0A] tracking-[0.3em] text-xs text-center mb-3">{t("pillars.label")}</p>
          <h2 className="font-serif text-3xl text-[#2C4A7C] text-center mb-16">{t("pillars.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((item, i) => (
              <div key={i} className={`flex flex-col items-center text-center gap-4 p-8 border-t-2 ${i % 2 === 0 ? "border-[#D4AF37]" : "border-[#4A90E2]"}`}>
                <p className={`font-serif text-4xl ${i % 2 === 0 ? "text-[#9A7B0A]" : "text-[#4A90E2]"}`}>{item.number}</p>
                <h3 className="font-serif text-2xl text-[#2C4A7C]">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUIÉN ES */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#9A7B0A] tracking-[0.3em] text-xs mb-3">{t("forWho.label")}</p>
          <h2 className="font-serif text-3xl text-[#2C4A7C] mb-12">{t("forWho.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {forWhoItems.map((item, i) => (
              <div key={i} className="flex gap-3 items-start p-4 bg-white border-l-2 border-[#D4AF37]">
                <span className="text-[#9A7B0A] mt-0.5">✦</span>
                <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRASE */}
      <section className="py-16 bg-[#2C4A7C]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="font-serif text-2xl text-white italic leading-relaxed">{t("quote")}</p>
          <p className="text-[#9A7B0A] tracking-widest text-sm mt-6">— NASHELI MAYÉN</p>
        </div>
      </section>

      {/* LISTA DE ESPERA */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-[#9A7B0A] tracking-[0.3em] text-xs mb-3">{t("waitlist.label")}</p>
          <h2 className="font-serif text-3xl text-[#2C4A7C] mb-4">{t("waitlist.title")}</h2>
          <p className="text-gray-500 leading-relaxed mb-10">{t("waitlist.description")}</p>
          <WaitlistForm />
        </div>
      </section>

      <LatestBlogPreview brand="essentia" />

      {/* FOOTER */}
      <footer className="py-10 bg-[#FAF7F2] border-t border-[#EADCC6]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-8 mb-4">
            <Link href="/" className="text-[#4A90E2] text-sm tracking-wider hover:text-[#9A7B0A] transition-colors">
              {t("footer.back")}
            </Link>
            <Link href="/essentia/blog" className="text-[#9A7B0A] text-sm tracking-wider hover:text-[#4A90E2] transition-colors">
              {t("footer.blog")}
            </Link>
          </div>
          <p className="font-serif text-[#4A90E2] tracking-widest mt-6 mb-2">NASHELI MAYÉN</p>
          <div className="flex justify-center gap-4 mt-3">
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

import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import SpeakingForm from "../../components/SpeakingForm";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Speaker.meta");
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: `Nasheli Mayén | ${await getTranslations("Speaker").then(t => t("hero.title"))}`,
      description: t("description"),
      url: "https://mayenlegacy.com/conferencista",
      images: [{ url: "/nasheli-azul2.png", width: 800, height: 1000, alt: "Nasheli Mayén Conferencista" }],
    },
  };
}

export default function Conferencista() {
  const t = useTranslations("Speaker");

  const topics = t.raw("topics.items") as Array<{ title: string; desc: string }>;
  const events = t.raw("events.items") as string[];
  const whyItems = t.raw("why.items") as Array<{ title: string; desc: string }>;

  return (
    <main className="min-h-screen bg-[#FAF7F2] overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-24 px-6 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#9A7B0A] tracking-[0.4em] text-xs mb-6">{t("hero.label")}</p>
          <div className="w-16 h-[1px] bg-[#9A7B0A] mx-auto mb-6" />
          <h1 className="font-serif text-5xl md:text-7xl text-[#2C4A7C] tracking-wide leading-tight mb-6">
            {t("hero.title")}
          </h1>
          <div className="w-16 h-[1px] bg-[#9A7B0A] mx-auto mb-8" />
          <p className="font-serif text-2xl md:text-3xl text-[#2C4A7C] italic leading-relaxed mb-6">
            {t("hero.quote")}
          </p>
          <p className="text-gray-600 leading-relaxed max-w-xl mx-auto text-lg">
            {t("hero.description")}
          </p>
          <a href="#invitar"
            className="inline-block mt-10 bg-[#2C4A7C] text-white px-10 py-4 tracking-widest text-sm hover:bg-[#4A90E2] transition-colors">
            {t("hero.cta")}
          </a>
        </div>
      </section>

      {/* TEMAS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#9A7B0A] tracking-[0.3em] text-xs text-center mb-3">{t("topics.label")}</p>
          <h2 className="font-serif text-4xl text-[#2C4A7C] text-center mb-4">{t("topics.title")}</h2>
          <div className="w-12 h-[2px] bg-[#9A7B0A] mx-auto mb-16" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {topics.map((item, i) => (
              <div key={i} className={`p-8 bg-[#FAF7F2] border-t-4 ${i % 2 === 0 ? "border-[#9A7B0A]" : "border-[#4A90E2]"} flex flex-col gap-3`}>
                <p className="text-3xl">✦</p>
                <h3 className="font-serif text-xl text-[#2C4A7C]">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIPOS DE EVENTOS */}
      <section className="py-24 bg-[#E6F1FA]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#9A7B0A] tracking-[0.3em] text-xs text-center mb-3">{t("events.label")}</p>
          <h2 className="font-serif text-4xl text-[#2C4A7C] text-center mb-4">{t("events.title")}</h2>
          <div className="w-12 h-[2px] bg-[#9A7B0A] mx-auto mb-16" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {events.map((label, i) => (
              <div key={i} className="bg-white p-8 flex flex-col items-center gap-4 border-b-2 border-[#9A7B0A]">
                <span className="text-[#9A7B0A] text-3xl leading-none">✦</span>
                <p className="text-[#2C4A7C] text-sm tracking-widest font-medium uppercase">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ INVITAR */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#9A7B0A] tracking-[0.3em] text-xs text-center mb-3">{t("why.label")}</p>
          <h2 className="font-serif text-4xl text-[#2C4A7C] text-center mb-4">{t("why.title")}</h2>
          <div className="w-12 h-[2px] bg-[#9A7B0A] mx-auto mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyItems.map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white border-l-4 border-[#9A7B0A]">
                <span className="text-[#9A7B0A] text-xl mt-0.5 flex-shrink-0">✦</span>
                <div>
                  <h3 className="font-serif text-lg text-[#2C4A7C] mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIO HIGHLIGHT */}
      <section className="py-20 bg-[#2C4A7C]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-white">
              <p className="text-[#9A7B0A] tracking-widest text-xs mb-4">{t("testimonialLabel")}</p>
              <p className="font-serif text-xl italic leading-relaxed mb-4">
                &ldquo;Estoy convencida de que todo lo que ella toca, lo levanta; todo lo que organiza, florece; y todo lo que dirige, se convierte en bendición.&rdquo;
              </p>
              <p className="text-[#B7D7F2] text-sm tracking-wider">— GABRIELA GARCÍA, Hermana</p>
            </div>
            <div className="text-white">
              <p className="font-serif text-xl italic leading-relaxed mb-4">
                &ldquo;La Sra. Mayen demostró consistentemente ser una líder excepcional: creativa, profesional, organizada, dedicada y con dones de liderazgo que motivan e inspiran a todo el equipo.&rdquo;
              </p>
              <p className="text-[#B7D7F2] text-sm tracking-wider">— YESICA CRUZ-DOBLADO, Trabajadora Social, CA</p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="invitar" className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-[#9A7B0A] tracking-[0.3em] text-xs text-center mb-3">{t("form.label")}</p>
          <h2 className="font-serif text-4xl text-[#2C4A7C] text-center mb-4">{t("form.title")}</h2>
          <div className="w-12 h-[2px] bg-[#9A7B0A] mx-auto mb-4" />
          <p className="text-gray-500 text-center leading-relaxed mb-12">{t("form.description")}</p>
          <SpeakingForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-[#FAF7F2] border-t border-[#EADCC6]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <a href="/" className="text-[#4A90E2] text-sm tracking-wider hover:text-[#9A7B0A] transition-colors">
            {t("footer.back")}
          </a>
          <p className="font-serif text-[#4A90E2] tracking-widest mt-6 mb-2">NASHELI MAYÉN</p>
          <p className="text-gray-400 text-xs">{t("footer.rights")}</p>
        </div>
      </footer>
    </main>
  );
}

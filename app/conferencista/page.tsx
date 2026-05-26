import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import SpeakingForm from "../components/SpeakingForm";

export const metadata: Metadata = {
  title: "Conferencista — Todo comienza dentro de ti",
  description: "Invita a Nasheli Mayén a tu iglesia, retiro o conferencia. Temas de fe, propósito, liderazgo femenino, sanidad del alma y bienestar integral.",
  openGraph: {
    title: "Nasheli Mayén | Conferencista",
    description: "Invita a Nasheli Mayén a tu iglesia, retiro o conferencia de mujeres.",
    url: "https://mayenlegacy.com/conferencista",
    images: [{ url: "/nasheli-azul2.png", width: 800, height: 1000, alt: "Nasheli Mayén Conferencista" }],
  },
};

export default function Conferencista() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-24 px-6 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#9A7B0A] tracking-[0.4em] text-xs mb-6">NASHELI MAYÉN</p>
          <div className="w-16 h-[1px] bg-[#9A7B0A] mx-auto mb-6" />
          <h1 className="font-serif text-5xl md:text-7xl text-[#2C4A7C] tracking-wide leading-tight mb-6">
            Conferencista
          </h1>
          <div className="w-16 h-[1px] bg-[#9A7B0A] mx-auto mb-8" />
          <p className="font-serif text-2xl md:text-3xl text-[#2C4A7C] italic leading-relaxed mb-6">
            "Todo comienza dentro de ti."
          </p>
          <p className="text-gray-600 leading-relaxed max-w-xl mx-auto text-lg">
            Mensajes que transforman desde adentro — para mujeres listas para vivir
            desde su esencia, con propósito, fe y bienestar integral.
          </p>
          <a
            href="#invitar"
            className="inline-block mt-10 bg-[#2C4A7C] text-white px-10 py-4 tracking-widest text-sm hover:bg-[#4A90E2] transition-colors"
          >
            INVÍTAME A TU EVENTO
          </a>
        </div>
      </section>

      {/* TEMAS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#9A7B0A] tracking-[0.3em] text-xs text-center mb-3">LO QUE COMPARTO</p>
          <h2 className="font-serif text-4xl text-[#2C4A7C] text-center mb-4">
            Temas que transforman
          </h2>
          <div className="w-12 h-[2px] bg-[#9A7B0A] mx-auto mb-16" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            <div className="p-8 bg-[#FAF7F2] border-t-4 border-[#9A7B0A] flex flex-col gap-3">
              <p className="text-3xl">✦</p>
              <h3 className="font-serif text-xl text-[#2C4A7C]">Fe y Propósito</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Descubrir que el propósito se activa antes de nacer y que la fe
                es el motor que lo lleva a la acción.
              </p>
            </div>

            <div className="p-8 bg-[#FAF7F2] border-t-4 border-[#4A90E2] flex flex-col gap-3">
              <p className="text-3xl">✦</p>
              <h3 className="font-serif text-xl text-[#2C4A7C]">Sanidad del Alma</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Sanar heridas de origen, romper ciclos generacionales y ordenar
                las emociones desde la verdad de Dios.
              </p>
            </div>

            <div className="p-8 bg-[#FAF7F2] border-t-4 border-[#9A7B0A] flex flex-col gap-3">
              <p className="text-3xl">✦</p>
              <h3 className="font-serif text-xl text-[#2C4A7C]">Liderazgo Femenino</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Despertar el liderazgo que Dios diseñó en cada mujer — con
                identidad, valentía y dirección divina.
              </p>
            </div>

            <div className="p-8 bg-[#FAF7F2] border-t-4 border-[#4A90E2] flex flex-col gap-3">
              <p className="text-3xl">✦</p>
              <h3 className="font-serif text-xl text-[#2C4A7C]">Bienestar Integral</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Vivir en el Orden Divino: Espíritu, Alma y Cuerpo alineados para
                una vida plena y con propósito.
              </p>
            </div>

            <div className="p-8 bg-[#FAF7F2] border-t-4 border-[#9A7B0A] flex flex-col gap-3">
              <p className="text-3xl">✦</p>
              <h3 className="font-serif text-xl text-[#2C4A7C]">Familia y Matrimonio</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Construir un legado familiar sólido desde los fundamentos de la
                fe, el amor y el diseño divino.
              </p>
            </div>

            <div className="p-8 bg-[#FAF7F2] border-t-4 border-[#4A90E2] flex flex-col gap-3">
              <p className="text-3xl">✦</p>
              <h3 className="font-serif text-xl text-[#2C4A7C]">Identidad en Cristo</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Conocer quién eres en Cristo como base para todo lo que haces —
                en el hogar, el ministerio y la vida.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TIPOS DE EVENTOS */}
      <section className="py-24 bg-[#E6F1FA]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#9A7B0A] tracking-[0.3em] text-xs text-center mb-3">DÓNDE PUEDO SERVIR</p>
          <h2 className="font-serif text-4xl text-[#2C4A7C] text-center mb-4">
            Tipos de eventos
          </h2>
          <div className="w-12 h-[2px] bg-[#9A7B0A] mx-auto mb-16" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "⛪", label: "Iglesias" },
              { icon: "🏕️", label: "Retiros de Mujeres" },
              { icon: "🎤", label: "Conferencias" },
              { icon: "👥", label: "Grupos Pequeños" },
              { icon: "🌱", label: "Grupos de Discipulado" },
              { icon: "👨‍👩‍👧", label: "Eventos Familiares" },
              { icon: "🎓", label: "Formación de Líderes" },
              { icon: "💼", label: "Eventos Empresariales" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 flex flex-col items-center gap-3">
                <span className="text-3xl">{item.icon}</span>
                <p className="text-[#2C4A7C] text-sm tracking-wide font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ INVITAR */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#9A7B0A] tracking-[0.3em] text-xs text-center mb-3">POR QUÉ ELEGIRME</p>
          <h2 className="font-serif text-4xl text-[#2C4A7C] text-center mb-4">
            Lo que llevas a tu evento
          </h2>
          <div className="w-12 h-[2px] bg-[#9A7B0A] mx-auto mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Más de 20 años de ministerio",
                desc: "Una trayectoria sólida de servicio, discipulado y liderazgo que respalda cada mensaje."
              },
              {
                title: "Mensajes desde la experiencia real",
                desc: "No hablo de teorías — hablo desde batallas ganadas, heridas sanadas y fe probada en el fuego."
              },
              {
                title: "Formadora de líderes",
                desc: "Tengo un historial comprobado de mujeres que crecieron y hoy lideran a otras. La multiplicación es mi sello."
              },
              {
                title: "Espíritu · Alma · Cuerpo",
                desc: "Mi enfoque es integral. No solo ministro espiritualmente — acompaño a la mujer completa hacia su transformación."
              },
            ].map((item, i) => (
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
              <p className="text-[#9A7B0A] tracking-widest text-xs mb-4">✦ VOCES QUE ME CONOCEN ✦</p>
              <p className="font-serif text-xl italic leading-relaxed mb-4">
                "Estoy convencida de que todo lo que ella toca, lo levanta; todo lo que organiza,
                florece; y todo lo que dirige, se convierte en bendición."
              </p>
              <p className="text-[#B7D7F2] text-sm tracking-wider">— GABRIELA GARCÍA, Hermana</p>
            </div>

            <div className="text-white">
              <p className="font-serif text-xl italic leading-relaxed mb-4">
                "La Sra. Mayen demostró consistentemente ser una líder excepcional:
                creativa, profesional, organizada, dedicada y con dones de liderazgo
                que motivan e inspiran a todo el equipo."
              </p>
              <p className="text-[#B7D7F2] text-sm tracking-wider">— YESICA CRUZ-DOBLADO, Trabajadora Social, CA</p>
            </div>

          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="invitar" className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-[#9A7B0A] tracking-[0.3em] text-xs text-center mb-3">CONTÁCTAME</p>
          <h2 className="font-serif text-4xl text-[#2C4A7C] text-center mb-4">
            Invítame a tu evento
          </h2>
          <div className="w-12 h-[2px] bg-[#9A7B0A] mx-auto mb-4" />
          <p className="text-gray-500 text-center leading-relaxed mb-12">
            Cuéntame sobre tu evento y con gusto conversamos los detalles.
          </p>
          <SpeakingForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-[#FAF7F2] border-t border-[#EADCC6]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <a href="/" className="text-[#4A90E2] text-sm tracking-wider hover:text-[#9A7B0A] transition-colors">
            ← VOLVER AL INICIO
          </a>
          <p className="font-serif text-[#4A90E2] tracking-widest mt-6 mb-2">NASHELI MAYÉN</p>
          <p className="text-gray-400 text-xs">© 2025 Mayen Legacy. Todos los derechos reservados.</p>
        </div>
      </footer>

    </main>
  );
}

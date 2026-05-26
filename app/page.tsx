import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">

      {/* NAVEGACIÓN */}
      <Navbar />

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div className="flex flex-col gap-6">
            <p className="text-[#9A7B0A] tracking-[0.3em] text-sm">ESPÍRITU · ALMA · CUERPO</p>
            <h1 className="font-serif text-5xl md:text-6xl text-[#2C4A7C] leading-tight">
              Nasheli<br />Mayén
            </h1>
            <p className="text-[#4A90E2] text-lg tracking-wide">
              Conferencista · Autora · Fundadora
            </p>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              Acompañando a mujeres a vivir desde su esencia,
              con propósito, fe y bienestar integral.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#proyectos"
                className="bg-[#4A90E2] text-white px-8 py-3 tracking-wider text-sm hover:bg-[#2C4A7C] transition-colors">
                CONOCE MIS PROYECTOS
              </a>
              <a href="#contacto"
                className="border border-[#4A90E2] text-[#4A90E2] px-8 py-3 tracking-wider text-sm hover:bg-[#E6F1FA] transition-colors">
                CONTACTO
              </a>
            </div>
          </div>

          {/* FOTO */}
          <div className="relative flex justify-center">
            <div className="relative w-[380px] h-[520px]">
              <Image
                src="/nasheli-azul2.png"
                alt="Nasheli Mayén"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            {/* Detalle decorativo */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-[#9A7B0A] -z-10" />
          </div>

        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* FOTO */}
          <div className="relative flex justify-center order-2 md:order-1">
            <div className="relative w-[380px] h-[500px]">
              <Image
                src="/nasheli-azul.png"
                alt="Nasheli Mayén"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-[#9A7B0A] -z-10" />
          </div>

          {/* TEXTO */}
          <div className="flex flex-col gap-6 order-1 md:order-2">
            <p className="text-[#9A7B0A] tracking-[0.3em] text-sm">SOBRE MÍ</p>
            <h2 className="font-serif text-4xl text-[#2C4A7C] leading-tight">
              Mi propósito fue<br />activado antes de nacer
            </h2>
            <div className="w-12 h-[2px] bg-[#9A7B0A]" />
            <p className="text-gray-600 leading-relaxed">
              Durante el tiempo de mi gestación, mis padres, jóvenes y confundidos, ya estaban en una clínica tomando una decisión sobre el embarazo de mi mamá, cuando{" "}
              <span className="italic text-[#2C4A7C] font-medium">algo más grande que ellos les dio paz de tener a su tercer hija.</span>
            </p>
            <p className="text-gray-600 leading-relaxed">
              Ese instante cambió mi destino. Lo llamo mi primera batalla espiritual — entre la lógica humana y el diseño divino. Soy evidencia viva de que el propósito se activa antes de nacer. Hoy acompaño a mujeres a descubrir que todo comienza dentro de cada una — en la restauración del espíritu, la sanidad del alma y el cuidado intencional del cuerpo.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Creo profundamente que la verdadera transformación ocurre cuando una mujer vuelve a alinearse con{" "}
              <span className="text-[#2C4A7C] font-medium">el diseño divino para el que fue creada.</span>{" "}
              Esa convicción se convirtió en el corazón de mi propósito.
            </p>

            {/* PILARES */}
            <div className="grid grid-cols-3 gap-4 mt-2 pt-6 border-t border-[#EADCC6]">
              <div className="flex flex-col gap-1">
                <p className="font-serif text-3xl text-[#9A7B0A]">+20</p>
                <p className="text-xs text-gray-400 tracking-wider leading-tight">AÑOS DE<br />MINISTERIO</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-serif text-3xl text-[#9A7B0A]">3</p>
                <p className="text-xs text-gray-400 tracking-wider leading-tight">CONFERENCISTA<br />AUTORA · FUNDADORA</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-serif text-3xl text-[#4A90E2]">∞</p>
                <p className="text-xs text-gray-400 tracking-wider leading-tight">VIDAS<br />IMPACTADAS</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECCIÓN PROYECTOS */}
      <section id="proyectos" className="py-24 bg-[#E6F1FA]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#9A7B0A] tracking-[0.3em] text-sm text-center mb-3">MIS PROYECTOS</p>
          <h2 className="font-serif text-4xl text-[#2C4A7C] text-center mb-16">
            Un ecosistema de transformación
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* ESSENTIA */}
            <div className="bg-[#FAF7F2] p-10 flex flex-col gap-4 border-t-4 border-[#9A7B0A]">
              <p className="text-[#9A7B0A] tracking-[0.3em] text-xs">ESPÍRITU · ALMA · CUERPO</p>
              <h3 className="font-serif text-3xl text-[#2C4A7C]">ESSENTIA</h3>
              <p className="text-gray-600 leading-relaxed">
                Guía práctica para ordenar tu espíritu, alma y cuerpo.
                Un camino de transformación interior en Orden Divino.
              </p>
              <a href="/essentia"
                className="inline-block bg-[#9A7B0A] text-white text-xs tracking-widest px-6 py-2 w-fit hover:bg-[#b8962e] transition-colors">
                CONOCER MÁS
              </a>
            </div>

            {/* ALKALINATION */}
            <div className="bg-[#FAF7F2] p-10 flex flex-col gap-4 border-t-4 border-[#4A90E2]">
              <p className="text-[#4A90E2] tracking-[0.3em] text-xs">AGUA SANA · VIDA SANA</p>
              <h3 className="font-serif text-3xl text-[#2C4A7C]">AlkaliNation USA</h3>
              <p className="text-gray-600 leading-relaxed">
                Soluciones avanzadas de agua para proteger tu hogar,
                apoyar tu salud y elevar tu vida diaria.
              </p>
              <a href="/alkalination"
                className="inline-block bg-[#4A90E2] text-white text-xs tracking-widest px-6 py-2 w-fit hover:bg-[#2C4A7C] transition-colors">
                CONOCER MÁS
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FRASE */}
      <section className="py-20 bg-[#2C4A7C]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-serif text-2xl md:text-3xl text-white leading-relaxed italic">
            "La transformación verdadera comienza dentro."
          </p>
          <div className="w-16 h-[1px] bg-[#9A7B0A] mx-auto mt-8" />
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#9A7B0A] tracking-[0.3em] text-sm mb-3">CONTACTO</p>
          <h2 className="font-serif text-4xl text-[#2C4A7C] mb-6">
            Hablemos
          </h2>
          <div className="w-12 h-[2px] bg-[#9A7B0A] mx-auto mb-8" />
          <p className="text-gray-600 text-lg leading-relaxed mb-12">
            ¿Sientes que es momento de comenzar tu camino de transformación?<br />
            Estoy aquí para acompañarte.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* WHATSAPP */}
            <a
              href="https://wa.me/15622860707"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 tracking-wider text-sm hover:bg-[#1da851] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
              </svg>
              ESCRÍBEME POR WHATSAPP
            </a>

            {/* EMAIL */}
            <a
              href="mailto:emprender.sonar.creer@gmail.com"
              className="flex items-center justify-center gap-3 border border-[#4A90E2] text-[#4A90E2] px-8 py-4 tracking-wider text-sm hover:bg-[#E6F1FA] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
              </svg>
              ENVÍAME UN CORREO
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-[#FAF7F2] border-t border-[#EADCC6]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-serif text-[#4A90E2] tracking-widest mb-2">NASHELI MAYÉN</p>
          <p className="text-gray-400 text-sm tracking-wider">ESPÍRITU · ALMA · CUERPO</p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://www.instagram.com/nasheli_mayen_essentia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#9A7B0A] transition-colors"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg>
            </a>
          </div>
          <p className="text-gray-400 text-xs mt-4">© 2025 Mayen Legacy. Todos los derechos reservados.</p>
        </div>
      </footer>

    </main>
  );
}

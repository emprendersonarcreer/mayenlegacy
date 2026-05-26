import Navbar from "../components/Navbar";
import WaitlistForm from "../components/WaitlistForm";

export default function Essentia() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#9A7B0A] tracking-[0.4em] text-xs mb-6">ESPÍRITU · ALMA · CUERPO</p>

          {/* Título decorativo */}
          <div className="relative inline-block mb-8">
            <div className="w-16 h-[1px] bg-[#9A7B0A] mx-auto mb-6" />
            <h1 className="font-serif text-5xl sm:text-7xl md:text-9xl text-[#2C4A7C] tracking-widest leading-none">
              ESSENTIA
            </h1>
            <div className="w-16 h-[1px] bg-[#9A7B0A] mx-auto mt-6" />
          </div>

          <p className="text-gray-500 text-sm tracking-[0.3em] mb-6">
            ESPÍRITU, ALMA Y CUERPO EN ORDEN DIVINO
          </p>

          <span className="inline-block bg-[#EADCC6] text-[#2C4A7C] text-xs tracking-[0.3em] px-6 py-2 mb-10">
            PRÓXIMAMENTE
          </span>

          <p className="font-serif text-xl md:text-2xl text-[#2C4A7C] italic leading-relaxed mb-6">
            "Vuelve a tu esencia, vive tu propósito."
          </p>

          <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
            Una guía práctica para mujeres que desean ordenar su espíritu, sanar su alma
            y honrar su cuerpo — en el orden que Dios diseñó.
          </p>
        </div>
      </section>

      {/* LOS 3 PILARES */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#9A7B0A] tracking-[0.3em] text-xs text-center mb-3">EL MÉTODO</p>
          <h2 className="font-serif text-3xl text-[#2C4A7C] text-center mb-16">
            El Orden Divino
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="flex flex-col items-center text-center gap-4 p-8 border-t-2 border-[#D4AF37]">
              <p className="font-serif text-4xl text-[#9A7B0A]">I</p>
              <h3 className="font-serif text-2xl text-[#2C4A7C]">Espíritu</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Tu identidad, tu fe, tu dirección. Donde nace el propósito.
                Alinearte con Dios primero lo cambia todo.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-4 p-8 border-t-2 border-[#4A90E2]">
              <p className="font-serif text-4xl text-[#4A90E2]">II</p>
              <h3 className="font-serif text-2xl text-[#2C4A7C]">Alma</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Tu voluntad, emociones e intelecto. Ordenar el alma es sanar
                tu historia para no repetirla.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-4 p-8 border-t-2 border-[#D4AF37]">
              <p className="font-serif text-4xl text-[#9A7B0A]">III</p>
              <h3 className="font-serif text-2xl text-[#2C4A7C]">Cuerpo</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                El instrumento de tu propósito. Honrarlo es mayordomía
                y amor propio en acción.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PARA QUIÉN ES */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#9A7B0A] tracking-[0.3em] text-xs mb-3">ESTE LIBRO ES PARA TI SI...</p>
          <h2 className="font-serif text-3xl text-[#2C4A7C] mb-12">
            ¿Te identificas?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {[
              "Sientes que algo no está bien por dentro aunque todo parece bien por fuera",
              "Quieres sanar heridas de origen y romper ciclos generacionales",
              "Deseas vivir alineada con el propósito de Dios para tu vida",
              "Buscas construir un legado real para tu familia",
              "Quieres amar con un corazón sano y libre",
              "Estás lista para una transformación verdadera — no una fórmula rápida",
            ].map((item, i) => (
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
          <p className="font-serif text-2xl text-white italic leading-relaxed">
            "La transformación verdadera ocurre cuando una mujer vuelve a alinearse
            con el diseño divino para el que fue creada."
          </p>
          <p className="text-[#9A7B0A] tracking-widest text-sm mt-6">— NASHELI MAYÉN</p>
        </div>
      </section>

      {/* LISTA DE ESPERA */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-[#9A7B0A] tracking-[0.3em] text-xs mb-3">SÉ LA PRIMERA EN SABERLO</p>
          <h2 className="font-serif text-3xl text-[#2C4A7C] mb-4">
            ESSENTIA está en camino
          </h2>
          <p className="text-gray-500 leading-relaxed mb-10">
            Déjame tu correo y serás la primera en saber cuándo el libro esté disponible.
            Sin spam — solo noticias que importan.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-[#FAF7F2] border-t border-[#EADCC6]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <a href="/" className="text-[#4A90E2] text-sm tracking-wider hover:text-[#9A7B0A] transition-colors">
            ← VOLVER AL INICIO
          </a>
          <p className="font-serif text-[#4A90E2] tracking-widest mt-6 mb-2">NASHELI MAYÉN</p>
          <div className="flex justify-center gap-4 mt-3">
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

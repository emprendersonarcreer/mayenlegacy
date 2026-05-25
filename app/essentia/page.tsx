import Navbar from "../components/Navbar";
import WaitlistForm from "../components/WaitlistForm";

export default function Essentia() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#D4AF37] tracking-[0.4em] text-xs mb-6">ESPÍRITU · ALMA · CUERPO</p>

          {/* Título decorativo */}
          <div className="relative inline-block mb-8">
            <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mb-6" />
            <h1 className="font-serif text-7xl md:text-9xl text-[#2C4A7C] tracking-widest leading-none">
              ESSENTIA
            </h1>
            <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-6" />
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
          <p className="text-[#D4AF37] tracking-[0.3em] text-xs text-center mb-3">EL MÉTODO</p>
          <h2 className="font-serif text-3xl text-[#2C4A7C] text-center mb-16">
            El Orden Divino
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="flex flex-col items-center text-center gap-4 p-8 border-t-2 border-[#D4AF37]">
              <p className="font-serif text-4xl text-[#D4AF37]">I</p>
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
              <p className="font-serif text-4xl text-[#D4AF37]">III</p>
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
          <p className="text-[#D4AF37] tracking-[0.3em] text-xs mb-3">ESTE LIBRO ES PARA TI SI...</p>
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
                <span className="text-[#D4AF37] mt-0.5">✦</span>
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
          <p className="text-[#D4AF37] tracking-widest text-sm mt-6">— NASHELI MAYÉN</p>
        </div>
      </section>

      {/* LISTA DE ESPERA */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-[#D4AF37] tracking-[0.3em] text-xs mb-3">SÉ LA PRIMERA EN SABERLO</p>
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
          <a href="/" className="text-[#4A90E2] text-sm tracking-wider hover:text-[#D4AF37] transition-colors">
            ← VOLVER AL INICIO
          </a>
          <p className="font-serif text-[#4A90E2] tracking-widest mt-6 mb-2">NASHELI MAYÉN</p>
          <p className="text-gray-400 text-xs">© 2025 Mayen Legacy. Todos los derechos reservados.</p>
        </div>
      </footer>

    </main>
  );
}

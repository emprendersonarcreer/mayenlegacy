import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Alkalination() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-[#E6F1FA]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <p className="text-[#7A3FD0] tracking-[0.3em] text-xs">AGUA SANA · VIDA SANA</p>
            <h1 className="font-serif text-5xl md:text-6xl text-[#2C4A7C] leading-tight">
              AlkaliNation USA
            </h1>
            <p className="text-[#4A90E2] text-lg tracking-wide">
              Soluciones avanzadas de agua para tu hogar y tu salud
            </p>
            <div className="flex flex-col gap-3 text-gray-600 leading-relaxed max-w-md">
              <p>El <span className="font-medium text-[#2C4A7C]">70% de tu cuerpo es agua.</span> Lo que consumes diariamente influye en tu bienestar, energía y calidad de vida.</p>
              <p>Un sistema de purificación no es un lujo. Es una <span className="font-medium text-[#2C4A7C]">decisión consciente</span> para cuidar tu hogar y tu familia.</p>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="#evaluacion"
                className="bg-[#4A90E2] text-white px-8 py-3 tracking-wider text-sm hover:bg-[#2C4A7C] transition-colors">
                EVALUACIÓN GRATUITA
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="relative w-full h-[400px]">
              <Image
                src="/alkalination-hero.jpg"
                alt="AlkaliNation USA — Agua sana para tu familia"
                fill
                className="object-cover object-left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEÑALES DE ALERTA */}
      <section className="py-20 bg-[#2C4A7C]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#B7D7F2] tracking-[0.3em] text-xs text-center mb-3">PRESTA ATENCIÓN</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-4">
            Señales de que el agua de tu hogar podría estar afectando tu familia
          </h2>
          <p className="text-[#B7D7F2] text-center mb-12 max-w-xl mx-auto">
            Muchas familias conviven con estos problemas sin saber que tienen solución.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Sarro y manchas difíciles de limpiar",
              "Olor o sabor a cloro en el agua",
              "Piel reseca o irritada frecuentemente",
              "Cabello seco y sin brillo",
              "Gasto constante en garrafones de agua",
              "Daños en electrodomésticos por agua dura",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start bg-white/10 p-5">
                <span className="text-[#D4AF37] font-bold mt-0.5">✦</span>
                <p className="text-white text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-[#D4AF37] text-center mt-10 font-medium">
            Si te identificas con alguno de estos — podemos ayudarte. 👇
          </p>
        </div>
      </section>

      {/* NUESTRO COMPROMISO */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#7A3FD0] tracking-[0.3em] text-xs mb-3">NUESTRO COMPROMISO</p>
          <h2 className="font-serif text-4xl text-[#2C4A7C] mb-16">Lo que hacemos por ti</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="flex flex-col items-center gap-4 p-8 border border-[#E6F1FA] hover:border-[#4A90E2] transition-colors">
              <div className="w-14 h-14 bg-[#E6F1FA] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#4A90E2" viewBox="0 0 16 16">
                  <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6M6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl text-[#2C4A7C]">Agua Pura</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Ayudamos a reducir elementos no deseados como cloro, sedimentos y metales pesados para brindarte agua más limpia y confiable.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 p-8 border border-[#E6F1FA] hover:border-[#7A3FD0] transition-colors">
              <div className="w-14 h-14 bg-[#f3eeff] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#7A3FD0" viewBox="0 0 16 16">
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl text-[#2C4A7C]">Protección 24/7</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Nuestros sistemas trabajan continuamente para proteger tu hogar y tu familia todo el tiempo.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 p-8 border border-[#E6F1FA] hover:border-[#4A90E2] transition-colors">
              <div className="w-14 h-14 bg-[#E6F1FA] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#4A90E2" viewBox="0 0 16 16">
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl text-[#2C4A7C]">Enfocados en Familia</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Porque el agua que usa tu hogar también forma parte del cuidado de quienes amas.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="py-20 bg-[#E6F1FA]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#7A3FD0] tracking-[0.3em] text-xs text-center mb-3">NUESTROS SISTEMAS</p>
          <h2 className="font-serif text-4xl text-[#2C4A7C] text-center mb-16">Soluciones para cada hogar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white flex flex-col">
              <div className="relative h-64 w-full bg-black">
                <Image src="/producto-alkalina.jpg" alt="Sistema Alcalino" fill className="object-contain p-4" />
              </div>
              <div className="p-8 flex flex-col gap-3 flex-1">
                <p className="text-[#7A3FD0] text-xs tracking-widest">SISTEMA DE COCINA</p>
                <h3 className="font-serif text-2xl text-[#2C4A7C]">Alcalino</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Sistema de filtración alcalina bajo el fregadero. Agua pura, alcalina y deliciosa directo de tu grifo.</p>
                <a href="https://wa.me/15622860707" target="_blank" rel="noopener noreferrer"
                  className="mt-auto inline-block bg-[#4A90E2] text-white text-xs tracking-widest px-6 py-3 text-center hover:bg-[#2C4A7C] transition-colors">
                  QUIERO SABER MÁS
                </a>
              </div>
            </div>

            <div className="bg-white flex flex-col">
              <div className="relative h-64 w-full bg-gray-100">
                <Image src="/producto-puronics-ro.jpg" alt="Sistema Puronics RO" fill className="object-contain p-4" />
              </div>
              <div className="p-8 flex flex-col gap-3 flex-1">
                <p className="text-[#7A3FD0] text-xs tracking-widest">ÓSMOSIS INVERSA</p>
                <h3 className="font-serif text-2xl text-[#2C4A7C]">Puronics RO</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Sistema de ósmosis inversa de alta calidad. Reduce hasta el 99% de impurezas presentes en el agua.</p>
                <a href="https://wa.me/15622860707" target="_blank" rel="noopener noreferrer"
                  className="mt-auto inline-block bg-[#4A90E2] text-white text-xs tracking-widest px-6 py-3 text-center hover:bg-[#2C4A7C] transition-colors">
                  QUIERO SABER MÁS
                </a>
              </div>
            </div>

            <div className="bg-white flex flex-col">
              <div className="relative h-64 w-full bg-gray-100">
                <Image src="/producto-puronics-casa.jpg" alt="Sistema Casa Completa" fill className="object-contain p-4" />
              </div>
              <div className="p-8 flex flex-col gap-3 flex-1">
                <p className="text-[#7A3FD0] text-xs tracking-widest">TODA LA CASA</p>
                <h3 className="font-serif text-2xl text-[#2C4A7C]">Puronics Casa</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Protege toda tu casa — agua suavizada y filtrada en cada grifo, ducha y electrodoméstico.</p>
                <a href="https://wa.me/15622860707" target="_blank" rel="noopener noreferrer"
                  className="mt-auto inline-block bg-[#4A90E2] text-white text-xs tracking-widest px-6 py-3 text-center hover:bg-[#2C4A7C] transition-colors">
                  QUIERO SABER MÁS
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#7A3FD0] tracking-[0.3em] text-xs text-center mb-3">NUESTRA DIFERENCIA</p>
          <h2 className="font-serif text-4xl text-[#2C4A7C] text-center mb-16">¿Por qué elegir AlkaliNation USA?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { titulo: "Instalación Profesional", desc: "Técnicos certificados que instalan correctamente desde el primer día." },
              { titulo: "Cobertura Nacional", desc: "Servicio disponible en todo el país para proteger tu hogar sin importar dónde estés." },
              { titulo: "Sistemas Premium", desc: "Trabajamos solo con marcas de calidad comprobada como Puronics y Alkalina." },
              { titulo: "Soporte Local", desc: "Estamos contigo después de la instalación — mantenimiento y soporte real." },
              { titulo: "Educación al Cliente", desc: "Te explicamos qué tiene tu agua y por qué cada solución es la correcta para ti." },
              { titulo: "Opciones de Financiamiento", desc: "Planes accesibles para que la calidad del agua no sea un obstáculo." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 border-l-4 border-[#4A90E2] bg-[#E6F1FA]">
                <div>
                  <h3 className="font-medium text-[#2C4A7C] mb-1">{item.titulo}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVALUACIÓN GRATUITA */}
      <section id="evaluacion" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#7A3FD0] tracking-[0.3em] text-xs mb-3">SIN COSTO · SIN COMPROMISO</p>
          <h2 className="font-serif text-4xl text-[#2C4A7C] mb-4">Evaluación Gratuita</h2>
          <p className="text-gray-500 mb-14 max-w-xl mx-auto">
            En 4 pasos simples descubrimos qué necesita el agua de tu hogar y te mostramos la mejor solución.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { num: "01", texto: "Agenda tu evaluación gratuita" },
              { num: "02", texto: "Analizamos el agua de tu hogar" },
              { num: "03", texto: "Te mostramos las opciones ideales" },
              { num: "04", texto: "Instalación profesional garantizada" },
            ].map((paso, i) => (
              <div key={i} className="flex flex-col items-center gap-3 border-2 border-[#7A3FD0] p-6">
                <p className="font-serif text-4xl text-[#7A3FD0]">{paso.num}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{paso.texto}</p>
              </div>
            ))}
          </div>
          <a href="https://wa.me/15622860707" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-4 tracking-wider text-sm hover:bg-[#1da851] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
            AGENDA TU EVALUACIÓN GRATUITA
          </a>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-20 bg-[#E6F1FA]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#7A3FD0] tracking-[0.3em] text-xs text-center mb-3">LO QUE DICEN NUESTROS CLIENTES</p>
          <h2 className="font-serif text-4xl text-[#2C4A7C] text-center mb-16">Testimonios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

            <div className="bg-white p-8 flex flex-col gap-4">
              <p className="text-[#D4AF37] text-xl">★★★★★</p>
              <p className="text-gray-600 text-sm leading-relaxed italic">
                "Estamos muy satisfechos con nuestra compra. Desde el primer día notamos el cambio en el sabor del agua y la tranquilidad de saber que nuestra familia consume agua más limpia. La instalación fue rápida y sencilla, y el servicio al cliente superó nuestras expectativas. ¡Recomendados!"
              </p>
              <div className="border-t border-[#E6F1FA] pt-4">
                <p className="font-medium text-[#2C4A7C] text-sm">Sara G.</p>
                <p className="text-gray-400 text-xs">San Diego, CA</p>
              </div>
            </div>

            <div className="bg-white p-8 flex flex-col gap-4">
              <p className="text-[#D4AF37] text-xl">★★★★★</p>
              <p className="text-gray-600 text-sm leading-relaxed italic">
                "Estamos muy satisfechos con el servicio. Desde que instalamos el sistema, ya no necesitamos comprar agua embotellada para nuestro hogar, lo que ha marcado una gran diferencia para nuestra familia. Todo fue explicado con claridad y el servicio fue profesional y confiable. ¡Los recomendamos ampliamente!"
              </p>
              <div className="border-t border-[#E6F1FA] pt-4">
                <p className="font-medium text-[#2C4A7C] text-sm">Dolores C.</p>
                <p className="text-gray-400 text-xs">Long Beach, CA</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[420px]">
            <Image src="/alkalination-team.jpg" alt="Equipo AlkaliNation USA" fill className="object-cover object-center" />
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-[#7A3FD0] tracking-[0.3em] text-xs">NUESTRO EQUIPO</p>
            <h2 className="font-serif text-4xl text-[#2C4A7C] leading-tight">Una familia que<br />cuida tu familia</h2>
            <div className="w-12 h-[2px] bg-[#4A90E2]" />
            <p className="text-gray-600 leading-relaxed">
              German y Nasheli Mayén fundaron AlkaliNation USA con una convicción profunda:
              <span className="text-[#2C4A7C] font-medium"> la salud comienza con lo que consumimos cada día.</span>
            </p>
            <p className="text-gray-600 leading-relaxed">
              Como familia, entendemos la importancia de proteger tu hogar con soluciones reales, confiables y de calidad comprobada. No vendemos productos — compartimos una forma de vivir mejor.
            </p>
            <a href="https://wa.me/15622860707" target="_blank" rel="noopener noreferrer"
              className="inline-block bg-[#7A3FD0] text-white px-8 py-3 tracking-wider text-sm w-fit hover:bg-[#5c2fa0] transition-colors">
              CONTÁCTANOS
            </a>
          </div>
        </div>
      </section>

      {/* LOGOS COLABORADORES — PENDIENTE */}
      {/* Sección para logos de empresas colaboradoras — agregar cuando estén listos */}

      {/* FRASE */}
      <section className="py-16 bg-[#2C4A7C]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-serif text-2xl md:text-3xl text-white italic leading-relaxed">"Better water, better life."</p>
          <div className="w-16 h-[1px] bg-[#7A3FD0] mx-auto mt-8" />
          <p className="text-[#B7D7F2] tracking-widest text-sm mt-6">ALKALINATION USA</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-white border-t border-[#E6F1FA]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <a href="/" className="text-[#4A90E2] text-sm tracking-wider hover:text-[#7A3FD0] transition-colors">
            ← VOLVER AL INICIO
          </a>
          <p className="font-serif text-[#4A90E2] tracking-widest mt-6 mb-1">ALKALINATION USA</p>
          <div className="flex justify-center gap-4 mt-3 mb-3">
            <a
              href="https://www.instagram.com/alkalinationusa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#7A3FD0] transition-colors"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61574262314208"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#7A3FD0] transition-colors"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
              </svg>
            </a>
            <a
              href="mailto:alkalinationusa@gmail.com"
              className="text-gray-400 hover:text-[#7A3FD0] transition-colors"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
              </svg>
            </a>
          </div>
          <p className="text-gray-400 text-xs mb-3">Una empresa operando bajo Nubia Allkaline Water</p>
          <p className="text-gray-400 text-xs">© 2025 Mayen Legacy. Todos los derechos reservados.</p>
        </div>
      </footer>

    </main>
  );
}

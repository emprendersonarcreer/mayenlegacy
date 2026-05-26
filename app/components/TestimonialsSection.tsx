"use client";

import { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  city: string;
  preview: string;
  full: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ines Campos",
    role: "Discípula · 30 años de amistad",
    city: "San Bernardino, CA",
    preview: "Conozco a la hermana Nasheli Mayén de hace 30 años, ella ha sido de bendición para mi vida en la enseñanza de la palabra de Dios.",
    full: "Conozco a la hermana Nasheli Mayén de hace 30 años, ella ha sido de bendición para mi vida en la enseñanza de la palabra de Dios. Fue mi mentora, reconozco su liderazgo. La hnita Nasheli Mayen es una gran sierva de Dios.",
  },
  {
    id: 2,
    name: "Mary Alejo",
    role: "Discípula",
    city: "Los Ángeles, CA",
    preview: "Quiero expresar mi más profundo agradecimiento a una gran líder que Dios puso en mi camino en un momento decisivo.",
    full: "Quiero expresar mi más profundo agradecimiento a una gran líder, Nasheli, que Dios puso en mi camino en un momento decisivo. Gracias por tu dedicación, tu amor y tu paciencia al acompañarme en mis primeros pasos en la fe. Tu ejemplo, tu firmeza y la manera en que me afirmaste en la vida cristiana marcaron mi corazón para siempre.\n\nA través de tu guía entendí que el seguimiento no es solo enseñar, sino también amar, creer y caminar con tu ejemplo. Tu vida me bendijo de manera grande. Estuviste siempre a mi lado hasta verme crecer. Gracias por sembrar en mí identidad, convicción y propósito. Tu vida ha sido un faro que Dios usó para mostrarme su gracia, y siempre estaré agradecida por cada palabra, cada oración y cada consejo que me diste. Siempre fuiste un líder dedicada y, como ser humano, una gran amiga y compañera de milicia.\n\nQue el Señor te siga fortaleciendo, usando y recompensando todo lo que has hecho por mí y por tantos otros. Eres una bendición, y doy gracias a Dios por tu vida. Amén.",
  },
  {
    id: 3,
    name: "Yolanda Llamas",
    role: "Amiga · 30 años",
    city: "Ministerios Mundiales Ebenezer",
    preview: "Nasheli Mayen es una mujer sabia y prudente, con un corazón para servir a Dios y a su prójimo.",
    full: "Hola, mi nombre es Yolanda Llamas. Quiero dar mi testimonio acerca de Nasheli Mayen. Hace 30 años comencé a congregarme en la iglesia Ministerios Mundiales Ebenezer, y ahí la conocí. Era una joven muy entusiasta y le gustaba trabajar en equipo con los jóvenes.\n\nTambién estuve cerca de 3 años en grupos de Damas, donde la conocí ya como esposa y madre, y pude ver en ella una mujer que le interesa ver familias en bienestar. Es íntegra, tiene una fe genuina en Dios, es compasiva cuando alguien está en alguna necesidad. Tiene un matrimonio ejemplar — ella y su esposo Germán Leonel Mayen han sido un ejemplo para muchos matrimonios y familias, trabajando para ayudar a la comunidad dando charlas, exponiendo temas, ayudando con los niños, en consejería.\n\nNasheli Mayen es una mujer sabia y prudente, con un corazón para servir a Dios y a su prójimo. Me es un privilegio el conocerla. Tanto ella como su esposo han sido de mucha bendición a nuestras familias. Nos sentimos honrados de ser sus amigos.",
  },
  {
    id: 4,
    name: "Remi Gonzalez",
    role: "Coordinadora de Rescate Extremo",
    city: "",
    preview: "She has the gift to see people's potential. She is always willing to help others to reach their potential. I am living proof of that.",
    full: "My name is Remi Gonzalez and I've had the privilege to know Nasheli Mayen for more than 15 years. She is a natural leader. Many good things I can tell about her and testify about, but I will mention the ones that have marked me the most.\n\n1. She has the gift to see people's potential.\n2. She is always willing to help others to reach their potential. I am living proof of that.\n3. She does not hide her weaknesses; on the contrary, she works to turn them into strengths — and she is able to do all of these because she knows very well who she is in Christ.\n\nThank you Nasheli for all your help and support.\n\nWith Gratitude,\nRemi Gonzalez\nCoordinadora de Rescate Extremo",
  },
  {
    id: 5,
    name: "Gabriela García",
    role: "Hermana",
    city: "",
    preview: "Estoy convencida de que todo lo que ella toca, lo levanta; todo lo que organiza, florece; y todo lo que dirige, se convierte en bendición.",
    full: "Quiero compartir el profundo impacto que la vida y el ministerio de mi hermana Nasheli han tenido en mí. Ella es una mujer llena de sabiduría y de amor, no solo para su familia, sino también por todos aquellos que tienen la dicha de conocerla. Desde joven ha servido fielmente a Dios, manteniendo un testimonio íntegro y una pasión genuina por el llamado que Él puso en su vida.\n\nEsa fortaleza y liderazgo se hicieron más evidentes cuando nuestro padre enfermó gravemente. Desde acá, en Estados Unidos, tuvimos que programar todos sus cuidados mientras él permanecía en México, y fue entonces cuando ella se levantó con una fortaleza, una entereza y una destreza que jamás olvidaré. Se hizo cargo de absolutamente todo: los cuidados de 24 horas, consiguió enfermeros, organizó horarios y sueldos, supervisó medicamentos y tratamientos con una eficiencia admirable, aun desde la distancia.\n\nSin ella, sinceramente, no creo que mis hermanos y yo hubiéramos podido sacar adelante a nuestro papá ni darle las comodidades y cuidados dignos que pudimos ofrecerle. Fue un reto enorme para todos, pero ella fue la más madura, la más fuerte. Cuando no sabía algo, lo aprendía; cuando surgía un obstáculo, lo enfrentaba y resolvía. Se convirtió en nuestra columna, en la mente que organizó y en el motor que nos impulsó.\n\nHoy, al ver su emprendimiento crecer, reconozco que cada parte de este proyecto refleja quién es ella. Su disciplina, sensibilidad, liderazgo, fe y su manera sabia de cuidar y restaurar se ven en todo lo que hace. Estoy convencida de que todo lo que ella toca, lo levanta; todo lo que organiza, florece; y todo lo que dirige, se convierte en bendición.",
  },
  {
    id: 6,
    name: "Yeny Martinez",
    role: "Compañera de trabajo · 7 años",
    city: "",
    preview: "Nashely es una superwoman: fuerte, sensible, capaz y profundamente humana.",
    full: "Me complace recomendar ampliamente a Nasheli Mayen, con quien tuve el honor de trabajar durante 7 años. Durante el tiempo que compartimos en el ámbito laboral, aprendí muchísimo de ella. Es una profesional con la que es muy fácil hacer equipo gracias a su carácter positivo, su entusiasmo y su compromiso, cualidades que impulsan y motivan a quienes la rodean.\n\nNashely se distingue por ser una persona ordenada, íntegra y profundamente justa. Si tuviera que elegir una palabra que la describa, sería precisamente justa. Siempre vela por el bienestar de sus compañeros de trabajo. Cuando surgía algún problema, acudíamos a ella porque sabíamos que nos escucharía con atención y haría lo posible por ayudarnos a encontrar una solución.\n\nCon el tiempo, además de ser compañeras, desarrollamos una amistad especial: compartimos momentos de oración, conversaciones significativas y consejos que fortalecieron nuestra relación.\n\nNashely es, sin duda, una superwoman: fuerte, sensible, capaz y profundamente humana. La recomiendo con plena confianza, convencida de que será una gran aportación en cualquier entorno donde se desempeñe.",
  },
  {
    id: 7,
    name: "Yesica Cruz-Doblado",
    role: "Trabajadora Social, Estado de California",
    city: "Los Ángeles, CA",
    preview: "La Sra. Mayen demostró consistentemente ser una líder excepcional: creativa, profesional, organizada, dedicada.",
    full: "Por medio de la presente, deseo recomendar ampliamente a la Sra. Nasheli Mayen, con quien tuve el privilegio de trabajar durante siete años en el Ministerio de Niños de Ministerios Mundiales Ebenezer. Durante este tiempo me desempeñé como maestra voluntaria y la Sra. Mayen fungió como Directora del Ministerio.\n\nBajo su liderazgo llevamos a cabo numerosos proyectos y eventos para el crecimiento espiritual de los niños, incluyendo Escuelas Bíblicas de Vacaciones y diversas actividades de evangelización. La Sra. Mayen demostró consistentemente ser una líder excepcional: creativa, profesional, organizada, dedicada y con dones de liderazgo que motivan e inspiran a todo el equipo de voluntarias. Personalmente, crecí enormemente en mi servicio y formación ministerial gracias a su guía, al igual que muchas de mis compañeras.\n\nEstoy convencida de que la Sra. Mayen puede sobresalir con éxito en cualquier proyecto que emprenda, aportando siempre excelencia, compromiso y visión.",
  },
  {
    id: 8,
    name: "Ana Sotelo",
    role: "Autora del libro Flowi",
    city: "",
    preview: "Su esencia, su orden y su paz dejaron una huella en mi vida. Es una mujer que se deja guiar por Dios, que camina con propósito y dirección.",
    full: "Conocí a Nasheli hace 4 años en un proyecto en el que Dios nos permitió trabajar juntas, y puedo decir que desde el momento en que la conocí marcó mi vida. Pude ver en ella un corazón humilde, una mujer de fe, una mujer bien estructurada, una mujer con visión y con metas muy claras. Su esencia, su orden y su paz dejaron una huella en mi vida.\n\nEs una mujer que se deja guiar por Dios, que camina con propósito y dirección. Eso, su manera de conducirse, habla por sí sola. Aun sin decir palabras, su vida impacta. Su testimonio, su disciplina, su forma de servir reflejan una fe que no se queda en el creer, sino que va a la acción — una fe con obras, una fe viva, una fe auténtica.\n\nLa respeto, la honro profundamente y agradezco a Dios por permitirnos caminar juntas y ser testigo de lo que Él está haciendo a través de su vida.",
  },
  {
    id: 9,
    name: "Verónica Cruz",
    role: "Diseñadora de Moda · Fundadora de \"Amo La Cruz\"",
    city: "",
    preview: "Lo que más puedo destacar de ella es su integridad — una integridad inquebrantable. Es el tipo de persona en quien se puede confiar plenamente.",
    full: "Hola, mi nombre es Verónica Cruz y quiero dar testimonio del carácter de mi amiga Nasheli, a quien conozco desde hace más de diez años.\n\nLo que más puedo destacar de ella es su integridad — una integridad inquebrantable. En el tiempo que la he conocido hemos compartido juntas tanto en el ámbito espiritual como en el secular, en distintos eventos y oportunidades. Es una persona que actúa bajo principios éticos muy claros, y eso es algo que me gusta mucho de ella.\n\nSiempre ha demostrado ser una mujer honesta, transparente y sumamente responsable con sus compromisos. He sido testigo de cómo maneja distintas situaciones, y en cada una de ellas su rectitud se hace evidente, siempre anteponiendo la honestidad.\n\nElla es el tipo de persona en quien se puede confiar plenamente, sabiendo que es una mujer de palabra, y que su palabra tiene valor. Es una mujer íntegra, auténtica — una mujer que se cree lo que vive.\n\nEstoy muy contenta de ser su amiga y de ser parte de su vida.",
  },
  {
    id: 10,
    name: "Paola Ajanel",
    role: "Hermana Mayor · 47 años de conocerla",
    city: "",
    preview: "Nasheli Mayén es una conquistadora. Tiene cuarenta y siete años de conocerla y puedo decir que es la misma persona en cualquier circunstancia.",
    full: "Mi nombre es Paola Ajanel. Tengo cuarenta y siete años de conocer a Nasheli; yo soy la hermana mayor. Ella y yo siempre hemos tenido una conexión muy linda desde chiquitas — siempre hemos sido muy unidas, y con el pasar de los años esa unidad se ha convertido en respeto, admiración y apoyo mutuo.\n\nDesde muy pequeña, ella fue una niña muy activa. A través de los años, Dios la ha ido moldeando, desarrollando y sacando a flote todos sus talentos. Hoy es una persona que no solo ha conquistado muchas cosas en su vida privada, sino que también ha ayudado a muchas personas a conquistar en sus propias vidas.\n\nNasheli Mayén es profundamente creativa. Desde que era muy niña, estaba constantemente creando estrategias, planes e ideas — y no solo las creaba, también las ejecutaba. Puedo testificar que en un 97 o 98 por ciento de las veces, sus estrategias alcanzan el éxito.\n\nEs una mujer soñadora, atrevida y valiente. Nasheli ha conquistado aquello a lo que se atreve porque tiene fuerza de voluntad, valor y, sobre todo, siempre busca la dirección de Dios antes de emprender.\n\nNasheli Mayén es una persona genuina. Tiene un solo rostro — es la misma persona con cualquiera, en cualquier circunstancia y en cualquier lugar. Valora profundamente la verdad. Dios le ha dado sabiduría, discernimiento y dones extraordinarios. Sus convicciones son fuertes, sanas y profundas. No solo es líder, sino que sabe formar líderes. Hay una clara bendición de multiplicación en su vida.\n\nPodría seguir hablando muchas cosas más sobre ella, porque tengo cuarenta y siete años de conocerla.",
  },
  {
    id: 11,
    name: "Agustín Lubiano",
    role: "Colega en Asociación Evangelística",
    city: "",
    preview: "She is reliable, consistent, and follows through on what she starts. I saw her build a charity association from the ground up.",
    full: "My name is Agustin Lubiano, and today I want to take a moment to talk about Nasheli Mayen. Nasheli and I worked for the same evangelistic association for some time. The association was focused on charities and helping the poor — and that is why I believe it was the perfect place for Nasheli to work.\n\nShe is friendly, kind, and has a good sense of humor. But her personality does not take anything away from her professional qualities. I had the opportunity to collaborate with her on different projects, and I can say that I saw firsthand how seriously she takes her work and how much steady effort she puts into everything she does.\n\nShe is reliable, consistent, and follows through on what she starts. She works hard, stays focused, and handles challenges effectively. I was very impressed with her work.\n\nI saw her build a charity association from the ground up — and that was a huge challenge and definitely not an easy project. I was there, and I saw how she made the magic happen.\n\nIn my opinion, Nasheli is humble and perhaps does not fully realize her own potential. I believe that with the right encouragement and guidance, she can do much more. I wish her the very best.",
  },
  {
    id: 12,
    name: "Aracely Maravilla",
    role: "Compañera de Ministerio",
    city: "",
    preview: "Es una persona en quien he confiado ciegamente en tiempos de dificultad. Siempre me dio un consejo. Nunca escuché que mi vida fuera comentada con otros.",
    full: "Mi nombre es Aracely Maravilla. He tenido el privilegio de conocer a Nasheli ya por algunos años, y también el privilegio de trabajar con ella en el Ministerio de los Niños.\n\nNasheli ha sido un gran ejemplo en mi vida. Es una persona que se entrega por completo a todo lo que se propone. Eso lo aprendí de ella cuando trabajábamos juntas — ella se entregaba, ella daba todo.\n\nEs una persona en quien he confiado ciegamente en tiempos de dificultad y en tiempos de prueba en mi vida. Fue una persona a la que pude acercarme, en quien pude confiar y que siempre me dio un consejo — no solo a mí, sino también a mis hijas.\n\nEs una persona confiable. Cuando yo le contaba mi situación o algo por lo que estaba pasando, ella siempre me escuchó. Nunca escuché que mi vida fuera comentada con otros. Para mí, eso habla mucho del carácter de una persona y deja ver quién es realmente.\n\nPara mí fue un honor y un placer haber trabajado con ella. Siempre estuvo presente, siempre me llamaba, me texteaba, preguntándome cómo seguía. Es una gran mujer. Cuando se dedica a algo, lo hace al máximo, hasta terminarlo.",
  },
];

export default function TestimonialsSection() {
  const [selected, setSelected] = useState<Testimonial | null>(null);

  return (
    <section id="testimonios" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[#9A7B0A] tracking-[0.3em] text-sm text-center mb-3">VOCES QUE ME CONOCEN</p>
        <h2 className="font-serif text-4xl text-[#2C4A7C] text-center mb-4">
          Lo que dicen de mí
        </h2>
        <div className="w-12 h-[2px] bg-[#9A7B0A] mx-auto mb-16" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelected(t)}
              className="text-left bg-[#FAF7F2] border-t-4 border-[#9A7B0A] p-6 flex flex-col gap-3 hover:shadow-md transition-shadow group"
            >
              <div>
                <p className="font-serif text-lg text-[#2C4A7C] font-medium">{t.name}</p>
                <p className="text-xs text-[#9A7B0A] tracking-wider mt-0.5">{t.role}</p>
                {t.city && <p className="text-xs text-gray-400 mt-0.5">{t.city}</p>}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-1">
                "{t.preview}"
              </p>
              <span className="text-[#4A90E2] text-xs tracking-wider group-hover:text-[#2C4A7C] transition-colors">
                LEER TESTIMONIO COMPLETO →
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cerrar */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#2C4A7C] transition-colors text-2xl leading-none"
              aria-label="Cerrar"
            >
              ×
            </button>

            {/* Encabezado */}
            <div className="mb-6 pb-4 border-b border-[#EADCC6]">
              <p className="font-serif text-2xl text-[#2C4A7C]">{selected.name}</p>
              <p className="text-sm text-[#9A7B0A] tracking-wider mt-1">{selected.role}</p>
              {selected.city && <p className="text-sm text-gray-400 mt-0.5">{selected.city}</p>}
            </div>

            {/* Testimonio */}
            <div className="text-gray-600 leading-relaxed text-sm space-y-4">
              {selected.full.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-[#EADCC6] text-center">
              <p className="text-[#9A7B0A] text-xs tracking-widest">✦ NASHELI MAYÉN ✦</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

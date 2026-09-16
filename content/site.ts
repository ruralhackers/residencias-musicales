export const site = {
  name: "Residencias Musicales",
  org: "Rural Hackers",
  email: "hello@ruralhackers.com",
  phone: "+34617798499",
  phoneDisplay: "617 798 499",
  url: "https://ruralhackers.com",
  anceuUrl: "https://anceu.com",
  pegadasUrl: "https://linktr.ee/pegadas.do.recordo",
  hashtags: ["#ResidenciasMusicales", "#Anceu", "#RuralHackers"],
  description:
    "Residencias musicales para crear desde el rural, dialogar con la tradición y abrir nuevas canciones.",
} as const;

export const nav = [
  { href: "#que-es", label: "La residencia" },
  { href: "#lab", label: "El espacio" },
  { href: "#metodo", label: "Casas do pobo" },
  { href: "#muestra", label: "El entorno" },
  { href: "#proyectos-musicales", label: "Experiencias" },
  { href: "#artistas", label: "Artistas" },
  { href: "#experiencia", label: "Trayectoria" },
  { href: "#convocatoria", label: "Contacto" },
] as const;

export const hero = {
  brand: "RESIDENCIAS\nMUSICALES",
  eyebrow: "Anceu · Galicia · Rural Hackers",
  headline: "Crear música donde la tradición se comparte.",
  support:
    "Tiempo para tu banda, espacio para ensayar y una aldea de la que formar parte. Una residencia en el rural gallego para desarrollar tu proyecto y encontrarte con quienes mantienen la música en la vida cotidiana.",
  primaryCta: { href: "#convocatoria", label: "Hablemos de música" },
  secondaryCta: { href: "#que-es", label: "Conoce la residencia" },
  images: {
    large: {
      src: "/images/casa-do-pobo-portada.jpeg",
      alt: "Vecinos jugando a las cartas al aire libre en la casa do pobo",
      width: 1178,
      height: 1570,
    },
    small: {
      src: "/images/coliving-casa.jpg",
      alt: "Anceu Coliving, casa de piedra, patio y hórreo",
      width: 1024,
      height: 612,
    },
  },
  strip: ["Música de raíz", "Galicia rural", "Tradición en movimiento"],
} as const;

export const marquee =
  "RESIDENCIAS MUSICALES ● MÚSICA DE RAÍZ ● ANCEU ● FORNELOS ● GARGAMALA ● A ÍNSUA ● TRADICIÓN EN MOVIMIENTO ● ";

export const about = {
  id: "que-es",
  title: "Darle tiempo a lo que llevas dentro",
  lead:
    "Reunir a toda la banda ya cuesta. Encontrar varios días para trabajar juntos, todavía más. Entre conciertos, trabajos y obligaciones, muchas ideas se quedan esperando.",
  body:
    "Queremos hacerles sitio. Que podáis dedicar atención a una canción, probar un arreglo y volver a escucharlo al día siguiente. Con tiempo para avanzar y también para cambiar de opinión. La creación convive con la vida de la aldea y con un territorio en el que la música tradicional sigue siendo una forma de encontrarse.",
  pillars: [
    { title: "Tiempo para probar", text: "Componer, ensayar, cambiar de dirección y volver a empezar. Sin la prisa de tener que enseñar algo antes de que esté listo." },
    { title: "Una casa a la que sumarte", text: "Llegar y tener con quién cenar. Compartir lo que estás haciendo con personas que trabajan en otros proyectos. Alargar una conversación, salir a caminar juntos y encontrar nuevas referencias en la vida cotidiana." },
    { title: "Aprender de quienes siguen tocando", text: "Hay repertorios que pasan de mano en mano y maneras de tocar que se aprenden estando juntos. Queremos abrir encuentros entre quienes llevan décadas sosteniendo esa música y quienes buscan nuevas formas de interpretarla. Escuchar, compartir lo que cada cual sabe y dejar espacio a lo que pueda surgir." },
  ],
} as const;

export const lab = {
  id: "lab",
  title: "Instalarse, trabajar y hacer vida juntos",
  lead:
    "Anceu es la base de la residencia: un coliving rural con habitaciones con baño propio, espacios de trabajo y una cocina que invita a quedarse conversando. Cenas compartidas, patio, piscina y caminos por el bosque forman parte del día a día. Un lugar donde concentrarse en el proyecto y hacer vida con otras personas.",
  facts: [
    { label: "Conexión", value: "1 Gbps" },
    { label: "Trabajo", value: "Coworking" },
    { label: "Vida común", value: "Casa" },
    { label: "Alrededor", value: "Bosque" },
  ],
  modules: [
    { title: "Ensayar", tag: "El proyecto", text: "Un lugar para bajar el ritmo, tocar, grabar ideas y volver sobre ellas todas las veces que haga falta.", image: { src: "/images/residencia-taller.jpg", alt: "Espacio de trabajo en una residencia artística en Anceu", width: 1600, height: 1067 } },
    { title: "Compartir", tag: "La casa", text: "La convivencia abre conversaciones, referencias y escuchas que también forman parte de la creación.", image: { src: "/images/cena.jpg", alt: "Mesa compartida en Anceu", width: 2000, height: 1333 } },
    { title: "Salir", tag: "El entorno", text: "Bosque, paseos y aldeas cerca para tomar aire, volver con otra perspectiva y dejar que el lugar entre en la música.", image: { src: "/images/sair-a-contorna.jpg", alt: "Grupo de personas en el bosque de Anceu", width: 1942, height: 1570 } },
  ],
} as const;

export const method = {
  id: "metodo",
  title: "Mantener abierta la casa del pueblo",
  lead:
    "Las casas do pobo guardan una forma de hacer las cosas juntos: un espacio compartido, decisiones colectivas y personas que se responsabilizan de que siga abierto. La música y la cultura son las que le dan vida.",
  items: [
    { title: "Un trabajo que continúa", text: "Desde Rural Hackers hemos promovido la recuperación y dinamización cultural de las casas de Anceu y Ventín. Las residencias continúan ese trabajo junto a las asociaciones y la vecindad, incorporando encuentros musicales a la vida de estos espacios.", image: { src: "/images/casa-do-pobo-comunidade-1.jpg", alt: "Vecindad reunida ante un escenario con un mural de colores", width: 2356, height: 1570 } },
    { title: "Continuar la tradición", text: "Las fotos y recuerdos de estas casas hablan de una cultura que sigue viva porque la gente la comparte. Queremos que la música de hoy se sume a esa historia: escuchar lo que llegó antes, ponerlo en común y crear nuevos momentos para la aldea.", image: { src: "/images/casa-do-pobo-memoria.png", alt: "Arquivo fotográfico da memoria e tradición da aldea", width: 1184, height: 855 } },
  ],
} as const;

export const showcase = {
  id: "muestra",
  title: "La tradición sigue en manos de la gente",
  lead:
    "En Anceu, Fornelos de Montes, Gargamala y A Ínsua hay grupos de baile, bandas de música tradicional y personas que se reúnen para seguir aprendiendo y transmitiendo lo que saben. Somos parte de esa vida compartida: recuperamos espacios y trabajamos con la vecindad para que la cultura siga teniendo lugar en las aldeas. La residencia nace de esas relaciones.",
  image: { src: "/images/comunidad-mural.jpg", alt: "Comunidad y residencia artística en Anceu", width: 1600, height: 1067 },
} as const;

export const scholarships = {
  id: "experiencia",
  title: "Sabemos lo que supone acoger un proceso creativo",
  lead:
    "Rural Hackers ha acogido en Anceu dos ediciones de residencias artísticas de Culture Moves Europe, el programa europeo de movilidad cultural impulsado por la Unión Europea y Goethe-Institut.",
  body:
    "Cuidar la llegada, acompañar el trabajo y conectar a quienes crean con la vida local forma parte de lo que ya hacemos. El Ministerio de Cultura, la Comisión Europea y Goethe-Institut ya han respaldado residencias anteriores de Rural Hackers. Esta experiencia es el punto de partida de las residencias musicales.",
  fact: "2 ediciones · residencias en Anceu · Culture Moves Europe",
  image: { src: "/images/residentes.jpg", alt: "Residentes en Anceu Coliving", width: 2000, height: 1333 },
} as const;

export const confianza = {
  id: "artistas",
  title: "La música ya nos ha unido",
  lead:
    "A través de Fixar y de las residencias Ensaia hemos acompañado proyectos de artistas vinculados a la creación contemporánea desde Galicia. Este trabajo forma parte de una trayectoria más amplia acompañando procesos culturales desde el rural.",
  people: [
    { name: "Caamaño&Ameixeiras", role: "Música de raíz · Galicia", image: "/images/artistas/caamano-ameixeiras.jpg" },
    { name: "Catuxa Salom", role: "Folk electrónica · Galicia", image: "/images/artistas/catuxa-salom.jpg" },
    { name: "Yas de Luaces", role: "Música e investigación · Mazaricos", image: "/images/artistas/yas-de-luaces.jpg" },
    { name: "Zeltia Irevire", role: "Folk tribal · Compostela", image: "/images/artistas/zeltia-irevire.jpg" },
  ],
  note: "Una selección de proyectos acompañados a través de Fixar.",
} as const;

export const who = {
  id: "quien",
  title: "Rural Hackers",
  lead:
    "Creamos proyectos de cultura, tecnología e innovación comunitaria desde Anceu. Las residencias musicales continúan ese trabajo: hacer del rural un lugar para crear, trabajar y encontrarse.",
  image: { src: "/images/coliving-comunidad.jpg", alt: "Comunidad en Anceu Coliving", width: 2000, height: 1333 },
  links: [
    { href: "https://ruralhackers.com", label: "Rural Hackers" },
    { href: "https://anceu.com", label: "Anceu Coliving" },
  ],
} as const;

export const timeline = {
  id: "calendario",
  title: "Cómo funciona",
  phases: [
    { when: "01", title: "Llegar", text: "Instalarse en Anceu, conocer la casa y dar espacio al proyecto." },
    { when: "02", title: "Crear", text: "Componer, ensayar y compartir el proceso con otros residentes." },
    { when: "03", title: "Encontrarse", text: "Abrir una escucha, un ensayo o un concierto con las aldeas del entorno." },
    { when: "04", title: "Continuar", text: "Volver con material, vínculos y un proceso que puede seguir creciendo." },
  ],
} as const;

export const apply = {
  id: "convocatoria",
  title: "Hagamos que suene",
  lead:
    "Estamos dando forma al programa. Buscamos artistas y entidades que quieran hacerlo posible.",
  audiences: [
    {
      title: "Tengo un proyecto musical",
      text: "Cuéntanos qué estás creando y qué necesitas para darle el siguiente paso.",
      label: "Hablar de mi proyecto",
      href: "mailto:hello@ruralhackers.com?subject=Mi%20proyecto%20musical%20%C2%B7%20Residencias%20Anceu",
    },
    {
      title: "Queremos colaborar",
      text: "Queremos financiar este proyecto de Rural Hackers.",
      label: "Explorar una colaboración",
      href: "mailto:hello@ruralhackers.com?subject=Colaboraci%C3%B3n%20%C2%B7%20Residencias%20Anceu",
    },
  ],
  note: "Todavía no hay una convocatoria con fechas, duración, plazas y condiciones económicas publicadas. Este primer contacto no es una solicitud de plaza.",
} as const;

export const faq = {
  id: "preguntas",
  title: "Preguntas frecuentes",
  items: [
    { question: "¿A quién se dirige?", answer: "A músicos, músicas y proyectos de creación sonora que quieran dedicar tiempo a su trabajo y compartir parte del proceso con otras personas. Puedes escribirnos tanto si trabajas en solitario como si formas parte de un grupo." },
    { question: "¿Dónde sucede?", answer: "La base de la propuesta es Anceu Coliving, en Ponte Caldelas, Galicia. Queremos conectar las residencias con casas do pobo y asociaciones de las aldeas del entorno, acordando cada actividad con quienes cuidan esos espacios." },
    { question: "¿Hay una convocatoria abierta?", answer: "Estamos dando forma al programa. Todavía no hay una convocatoria con fechas, duración, plazas y condiciones económicas publicadas. Si te interesa, escríbenos y cuéntanos tu proyecto; este primer contacto no es una solicitud de plaza." },
  ],
} as const;

export const partners = {
  title: "Impulsa",
  items: [
    { name: "Rural Hackers", role: "Impulso y coordinación" },
    { name: "Anceu Coliving", role: "Espacio de residencia", href: "https://anceu.com" },
  ],
} as const;

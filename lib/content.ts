export interface Project {
  slug: string
  title: string
  excerpt: string
  content: string
  image?: string
  category?: string
  materials?: string[]
  date?: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
}

// Simulated markdown content parsing
// In a real app, you'd use a library like gray-matter to parse actual markdown files
export async function getProjects(): Promise<Project[]> {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""
  // Simulate reading from markdown files
  const projects: Project[] = [
    {
      slug: "mi-primer-proyecto",
      title: "Mi primer proyecto",
      excerpt: "Breve descripción de mi primer proyecto: técnicas, materiales y resultados.",
      content: `
        <h2>Sobre este proyecto</h2>
        <p>Este fue mi primer acercamiento serio al diseño de indumentaria. Quería crear algo que reflejara mi personalidad y mi visión artística.</p>
        
        <h2>Proceso creativo</h2>
        <p>El proceso comenzó con una investigación profunda sobre texturas y colores. Me inspiré en la naturaleza, especialmente en los patrones que se encuentran en las flores y las hojas.</p>
        
        <h2>Técnicas utilizadas</h2>
        <ul>
          <li>Bordado a mano</li>
          <li>Aplicación de texturas</li>
          <li>Combinación de materiales naturales</li>
        </ul>
        
        <h2>Conclusiones</h2>
        <p>Este proyecto me permitió explorar nuevas técnicas y aprender lecciones valiosas sobre diseño y creatividad. Fue el punto de partida de mi pasión por el diseño floral aplicado a la indumentaria.</p>
      `,
      image: prefix + "/images/diseño_1.jpeg",
      category: "Diseño Floral",
      materials: ["Algodón orgánico", "Hilos de seda", "Aplicaciones florales"],
      date: "15 de Mayo, 2025",
    },
    {
      slug: "coleccion-primavera",
      title: "Colección Primavera",
      excerpt: "Inspirada en los colores suaves y las texturas delicadas de la temporada.",
      content: `
        <h2>Inspiración</h2>
        <p>La primavera siempre ha sido mi estación favorita. Los colores suaves, los nuevos brotes y la sensación de renovación me inspiraron a crear esta colección.</p>
        
        <h2>Paleta de colores</h2>
        <p>Utilicé una paleta de rosas suaves, verdes tiernos y blancos cremosos para capturar la esencia de la primavera.</p>
        
        <h2>Piezas destacadas</h2>
        <ul>
          <li>Vestido con aplicaciones florales</li>
          <li>Blusa con bordados delicados</li>
          <li>Falda con texturas naturales</li>
        </ul>
      `,
      image: prefix + "/images/diseño_2.jpeg",
      category: "Indumentaria",
      materials: ["Lino", "Algodón", "Bordados florales"],
      date: "2 de Junio, 2025",
    },
    {
      slug: "arte-textil",
      title: "Arte Textil Experimental",
      excerpt: "Experimentación con diferentes materiales y técnicas de bordado contemporáneo.",
      content: `
        <h2>Experimentación</h2>
        <p>En este proyecto quise salir de mi zona de confort y experimentar con técnicas no convencionales de arte textil.</p>
        
        <h2>Técnicas innovadoras</h2>
        <p>Combiné bordado tradicional con elementos modernos como hilos metálicos y aplicaciones de resina.</p>
        
        <h2>Resultado</h2>
        <p>El resultado fue una pieza única que combina lo tradicional con lo contemporáneo, creando un diálogo entre el pasado y el presente del arte textil.</p>
      `,
      image: prefix + "/images/diseño_3.jpeg",
      category: "Arte Textil",
      materials: ["Hilos metálicos", "Resina", "Telas mixtas"],
      date: "10 de Junio, 2025",
    },
  ]

  return projects
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [
    {
      slug: "entrada-de-blog-1",
      title: "Mi primer blog ✨",
      date: "17 de Junio, 2025",
      excerpt: "Hoy empieza mi primer blog. Estoy muy emocionada de compartir mis ideas y proyectos en este espacio...",
      content: `
        <p>Hoy empieza mi primer blog ❤️</p>
        
        <p>Estoy muy emocionada de compartir mis ideas y proyectos en este espacio. Espero que disfruten siguiendo mi trayecto creativo y profesional.</p>
        
        <h2>¿Por qué decidí crear este blog?</h2>
        <p>Siempre he sentido la necesidad de expresar mis ideas y compartir mi trabajo con otras personas que comparten mis intereses. Un blog me pareció la plataforma ideal para hacerlo.</p>
        
        <h2>Mis objetivos</h2>
        <ul>
          <li>Compartir mi proceso creativo</li>
          <li>Documentar mis proyectos</li>
          <li>Conectar con personas afines</li>
          <li>Crear un portfolio digital que muestre mi evolución</li>
        </ul>
        
        <h2>Lo que viene</h2>
        <p>En las próximas semanas estaré compartiendo mis primeros proyectos, reflexiones sobre el diseño y algunos tutoriales sencillos que he ido desarrollando.</p>
        
        <p>¡Gracias por acompañarme en este viaje!</p>
      `,
    },
    {
      slug: "experiencia-diseno-floral",
      title: "Mi experiencia con el diseño floral",
      date: "20 de Junio, 2025",
      excerpt:
        "El diseño floral ha sido siempre mi pasión. Desde pequeña me ha fascinado la forma en que las flores pueden transmitir emociones...",
      content: `
        <p>El diseño floral ha sido siempre mi pasión. Desde pequeña me ha fascinado la forma en que las flores pueden transmitir emociones y crear ambientes únicos.</p>
        
        <h2>Mis inicios</h2>
        <p>Todo comenzó cuando tenía 8 años y ayudaba a mi abuela en su jardín. Ella me enseñó que cada flor tiene su propia personalidad y que, cuando las combinas correctamente, pueden contar historias increíbles.</p>
        
        <h2>Aplicando el diseño floral a la indumentaria</h2>
        <p>Con el tiempo, descubrí que podía aplicar estos principios del diseño floral a la creación de ropa. Los colores, las texturas y las formas de las flores se convirtieron en mi fuente de inspiración principal.</p>
        
        <h2>Consejos para principiantes</h2>
        <ul>
          <li><strong>Observa la naturaleza:</strong> Pasa tiempo en jardines y parques, observa cómo se combinan los colores naturalmente.</li>
          <li><strong>Experimenta con texturas:</strong> No tengas miedo de mezclar diferentes materiales y texturas.</li>
          <li><strong>Empieza simple:</strong> Comienza con diseños sencillos y ve añadiendo complejidad gradualmente.</li>
          <li><strong>Documenta tu proceso:</strong> Lleva un diario visual de tus experimentos y aprendizajes.</li>
        </ul>
        
        <h2>Mi filosofía</h2>
        <p>Creo que el diseño floral en la indumentaria no se trata solo de copiar la naturaleza, sino de capturar su esencia y traducirla a un lenguaje textil que hable al alma de quien lo lleva.</p>
        
        <p>En esta entrada quiero compartir cómo empecé en este mundo maravilloso y algunos consejos para quienes quieran iniciarse en esta hermosa fusión entre naturaleza y moda.</p>
      `,
    },
  ]

  return posts
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getProjects()
  return projects.find((project) => project.slug === slug) || null
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts()
  return posts.find((post) => post.slug === slug) || null
}

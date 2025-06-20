# Portfolio de Florencia - Diseño de Indumentaria

Un portfolio personal elegante y moderno para mostrar proyectos de diseño de indumentaria, con estética rosa/pink y contenido manejado completamente por archivos Markdown.

## 🌸 Características

- **Diseño responsive** con estética rosa/pink elegante
- **Contenido dinámico** desde archivos Markdown
- **Animaciones suaves** y efectos hover
- **Modal para proyectos** y posts del blog
- **Navegación fluida** entre secciones
- **Optimizado para GitHub Pages**

## 📁 Estructura del Proyecto

\`\`\`
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── home-page.tsx
├── content/
│   ├── about.md
│   ├── projects/
│   │   ├── mi-primer-proyecto.md
│   │   ├── coleccion-primavera.md
│   │   └── arte-textil.md
│   └── blog/
│       ├── mi-primer-blog.md
│       └── experiencia-diseno-floral.md
├── lib/
│   └── markdown.ts
├── public/
│   └── images/
│       ├── diseño_1.jpeg
│       ├── diseño_2.jpeg
│       └── diseño_3.jpeg
└── package.json
\`\`\`

## 🚀 Instalación Local

1. Clona el repositorio:
\`\`\`bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
\`\`\`

2. Instala las dependencias:
\`\`\`bash
npm install
\`\`\`

3. Ejecuta el servidor de desarrollo:
\`\`\`bash
npm run dev
\`\`\`

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📝 Agregar Contenido

### Nuevo Proyecto
Crea un archivo `.md` en `content/projects/` con este formato:

\`\`\`markdown
---
title: "Título del Proyecto"
date: "2025-01-15"
category: "Categoría"
image: "/images/tu-imagen.jpg"
materials: ["Material 1", "Material 2"]
excerpt: "Descripción breve del proyecto"
featured: true
---

# Contenido del proyecto en Markdown

Tu contenido aquí...
\`\`\`

### Nuevo Post del Blog
Crea un archivo `.md` en `content/blog/` con este formato:

\`\`\`markdown
---
title: "Título del Post"
date: "2025-01-15"
excerpt: "Descripción breve del post"
featured: true
---

# Contenido del post en Markdown

Tu contenido aquí...
\`\`\`

### Editar "Sobre Mí"
Edita el archivo `content/about.md` directamente.

## 🎨 Personalización

- **Colores**: Modifica la paleta en `tailwind.config.ts`
- **Tipografía**: Ajusta las fuentes en `app/globals.css`
- **Animaciones**: Personaliza en `components/home-page.tsx`

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🛠️ Tecnologías Utilizadas

- **Next.js 15** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Gray Matter** - Parser de Markdown
- **Remark** - Procesador de Markdown
- **Lucide React** - Iconos

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

Hecho con 💗 y mucha creatividad por Florencia

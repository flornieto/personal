// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Determinar si estamos en la página principal o en una página individual
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('proyecto');
  const blogId = urlParams.get('blog');
  
  if (projectId) {
    // Cargar un proyecto individual
    cargarProyectoIndividual(projectId);
  } else if (blogId) {
    // Cargar una entrada de blog individual
    cargarBlogIndividual(blogId);
  } else {
    // Estamos en la página principal, cargar resúmenes
    cargarResumenes();
  }

  // Configurar navegación smooth scroll
  configurarSmoothScroll();
});

function cargarResumenes() {
  // Cargar resúmenes de proyectos
  fetch('proyectos/index.md')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar el índice de proyectos');
      return response.text();
    })
    .then(text => {
      const htmlContent = marked.parse(text);
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, 'text/html');
      
      // Extraer resúmenes de proyectos
      const proyectos = doc.querySelectorAll('h2');
      const trabajosContainer = document.getElementById('trabajos-content');
      
      if (trabajosContainer) {
        proyectos.forEach(proyecto => {
          const title = proyecto.textContent;
          const id = title.toLowerCase().replace(/\s+/g, '-');
          
          let descripcion = '';
          let imagen = 'https://via.placeholder.com/400x300';
          
          // Buscar la descripción e imagen
          let nextElement = proyecto.nextElementSibling;
          while (nextElement && nextElement.tagName !== 'H2') {
            if (nextElement.tagName === 'P') {
              descripcion = nextElement.textContent;
            } else if (nextElement.tagName === 'IMG' || nextElement.querySelector('img')) {
              const img = nextElement.tagName === 'IMG' ? nextElement : nextElement.querySelector('img');
              if (img && img.src) imagen = img.src;
            }
            nextElement = nextElement.nextElementSibling;
          }
          
          trabajosContainer.innerHTML += `
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <a href="index.html?proyecto=${id}">
                <img src="${imagen}" alt="${title}" class="w-full h-48 object-cover rounded-md mb-4">
                <h3 class="text-xl font-semibold text-pink-600">${title}</h3>
                <p class="text-gray-600">${descripcion}</p>
              </a>
            </div>
          `;
        });
      }
    })
    .catch(error => console.error('Error al cargar proyectos:', error));
  
  // Cargar resúmenes de blog
  fetch('blog/index.md')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar el índice del blog');
      return response.text();
    })
    .then(text => {
      const htmlContent = marked.parse(text);
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, 'text/html');
      
      // Extraer entradas de blog
      const blogPosts = doc.querySelectorAll('h2');
      const blogContainer = document.getElementById('blog-content');
      
      if (blogContainer) {
        blogPosts.forEach(post => {
          const title = post.textContent;
          const id = title.toLowerCase().replace(/\s+/g, '-');
          
          let preview = '';
          let date = '';
          
          // Buscar fecha y vista previa
          let nextElement = post.nextElementSibling;
          while (nextElement && nextElement.tagName !== 'H2') {
            if (nextElement.tagName === 'P') {
              if (nextElement.innerHTML.includes('<em>') || nextElement.querySelector('em')) {
                // Es probablemente una fecha
                date = nextElement.textContent;
              } else {
                // Es contenido
                preview += nextElement.outerHTML;
              }
            }
            nextElement = nextElement.nextElementSibling;
          }
          
          blogContainer.innerHTML += `
            <article class="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 class="text-2xl font-semibold text-pink-600 mb-4">
                <a href="index.html?blog=${id}">${title}</a>
              </h3>
              <p class="text-sm text-gray-500 mb-2">${date}</p>
              <div class="prose text-gray-600">
                ${preview.substring(0, 200)}... <a href="index.html?blog=${id}" class="text-pink-500">Leer más</a>
              </div>
            </article>
          `;
        });
      }
    })
    .catch(error => console.error('Error al cargar entradas de blog:', error));
}

function cargarProyectoIndividual(id) {
  // Cargar el contenido del proyecto individual
  fetch(`proyectos/${id}.md`)
    .then(response => {
      if (!response.ok) throw new Error(`No se pudo cargar el proyecto: ${id}`);
      return response.text();
    })
    .then(text => {
      const htmlContent = marked.parse(text);
      
      // Crear la estructura de la página individual
      const contenidoMain = document.querySelector('main') || document.body;
      contenidoMain.innerHTML = `
        <div class="container mx-auto px-4 py-8">
          <a href="index.html" class="text-pink-600 hover:text-pink-800 mb-4 inline-block">
            &larr; Volver a la página principal
          </a>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="prose max-w-none">
              ${htmlContent}
            </div>
          </div>
        </div>
      `;
    })
    .catch(error => {
      console.error('Error al cargar el proyecto individual:', error);
      mostrarPaginaError('No se pudo encontrar el proyecto solicitado');
    });
}

function cargarBlogIndividual(id) {
  // Cargar el contenido de la entrada de blog individual
  fetch(`blog/${id}.md`)
    .then(response => {
      if (!response.ok) throw new Error(`No se pudo cargar la entrada de blog: ${id}`);
      return response.text();
    })
    .then(text => {
      const htmlContent = marked.parse(text);
      
      // Crear la estructura de la página individual
      const contenidoMain = document.querySelector('main') || document.body;
      contenidoMain.innerHTML = `
        <div class="container mx-auto px-4 py-8">
          <a href="index.html" class="text-pink-600 hover:text-pink-800 mb-4 inline-block">
            &larr; Volver a la página principal
          </a>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="prose max-w-none">
              ${htmlContent}
            </div>
          </div>
        </div>
      `;
    })
    .catch(error => {
      console.error('Error al cargar la entrada de blog individual:', error);
      mostrarPaginaError('No se pudo encontrar la entrada de blog solicitada');
    });
}

function mostrarPaginaError(mensaje) {
  const contenidoMain = document.querySelector('main') || document.body;
  contenidoMain.innerHTML = `
    <div class="container mx-auto px-4 py-8">
      <a href="index.html" class="text-pink-600 hover:text-pink-800 mb-4 inline-block">
        &larr; Volver a la página principal
      </a>
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 class="text-2xl text-red-600 mb-4">Error</h2>
        <p>${mensaje}</p>
      </div>
    </div>
  `;
}

function configurarSmoothScroll() {
  // Smooth scroll para los enlaces
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    if (anchor.getAttribute('href').length > 1) { // Asegurarse de que href no sea solo "#"
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    }
  });
}

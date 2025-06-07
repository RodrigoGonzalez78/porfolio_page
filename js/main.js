// Initialize particles.js for background effect
document.addEventListener('DOMContentLoaded', () => {
  if (window.particlesJS) {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#4ECDC4'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          }
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#4ECDC4',
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.8
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  }

  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }

  // Close mobile menu when a link is clicked
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Initialize Swiper for project images
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Animate timeline items on scroll
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const animateOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.8;
    
    timelineItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      
      if (itemTop < triggerBottom) {
        item.classList.add('show');
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();

  // Project modal functionality
  const projectCards = document.querySelectorAll('.project-card');
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  const closeModal = document.querySelector('.close-modal');

  // Project details data
  const projectDetails = {
    project1: {
      title: 'MountainTech - Ecommerce de Hardware',
      description: 'Tienda venta de componentes de computadora. Hecha completamente con Golang, HTML, CSS, Bootstrap. Utilizando el sistema de renderisado de plantillas en el Servidor de Golang y PostgreSQL para almacenar los datos.',
      features: [
        'Catálogo de productos con filtros y búsqueda',
        'Carrito de compras',
        'Sistema de autenticación de usuarios',
        'Panel de administración para gestionar productos',
        'Panel de gestion de usuarios',
        'Facturas',
        'Gestion de compras',
        'Edición y eliminación de productos',
        'Integración con base de datos PostgreSQL'
      ],
      technologies: ['Golang', 'PostgreSQL', 'HTML', 'CSS', 'JWT', 'Bootstrap'],
      images: [
        'assets/images/ecommerce/home.png',
        'assets/images/ecommerce/login.png',
        'assets/images/ecommerce/signup.png',
        'assets/images/ecommerce/products.png',
        'assets/images/ecommerce/carrito_vacio.png',
        'assets/images/ecommerce/carrito.png',
        'assets/images/ecommerce/compras.png',
        'assets/images/ecommerce/factura.png'

      ]
    },
    project2: {
      title: 'Twitter(X) Clone App',
      description: 'Hecha desde cero con android nativo para la aplicacion usando Retrofit, Room, inyección de dependencias y Clean Architecture, también hice el backend con Golang usando MongoDB, JWT y Gorilla Mux.',
      features: [
        'Autenticación de usuarios',
        'Publicación de tweets',
        'Seguimiento de usuarios',
        'API completa en Golang'
      ],
      technologies: ['Golang', 'Android', 'Jetpack Compose', 'Retrofit', 'Hilt', 'Room', 'MongoDB', 'JWT'],
      images: [
        'assets/images/tweet.jpg'
      ]
    },
    project3: {
      title: 'Investigación sobre Microservicios',
      description: 'Realicé un proyecto de investigación en el que comparé las arquitecturas monolíticas y de microservicios, desde el diseño, implementación, pruebas de carga y monitorización.',
      features: [
        'Diseño e implementación de arquitectura monolítica y microservicios',
        'Pruebas de carga con JMeter',
        'Monitorización con Prometheus y Grafana',
        'Uso de Docker para contenerización',
        'Comparativas de rendimiento y escalabilidad'
      ],
      technologies: ['Golang', 'Docker', 'JMeter', 'PostgreSQL', 'Grafana', 'Prometheus'],
      images: [
        'assets/images/micro.png'
      ]
    },
    project4: {
      title: 'Task Manager',
      description: 'Una aplicación escrita en Android nativo, con Retrofit, Hilt y DataStore. Esta se basa en una API que construí con Golang, usando Gorilla Mux, GORM, PostgreSQL y autenticación con JWT.',
      features: [
        'Gestión de tareas por usuario',
        'Autenticación JWT',
        'Sincronización con API REST',
        'Interfaz intuitiva con Jetpack Compose',
        'API RESTful completa'

      ],
      technologies: ['Golang', 'PostgreSQL', 'Jetpack Compose', 'Retrofit', 'Hilt', 'Room', 'JWT'],
      images: [
        'assets/images/task.jpg'
      ]
    },
    project5: {
      title: 'API de Procesamiento de Imágenes',
      description: 'Realicé una API RESTful en Golang que permite subir imágenes, almacenarlas y aplicarles diferentes filtros, como escala de grises, sepia, etc. Utiliza GORM para la gestión de la base de datos y JWT para la autenticación de usuarios.',
      features: [
        'Subida de imágenes',
        'Filtros: escala de grises, sepia, inversión',
        'Autenticación JWT',
        'Base de datos con GORM',
        'Endpoints RESTful'
      ],
      technologies: ['Golang', 'SQLite', 'JWT', 'GORM', 'Gorilla Mux'],
      images: [
        'assets/images/img_proc.png'
      ]
    },
    project6: {
      title: 'Gestor de Gastos',
      description: 'Aplicación hecha en Flutter que permite gestionar los gastos y ingresos de una persona. Utiliza Provider para la gestión del estado y SQLite para el almacenamiento de datos.',
      features: [
        'Registro de ingresos y gastos',
        'Categorías personalizables',
        'Estadísticas y gráficos',
        'Persistencia con SQLite',
        'Gestión del estado con Provider'
      ],
      technologies: ['Flutter', 'SQLite', 'Provider'],
      images: [
        'assets/images/gestion.png'
      ]
    }
  }

  // Open modal with project details
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-id');
      const project = projectDetails[projectId];
      
      if (project) {
        let content = `
          <h2 class="modal-title">${project.title}</h2>
          <p class="modal-description">${project.description}</p>
          
          <div class="swiper">
            <div class="swiper-wrapper">
              ${project.images.map(img => `
                <div class="swiper-slide">
                  <img src="${img}" alt="${project.title}">
                </div>
              `).join('')}
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
          
          <h3>Características</h3>
          <ul class="modal-features">
            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
          
          <h3>Tecnologías</h3>
          <div class="modal-techs">
            ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
          </div>
        `;
        
        modalBody.innerHTML = content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Initialize Swiper for the new modal content
        new Swiper('.swiper', {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
        
        setTimeout(() => {
          modal.classList.add('show');
        }, 10);
      }
    });
  });

  // Close modal
  if (closeModal) {
    closeModal.addEventListener('click', () => {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }, 300);
    });
  }

  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }, 300);
    }
  });

  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});





// ===================================
// CONTACT FORM FUNCTIONALITY
// ===================================

/**
 * Inicializa toda la funcionalidad del formulario de contacto
 */
function initContactForm() {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
      lucide.createIcons();
  }

  // Setup event listeners
  setupContactModalEvents();
  setupFormSubmission();
  setupFormAnimations();
}

/**
* Configura los eventos del modal de contacto
*/
function setupContactModalEvents() {
  const modal = document.getElementById('contactModal');
  
  if (!modal) return;

  // Close modal when clicking outside
  modal.addEventListener('click', function(e) {
      if (e.target === this) {
          closeContactModal();
      }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
          closeContactModal();
      }
  });
}

/**
* Abre el modal de contacto
*/
function openContactModal() {
  const modal = document.getElementById('contactModal');
  if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
  }
}

/**
* Cierra el modal de contacto
*/
function closeContactModal() {
  const modal = document.getElementById('contactModal');
  if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
      
      // Reset form and messages
      const form = document.getElementById('contactForm');
      const messageContainer = document.getElementById('messageContainer');
      
      if (form) form.reset();
      if (messageContainer) messageContainer.innerHTML = '';
  }
}

/**
* Configura el manejo del envío del formulario
*/
function setupFormSubmission() {
  const form = document.getElementById('contactForm');
  
  if (!form) return;

  form.addEventListener('submit', async function(e) {
      e.preventDefault();
      await handleFormSubmit();
  });
}

/**
* Maneja el envío del formulario
*/
async function handleFormSubmit() {
  const submitBtn = document.getElementById('submitBtn');
  const messageContainer = document.getElementById('messageContainer');
  
  // Get form data
  const formData = getFormData();
  
  // Validate form
  const validation = validateForm(formData);
  if (!validation.isValid) {
      showMessage(validation.message, 'error');
      return;
  }
  
  // Show loading state
  setLoadingState(true);
  
  try {
      const response = await fetch('https://contact-me-back.onrender.com/contact', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      });
      
      if (response.ok) {
          showMessage('¡Mensaje enviado exitosamente! Me pondré en contacto contigo pronto.', 'success');
          document.getElementById('contactForm').reset();
      } else {
          const errorData = await response.json();
          showMessage(errorData.message || 'Error al enviar el mensaje. Inténtalo de nuevo.', 'error');
      }
  } catch (error) {
      console.error('Error:', error);
      showMessage('Error al enviar el mensaje. Verifica tu conexión e inténtalo de nuevo.', 'error');
  } finally {
      setLoadingState(false);
  }
}

/**
* Obtiene los datos del formulario
* @returns {Object} Datos del formulario
*/
function getFormData() {
  return {
      name: getValue('name'),
      email: getValue('email'),
      message: getValue('message')
  };
}

/**
* Obtiene el valor de un campo por ID
* @param {string} id - ID del campo
* @returns {string} Valor del campo
*/
function getValue(id) {
  const element = document.getElementById(id);
  return element ? element.value.trim() : '';
}

/**
* Valida los datos del formulario
* @param {Object} formData - Datos del formulario
* @returns {Object} Resultado de la validación
*/
function validateForm(formData) {
  // Check required fields
  if (!formData.name || !formData.email || !formData.message) {
      return {
          isValid: false,
          message: 'Por favor, completa todos los campos.'
      };
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
      return {
          isValid: false,
          message: 'Por favor, ingresa un correo electrónico válido.'
      };
  }
  
  return { isValid: true };
}

/**
* Establece el estado de carga del botón de envío
* @param {boolean} loading - Si está cargando o no
*/
function setLoadingState(loading) {
  const submitBtn = document.getElementById('submitBtn');
  
  if (!submitBtn) return;
  
  if (loading) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i data-lucide="loader-2" class="loading"></i> Enviando...';
  } else {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i data-lucide="send"></i> Enviar mensaje';
  }
  
  // Refresh icons
  if (typeof lucide !== 'undefined') {
      lucide.createIcons();
  }
}

/**
* Muestra un mensaje al usuario
* @param {string} text - Texto del mensaje
* @param {string} type - Tipo de mensaje ('success' o 'error')
*/
function showMessage(text, type) {
  const messageContainer = document.getElementById('messageContainer');
  
  if (!messageContainer) return;
  
  const iconName = type === 'success' ? 'check-circle' : 'alert-circle';
  
  messageContainer.innerHTML = `
      <div class="message ${type}">
          <i data-lucide="${iconName}"></i>
          ${text}
      </div>
  `;
  
  // Refresh icons
  if (typeof lucide !== 'undefined') {
      lucide.createIcons();
  }
  
  // Auto-hide after 5 seconds
  setTimeout(() => {
      messageContainer.innerHTML = '';
  }, 5000);
}

/**
* Configura las animaciones de los campos del formulario
*/
function setupFormAnimations() {
  const inputs = document.querySelectorAll('.form-input, .form-textarea');
  
  inputs.forEach(input => {
      input.addEventListener('focus', function() {
          if (this.parentElement) {
              this.parentElement.style.transform = 'translateY(-2px)';
          }
      });
      
      input.addEventListener('blur', function() {
          if (this.parentElement) {
              this.parentElement.style.transform = 'translateY(0)';
          }
      });
  });
}

// ===================================
// INITIALIZATION
// ===================================

/**
* Inicializa el formulario de contacto cuando el DOM esté listo
*/
function initContactFormOnReady() {
  if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initContactForm);
  } else {
      initContactForm();
  }
}

// Auto-initialize
initContactFormOnReady();
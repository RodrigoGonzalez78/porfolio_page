

// Initialize particles.js for background effect
document.addEventListener("DOMContentLoaded", () => {
  if (window.particlesJS) {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#4ECDC4",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#4ECDC4",
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.8,
            },
          },
          push: {
            particles_nb: 4,
          },
        },
      },
      retina_detect: true,
    })
  }

  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navLinks.classList.toggle("active")
    })
  }

  // Close mobile menu when a link is clicked
  const navItems = document.querySelectorAll(".nav-links a")
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navLinks.classList.remove("active")
    })
  })

  // Initialize Swiper for project images
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })

  // Animate timeline items on scroll
  const timelineItems = document.querySelectorAll(".timeline-item")

  const animateOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.8

    timelineItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top

      if (itemTop < triggerBottom) {
        item.classList.add("show")
      }
    })
  }

  window.addEventListener("scroll", animateOnScroll)
  animateOnScroll()

  // Project modal functionality
  const projectCards = document.querySelectorAll(".project-card")
  const modal = document.getElementById("project-modal")
  const modalBody = document.getElementById("modal-body")
  const closeModal = document.querySelector(".close-modal")

  // Open modal with project details
  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const projectId = card.getAttribute("data-id")
      const project = window.projectDetails ? window.projectDetails[projectId] : null

      if (project) {
        const content = `
          <h2 class="modal-title">${project.title}</h2>
          <p class="modal-description">${project.description}</p>
          
          <div class="swiper">
            <div class="swiper-wrapper">
              ${project.images
                .map(
                  (img) => `
                <div class="swiper-slide">
                  <img src="${img}" alt="${project.title}">
                </div>
              `,
                )
                .join("")}
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
          
          <h3>${window.i18n ? window.i18n.t("modal.features") : "Características"}</h3>
          <ul class="modal-features">
            ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
          
          <h3>${window.i18n ? window.i18n.t("modal.technologies") : "Tecnologías"}</h3>
          <div class="modal-techs">
            ${project.technologies.map((tech) => `<span class="tech-badge">${tech}</span>`).join("")}
          </div>
        `

        modalBody.innerHTML = content
        modal.style.display = "block"
        document.body.style.overflow = "hidden"

        // Initialize Swiper for the new modal content
        new Swiper(".swiper", {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        })

        setTimeout(() => {
          modal.classList.add("show")
        }, 10)
      }
    })
  })

  // Close modal
  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.classList.remove("show")
      setTimeout(() => {
        modal.style.display = "none"
        document.body.style.overflow = "auto"
      }, 300)
    })
  }

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show")
      setTimeout(() => {
        modal.style.display = "none"
        document.body.style.overflow = "auto"
      }, 300)
    }
  })

  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
})

// ===================================
// CONTACT FORM FUNCTIONALITY
// ===================================

/**
 * Inicializa toda la funcionalidad del formulario de contacto
 */
function initContactForm() {
  // Initialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons()
  }

  // Setup event listeners
  setupContactModalEvents()
  setupFormSubmission()
  setupFormAnimations()
}

/**
 * Configura los eventos del modal de contacto
 */
function setupContactModalEvents() {
  const modal = document.getElementById("contactModal")

  if (!modal) return

  // Close modal when clicking outside
  modal.addEventListener("click", function (e) {
    if (e.target === this) {
      closeContactModal()
    }
  })

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeContactModal()
    }
  })
}

/**
 * Abre el modal de contacto
 */
function openContactModal() {
  const modal = document.getElementById("contactModal")
  if (modal) {
    modal.classList.add("active")
    document.body.style.overflow = "hidden"
  }
}

/**
 * Cierra el modal de contacto
 */
function closeContactModal() {
  const modal = document.getElementById("contactModal")
  if (modal) {
    modal.classList.remove("active")
    document.body.style.overflow = "auto"

    // Reset form and messages
    const form = document.getElementById("contactForm")
    const messageContainer = document.getElementById("messageContainer")

    if (form) form.reset()
    if (messageContainer) messageContainer.innerHTML = ""
  }
}

/**
 * Configura el manejo del envío del formulario
 */
function setupFormSubmission() {
  const form = document.getElementById("contactForm")

  if (!form) return

  form.addEventListener("submit", async (e) => {
    e.preventDefault()
    await handleFormSubmit()
  })
}

/**
 * Maneja el envío del formulario
 */
async function handleFormSubmit() {
  const submitBtn = document.getElementById("submitBtn")
  const messageContainer = document.getElementById("messageContainer")

  // Get form data
  const formData = getFormData()

  // Validate form
  const validation = validateForm(formData)
  if (!validation.isValid) {
    showMessage(validation.message, "error")
    return
  }

  // Show loading state
  setLoadingState(true)

  try {
    const response = await fetch("https://thingproxy.freeboard.io/fetch/http://146.235.41.94:8080/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      const successMessage = window.i18n
        ? window.i18n.t("contact.success")
        : "¡Mensaje enviado exitosamente! Me pondré en contacto contigo pronto."
      showMessage(successMessage, "success")
      document.getElementById("contactForm").reset()
    } else {
      const errorData = await response.json()
      const errorMessage = window.i18n
        ? window.i18n.t("contact.error")
        : "Error al enviar el mensaje. Inténtalo de nuevo."
      showMessage(errorData.message || errorMessage, "error")
    }
  } catch (error) {
    console.error("Error:", error)
    const errorMessage = window.i18n
      ? window.i18n.t("contact.errorConnection")
      : "Error al enviar el mensaje. Verifica tu conexión e inténtalo de nuevo."
    showMessage(errorMessage, "error")
  } finally {
    setLoadingState(false)
  }
}

/**
 * Obtiene los datos del formulario
 * @returns {Object} Datos del formulario
 */
function getFormData() {
  return {
    name: getValue("name"),
    email: getValue("email"),
    message: getValue("message"),
  }
}

/**
 * Obtiene el valor de un campo por ID
 * @param {string} id - ID del campo
 * @returns {string} Valor del campo
 */
function getValue(id) {
  const element = document.getElementById(id)
  return element ? element.value.trim() : ""
}

/**
 * Valida los datos del formulario
 * @param {Object} formData - Datos del formulario
 * @returns {Object} Resultado de la validación
 */
function validateForm(formData) {
  // Check required fields
  if (!formData.name || !formData.email || !formData.message) {
    const message = window.i18n ? window.i18n.t("contact.errorRequired") : "Por favor, completa todos los campos."
    return {
      isValid: false,
      message: message,
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.email)) {
    const message = window.i18n
      ? window.i18n.t("contact.errorEmail")
      : "Por favor, ingresa un correo electrónico válido."
    return {
      isValid: false,
      message: message,
    }
  }

  return { isValid: true }
}

/**
 * Establece el estado de carga del botón de envío
 * @param {boolean} loading - Si está cargando o no
 */
function setLoadingState(loading) {
  const submitBtn = document.getElementById("submitBtn")

  if (!submitBtn) return

  if (loading) {
    submitBtn.disabled = true
    const loadingText = window.i18n ? window.i18n.t("contact.sending") : "Enviando..."
    submitBtn.innerHTML = `<i data-lucide="loader-2" class="loading"></i> ${loadingText}`
  } else {
    submitBtn.disabled = false
    const sendText = window.i18n ? window.i18n.t("contact.send") : "Enviar mensaje"
    submitBtn.innerHTML = `<i data-lucide="send"></i> ${sendText}`
  }

  // Refresh icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons()
  }
}

/**
 * Muestra un mensaje al usuario
 * @param {string} text - Texto del mensaje
 * @param {string} type - Tipo de mensaje ('success' o 'error')
 */
function showMessage(text, type) {
  const messageContainer = document.getElementById("messageContainer")

  if (!messageContainer) return

  const iconName = type === "success" ? "check-circle" : "alert-circle"

  messageContainer.innerHTML = `
    <div class="message ${type}">
        <i data-lucide="${iconName}"></i>
        ${text}
    </div>
  `

  // Refresh icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons()
  }

  // Auto-hide after 5 seconds
  setTimeout(() => {
    messageContainer.innerHTML = ""
  }, 5000)
}

/**
 * Configura las animaciones de los campos del formulario
 */
function setupFormAnimations() {
  const inputs = document.querySelectorAll(".form-input, .form-textarea")

  inputs.forEach((input) => {
    input.addEventListener("focus", function () {
      if (this.parentElement) {
        this.parentElement.style.transform = "translateY(-2px)"
      }
    })

    input.addEventListener("blur", function () {
      if (this.parentElement) {
        this.parentElement.style.transform = "translateY(0)"
      }
    })
  })
}

// ===================================
// INITIALIZATION
// ===================================

/**
 * Inicializa el formulario de contacto cuando el DOM esté listo
 */
function initContactFormOnReady() {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initContactForm)
  } else {
    initContactForm()
  }
}

// Auto-initialize
initContactFormOnReady()

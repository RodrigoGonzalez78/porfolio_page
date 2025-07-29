
class I18nManager {
  constructor() {
    this.currentLanguage = localStorage.getItem("language") || "es"
    this.translations = window.TRANSLATIONS || TRANSLATIONS
    this.init()
  }

  init() {
    this.setupLanguageToggle()
    this.updateContent()
    this.updateLanguageButton()
    this.updateProjectDetails()
  }

  setupLanguageToggle() {
    const languageToggle = document.getElementById("languageToggle")
    if (languageToggle) {
      languageToggle.addEventListener("click", () => {
        this.toggleLanguage()
      })
    }
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === "es" ? "en" : "es"
    localStorage.setItem("language", this.currentLanguage)

    // Update document language
    document.documentElement.lang = this.currentLanguage

    this.updateContent()
    this.updateLanguageButton()
    this.updateProjectDetails()
  }

  updateContent() {
    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll("[data-i18n]")
    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n")
      const translation = this.getNestedTranslation(key)
      if (translation) {
        element.textContent = translation
      }
    })

    // Update placeholders
    const placeholderElements = document.querySelectorAll("[data-i18n-placeholder]")
    placeholderElements.forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder")
      const translation = this.getNestedTranslation(key)
      if (translation) {
        element.placeholder = translation
      }
    })
  }

  updateLanguageButton() {
    const currentLangElement = document.getElementById("currentLang")
    if (currentLangElement) {
      currentLangElement.textContent = this.currentLanguage.toUpperCase()
    }
  }

  getNestedTranslation(key) {
    const currentTranslations = this.translations[this.currentLanguage]
    return key.split(".").reduce((obj, k) => obj && obj[k], currentTranslations)
  }

  // Get translation for JavaScript usage
  t(key) {
    return this.getNestedTranslation(key) || key
  }

  updateProjectDetails() {
    // Update the global projectDetails object used by modals
    const projects = this.translations[this.currentLanguage].projects

    window.projectDetails = {
      project1: {
        title: projects.project1.title,
        description: projects.project1.description,
        features: projects.project1.features,
        technologies: ["Golang", "PostgreSQL", "HTML", "CSS", "JWT", "Bootstrap"],
        images: [
          "assets/images/ecommerce/home.png",
          "assets/images/ecommerce/login.png",
          "assets/images/ecommerce/signup.png",
          "assets/images/ecommerce/products.png",
          "assets/images/ecommerce/carrito_vacio.png",
          "assets/images/ecommerce/carrito.png",
          "assets/images/ecommerce/compras.png",
          "assets/images/ecommerce/factura.png",
        ],
      },
      project2: {
        title: projects.project2.title,
        description: projects.project2.description,
        features: projects.project2.features,
        technologies: ["Golang", "Android", "Jetpack Compose", "Retrofit", "Hilt", "Room", "MongoDB", "JWT"],
        images: ["assets/images/tweet.jpg"],
      },
      project3: {
        title: projects.project3.title,
        description: projects.project3.description,
        features: projects.project3.features,
        technologies: ["Golang", "Docker", "JMeter", "PostgreSQL", "Grafana", "Prometheus"],
        images: ["assets/images/micro.png"],
      },
      project4: {
        title: projects.project4.title,
        description: projects.project4.description,
        features: projects.project4.features,
        technologies: [
          "Golang",
          "PostgreSQL",
          "Swagger",
          "Docker",
          "MinIO",
          "Room",
          "Retrofit",
          "Hilt",
          "DataStore",
          "Jetpack Compose",
          "JWT",
          "Google Maps",
          "Clean Architecture"
        ],
        images: ["assets/images/event1.png","assets/images/event2.png","assets/images/event3.png"],
      },
      project5: {
        title: projects.project5.title,
        description: projects.project5.description,
        features: projects.project5.features,
        technologies: ["Golang", "Docker", "Minio", "SQLite", "JWT", "GORM", "Gorilla Mux"],
        images: ["assets/images/img_proc.png"],
      },
      project6: {
        title: projects.project6.title,
        description: projects.project6.description,
        features: projects.project6.features,
        technologies: ["Android", "Kotlin", "Room", "Hilt", "MVVM", "Coroutines", "Clean Architecture", "Jetpack Compose"],
        images: [
          "assets/images/gestion.png",
          "assets/images/gestion2.png"
        ],
      },
    }
  }
}

// Initialize i18n system when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  window.i18n = new I18nManager()
})
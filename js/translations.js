// ===================================
// TRANSLATIONS DATA
// ===================================

const TRANSLATIONS = {
  es: {
    nav: {
      about: "Sobre mí",
      skills: "Habilidades",
      education: "Educación",
      experience: "Experiencia",
      certifications: "Certificaciones",
      projects: "Proyectos",
    },
    hero: {
      greeting: "Hola, soy Rodrigo",
      subtitle: "Ingeniero de Software / AI Engineer",
      locationPrefix: "de",
      location: "Corrientes, Argentina",
      locationFlag: "🇦🇷",
      contact: "Contacto",
    },
    about: {
      title: "Mas sobre mí",
      paragraph1:
        "Ingeniero de Software con conocimientos en desarrollo backend, mobile, integración e implementación de modelos de inteligencia artificial. Trabajo con modelos de lenguaje (LLM), procesamiento de lenguaje natural (NLP) y técnicas de RAG para integrar IA en soluciones reales como el procesamiento y anonimización de documentos. En backend utilizo Golang (APIs REST, microservicios y bases de datos) y en mobile desarrollo Android nativo con Kotlin y Jetpack Compose, aplicando arquitecturas modernas como Clean Architecture y MVVM.",
    },
    skills: {
      title: "Habilidades",
    },
    education: {
      title: "Educación",
      degree1: {
        title: "Licenciatura en Sistemas de Información",
        institution: "Universidad Nacional del Nordeste",
        period: "En curso",
        description:
          "Formación en Ingeniería de Software, Bases de Datos, Redes, Sistemas Operativos, Arquitectura de Computadoras.",
      },
      degree2: {
        title: "Analista Programador Universitario",
        institution: "Universidad Nacional del Nordeste",
        period: "2021–2025",
        description:
          "Formación en algoritmos, estructuras de datos, programación orientada a objetos y funcional, bases de datos e ingeniería de software.",
      },
      degree3: {
        title: "Técnico en Informática Personal y Profesional",
        institution: "Escuela Técnica Ita Ibate",
        period: "2012-2020",
        description:
          "Me introdujo al mundo de la computación, aprendiendo los conceptos básicos de hardware y software.",
      },
    },
    experience: {
      title: "Experiencia",
      job1: {
        title: "Pasante en Desarrollo de Software",
        company: "CECONEA - Centro de Cómputos de la Universidad Nacional del Nordeste",
        period: "Enero 2026 - Actualidad",
        description: "Desarrollo de soluciones de inteligencia artificial aplicadas al procesamiento de documentos. Implementación de modelos de reconocimiento óptico de caracteres (OCR), procesamiento de lenguaje natural (NLP), técnicas de anonimización de datos sensibles y sistemas RAG con embeddings y bases vectoriales, utilizando Python y modelos de lenguaje (LLM).",
      },
    },
    certifications: {
      title: "Certificaciones y Cursos",
      cert1: {
        title: "Go (Intermediate) Certificate",
        description:
          "Incluye trabajar con funciones, punteros, manejo de archivos, creación de servicios web en Go y manejo de errores.",
      },
      cert2: {
        title: "SQL (Basic) Certificate",
        description: "Incluye consultas simples, relaciones y agregadores.",
      },
      cert3: {
        title: "Python (Basic) Certificate",
        description:
          "Cubre temas como tipos escalares, operadores y flujo de control, cadenas, colecciones e iteración, modularidad, objetos y tipos y clases.",
      },
      cert4: {
        title: "Programación de Aplicaciones para Android con Kotlin",
        description:
          "Curso de desarrollo Android con Kotlin desde cero hasta un nivel avanzado, cubriendo Kotlin, POO, debugging, componentes de una app y buenas prácticas.",
      },
      cert5: {
        title: "Aprende lenguaje GO (GOLANG) desde 0",
        description:
          "Go desde lo básico hasta lo intermedio, incluyendo POO, estructuras, APIs REST y tecnologías como GitHub y MongoDB, desarrollando un backend.",
      },
      cert6: {
        title: "SQL - Curso completo de Bases de Datos - de 0 a Avanzado",
        description:
          "Bases de Datos, MySQL, teoría y práctica, Lenguaje SQL completo, Base de datos MySQL, Diagrama EER.",
      },
    },
    projects: {
      title: "Proyectos",
      viewCode: "Ver código",
      viewPlayStore: "Ver en Play Store",
      visitApi: "Visitar API",
      project1: {
        title: "MountainTech - Ecommerce de Hardware",
        description:
          "Tienda venta de componentes de computadora. Hecha completamente con Golang, HTML, CSS, Bootstrap. Utilizando el sistema de renderisado de plantillas en el Servidor de Golang y PostgreSQL para almacenar los datos.",
        features: [
          "Catálogo de productos con filtros y búsqueda",
          "Carrito de compras",
          "Sistema de autenticación de usuarios",
          "Panel de administración para gestionar productos",
          "Panel de gestión de usuarios",
          "Facturas",
          "Gestión de compras",
          "Edición y eliminación de productos",
          "Integración con base de datos PostgreSQL",
        ],
      },

      project4: {
        title: "Event Manager",
        description:
          "Aplicación móvil nativa para Android con arquitectura limpia. Permite crear, editar y gestionar eventos, organizadores, tipos de tickets, validación con códigos QR, pagos con Mercado Pago, notificaciones push con Firebase, notificaciones por email con Resend y mapas. El backend está hecho en Golang, usando GORM, PostgreSQL, Swagger, SeaweedFS y Docker.",
        features: [
          "Gestión completa de eventos y tickets",
          "Generación y validación de QR",
          "Autenticación y autorización con JWT",
          "Almacenamiento de imágenes con SeaweedFS",
          "Pagos integrados con Mercado Pago",
          "Notificaciones push con Firebase",
          "Envío de emails con Resend",
          "Notificaciones y ubicación con Google Maps",
          "Sincronización mediante API RESTful",
        ],
      },

      project6: {
        title: "Gestor de Gastos",
        description:
          "Aplicación móvil desarrollada en Kotlin con Android Nativo utilizando Jetpack Compose. Permite gestionar los ingresos y gastos personales con una arquitectura robusta y moderna.",
        features: [
          "Registro de ingresos y gastos",
          "Categorías personalizables",
          "Estadísticas y gráficos",
          "Persistencia local con Room",
          "Inyección de dependencias con Hilt",
          "Arquitectura limpia (Clean Architecture)",
          "Gestión con Coroutines y ViewModel (MVVM)",
          "Interfaz moderna con Jetpack Compose",
        ],
      },
    },
    contact: {
      title: "Contáctame",
      name: "Nombre completo",
      namePlaceholder: "Tu nombre completo",
      email: "Correo electrónico",
      emailPlaceholder: "tu@email.com",
      message: "Mensaje",
      messagePlaceholder: "Cuéntame sobre tu proyecto o consulta...",
      send: "Enviar mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado exitosamente! Me pondré en contacto contigo pronto.",
      error: "Error al enviar el mensaje. Inténtalo de nuevo.",
      errorConnection: "Error al enviar el mensaje. Verifica tu conexión e inténtalo de nuevo.",
      errorRequired: "Por favor, completa todos los campos.",
      errorEmail: "Por favor, ingresa un correo electrónico válido.",
    },
    modal: {
      features: "Características",
      technologies: "Tecnologías",
    },
    footer: {
      copyright: "© 2025 Rodrigo González",
    },
  },
  en: {
    nav: {
      about: "About me",
      skills: "Skills",
      education: "Education",
      experience: "Experience",
      certifications: "Certifications",
      projects: "Projects",
    },
    hero: {
      greeting: "Hi, I'm Rodrigo",
      subtitle: "Software Engineer / AI Engineer",
      locationPrefix: "from",
      location: "Corrientes, Argentina",
      locationFlag: "🇦🇷",
      contact: "Contact",
    },
    about: {
      title: "More about me",
      paragraph1:
        "Software Engineer with knowledge in backend and mobile development, and in the integration and implementation of artificial intelligence models. I work with large language models (LLM), natural language processing (NLP) and RAG techniques to integrate AI into real-world solutions such as document processing and anonymization. On the backend I use Golang (REST APIs, microservices and databases) and on mobile I develop native Android with Kotlin and Jetpack Compose, applying modern architectures such as Clean Architecture and MVVM.",
    },
    skills: {
      title: "Skills",
    },
    education: {
      title: "Education",
      degree1: {
        title: "Bachelor's Degree in Information Systems",
        institution: "Universidad Nacional del Nordeste",
        period: "In progress",
        description: "Training in Software Engineering, Databases, Networks, Operating Systems, Computer Architecture.",
      },
      degree2: {
        title: "University Programming Analyst",
        institution: "Universidad Nacional del Nordeste",
        period: "2021–2025",
        description:
          "Training in algorithms, data structures, object-oriented and functional programming, databases and software engineering.",
      },
      degree3: {
        title: "Personal and Professional Computer Technician",
        institution: "Escuela Técnica Ita Ibate",
        period: "2012-2020",
        description: "Introduced me to the world of computing, learning the basic concepts of hardware and software.",
      },
    },
    experience: {
      title: "Experience",
      job1: {
        title: "Software Development Intern",
        company: "CECONEA - Computing Center of the Universidad Nacional del Nordeste",
        period: "January 2026 - Present",
        description: "Development of artificial intelligence solutions applied to document processing. Implementation of optical character recognition (OCR) models, natural language processing (NLP), sensitive data anonymization techniques, and RAG systems with embeddings and vector databases, using Python and large language models (LLM).",
      },
    },
    certifications: {
      title: "Certifications and Courses",
      cert1: {
        title: "Go (Intermediate) Certificate",
        description:
          "Includes working with functions, pointers, file handling, creating web services in Go and error handling.",
      },
      cert2: {
        title: "SQL (Basic) Certificate",
        description: "Includes simple queries, relationships and aggregators.",
      },
      cert3: {
        title: "Python (Basic) Certificate",
        description:
          "Covers topics like scalar types, operators and control flow, strings, collections and iteration, modularity, objects and types and classes.",
      },
      cert4: {
        title: "Android Application Programming with Kotlin",
        description:
          "Android development course with Kotlin from scratch to advanced level, covering Kotlin, OOP, debugging, app components and best practices.",
      },
      cert5: {
        title: "Learn GO (GOLANG) language from 0",
        description:
          "Go from basic to intermediate, including OOP, structures, REST APIs and technologies like GitHub and MongoDB, developing a backend.",
      },
      cert6: {
        title: "SQL - Complete Database Course - from 0 to Advanced",
        description: "Databases, MySQL, theory and practice, complete SQL language, MySQL database, EER Diagram.",
      },
    },
    projects: {
      title: "Projects",
      viewCode: "View code",
      viewPlayStore: "View on Play Store",
      visitApi: "Visit API",
      project1: {
        title: "MountainTech - Hardware Ecommerce",
        description:
          "Computer components sales store. Made completely with Golang, HTML, CSS, Bootstrap. Using the template rendering system on the Golang Server and PostgreSQL to store the data.",
        features: [
          "Product catalog with filters and search",
          "Shopping cart",
          "User authentication system",
          "Administration panel to manage products",
          "User management panel",
          "Invoices",
          "Purchase management",
          "Product editing and deletion",
          "PostgreSQL database integration",
        ],
      },

      project4: {
        title: "Event Manager",
        description:
          "A native Android mobile application with Clean Architecture. It allows creation and management of events, organizers, ticket types, QR validation, Mercado Pago payments, push notifications with Firebase, email notifications with Resend, and maps. The backend is built in Golang using GORM, PostgreSQL, Swagger, SeaweedFS and Docker.",
        features: [
          "Full event and ticket management",
          "QR code generation and validation",
          "Authentication and authorization with JWT",
          "Image storage with SeaweedFS",
          "Payments integrated with Mercado Pago",
          "Push notifications with Firebase",
          "Email sending with Resend",
          "Notifications and location via Google Maps",
          "Synchronization via RESTful API",
        ],
      },


      project6: {
        title: "Expense Manager",
        description:
          "Mobile application developed in Kotlin using Android Native with Jetpack Compose. It helps manage personal income and expenses with a robust and modern architecture.",
        features: [
          "Income and expense tracking",
          "Customizable categories",
          "Statistics and charts",
          "Local persistence with Room",
          "Dependency injection with Hilt",
          "Clean Architecture structure",
          "State handling with Coroutines and ViewModel (MVVM)",
          "Modern UI using Jetpack Compose",
        ],
      },

    },
    contact: {
      title: "Contact me",
      name: "Full name",
      namePlaceholder: "Your full name",
      email: "Email address",
      emailPlaceholder: "your@email.com",
      message: "Message",
      messagePlaceholder: "Tell me about your project or inquiry...",
      send: "Send message",
      sending: "Sending...",
      success: "Message sent successfully! I'll get in touch with you soon.",
      error: "Error sending message. Please try again.",
      errorConnection: "Error sending message. Check your connection and try again.",
      errorRequired: "Please fill in all fields.",
      errorEmail: "Please enter a valid email address.",
    },
    modal: {
      features: "Features",
      technologies: "Technologies",
    },
    footer: {
      copyright: "© 2025 Rodrigo González",
    },
  },
}

// ===================================
// TRANSLATIONS DATA
// ===================================

const TRANSLATIONS = {
  es: {
    nav: {
      about: "Sobre mí",
      skills: "Habilidades",
      education: "Educación",
      certifications: "Certificaciones",
      projects: "Proyectos",
    },
    hero: {
      greeting: "Hola, soy Rodrigo",
      subtitle: "Ingeniero de Software enfocado en el",
      highlight: "Desarrollo Móvil y Backend",
      location: "de Corrientes, Argentina 🇦🇷",
      contact: "Contacto",
    },
    about: {
      title: "Mas sobre mí",
      paragraph1:
        "Ingeniero de Software especializado en desarrollo móvil Android y backend, con sólida experiencia en la creación de aplicaciones nativas utilizando Kotlin, Jetpack Compose y arquitecturas modernas como Clean Architecture y MVVM. Competente en el desarrollo de APIs REST y WebSockets con Golang, así como en uso de bases de datos. Formación académica en Sistemas de Información complementada con certificaciones técnicas en las principales tecnologías del stack. Adaptable a distintos proyectos y entornos tecnológicos.",
      paragraph2:
        "Hoy en día, me especializo en el desarrollo de aplicaciones móviles, desde el diseño hasta su publicación, aplicando buenas prácticas como Clean Architecture e inyección de dependencias. Me esfuerzo por mantenerme en constante aprendizaje, mejorando mis habilidades y desarrollando mis propios backends, adquiriendo conocimientos en APIs REST, bases de datos, arquitectura y redes, usando para esto Golang.",
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
      project2: {
        title: "Twitter(X) Clone App",
        description:
          "Hecha desde cero con android nativo para la aplicación usando Retrofit, Room, inyección de dependencias y Clean Architecture, también hice el backend con Golang usando MongoDB, JWT y Gorilla Mux.",
        features: [
          "Autenticación de usuarios",
          "Publicación de tweets",
          "Seguimiento de usuarios",
          "API completa en Golang",
        ],
      },
      project3: {
        title: "Investigación sobre Microservicios",
        description:
          "Realicé un proyecto de investigación en el que comparé las arquitecturas monolíticas y de microservicios, desde el diseño, implementación, pruebas de carga y monitorización.",
        features: [
          "Diseño e implementación de arquitectura monolítica y microservicios",
          "Pruebas de carga con JMeter",
          "Monitorización con Prometheus y Grafana",
          "Uso de Docker para contenerización",
          "Comparativas de rendimiento y escalabilidad",
        ],
      },
      project4: {
        title: "Event Manager-En Desarrollo",
        description:
          "Aplicación móvil nativa para Android con arquitectura limpia. Permite crear, editar y gestionar eventos, organizadores, tipos de tickets, validación con códigos QR, notificaciones y mapas. El backend está hecho en Golang, usando GORM, PostgreSQL, Swagger, MinIO y Docker.",
        features: [
          "Gestión completa de eventos y tickets",
          "Generación y validación de QR",
          "Autenticación y autorización con JWT",
          "Almacenamiento de imágenes con MinIO",
          "Notificaciones y ubicación con Google Maps",
          "Sincronización mediante API RESTful",
        ],
      },
      project5: {
        title: "API de Procesamiento de Imágenes",
        description:
          "API REST desarrollada en Golang que permite subir imágenes, almacenarlas en MinIO y aplicar transformaciones como recorte, redimensionamiento, rotación y filtros (escala de grises, sepia, inversión). Procesamiento en tiempo real, con autenticación JWT y base de datos gestionada con GORM.",
        features: [
          "Subida y almacenamiento de imágenes con MinIO",
          "Transformaciones: recorte, redimensionamiento, rotación",
          "Filtros: escala de grises, sepia, inversión",
          "Procesamiento en tiempo real",
          "Autenticación JWT",
          "Base de datos con GORM",
          "Contenedores con Docker",
          "Endpoints RESTful",
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
      certifications: "Certifications",
      projects: "Projects",
    },
    hero: {
      greeting: "Hi, I'm Rodrigo",
      subtitle: "Software Engineer focused on",
      highlight: "Mobile and Backend Development",
      location: "from Corrientes, Argentina 🇦🇷",
      contact: "Contact",
    },
    about: {
      title: "More about me",
      paragraph1:
        "Software Engineer specialized in Android mobile and backend development, with solid experience in building native applications using Kotlin, Jetpack Compose, and modern architectures such as Clean Architecture and MVVM. Skilled in developing REST APIs and WebSockets with Golang, as well as working with databases. Academic background in Information Systems complemented by technical certifications in key technologies of the stack. Adaptable to different projects and technological environments.",
      paragraph2:
        "Today, I specialize in mobile application development, from design to publication, applying good practices like Clean Architecture and dependency injection. I strive to keep learning constantly, improving my skills and developing my own backends, acquiring knowledge in REST APIs, databases, architecture and networks, using Golang for this.",
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
      project2: {
        title: "Twitter(X) Clone App",
        description:
          "Made from scratch with native Android for the application using Retrofit, Room, dependency injection and Clean Architecture, I also made the backend with Golang using MongoDB, JWT and Gorilla Mux.",
        features: ["User authentication", "Tweet publishing", "User following", "Complete API in Golang"],
      },
      project3: {
        title: "Microservices Research",
        description:
          "I conducted a research project in which I compared monolithic and microservices architectures, from design, implementation, load testing and monitoring.",
        features: [
          "Design and implementation of monolithic and microservices architecture",
          "Load testing with JMeter",
          "Monitoring with Prometheus and Grafana",
          "Use of Docker for containerization",
          "Performance and scalability comparisons",
        ],
      },
      project4: {
        title: "Event Manager-In development",
        description:
          "A native Android mobile application with Clean Architecture. It allows creation and management of events, organizers, ticket types, QR validation, notifications, and maps. The backend is built in Golang using GORM, PostgreSQL, Swagger, MinIO and Docker.",
        features: [
          "Full event and ticket management",
          "QR code generation and validation",
          "Authentication and authorization with JWT",
          "Image storage with MinIO",
          "Notifications and location via Google Maps",
          "Synchronization via RESTful API",
        ],
      },
      project5: {
        title: "Image Processing API",
        description:
          "REST API built in Golang that allows uploading images, storing them in MinIO, and applying transformations such as cropping, resizing, rotation, and filters (grayscale, sepia, inversion). Real-time processing with JWT authentication and database management using GORM.",
        features: [
          "Image upload and storage with MinIO",
          "Transformations: crop, resize, rotate",
          "Filters: grayscale, sepia, inversion",
          "Real-time processing",
          "JWT authentication",
          "Database with GORM",
          "Docker containers",
          "RESTful endpoints",
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

import { WorkExperience, Certification, Project, SkillCategory, Language } from "./types";

export const PERSONAL_INFO = {
  name: "Katherine Mosquera Valencia",
  role: "QA Automation Engineer | SQA Analyst",
  location: "Medellín, Antioquia — Colombia",
  email: "valencia.katherine@hotmail.com",
  phone: "+57 300 750 7597",
  linkedin: "https://linkedin.com/in/katherine-mosqueravalencia",
  github: "https://github.com/44004katherine",
  portfolio: "https://44004katherine.github.io/HojaVidaKatherineMosquera/",
  photoUrl: "/images/profile.jpeg",
  summary: "Ingeniera Informática y especialista en QA Automation con más de 13 años de experiencia diseñando soluciones de aseguramiento de calidad para organizaciones del sector financiero y empresarial. Mi enfoque combina automatización avanzada de pruebas, integración continua (CI/CD), metodologías ágiles e Inteligencia Artificial para acelerar la entrega de software, reducir riesgos y garantizar experiencias digitales confiables. Ayudo a los equipos a construir productos de alta calidad mediante arquitecturas de automatización escalables, estrategias de testing eficientes y una cultura de mejora continua orientada a resultados.",
  experienceYears: 13,
  specialties: [
    "Diseño, implementación y ejecución de frameworks de automatización (Selenium, Serenity BDD, Cucumber)",
    "Automatización de pruebas funcionales y de APIs (REST APIs, Postman, Rest Assured)",
    "Integración continua y entrega continua en pipelines de CI/CD (Jenkins, Azure DevOps)",
    "Metodologías ágiles y calidad (Scrum, BDD, Agile Testing, Pruebas de Regresión)",
    "Innovación en QA mediante Inteligencia Artificial Generativa y Prompt Engineering"
  ]
};

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: "exp1",
    company: "TCS Solution Center Sucursal Colombia",
    role: "Analista de Pruebas Automatizadas — QA Automation Engineer",
    period: "Enero 2018 - Actualidad (7+ años)",
    location: "Medellín, Antioquia (Híbrido)",
    contributions: [
      "Diseñé e implementé frameworks de automatización end-to-end con Selenium WebDriver, Serenity BDD y Cucumber/Gherkin, incrementando la cobertura de pruebas automatizadas.",
      "Automaticé pruebas funcionales y de regresión para el proyecto Átomos Financieros Internacionales, reduciendo significativamente el tiempo de ciclo de pruebas y los defectos en producción.",
      "Desarrollé y ejecuté pruebas automatizadas de APIs REST con Postman en proyectos de CyberSeguridad, validando la integridad de servicios críticos en el monitoreo de transacciones.",
      "Integré suites de pruebas automatizadas en pipelines CI/CD con Jenkins y Azure DevOps, habilitando la ejecución continua y reportes automáticos de calidad.",
      "Implementé y ejecuté estrategias de Monitoreo Transaccional de Productos Bancarios, fortaleciendo la detección temprana de fallas en entornos productivos.",
      "Trabaje con equipos multidisciplinarios bajo metodología Scrum para la planificación, ejecución y reporte de pruebas en sprints de entrega continua.",
      "Ayude a optimizar procesos de QA mediante el uso de Inteligencia Artificial Generativa y Prompt Engineering para generación de casos de prueba, documentación técnica y análisis de defectos.",
      "Gestioné la base de datos de defectos y métricas de calidad con SQL, generando reportes de trazabilidad para stakeholders.",
      "Validé flujos críticos sobre AS400."
    ],
    skillsUsed: ["Selenium WebDriver", "Serenity BDD", "Gherkin", "Postman", "Rest Assured", "Jenkins", "Azure DevOps", "SQL", "AS400", "AWS", "IA Generativa", "Prompt Engineering"]
  },
  {
    id: "exp2",
    company: "Carvajal Tecnología y Servicios",
    role: "Analista de Pruebas Funcionales — QA Analyst",
    period: "Marzo 2011 - Diciembre 2017 (6 años 10 meses)",
    location: "Medellín, Antioquia (Presencial)",
    contributions: [
      "Diseñé y ejecuté planes de pruebas funcionales y de regresión para la Actualización del Sistema a Normas Internacionales de Contabilidad e Información Financiera (NIIF), garantizando el cumplimiento regulatorio.",
      "Validé la implementación de temas de ley para Facturación Electrónica y Atención a Pacientes, verificando el correcto comportamiento de los flujos críticos del sistema.",
      "Ejecuté pruebas de Anexos Tributarios, asegurando la precisión en los procesos de liquidación y reporte fiscal de los clientes del sistema.",
      "Elaboré documentación técnica de casos de prueba, scripts y reportes de defectos, mejorando la trazabilidad y la reducción del re-trabajo en los ciclos de desarrollo.",
      "Colaboré activamente con equipos de desarrollo, análisis de sistemas y negocio para la identificación temprana y gestión de defectos, reduciendo el índice de incidentes en producción.",
      "Apoyé procesos de certificación de calidad del software y gestión del cambio en proyectos de transformación tecnológica de gran impacto empresarial."
    ],
    skillsUsed: ["Functional Testing", "Regression Testing", "NIIF Compliance", "Facturación Electrónica", "Gestión de Defectos", "Trazabilidad SQL"]
  }
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    title: "Testing & Automatización",
    icon: "robot_2",
    skills: [
      { name: "Selenium WebDriver", level: 85 },
      { name: "Serenity BDD", level: 82 },
      //{ name: "Cypress", level: 85 },
      { name: "Cucumber / Gherkin", level: 82 },
      { name: "JUnit / TestNG", level: 78 },
      { name: "Functional & Regression Testing", level: 96 }
    ]
  },
  {
    title: "APIs & DevOps",
    icon: "api",
    skills: [
      { name: "Postman", level: 65 },
      { name: "REST APIs", level: 52 },
      { name: "Jenkins Pipelines", level: 65 },
      { name: "Azure DevOps", level: 78 },
      { name: "Git & Versionamiento", level: 70 }
    ]
  },
  {
    title: "Datos & Plataformas",
    icon: "code",
    skills: [
      { name: "SQL (Bases de Datos)", level: 75 },
      { name: "AWS Cloud Infrastructure", level: 30 },
      { name: "AS400 Services", level: 68 },
      { name: "IntelliJ IDEA & VS Code", level: 90 }
    ]
  },
  {
    title: "Metodologías & IA QA",
    icon: "all_inclusive",
    skills: [
      { name: "Scrum & BDD Testing", level: 82 },
      { name: "Agile Testing Methodologies", level: 84 },
      { name: "IA Generativa para Pruebas", level: 68 },
      { name: "Prompt Engineering", level: 76 }
    ]
  }
];

export const EDUCATIONS = [
  {
    title: "Ingeniería Informática",
    institution: "Politécnico Colombiano Jaime Isaza Cadavid",
    period: "Graduada",
    location: "Medellín, Antioquia",
    details: "Enfoque principal en ingeniería del software, diseño de sistemas informáticos, bases de datos y control de calidad."
  },
  {
    title: "Bachiller Académico",
    institution: "Institución Educativa Rafael García Herreros",
    period: "2002",
    location: "Bello, Antioquia",
    details: "Educación de nivel secundaria completa con excelente fundamentación matemática y lógica."
  }
];

export const CERTIFICATIONS: Certification[] = [

   {
    id: "cert1",
    name: "AZ-500: Microsoft Azure Security Technologies",
    issuer: "Microsoft",
    date: "2024"
  },
 {
    id: "cert2",
    name: "Aplicación Marco de Trabajo Scrum en Proyectos de Desarrollo de Software",
    issuer: "SENA - Servicio Nacional de Aprendizaje - 48 Horas",
    date: "2023"
  },

  {
    id: "cert3",
    name: "Design Thinking Professional Certificate (DTPC)",
    issuer: "CertiProf",
    date: "2021"
  },
  {
    id: "cert4",
    name: "Diplomado en Gerencia de Proyectos Ágiles",
    issuer: "Cede Sistemas",
    date: "2021"
  },
  {
    id: "cert5",
    name: "Especialización en Calidad del Software",
    issuer: "SENA - Servicio Nacional de Aprendizaje",
    date: "2017"
  },
  {
    id: "cert6",
    name: "Agile Tester Certification",
    issuer: "Agile Testing Alliance",
    date: "2016"
  },
  {
    id: "cert7",
    name: "Diplomado en Inteligencia de Negocios (Business Intelligence)",
    issuer: "Cede Sistemas - 110 Horas",
    date: "2014"
  },
  {
    id: "cert8",
    name: "Calidad en el Desarrollo del Software",
    issuer: "SENA - 50 Horas",
    date: "2011"
  },
  {
    id: "cert9",
    name: "Atención y Servicio al Cliente",
    issuer: "SENA - 50 Horas",
    date: "2010"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj1",
    title: "Monitor Transaccional de Productos Bancarios - SENTINEL CLOUD",
    description: "Pruebas Funcionales end-to-end con Serenity BDD y Cucumber. Consiguió incrementar la cobertura de regresiones funcionales en más del 70% reduciendo ciclos de ejecución de días.",
    techStack: ["Postman","Serenity BDD", "Cucumber", "Java", "Gherkin", "SQL", "Azure DevOps","IA Generativa", "Prompt Engineering"],
    category: "automation-testing"
  },
  {
    id: "proj2",
    title: "Atomos Bancarios - Validación de Integridad de Reportes Financieros",
    description: "Implementación de pruebas automatizadas para validar la integridad de los archivos yreportes financieros en entornos bancarios para la superintendencia de Bancos.",
    techStack: ["Postman", "Java", "JSON Schema", "Azure DevOps"],
    //githubUrl: "https://github.com/katherinemosquera/financial-api-rest-assured",
    category: "manual-testing"
  },
  {
    id: "proj3",
    title: "Normas NiIF - Validación de Cumplimiento Contable y Tributario",
    description: "Validación de cumplimiento contable y tributario según las normas internacionales en entorno clínico.",
    techStack: ["SQL", "Functional Testing", "Regression Testing"],
    category: "manual-testing"
  }
];

export const LANGUAGES: Language[] = [
  { name: "Español", level: "Nativo", percentage: 100 },
  { name: "Inglés", level: "Nivel Básico (A1) — Actualmente en formación", percentage: 35 }
];

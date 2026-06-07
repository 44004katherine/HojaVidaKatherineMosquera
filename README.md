# Portafolio Profesional - Katherine Mosquera Valencia
## Analista QA Automation Senior

Este proyecto es una aplicación web interactiva de portafolio y currículum vitae de nivel ejecutivo para **Katherine Mosquera Valencia**, optimizado para reclutadores nacionales e internacionales. Ofrece un diseño responsivo, transiciones modernas, un motor interactivo de línea de tiempo laboral, soporte dinámico de modo oscuro/claro y la capacidad técnica de generar y **descargar de forma directa la hoja de vida optimizada en formato PDF**.

---

## 🛠️ Tecnologías Utilizadas

- **React 19 + TypeScript** como núcleo estructural de componentes ágiles de frontend.
- **Vite** como empaquetador ultrarrápido y servidor de desarrollo.
- **Tailwind CSS** para un diseño moderno con un sistema de diseño detallado paso a paso, variables de espaciado y soporte nativo de modo oscuro.
- **jsPDF** para la compilación, generación y descarga automatizada del archivo tipo currículum ejecutivo internacional de forma 100% matemática, sin perder estilos.
- **Lucide React** para un catálogo unificado de iconos corporativos estilizados.

---

## 📂 Estructura del Proyecto

La arquitectura del proyecto sigue estándares óptimos de modularidad para asegurar un mantenimiento de código limpio:

```text
/
├── .env.example          # Plantilla oficial para variables de entorno del sistema.
├── .gitignore            # Rutas ignoradas para control de versiones Git.
├── index.html            # Punto de entrada HTML5 principal con SEO básico.
├── metadata.json         # Metadatos del applet de AI Studio.
├── package.json          # Administración de dependencias, scripts de desarrollo y builds.
├── tsconfig.json         # Directivas de compilación de TypeScript para máxima seguridad de tipos.
├── vite.config.ts        # Configuraciones del servidor de Vite y alias globales de rutas.
└── src/
    ├── main.tsx          # Punto de entrada de renderizado de React en el DOM.
    ├── index.css         # Importación de Tailwind CSS, fuentes remotas de Google Fonts y clases de impresión.
    ├── types.ts          # Definición de tipos de datos de TypeScript para garantizar robustez y consistencia.
    ├── data.ts           # Información centralizada de la hoja de vida (Experiencia, Educación, Habilidades, Certificaciones).
    ├── pdfGenerator.ts   # Módulo matemático personalizado con jsPDF que dibuja estructuralmente el PDF de 2 páginas.
    └── components/       # Componentes visuales autónomos y reutilizables:
        ├── Header.tsx                 # Barra de navegación receptiva con interruptor de modo oscuro.
        ├── Hero.tsx                   # Banner de presentación y llamadas de acción prioritarias.
        ├── About.tsx                  # Resumen ejecutivo y contador de estadísticas clave (+6 años).
        ├── Skills.tsx                 # Contenedores técnicos interactivos de barras progresivas.
        ├── Experience.tsx             # Línea de tiempo interactiva con detalles desplegables.
        ├── EducationCertifications.tsx# Panel dual de formación académica e hitos ISTQB/Scrum.
        ├── Projects.tsx               # Tarjetas con estilo de consola de automatización (Dashboard).
        ├── Languages.tsx              # Sección de perfiles multiculturales con progresión de barras.
        ├── ContactForm.tsx            # Formulario de consultas empresariales con simulación de despacho.
        ├── ScrollReveal.tsx           # Contenedor con IntersectionObserver que maneja los efectos de revelado al hacer scroll.
        ├── WhatsAppFloat.tsx          # Botón flotante para conectar con mensajes preestablecidos.
        └── BackToTop.tsx              # Botón de regreso rápido al header.
```

---

## 🚀 Instrucciones de Despliegue y Ejecución Local

### Prerrequisitos
Asegúrate de contar con **Node.js** (versión 18 o superior) y **pnpm** instalados en tu sistema operativo.

### 1. Instalación de Dependencias
Abre tu terminal favorita en la carpeta raíz del proyecto y ejecuta el siguiente comando para aprovisionar los módulos necesarios:
```bash
pnpm install
```

### 2. Modo Desarrollo (Localhost)
Para iniciar el servidor local con soporte HMR y de rápida interacción, ejecuta:
```bash
pnpm dev
```
El terminal indicará la dirección IP del servidor local, por defecto: `http://localhost:3000`.

### 3. Compilación de Producción (Build)
Para compilar y optimizar la página para su despliegue en entornos de producción:
```bash
pnpm build
```
Esto creará una carpeta llamada `/dist` lista para ser servida por cualquier servidor web estático.

---

## ☁️ Guía de Despliegue en Plataformas Cloud (Estatic)

### 📌 GitHub Pages
1. Aloja tu código en un repositorio público de GitHub.
2. Instala la dependencia de desarrollo `gh-pages` mediante `pnpm add -D gh-pages`.
3. Añade la propiedad `"homepage": "https://<nombre_usuario>.github.io/<nombre_repositorio>"` en tu `package.json`.
4. Agrega los siguientes comandos en la sección de `"scripts"` en tu `package.json`:
   ```json
   "predeploy": "pnpm build",
   "deploy": "gh-pages -d dist"
   ```
5. Ejecuta `pnpm run deploy` para compilar y subir los archivos de forma automática a la rama `gh-pages`.

### 📌 Netlify o Vercel
Ambas plataformas admiten el despliegue automático con un solo clic conectando tu repositorio git:
- **Directorio de compilación (Publish Directory):** `dist`
- **Comando de compilación (Build Command):** `pnpm build`
- **Ruta raíz:** `./` (Por defecto)
- No es necesario establecer variables de entorno adicionales para la visualización del portafolio estándar.

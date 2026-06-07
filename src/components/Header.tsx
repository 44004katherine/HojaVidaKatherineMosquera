import { useState, useEffect } from "react";
import { Hammer, Menu, X, Sun, Moon, Download, GraduationCap } from "lucide-react";

interface HeaderProps {
  onDownloadPdf: () => void;
}

export function Header({ onDownloadPdf }: HeaderProps) {
  const [isThemeDark, setIsThemeDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  // Load theme preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const inheritsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && inheritsDark)) {
      document.documentElement.classList.add("dark");
      setIsThemeDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsThemeDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isThemeDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsThemeDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsThemeDark(true);
    }
  };

  // Track active section for custom indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "perfil", "habilidades", "experiencia", "educacion", "proyectos", "contacto"];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Inicio", id: "inicio" },
    { label: "Perfil", id: "perfil" },
    { label: "Habilidades", id: "habilidades" },
    { label: "Experiencia", id: "experiencia" },
    { label: "Formación", id: "educacion" },
    { label: "Proyectos", id: "proyectos" },
    { label: "Contacto", id: "contacto" }
  ];

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80; // height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="no-print sticky top-0 z-50 w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60 transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-6 h-18 flex items-center justify-between">
        {/* Brand / Logo */}
        <div 
          onClick={() => handleNavClick("inicio")}
          className="flex items-center gap-2 cursor-pointer group"
          id="nav-logo"
        >
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
            <span className="font-mono font-bold text-sm">KM</span>
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-base text-slate-900 dark:text-white leading-tight tracking-tight">
              Katherine Mosquera Valencia
            </span>
            <span className="font-mono text-[10px] text-blue-600 dark:text-blue-400 font-medium tracking-widest uppercase">
              QA Portfolio
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-sans text-sm font-medium transition-all duration-200 relative py-1.5 cursor-pointer ${
                activeSection === item.id
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggler */}
          <button
            onClick={toggleTheme}
            className="p-2 cursor-pointer rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            title={isThemeDark ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
            aria-label="Toggle dark mode"
          >
            {isThemeDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Download PDF Action */}
          <button
            onClick={onDownloadPdf}
            className="hidden sm:flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white px-4 py-2 rounded-lg font-sans text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>DESCARGAR CV</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 lg:hidden rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
            aria-label="Abrir menú"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden w-full border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 px-6 py-4 absolute top-18 left-0 shadow-lg animation-fade-in">
          <nav className="flex flex-col gap-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left font-sans text-sm py-2 font-medium border-b border-slate-100 dark:border-slate-900 px-1 cursor-pointer ${
                  activeSection === item.id
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-slate-600 dark:text-slate-400"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onDownloadPdf();
              }}
              className="mt-2 w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2.5 rounded-lg font-sans text-sm font-semibold transition-colors cursor-pointer shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Descargar Hoja de Vida (PDF)</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

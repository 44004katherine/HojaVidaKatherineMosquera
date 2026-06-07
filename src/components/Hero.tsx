import { Mail, Phone, MapPin, Linkedin, Github, Download, FileText, CheckCircle } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface HeroProps {
  onDownloadPdf: () => void;
}

export function Hero({ onDownloadPdf }: HeroProps) {
  return (
    <section id="inicio" className="py-12 md:py-18 lg:py-24 border-b border-slate-200/50 dark:border-slate-900/50">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Portrait Photography */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group">
            {/* Ambient Background Glow Accent */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 opacity-20 blur-md group-hover:opacity-30 transition-opacity duration-500" />
            
            {/* Frame Wrapper */}
            <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md transform transition-all duration-500 group-hover:scale-[1.01]">
              <img 
                src={PERSONAL_INFO.photoUrl.startsWith('http') ? PERSONAL_INFO.photoUrl : `${(import.meta as any).env.BASE_URL}${PERSONAL_INFO.photoUrl.startsWith('/') ? PERSONAL_INFO.photoUrl.substring(1) : PERSONAL_INFO.photoUrl}`} 
                alt={PERSONAL_INFO.name} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Soft overlay when hovering */}
              <div className="absolute inset-0 bg-slate-950/10 dark:bg-slate-950/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Highlight badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 py-2 px-3 rounded-lg bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border border-slate-200/40 dark:border-slate-800/40 flex items-center justify-between shadow-sm">
                <span className="font-sans text-[11px] md:text-xs font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Disponible para Proyectos
                </span>
                <span className="font-mono text-[10px] text-blue-600 dark:text-blue-400 font-bold">QA SENIOR</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Key Details */}
        <div className="lg:col-span-7 flex flex-col text-center lg:text-left">
          {/* Executive Stamp */}
          <div className="inline-flex self-center lg:self-start items-center gap-1.5 px-3 py-1 bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/50 rounded-full mb-4">
            <CheckCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span className="font-mono text-[11px] text-blue-700 dark:text-blue-300 font-semibold tracking-wider uppercase">
              PORTAFOLIO OFICIAL & CERTIFICADO
            </span>
          </div>

          {/* Candidate Name */}
          <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl text-slate-900 dark:text-white leading-tight tracking-tight">
            {PERSONAL_INFO.name}
          </h1>

          {/* Subtitle / Role Badge */}
          <h2 className="mt-2.5 font-sans font-bold text-xl sm:text-2xl text-blue-600 dark:text-blue-400">
            {PERSONAL_INFO.role}
          </h2>

          {/* Direct Summary snippet for fast scanning */}
          <p className="mt-5 text-slate-600 dark:text-slate-400 font-sans text-sm md:text-base leading-relaxed">
            Especialista en desarrollo de arquitecturas robustas y escalables para automatización de pruebas web, móviles y APIs. Minimizo drásticamente las fugas de errores gracias a estrategias avanzadas de Integración Continua (CI/CD).
          </p>

          {/* Compact Contact Badges */}
          <div className="mt-6 flex flex-wrap gap-y-3.5 gap-x-5 justify-center lg:justify-start">
            <div className="flex items-center gap-1.5 font-sans text-xs md:text-sm text-slate-600 dark:text-slate-400">
              <MapPin className="w-4 h-4 text-slate-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="flex items-center gap-1.5 font-sans text-xs md:text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Mail className="w-4 h-4 text-slate-400" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <a 
              href={`tel:${PERSONAL_INFO.phone}`} 
              className="flex items-center gap-1.5 font-sans text-xs md:text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Phone className="w-4 h-4 text-slate-400" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
          </div>

          {/* Social Links & Main CTA Button Row */}
          <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-900/50 flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
            
            {/* Primary Action Button */}
            <button
              onClick={onDownloadPdf}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 text-white px-7 py-3.5 rounded-lg font-sans font-bold text-sm tracking-wide shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
            >
              <Download className="w-4.5 h-4.5" />
              <span>DESCARGAR HOJA DE VIDA</span>
            </button>

            {/* Social Channels inside high-concept pill wrappers */}
            <div className="flex items-center gap-3">
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 transition-all shadow-2xs"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a 
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-2xs"
                title="GitHub Repositories"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
              <a 
                href="https://katherinemosquera.dev"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 transition-all shadow-2xs"
                title="Personal Web Portfolio"
              >
                <FileText className="w-4.5 h-4.5" />
              </a>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}

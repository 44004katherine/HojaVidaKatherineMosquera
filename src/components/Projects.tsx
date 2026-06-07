import { Terminal } from "lucide-react";
import { PROJECTS } from "../data";
import { ScrollReveal } from "./ScrollReveal";

export function Projects() {
  return (
    <section id="proyectos" className="py-12 md:py-16 border-b border-slate-200/50 dark:border-slate-900/50">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest leading-none">
            REPOSITORIOS & CÓDIGO
          </span>
          <h3 className="mt-2.5 font-sans font-bold text-2xl md:text-3xl text-slate-900 dark:text-white tracking-tight leading-normal">
            Proyectos Destacados
          </h3>
          <p className="mt-2 text-slate-500 dark:text-slate-400 font-sans text-sm">
            Diseño e implementación de plantillas robustas y suites completas de pruebas automatizadas listas para su escalación.
          </p>
        </div>

        {/* 3-Column Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((proj) => (
            <div 
              key={proj.id}
              className="glass-panel rounded-xl overflow-hidden border border-slate-200/55 dark:border-slate-800/55 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              
              {/* Visual simulated Dashboard Header */}
              <div className="p-4 bg-slate-900 text-white font-mono text-[10px] flex items-center justify-between relative overflow-hidden shrink-0">
                {/* Simulated ambient matrix lights */}
                <div className="absolute inset-0 bg-radial-gradient from-blue-500/10 to-transparent opacity-50" />
                
                <div className="flex items-center gap-1.5 relative z-10">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-slate-400 text-[9px] font-bold tracking-widest uppercase">
                    {proj.category === "automation" ? "WEB_AUTOMATION_SUITE" : "API_CONTRACT_TEST"}
                  </span>
                </div>

                <div className="flex items-center gap-1 Relative z-10">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="text-emerald-400 text-[9px] font-bold">BUILD: PASSED</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col">
                <h4 className="font-sans font-bold text-base md:text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {proj.title}
                </h4>

                <p className="mt-3 font-sans text-xs md:text-sm text-slate-550 dark:text-slate-400 leading-relaxed flex-1">
                  {proj.description}
                </p>

                {/* Tech chips wrapper */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-900">
                  <span className="font-sans font-bold text-[10px] text-slate-400 uppercase tracking-widest block mb-2 leading-none">
                    TECNOLOGÍAS CLAVE:
                  </span>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {proj.techStack.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-2 py-0.5 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800 font-mono text-[10px] text-slate-600 dark:text-slate-450 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

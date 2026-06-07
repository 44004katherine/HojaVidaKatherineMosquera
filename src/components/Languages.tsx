import { Languages as LangIcon, ShieldAlert, Sparkles, MessageSquare } from "lucide-react";
import { LANGUAGES } from "../data";
import { ScrollReveal } from "./ScrollReveal";

export function Languages() {
  return (
    <section className="py-12 md:py-16 border-b border-slate-200/50 dark:border-slate-900/50">
      <ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left information Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-blue-100/80 dark:bg-blue-950/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <LangIcon className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest leading-none">
                COMUNICACIÓN GLOBAL
              </span>
            </div>
            
            <h3 className="font-sans font-bold text-2xl md:text-3xl text-slate-900 dark:text-white tracking-tight leading-normal">
              Idiomas & Comunicación
            </h3>
            
            <p className="mt-3 font-sans text-sm md:text-base text-slate-550 dark:text-slate-400 leading-relaxed">
              La automatización requiere trabajo en equipo en horizontes globales. Mi perfil me capacita para integrarme sin problemas en escuadrones ágiles y liderar auditorías de calidad.
            </p>
          </div>

          {/* Right progressive bars Column */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-5">
            {LANGUAGES.map((lang, idx) => (
              <div 
                key={idx} 
                className="glass-panel p-5 rounded-xl border border-slate-200/40 dark:border-slate-800/40 bg-slate-50/10 dark:bg-slate-900/10"
              >
                {/* Meta details */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                    <span className="font-sans font-bold text-sm md:text-base text-slate-950 dark:text-white leading-none">
                      {lang.name}
                    </span>
                  </div>
                  
                  <span className="font-sans font-semibold text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded-full border border-blue-100/50 dark:border-blue-900/40">
                    {lang.level}
                  </span>
                </div>

                {/* Progressive slim track bar representation */}
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-900/60 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${lang.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
export default Languages;

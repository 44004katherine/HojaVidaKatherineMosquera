import { Award, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "../data";
import { ScrollReveal } from "./ScrollReveal";

export function About() {
  return (
    <section id="perfil" className="py-12 md:py-16 border-b border-slate-200/50 dark:border-slate-900/50">
      <ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Block: Core Stats Summary Card */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="glass-panel p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 flex flex-col items-center text-center justify-center bg-slate-50/50 dark:bg-slate-900/50 h-full min-h-[220px]">
              <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="font-sans font-bold text-5xl text-slate-900 dark:text-white leading-none">
                +{PERSONAL_INFO.experienceYears}
              </span>
              <span className="mt-2.5 font-sans font-semibold text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-normal">
                AÑOS DE EXPERIENCIA QA
              </span>
              <p className="mt-2 text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                Con conocimientos en automatizaciones y pruebas funcionales de alta complejidad y aseguramiento de calidad.
              </p>
            </div>
          </div>

          {/* Right Block: Content Summary and Specialties list */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <h3 className="font-sans font-bold text-xs text-blue-600 dark:text-blue-400 tracking-widest uppercase mb-2 leading-none">
              Resumen Profesional
            </h3>
            <h4 className="font-sans font-bold text-2xl md:text-3xl text-slate-900 dark:text-white mb-5 tracking-tight leading-normal">
              Transformando la calidad del software mediante automatización, innovación e inteligencia artificial..
            </h4>
            
            <p className="font-sans text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-6">
              {PERSONAL_INFO.summary}
            </p>

            {/* Specialties Title */}
            <span className="font-sans font-bold text-sm text-slate-900 dark:text-white mb-4 block">
              Conocimientos Principales:
            </span>

            {/* Specialty Checkboxes Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {PERSONAL_INFO.specialties.map((spec, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-2.5 group"
                >
                  <CheckCircle2 className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {spec}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}

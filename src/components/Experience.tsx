import { useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Star } from "lucide-react";
import { WORK_EXPERIENCES } from "../data";
import { ScrollReveal } from "./ScrollReveal";

export function Experience() {
  // Store expanded state for index. Default to expand the first item (Globant)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    if (expandedIndex === idx) {
      setExpandedIndex(null); // collapse if already open
    } else {
      setExpandedIndex(idx);
    }
  };

  return (
    <section id="experiencia" className="py-12 md:py-16 border-b border-slate-200/50 dark:border-slate-900/50">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest leading-none">
            RECORRIDO PROFESIONAL
          </span>
          <h3 className="mt-2.5 font-sans font-bold text-2xl md:text-3xl text-slate-900 dark:text-white tracking-tight leading-normal">
            Experiencia Laboral
          </h3>
          <p className="mt-2 text-slate-500 dark:text-slate-400 font-sans text-sm">
            Presione sobre cada rol en la línea de tiempo interactiva para desplegar los logros y contribuciones detallados.
          </p>
        </div>

        {/* Timeline main tree */}
        <div className="relative max-w-3xl mx-auto pl-6 md:pl-10">
          {/* Vertical central timeline line */}
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-[2px] bg-slate-200 dark:bg-slate-800" />

          {/* Interactive job cards list */}
          <div className="flex flex-col gap-6">
            {WORK_EXPERIENCES.map((job, idx) => {
              const isExpanded = expandedIndex === idx;

              return (
                <div 
                  key={job.id} 
                  className="relative group cursor-pointer"
                  onClick={() => toggleExpand(idx)}
                >
                  {/* Circle timeline bullet node */}
                  <div className={`absolute -left-[23px] md:-left-[33px] top-5.5 w-4.5 h-4.5 rounded-full border-2 bg-white dark:bg-slate-950 transition-colors duration-300 flex items-center justify-center ${
                    isExpanded 
                      ? "border-blue-600 dark:border-blue-400" 
                      : "border-slate-300 dark:border-slate-700 group-hover:border-blue-400 dark:group-hover:border-blue-500"
                  }`}>
                    {isExpanded && (
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                    )}
                  </div>

                  {/* Main Work Experience Card Box */}
                  <div className={`glass-panel p-5 md:p-6 rounded-xl border transition-all duration-300 ${
                    isExpanded 
                      ? "border-blue-600/30 bg-blue-50/10 dark:bg-blue-950/5 shadow-xs" 
                      : "border-slate-200/50 dark:border-slate-800/50 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs"
                  }`}>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex flex-col">
                        <span className="font-sans font-bold text-base md:text-lg text-slate-900 dark:text-white flex items-center gap-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {job.role}
                        </span>
                        
                        <div className="mt-1 flex flex-wrap gap-y-1 gap-x-4 items-center">
                          <span className="font-sans font-semibold text-xs text-blue-700 dark:text-blue-300 tracking-wide">
                            {job.company}
                          </span>
                          <span className="hidden md:inline text-slate-300 dark:text-slate-800">•</span>
                          <span className="font-sans text-xs text-slate-500 dark:text-slate-450 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 shrink-0" />
                            {job.period}
                          </span>
                          <span className="hidden md:inline text-slate-300 dark:text-slate-800">•</span>
                          <span className="font-sans text-xs text-slate-500 dark:text-slate-450 flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 shrink-0" />
                            {job.location}
                          </span>
                        </div>
                      </div>

                      {/* Expand Toggle icon */}
                      <div className="p-1.5 rounded-lg bg-slate-100/60 dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0">
                        {isExpanded ? <ChevronUp className="w-4.5 h-4.5" /> : <ChevronDown className="w-4.5 h-4.5" />}
                      </div>
                    </div>

                    {/* Collapsible Contributions content block */}
                    {isExpanded && (
                      <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-900 animation-slide-down">
                        <span className="font-sans font-bold text-xs text-slate-900 dark:text-white uppercase tracking-wider block mb-2.5">
                          Logros Principales y Aportes:
                        </span>

                        <ul className="flex flex-col gap-2.5 pl-1">
                          {job.contributions.map((con, cIdx) => (
                            <li 
                              key={cIdx} 
                              className="font-sans text-xs md:text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2.5"
                            >
                              <Star className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5 fill-blue-600/10 dark:fill-blue-400/10" />
                              <span className="leading-relaxed">{con}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech tags footer */}
                        <div className="mt-5 pt-4 border-t border-slate-100/50 dark:border-slate-900/40">
                          <span className="font-sans font-semibold text-[11px] text-slate-500 dark:text-slate-450 uppercase tracking-wider block mb-2">
                            Tecnologías Utilizadas:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {job.skillsUsed.map((skill, sIdx) => (
                              <span 
                                key={sIdx} 
                                className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900/80 border border-slate-200/40 dark:border-slate-800 font-mono text-[10px] md:text-xs text-slate-700 dark:text-slate-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

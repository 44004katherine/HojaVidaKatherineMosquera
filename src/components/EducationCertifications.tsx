import { GraduationCap, Award, Calendar, BookOpen, ExternalLink, ShieldAlert } from "lucide-react";
import { EDUCATIONS, CERTIFICATIONS } from "../data";
import { ScrollReveal } from "./ScrollReveal";

export function EducationCertifications() {
  return (
    <section id="educacion" className="py-12 md:py-16 border-b border-slate-200/50 dark:border-slate-900/50">
      <ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          
          {/* Left Column: Education */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-100/80 dark:bg-blue-950/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <GraduationCap className="w-5.5 h-5.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest leading-none">
                  FORMACIÓN ACADÉMICA
                </span>
                <h4 className="font-sans font-bold text-lg md:text-xl text-slate-900 dark:text-white tracking-tight mt-0.5">
                  Educación Superior
                </h4>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {EDUCATIONS.map((edu, idx) => (
                <div 
                  key={idx} 
                  className="glass-panel p-5 rounded-xl border border-slate-200/40 dark:border-slate-800/40 hover:border-slate-300 dark:hover:border-slate-700 transition-all bg-slate-50/10 dark:bg-slate-900/10"
                >
                  <div className="flex justify-between items-start gap-4">
                    <h5 className="font-sans font-bold text-sm md:text-base text-slate-900 dark:text-white leading-snug">
                      {edu.title}
                    </h5>
                    <span className="px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 font-mono text-[10px] font-semibold text-blue-600 dark:text-blue-400 shrink-0">
                      {edu.period}
                    </span>
                  </div>

                  <span className="font-sans text-xs font-semibold text-slate-700 dark:text-slate-350 block mt-1">
                    {edu.institution} — <span className="text-slate-400 font-normal">{edu.location}</span>
                  </span>

                  <p className="mt-3 font-sans text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-900/40 pt-2.5">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-100/80 dark:bg-blue-950/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Award className="w-5.5 h-5.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest leading-none">
                  VALIDACIÓN PROFESIONAL
                </span>
                <h4 className="font-sans font-bold text-lg md:text-xl text-slate-900 dark:text-white tracking-tight mt-0.5">
                  Certificaciones Clave
                </h4>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div 
                  key={cert.id}
                  className="glass-panel p-4 md:p-5 rounded-xl border border-slate-200/45 dark:border-slate-800/45 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all flex items-start gap-4"
                >
                  {/* Badge visual wrapper */}
                  <div className="w-9 h-9 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/30 dark:border-slate-850 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-slate-400 dark:text-slate-500" />
                  </div>

                  <div className="flex flex-col flex-1">
                    <div className="flex justify-between items-start gap-2.5">
                      <h5 className="font-sans font-bold text-sm text-slate-900 dark:text-white leading-snug">
                        {cert.name}
                      </h5>
                      <span className="font-mono text-[10px] text-slate-400 shrink-0 font-medium">
                        {cert.date}
                      </span>
                    </div>

                    <span className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal">
                      {cert.issuer}
                    </span>

                    {/* Credential ID tag */}
                    {cert.credentialId && (
                      <div className="mt-2.5 inline-flex self-start items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50">
                        <span className="font-mono text-[9px] text-slate-500 dark:text-slate-400">
                          Credencial: <span className="font-semibold text-slate-700 dark:text-slate-350">{cert.credentialId}</span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}

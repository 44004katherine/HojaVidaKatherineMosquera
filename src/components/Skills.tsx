import { Cpu, Link, Code2, Infinity as InfinityIcon } from "lucide-react";
import { TECHNICAL_SKILLS } from "../data";
import { ScrollReveal } from "./ScrollReveal";

export function Skills() {
  // Map index or category title to custom icon components
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "robot_2":
        return <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case "api":
        return <Link className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case "code":
        return <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case "all_inclusive":
        return <InfinityIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      default:
        return <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="habilidades" className="py-12 md:py-16 border-b border-slate-200/50 dark:border-slate-900/50">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest leading-none">
            HABILIDADES TÉCNICAS
          </span>
          <h3 className="mt-2.5 font-sans font-bold text-2xl md:text-3xl text-slate-900 dark:text-white tracking-tight leading-normal">
            Stack para Aseguramiento de Calidad
          </h3>
          <p className="mt-2 text-slate-500 dark:text-slate-400 font-sans text-sm">
            Herramientas y lenguajes clave dominados para orquestar pruebas automatizadas de nivel empresarial.
          </p>
        </div>

        {/* 2-Column Responsive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TECHNICAL_SKILLS.map((category, catIdx) => (
            <div 
              key={catIdx} 
              className="glass-panel p-6 rounded-xl border border-slate-200/40 dark:border-slate-800/40 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2.5 mb-5 PB-3 border-b border-slate-100 dark:border-slate-900/60">
                <div className="w-9 h-9 rounded-lg bg-blue-100/60 dark:bg-blue-950/40 flex items-center justify-center">
                  {getCategoryIcon(category.icon)}
                </div>
                <h4 className="font-sans font-bold text-base text-slate-900 dark:text-white">
                  {category.title}
                </h4>
              </div>

              {/* Skill Bars with interactive styling on hover */}
              <div className="flex flex-col gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="group/item">
                    {/* Metadata Header */}
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-sans font-medium text-xs md:text-sm text-slate-700 dark:text-slate-300 group-hover/item:text-slate-950 dark:group-hover/item:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400 font-bold">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progressive Bar */}
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-900/60 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

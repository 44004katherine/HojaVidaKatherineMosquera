import { Linkedin, Github, Mail, Globe } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export function Footer() {
  const currentYear = new Date().getFullYear(); // Dynamic or hardcoded, it evaluates perfectly

  return (
    <footer className="no-print mt-14 bg-slate-900 border-t border-slate-800 text-slate-400 py-12 px-6">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left column details */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1.5">
          <span className="font-sans font-bold text-base text-white tracking-tight">
            {PERSONAL_INFO.name}
          </span>
          <span className="font-sans text-xs text-slate-500 font-medium">
            {PERSONAL_INFO.role} • Especialista en Aseguramiento de Calidad Continua
          </span>
        </div>

        {/* Dynamic copyright info */}
        <div className="font-sans text-xs text-slate-500 text-center order-last md:order-none">
          © {currentYear} Katherine Mosquera Valencia. Todos los derechos reservados.
        </div>

        {/* Right portal links */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-lg bg-slate-950/60 hover:bg-blue-600 hover:text-white border border-slate-800 transition-all text-slate-400"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-lg bg-slate-950/60 hover:bg-slate-800 hover:text-white border border-slate-800 transition-all text-slate-400"
            title="GitHub Portfolio"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2.5 rounded-lg bg-slate-950/60 hover:bg-blue-600 hover:text-white border border-slate-800 transition-all text-slate-400"
            title="Contact Mail"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}
export default Footer;

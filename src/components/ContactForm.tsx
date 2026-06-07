import { useState, FormEvent, ChangeEvent } from "react";
import { Mail, Send, CheckCircle, Sparkles, Loader } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { PERSONAL_INFO } from "../data";

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.nombre.trim() || !formData.correo.trim() || !formData.mensaje.trim()) {
      setStatus("error");
      setErrorMessage("Por favor, completa todos los campos del formulario.");
      return;
    }

    setStatus("submitting");

    // Simulate sending form dispatch with an artificial timeout
    setTimeout(() => {
      setStatus("success");
      setFormData({
        nombre: "",
        correo: "",
        mensaje: ""
      });
    }, 1800);
  };

  return (
    <section id="contacto" className="py-12 md:py-16 border-b border-rose-200/0">
      <ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left instructions portal block */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 leading-none">
                <div className="w-9 h-9 rounded-lg bg-blue-100/80 dark:bg-blue-950/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                  CONTACTO DIRECTO
                </span>
              </div>
              
              <h3 className="font-sans font-bold text-2xl md:text-3xl text-slate-900 dark:text-white tracking-tight leading-normal">
                Póngase en Contacto
              </h3>
              
              <p className="mt-4 font-sans text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                ¿Busca un perfil con conocimientos para liderar pruebas funcionales y automatización de sus aplicaciones? No dude en escribirme. Completando el formulario puedo recibir sus solicitudes directamente.
              </p>
            </div>

            {/* Direct details inside an elegant executive panel */}
            <div className="mt-8 p-5 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-slate-50 dark:bg-slate-900/40 flex flex-col gap-4">
              <span className="font-sans font-bold text-xs text-slate-550 dark:text-slate-400 uppercase tracking-widest block leading-none">
                Canales Corporativos:
              </span>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-sans font-bold text-slate-800 dark:text-white w-20">Correo:</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs md:text-sm font-sans text-blue-600 dark:text-blue-400 hover:underline">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-sans font-bold text-slate-800 dark:text-white w-20">Ubicación:</span>
                  <span className="text-xs md:text-sm font-sans text-slate-600 dark:text-slate-400">
                    Medellín-Antioquia, Colombia
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right form container block */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 md:p-8 rounded-xl border border-slate-200/60 dark:border-slate-800/60 bg-white/50 dark:bg-slate-950/40 relative h-full flex flex-col justify-center">
              
              {status === "success" ? (
                <div className="text-center py-8 animation-fade-in flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-sans font-bold text-xl text-slate-900 dark:text-white mb-2 leading-tight">
                    ¡Mensaje Despachado con Éxito!
                  </h4>
                  <p className="font-sans text-xs md:text-sm text-slate-500 dark:text-slate-400 max-w-sm mb-6 leading-relaxed">
                    Gracias por escribirme. Su solicitud ha sido procesada de manera óptima y me pondré en contacto a la brevedad.
                  </p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="px-5 py-2.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white text-xs md:text-sm font-bold transition-colors cursor-pointer"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Name Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="nombre" className="font-sans font-semibold text-xs text-slate-755 dark:text-slate-350">
                      Nombre Completo
                    </label>
                    <input 
                      type="text" 
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Ej. Katherine Mosquera"
                      required
                      disabled={status === "submitting"}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="correo" className="font-sans font-semibold text-xs text-slate-755 dark:text-slate-350">
                      Correo Electrónico
                    </label>
                    <input 
                      type="email" 
                      id="correo"
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      placeholder="Ej. katherine@empresa.com"
                      required
                      disabled={status === "submitting"}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 dark:focus:focus:border-blue-400 transition-colors"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="mensaje" className="font-sans font-semibold text-xs text-slate-755 dark:text-slate-350">
                      Su Mensaje
                    </label>
                    <textarea 
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Describe los requerimientos de tu proyecto o vacancia..."
                      required
                      rows={4}
                      disabled={status === "submitting"}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Error Indicator message if occurs */}
                  {status === "error" && (
                    <div className="p-3.5 bg-red-50 dark:bg-red-950/30 border border-red-200/50 dark:border-red-900/50 rounded-lg text-xs text-red-650 dark:text-red-400 font-sans leading-normal">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="mt-2 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-white text-white dark:text-slate-950 dark:hover:bg-slate-100 py-3.5 rounded-lg font-sans font-bold text-sm tracking-wide transition-all shadow-sm cursor-pointer disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader className="w-4 h-4 animate-spin shrink-0" />
                        <span>PROCESANDO DISPACHO...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 shrink-0" />
                        <span>ENVIAR MENSAJE DE CONSULTA</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}

import { MessageSquareCode } from "lucide-react";

export function WhatsAppFloat() {
  const phoneNumber = "573007507597"; // clean colombian code phone format
  const precomposedText = "Hola Katherine, vi tu portafolio oficial de QA Automation y me gustaría conversar sobre una vacante/proyecto.";
  const encodedText = encodeURIComponent(precomposedText);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="no-print fixed bottom-6 right-6 z-40 p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center group"
      title="Escríbeme por WhatsApp"
      aria-label="Escríbeme por WhatsApp"
    >
      <MessageSquareCode className="w-6 h-6 animate-pulse" />
      
      {/* Floating tooltip label */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-[200px] group-hover:ml-2.5 transition-all duration-350 ease-out font-sans text-xs font-bold whitespace-nowrap leading-none align-middle">
        Consultar por WhatsApp
      </span>
    </a>
  );
}
export default WhatsAppFloat;

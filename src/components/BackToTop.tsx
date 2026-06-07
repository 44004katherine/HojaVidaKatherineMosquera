import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      className="no-print fixed bottom-24 right-6 z-40 p-3.5 rounded-full bg-slate-900/90 dark:bg-slate-50/90 hover:bg-blue-600 dark:hover:bg-blue-500 text-white dark:text-slate-950 hover:text-white dark:hover:text-white shadow-md border border-slate-250 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex items-center justify-center animate-fade-in"
      title="Volver al inicio"
      aria-label="Volver al inicio"
    >
      <ArrowUp className="w-4.5 h-4.5" />
    </button>
  );
}
export default BackToTop;

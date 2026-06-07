import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { EducationCertifications } from "./components/EducationCertifications";
import { Projects } from "./components/Projects";
import { Languages } from "./components/Languages";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { BackToTop } from "./components/BackToTop";
import { generatePDF } from "./pdfGenerator";

export default function App() {
  const handleDownloadPdf = () => {
    generatePDF();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Navigation Header */}
      <Header onDownloadPdf={handleDownloadPdf} />

      {/* Main Core Document Container */}
      <main className="max-w-[1240px] mx-auto px-6 flex flex-col gap-1 w-full">
        {/* Hero Banner Section */}
        <Hero onDownloadPdf={handleDownloadPdf} />

        {/* Profile Summary & Stats */}
        <About />

        {/* Technical Competencies Progress Section */}
        <Skills />

        {/* Interactive Experience Timeline */}
        <Experience />

        {/* Dual Academic Track Profile */}
        <EducationCertifications />

        {/* Practical/Code Repositories block */}
        <Projects />

        {/* Multilingual progressive skills representation */}
        <Languages />

        {/* Business Consultation Portal */}
        <ContactForm />
      </main>

      {/* Structured Footer */}
      <Footer />

      {/* Floating Action Elements */}
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
}

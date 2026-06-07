import { jsPDF } from "jspdf";
import { PERSONAL_INFO, WORK_EXPERIENCES, TECHNICAL_SKILLS, EDUCATIONS, CERTIFICATIONS, LANGUAGES } from "./data";

export function generatePDF() {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "letter",
  });

  // US Letter size: 215.9mm x 279.4mm
  // Left Column block background width: 72mm
  // Right Column content width: 78mm to 201mm (width 123mm)

  // Configure Colors - Professional APA style & high contrast
  const navyColor = { r: 15, g: 23, b: 42 }; // #0F172A
  const blueAccentColor = { r: 37, g: 99, b: 235 }; // #2563EB
  const textDarkColor = { r: 30, g: 41, b: 59 }; // #1E293B
  const textMutedColor = { r: 100, g: 116, b: 139 }; // #64748B
  const bgLightColor = { r: 248, g: 250, b: 252 }; // #F8FAFC

  // Page 1 Layout
  drawResumePage(1);

  // Add Page 2
  doc.addPage();
  drawResumePage(2);

  // Save the PDF
  doc.save("CV_Katherine_Mosquera_Valencia.pdf");

  function drawResumePage(pageNum: number) {
    if (pageNum === 1) {
      // Background Accent on Left Column
      doc.setFillColor(bgLightColor.r, bgLightColor.g, bgLightColor.b);
      doc.rect(0, 0, 72, 279.4, "F");

      // Vertical separator line
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.5);
      doc.line(72, 0, 72, 279.4);

      // --- LEFT COLUMN (Page 1) ---
      let leftY = 16;

      // Profile Badge
      doc.setFillColor(navyColor.r, navyColor.g, navyColor.b);
      doc.roundedRect(12, leftY, 48, 8, 1, 1, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(8.5);
      doc.text("QA AUTOMATION", 36, leftY + 5.2, { align: "center" });

      leftY += 15;

      // Contact Title
      doc.setTextColor(navyColor.r, navyColor.g, navyColor.b);
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(11);
      doc.text("CONTACTO", 12, leftY);
      leftY += 2;
      doc.setDrawColor(blueAccentColor.r, blueAccentColor.g, blueAccentColor.b);
      doc.setLineWidth(0.8);
      doc.line(12, leftY, 27, leftY);
      leftY += 6;

      // Contact Details
      doc.setFont("Helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(textDarkColor.r, textDarkColor.g, textDarkColor.b);

      const contacts = [
        { label: "Email:", val: PERSONAL_INFO.email },
        { label: "Teléfono:", val: PERSONAL_INFO.phone },
        { label: "Ubicación:", val: PERSONAL_INFO.location },
        { label: "GitHub:", val: "github.com/katherinemosquera" },
        { label: "LinkedIn:", val: "linkedin.com/in/katherinemosquera" }
      ];

      contacts.forEach(c => {
        doc.setFont("Helvetica", "bold");
        doc.text(c.label, 12, leftY);
        leftY += 3.8;
        doc.setFont("Helvetica", "normal");
        doc.text(c.val, 12, leftY);
        leftY += 5.5;
      });

      leftY += 3;

      // Technical Skills Area
      doc.setTextColor(navyColor.r, navyColor.g, navyColor.b);
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(11);
      doc.text("HERRAMIENTAS", 12, leftY);
      leftY += 2;
      doc.setDrawColor(blueAccentColor.r, blueAccentColor.g, blueAccentColor.b);
      doc.setLineWidth(0.8);
      doc.line(12, leftY, 27, leftY);
      leftY += 6;

      TECHNICAL_SKILLS.forEach(category => {
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(8.5);
        doc.setTextColor(navyColor.r, navyColor.g, navyColor.b);
        doc.text(category.title.toUpperCase(), 12, leftY);
        leftY += 4.5;

        category.skills.forEach(skill => {
          doc.setFont("Helvetica", "normal");
          doc.setFontSize(7.5);
          doc.setTextColor(textDarkColor.r, textDarkColor.g, textDarkColor.b);
          doc.text(`• ${skill.name}`, 12, leftY);
          
          // Move progress bar to start at x=52 to completely avoid overlaps with long text
          doc.setFillColor(226, 232, 240);
          doc.rect(52, leftY - 1.8, 12, 1.2, "F");
          doc.setFillColor(blueAccentColor.r, blueAccentColor.g, blueAccentColor.b);
          doc.rect(52, leftY - 1.8, (12 * skill.level) / 100, 1.2, "F");
          
          leftY += 3.8;
        });
        leftY += 2;
      });


      // --- RIGHT COLUMN (Page 1) ---
      let rightY = 16;

      // Candidate Name
      doc.setTextColor(navyColor.r, navyColor.g, navyColor.b);
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(22);
      doc.text(PERSONAL_INFO.name.toUpperCase(), 78, rightY);
      rightY += 7;

      // Primary Title
      doc.setTextColor(blueAccentColor.r, blueAccentColor.g, blueAccentColor.b);
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(13);
      doc.text(PERSONAL_INFO.role, 78, rightY);
      rightY += 10;

      // Profile Summary
      doc.setTextColor(navyColor.r, navyColor.g, navyColor.b);
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(11);
      doc.text("RESUMEN PROFESIONAL", 78, rightY);
      rightY += 2;
      doc.setDrawColor(blueAccentColor.r, blueAccentColor.g, blueAccentColor.b);
      doc.setLineWidth(0.8);
      doc.line(78, rightY, 93, rightY);
      rightY += 5;

      doc.setFont("Helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(textDarkColor.r, textDarkColor.g, textDarkColor.b);
      const summaryText = PERSONAL_INFO.summary;
      const summaryLines = doc.splitTextToSize(summaryText, 123);
      doc.text(summaryLines, 78, rightY);
      rightY += summaryLines.length * 4.2 + 6;

      // Work Experience Header
      doc.setTextColor(navyColor.r, navyColor.g, navyColor.b);
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(11);
      doc.text("EXPERIENCIA LABORAL", 78, rightY);
      rightY += 2;
      doc.setDrawColor(blueAccentColor.r, blueAccentColor.g, blueAccentColor.b);
      doc.setLineWidth(0.8);
      doc.line(78, rightY, 93, rightY);
      rightY += 6;

      // Job 1 (TCS)
      const job1 = WORK_EXPERIENCES[0];
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(10.5);
      doc.setTextColor(navyColor.r, navyColor.g, navyColor.b);
      const companyLines1 = doc.splitTextToSize(job1.company.toUpperCase(), 121);
      doc.text(companyLines1, 78, rightY);
      rightY += companyLines1.length * 4.5;
      
      doc.setFont("Helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(textMutedColor.r, textMutedColor.g, textMutedColor.b);
      doc.text(`${job1.period} | ${job1.location}`, 78, rightY);
      rightY += 4.5;

      doc.setFont("Helvetica", "italic");
      doc.setFontSize(9.5);
      doc.setTextColor(blueAccentColor.r, blueAccentColor.g, blueAccentColor.b);
      doc.text(job1.role, 78, rightY);
      rightY += 5.5;

      doc.setFont("Helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(textDarkColor.r, textDarkColor.g, textDarkColor.b);
      
      job1.contributions.forEach(contrib => {
        const lines = doc.splitTextToSize(`• ${contrib}`, 121);
        doc.text(lines, 79, rightY);
        rightY += lines.length * 3.8;
      });

    } else if (pageNum === 2) {
      // Page 2 Background Accent on Left Column
      doc.setFillColor(bgLightColor.r, bgLightColor.g, bgLightColor.b);
      doc.rect(0, 0, 72, 279.4, "F");

      // Vertical separator line
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.5);
      doc.line(72, 0, 72, 279.4);

      // --- LEFT COLUMN (Page 2) ---
      let leftY = 16;

      // Languages Section
      doc.setTextColor(navyColor.r, navyColor.g, navyColor.b);
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(11);
      doc.text("IDIOMAS", 12, leftY);
      leftY += 2;
      doc.setDrawColor(blueAccentColor.r, blueAccentColor.g, blueAccentColor.b);
      doc.setLineWidth(0.8);
      doc.line(12, leftY, 27, leftY);
      leftY += 6;

      LANGUAGES.forEach(lang => {
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(9);
        doc.setTextColor(textDarkColor.r, textDarkColor.g, textDarkColor.b);
        doc.text(lang.name, 12, leftY);
        leftY += 3.8;

        doc.setFont("Helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(textMutedColor.r, textMutedColor.g, textMutedColor.b);
        doc.text(lang.level, 12, leftY);
        leftY += 4.5;

        // Progress bar for language
        doc.setFillColor(226, 232, 240);
        doc.rect(12, leftY - 1.5, 48, 1.5, "F");
        doc.setFillColor(blueAccentColor.r, blueAccentColor.g, blueAccentColor.b);
        doc.rect(12, leftY - 1.5, (48 * lang.percentage) / 100, 1.5, "F");
        leftY += 7;
      });

      leftY += 5;

      // Frameworks Summary Logo/Badge block
      doc.setFillColor(241, 245, 249);
      doc.roundedRect(12, leftY, 48, 24, 1.5, 1.5, "F");
      doc.setTextColor(navyColor.r, navyColor.g, navyColor.b);
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(8);
      doc.text("INTEGRIDAD QA", 36, leftY + 5, { align: "center" });
      doc.setFont("Helvetica", "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(textMutedColor.r, textMutedColor.g, textMutedColor.b);
      doc.text("Código Limpio", 36, leftY + 11, { align: "center" });
      doc.text("Frameworks POM", 36, leftY + 15, { align: "center" });
      doc.text("CI/CD Integrado", 36, leftY + 19, { align: "center" });


      // --- RIGHT COLUMN (Page 2) ---
      let rightY = 16;

      // Job 2 (Carvajal)
      const job2 = WORK_EXPERIENCES[1];
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(10.5);
      doc.setTextColor(navyColor.r, navyColor.g, navyColor.b);
      const companyLines2 = doc.splitTextToSize(job2.company.toUpperCase(), 121);
      doc.text(companyLines2, 78, rightY);
      rightY += companyLines2.length * 4.5;
      
      doc.setFont("Helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(textMutedColor.r, textMutedColor.g, textMutedColor.b);
      doc.text(`${job2.period} | ${job2.location}`, 78, rightY);
      rightY += 4.5;

      doc.setFont("Helvetica", "italic");
      doc.setFontSize(9.5);
      doc.setTextColor(blueAccentColor.r, blueAccentColor.g, blueAccentColor.b);
      doc.text(job2.role, 78, rightY);
      rightY += 5.5;

      doc.setFont("Helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(textDarkColor.r, textDarkColor.g, textDarkColor.b);
      
      job2.contributions.forEach(contrib => {
        const lines = doc.splitTextToSize(`• ${contrib}`, 121);
        doc.text(lines, 79, rightY);
        rightY += lines.length * 3.8;
      });
      rightY += 8;

      // Education Section
      doc.setTextColor(navyColor.r, navyColor.g, navyColor.b);
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(11);
      doc.text("EDUCACIÓN", 78, rightY);
      rightY += 2;
      doc.setDrawColor(blueAccentColor.r, blueAccentColor.g, blueAccentColor.b);
      doc.setLineWidth(0.8);
      doc.line(78, rightY, 93, rightY);
      rightY += 6;

      EDUCATIONS.forEach(edu => {
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(navyColor.r, navyColor.g, navyColor.b);
        doc.text(edu.title, 78, rightY);
        
        doc.setFont("Helvetica", "normal");
        doc.setFontSize(8.5);
        doc.setTextColor(textMutedColor.r, textMutedColor.g, textMutedColor.b);
        doc.text(edu.period, 201, rightY, { align: "right" });
        rightY += 4.5;

        doc.setFont("Helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(textDarkColor.r, textDarkColor.g, textDarkColor.b);
        doc.text(`${edu.institution} | ${edu.location}`, 78, rightY);
        rightY += 4.2;

        doc.setFont("Helvetica", "normal");
        doc.setFontSize(8.5);
        doc.setTextColor(textMutedColor.r, textMutedColor.g, textMutedColor.b);
        const detailLines = doc.splitTextToSize(edu.details, 121);
        doc.text(detailLines, 78, rightY);
        rightY += detailLines.length * 3.8 + 4;
      });

      rightY += 4;

      // Certifications Section
      doc.setTextColor(navyColor.r, navyColor.g, navyColor.b);
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(11);
      doc.text("CERTIFICACIONES CLAVE", 78, rightY);
      rightY += 2;
      doc.setDrawColor(blueAccentColor.r, blueAccentColor.g, blueAccentColor.b);
      doc.setLineWidth(0.8);
      doc.line(78, rightY, 93, rightY);
      rightY += 6;

      CERTIFICATIONS.forEach(cert => {
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(9.5);
        doc.setTextColor(textDarkColor.r, textDarkColor.g, textDarkColor.b);
        doc.text(cert.name, 78, rightY);
        
        doc.setFont("Helvetica", "normal");
        doc.setFontSize(8.5);
        doc.setTextColor(textMutedColor.r, textMutedColor.g, textMutedColor.b);
        doc.text(cert.date, 201, rightY, { align: "right" });
        rightY += 4.2;

        doc.setFont("Helvetica", "normal");
        doc.setFontSize(8.5);
        doc.setTextColor(textMutedColor.r, textMutedColor.g, textMutedColor.b);
        const sub = cert.credentialId ? `${cert.issuer} (Credencial: ${cert.credentialId})` : cert.issuer;
        doc.text(sub, 78, rightY);
        rightY += 5.5;
      });
    }
  }
}

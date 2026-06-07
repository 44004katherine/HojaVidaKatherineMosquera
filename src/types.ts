export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string; // e.g. "2023 - Presente"
  location: string;
  contributions: string[];
  skillsUsed: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  logoUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: "automation" | "api" | "performance";
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number }[]; // Level from 1-100 or years or just text tags
}

export interface Language {
  name: string;
  level: string; // e.g. "C1 - Avanzado" or "Nativo"
  percentage: number; // For progress bars
}

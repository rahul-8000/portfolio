export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  link?: string;
  image: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface LanguageItem {
  percentage: any;
  language: string;
  proficiency: string;
}
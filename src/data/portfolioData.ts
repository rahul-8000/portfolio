import { ExperienceItem, ProjectItem, SkillCategory, EducationItem, LanguageItem } from '../types';

export const personalInfo = {
  name: "Rahul Kumawat",
  title: "PHP Laravel & MERN Stack Developer",
  description: "I’m a tech lover who enjoys solving problems and building new, creative things.",
  contact: {
    email: "rk9680005509@gmail.com",
    phone: "9680005509",
    address: "126, Shri Ram Puri, Niwaru Road, Jhotwara, Jaipur, India"
  }
};

export const experiences: ExperienceItem[] = [
  {
    company: "Stegback Technology Pvt Ltd",
    role: "Senior Backend Developer",
    period: "02/2023 - Present",
    description: [
      "Built product & order modules for a multi-vendor e-commerce platform.",
      "Managed product sync with Amazon, eBay, Kaufland, Shopify, etc.",
      "Expertise in Laravel, Redis, Docker, API optimization, Git branching."
    ]
  },
  {
    company: "SAVVY Technology Solutions",
    role: "Web Developer",
    period: "04/2020 - 01/2023",
    description: [
      "RESTful API design, Laravel backend, MySQL, Docker, AWS EC2, VPS hosting."
    ]
  }
];

export const projects: ProjectItem[] = [
  {
    title: "Taxonation",
    description: "A tax, legal, and finance portal.",
    link: "https://taxonation.com",
    image: "/taxonation.jpg",
    id: 0
  },
  {
    title: "Apply Store",
    description: "AI-powered course discovery portal with 8000+ courses.",
    link: "https://applystore.org",
    image: "/applystore.jpg",
    id: 1
  },
  {
    title: "Stegback Portal",
    description: "Multi-vendor e-commerce system with role-based access, product listing, order management, shipping integrations.",
    link: "https://portal.stegback.com",
    image: "/stegback.png",
    id: 2
  }
];

export const skills: SkillCategory[] = [
  {
    category: "Backend",
    skills: ["PHP", "Laravel", "CodeIgniter", "Node.js"]
  },
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "Bootstrap", "Tailwind", "JavaScript (ES6+)", "jQuery"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB"]
  },
  {
    category: "Tools",
    skills: ["GitHub", "Docker", "Azure", "JWT Auth"]
  }
];

export const education: EducationItem[] = [
  {
    degree: "BCA/MSC IT",
    institution: "SS Jain Subodh PG College, Jaipur",
    period: "2017–2022"
  }
];

export const languages: LanguageItem[] = [
  {
    language: "Hindi",
    proficiency: "Full Professional",
    percentage: 100 
  },
  {
    language: "English",
    proficiency: "Conversational",
    percentage: 90
  }
];

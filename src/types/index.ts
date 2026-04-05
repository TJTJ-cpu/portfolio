export interface Project {
  title: string;
  description: string;
  contributions: string[];
  tech: string[];
  image: string;
  github: string | null;
  live: string | null;
  report: string | null;
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools" | "Other";
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  location: string;
  highlights: string[];
  logo:string;
  url: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  pdf: string | null;
}









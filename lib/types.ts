// lib/types.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  image: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

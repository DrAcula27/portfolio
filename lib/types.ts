export interface Project {
  id: string;
  title: string;
  description: string;
  impact: string;
  technologies: string[];
  featured: boolean;
  github?: string;
  live?: string;
  image?: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  type:
    | 'Full-time'
    | 'Part-time'
    | 'Contract'
    | 'Internship'
    | 'Freelance';
  summary: string;
  fullDescription: string;
  achievements: string[];
  technologies: string[];
  projects?: Project[];
  link?: string;
}

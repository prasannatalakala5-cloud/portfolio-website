export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'web' | 'ml' | 'other';
}

export interface Skill {
  name: string;
  level: 'Basic' | 'Intermediate' | 'Learning';
  percentage: number; // For visualization
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  points: string[];
}

export interface Education {
  institution: string;
  degree: string;
  major: string;
  graduationYear: string;
  status: string;
  grade?: string;
  highlights: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  iconType: 'iot' | 'leader' | 'data';
}

export interface InfoCard {
  title: string;
  value: string;
  iconName: string;
  description: string;
}

export interface WhyHireMeCard {
  title: string;
  iconName: string;
  description: string;
}

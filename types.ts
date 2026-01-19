export type ProjectCategory = 'Tất cả' | 'Logistics' | 'Giáo dục' | 'Landing page' | 'Quản lý công ty';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  thumbnail: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  screens: string[];
  date: string;
  client: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  icon?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
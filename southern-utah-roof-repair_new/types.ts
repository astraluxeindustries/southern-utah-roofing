import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  rating: number;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  path: string;
}
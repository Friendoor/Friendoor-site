export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  videoUrl: string;
  size: 'small' | 'medium' | 'large';
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Client {
  id: number;
  name: string;
  logo: string;
}

export interface NavItem {
  label: string;
  href: string;
}
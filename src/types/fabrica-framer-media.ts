// Content shapes for the fabrica.framer.media (/) clone.
// Namespaced by site so a future clone of a different site does not collide.

export interface FabricaProject {
  name: string;
  year: string;
  image: string;
  logo: string;
  logoAlt: string;
}

export interface FabricaTestimonial {
  quote: string;
  author?: string;
  role?: string;
  avatar?: string;
  rating?: number;
}

export interface FabricaTeamMember {
  name: string;
  role: string;
  image: string;
}

export interface FabricaBlogPost {
  date: string;
  title: string;
  excerpt: string;
}

export interface FabricaFaqItem {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export interface FabricaServiceItem {
  index: string;
  title: string;
  description?: string;
  tags?: string[];
}

export interface FabricaFeatureCard {
  index: string;
  title: string;
  image: string;
}

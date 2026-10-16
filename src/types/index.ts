export type ProjectStatus = 'Ongoing' | 'Upcoming' | 'Pre-Launch';

export interface Amenity {
  id: string;
  name: string;
  icon: string; // Lucide icon name
  description?: string;
}

export interface KeyDistance {
  destination: string;
  distance: string;
  time?: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'All' | 'Site Photos' | 'Development' | 'Aerial View' | 'Amenities';
}

export interface ProjectDocument {
  id: string;
  title: string;
  description: string;
  category: string;
  fileSize?: string;
  verified: boolean;
  fileUrl?: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  projectNumber: string; // e.g. "Project 01"
  location: string;
  fullAddress: string;
  category: string;
  status: ProjectStatus;
  totalArea: string;
  totalPlots: number | string;
  plotSizes: string;
  reraNumber: string;
  reraStatus: string;
  heroImage: string;
  coverImage: string;
  masterPlanImage: string;
  description: string;
  longDescription: string[];
  highlights: string[];
  amenities: Amenity[];
  keyDistances: KeyDistance[];
  gallery: GalleryItem[];
  documents: ProjectDocument[];
  mapEmbedUrl?: string;
}

export interface Director {
  id: string;
  name: string;
  role: string;
  image: string;
  shortBio: string;
  fullBio: string[];
  experience: string;
  message?: string;
  linkedin?: string;
  email?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  project: string;
  rating: number;
  quote: string;
  avatar: string;
}

export interface ProjectUpdate {
  id: string;
  title: string;
  project: string;
  projectSlug: string;
  date: string;
  category: string;
  description: string;
  image: string;
}

export interface NavItem {
  name: string;
  path: string;
  hasDropdown?: boolean;
}


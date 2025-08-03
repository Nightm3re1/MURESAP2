import type { StaticImageData } from "next/image";

export interface Apartment {
  id: string;
  slug: string;
  name: { [key: string]: string }; // Translated name
  teaser: { [key: string]: string }; // Translated teaser
  description: { [key: string]: string }; // Translated description
  images: string[]; // URLs or paths to images
  amenities: AmenityKey[];
  address: string;
  mapEmbedUrl?: string; // Optional: direct URL for map iframe
  mapPlaceholderImage: string;
  ctaText?: { [key: string]: string }; // Translated CTA text
  displayType?: 'default' | 'stack3d'; // New field for card display type
}

export type AmenityKey = 
  | 'wifi' 
  | 'ac' 
  | 'parking' 
  // | 'kitchen' // Removed kitchen
  | 'whatsappSupport'
  | 'familyRooms'
  | 'nonSmokerRooms'
  | 'terraceBalcony'
  | 'elevator'; // Added elevator

export interface Amenity {
  id: AmenityKey;
  labelKey: string; // Key for translation e.g., "ApartmentDetailPage.amenities.wifi"
  icon?: React.ElementType; // Lucide or Tabler or custom icon component
}

export interface Review {
  id: string;
  author: string;
  quote: { [key: string]: string }; // Translated quote
  rating: number; // 1-5 stars
  country?: string;
  group?: string;
  duration?: string;
}

export interface Attraction {
  id: string;
  name: { [key: string]: string }; // Translated name
  description: { [key: string]: string }; // Translated description
  image: string; // URL or path
}

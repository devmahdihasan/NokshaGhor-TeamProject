// src/types/product.ts

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string; // optional — we won’t use it for display
  image: string;
  images?: string[]; // gallery
  category: string;
  rating: number;
  inStock: boolean;
  sale?: boolean;
  tags?: string[];
  keyFeatures?: string[]; // bullet points
  specifications?: { feature: string; details: string }[]; // for spec table
}
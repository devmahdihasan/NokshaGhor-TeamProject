import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    description: "High-quality wireless headphones with noise cancellation",
    image: "/images/headphones.jpg",
    category: "Electronics",
    rating: 4.5,
    inStock: true
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    description: "Feature-rich smartwatch with health monitoring",
    image: "/images/smartwatch.jpg",
    category: "Electronics",
    rating: 4.2,
    inStock: true
  }
];
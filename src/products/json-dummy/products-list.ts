import { Product } from "../types/common.type";

const now = Date.now();

export const productsList: Product[] = [
  {
    id: `product_${now + 1}`,
    name: "Wireless Headphones",
    price: 199.99,
    category: "Audio_Physical",
    description: "Noise-cancelling over-ear headphones with Bluetooth connectivity.",
    inStock: true,
    tags: ["audio", "wireless", "bluetooth"],
    metadata: {
      weight: 0.5,
      dimensions: { width: 18, height: 20, depth: 8 }
    }
  },
  {
    id: `product_${now + 2}`,
    name: "4K Television",
    price: 799.99,
    category: "Electronics_Physical",
    description: "Smart 4K Ultra HD TV with HDR and built-in streaming apps.",
    inStock: true,
    tags: ["tv", "electronics", "4k"],
    metadata: {
      weight: 12.5,
      dimensions: { width: 112, height: 65, depth: 8 }
    }
  },
  {
    id: `product_${now + 3}`,
    name: "Leather Boots",
    price: 149.99,
    category: "Footwear_Physical",
    description: "Durable and stylish leather boots for all-weather use.",
    inStock: false,
    tags: ["boots", "footwear", "leather"],
    metadata: {
      weight: 1.2,
      dimensions: { width: 30, height: 15, depth: 12 }
    }
  },
  {
    id: `product_${now + 4}`,
    name: "Men's Jacket",
    price: 89.5,
    category: "Clothing_Physical",
    description: "Water-resistant outdoor jacket with inner lining.",
    inStock: true,
    tags: ["jacket", "clothing", "outerwear"],
    metadata: {
      weight: 0.8,
      dimensions: { width: 40, height: 60, depth: 3 }
    }
  },
  {
    id: `product_${now + 5}`,
    name: "Photo Editing Software",
    price: 59.99,
    category: "Software_Digital",
    description: "Professional photo editing software with advanced features.",
    inStock: true,
    tags: ["software", "photo", "editing"],
    metadata: {
      weight: 0,
      dimensions: { width: 0, height: 0, depth: 0 }
    }
  },
  {
    id: `product_${now + 6}`,
    name: "Fantasy E-Book",
    price: 9.99,
    category: "E-books_Digital",
    description: "Epic fantasy novel in digital format.",
    inStock: true,
    tags: ["ebook", "fantasy", "digital"],
    metadata: {
      weight: 0,
      dimensions: { width: 0, height: 0, depth: 0 }
    }
  },
  {
    id: `product_${now + 7}`,
    name: "Music Streaming Subscription",
    price: 14.99,
    category: "Streaming_Digital",
    description: "One-month access to premium music streaming service.",
    inStock: true,
    tags: ["streaming", "music", "subscription"],
    metadata: {
      weight: 0,
      dimensions: { width: 0, height: 0, depth: 0 }
    }
  },
  {
    id: `product_${now + 8}`,
    name: "Online Course: Web Development",
    price: 79.99,
    category: "Online Courses_Digital",
    description: "Comprehensive course on modern web development practices.",
    inStock: true,
    tags: ["course", "web", "development"],
    metadata: {
      weight: 0,
      dimensions: { width: 0, height: 0, depth: 0 }
    }
  },
  {
    id: `product_${now + 9}`,
    name: "Bluetooth Speaker",
    price: 45.0,
    category: "Audio_Physical",
    description: "Portable speaker with clear sound and long battery life.",
    inStock: false,
    tags: ["speaker", "bluetooth", "portable"],
    metadata: {
      weight: 0.6,
      dimensions: { width: 12, height: 10, depth: 10 }
    }
  },
  {
    id: `product_${now + 10}`,
    name: "Smartphone",
    price: 599.0,
    category: "Electronics_Physical",
    description: "Latest model with high-resolution camera and fast processor.",
    inStock: true,
    tags: ["smartphone", "electronics", "mobile"],
    metadata: {
      weight: 0.3,
      dimensions: { width: 7, height: 15, depth: 0.8 }
    }
  }
];

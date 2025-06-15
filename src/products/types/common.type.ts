import { ProductCategory } from "./template-literal.types";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: ProductCategory;
  description: string;
  inStock: boolean;
  tags: string[];
  metadata: ProductMetadata;
}

export interface ProductMetadata {
    weight: number;
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
  };
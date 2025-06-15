export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  inStock: boolean;
  tags: string[];
  metadata: {
    weight: number;
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
  };
}

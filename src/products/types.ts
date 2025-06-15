/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
// Sistema de validación type-safe con utility types
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

// Transformaciones declarativas
export type CreateProductRequest = Omit<Product, 'id'>;
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
// type DeepPartial<T> = T extends object ? {
//     [P in keyof T]?: DeepPartial<T[P]>;
// } : T;
export type UpdateProductRequest = DeepPartial<Omit<Product, 'id'>>;
export type ProductSummary = Pick<Product, 'id' | 'name' | 'price' | 'inStock'>;
export type ProductSearchResult = Pick<Product, 'id' | 'name' | 'price' | 'category'>;

// Validation system con conditional types
export type ValidationResult<T> = T extends object
  ? { success: true; data: T; errors?: never }
  : { success: false; data?: never; errors: string[] };

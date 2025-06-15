import { Product, ProductMetadata } from "./common.type";
import { DigitalCategory, PhysicalCategory } from "./template-literal.types";

export type CreateProductRequest = Omit<Product, 'id'>;
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type UpdateProductRequest = DeepPartial<Omit<Product, 'id'>>;
export type ProductSummary = Pick<Product, 'id' | 'name' | 'price' | 'inStock'>;
export type ProductSearchResult = Pick<Product, 'id' | 'name' | 'price' | 'category'>;

export type ValidationResult<T> = T extends object
  ? { success: true; data: T; errors?: never }
  : { success: false; data?: never; errors: string[] };

export type PhysicalProduct = Product & {
  category: PhysicalCategory,
  metadata: ProductMetadata;
}

export type DigitalProduct = Product & {
  category: DigitalCategory,
  metadata: ProductMetadata,
}
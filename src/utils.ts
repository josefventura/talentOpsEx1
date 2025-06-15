import { CreateProductRequest } from "./products/types/conditional.types";

// Type guards con utility types
export function isValidCreateProduct(data: unknown): data is CreateProductRequest {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof (data as any).name === 'string' &&
    typeof (data as any).price === 'number' &&
    typeof (data as any).category === 'string' &&
    typeof (data as any).description === 'string' &&
    typeof (data as any).inStock === 'boolean' &&
    Array.isArray((data as any).tags) &&
    typeof (data as any).metadata === 'object'
  );
}
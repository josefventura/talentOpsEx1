import { isValidCreateProduct } from "src/utils";
import { ProductsRepository } from "./products.repository";
import { ProductSearchResult, UpdateProductRequest, ValidationResult } from "./conditional.types";
import { Injectable } from "@nestjs/common";
import { Product } from "./common.type";

@Injectable()
export class ProductService {
    constructor(private readonly repository: ProductsRepository) {}

    async getAllProducts(): Promise<Product[]> {
        const products: Product[] = await this.repository.findAll();
        return products;
    }

    async createProduct(data: unknown): Promise<ValidationResult<Product>> {
    if (!isValidCreateProduct(data)) {
        return {
        success: false,
        errors: ['Invalid product data format'],
        } as ValidationResult<never>;
    }

    const product: Product = {
        id: `product_${Date.now()}`,
        ...data,
    };

    await this.repository.save(product);

    return {
        success: true,
        data: product,
    };
    }

    async updateProduct(
    id: string,
    updates: UpdateProductRequest,
    ): Promise<ValidationResult<Product>> {

    const existingProduct: Product | undefined = await this.repository.findById(id);
    if (!existingProduct) {
        return {
        success: false,
        errors: ['Product not found'],
        } as ValidationResult<never>;
    }

    if (!existingProduct) {
        return {
        success: false,
        errors: ['Product not found'],
        } as ValidationResult<never>;
    }

    // Deep merge con type safety
    const updatedProduct: Product = {
        ...existingProduct,
        ...updates,
        metadata: {
        ...existingProduct.metadata,
        ...updates.metadata,
        dimensions: {
            ...existingProduct.metadata.dimensions,
            ...updates.metadata?.dimensions,
        },
        },
    } as Product;

    await this.repository.save(updatedProduct);

    return {
        success: true,
        data: updatedProduct,
    };
    }

    async searchProducts(query: string): Promise<ProductSearchResult[]> {
    const products = await this.repository.search(query);

    // Transformación automática a search result format
    return products.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category,
    }));
    }
}
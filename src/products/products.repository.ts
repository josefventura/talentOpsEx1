import { productsList } from "./json-dummy/products-list";
import { Product } from "./types";

export class ProductsRepository {
  private products: Product[] = productsList;

    async findAll(): Promise<Product[]> {
        return this.products;
    }

    async findById(id: string): Promise<Product | undefined> {
        return this.products.find(product => product.id === id);
    }

    async save(product: Product): Promise<void> {
        const index = this.products.findIndex(p => p.id === product.id);
        if (index !== -1) {
            this.products[index] = product;
        } else {
            this.products.push(product); 
        }
    }

    async delete(id: string): Promise<void> {
        this.products = this.products.filter(product => product.id !== id);
    }

    async search(query: string): Promise<Product[]> {
        return this.products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );
    }

} 
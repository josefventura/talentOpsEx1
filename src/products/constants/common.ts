import { ProductMetadata } from "../types/common.type";

export enum ProductCategoryType {
    PHYSICAL = 'Physical',
    DIGITAL = 'Digital',
}

export const DIGITAL_DEFAULT_METADATA: ProductMetadata = {
    weight: 0, 
    dimensions: {
        width: 0,
        height: 0,
        depth: 0,
    }
};
import { ProductCategoryType } from "../constants/common";
import { DigitalCategory, PhysicalCategory } from "../types/template-literal.types";

export function isDigitalCategory(category: string): category is DigitalCategory {
  return category.includes(ProductCategoryType.DIGITAL);
}

export function isPhysicalCategory(category: string): category is PhysicalCategory {
  return category.includes(ProductCategoryType.PHYSICAL);
}

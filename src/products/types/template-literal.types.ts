import { ProductCategoryType } from "../constants/common";

type ElectronicCategory = "Electronics" | "Audio";
type FootwearCategory = "Footwear" | "Clothing";
type DigitalProductCategory = "Software" | "E-books";
type DigitalServiceCategory = "Streaming" | "Online-Courses";

export type PhysicalCategory = `${ElectronicCategory | FootwearCategory}_${ProductCategoryType.PHYSICAL}`;
export type DigitalCategory = `${DigitalProductCategory | DigitalServiceCategory}_${ProductCategoryType.DIGITAL}`;
export type ProductCategory = PhysicalCategory | DigitalCategory;


import type { ProductImage } from "./product";

export interface Category {
  id: number;
  name: string;
  slug: string;
  parentId: number | null;
  description: string;
  image: ProductImage;
  productCount: number;
}

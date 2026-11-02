export type ProductStockStatus = "instock" | "outofstock" | "onbackorder";

export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;

  description: string;
  shortDescription: string;
  sku: string;

  price: number;
  regularPrice: number;
  salePrice: number | null;

  averageRating: number;
  ratingCount: number;
  stockStatus: ProductStockStatus;

  categories: ProductCategory[];
  images: ProductImage[];

  primaryImage: ProductImage;
}

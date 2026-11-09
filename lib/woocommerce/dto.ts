export interface WooProductImageDto {
  id: number;
  src: string;
  name: string;
  alt: string;
}

export interface WooProductCategoryDto {
  id: number;
  name: string;
  slug: string;
}

export interface WooProductAttributeDto {
  id: number;
  name: string;
  slug: string;
  position: number;
  visible: boolean;
  variation: boolean;
  options: string[];
}

export interface WooProductDto {
  id: number;
  name: string;
  slug: string;
  permalink: string;

  description: string;
  short_description: string;
  sku: string;

  price: string;
  regular_price: string;
  sale_price: string;

  average_rating: string;
  rating_count: number;

  stock_status: "instock" | "outofstock" | "onbackorder";

  categories: WooProductCategoryDto[];
  images: WooProductImageDto[];
  attributes: WooProductAttributeDto[];
}

export interface WooCategoryImageDto {
  id: number;
  src: string;
  name: string;
  alt: string;
}

export interface WooCategoryDto {
  id: number;
  name: string;
  slug: string;
  parent: number;
  description: string;
  image: WooCategoryImageDto | null;
  count: number;
}

export interface WooBrandImageDto {
  id: number;
  src: string;
  name: string;
  alt: string;
}

export interface WooBrandDto {
  id: number;
  name: string;
  slug: string;
  parent: number;
  description: string;
  image: WooBrandImageDto | null;
  count: number;
}

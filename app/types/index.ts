export interface ShopPageProps {
  searchParams:
    | Promise<{ [key: string]: string | string[] | undefined }>
    | { [key: string]: string | string[] | undefined };
}

export interface CategoryPageProps {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
export interface ImageProduct {
  src: string;
  alt: string;
}
export interface Brand {
  id: number;
  name: string;
  image: ImageProduct;
}
export interface ShopCategoryItem {
  id: string | number;
  name: string;
  slug: string;
  image: ImageProduct;
  count: number;
}
export interface Category {
  id: number;
  name: string;
  slug: string;
}
export interface Product {
  name: string;
  id: string;
  title: string;
  slug: string;
  price: number;
  description: string;
  categories: Category[];
  images: ImageProduct[];
  average_rating: number;
}

export interface Post {
  category: string;
  author: string;
  commentsCount: number;
  id: number;
  title: string;
  slug: string;
  link?: string;
  imageUrl: string;
  date: {
    day: string;
    month: string;
  };
}

export interface WordPressPost {
  id: number;
  slug: string;
  link: string;
  date: string;
  title?: { rendered: string };
  _embedded?: {
    ["wp:term"]?: Array<Array<{ taxonomy?: string; name?: string }>>;
    ["wp:featuredmedia"]?: Array<{ source_url?: string }>;
    author?: Array<{ name?: string }>;
  };
}

export interface Article {
  id: string | number;
  title: string;
  category?: string;
  imageUrl?: string;
  date?: string;
  commentsCount?: number;
  author?: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  image: string;
}
export interface DealItem {
  id: string;
  name: string;
  category: string;
  rating: number;
  price: number;
  oldPrice?: number;
  imageUrl: string;
}

import { Category, ImageProduct, Product } from "@/app/types";

const domain = process.env.NEXT_PUBLIC_WC_DOMAIN;
const consumerKey = process.env.WC_CONSUMER_KEY;
const consumerSecret = process.env.WC_CONSUMER_SECRET;

const DEFAULT_IMAGE =
  "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/ed-logo.svg";
export async function wooFetch(endpoint: string, revalidateTime: number = 60) {
  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString(
    "base64",
  );
  try {
    const res = await fetch(`${domain}/wp-json/wc/v3/${endpoint}`, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
      next: {
        revalidate: revalidateTime,
      },
    });
    if (!res.ok) {
      throw new Error(`WooCommerce API Error: ${res.statusText}`);
    }
    return res.json();
  } catch (error) {
    console.error("WooCommerce API Error:", error);
    return [];
  }
}
export async function FetchWooProducts(queryString: string = "") {
  const rawProducts = await wooFetch(
    `products?${queryString}&stock_status=instock`,
    30,
  );

  if (!Array.isArray(rawProducts)) return [];

  return rawProducts.map((product: Product) => ({
    ...product,
    price: Number(product.price) || 0,
    average_rating: Number(product.average_rating) || 0,
    categories: (product.categories || []).map((cat: Category) => ({
      ...cat,
      name: cat.name.replace(/&amp;/g, "&"),
    })),
    images:
      product.images && product.images.length > 0
        ? product.images.map((img: ImageProduct) => ({
            src: img.src && img.src !== "" ? img.src : DEFAULT_IMAGE,
            alt: img.alt || product.name,
          }))
        : [{ src: DEFAULT_IMAGE, alt: product.name }],
  }));
}
export async function FetchWooCategories() {
  const categories = await wooFetch(
    "products/categories?per_page=8&hide_empty=true",
    3600,
  );

  if (!Array.isArray(categories)) return [];
  return categories.map((cat) => ({
    ...cat,
    name: cat.name.replace(/&amp;/g, "&"),
    image: {
      src:
        cat.image?.src && cat.image.src !== "" ? cat.image.src : DEFAULT_IMAGE,
      alt: cat.image?.alt || cat.name,
    },
  }));
}

export async function FetchWooCategoryBySlug(slug: string) {
  const categories = await wooFetch(`products/categories?slug=${slug}`);
  return categories[0] || null;
}
export async function FetchWooProductBySlug(slug: string) {
  const products = await wooFetch(`products?slug=${slug}`);
  return products[0] || null;
}
export async function FetchWooBrands() {
  const brands = await wooFetch(`products/brands?per_page=20`);
  return brands;
}

export default {
  FetchWooCategories,
  FetchWooProducts,
  FetchWooCategoryBySlug,
  FetchWooProductBySlug,
  FetchWooBrands,
};

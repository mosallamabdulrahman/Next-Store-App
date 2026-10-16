const domain = process.env.NEXT_PUBLIC_WC_DOMAIN;
const consumerKey = process.env.WC_CONSUMER_KEY;
const consumerSecret = process.env.WC_CONSUMER_SECRET;
export async function wooFetch(endpoint: string, revalidateTime: number = 60) {
  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString(
    "base64",
  );

  const res = await fetch(`${domain}/wp-json/wc/v3/${endpoint}`, {
    headers: {
      Authorization: `Basic ${auth}`,
    },
    next: {
      revalidate: revalidateTime,
    },
  });

  if (!res.ok) throw new Error(`WooCommerce API Error: ${res.statusText}`);

  return res.json();
}
export async function FetchWooProducts(queryString: string = "") {
  return wooFetch(`products?${queryString}&stock_status=instock`);
}
export async function FetchWooCategories() {
  return wooFetch("products/categories?per_page=8&hide_empty=true", 3600);
}

export async function FetchWooCategoryBySlug(slug: string) {
  const categories = await wooFetch(`products/categories?slug=${slug}`);
  return categories[0] || null;
}
export async function FetchWooProductBySlug(slug: string) {
  const products = await wooFetch(`products?slug=${slug}`);
  return products[0] || null;
}

export default {
  FetchWooCategories,
  FetchWooProducts,
  FetchWooCategoryBySlug,
  FetchWooProductBySlug,
};

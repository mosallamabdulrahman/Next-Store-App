import type { Product } from "@/app/types/product";
import { wooFetch } from "./client";
import type { WooProductDto } from "./dto";
import { normalizeProduct } from "./normalize-product";

export interface GetProductsParams {
  page?: number;
  perPage?: number;
  categoryId?: number;
  orderby?: "date" | "popularity" | "rating" | "price";
  order?: "asc" | "desc";
  stockStatus?: "instock" | "outofstock" | "onbackorder";
}

export type ProductSearchParams = Record<
  string,
  string | string[] | undefined
>;

function firstValue(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

function positiveInteger(value: string | undefined, fallback: number): number {
  const number = Number(value);

  return Number.isInteger(number) && number > 0 ? number : fallback;
}

function productOrderBy(
  value: string | undefined,
): GetProductsParams["orderby"] {
  switch (value) {
    case "popularity":
    case "rating":
    case "price":
      return value;
    default:
      return "date";
  }
}

export function productsParamsFromSearch(
  searchParams: ProductSearchParams,
): GetProductsParams {
  return {
    page: positiveInteger(firstValue(searchParams.page), 1),
    perPage: positiveInteger(firstValue(searchParams.per_page), 24),
    orderby: productOrderBy(firstValue(searchParams.orderby)),
    order: firstValue(searchParams.order) === "asc" ? "asc" : "desc",
  };
}

export async function getProducts(
  options: GetProductsParams = {},
): Promise<Product[]> {
  const params = new URLSearchParams({
    page: String(options.page ?? 1),
    per_page: String(options.perPage ?? 24),
    orderby: options.orderby ?? "date",
    order: options.order ?? "desc",
    stock_status: options.stockStatus ?? "instock",
  });

  if (options.categoryId !== undefined) {
    params.set("category", String(options.categoryId));
  }

  const products = await wooFetch<WooProductDto[]>(
    `products?${params.toString()}`,
    { revalidate: 30 },
  );

  return products.map(normalizeProduct);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const params = new URLSearchParams({
    slug,
    per_page: "1",
  });
  const products = await wooFetch<WooProductDto[]>(
    `products?${params.toString()}`,
    { revalidate: 30 },
  );

  const product = products[0];
  return product ? normalizeProduct(product) : null;
}

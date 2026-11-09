import type { Category } from "@/app/types/category";
import { wooFetch } from "./client";
import type { WooCategoryDto } from "./dto";
import { normalizeCategory } from "./normalize-category";

export interface GetCategoriesParams {
  page?: number;
  perPage?: number;
  hideEmpty?: boolean;
  parentId?: number;
}

export async function getCategories(
  options: GetCategoriesParams = {},
): Promise<Category[]> {
  const params = new URLSearchParams({
    page: String(options.page ?? 1),
    per_page: String(options.perPage ?? 20),
    hide_empty: String(options.hideEmpty ?? true),
  });

  if (options.parentId !== undefined) {
    params.set("parent", String(options.parentId));
  }

  const categories = await wooFetch<WooCategoryDto[]>(
    `products/categories?${params.toString()}`,
    { revalidate: 3600 },
  );

  return categories.map(normalizeCategory);
}

export async function getCategoryBySlug(
  slug: string,
): Promise<Category | null> {
  const params = new URLSearchParams({
    slug,
    per_page: "1",
  });

  const categories = await wooFetch<WooCategoryDto[]>(
    `products/categories?${params.toString()}`,
    { revalidate: 3600 },
  );

  const category = categories[0];

  return category ? normalizeCategory(category) : null;
}

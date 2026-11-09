import { getCategories } from "@/lib/woocommerce/categories";

import { ShopSidebarClient } from "./shopSidebarClient";
import { Category } from "@/app/types/category";

export async function ShopSidebar() {
  const categories: Category[] = await getCategories();

  return <ShopSidebarClient categories={categories} />;
}

export default ShopSidebar;

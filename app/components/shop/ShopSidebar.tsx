import { FetchWooCategories } from "@/lib/woocommerce";
import { ShopSidebarClient } from "./shopSidebarClient";
import { ShopCategoryItem } from "@/app/types";

export async function ShopSidebar() {
  const categories: ShopCategoryItem[] = (await FetchWooCategories()) || [];

  return <ShopSidebarClient categories={categories} />;
}

export default ShopSidebar;

import FiltersShop from "@app/components/shop/FiltersShop";
import { ProductCard } from "@app/components/shop/ProductCard";
import { ShopSidebar } from "@app/components/shop/ShopSidebar";
import { ShopSidebarProvider } from "@app/context/ShopSidebarContext";
import { Product, ShopPageProps } from "@app/types";
import Link from "next/link";
import { FetchWooProducts } from "@/lib/woocommerce";
import GridProdcuts from "@app/components/shop/GridProdcuts";

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const resolvedSearchParams = await searchParams;

  const gridColumns =
    resolvedSearchParams.per_row === "3"
      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-4";

  const defaultParams = {
    per_page: "24",
    page: "1",
    orderby: "date",
    order: "desc",
    per_row: "4",
  };

  const queryParams = new URLSearchParams();

  const mergedParams = { ...defaultParams, ...resolvedSearchParams };

  Object.entries(mergedParams).forEach(([key, value]) => {
    if (value !== undefined) {
      if (Array.isArray(value)) {
        queryParams.append(key, value.join(","));
      } else {
        queryParams.append(key, value);
      }
    }
  });

  const products = await FetchWooProducts(queryParams.toString());

  return (
    <ShopSidebarProvider>
      <div className="min-h-screen w-full max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-6 py-2">
        {/* Breadcrumbs matching Screenshot 2 & 3 */}
        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-6 font-normal">
          <Link className="hover:text-gray-700 transition-colors" href={"/"}>
            Home
          </Link>
          <span className="text-gray-300">/</span>
          <p className="text-gray-800 font-medium">Shop</p>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
          {/* Static Sidebar: Left on desktop, off-canvas drawer on mobile */}
          <ShopSidebar />

          {/* Right Product Grid Area */}
          <div className="flex-1 w-full min-w-0">
            <FiltersShop />
            <GridProdcuts products={products} gridColumns={gridColumns} />
          </div>
        </div>
      </div>
    </ShopSidebarProvider>
  );
}

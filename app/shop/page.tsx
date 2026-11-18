import FiltersShop from "@app/components/shop/FiltersShop";
import { ShopSidebar } from "@app/components/shop/ShopSidebar";
import { ShopSidebarProvider } from "@app/context/ShopSidebarContext";
import { ShopPageProps } from "@app/types";
import Link from "next/link";
import {
  getProducts,
  productsParamsFromSearch,
} from "@/lib/woocommerce/products";
import GridProdcuts from "@app/components/shop/GridProdcuts";

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const resolvedSearchParams = await searchParams;

  const gridColumns =
    resolvedSearchParams.per_row === "3"
      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4";

  const products = await getProducts(
    productsParamsFromSearch(resolvedSearchParams),
  );

  return (
    <ShopSidebarProvider>
      <div className="min-h-dvh w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 py-4">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-[#57534E] mb-6"
        >
          <Link className="hover:text-[#0F3D3E] transition-colors" href="/">
            Home
          </Link>
          <span className="text-[#E5E0D8]">/</span>
          <span className="text-[#18181B] font-semibold">Shop</span>
        </nav>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
          <ShopSidebar />

          <div className="flex-1 w-full min-w-0">
            <FiltersShop />
            <GridProdcuts products={products} gridColumns={gridColumns} />
          </div>
        </div>
      </div>
    </ShopSidebarProvider>
  );
}

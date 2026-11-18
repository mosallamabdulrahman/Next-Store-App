import FiltersShop from "@/app/components/shop/FiltersShop";
import GridProdcuts from "@/app/components/shop/GridProdcuts";
import { ShopSidebar } from "@/app/components/shop/ShopSidebar";
import { ShopSidebarProvider } from "@/app/context/ShopSidebarContext";
import { CategoryPageProps } from "@/app/types";
import { getCategoryBySlug } from "@/lib/woocommerce/categories";
import {
  getProducts,
  productsParamsFromSearch,
} from "@/lib/woocommerce/products";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const categoryData = await getCategoryBySlug(categorySlug);
  const title = categoryData?.name
    ? categoryData.name.replace(/&amp;/g, "&")
    : decodeURIComponent(categorySlug);

  return {
    title: `${title} | Mosalam Store`,
    description: `Browse all curated products in ${title} at Mosalam Store`,
  };
}

export default async function CategoriesPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const resolvedSearchParams = await searchParams;

  const categoryData = await getCategoryBySlug(categorySlug);

  if (!categoryData) {
    notFound();
  }

  const gridColumns =
    resolvedSearchParams.per_row === "3"
      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4";

  const products = await getProducts({
    ...productsParamsFromSearch(resolvedSearchParams),
    categoryId: categoryData.id,
  });

  const categoryTitle = categoryData.name.replace(/&amp;/g, "&");

  return (
    <div className="min-h-dvh bg-[#FAF9F6]">
      <ShopSidebarProvider>
        <div className="min-h-dvh w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 py-4">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-[#57534E] mb-6"
          >
            <Link className="hover:text-[#0F3D3E] transition-colors" href="/">
              Home
            </Link>
            <span className="text-[#E5E0D8]">/</span>
            <Link
              className="hover:text-[#0F3D3E] transition-colors"
              href="/shop"
            >
              Shop
            </Link>
            <span className="text-[#E5E0D8]">/</span>
            <span className="text-[#18181B] font-semibold capitalize">
              {categoryTitle}
            </span>
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
    </div>
  );
}

import FiltersShop from "@/app/components/shop/FiltersShop";
import GridProdcuts from "@/app/components/shop/GridProdcuts";
import { ShopSidebar } from "@/app/components/shop/ShopSidebar";
import { ShopSidebarProvider } from "@/app/context/ShopSidebarContext";
import { CategoryPageProps, Product } from "@/app/types";
import { FetchWooCategoryBySlug, FetchWooProducts } from "@/lib/woocommerce";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const categoryData = await FetchWooCategoryBySlug(categorySlug);
  const title = categoryData?.name
    ? categoryData.name.replace(/&amp;/g, "&")
    : decodeURIComponent(categorySlug);

  return {
    title: `${title} | Store`,
    description: `Browse all products in ${title}`,
  };
}

export default async function CategoriesPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const resolvedSearchParams = await searchParams;

  // 1. Fetch category by slug
  const categoryData = await FetchWooCategoryBySlug(categorySlug);

  // 2. Grid columns layout
  const gridColumns =
    resolvedSearchParams.per_row === "3"
      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-4";

  // 3. Build query params with category id
  const defaultParams = {
    per_page: "24",
    page: "1",
    orderby: "date",
    order: "desc",
    per_row: "4",
  };

  const queryParams = new URLSearchParams();
  const mergedParams = {
    ...defaultParams,
    ...resolvedSearchParams,
    ...(categoryData?.id ? { category: categoryData.id.toString() } : {}),
  };

  Object.entries(mergedParams).forEach(([key, value]) => {
    if (value !== undefined) {
      if (Array.isArray(value)) {
        queryParams.append(key, value.join(","));
      } else {
        queryParams.append(key, value);
      }
    }
  });

  // 4. Fetch category products
  const products: Product[] = await FetchWooProducts(queryParams.toString());

  const categoryTitle = categoryData?.name
    ? categoryData.name.replace(/&amp;/g, "&")
    : decodeURIComponent(categorySlug);

  return (
    <div className="min-h-screen">
      <ShopSidebarProvider>
        <div className="min-h-screen w-full max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-6 py-2">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-6 font-normal">
            <Link className="hover:text-gray-700 transition-colors" href="/">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <Link
              className="hover:text-gray-700 transition-colors"
              href="/shop"
            >
              Shop
            </Link>
            <span className="text-gray-300">/</span>
            <p className="text-gray-800 font-medium capitalize">
              {categoryTitle}
            </p>
          </div>

          {/* Main Content Layout */}
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
            {/* Sidebar */}
            <ShopSidebar />

            {/* Product Grid Area */}
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

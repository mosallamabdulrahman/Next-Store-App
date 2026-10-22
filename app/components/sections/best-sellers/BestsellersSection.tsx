import { SectionTitle } from "@app/components/common/SectionTitle";
import { ProductCard } from "@app/components/common/ProductCard";
import { ButtonTabs } from "@app/components/sections/best-sellers/ButtonTabs";
import { FetchWooCategoryBySlug, FetchWooProducts } from "@/lib/woocommerce";
import { Product } from "@/app/types";

interface BestsellersSectionProps {
  category?: string;
}

export const BestsellersSection = async ({
  category = "smartphones",
}: BestsellersSectionProps) => {
  const categoryData = await FetchWooCategoryBySlug(category);
  const categoryQuery = categoryData?.id ? `category=${categoryData.id}&` : "";

  const bestSellersProducts: Product[] = await FetchWooProducts(
    `${categoryQuery}orderby=popularity&per_page=12`,
  );

  return (
    <section className="py-6">
      <SectionTitle title="Bestsellers In Category">
        <ButtonTabs />
      </SectionTitle>

      {/* 6-Column Responsive Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
        {bestSellersProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

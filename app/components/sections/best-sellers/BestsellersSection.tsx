import { SectionTitle } from "@app/components/common/SectionTitle";
import { ProductCard } from "@app/components/common/ProductCard";
import { ButtonTabs } from "@app/components/sections/best-sellers/ButtonTabs";
import { getCategoryBySlug } from "@/lib/woocommerce/categories";
import { getProducts } from "@/lib/woocommerce/products";

interface BestsellersSectionProps {
  category?: string;
}

export async function BestsellersSection({
  category = "smartphones",
}: BestsellersSectionProps) {
  const categoryData = await getCategoryBySlug(category);

  if (!categoryData) {
    return null;
  }

  const products = await getProducts({
    categoryId: categoryData.id,
    orderby: "popularity",
    perPage: 12,
  });

  return (
    <section className="py-10">
      <SectionTitle
        title="Bestsellers In Category"
        subtitle="Most requested pieces curated by department"
      >
        <ButtonTabs />
      </SectionTitle>

      {products.length > 0 ? (
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center rounded-3xl bg-[#F2EFE9]/60 border border-[#E5E0D8]">
          <p className="text-sm text-[#57534E]">
            No products found in this category.
          </p>
        </div>
      )}
    </section>
  );
}

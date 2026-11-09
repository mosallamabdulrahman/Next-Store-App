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
  // 1. Get category by slug
  const categoryData = await getCategoryBySlug(category);

  // 2. Handle missing category
  if (!categoryData) {
    return null;
  }

  // 3. Get bestselling products in category
  const products = await getProducts({
    categoryId: categoryData.id,
    orderby: "popularity",
    perPage: 12,
  });

  return (
    <section className="py-6">
      <SectionTitle title="Bestsellers In Category">
        <ButtonTabs />
      </SectionTitle>

      {products.length > 0 ? (
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="py-8 text-center text-gray-500">
          No products found in this category.
        </p>
      )}
    </section>
  );
}

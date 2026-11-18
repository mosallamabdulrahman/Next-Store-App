import { SectionTitle } from "@app/components/common/SectionTitle";
import { ProductCard } from "@app/components/common/ProductCard";
import { getProducts } from "@/lib/woocommerce/products";
import type { Product } from "@app/types/product";

export async function AppliancesSection() {
  const appliancesProducts = await getProducts({
    perPage: 6,
    orderby: "popularity",
    categoryId: 46,
  });

  return (
    <section className="my-6 bg-[#F2EFE9]/75 border border-[#E5E0D8] rounded-3xl p-5 sm:p-8">
      <SectionTitle
        title="Popular in Appliances"
        subtitle="Quiet efficiency for modern kitchens and living spaces"
        actionText="View All"
        actionHref="/product-category/appliances"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
        {appliancesProducts?.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

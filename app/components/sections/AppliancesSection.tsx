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
    <section className="py-6">
      <SectionTitle
        title="Popular in Appliances"
        actionText="View All"
        actionHref="#"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
        {appliancesProducts?.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

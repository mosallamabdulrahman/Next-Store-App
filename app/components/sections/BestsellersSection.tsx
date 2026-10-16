import { SectionTitle } from "@app/components/common/SectionTitle";
import { ProductCard } from "@app/components/common/ProductCard";
import { BESTSELLER_PRODUCTS } from "@app/data/mockData";
import { ButtonTabs } from "@app/components/sections/best-sellers/ButtonTabs";
import { Product } from "@app/types";

const getBestsellers = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const data = await res.json();
  const bestsellers = data
    .sort((a: Product, b: Product) => b.price - a.price)
    .slice(0, 12);
  return bestsellers;
};

export const BestsellersSection: React.FC = async () => {
  const bestsellers = await getBestsellers();
  console.log(bestsellers);
  return (
    <section className="py-6">
      <SectionTitle title="Bestsellers In Category">
        <ButtonTabs />
      </SectionTitle>

      {/* 6-Column Responsive Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
        {bestsellers.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

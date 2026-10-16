import React from "react";
import { SectionTitle } from "@app/components/common/SectionTitle";
import { ProductCard } from "@app/components/common/ProductCard";
import { APPLIANCE_PRODUCTS } from "@app/data/mockData";

export const AppliancesSection: React.FC = () => {
  return (
    <section className="py-6">
      <SectionTitle
        title="Popular in Appliances"
        actionText="View All"
        actionHref="#"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
        {APPLIANCE_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

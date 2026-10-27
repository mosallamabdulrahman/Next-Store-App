import { Brand } from "@/app/types";
import { FetchWooBrands } from "@/lib/woocommerce";
import BrandsSlider from "@/app/components/sections/brands/BrandsSlider";

export const BrandLogos = async () => {
  const brands: Brand[] = await FetchWooBrands();
  return (
    <section className="py-6">
      <BrandsSlider brands={brands} />
    </section>
  );
};

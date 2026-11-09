import { Brand } from "@/app/types/brand";
import { getBrands } from "@/lib/woocommerce/brands";
import BrandsSlider from "@/app/components/sections/brands/BrandsSlider";

export const BrandLogos = async () => {
  const brands: Brand[] = await getBrands();
  return (
    <section className="py-6">
      <BrandsSlider brands={brands} />
    </section>
  );
};

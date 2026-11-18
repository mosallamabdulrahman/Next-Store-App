import { Brand } from "@/app/types/brand";
import { getBrands } from "@/lib/woocommerce/brands";
import BrandsSlider from "@/app/components/sections/brands/BrandsSlider";

export const BrandLogos = async () => {
  const brands: Brand[] = await getBrands();
  return (
    <section className="py-6 border-y border-[#E5E0D8] bg-[#F2EFE9]/45 -mx-2 md:-mx-4 px-2 md:px-4 my-4">
      <div className="max-w-[1440px] mx-auto">
        <BrandsSlider brands={brands} />
      </div>
    </section>
  );
};

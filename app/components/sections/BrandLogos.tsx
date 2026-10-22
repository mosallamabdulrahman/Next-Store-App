import { Brand } from "@/app/types";
import { FetchWooBrands } from "@/lib/woocommerce";
import Image from "next/image";

export const BrandLogos = async () => {
  const brands: Brand[] = await FetchWooBrands();
  return (
    <section className="py-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4 items-center">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex items-center justify-center h-20 sm:h-24 px-4 rounded-2xl bg-gray-100 hover:bg-gray-200/70 transition-all duration-300 cursor-pointer group"
          >
            <Image
              src={brand.image.src}
              alt={brand.image.alt}
              width={120}
              height={60}
              className="object-contain transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

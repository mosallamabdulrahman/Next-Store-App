"use client";

import Image from "next/image";
import { Brand } from "@/app/types/brand";

interface BrandsSliderProps {
  brands: Brand[];
}

function BrandsSlider({ brands }: BrandsSliderProps) {
  if (!brands || brands.length === 0) return null;

  const marqueeBrands = [...brands, ...brands];

  return (
    <div className="relative overflow-hidden py-1 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <div className="flex w-max items-center gap-3.5 animate-marquee hover:[animation-play-state:paused]">
        {marqueeBrands.map((brand, idx) => (
          <div
            key={`${brand.id}-${idx}`}
            className="shrink-0 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-[#E5E0D8] hover:border-[#0F3D3E] shadow-2xs transition-all duration-200 cursor-pointer group"
          >
            <div className="w-16 h-7 relative flex items-center justify-center">
              <Image
                src={brand.imageUrl}
                alt={brand.name}
                width={90}
                height={36}
                className="max-h-full w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <span className="text-xs font-semibold text-[#57534E] group-hover:text-[#0F3D3E] transition-colors">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandsSlider;

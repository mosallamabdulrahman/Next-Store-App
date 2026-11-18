import React from "react";

interface ProductStickyTabsProps {
  reviewCount?: number;
}

export const ProductStickyTabs: React.FC<ProductStickyTabsProps> = ({
  reviewCount = 1,
}) => {
  return (
    <div className="sticky top-[88px] z-30 mb-8 pt-2 pb-1">
      <div className="inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F2EFE9]/95 rounded-full border border-[#E5E0D8] shadow-xs backdrop-blur-md">
        <a
          href="#Information"
          className="px-4 sm:px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 bg-[#0F3D3E] text-[#FAF9F6] shadow-xs"
        >
          Overview
        </a>

        <a
          href="#Specifications"
          className="px-4 sm:px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 text-[#57534E] hover:text-[#0F3D3E] hover:bg-white/80"
        >
          Specifications
        </a>

        <a
          href="#Reviews"
          className="px-4 sm:px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 text-[#57534E] hover:text-[#0F3D3E] hover:bg-white/80 tabular-nums"
        >
          Reviews ({reviewCount})
        </a>
      </div>
    </div>
  );
};

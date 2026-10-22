import React from "react";

interface ProductStickyTabsProps {
  reviewCount?: number;
}

export const ProductStickyTabs: React.FC<ProductStickyTabsProps> = ({
  reviewCount = 1,
}) => {
  return (
    <div className="sticky top-[68px] z-30 mb-8 pt-2 pb-1">
      <div className="inline-flex items-center gap-1.5 p-1 bg-[#f4f4f4] rounded-full border border-gray-200/60 shadow-2xs backdrop-blur-md">
        <a
          href="#Information"
          className="px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 bg-[#4933d1] text-white shadow-xs"
        >
          Product Information
        </a>

        <a
          href="#Specifications"
          className="px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 text-gray-700 hover:text-[#4933d1] hover:bg-white/60"
        >
          Specifications
        </a>

        <a
          href="#Reviews"
          className="px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 text-gray-700 hover:text-[#4933d1] hover:bg-white/60"
        >
          Reviews ({reviewCount})
        </a>
      </div>
    </div>
  );
};

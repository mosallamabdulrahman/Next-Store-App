import React from "react";
import Image from "next/image";
import {
  StarRating,
  HeartIcon,
  CompareIcon,
} from "@app/components/common/Icons";

interface ProductStickyBottomBarProps {
  name: string;
  price: number;
  image: string;
  rating: number;
}

export const ProductStickyBottomBar: React.FC<ProductStickyBottomBarProps> = ({
  name,
  price,
  image,
  rating,
}) => {
  return (
    <aside
      aria-label="Sticky product checkout bar"
      className="fixed bottom-0 inset-x-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-t border-[#E5E0D8] shadow-2xl py-2.5 px-3 sm:px-6 transition-all duration-300"
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-3 sm:gap-6">
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-[#F2EFE9] border border-[#E5E0D8] shrink-0 p-1">
            <Image
              src={image}
              alt={name}
              fill
              sizes="44px"
              className="object-contain mix-blend-multiply"
            />
          </div>
          <div className="min-w-0 hidden sm:block">
            <h4 className="font-display text-xs sm:text-sm font-bold text-[#18181B] truncate">
              {name}
            </h4>
            <div className="mt-0.5">
              <StarRating rating={rating} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
          <span className="text-base sm:text-xl font-extrabold text-[#0F3D3E] tabular-nums">
            ${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>

          <div className="hidden md:inline-flex items-center border border-[#E5E0D8] rounded-xl bg-white overflow-hidden h-10">
            <button
              type="button"
              className="w-8 h-full flex items-center justify-center text-[#57534E] hover:text-[#0F3D3E] text-sm font-semibold cursor-pointer"
            >
              -
            </button>
            <span className="w-8 text-center text-xs font-semibold text-[#18181B] select-none tabular-nums">
              1
            </span>
            <button
              type="button"
              className="w-8 h-full flex items-center justify-center text-[#57534E] hover:text-[#0F3D3E] text-sm font-semibold cursor-pointer"
            >
              +
            </button>
          </div>

          <button
            type="button"
            className="min-h-10 px-4 sm:px-6 py-2 rounded-xl font-bold uppercase tracking-wider text-[11px] sm:text-xs text-white bg-[#E85D3F] hover:bg-[#D1492B] active:scale-[0.98] transition-all shadow-xs cursor-pointer"
          >
            Add to cart
          </button>

          <button
            type="button"
            className="hidden sm:inline-block min-h-10 px-5 py-2 rounded-xl font-bold uppercase tracking-wider text-[11px] sm:text-xs text-[#FAF9F6] bg-[#0F3D3E] hover:bg-[#09292A] active:scale-[0.98] transition-all shadow-xs cursor-pointer"
          >
            Buy now
          </button>

          <div className="hidden lg:flex items-center gap-1.5 ps-2 border-s border-[#E5E0D8]">
            <button
              type="button"
              className="p-2 rounded-xl hover:bg-[#F2EFE9] transition-colors text-[#57534E] hover:text-[#0F3D3E] cursor-pointer"
              title="Compare"
            >
              <CompareIcon className="w-4 h-4" />
            </button>
            <button
              type="button"
              className="p-2 rounded-xl hover:bg-[#F2EFE9] transition-colors text-[#57534E] hover:text-[#E85D3F] cursor-pointer"
              title="Add to wishlist"
            >
              <HeartIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

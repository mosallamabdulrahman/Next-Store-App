import React from "react";
import Image from "next/image";
import { StarRating, HeartIcon, CompareIcon } from "@app/components/common/Icons";

interface ProductStickyBottomBarProps {
  name: string;
  price: number;
  image: string;
  rating: number;
}

/**
 * Static Sticky Bottom Bar:
 * Wire this component to a scroll event or visibility state when adding logic.
 */
export const ProductStickyBottomBar: React.FC<ProductStickyBottomBarProps> = ({
  name,
  price,
  image,
  rating,
}) => {
  return (
    <aside
      aria-label="Sticky product checkout bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200/90 shadow-2xl py-2 px-3 sm:px-6 transition-all duration-300"
    >
      <div className="max-w-[1540px] mx-auto flex items-center justify-between gap-3 sm:gap-6">
        {/* Left: Thumbnail & Title */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-gray-50 border border-gray-200/80 shrink-0 p-1">
            <Image src={image} alt={name} fill sizes="44px" className="object-contain" />
          </div>
          <div className="min-w-0 hidden sm:block">
            <h4 className="text-xs sm:text-sm font-bold text-[#242424] truncate">
              {name}
            </h4>
            <div className="mt-0.5">
              <StarRating rating={rating} />
            </div>
          </div>
        </div>

        {/* Right: Price & Actions */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <span className="text-base sm:text-xl font-bold text-[#4933d1]">
            ${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>

          {/* Stepper */}
          <div className="hidden md:inline-flex items-center border border-gray-300 rounded-full bg-white overflow-hidden h-9">
            <button
              type="button"
              className="w-8 h-full flex items-center justify-center text-gray-600 hover:text-purple-700 text-sm font-semibold cursor-pointer"
            >
              -
            </button>
            <span className="w-8 text-center text-xs font-semibold text-gray-800 select-none">
              1
            </span>
            <button
              type="button"
              className="w-8 h-full flex items-center justify-center text-gray-600 hover:text-purple-700 text-sm font-semibold cursor-pointer"
            >
              +
            </button>
          </div>

          {/* Add to Cart */}
          <button
            type="button"
            className="px-4 sm:px-6 py-2 rounded-full font-semibold uppercase tracking-wider text-[11px] sm:text-xs text-white bg-[#4933d1] hover:bg-[#3d29b3] transition-all shadow-sm cursor-pointer"
          >
            Add to cart
          </button>

          {/* Buy Now */}
          <button
            type="button"
            className="hidden sm:inline-block px-5 py-2 rounded-full font-semibold uppercase tracking-wider text-[11px] sm:text-xs text-white bg-[#242424] hover:bg-black transition-all shadow-sm cursor-pointer"
          >
            Buy now
          </button>

          {/* Wishlist & Compare Icons */}
          <div className="hidden lg:flex items-center gap-1.5 pl-2 border-l border-gray-200">
            <button
              type="button"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 cursor-pointer"
              title="Compare"
            >
              <CompareIcon className="w-4 h-4" />
            </button>
            <button
              type="button"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 cursor-pointer"
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

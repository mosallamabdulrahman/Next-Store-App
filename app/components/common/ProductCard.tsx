"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Product } from "@app/types/product";
import {
  StarRating,
  CartIcon,
  HeartIcon,
  CompareIcon,
  EyeIcon,
  CheckIcon,
} from "@app/components/common/Icons";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 1500);
  };

  const primarySrc =
    product?.images?.[0]?.src ||
    product?.primaryImage?.src ||
    "/images/Greatwall_Luyuan_Logo_Full_Transparent_Native.webp";
  const secondarySrc = product?.images?.[1]?.src;
  const discountPercent =
    product.regularPrice > product.price && product.regularPrice > 0
      ? Math.round(
          ((product.regularPrice - product.price) / product.regularPrice) * 100,
        )
      : 0;

  return (
    <article className="group relative bg-white rounded-2xl border border-[#E5E0D8] p-3 sm:p-3.5 flex flex-col justify-between hover:border-[#0F3D3E]/40 hover:shadow-[0_14px_32px_-12px_rgba(15,61,62,0.12)] transition-all duration-300 ease-out">
      {/* Media Frame */}
      <div className="relative w-full aspect-[4/5] bg-[#F2EFE9]/65 rounded-xl overflow-hidden mb-3.5">
        <Link
          href={`/product/${product.slug}`}
          className="relative w-full h-full flex items-center justify-center p-4"
        >
          {/* Primary Image */}
          <Image
            src={primarySrc}
            alt={product?.images?.[0]?.alt || product.name}
            width={500}
            height={500}
            loading="lazy"
            className={`max-h-full max-w-full object-contain mix-blend-multiply transition-all duration-500 ease-out ${
              secondarySrc
                ? "group-hover:opacity-0 group-hover:scale-95"
                : "group-hover:scale-105"
            }`}
          />

          {/* Secondary Hover Swap Image */}
          {secondarySrc && (
            <Image
              src={secondarySrc}
              alt={`${product.name} alternate view`}
              width={500}
              height={500}
              loading="lazy"
              className="absolute inset-0 m-auto max-h-[85%] max-w-[85%] object-contain mix-blend-multiply opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out"
            />
          )}
        </Link>

        {/* Top Start Badges */}
        <div className="absolute top-2.5 start-2.5 z-10 flex flex-col items-start gap-1.5 pointer-events-none">
          {discountPercent > 0 && (
            <span className="bg-[#E85D3F] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs tabular-nums">
              -{discountPercent}%
            </span>
          )}
          {product?.categories?.[0] && (
            <span
              className={`text-[10px] font-semibold tracking-wide px-2.5 py-0.5 rounded-full backdrop-blur-xs ${
                product.categories?.[0]?.name === "Sale"
                  ? "bg-[#E85D3F] text-white"
                  : product.categories?.[0]?.name === "Hot"
                    ? "bg-[#F4A261] text-[#18181B]"
                    : "bg-[#FAF9F6]/90 text-[#0F3D3E] border border-[#E5E0D8]"
              }`}
            >
              {product.categories?.[0]?.name.replace(/&amp;/g, "&")}
            </span>
          )}
        </div>

        {/* Floating Action Cluster */}
        <div className="absolute top-2.5 end-2.5 z-10 flex flex-col gap-1.5 sm:opacity-0 sm:translate-x-2 rtl:sm:-translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
          <button
            type="button"
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs shadow-xs border border-[#E5E0D8] flex items-center justify-center transition-all active:scale-[0.95] cursor-pointer ${
              isWishlisted
                ? "text-[#E85D3F] border-[#E85D3F]/40"
                : "text-[#57534E] hover:text-[#E85D3F] hover:border-[#E85D3F]/30"
            }`}
            title="Add to Wishlist"
            aria-label="Wishlist"
          >
            <HeartIcon
              className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`}
            />
          </button>
          <button
            type="button"
            className="hidden sm:flex w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs shadow-xs border border-[#E5E0D8] text-[#57534E] hover:text-[#0F3D3E] hover:border-[#0F3D3E]/30 items-center justify-center transition-all active:scale-[0.95] cursor-pointer"
            title="Compare"
            aria-label="Compare"
          >
            <CompareIcon className="w-4 h-4" />
          </button>
          <Link
            href={`/product/${product.slug}`}
            className="hidden sm:flex w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs shadow-xs border border-[#E5E0D8] text-[#57534E] hover:text-[#0F3D3E] hover:border-[#0F3D3E]/30 items-center justify-center transition-all active:scale-[0.95]"
            title="Quick View"
            aria-label="Quick View"
          >
            <EyeIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* Floating Quick-Add Pill */}
        <div className="absolute inset-x-2.5 bottom-2.5 z-10 sm:opacity-0 sm:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
          <button
            type="button"
            onClick={handleAddToCart}
            className={`w-full min-h-10 px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-all duration-200 active:scale-[0.98] cursor-pointer ${
              isAddedToCart
                ? "bg-[#0F3D3E] text-[#FAF9F6]"
                : "bg-[#E85D3F] hover:bg-[#D1492B] text-white"
            }`}
            aria-label="Add to cart"
          >
            {isAddedToCart ? (
              <>
                <CheckIcon className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <CartIcon className="w-3.5 h-3.5" />
                <span>Quick Add</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="flex flex-col flex-1 justify-between px-0.5">
        <div>
          <div className="flex items-center justify-between gap-2 text-[11px] text-[#57534E] mb-1">
            <span className="truncate font-medium">
              {product?.categories?.[0]?.name.replace(/&amp;/g, "&") ??
                "Essentials"}
            </span>
            <div className="flex items-center gap-1 font-semibold text-[#18181B] shrink-0 tabular-nums">
              <span className="text-[#F4A261]">★</span>
              <span>
                {product.averageRating ? product.averageRating.toFixed(1) : "5.0"}
              </span>
            </div>
          </div>

          <Link href={`/product/${product.slug}`} className="block mb-2">
            <h3 className="font-display text-sm font-bold text-[#18181B] group-hover:text-[#0F3D3E] transition-colors line-clamp-2 leading-snug">
              {product.name}
            </h3>
          </Link>
        </div>

        <div className="space-y-2 pt-2 border-t border-[#E5E0D8]/70">
          <StarRating rating={product.averageRating || 5} />

          <div className="flex items-baseline justify-between gap-2">
            <div className="flex items-baseline gap-1.5 tabular-nums">
              <span className="text-base font-extrabold text-[#0F3D3E]">
                EGP {product.price}
              </span>
              {product.regularPrice > product.price && (
                <span className="text-xs text-[#57534E]/70 line-through">
                  {product.regularPrice}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

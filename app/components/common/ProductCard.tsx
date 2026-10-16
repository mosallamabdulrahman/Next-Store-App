"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Product } from "@app/types";
import {
  StarRating,
  CartIcon,
  HeartIcon,
  CompareIcon,
  EyeIcon,
} from "@app/components/common/Icons";

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

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100/90 p-3.5 sm:p-4 flex flex-col justify-between hover:border-purple-200 hover:shadow-lg hover:shadow-purple-700/5 transition-all duration-300">
      {/* Product Image Area */}
      <div className="relative w-full aspect-square bg-gray-50/50 rounded-xl overflow-hidden mb-3 flex items-center justify-center p-2">
        {/* Badges */}
        {product.tag && (
          <span
            className={`absolute top-2 left-2 z-10 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
              product.tag === "Sale"
                ? "bg-rose-500 text-white"
                : product.tag === "Hot"
                  ? "bg-amber-500 text-white"
                  : "bg-purple-700 text-white"
            }`}
          >
            {product.tag}
          </span>
        )}

        {/* Hover Action buttons overlay */}
        <div className="absolute top-2 right-2 z-10 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0">
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`p-1.5 rounded-full bg-white shadow-xs border border-gray-100 transition-colors ${
              isWishlisted
                ? "text-rose-500"
                : "text-gray-500 hover:text-purple-700"
            }`}
            title="Add to Wishlist"
            aria-label="Wishlist"
          >
            <HeartIcon
              className={`w-3.5 h-3.5 ${isWishlisted ? "fill-current" : ""}`}
            />
          </button>
          <button
            className="p-1.5 rounded-full bg-white shadow-xs border border-gray-100 text-gray-500 hover:text-purple-700 transition-colors"
            title="Compare"
            aria-label="Compare"
          >
            <CompareIcon className="w-3.5 h-3.5" />
          </button>
          <button
            className="p-1.5 rounded-full bg-white shadow-xs border border-gray-100 text-gray-500 hover:text-purple-700 transition-colors"
            title="Quick View"
            aria-label="Quick View"
          >
            <EyeIcon className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Main Image */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-108"
          loading="lazy"
        />
      </div>

      {/* Product Information */}
      <div className="flex flex-col flex-1 justify-between">
        {/* Category & Rating Number */}
        <div className="flex items-center justify-between text-[11px] text-gray-400 mb-1">
          <span className="hover:text-purple-700 transition-colors cursor-pointer line-clamp-1">
            {product.category}
          </span>
          <div className="flex items-center gap-1 font-semibold text-gray-600">
            <span>{product.rating.toFixed(1)}</span>
            <span className="text-yellow-400">★</span>
          </div>
        </div>

        {/* Product Title */}
        <Link href="#" className="block mb-2">
          <h3 className="text-xs sm:text-[13px] font-bold text-gray-900 group-hover:text-purple-700 transition-colors line-clamp-2 leading-snug">
            {product.name}
          </h3>
        </Link>

        {/* Stars */}
        <div className="mb-2">
          <StarRating rating={product.rating} />
        </div>

        {/* Price & Add to Cart button */}
        <div className="flex items-center justify-between pt-1 border-t border-gray-50">
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm sm:text-base font-extrabold text-purple-700">
              ${product.price.toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="text-[11px] text-gray-400 line-through">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className={`p-2 rounded-full transition-all duration-200 flex items-center justify-center ${
              isAddedToCart
                ? "bg-emerald-600 text-white scale-105"
                : "bg-gray-100 hover:bg-purple-700 text-gray-700 hover:text-white"
            }`}
            aria-label="Add to cart"
          >
            <CartIcon className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

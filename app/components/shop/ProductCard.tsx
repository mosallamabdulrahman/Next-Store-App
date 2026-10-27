"use client";
import React, { useState } from "react";
import { Product } from "@app/types";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-full max-w-[280px] bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
      <div className="p-4 flex flex-col">
        <div className="flex justify-end gap-3.5 text-gray-700">
          <button
            type="button"
            className="hover:text-indigo-600 transition-colors"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
              <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
              <path d="M7 21h10" />
              <path d="M12 3v18" />
              <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
            </svg>
          </button>
          <button
            type="button"
            className="hover:text-indigo-600 transition-colors"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          <button
            type="button"
            className="hover:text-indigo-600 transition-colors"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </button>
        </div>

        <Link
          href={`/product/${product.slug}`}
          className="w-full h-44 flex items-center justify-center my-3"
        >
          <Image
            src={product.images[0].src}
            alt={product.images[0].alt}
            className="max-h-full max-w-full object-contain"
            width={176}
            height={176}
          />
        </Link>

        {/* القسم والتقييم */}
        <div className="flex items-center justify-between text-sm mt-2">
          <div className="flex gap-2">
            {product.categories?.map((cat, index, array) => (
              <Link
                key={cat.id}
                href={`/product-category/${cat.slug}`}
                className="text-gray-400 font-medium"
              >
                {cat.name}
                {index < array.length - 1 && (
                  <span className="text-gray-400">,</span>
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <span className="text-gray-500 font-medium">
              {product.average_rating}
            </span>
            <span className="text-amber-400 text-sm">★</span>
          </div>
        </div>

        <h3 className="text-gray-800 font-bold text-[15px] mt-1 line-clamp-1">
          {product.name}
        </h3>
      </div>

      {/* الجزء السفلي: السعر وأيقونة السلة */}
      <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
        <span className="text-[#4338ca] font-bold text-lg">
          EGP{product.price}
        </span>
        <button
          type="button"
          className="text-gray-700 hover:text-indigo-600 transition-colors"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RelatedProductItem } from "@app/data/productData";
import { CartIcon, CompareIcon, HeartIcon, EyeIcon } from "@app/components/common/Icons";

interface ProductRelatedProps {
  products: RelatedProductItem[];
}

export const ProductRelated: React.FC<ProductRelatedProps> = ({ products }) => {
  return (
    <section className="mb-14">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#242424] mb-6 tracking-tight">
        You may also like
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white border border-gray-200/80 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-200 flex flex-col justify-between"
          >
            {/* Image Box */}
            <div className="relative aspect-[4/5] w-full bg-gray-50/50 p-4 overflow-hidden flex items-center justify-center">
              {/* Primary Image */}
              <Link href={`/product/${item.slug}`} className="relative w-full h-full block">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className={`object-contain transition-opacity duration-300 ${
                    item.hoverImage ? "group-hover:opacity-0" : "group-hover:scale-105"
                  }`}
                />

                {/* Hover Swap Image via pure CSS */}
                {item.hoverImage && (
                  <Image
                    src={item.hoverImage}
                    alt={`${item.title} - Alternative`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-contain absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                )}
              </Link>

              {/* Floating Quick Action Buttons */}
              <div className="absolute top-2 right-2 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0 z-10">
                <Link
                  href={`/product/${item.slug}`}
                  className="w-7 h-7 rounded-full bg-white text-gray-700 hover:text-[#4933d1] hover:bg-gray-50 flex items-center justify-center shadow-xs border border-gray-100 cursor-pointer"
                  title="Quick view"
                >
                  <EyeIcon className="w-3.5 h-3.5" />
                </Link>
                <button
                  type="button"
                  className="w-7 h-7 rounded-full bg-white text-gray-700 hover:text-[#4933d1] hover:bg-gray-50 flex items-center justify-center shadow-xs border border-gray-100 cursor-pointer"
                  title="Compare"
                >
                  <CompareIcon className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  className="w-7 h-7 rounded-full bg-white text-gray-700 hover:text-rose-600 hover:bg-gray-50 flex items-center justify-center shadow-xs border border-gray-100 cursor-pointer"
                  title="Add to wishlist"
                >
                  <HeartIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Info Box */}
            <div className="p-3.5 flex flex-col flex-1 justify-between">
              <div>
                <p className="text-[11px] text-gray-400 mb-1">{item.category}</p>
                <Link
                  href={`/product/${item.slug}`}
                  className="text-xs font-semibold text-gray-800 line-clamp-1 hover:text-[#4933d1] transition-colors"
                >
                  {item.title}
                </Link>
              </div>

              {/* Price & Add to Cart */}
              <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-gray-100">
                <span className="text-xs font-bold text-gray-900">
                  ${item.price.toFixed(2)}
                </span>
                <button
                  type="button"
                  className="w-7 h-7 rounded-full bg-gray-100 hover:bg-[#4933d1] text-gray-700 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  title="Add to cart"
                >
                  <CartIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

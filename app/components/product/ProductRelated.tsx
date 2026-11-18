import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RelatedProductItem } from "@app/data/productData";
import {
  CartIcon,
  CompareIcon,
  HeartIcon,
  EyeIcon,
} from "@app/components/common/Icons";

interface ProductRelatedProps {
  products: RelatedProductItem[];
}

export const ProductRelated: React.FC<ProductRelatedProps> = ({ products }) => {
  return (
    <section className="mb-14">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#18181B] mb-6 tracking-tight">
        You may also like
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white border border-[#E5E0D8] rounded-2xl overflow-hidden hover:border-[#0F3D3E]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between p-2.5"
          >
            <div className="relative aspect-[4/5] w-full bg-[#F2EFE9]/65 rounded-xl p-3 overflow-hidden flex items-center justify-center mb-3">
              <Link
                href={`/product/${item.slug}`}
                className="relative w-full h-full block"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className={`object-contain mix-blend-multiply transition-opacity duration-300 ${
                    item.hoverImage
                      ? "group-hover:opacity-0"
                      : "group-hover:scale-105"
                  }`}
                />

                {item.hoverImage && (
                  <Image
                    src={item.hoverImage}
                    alt={`${item.title} - Alternative`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-contain mix-blend-multiply absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                )}
              </Link>

              <div className="absolute top-2 end-2 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-1 rtl:-translate-x-1 group-hover:translate-x-0 z-10">
                <Link
                  href={`/product/${item.slug}`}
                  className="w-7 h-7 rounded-full bg-white text-[#57534E] hover:text-[#0F3D3E] flex items-center justify-center shadow-xs border border-[#E5E0D8] cursor-pointer"
                  title="Quick view"
                >
                  <EyeIcon className="w-3.5 h-3.5" />
                </Link>
                <button
                  type="button"
                  className="w-7 h-7 rounded-full bg-white text-[#57534E] hover:text-[#0F3D3E] flex items-center justify-center shadow-xs border border-[#E5E0D8] cursor-pointer"
                  title="Compare"
                >
                  <CompareIcon className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  className="w-7 h-7 rounded-full bg-white text-[#57534E] hover:text-[#E85D3F] flex items-center justify-center shadow-xs border border-[#E5E0D8] cursor-pointer"
                  title="Add to wishlist"
                >
                  <HeartIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="px-1 flex flex-col flex-1 justify-between">
              <div>
                <p className="text-[11px] text-[#57534E] mb-1">
                  {item.category}
                </p>
                <Link
                  href={`/product/${item.slug}`}
                  className="font-display text-xs font-bold text-[#18181B] line-clamp-1 hover:text-[#0F3D3E] transition-colors"
                >
                  {item.title}
                </Link>
              </div>

              <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-[#E5E0D8]">
                <span className="text-xs font-extrabold text-[#0F3D3E] tabular-nums">
                  ${item.price.toFixed(2)}
                </span>
                <button
                  type="button"
                  className="w-8 h-8 rounded-xl bg-[#F2EFE9] hover:bg-[#E85D3F] text-[#18181B] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
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

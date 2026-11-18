import type { Product } from "@app/types/product";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const secondaryImage = product.images?.[1]?.src;
  const discountPercent =
    product.regularPrice > product.price && product.regularPrice > 0
      ? Math.round(
          ((product.regularPrice - product.price) / product.regularPrice) * 100,
        )
      : 0;

  return (
    <article className="group w-full bg-white rounded-2xl border border-[#E5E0D8] overflow-hidden flex flex-col justify-between hover:border-[#0F3D3E]/40 hover:shadow-[0_14px_32px_-12px_rgba(15,61,62,0.12)] transition-all duration-300 ease-out">
      <div className="p-3 sm:p-3.5 flex flex-col flex-1">
        {/* Media Frame */}
        <div className="relative w-full aspect-[4/5] bg-[#F2EFE9]/65 rounded-xl overflow-hidden mb-3.5">
          {discountPercent > 0 && (
            <span className="absolute top-2.5 start-2.5 z-10 bg-[#E85D3F] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full tabular-nums">
              -{discountPercent}%
            </span>
          )}

          {/* Top End Floating Actions */}
          <div className="absolute top-2.5 end-2.5 z-10 flex flex-col gap-1.5 sm:opacity-0 sm:translate-x-2 rtl:sm:-translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
            <button
              type="button"
              aria-label="Compare product"
              className="w-8 h-8 rounded-full bg-white/95 border border-[#E5E0D8] text-[#57534E] hover:text-[#0F3D3E] hover:border-[#0F3D3E]/30 flex items-center justify-center shadow-xs transition-colors cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
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
            <Link
              href={`/product/${product.slug}`}
              aria-label="Quick view product"
              className="w-8 h-8 rounded-full bg-white/95 border border-[#E5E0D8] text-[#57534E] hover:text-[#0F3D3E] hover:border-[#0F3D3E]/30 flex items-center justify-center shadow-xs transition-colors"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </Link>
            <button
              type="button"
              aria-label="Add to wishlist"
              className="w-8 h-8 rounded-full bg-white/95 border border-[#E5E0D8] text-[#57534E] hover:text-[#E85D3F] hover:border-[#E85D3F]/30 flex items-center justify-center shadow-xs transition-colors cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </button>
          </div>

          <Link
            href={`/product/${product.slug}`}
            className="relative w-full h-full flex items-center justify-center p-4"
          >
            <Image
              src={product.primaryImage.src}
              alt={product.primaryImage.alt}
              width={220}
              height={220}
              className={`max-h-full max-w-full object-contain mix-blend-multiply transition-all duration-500 ease-out ${
                secondaryImage
                  ? "group-hover:opacity-0 group-hover:scale-95"
                  : "group-hover:scale-105"
              }`}
            />
            {secondaryImage && (
              <Image
                src={secondaryImage}
                alt={`${product.name} alternate view`}
                width={220}
                height={220}
                className="absolute inset-0 m-auto max-h-[85%] max-w-[85%] object-contain mix-blend-multiply opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out"
              />
            )}
          </Link>
        </div>

        {/* Category & Rating */}
        <div className="flex items-center justify-between gap-2 text-[11px] mb-1.5">
          <div className="flex flex-wrap gap-1 min-w-0 truncate">
            {product.categories.map((cat, index, array) => (
              <Link
                key={cat.id}
                href={`/product-category/${cat.slug}`}
                className="text-[#57534E] hover:text-[#0F3D3E] font-medium transition-colors"
              >
                {cat.name.replace(/&amp;/g, "&")}
                {index < array.length - 1 && (
                  <span className="text-[#57534E]/60">,</span>
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1 shrink-0 tabular-nums">
            <span className="text-[#F4A261] text-xs">★</span>
            <span className="text-[#18181B] font-semibold">
              {product.averageRating ? product.averageRating.toFixed(1) : "5.0"}
            </span>
          </div>
        </div>

        <Link href={`/product/${product.slug}`}>
          <h3 className="font-display text-[#18181B] group-hover:text-[#0F3D3E] font-bold text-sm leading-snug line-clamp-2 transition-colors">
            {product.name}
          </h3>
        </Link>
      </div>

      {/* Bottom Price & Quick Cart */}
      <div className="px-3.5 py-3 border-t border-[#E5E0D8]/70 flex items-center justify-between gap-2">
        <div className="flex items-baseline gap-1.5 tabular-nums">
          <span className="text-[#0F3D3E] font-extrabold text-base">
            EGP {product.price}
          </span>
          {product.regularPrice > product.price && (
            <span className="text-xs text-[#57534E]/70 line-through">
              {product.regularPrice}
            </span>
          )}
        </div>

        <button
          type="button"
          aria-label="Add to cart"
          className="min-w-10 min-h-10 rounded-xl bg-[#F2EFE9] hover:bg-[#E85D3F] text-[#18181B] hover:text-white active:scale-[0.96] flex items-center justify-center transition-all duration-200 cursor-pointer"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        </button>
      </div>
    </article>
  );
}

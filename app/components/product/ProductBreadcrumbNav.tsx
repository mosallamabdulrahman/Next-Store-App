import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GridDotsIcon } from "./ProductIcons";
import { NavProductItem } from "@app/data/productData";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface ProductBreadcrumbNavProps {
  breadcrumbs: BreadcrumbItem[];
  navPrev?: NavProductItem;
  navNext?: NavProductItem;
}

export const ProductBreadcrumbNav: React.FC<ProductBreadcrumbNavProps> = ({
  breadcrumbs,
  navPrev,
  navNext,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 pb-5 border-b border-[#E5E0D8] mb-6">
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-1.5 text-xs text-[#57534E]"
      >
        {breadcrumbs.map((crumb, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          return (
            <React.Fragment key={idx}>
              {idx > 0 && <span className="text-[#E5E0D8]">/</span>}
              {isLast ? (
                <span className="text-[#18181B] font-semibold">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="hover:text-[#0F3D3E] transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>

      <div className="flex items-center gap-1.5 self-end sm:self-auto shrink-0">
        {navPrev && (
          <div className="relative group">
            <Link
              href={`/product/${navPrev.slug}`}
              className="w-9 h-9 rounded-xl border border-[#E5E0D8] hover:border-[#0F3D3E] hover:text-[#0F3D3E] flex items-center justify-center text-[#57534E] transition-all bg-white shadow-2xs"
              aria-label={`Previous product: ${navPrev.name}`}
            >
              <svg
                className="w-4 h-4 rtl:rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </Link>

            <div className="absolute end-0 top-full mt-2 w-56 bg-white border border-[#E5E0D8] rounded-2xl p-2.5 shadow-xl z-50 items-center gap-3 hidden group-hover:flex">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#F2EFE9] shrink-0 border border-[#E5E0D8]">
                <Image
                  src={navPrev.image}
                  alt={navPrev.name}
                  fill
                  sizes="48px"
                  className="object-contain p-1 mix-blend-multiply"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-[#18181B] truncate">
                  {navPrev.name}
                </p>
                <p className="text-xs font-bold text-[#0F3D3E] mt-0.5 tabular-nums">
                  ${navPrev.price.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        )}

        <Link
          href="/shop"
          className="w-9 h-9 rounded-xl border border-[#E5E0D8] hover:border-[#0F3D3E] hover:text-[#0F3D3E] flex items-center justify-center text-[#57534E] transition-all bg-white shadow-2xs group relative"
          aria-label="Back to products"
        >
          <GridDotsIcon className="w-3.5 h-3.5" />
          <span className="sr-only">Back to products</span>
        </Link>

        {navNext && (
          <div className="relative group">
            <Link
              href={`/product/${navNext.slug}`}
              className="w-9 h-9 rounded-xl border border-[#E5E0D8] hover:border-[#0F3D3E] hover:text-[#0F3D3E] flex items-center justify-center text-[#57534E] transition-all bg-white shadow-2xs"
              aria-label={`Next product: ${navNext.name}`}
            >
              <svg
                className="w-4 h-4 rtl:rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>

            <div className="absolute end-0 top-full mt-2 w-56 bg-white border border-[#E5E0D8] rounded-2xl p-2.5 shadow-xl z-50 items-center gap-3 hidden group-hover:flex">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#F2EFE9] shrink-0 border border-[#E5E0D8]">
                <Image
                  src={navNext.image}
                  alt={navNext.name}
                  fill
                  sizes="48px"
                  className="object-contain p-1 mix-blend-multiply"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-[#18181B] truncate">
                  {navNext.name}
                </p>
                <p className="text-xs font-bold text-[#0F3D3E] mt-0.5 tabular-nums">
                  ${navNext.price.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

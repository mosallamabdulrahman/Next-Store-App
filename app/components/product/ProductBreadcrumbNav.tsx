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
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 pb-5 border-b border-gray-100/80 mb-6">
      {/* Breadcrumb Links */}
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-gray-400">
        {breadcrumbs.map((crumb, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          return (
            <React.Fragment key={idx}>
              {idx > 0 && <span className="text-gray-300">/</span>}
              {isLast ? (
                <span className="text-gray-800 font-semibold">{crumb.label}</span>
              ) : (
                <Link
                  href={crumb.href}
                  className="hover:text-purple-700 transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>

      {/* Prev / Back / Next Product Navigation with CSS Hover Tooltips */}
      <div className="flex items-center gap-1 self-end sm:self-auto shrink-0">
        {/* Previous Product Button */}
        {navPrev && (
          <div className="relative group">
            <Link
              href={`/product/${navPrev.slug}`}
              className="w-8 h-8 rounded-full border border-gray-200 hover:border-purple-600 hover:text-purple-700 flex items-center justify-center text-gray-500 transition-all bg-white shadow-2xs hover:shadow-xs"
              aria-label={`Previous product: ${navPrev.name}`}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </Link>

            {/* Hover Popover via CSS */}
            <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-gray-200/90 rounded-2xl p-2.5 shadow-xl z-50 items-center gap-3 hidden group-hover:flex animate-in fade-in zoom-in-95 duration-150">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gray-50 shrink-0 border border-gray-100">
                <Image
                  src={navPrev.image}
                  alt={navPrev.name}
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-gray-800 truncate hover:text-purple-700">
                  {navPrev.name}
                </p>
                <p className="text-xs font-bold text-purple-700 mt-0.5">
                  ${navPrev.price.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Back to Products (Grid icon) */}
        <Link
          href="/shop"
          className="w-8 h-8 rounded-full border border-gray-200 hover:border-purple-600 hover:text-purple-700 flex items-center justify-center text-gray-500 transition-all bg-white shadow-2xs hover:shadow-xs group relative"
          aria-label="Back to products"
        >
          <GridDotsIcon className="w-3.5 h-3.5 group-hover:text-purple-700 transition-colors" />
          <span className="sr-only">Back to products</span>
        </Link>

        {/* Next Product Button */}
        {navNext && (
          <div className="relative group">
            <Link
              href={`/product/${navNext.slug}`}
              className="w-8 h-8 rounded-full border border-gray-200 hover:border-purple-600 hover:text-purple-700 flex items-center justify-center text-gray-500 transition-all bg-white shadow-2xs hover:shadow-xs"
              aria-label={`Next product: ${navNext.name}`}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>

            {/* Hover Popover via CSS */}
            <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-gray-200/90 rounded-2xl p-2.5 shadow-xl z-50 items-center gap-3 hidden group-hover:flex animate-in fade-in zoom-in-95 duration-150">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gray-50 shrink-0 border border-gray-100">
                <Image
                  src={navNext.image}
                  alt={navNext.name}
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-gray-800 truncate hover:text-purple-700">
                  {navNext.name}
                </p>
                <p className="text-xs font-bold text-purple-700 mt-0.5">
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

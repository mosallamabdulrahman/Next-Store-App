"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useShopSidebar } from "@app/context/ShopSidebarContext";
import { Category } from "@/app/types/category";

interface CategoriesListProps {
  categories: Category[];
}

const CategoriesList: React.FC<CategoriesListProps> = ({ categories }) => {
  return (
    <div>
      <h3 className="font-display text-base font-bold text-[#18181B] tracking-tight mb-3.5">
        Departments
      </h3>
      <ul className="flex flex-col gap-1">
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link
              href={`/product-category/${cat.slug}`}
              className="group flex items-center justify-between px-3 py-2 rounded-xl text-sm text-[#57534E] hover:text-[#0F3D3E] hover:bg-white transition-all"
            >
              <span className="group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform duration-150 font-medium">
                {cat.name.replace(/&amp;/g, "&")}
              </span>
              <span className="text-[11px] font-semibold text-[#57534E] group-hover:text-[#0F3D3E] bg-[#FAF9F6] border border-[#E5E0D8] group-hover:border-[#0F3D3E]/40 rounded-full px-2.5 py-0.5 min-w-[30px] text-center tabular-nums transition-colors">
                {cat.productCount}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface PriceFilterProps {
  minPrice: number;
  maxPrice: number;
  minLimit: number;
  maxLimit: number;
  onMinChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMaxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PriceFilterSection: React.FC<PriceFilterProps> = ({
  minPrice,
  maxPrice,
  minLimit,
  maxLimit,
  onMinChange,
  onMaxChange,
}) => {
  const minPercentage = ((minPrice - minLimit) / (maxLimit - minLimit)) * 100;
  const maxPercentage = ((maxPrice - minLimit) / (maxLimit - minLimit)) * 100;

  return (
    <div className="pt-2">
      <h3 className="font-display text-base font-bold text-[#18181B] tracking-tight mb-4">
        Filter By Price
      </h3>

      <div className="relative py-2 select-none">
        <div className="relative h-1.5 w-full bg-[#E5E0D8] rounded-full">
          <div
            className="absolute h-1.5 bg-[#0F3D3E] rounded-full"
            style={{
              insetInlineStart: `${minPercentage}%`,
              width: `${maxPercentage - minPercentage}%`,
            }}
          />

          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rtl:translate-x-1/2 w-3.5 h-3.5 bg-[#E85D3F] border-2 border-white rounded-full shadow-xs pointer-events-none"
            style={{ insetInlineStart: `${minPercentage}%` }}
          />

          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rtl:translate-x-1/2 w-3.5 h-3.5 bg-[#E85D3F] border-2 border-white rounded-full shadow-xs pointer-events-none"
            style={{ insetInlineStart: `${maxPercentage}%` }}
          />
        </div>

        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          step={100}
          value={minPrice}
          onChange={onMinChange}
          className="absolute inset-0 w-full opacity-0 cursor-pointer pointer-events-auto h-5 -top-1"
          aria-label="Minimum Price"
        />
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          step={100}
          value={maxPrice}
          onChange={onMaxChange}
          className="absolute inset-0 w-full opacity-0 cursor-pointer pointer-events-auto h-5 -top-1"
          aria-label="Maximum Price"
        />
      </div>

      <div className="flex items-center justify-between gap-2 mt-4">
        <div className="text-xs text-[#57534E] tabular-nums">
          <span>Range: </span>
          <strong className="text-[#18181B]">
            ${minPrice.toLocaleString()}
          </strong>
          <span className="mx-1">—</span>
          <strong className="text-[#18181B]">
            ${maxPrice.toLocaleString()}
          </strong>
        </div>

        <button
          type="button"
          className="bg-[#0F3D3E] hover:bg-[#E85D3F] active:scale-[0.98] text-[#FAF9F6] text-xs font-semibold px-4 py-2 rounded-xl transition-all cursor-pointer"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export interface ShopSidebarClientProps {
  categories?: Category[];
}

export const ShopSidebarClient: React.FC<ShopSidebarClientProps> = ({
  categories = [],
}) => {
  const { isOpen, closeSidebar } = useShopSidebar();

  const minLimit = 0;
  const maxLimit = 13500;
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(13500);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxPrice - 500);
    setMinPrice(Math.max(minLimit, value));
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minPrice + 500);
    setMaxPrice(Math.min(maxLimit, value));
  };

  return (
    <>
      <aside className="hidden lg:block w-[275px] xl:w-[290px] shrink-0">
        <div className="sticky top-28 space-y-6">
          <div className="bg-[#F2EFE9]/75 border border-[#E5E0D8] rounded-3xl p-5">
            <CategoriesList categories={categories} />
          </div>

          <div className="bg-white border border-[#E5E0D8] rounded-3xl p-5">
            <PriceFilterSection
              minPrice={minPrice}
              maxPrice={maxPrice}
              minLimit={minLimit}
              maxLimit={maxLimit}
              onMinChange={handleMinChange}
              onMaxChange={handleMaxChange}
            />
          </div>
        </div>
      </aside>

      {/* Mobile Backdrop */}
      <div
        onClick={closeSidebar}
        className={`fixed inset-0 z-50 bg-[#18181B]/45 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Mobile Off-Canvas Drawer */}
      <div
        className={`fixed inset-y-0 start-0 z-50 w-[300px] sm:w-[330px] max-w-[85vw] bg-[#FAF9F6] border-e border-[#E5E0D8] h-full overflow-y-auto p-6 shadow-2xl transition-transform duration-300 ease-out lg:hidden flex flex-col justify-between ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full rtl:translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shop Filters"
      >
        <div>
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E5E0D8]">
            <span className="font-display text-sm font-bold text-[#18181B]">
              Filter Catalog
            </span>
            <button
              type="button"
              onClick={closeSidebar}
              className="inline-flex items-center gap-1.5 min-h-10 px-3 rounded-xl bg-[#F2EFE9] text-xs font-semibold text-[#18181B] hover:text-[#E85D3F] transition-colors cursor-pointer"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              <span>Close</span>
            </button>
          </div>

          <div className="mb-8">
            <CategoriesList categories={categories} />
          </div>

          <div className="pt-4 border-t border-[#E5E0D8]">
            <PriceFilterSection
              minPrice={minPrice}
              maxPrice={maxPrice}
              minLimit={minLimit}
              maxLimit={maxLimit}
              onMinChange={handleMinChange}
              onMaxChange={handleMaxChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSidebarClient;

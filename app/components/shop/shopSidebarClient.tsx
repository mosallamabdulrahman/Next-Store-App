"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useShopSidebar } from "@app/context/ShopSidebarContext";
import { ShopCategoryItem } from "@/app/types";

interface CategoriesListProps {
  categories: ShopCategoryItem[];
}

const CategoriesList: React.FC<CategoriesListProps> = ({ categories }) => {
  return (
    <div>
      <h3 className="text-[17px] font-bold text-gray-900 tracking-tight mb-3">
        Categories
      </h3>
      <ul className="flex flex-col">
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link
              href={`/product-category/${cat.slug}`}
              className="group flex items-center justify-between py-2 text-[14.5px] text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span className="group-hover:translate-x-0.5 transition-transform duration-150">
                {cat.name.replace(/&amp;/g, "&")}
              </span>
              <span className="text-xs font-normal text-gray-400 group-hover:text-gray-600 border border-gray-200 group-hover:border-gray-300 rounded-full px-2.5 py-0.5 min-w-[28px] text-center transition-colors">
                {cat.count}
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
      <h3 className="text-[17px] font-bold text-gray-900 tracking-tight mb-4">
        Filter By Price
      </h3>

      {/* Dual Slider Bar */}
      <div className="relative py-2 select-none">
        {/* Track Background */}
        <div className="relative h-1 w-full bg-gray-200 rounded-full">
          {/* Active Highlight Track */}
          <div
            className="absolute h-1 bg-[#5022c3] rounded-full"
            style={{
              left: `${minPercentage}%`,
              width: `${maxPercentage - minPercentage}%`,
            }}
          />

          {/* Left Handle Bar */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-1.5 h-3.5 bg-[#5022c3] rounded-xs cursor-pointer shadow-xs pointer-events-none"
            style={{ left: `${minPercentage}%` }}
          />

          {/* Right Handle Bar */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-1.5 h-3.5 bg-[#5022c3] rounded-xs cursor-pointer shadow-xs pointer-events-none"
            style={{ left: `${maxPercentage}%` }}
          />
        </div>

        {/* Range Inputs (Overlaid for native drag support) */}
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

      {/* Price Labels and Filter Action Button */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-500 font-normal">
          <span>Price: </span>
          <span className="font-bold text-gray-900">
            ${minPrice.toLocaleString()}
          </span>
          <span className="mx-1 text-gray-400">—</span>
          <span className="font-bold text-gray-900">
            ${maxPrice.toLocaleString()}
          </span>
        </div>

        <button
          type="button"
          className="bg-[#f4f4f4] hover:bg-gray-200 active:bg-gray-300 text-gray-800 text-xs font-semibold px-4 py-1.5 rounded-full transition-colors cursor-pointer"
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export interface ShopSidebarClientProps {
  categories?: ShopCategoryItem[];
}

export const ShopSidebarClient: React.FC<ShopSidebarClientProps> = ({
  categories = [],
}) => {
  const { isOpen, closeSidebar } = useShopSidebar();

  // Price filter interactive state ($0 - $13,500)
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
      {/* =========================================
          1. DESKTOP SIDEBAR (Static on Left)
          ========================================= */}
      <aside className="hidden lg:block w-[270px] xl:w-[285px] shrink-0">
        <div className="sticky top-24 space-y-6">
          {/* Categories Box Container */}
          <div className="bg-[#f8f8f8] rounded-3xl p-6 transition-shadow">
            <CategoriesList categories={categories} />
          </div>

          {/* Filter By Price */}
          <div className="px-2">
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

      {/* =========================================
          2. MOBILE OFF-CANVAS DRAWER
          ========================================= */}
      {/* Backdrop overlay */}
      <div
        onClick={closeSidebar}
        className={`fixed inset-0 z-50 bg-black/45 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-[300px] sm:w-[330px] max-w-[85vw] bg-white h-full overflow-y-auto p-6 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shop Filters"
      >
        <div>
          {/* Top Close Header */}
          <div className="flex justify-end pb-3 mb-5 border-b border-gray-100">
            <button
              type="button"
              onClick={closeSidebar}
              className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-black transition-colors cursor-pointer"
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

          {/* Categories List */}
          <div className="mb-8">
            <CategoriesList categories={categories} />
          </div>

          {/* Filter By Price */}
          <div>
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

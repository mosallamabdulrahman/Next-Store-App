"use client";

import useShopFilters from "@/hooks/useShopFilters";
import { useShopSidebar } from "@app/context/ShopSidebarContext";

export default function FiltersShop() {
  const {
    searchParams,
    handleFilterChange,
    handleSortChange,
    getCurrentSortValue,
  } = useShopFilters();

  const { openSidebar } = useShopSidebar();

  return (
    <>
      {/* Top Shop Header & Controls */}
      <div className="mb-6 pb-2">
        {/* Main Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* 1. Page Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Shop
          </h1>

          {/* 2. Controls and Filters */}
          <div className="flex items-center justify-between lg:justify-end gap-3 sm:gap-6 text-sm">
            {/* Mobile "☰ Filters" Toggle Button (Matches Screenshot 2) */}
            <button
              type="button"
              onClick={openSidebar}
              className="lg:hidden flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-indigo-600 transition-colors py-1 cursor-pointer"
            >
              <svg
                className="w-4 h-4 text-gray-700"
                viewBox="0 0 18 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <line x1="0.5" y1="2" x2="17.5" y2="2" />
                <line x1="0.5" y1="7" x2="17.5" y2="7" />
                <line x1="0.5" y1="12" x2="17.5" y2="12" />
              </svg>
              <span>Filters</span>
            </button>

            {/* Desktop Only: Show pagination options */}
            <div className="hidden md:flex items-center gap-1.5 text-gray-500 text-xs sm:text-sm font-medium">
              <span>Show :</span>
              {[9, 12, 18, 24].map((item, index, array) => {
                return (
                  <div className="flex gap-1" key={index}>
                    <button
                      onClick={() =>
                        handleFilterChange({ per_page: item.toString() })
                      }
                      className={`cursor-pointer ${
                        searchParams.get("per_page") === item.toString()
                          ? "font-bold text-gray-900"
                          : ""
                      }`}
                    >
                      {item}
                    </button>
                    {index < array.length - 1 && (
                      <span className="text-gray-300">/</span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Desktop Only: Grid column switcher */}
            <div className="hidden md:flex items-center gap-2 text-gray-400">
              {/* 3 columns */}
              <button
                type="button"
                className="hover:text-gray-700 transition-colors p-0.5 cursor-pointer"
                onClick={() => handleFilterChange({ per_row: "3" })}
                title="3 columns"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 18 18"
                  fill="currentColor"
                >
                  <circle cx="3" cy="3" r="1.5" />
                  <circle cx="9" cy="3" r="1.5" />
                  <circle cx="15" cy="3" r="1.5" />
                  <circle cx="3" cy="9" r="1.5" />
                  <circle cx="9" cy="9" r="1.5" />
                  <circle cx="15" cy="9" r="1.5" />
                  <circle cx="3" cy="15" r="1.5" />
                  <circle cx="9" cy="15" r="1.5" />
                  <circle cx="15" cy="15" r="1.5" />
                </svg>
              </button>

              {/* 4 columns */}
              <button
                type="button"
                className="text-gray-800 transition-colors p-0.5 cursor-pointer"
                title="4 columns"
                onClick={() => handleFilterChange({ per_row: "4" })}
              >
                <svg
                  className="w-5 h-4"
                  viewBox="0 0 24 18"
                  fill="currentColor"
                >
                  <circle cx="3" cy="3" r="1.4" />
                  <circle cx="9" cy="3" r="1.4" />
                  <circle cx="15" cy="3" r="1.4" />
                  <circle cx="21" cy="3" r="1.4" />
                  <circle cx="3" cy="9" r="1.4" />
                  <circle cx="9" cy="9" r="1.4" />
                  <circle cx="15" cy="9" r="1.4" />
                  <circle cx="21" cy="9" r="1.4" />
                  <circle cx="3" cy="15" r="1.4" />
                  <circle cx="9" cy="15" r="1.4" />
                  <circle cx="15" cy="15" r="1.4" />
                  <circle cx="21" cy="15" r="1.4" />
                </svg>
              </button>
            </div>

            {/* Sorting dropdown (Shown on both desktop and mobile) */}
            <div className="relative">
              <select
                defaultValue={getCurrentSortValue()}
                onChange={(e) => handleSortChange(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-full px-4 py-1.5 pr-8 text-xs text-gray-600 font-medium cursor-pointer outline-none hover:border-gray-300 focus:border-indigo-600 transition-colors"
              >
                <option value="date">Default sorting</option>
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="latest">Sort by latest</option>
                <option value="price-low">Sort by price: low to high</option>
                <option value="price-high">Sort by price: high to low</option>
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

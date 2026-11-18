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
  const currentPerRow = searchParams.get("per_row") || "4";

  return (
    <div className="mb-6 pb-4 border-b border-[#E5E0D8]">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="space-y-0.5">
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0F3D3E]">
            Mosalam Catalog
          </span>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#18181B] tracking-tight">
            Shop Collection
          </h1>
        </div>

        <div className="flex flex-wrap items-center justify-between lg:justify-end gap-3 sm:gap-5 text-sm">
          {/* Mobile Filters Trigger */}
          <button
            type="button"
            onClick={openSidebar}
            className="lg:hidden inline-flex items-center gap-2 min-h-11 px-4 py-2 rounded-xl bg-[#F2EFE9] border border-[#E5E0D8] text-xs font-semibold text-[#18181B] hover:border-[#0F3D3E] hover:text-[#0F3D3E] active:scale-[0.98] transition-all cursor-pointer"
          >
            <svg
              className="w-4 h-4"
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

          {/* Items per page */}
          <div className="hidden md:flex items-center gap-1.5 text-[#57534E] text-xs font-medium bg-[#F2EFE9]/70 border border-[#E5E0D8] rounded-full px-3.5 py-1.5">
            <span>Show:</span>
            {[9, 12, 18, 24].map((item, index, array) => (
              <div className="flex items-center gap-1" key={index}>
                <button
                  type="button"
                  onClick={() =>
                    handleFilterChange({ per_page: item.toString() })
                  }
                  className={`cursor-pointer tabular-nums px-1 transition-colors ${
                    searchParams.get("per_page") === item.toString()
                      ? "font-bold text-[#0F3D3E]"
                      : "hover:text-[#18181B]"
                  }`}
                >
                  {item}
                </button>
                {index < array.length - 1 && (
                  <span className="text-[#E5E0D8]">/</span>
                )}
              </div>
            ))}
          </div>

          {/* Grid density toggle */}
          <div className="hidden md:flex items-center gap-1.5 p-1 bg-[#F2EFE9]/70 border border-[#E5E0D8] rounded-xl">
            <button
              type="button"
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                currentPerRow === "3"
                  ? "bg-[#0F3D3E] text-[#FAF9F6]"
                  : "text-[#57534E] hover:text-[#18181B]"
              }`}
              onClick={() => handleFilterChange({ per_row: "3" })}
              title="3 columns"
              aria-label="3 columns grid"
            >
              <svg className="w-4 h-4" viewBox="0 0 18 18" fill="currentColor">
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

            <button
              type="button"
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                currentPerRow !== "3"
                  ? "bg-[#0F3D3E] text-[#FAF9F6]"
                  : "text-[#57534E] hover:text-[#18181B]"
              }`}
              title="4 columns"
              aria-label="4 columns grid"
              onClick={() => handleFilterChange({ per_row: "4" })}
            >
              <svg className="w-5 h-4" viewBox="0 0 24 18" fill="currentColor">
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

          {/* Sort dropdown */}
          <div className="relative">
            <select
              defaultValue={getCurrentSortValue()}
              onChange={(e) => handleSortChange(e.target.value)}
              aria-label="Sort products"
              className="appearance-none min-h-11 bg-white border border-[#E5E0D8] rounded-xl ps-4 pe-9 py-2 text-xs text-[#18181B] font-semibold cursor-pointer outline-none hover:border-[#0F3D3E] focus:border-[#0F3D3E] transition-colors"
            >
              <option value="date">Default sorting</option>
              <option value="popularity">Sort by popularity</option>
              <option value="rating">Sort by average rating</option>
              <option value="latest">Sort by latest</option>
              <option value="price-low">Sort by price: low to high</option>
              <option value="price-high">Sort by price: high to low</option>
            </select>
            <div className="pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-[#57534E]">
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
  );
}

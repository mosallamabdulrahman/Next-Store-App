"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface SearchProductItem {
  id: string | number;
  title: string;
  slug: string;
  price: number;
  oldPrice?: number;
  image: string;
}

export const STATIC_SEARCH_RESULTS: SearchProductItem[] = [
  {
    id: "1",
    title: "Thrustmaster TS-XW Racer",
    slug: "thrustmaster-ts-xw-racer",
    price: 899.0,
    oldPrice: 999.0,
    image:
      "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/thrustmaster-ts-xw-racer-1-430x491.jpg.webp",
  },
  {
    id: "2",
    title: "ACER Veriton Z2740G",
    slug: "acer-veriton-z2740g",
    price: 1150.0,
    image:
      "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/acer-veriton-z2740g-1-430x491.jpg.webp",
  },
  {
    id: "3",
    title: "ACER ConceptD CT300",
    slug: "acer-conceptd-ct300",
    price: 1199.0,
    image:
      "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/acer-conceptd-ct300-1-430x491.jpg.webp",
  },
  {
    id: "4",
    title: "Acer ConceptD 7 Ezel",
    slug: "acer-conceptd-7-ezel",
    price: 3800.0,
    image:
      "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/acer-conceptd-7-ezel-1-430x491.jpg.webp",
  },
  {
    id: "5",
    title: "Acer Predator Helios 300",
    slug: "acer-predator-helios-300",
    price: 1600.0,
    image:
      "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/acer-predator-helios-300-1-430x491.jpg.webp",
  },
  {
    id: "6",
    title: "Acer SA100 SATAIII",
    slug: "acer-sa100-sataiii",
    price: 30.0,
    image:
      "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/acer-sa100-sataiii-1-430x491.jpg.webp",
  },
  {
    id: "7",
    title: "Apacer NVMe M.2",
    slug: "apacer-nvme-m-2",
    price: 130.0,
    image:
      "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/apacer-nvme-m-2-1-430x491.jpg.webp",
  },
  {
    id: "8",
    title: "Acer Predator BiFrost Cooler",
    slug: "acer-predator-bifrost",
    price: 95.0,
    image:
      "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/dell-xps-dt-1-1-430x491.jpg.webp",
  },
];

interface SearchResultsDropdownProps {
  query?: string;
  products?: SearchProductItem[];
  onItemClick?: () => void;
}

const HighlightMatch: React.FC<{ text: string; query?: string }> = ({
  text,
  query,
}) => {
  const cleanQuery = query?.trim() || "";
  if (!cleanQuery) return <span>{text}</span>;

  const regex = new RegExp(
    `(${cleanQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
    "gi",
  );
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === cleanQuery.toLowerCase() ? (
          <span
            key={index}
            className="underline decoration-[#E85D3F] decoration-2 underline-offset-2 font-semibold text-[#0F3D3E]"
          >
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </span>
  );
};

export const SearchResultsDropdown: React.FC<SearchResultsDropdownProps> = ({
  query = "acer",
  products = STATIC_SEARCH_RESULTS,
  onItemClick,
}) => {
  if (!products || products.length === 0) return null;

  return (
    <div
      role="listbox"
      aria-label="Search results"
      className="absolute top-full start-0 end-0 mt-2 bg-white rounded-2xl shadow-xl border border-[#E5E0D8] z-50 overflow-hidden"
    >
      <div className="px-4 py-2 bg-[#F2EFE9]/70 border-b border-[#E5E0D8] flex items-center justify-between text-[11px] text-[#57534E] font-medium">
        <span>Quick Suggestions</span>
        <span className="tabular-nums">{products.length} items</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 max-h-[65vh] overflow-y-auto">
        {products.map((item, idx) => {
          const isStartColumn = idx % 2 === 0;
          const isLastRow =
            idx >= products.length - (products.length % 2 === 0 ? 2 : 1);

          return (
            <Link
              key={item.id}
              href={`/product/${item.slug}`}
              onClick={onItemClick}
              className={`flex items-center gap-3.5 p-3.5 sm:px-4 sm:py-3.5 hover:bg-[#FAF9F6] transition-colors group cursor-pointer ${
                isStartColumn ? "sm:border-e border-[#E5E0D8]" : ""
              } ${!isLastRow ? "border-b border-[#E5E0D8]" : ""}`}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-xl bg-[#F2EFE9]/60 border border-[#E5E0D8]/70 flex items-center justify-center p-1.5">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex flex-col min-w-0 justify-center">
                <h4 className="text-[13px] sm:text-sm font-medium text-[#18181B] group-hover:text-[#0F3D3E] transition-colors truncate">
                  <HighlightMatch text={item.title} query={query} />
                </h4>
                <div className="flex items-center gap-2 mt-1 tabular-nums">
                  {item.oldPrice && (
                    <span className="text-xs text-[#57534E]/70 line-through">
                      ${item.oldPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-sm font-bold text-[#0F3D3E]">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

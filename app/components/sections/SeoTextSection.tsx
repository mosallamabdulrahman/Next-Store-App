"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "@app/components/common/Icons";

export const SeoTextSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-8 my-4 border-t border-gray-100">
      <div className="bg-gray-50/70 rounded-3xl p-6 sm:p-8 border border-gray-100/80">
        <div className="space-y-4">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
              Online store of household appliances and electronics
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Welcome to WoodMart, your premier destination for the latest
              technology, electronics, and smart home appliances. We curate
              thousands of top-tier products ranging from the newest
              smartphones, powerful gaming rigs, and high-performance laptops to
              energy-efficient kitchen appliances and immersive audio systems.
            </p>
          </div>

          <div
            className={`${isExpanded ? "block" : "hidden sm:block"} space-y-3 transition-all duration-300`}
          >
            <h3 className="text-sm sm:text-base font-bold text-gray-800">
              Online shopping that really is convenient
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              We make technology accessible with transparent pricing, official
              manufacturer warranties, and dedicated customer support available
              24/7. Enjoy secure checkout with multiple payment options, prompt
              delivery right to your door, and hassle-free 30-day return
              guarantees.
            </p>
          </div>

          {/* Expand/Collapse Toggle on mobile */}
          <div className="pt-1 sm:hidden">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1 text-xs font-semibold text-purple-700 hover:text-purple-900"
            >
              <span>{isExpanded ? "Show less" : "Read more"}</span>
              <ChevronDownIcon
                className={`w-3.5 h-3.5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "@app/components/common/Icons";

export const SeoTextSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-6 my-4">
      <div className="bg-[#F2EFE9]/75 rounded-3xl p-6 sm:p-9 border border-[#E5E0D8]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          <div className="lg:col-span-6 space-y-2.5">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0F3D3E]">
              Mosalam Standard
            </span>
            <h2 className="font-display text-lg sm:text-xl font-bold text-[#18181B] tracking-tight">
              Curated household appliances &amp; modern electronics
            </h2>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              Welcome to Mosalam Store, your trusted destination for modern
              consumer electronics, high-craft computing gear, and smart home
              appliances. Every piece is selected for reliability, clean
              industrial design, and long-term everyday performance.
            </p>
          </div>

          <div
            className={`lg:col-span-6 ${isExpanded ? "block" : "hidden sm:block"} space-y-2.5 transition-all duration-300`}
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#E85D3F]">
              Care &amp; Delivery
            </span>
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#18181B] tracking-tight">
              Shopping designed around clarity and speed
            </h3>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              We pair transparent pricing with official manufacturer warranties
              and dedicated customer care. Enjoy protected checkout, fast
              tracked nationwide delivery, and straightforward 30-day returns.
            </p>
          </div>

          <div className="pt-1 sm:hidden">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F3D3E] hover:text-[#E85D3F] cursor-pointer"
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

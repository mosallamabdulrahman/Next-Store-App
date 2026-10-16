"use client";

import React, { useState } from "react";
import { SectionTitle } from "@app/components/common/SectionTitle";
import { ProductCard } from "@app/components/common/ProductCard";
import { BESTSELLER_PRODUCTS } from "@app/data/mockData";

export const BestsellersSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Smartphones");
  const tabs = ["Smartphones", "PC & Components", "Appliances"];

  return (
    <section className="py-6">
      <SectionTitle title="Bestsellers In Category">
        {/* Category Pill Tabs */}
        <div className="flex items-center gap-1.5 bg-gray-100/80 p-1 rounded-full text-xs font-semibold">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                activeTab === tab
                  ? "bg-purple-700 text-white shadow-xs"
                  : "text-gray-600 hover:text-gray-900 bg-transparent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </SectionTitle>

      {/* 6-Column Responsive Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
        {BESTSELLER_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

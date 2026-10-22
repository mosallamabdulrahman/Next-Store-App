import React from "react";
import { SpecCategory } from "@app/data/productData";
import {
  OverviewIcon,
  ProcessorIcon,
  RamIcon,
  StorageIcon,
  VideoCardIcon,
  ConnectivityIcon,
  GeneralIcon,
} from "./ProductIcons";

interface ProductSpecificationsProps {
  specifications: SpecCategory[];
}

export const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({
  specifications,
}) => {
  const renderCategoryIcon = (icon: SpecCategory["icon"]) => {
    switch (icon) {
      case "overview":
        return <OverviewIcon className="w-5 h-5 shrink-0" />;
      case "processor":
        return <ProcessorIcon className="w-5 h-5 shrink-0" />;
      case "ram":
        return <RamIcon className="w-5 h-5 shrink-0" />;
      case "storage":
        return <StorageIcon className="w-5 h-5 shrink-0" />;
      case "video-card":
        return <VideoCardIcon className="w-5 h-5 shrink-0" />;
      case "connectivity":
        return <ConnectivityIcon className="w-5 h-5 shrink-0" />;
      case "general":
      default:
        return <GeneralIcon className="w-5 h-5 shrink-0" />;
    }
  };

  return (
    <section id="Specifications" className="mb-14 scroll-mt-28">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#242424] mb-6 tracking-tight">
        Specification
      </h2>

      <div className="bg-[#f4f4f4] rounded-2xl md:rounded-3xl p-6 sm:p-10 space-y-8 border border-gray-200/50">
        {specifications.map((cat, idx) => (
          <div key={idx} className="space-y-4">
            {/* Category Title with Icon */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-2xs">
                {renderCategoryIcon(cat.icon)}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#242424]">
                {cat.category}
              </h3>
            </div>

            {/* Attributes Table */}
            <div className="space-y-3 bg-white/40 rounded-2xl p-4 sm:p-5 border border-gray-200/40">
              {cat.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 py-2 ${
                    itemIdx !== cat.items.length - 1 ? "border-b border-gray-200/50" : ""
                  }`}
                >
                  <span className="text-xs sm:text-sm text-gray-500 font-normal">
                    {item.label}
                  </span>
                  <span className="text-xs sm:text-sm text-[#242424] font-semibold sm:text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

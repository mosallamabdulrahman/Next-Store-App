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
        return <OverviewIcon className="w-5 h-5 shrink-0 text-[#0F3D3E]" />;
      case "processor":
        return <ProcessorIcon className="w-5 h-5 shrink-0 text-[#0F3D3E]" />;
      case "ram":
        return <RamIcon className="w-5 h-5 shrink-0 text-[#0F3D3E]" />;
      case "storage":
        return <StorageIcon className="w-5 h-5 shrink-0 text-[#0F3D3E]" />;
      case "video-card":
        return <VideoCardIcon className="w-5 h-5 shrink-0 text-[#0F3D3E]" />;
      case "connectivity":
        return <ConnectivityIcon className="w-5 h-5 shrink-0 text-[#0F3D3E]" />;
      case "general":
      default:
        return <GeneralIcon className="w-5 h-5 shrink-0 text-[#0F3D3E]" />;
    }
  };

  return (
    <section id="Specifications" className="mb-14 scroll-mt-28">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#18181B] mb-6 tracking-tight">
        Specification
      </h2>

      <div className="bg-[#F2EFE9]/75 rounded-3xl p-6 sm:p-10 space-y-8 border border-[#E5E0D8]">
        {specifications.map((cat, idx) => (
          <div key={idx} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-[#E5E0D8] flex items-center justify-center shadow-2xs">
                {renderCategoryIcon(cat.icon)}
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-[#18181B]">
                {cat.category}
              </h3>
            </div>

            <div className="space-y-2 bg-white rounded-2xl p-4 sm:p-5 border border-[#E5E0D8]">
              {cat.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 py-2.5 ${
                    itemIdx !== cat.items.length - 1
                      ? "border-b border-[#E5E0D8]"
                      : ""
                  }`}
                >
                  <span className="text-xs sm:text-sm text-[#57534E] font-normal">
                    {item.label}
                  </span>
                  <span className="text-xs sm:text-sm text-[#18181B] font-semibold sm:text-end">
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

"use client";

import { useRouter, useSearchParams } from "next/navigation";

export const ButtonTabs: React.FC = () => {
  const router = useRouter();
  const searchparams = useSearchParams();

  const currentCategory = (
    searchparams.get("category") || "smartphones"
  ).toLowerCase();

  const tabs = [
    { label: "Smartphones", slug: "smartphones" },
    { label: "PC & Components", slug: "pc-components" },
    { label: "Appliances", slug: "appliances" },
  ];

  const handleTabClick = (slug: string) => {
    const params = new URLSearchParams(searchparams.toString());
    params.set("category", slug);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div
      role="tablist"
      aria-label="Category bestsellers tabs"
      className="inline-flex flex-wrap items-center gap-1.5 p-1 bg-[#F2EFE9] border border-[#E5E0D8] rounded-full"
    >
      {tabs.map((tab) => {
        const isActive = currentCategory === tab.slug;
        return (
          <button
            key={tab.slug}
            role="tab"
            aria-selected={isActive}
            type="button"
            onClick={() => handleTabClick(tab.slug)}
            className={`min-h-9 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 active:scale-[0.98] cursor-pointer ${
              isActive
                ? "bg-[#0F3D3E] text-[#FAF9F6] shadow-xs"
                : "text-[#57534E] hover:text-[#18181B] bg-transparent"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

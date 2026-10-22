"use client";

import { useRouter, useSearchParams } from "next/navigation";
export const ButtonTabs: React.FC = () => {
  const router = useRouter();
  const searchparams = useSearchParams();

  const currentCategory = (searchparams.get("category") || "smartphones").toLowerCase();

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
    <div className="flex items-center gap-1.5">
      {tabs.map((tab) => {
        const isActive = currentCategory === tab.slug;
        return (
          <button
            key={tab.slug}
            type="button"
            onClick={() => handleTabClick(tab.slug)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
              isActive
                ? "bg-purple-700 text-white shadow-xs"
                : "text-gray-600 hover:text-gray-900 bg-transparent hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function useShopFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleFilterChange = (updates: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleSortChange = (value: string) => {
    switch (value) {
      case "popularity":
        handleFilterChange({ orderby: "popularity", order: "desc" });
        break;
      case "rating":
        handleFilterChange({ orderby: "rating", order: "desc" });
        break;
      case "latest":
        handleFilterChange({ orderby: "date", order: "desc" });
        break;
      case "price-low":
        handleFilterChange({ orderby: "price", order: "asc" });
        break;
      case "price-high":
        handleFilterChange({ orderby: "price", order: "desc" });
        break;
      default:
        handleFilterChange({ orderby: "date", order: "desc" });
        break;
    }
  };

  const currentOrderby = searchParams.get("orderby") || "date";
  const currentOrder = searchParams.get("order") || "desc";

  const getCurrentSortValue = () => {
    if (currentOrderby === "popularity") return "popularity";
    if (currentOrderby === "rating") return "rating";
    if (currentOrderby === "price" && currentOrder === "asc")
      return "price-low";
    if (currentOrderby === "price" && currentOrder === "desc")
      return "price-high";
    return "latest";
  };

  return {
    searchParams,
    handleFilterChange,
    handleSortChange,
    getCurrentSortValue,
  };
}

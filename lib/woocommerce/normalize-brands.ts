import type { Brand } from "@/app/types/brand";
import type { WooBrandDto } from "./dto";

const BRAND_PLACEHOLDER = "/logo.svg";

export function normalizeBrand(brand: WooBrandDto): Brand {
  return {
    id: brand.id,
    name: brand.name,
    slug: brand.slug,
    imageUrl: brand.image?.src.trim() || BRAND_PLACEHOLDER,
  };
}

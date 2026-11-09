import type { Brand } from "@/app/types/brand";
import { wooFetch } from "./client";
import type { WooBrandDto } from "./dto";
import { normalizeBrand } from "./normalize-brands";

export async function getBrands(): Promise<Brand[]> {
  const brands = await wooFetch<WooBrandDto[]>("products/brands", {
    revalidate: 3600,
  });
  return brands.map(normalizeBrand);
}

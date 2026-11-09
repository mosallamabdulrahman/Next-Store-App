import type { Category } from "@/app/types/category";
import type { ProductImage } from "@/app/types/product";
import type { WooCategoryDto } from "./dto";

const CATEGORY_PLACEHOLDER: ProductImage = {
  src: "/logo.svg",
  alt: "Category image",
};

function decodeName(value: string): string {
  return value.replace(/&amp;/g, "&");
}

export function normalizeCategory(category: WooCategoryDto): Category {
  const name = decodeName(category.name);
  const image = category.image;

  return {
    id: category.id,
    name,
    slug: category.slug,
    parentId: category.parent === 0 ? null : category.parent,
    description: category.description,
    image: image?.src.trim()
      ? {
          src: image.src,
          alt: image.alt.trim() || name,
        }
      : {
          ...CATEGORY_PLACEHOLDER,
          alt: name,
        },
    productCount: category.count,
  };
}

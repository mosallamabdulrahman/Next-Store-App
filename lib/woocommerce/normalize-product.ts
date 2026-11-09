import { Product, ProductImage } from "@app/types/product";
import { WooProductDto } from "@/lib/woocommerce/dto";

const PRODUCT_PLACEHOLDER: ProductImage = {
  src: "/logo.svg",
  alt: "Product image",
};

function toNumber(value: string): number {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function decodeName(value: string): string {
  return value.replace(/&amp;/g, "&");
}

export function normalizeProduct(product: WooProductDto): Product {
  const images: ProductImage[] = product.images
    .filter((image) => image.src.trim() !== "")
    .map((image) => ({
      src: image.src,
      alt: image.alt.trim() || product.name,
    }));
  const primaryImage = images[0] ?? {
    ...PRODUCT_PLACEHOLDER,
    alt: product.name,
  };

  return {
    id: product.id,
    name: product.name,
    slug: product.slug,

    description: product.description,
    shortDescription: product.short_description,
    sku: product.sku,

    price: toNumber(product.price),
    regularPrice: toNumber(product.regular_price),
    salePrice:
      product.sale_price.trim() === "" ? null : toNumber(product.sale_price),

    averageRating: toNumber(product.average_rating),
    ratingCount: product.rating_count,
    stockStatus: product.stock_status,
    categories: product.categories.map((category) => ({
      id: category.id,
      name: decodeName(category.name),
      slug: category.slug,
    })),
    attributes: product.attributes.map((attribute) => ({
      name: attribute.name,
      options: attribute.options,
    })),

    images,
    primaryImage,
  };
}

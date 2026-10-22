import { FetchWooProductBySlug } from "@/lib/woocommerce";
import { getProductDetails } from "@app/data/productData";
import { ProductView } from "./ProductView";
import { Metadata } from "next";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  let wooProduct = null;
  try {
    wooProduct = await FetchWooProductBySlug(slug);
  } catch {
    // Ignore fetch errors during metadata generation
  }

  const product = getProductDetails(slug, wooProduct);

  return {
    title: `${product.name} - Electronics Mega Store`,
    description: product.description.substring(0, 160),
    openGraph: {
      title: `${product.name} | WoodMart`,
      description: product.description.substring(0, 160),
      images: [
        {
          url: product.images[0]?.src || "",
          width: 700,
          height: 800,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  let wooProduct = null;
  try {
    wooProduct = await FetchWooProductBySlug(slug);
  } catch (error) {
    console.error("WooCommerce fetch failed, falling back to static product:", error);
  }

  const product = getProductDetails(slug, wooProduct);

  return <ProductView product={product} />;
}

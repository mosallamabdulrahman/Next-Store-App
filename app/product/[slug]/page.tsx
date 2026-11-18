import { getProductBySlug } from "@/lib/woocommerce/products";
import { getProductDetails } from "@app/data/productData";
import { ProductView } from "./ProductView";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  let product = null;
  try {
    product = await getProductBySlug(slug);
  } catch {
    // Ignore fetch errors during metadata generation
  }

  const productDetails = getProductDetails(slug, product);

  return {
    title: `${productDetails.name} — Mosalam Store`,
    description: productDetails.description.substring(0, 160),
    openGraph: {
      title: `${productDetails.name} | Mosalam Store`,
      description: productDetails.description.substring(0, 160),
      images: [
        {
          url: productDetails.images[0]?.src || "/logo.svg",
          width: 700,
          height: 800,
          alt: productDetails.name,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  let product = null;
  try {
    product = await getProductBySlug(slug);
  } catch (error) {
    console.error(
      "WooCommerce fetch failed, falling back to static product:",
      error,
    );
  }

  if (!product) {
    notFound();
  }

  const productDetails = getProductDetails(slug, product);

  return <ProductView product={productDetails} />;
}

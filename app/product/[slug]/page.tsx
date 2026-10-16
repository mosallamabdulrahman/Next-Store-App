import { FetchWooProductBySlug } from "@/lib/woocommerce";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function product({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = await FetchWooProductBySlug(slug);

  if (!product) {
    notFound();
  }
  return (
    <>
      <p className="text-3xl">{product.name}</p>
    </>
  );
}

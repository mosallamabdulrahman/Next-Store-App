import { Product } from "@/app/types";
import { ProductCard } from "./ProductCard";

interface GridProductsProps {
  products: Product[];
  gridColumns?: string;
}

export default function GridProdcuts({
  products,
  gridColumns,
}: GridProductsProps) {
  return (
    <>
      {products.length > 0 ? (
        <div className={`grid ${gridColumns} gap-4 sm:gap-5`}>
          {products.map((item: Product) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <p className="text-center py-10 text-gray-500">No products found</p>
      )}
    </>
  );
}

import React from "react";
import { SingleProductDetails } from "@app/data/productData";
import { ProductBreadcrumbNav } from "@app/components/product/ProductBreadcrumbNav";
import { ProductStickyTabs } from "@app/components/product/ProductStickyTabs";
import { ProductGallery } from "@app/components/product/ProductGallery";
import { ProductBuyBox } from "@app/components/product/ProductBuyBox";
import { ProductDescription } from "@app/components/product/ProductDescription";
import { ProductSpecifications } from "@app/components/product/ProductSpecifications";
import { ProductReviews } from "@app/components/product/ProductReviews";
import { ProductRelated } from "@app/components/product/ProductRelated";

interface ProductViewProps {
  product: SingleProductDetails;
}

export const ProductView: React.FC<ProductViewProps> = ({ product }) => {
  return (
    <div className="w-full bg-[#FAF9F6] min-h-dvh">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <ProductBreadcrumbNav
          breadcrumbs={product.breadcrumbs}
          navPrev={product.navPrev}
          navNext={product.navNext}
        />

        <ProductStickyTabs reviewCount={product.reviews.length} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-16">
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <ProductGallery images={product.images} title={product.name} />
          </div>

          <div className="lg:col-span-6">
            <ProductBuyBox
              id={product.id}
              name={product.name}
              sku={product.sku}
              price={product.price}
              regularPrice={product.regularPrice}
              rating={product.rating}
              reviewCount={product.reviews.length}
              deliveryOptions={product.deliveryOptions}
            />
          </div>
        </div>

        <ProductDescription description={product.description} />
        <ProductSpecifications specifications={product.specifications} />
        <ProductReviews
          productName={product.name}
          initialReviews={product.reviews}
        />
        <ProductRelated products={product.relatedProducts} />
      </div>
    </div>
  );
};

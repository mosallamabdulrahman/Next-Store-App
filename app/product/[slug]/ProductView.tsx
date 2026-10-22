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

/**
 * Static Single Product View:
 * Pure UI presentation layout matching Woodmart pixel-perfect design.
 * Designed cleanly so you can easily attach your own state, hooks, and business logic.
 */
export const ProductView: React.FC<ProductViewProps> = ({ product }) => {
  return (
    <div className="w-full bg-[#fafafa] min-h-screen">
      {/* Main Page Container (Woodmart 1540px container width) */}
      <div className="w-full max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Top: Breadcrumb & Prev/Next Nav */}
        <ProductBreadcrumbNav
          breadcrumbs={product.breadcrumbs}
          navPrev={product.navPrev}
          navNext={product.navNext}
        />

        {/* Sticky Anchor Navigation Bar */}
        <ProductStickyTabs reviewCount={product.reviews.length} />

        {/* Hero Area: Gallery (Left) & Buy Box (Right) */}
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

        {/* Description Section */}
        <ProductDescription description={product.description} />

        {/* Specifications Section */}
        <ProductSpecifications specifications={product.specifications} />

        {/* Customer Reviews Section */}
        <ProductReviews
          productName={product.name}
          initialReviews={product.reviews}
        />

        {/* "You may also like" Related Section */}
        <ProductRelated products={product.relatedProducts} />
      </div>
    </div>
  );
};

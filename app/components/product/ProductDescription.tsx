import React from "react";

interface ProductDescriptionProps {
  description: string;
}

export const ProductDescription: React.FC<ProductDescriptionProps> = ({ description }) => {
  return (
    <section id="Information" className="mb-14 scroll-mt-28">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#242424] mb-4 tracking-tight">
        Description
      </h2>

      <div className="bg-[#f4f4f4] rounded-2xl md:rounded-3xl p-6 sm:p-8 text-gray-600 text-sm sm:text-base leading-relaxed border border-gray-200/50">
        <p className="whitespace-pre-line">{description}</p>
      </div>
    </section>
  );
};

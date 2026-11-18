import React from "react";

interface ProductDescriptionProps {
  description: string;
}

export const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
}) => {
  return (
    <section id="Information" className="mb-14 scroll-mt-28">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#18181B] mb-4 tracking-tight">
        Description
      </h2>

      <div className="bg-[#F2EFE9]/75 rounded-3xl p-6 sm:p-8 text-[#57534E] text-sm sm:text-base leading-relaxed border border-[#E5E0D8]">
        <p className="whitespace-pre-line">{description}</p>
      </div>
    </section>
  );
};

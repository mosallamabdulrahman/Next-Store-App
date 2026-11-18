import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@app/components/common/Icons";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  actionText?: string;
  actionHref?: string;
  children?: React.ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  actionText,
  actionHref = "#",
  children,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-7 pb-4 border-b border-[#E5E0D8]">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="w-5 h-0.5 bg-[#E85D3F] rounded-full" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F3D3E]">
            Mosalam Selection
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#18181B] tracking-tight leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs sm:text-sm text-[#57534E]">{subtitle}</p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        {children}
        {actionText && (
          <Link
            href={actionHref}
            className="inline-flex items-center gap-1.5 min-h-10 text-xs font-semibold text-[#18181B] hover:text-[#FAF9F6] bg-[#F2EFE9] hover:bg-[#0F3D3E] px-4 py-2 rounded-full border border-[#E5E0D8] hover:border-[#0F3D3E] transition-all duration-200 active:scale-[0.98]"
          >
            <span>{actionText}</span>
            <ChevronRightIcon className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </div>
  );
};

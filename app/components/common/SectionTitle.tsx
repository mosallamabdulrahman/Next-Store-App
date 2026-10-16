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
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-2 border-b border-gray-100/80">
      <div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{subtitle}</p>
        )}
      </div>

      <div className="flex items-center gap-3">
        {children}
        {actionText && (
          <Link
            href={actionHref}
            className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-purple-700 bg-gray-50 hover:bg-purple-50 px-3 py-1.5 rounded-full border border-gray-200/80 hover:border-purple-200 transition-all duration-150"
          >
            <span>{actionText}</span>
            <ChevronRightIcon className="w-3 h-3" />
          </Link>
        )}
      </div>
    </div>
  );
};

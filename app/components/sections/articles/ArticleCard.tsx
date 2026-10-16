import React from "react";
import Link from "next/link";
import { Article } from "@app/types";
import {
  CommentsIcon,
  UserCircleIcon,
  ChevronRightIcon,
} from "@app/components/common/Icons";

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="group bg-white rounded-3xl border border-gray-100/90 overflow-hidden shadow-xs hover:shadow-lg hover:border-purple-200 transition-all duration-300 flex flex-col justify-between">
      {/* Article Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        {/* Floating Date Badge */}
        <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-xs rounded-xl px-2.5 py-1 text-center shadow-md border border-gray-100">
          <span className="block text-sm font-black text-gray-900 leading-none">
            {article.date.day}
          </span>
          <span className="block text-[9px] font-bold text-gray-400 uppercase tracking-wider">
            {article.date.month}
          </span>
        </div>

        {/* Thumbnail Image */}
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category Pill Tag Overlay */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="bg-purple-700 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
            {article.category}
          </span>
        </div>
      </div>

      {/* Article Info */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Article Title */}
          <Link
            href="#"
            className="block group-hover:text-purple-700 transition-colors"
          >
            <h3 className="text-sm sm:text-base font-bold text-gray-900 line-clamp-2 leading-snug">
              {article.title}
            </h3>
          </Link>

          {/* Meta: Author and Comments */}
          <div className="flex items-center gap-3 text-[11px] text-gray-400 mt-2.5">
            <span className="flex items-center gap-1">
              <UserCircleIcon className="w-3.5 h-3.5 text-gray-400" />
              <span>
                Posted by{" "}
                <strong className="text-gray-600 font-medium">
                  {article.author}
                </strong>
              </span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CommentsIcon className="w-3.5 h-3.5 text-gray-400" />
              <span>{article.commentsCount}</span>
            </span>
          </div>
        </div>

        {/* Continue Reading Action */}
        <div className="mt-4 pt-3 border-t border-gray-50 flex items-center">
          <Link
            href="#"
            className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 hover:text-purple-900 group-hover:translate-x-0.5 transition-all"
          >
            <span>Continue Reading</span>
            <ChevronRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};

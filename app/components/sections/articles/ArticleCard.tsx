import React from "react";
import Link from "next/link";
import { Post } from "@app/types";
import {
  CommentsIcon,
  UserCircleIcon,
  ChevronRightIcon,
} from "@app/components/common/Icons";

interface PostCardProps {
  post: Post;
}

export const ArticleCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className="group bg-white rounded-3xl border border-[#E5E0D8] overflow-hidden hover:border-[#0F3D3E]/50 hover:shadow-[0_14px_30px_-14px_rgba(15,61,62,0.14)] transition-all duration-300 flex flex-col justify-between">
      {/* Media Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#F2EFE9]">
        {/* Date Pill */}
        <div className="absolute top-3 start-3 z-10 bg-[#FAF9F6]/95 backdrop-blur-xs rounded-xl px-2.5 py-1.5 text-center border border-[#E5E0D8] shadow-xs tabular-nums">
          <span className="block text-sm font-extrabold text-[#18181B] leading-none">
            {post.date.day}
          </span>
          <span className="block text-[9px] font-bold text-[#0F3D3E] uppercase tracking-wider mt-0.5">
            {post.date.month}
          </span>
        </div>

        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Category Pill */}
        <div className="absolute bottom-3 start-3 z-10">
          <span className="bg-[#0F3D3E] text-[#FAF9F6] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
            {post.category}
          </span>
        </div>
      </div>

      {/* Article Body */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <Link
            href={post.link || "#"}
            className="block group-hover:text-[#0F3D3E] transition-colors"
          >
            <h3 className="font-display text-sm sm:text-base font-bold text-[#18181B] line-clamp-2 leading-snug">
              {post.title}
            </h3>
          </Link>

          <div className="flex items-center gap-3 text-[11px] text-[#57534E] mt-3">
            <span className="flex items-center gap-1.5">
              <UserCircleIcon className="w-3.5 h-3.5 text-[#0F3D3E]" />
              <span>
                By{" "}
                <strong className="text-[#18181B] font-medium">
                  {post.author}
                </strong>
              </span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 tabular-nums">
              <CommentsIcon className="w-3.5 h-3.5 text-[#57534E]" />
              <span>{post.commentsCount}</span>
            </span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-[#E5E0D8]/80 flex items-center">
          <Link
            href={post.link || "#"}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E85D3F] hover:text-[#D1492B] group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-all"
          >
            <span>Continue Reading</span>
            <ChevronRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};

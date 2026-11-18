import Link from "next/link";
import Image from "next/image";
import { getCategories } from "@/lib/woocommerce/categories";
import { Category } from "@/app/types/category";
import { ChevronRightIcon } from "@app/components/common/Icons";

export const SidebarMenu = async () => {
  const categories: Category[] = await getCategories();

  return (
    <aside
      aria-label="Shop departments"
      className="w-full bg-white rounded-3xl border border-[#E5E0D8] p-4 sm:p-5"
    >
      <div className="flex items-center justify-between gap-4 mb-3.5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0F3D3E]" />
          <h2 className="font-display text-xs sm:text-sm font-bold uppercase tracking-[0.12em] text-[#18181B]">
            Explore Departments
          </h2>
        </div>
        <Link
          href="/shop"
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F3D3E] hover:text-[#E85D3F] transition-colors"
        >
          <span>Full Catalog</span>
          <ChevronRightIcon className="w-3.5 h-3.5" />
        </Link>
      </div>

      <ul className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-1">
        {categories.map((item) => (
          <li key={item.id} className="shrink-0">
            <Link
              href={`/product-category/${item.slug}`}
              className="flex items-center gap-3 ps-2.5 pe-4 py-2 rounded-2xl bg-[#FAF9F6] hover:bg-[#F2EFE9] border border-[#E5E0D8] hover:border-[#0F3D3E] text-[#18181B] transition-all duration-200 group active:scale-[0.98]"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-[#E5E0D8] shrink-0 overflow-hidden p-1">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={28}
                  height={28}
                  className="object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300"
                />
              </span>
              <div className="flex flex-col text-start">
                <span className="text-xs sm:text-sm font-semibold tracking-tight group-hover:text-[#0F3D3E] transition-colors whitespace-nowrap">
                  {item.name.replace(/&amp;/g, "&")}
                </span>
                <span className="text-[10px] text-[#57534E] tabular-nums">
                  {item.productCount} items
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

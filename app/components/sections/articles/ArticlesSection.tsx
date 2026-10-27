import { SectionTitle } from "@app/components/common/SectionTitle";
import { ArticleCard } from "@app/components/sections/articles/ArticleCard";
import type { Post, WordPressPost } from "@app/types";

const API_URL = "https://abdulrahman.mosalam.com/store-app/wp-json/wp/v2";
const FALLBACK_IMAGE =
  "https://woodmart.xtemos.com/electronics-3/wp-content/uploads/sites/27/2025/07/ed-logo.svg";

function formatDate(value: string | null): Post["date"] {
  // Use the WordPress calendar date without server timezone conversion.
  const match = value?.match(/^(\d{4})-(\d{2})-(\d{2})T/);
  if (!match) return { day: "—", month: "" };
  const date = new Date(
    Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])),
  );
  if (Number.isNaN(date.getTime())) return { day: "—", month: "" };
  return {
    day: match[3],
    month: date.toLocaleDateString("en-US", {
      month: "short",
      timeZone: "UTC",
    }),
  };
}

async function fetchCommentsCount(postId: number): Promise<number | null> {
  try {
    const response = await fetch(
      API_URL + "/comments?post=" + postId + "&per_page=1&_fields=id",
      { next: { revalidate: 60 } },
    );
    if (!response.ok) return null;
    const total = response.headers.get("X-WP-Total");
    if (total === null) return null;
    const count = Number(total);
    return Number.isInteger(count) && count >= 0 ? count : null;
  } catch {
    return null;
  }
}

async function fetchArticles(): Promise<Post[]> {
  try {
    const response = await fetch(
      API_URL +
        "/posts?orderby=date&order=desc&per_page=4&_embed=wp:featuredmedia,author,wp:term",
      { next: { revalidate: 60 } },
    );
    if (!response.ok) {
      console.error("Failed to fetch articles", response.status);
      return [];
    }
    const data: unknown = await response.json();
    if (!Array.isArray(data)) return [];

    // The endpoint is the standard WordPress posts endpoint.
    const posts = data as WordPressPost[];
    return await Promise.all(
      posts.map(async (post): Promise<Post> => {
        const category = post._embedded?.["wp:term"]
          ?.flat()
          .find((term: { taxonomy?: string; name?: string }) => term?.taxonomy === "category");
        return {
          id: post.id,
          title: post.title?.rendered || "",
          slug: post.slug,
          link: post.link,
          imageUrl:
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            FALLBACK_IMAGE,
          category: category?.name || "Uncategorized",
          author: post._embedded?.author?.[0]?.name || "Unknown author",
          commentsCount: (await fetchCommentsCount(post.id)) ?? 0,
          date: formatDate(post.date),
        };
      }),
    );
  } catch (error) {
    console.error("Failed to fetch articles", error);
    return [];
  }
}

export async function ArticlesSection() {
  const articles = await fetchArticles();
  return (
    <section className="py-8">
      <SectionTitle
        title="Useful Articles"
        actionText="View All"
        actionHref="#"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {articles.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

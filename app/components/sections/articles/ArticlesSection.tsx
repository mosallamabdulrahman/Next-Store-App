import React from "react";
import { SectionTitle } from "@app/components/common/SectionTitle";
import { ArticleCard } from "@app/components/sections/articles/ArticleCard";
import { ARTICLES } from "@app/data/mockData";

export const ArticlesSection: React.FC = () => {
  return (
    <section className="py-8">
      <SectionTitle
        title="Useful Articles"
        actionText="View All"
        actionHref="#"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {ARTICLES.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

import { ListMenu } from "@/components/listMenu/listMenu";
import { ReviewCard } from "@/components/reviewCard/reviewCard";
import { PageTemplate } from "@/templates/PageTemplate";
import { mockMovies } from "@/mocks/data/mockMovies";
import React from "react";

export default function page() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4">
        <nav className="mb-8">
          <h1 className="uppercase text-2xl font-genera text-defaultRed mb-4">
            Review List
          </h1>
          <ListMenu />
        </nav>
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-y-6 gap-9">
          {mockMovies.map((movie, index) => (
            <ReviewCard
              key={movie.id || index}
              title={movie.title}
              description={movie.synopsis}
              imageUrl={movie.posterUrl}
              href={`/reviews/${movie.id || index}`}
            />
          ))}
        </section>
      </div>
    </PageTemplate>
  );
}

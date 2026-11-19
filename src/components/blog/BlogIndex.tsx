"use client";

import { useMemo, useState } from "react";
import { blogCategories, getAllPosts, type BlogCategory } from "@/content/blog";
import { BlogCard } from "./BlogCard";

export function BlogIndex() {
  const posts = useMemo(() => getAllPosts(), []);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<BlogCategory | "Todas">("Todas");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const catOk = category === "Todas" || p.category === category;
      if (!catOk) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q)
      );
    });
  }, [posts, query, category]);

  const featured = category === "Todas" && !query.trim() ? filtered[0] : null;
  const list = featured ? filtered.slice(1) : filtered;

  return (
    <>
      <div className="mt-8 space-y-4">
        <label className="block w-full max-w-md">
          <span className="sr-only">Buscar no blog</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por tema, tag ou palavra…"
            className="min-h-12 w-full rounded-full border border-navy/15 bg-white px-5 text-base text-navy outline-none"
          />
        </label>

        <div
          className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:overflow-visible"
          role="tablist"
          aria-label="Categorias do blog"
        >
          {(["Todas", ...blogCategories] as const).map((cat) => {
            const selected = category === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setCategory(cat)}
                className={`inline-flex min-h-11 shrink-0 items-center rounded-full border px-4 text-sm transition ${
                  selected
                    ? "border-navy bg-navy text-white"
                    : "border-navy/15 text-navy hover:border-teal-deep hover:text-teal-deep"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-muted">Nenhum artigo encontrado para essa busca.</p>
      ) : (
        <>
          {featured ? (
            <div className="mt-10">
              <BlogCard post={featured} featured />
            </div>
          ) : null}
          <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 ${featured ? "mt-5 sm:mt-6" : "mt-8 sm:mt-10"}`}>
            {list.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

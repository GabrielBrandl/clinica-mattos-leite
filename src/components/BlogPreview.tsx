"use client";

import Link from "next/link";
import { getAllPosts } from "@/content/blog";
import { BlogCard } from "./blog/BlogCard";

export function BlogPreview() {
  const posts = getAllPosts().slice(0, 6);
  const [featured, ...rest] = posts;

  return (
    <section id="blog" className="section-y bg-paper" aria-labelledby="blog-title">
      <div className="section-shell">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Conteúdo</p>
            <h2 id="blog-title" className="mt-3 font-display text-[clamp(2rem,4vw,3.3rem)] text-navy">
              Blog da clínica
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted sm:mt-4 sm:text-lg">
              Artigos educativos sobre nutrologia, saúde hormonal, prevenção e o dia a dia do cuidado médico.
            </p>
          </div>
          <Link href="/blog" className="btn-primary !bg-navy !text-white w-full sm:w-fit">
            Ver todos os artigos
          </Link>
        </div>

        {/* Featured — full width on all breakpoints */}
        <div className="mb-5 sm:mb-6">
          <BlogCard post={featured} featured />
        </div>

        {/* Next posts: 1 col mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {rest.slice(0, 3).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Extra row desktop only for richer preview */}
        <div className="mt-5 hidden gap-6 lg:mt-6 lg:grid lg:grid-cols-2">
          {rest.slice(3, 5).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:mt-10 lg:hidden">
          <Link
            href="/blog"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-navy/20 px-6 text-sm font-semibold text-navy"
          >
            Abrir blog completo
          </Link>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteChrome } from "@/components/SiteChrome";
import { BlogCard } from "@/components/blog/BlogCard";
import { formatPostDate, getAllPosts, getPostBySlug, getRelatedPosts } from "@/content/blog";
import { clinic, waLink } from "@/content/clinic";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artigo" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.cover, alt: post.coverAlt }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const related = getRelatedPosts(slug, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    description: post.excerpt,
    image: `${clinic.siteUrl}${post.cover}`,
    author: {
      "@type": "Organization",
      name: clinic.name,
    },
    publisher: {
      "@type": "Organization",
      name: clinic.name,
    },
  };

  return (
    <SiteChrome>
      <main className="bg-paper pt-24 pb-16 sm:pt-28 sm:pb-20">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <article className="section-shell max-w-3xl">
          <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-navy">
              Início
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-navy">
              Blog
            </Link>
            <span>/</span>
            <span className="text-navy">{post.category}</span>
          </nav>

          <header className="mt-5 sm:mt-6">
            <div className="flex flex-wrap items-center gap-2 text-xs text-teal-deep">
              <span className="rounded-full bg-mist px-3 py-1 font-medium">{post.category}</span>
              <span>{formatPostDate(post.date)}</span>
              <span aria-hidden>·</span>
              <span>{post.readMinutes} min de leitura</span>
            </div>
            <h1 className="mt-4 font-display text-[clamp(1.9rem,4.5vw,3.6rem)] leading-[1.08] text-navy">
              {post.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{post.excerpt}</p>
          </header>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-[24px] border border-[var(--line)]">
            <Image src={post.cover} alt={post.coverAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" priority />
          </div>

          <div className="prose-blog mt-10 space-y-5">
            {post.blocks.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2 key={i} className="font-display text-[1.75rem] text-navy pt-2">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="list-disc space-y-2 pl-5 text-muted leading-relaxed">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "callout") {
                return (
                  <aside
                    key={i}
                    className="rounded-[20px] border border-teal-deep/25 bg-mist px-5 py-4 text-sm leading-relaxed text-navy"
                  >
                    {block.text}
                  </aside>
                );
              }
              return (
                <p key={i} className="text-base leading-relaxed text-muted md:text-[1.05rem]">
                  {block.text}
                </p>
              );
            })}
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-navy/10 px-3 py-1 text-xs text-muted">
                #{tag}
              </span>
            ))}
          </div>

          <section className="mt-10 rounded-[24px] bg-navy p-5 text-white sm:mt-12 sm:p-8">
            <h2 className="font-display text-2xl sm:text-3xl">Quer conversar sobre o seu caso?</h2>
            <p className="mt-3 text-sm leading-relaxed text-on-dark sm:text-base">
              Agende uma avaliação com a Dra. Fábia Mattos ou o Dr. Felipe Leite em Manaus.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/#agendar" className="btn-primary w-full sm:w-auto">
                Agendar avaliação
              </Link>
              <a
                href={waLink(`Olá! Li o artigo "${post.title}" e gostaria de mais informações.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-full sm:w-auto"
              >
                Falar no WhatsApp
              </a>
            </div>
          </section>
        </article>

        <section className="section-shell mt-12 sm:mt-16">
          <h2 className="font-display text-2xl text-navy sm:text-3xl">Continue lendo</h2>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:mt-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}

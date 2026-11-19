import Image from "next/image";
import Link from "next/link";
import { formatPostDate, type BlogPost } from "@/content/blog";

export function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[24px] border border-[var(--line)] bg-white shadow-[0_10px_30px_rgba(10,46,70,0.04)] transition hover:border-teal-deep/40 hover:shadow-[0_16px_40px_rgba(10,46,70,0.08)] ${
        featured ? "md:grid md:grid-cols-2 md:items-stretch" : ""
      }`}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={`relative block w-full shrink-0 overflow-hidden bg-mist ${
          featured ? "aspect-[16/10] md:aspect-auto md:min-h-[280px]" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={post.cover}
          alt={post.coverAlt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
        />
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-teal-deep">
          <span className="rounded-full bg-mist px-2.5 py-1 font-medium">{post.category}</span>
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          <span aria-hidden className="text-muted/50">
            ·
          </span>
          <span className="text-muted">{post.readMinutes} min</span>
        </div>

        <h3 className={`mt-3 font-display leading-snug text-navy ${featured ? "text-[1.65rem] md:text-3xl" : "text-[1.35rem] sm:text-2xl"}`}>
          <Link href={`/blog/${post.slug}`} className="transition hover:text-teal-deep">
            {post.title}
          </Link>
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-[0.95rem]">{post.excerpt}</p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-5 inline-flex min-h-11 w-fit items-center text-sm font-semibold text-navy underline-offset-4 hover:text-teal-deep hover:underline"
        >
          Ler artigo →
        </Link>
      </div>
    </article>
  );
}

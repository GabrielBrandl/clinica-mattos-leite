import type { MetadataRoute } from "next";
import { clinic } from "@/content/clinic";
import { getAllPosts } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = clinic.siteUrl;
  const lastModified = new Date("2026-11-18");
  const posts = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(`${post.date}T12:00:00`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    ...posts,
    { url: `${base}/privacidade`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/termos`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cookies`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/reembolso`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}

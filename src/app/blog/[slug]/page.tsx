import React from "react";
import BlogDetailClient from "./BlogDetailClient";

export const dynamicParams = false;

export async function generateStaticParams() {
  const defaultSlugs = [{ slug: "aas" }, { slug: "sdsss" }];
  try {
    const res = await fetch("https://apicms.clearclaim.in/api/blogs");
    if (res.ok) {
      const data = await res.json();
      const apiSlugs = data.map((post: any) => ({
        slug: post.slug,
      }));
      const allSlugs = [...apiSlugs];
      defaultSlugs.forEach(ds => {
        if (!allSlugs.some(s => s.slug === ds.slug)) {
          allSlugs.push(ds);
        }
      });
      return allSlugs;
    }
  } catch (err) {
    console.error("Failed to generate static params for blogs:", err);
  }
  return defaultSlugs;
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <BlogDetailClient slug={slug} />;
}

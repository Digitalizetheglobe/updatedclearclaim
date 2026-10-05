"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import blogbg from "../../public/blogs/blogbg.png";

interface ModernBlogLayoutProps {
  title: string;
  category?: string;
  date?: string;
  readTime?: string;
  author?: string;
  image?: any;
  children: React.ReactNode;
}

export default function ModernBlogLayout({
  title,
  category = "Insights",
  date = "Recent Post",
  readTime = "5 min read",
  author = "Clearclaim Team",
  image,
  children,
}: ModernBlogLayoutProps) {
  const headerBgImage = image || blogbg;

  return (
    <main className="min-h-screen bg-slate-50/50 pb-24">
      {/* Header Hero Section with Ambient Blur */}
      <div className="relative">
        <div className="absolute inset-0 h-[400px] overflow-hidden -z-10">
          {typeof headerBgImage === "string" ? (
            <img
              src={headerBgImage}
              alt={title}
              className="w-full h-full object-cover blur-sm opacity-20"
            />
          ) : (
            <Image
              src={headerBgImage}
              alt={title}
              fill
              className="object-cover blur-sm opacity-20"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-50/50" />
        </div>

        <div className="max-w-4xl mx-auto px-6 pt-24">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00BE5D] hover:text-[#00743C] transition-colors mb-8 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>

          <header className="bg-white rounded-t-[2.5rem] p-8 md:p-12 text-center shadow-xl border border-slate-100/80">
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-400 mb-6">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#00BE5D] font-bold tracking-wide uppercase text-[11px]">
                {category}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#00BE5D]" />
                {date}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#00BE5D]" />
                {readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-8 max-w-3xl mx-auto">
              {title}
            </h1>

            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center font-bold text-[#00BE5D]">
                CC
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-slate-800">{author}</p>
                <p className="text-[10px] text-slate-400">Editorial Panel</p>
              </div>
            </div>
          </header>
        </div>
      </div>

      {/* Article Content Section */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-b-[2.5rem] px-8 md:px-16 pt-10 pb-20 shadow-xl border-x border-b border-slate-100/80">
          {/* Main Image */}
          {image && (
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg mb-12 border border-slate-100">
              {typeof image === "string" ? (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          )}

          {/* Article Text Content */}
          <article className="prose prose-emerald max-w-none text-slate-700 text-lg leading-relaxed font-sans space-y-6 prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800 prose-a:font-medium [&_a]:text-blue-600 [&_a]:underline hover:[&_a]:text-blue-800 [&_a]:font-medium [&_a]:transition-colors">
            {children}
          </article>
        </div>
      </div>
    </main>
  );
}

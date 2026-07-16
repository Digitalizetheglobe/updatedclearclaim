"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowLeft, Loader2, BookOpen } from "lucide-react";
import blogbg from "../../../../public/blogs/blogbg.png";
import blog30 from "../../../../public/blogs/iepf2025.png";

interface BlogDetailClientProps {
    slug: string;
}

export default function BlogDetailClient({ slug }: BlogDetailClientProps) {
    const [blogPost, setBlogPost] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchBlogPost() {
            try {
                const res = await fetch("https://apicms.clearclaim.in/api/blogs");
                if (res.ok) {
                    const data = await res.json();
                    const post = data.find((b: any) => b.slug === slug);
                    if (post) {
                        setBlogPost(post);
                    } else {
                        setError(true);
                    }
                } else {
                    setError(true);
                }
            } catch (err) {
                console.error("Failed to fetch blog:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchBlogPost();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center space-y-4">
                    <Loader2 className="w-12 h-12 animate-spin text-[#00BE5D] mx-auto" />
                    <p className="text-slate-500 font-semibold">Loading article...</p>
                </div>
            </div>
        );
    }

    if (error || !blogPost) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-6">
                <div className="max-w-md w-full text-center bg-white rounded-3xl p-8 shadow-xl border border-slate-100 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-red-500 mx-auto">
                        <BookOpen className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold text-slate-800">Article Not Found</h3>
                        <p className="text-slate-500 text-sm">
                            We couldn't find the article you were looking for. It may have been removed or the link is incorrect.
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#00BE5D] hover:bg-[#00BE5D]/90 text-white rounded-2xl font-bold transition-all shadow-lg shadow-emerald-500/10"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blogs
                    </Link>
                </div>
            </div>
        );
    }

    const publishDate = blogPost.publishedAt
        ? new Date(blogPost.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
          })
        : "Recent Post";

    const imageUrl = blogPost.coverImage || blogPost.uploadImage || blogbg;

    return (
        <>
            <main className="min-h-screen bg-slate-50/50 pb-24">
                {/* Header Section */}
                <div className="relative">
                    <div className="absolute inset-0 h-[400px] overflow-hidden -z-10">
                        {typeof imageUrl === "string" ? (
                            <img
                                src={imageUrl}
                                alt={blogPost.title}
                                className="w-full h-full object-cover blur-sm opacity-20"
                            />
                        ) : (
                            <Image
                                src={imageUrl}
                                alt={blogPost.title}
                                fill
                                className="object-cover blur-sm opacity-20"
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
                                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#00BE5D]">
                                    {blogPost.categories && blogPost.categories[0]
                                        ? blogPost.categories[0]
                                        : "Insights"}
                                </span>
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                                <span className="flex items-center gap-1.5">
                                    <Calendar className="w-3.5 h-3.5 text-[#00BE5D]" />
                                    {publishDate}
                                </span>
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                                <span className="flex items-center gap-1.5">
                                    <Clock className="w-3.5 h-3.5 text-[#00BE5D]" />
                                    {blogPost.readTime ? `${blogPost.readTime} min read` : "5 min read"}
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-8 max-w-3xl mx-auto">
                                {blogPost.title}
                            </h1>

                            <div className="flex items-center justify-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center font-bold text-[#00BE5D]">
                                    CC
                                </div>
                                <div className="text-left">
                                    <p className="text-sm font-bold text-slate-800">
                                        {blogPost.author || "Clearclaim Team"}
                                    </p>
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
                        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg mb-12 border border-slate-100">
                            {typeof imageUrl === "string" ? (
                                <img
                                    src={imageUrl}
                                    alt={blogPost.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <Image
                                    src={imageUrl}
                                    alt={blogPost.title}
                                    fill
                                    className="object-cover"
                                />
                            )}
                        </div>

                        {/* Article Text Content */}
                        <article className="prose prose-emerald max-w-none text-slate-700 text-lg leading-relaxed font-sans space-y-6">
                            {/* Check if content has HTML elements, if not render as paragraphs split by newlines */}
                            {/<[a-z][\s\S]*>/i.test(blogPost.content) ? (
                                <div
                                    dangerouslySetInnerHTML={{ __html: blogPost.content }}
                                    className="space-y-6"
                                />
                            ) : (
                                blogPost.content.split("\n").map((para: string, idx: number) => {
                                    const trimmed = para.trim();
                                    if (!trimmed) return null;
                                    return (
                                        <p key={idx} className="text-slate-600 font-normal">
                                            {trimmed}
                                        </p>
                                    );
                                })
                            )}
                        </article>
                    </div>
                </div>
            </main>
        </>
    );
}

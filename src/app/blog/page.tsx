"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, Search, Calendar, X, BookOpen, Sparkles, Loader2 } from "lucide-react";

// Import all blog images
import blog from "../../../public/blogs/blog55 (1).png";
import blog1 from "../../../public/blogs/2.png";
import blog2 from "../../../public/blogs/3.png";
import blog3 from "../../../public/blogs/Understanding the Investor Education and Protection Fund (IEPF) Authority in India.png";
import blog4 from "../../../public/blogs/Understanding IPO and Its Advantages to Retail Investors.png";
import blog5 from "../../../public/blogs/The Role of SEBI SCORES in IEPF Claims_ A Step Towards Investor Empowerment.png";
import blog6 from "../../../public/blogs/Why Using an IEPF Claims Management Service Saves You Time and Money.png";
import blog7 from "../../../public/blogs/तुमचे शेअर्स परत मिळवण्यासाठी Clearclaim तुम्हाला कसे मदत करते.png";
import blog8 from "../../../public/blogs/Recover Your Shares and Dividends.png";
import blog9 from "../../../public/blogs/How Clearclaim Helps You to Recover Your Shares.png";
import blog10 from "../../../public/blogs/Unlocking Hidden Wealth.png";
import blog11 from "../../../public/blogs/Clearclaim Ventures Private Limited.png";
import blog12 from "../../../public/blogs/15.png";
import blog13 from "../../../public/blogs/16.png";
import blog14 from "../../../public/blogs/17.png";
import blog15 from "../../../public/blogs/18.png";
import blog16 from "../../../public/blogs/accouncment.png";
import blog17 from "../../../public/blogs/20.png";
import blog18 from "../../../public/blogs/21.png";
import blog19 from "../../../public/blogs/unclaim shares.png";
import blog20 from "../../../public/blogs/document.png";
import blog21 from "../../../public/blogs/Digital.png";
import blog22 from "../../../public/blogs/kyc.png";
import blog23 from "../../../public/blogs/mitr.png";
import blog24 from "../../../public/blogs/asset.png";
import blog25 from "../../../public/blogs/Beyond.png";
import blog26 from "../../../public/blogs/Broker.png";
import blog27 from "../../../public/blogs/Tech.png";
import blog28 from "../../../public/blogs/Clearclaim Blog .png";
import blog29 from "../../../public/blogs/blog 24.png";
import blog30 from '../../../public/blogs/iepf2025.png';

const categories = ["All", "IEPF Recovery", "Digital India", "Asset Tracing", "Legal Guide", "Insights"];

const blogPosts = [
  {
    id: 1,
    title: "IEPF 2025: Which Companies Have the Highest Unclaimed Shares and Dividends?",
    date: "Mar 31, 2025",
    image: blog30,
    link: "/blog/iepf2025",
    category: "IEPF Recovery",
    description: "Discover the latest statistics on unclaimed shares and dividends across top Indian companies for the year 2025.",
    readTime: "5 min read",
    author: "Clearclaim Team"
  },
  {
    id: 2,
    title: "The Impact of India's digital thrust on recovery of unclaimed assets",
    date: "Mar 25, 2025",
    image: blog29,
    link: "/blog/the-impact-of-indias-digital-thrust-on-recovery-of-unclaimed-assets",
    category: "Digital India",
    description: "How digital transformation is revolutionizing the way investors recover their long-lost financial assets.",
    readTime: "4 min read",
    author: "Clearclaim Team"
  },
  {
    id: 3,
    title: "Cross-Border Asset Recovery: Challenges and Solutions for NRIs",
    date: "Mar 24, 2025",
    image: blog28,
    link: "/blog/cross-border-asset-recovery",
    category: "Insights",
    description: "A comprehensive guide for Non-Resident Indians to navigate the complexities of asset recovery from abroad.",
    readTime: "6 min read",
    author: "Clearclaim Team"
  },
  {
    id: 4,
    title: "The Technology Component in Unclaimed Assets Recovery",
    date: "Feb 22, 2025",
    image: blog27,
    link: "/blog/the-technology-component-in-unclaimed-assets-recovery",
    category: "Digital India",
    description: "Exploring the role of advanced algorithms and data verification in modern asset tracing.",
    readTime: "5 min read",
    author: "Clearclaim Team"
  },
  {
    id: 5,
    title: "From Broker to IPF: A Journey Through Unclaimed Funds",
    date: "Feb 21, 2025",
    image: blog26,
    link: "/blog/from-broker-to-ipf",
    category: "Legal Guide",
    description: "Tracing the path of unclaimed dividends from brokerage accounts to government protection funds.",
    readTime: "5 min read",
    author: "Clearclaim Team"
  },
  {
    id: 6,
    title: "Beyond Shares: Guide to Recovering All Unclaimed Financial Instruments",
    date: "Feb 20, 2025",
    image: blog25,
    link: "/blog/beyond-shares",
    category: "Asset Tracing",
    description: "How to recover bonds, mutual funds, insurance proceeds, and other dormant financial assets.",
    readTime: "6 min read",
    author: "Clearclaim Team"
  },
  {
    id: 7,
    title: "The Rise of AI in Unclaimed Asset Identification",
    date: "Feb 11, 2025",
    image: blog24,
    link: "/blog/the-rise-of-ai-in-unclaimed-asset-identification",
    category: "Digital India",
    description: "How artificial intelligence is helping identify forgotten investments with unprecedented accuracy.",
    readTime: "4 min read",
    author: "Clearclaim Team"
  },
  {
    id: 8,
    title: "MITR Platform: The Innovative SEBI Initiative",
    date: "Feb 10, 2025",
    image: blog23,
    link: "/blog/mitr-platform",
    category: "Legal Guide",
    description: "Everything you need to know about the newly launched MITR platform for simplified mutual fund recovery.",
    readTime: "5 min read",
    author: "Clearclaim Team"
  },
  {
    id: 9,
    title: "The Role of KYC Updates in Preventing Unclaimed Assets",
    date: "Jan 30, 2025",
    image: blog22,
    link: "/blog/the-role-of-kyc-updates",
    category: "Insights",
    description: "Why keeping your KYC records updated is the first step in ensuring your investments never go missing.",
    readTime: "4 min read",
    author: "Clearclaim Team"
  },
  {
    id: 10,
    title: "Unclaimed Dividends vs. Unclaimed Shares: Navigation",
    date: "Jan 1, 2025",
    image: blog19,
    link: "/blog/unclaimed-dividends-vs-unclaimed-shares",
    category: "IEPF Recovery",
    description: "Understanding the key differences in how dividends and shares are treated by the IEPF authority.",
    readTime: "5 min read",
    author: "Clearclaim Team"
  },
  {
    id: 11,
    title: "Legal Heirs and IEPF Claims: A Complete Guide",
    date: "Dec 23, 2024",
    image: blog18,
    link: "/blog/legal-heirs-&-iepf-claims",
    category: "Asset Tracing",
    description: "How legal heirs and nominees can claim ancestral wealth with the right documentation.",
    readTime: "6 min read",
    author: "Clearclaim Team"
  },
  {
    id: 12,
    title: "Role of Demat accounts in recovering shares from IEPF",
    date: "Dec 18, 2024",
    image: blog17,
    link: "/blog/role-of-demat-accounts",
    category: "Legal Guide",
    description: "Why a demat account is essential for the final transfer of recovered physical shares.",
    readTime: "5 min read",
    author: "Clearclaim Team"
  }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [blogs, setBlogs] = useState<any[]>(blogPosts); // Initialized with hardcoded array so they have initial content while loading or if fetch fails
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("https://apicms.clearclaim.in/api/blogs");
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            const mappedData = data.map((b: any) => ({
              id: `api-${b.id}`,
              title: b.title,
              date: b.publishedAt ? new Date(b.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "Recent Post",
              image: b.coverImage || b.uploadImage || "",
              link: `/blog/${b.slug}`,
              category: b.categories && b.categories[0] ? b.categories[0] : "Insights",
              description: b.excerpt || b.content || "",
              readTime: b.readTime ? `${b.readTime} min read` : "5 min read",
              author: b.author || "Clearclaim Team"
            }));
            setBlogs([...mappedData, ...blogPosts]);
          }
        }
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  // Filter blog posts based on category and search query
  const filteredPosts = useMemo(() => {
    return blogs.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, blogs]);

  // Determine featured post and grid posts from the filtered results
  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const gridPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : [];

  return (
    <main className="relative min-h-screen bg-slate-50/50 pt-16 pb-24 overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 left-0 right-0 h-[600px] overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-15%] w-[700px] h-[700px] rounded-full bg-[#00BE5D]/5 blur-[130px]" />
        <div className="absolute top-[20%] right-[-15%] w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-[110px]" />
        <div className="absolute top-[50%] left-[20%] w-[400px] h-[400px] rounded-full bg-[#283655]/3 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Hero Section */}
        <section className="mb-16 text-center space-y-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100/80 text-xs font-semibold text-[#00BE5D] shadow-sm uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Our Knowledge Journal
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-3xl font-extrabold text-[#283655] tracking-tight leading-tight"
          >
            Insights & Expert{" "}
            <span className="text-[#00BE5D]">
              Articles
            </span>
          </motion.h1>
          <div className="h-1.5 w-20 bg-gradient-to-r from-[#00BE5D] to-[#00BE5D]/40 mx-auto mt-6 rounded-full opacity-40 mb-20"></div>


          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 text-sm md:text-base leading-relaxed"
          >
            Stay updated with latest guidance on IEPF claim recovery, KYC regulation updates, demat conversions, and smart ways to retrieve ancestral assets.
          </motion.p>
        </section>

        {/* Filter and Search Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            {/* Horizontal scrolling Categories bar */}
            <div className="flex items-center gap-2.5 overflow-x-auto py-2 no-scrollbar scroll-smooth -mx-6 px-6 md:mx-0 md:px-0 w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-5 py-2.5 rounded-2xl text-xs md:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ${selectedCategory === category
                      ? "bg-gradient-to-r from-[#1a3a1f] to-[#00BE5D] text-white shadow-md shadow-emerald-950/10 border-transparent scale-105"
                      : "bg-white text-slate-600 hover:text-[#00BE5D] border border-slate-200/80 hover:border-emerald-200/50 hover:bg-emerald-50/20"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Premium Search Bar */}
            <div className="relative w-full md:max-w-xs xl:max-w-sm flex-shrink-0">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-4.5 w-4.5 text-slate-400" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="pl-11 pr-10 py-3 rounded-2xl bg-white border border-slate-200/85 focus:border-[#00BE5D] focus:ring-2 focus:ring-emerald-500/10 text-slate-800 placeholder-slate-400 shadow-sm transition-all outline-none text-xs md:text-sm w-full"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Dynamic Display (Featured + Grid) */}
        <AnimatePresence mode="wait">
          {filteredPosts.length > 0 ? (
            <motion.div
              key={`${selectedCategory}-${searchQuery}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-16"
            >
              {/* Featured Section */}
              {featuredPost && (
                <section>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch group">
                    {/* Featured Image */}
                    <div className="lg:col-span-7 relative h-[320px] md:h-[420px] lg:h-auto min-h-[350px] overflow-hidden rounded-[2.2rem] shadow-xl border border-slate-100/50">
                      <Image
                        src={featuredPost.image || blog30}
                        alt={featuredPost.title || "Blog Post"}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        priority
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 rounded-xl text-xs font-bold bg-[#00BE5D]/90 text-white backdrop-blur-md shadow-sm tracking-wide uppercase">
                          {featuredPost.category}
                        </span>
                      </div>
                    </div>

                    {/* Featured Content Info */}
                    <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-[2.2rem] p-8 md:p-10 shadow-xl border border-slate-100/60 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-2.5 h-full bg-gradient-to-b from-[#1a3a1f] to-[#00BE5D]" />

                      <div className="space-y-6">
                        <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-[#00BE5D]" />
                            {featuredPost.date}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-[#00BE5D]" />
                            {featuredPost.readTime}
                          </span>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#283655] leading-snug group-hover:text-[#00BE5D] transition-colors duration-300">
                          <Link href={featuredPost.link || "#"}>{featuredPost.title}</Link>
                        </h2>

                        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                          {featuredPost.description}
                        </p>
                      </div>

                      <div className="pt-8 mt-6 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100/60 flex items-center justify-center font-bold text-[#00BE5D] text-sm">
                            CC
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-800">{featuredPost.author}</p>
                            <p className="text-[10px] text-slate-400">Editorial Panel</p>
                          </div>
                        </div>

                        <Link
                          href={featuredPost.link || "#"}
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#283655] hover:bg-[#00BE5D] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-slate-900/10 hover:shadow-emerald-500/20"
                        >
                          Read More
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Grid Section */}
              {gridPosts.length > 0 && (
                <section className="space-y-10">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#283655]">
                      More Latest <span className="text-[#00BE5D]">Articles</span>
                    </h2>
                    <div className="h-1 flex-1 bg-slate-100/70 ml-6 rounded-full hidden sm:block"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {gridPosts.map((post) => (
                      <motion.article
                        key={post.id}
                        layout
                        className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-100/30 transition-all duration-500 h-full"
                      >
                        <Link href={post.link || "#"} className="flex flex-col h-full">
                          {/* Card Image */}
                          <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                            <Image
                              src={post.image || blog30}
                              alt={post.title || "Blog Post"}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                              unoptimized
                            />
                            <div className="absolute top-4 left-4 z-10">
                              <span className="px-3.5 py-1.5 rounded-xl text-[10px] font-bold bg-white/95 text-emerald-950 shadow-sm backdrop-blur-sm tracking-wide uppercase border border-slate-100">
                                {post.category}
                              </span>
                            </div>
                          </div>

                          {/* Card Body */}
                          <div className="flex flex-col flex-1 p-6 md:p-7 space-y-4">
                            <div className="flex items-center gap-3 text-xs font-semibold text-slate-400">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5 text-[#00BE5D]/80" />
                                {post.date}
                              </span>
                              <span className="w-1 h-1 rounded-full bg-slate-200" />
                              <span>{post.readTime}</span>
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#00BE5D] transition-colors duration-300 line-clamp-2 leading-snug">
                              {post.title}
                            </h3>

                            <p className="text-slate-500 text-xs md:text-sm line-clamp-2 leading-relaxed">
                              {post.description}
                            </p>

                            <div className="mt-auto pt-5 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-[#00BE5D] uppercase tracking-wider group-hover:text-[#283655] transition-colors duration-300">
                              <span>Read More</span>
                              <div className="w-8 h-8 rounded-xl bg-emerald-50 group-hover:bg-[#00BE5D] flex items-center justify-center transition-all duration-300">
                                <ArrowRight className="w-4 h-4 text-[#00BE5D] group-hover:text-white transition-colors duration-300" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.article>
                    ))}
                  </div>
                </section>
              )}
            </motion.div>
          ) : (
            /* No Results State */
            <motion.div
              key="no-results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="py-24 text-center max-w-md mx-auto space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-[#00BE5D] mx-auto border border-emerald-100">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-800">No articles matched</h3>
                <p className="text-slate-500 text-sm">
                  We couldn&apos;t find any articles matching your search query or category selection. Try resetting filters to explore all topics.
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="px-6 py-3 bg-[#00BE5D] hover:bg-[#00be5dd2] text-white rounded-2xl text-sm font-bold shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/25 transition-all duration-300"
              >
                Reset All Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}




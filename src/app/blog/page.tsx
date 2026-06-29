"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

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
    link: "/iepf2025",
    category: "IEPF Recovery",
    description: "Discover the latest statistics on unclaimed shares and dividends across top Indian companies for the year 2025."
  },
  {
    id: 2,
    title: "The Impact of India's digital thrust on recovery of unclaimed assets",
    date: "Mar 25, 2025",
    image: blog29,
    link: "/the-impact-of-indias-digital-thrust-on-recovery-of-unclaimed-assets",
    category: "Digital India",
    description: "How digital transformation is revolutionizing the way investors recover their long-lost financial assets."
  },
  {
    id: 3,
    title: "Cross-Border Asset Recovery: Challenges and Solutions for NRIs",
    date: "Mar 24, 2025",
    image: blog28,
    link: "/cross-border-asset-recovery",
    category: "Insights",
    description: "A comprehensive guide for Non-Resident Indians to navigate the complexities of asset recovery from abroad."
  },
  {
    id: 4,
    title: "The Technology Component in Unclaimed Assets Recovery",
    date: "Feb 22, 2025",
    image: blog27,
    link: "/the-technology-component-in-unclaimed-assets-recovery",
    category: "Digital India",
    description: "Exploring the role of advanced algorithms and data verification in modern asset tracing."
  },
  {
    id: 5,
    title: "From Broker to IPF: A Journey Through Unclaimed Funds",
    date: "Feb 21, 2025",
    image: blog26,
    link: "/from-broker-to-ipf",
    category: "Legal Guide",
    description: "Tracing the path of unclaimed dividends from brokerage accounts to government protection funds."
  },
  {
    id: 6,
    title: "Beyond Shares: Guide to Recovering All Unclaimed Financial Instruments",
    date: "Feb 20, 2025",
    image: blog25,
    link: "/beyond-shares",
    category: "Asset Tracing",
    description: "How to recover bonds, mutual funds, insurance proceeds, and other dormant financial assets."
  },
  {
    id: 7,
    title: "The Rise of AI in Unclaimed Asset Identification",
    date: "Feb 11, 2025",
    image: blog24,
    link: "/the-rise-of-ai-in-unclaimed-asset-identification",
    category: "Digital India",
    description: "How artificial intelligence is helping identify forgotten investments with unprecedented accuracy."
  },
  {
    id: 8,
    title: "MITR Platform: The Innovative SEBI Initiative",
    date: "Feb 10, 2025",
    image: blog23,
    link: "/mitr-platform",
    category: "Legal Guide",
    description: "Everything you need to know about the newly launched MITR platform for simplified mutual fund recovery."
  },
  {
    id: 9,
    title: "The Role of KYC Updates in Preventing Unclaimed Assets",
    date: "Jan 30, 2025",
    image: blog22,
    link: "/the-role-of-kyc-updates",
    category: "Insights",
    description: "Why keeping your KYC records updated is the first step in ensuring your investments never go missing."
  },
  // Adding a few more to populate the grid well
  {
    id: 10,
    title: "Unclaimed Dividends vs. Unclaimed Shares: Navigation",
    date: "Jan 1, 2025",
    image: blog19,
    link: "/unclaimed-dividends-vs-unclaimed-shares",
    category: "IEPF Recovery",
    description: "Understanding the key differences in how dividends and shares are treated by the IEPF authority."
  },
  {
    id: 11,
    title: "Legal Heirs and IEPF Claims: A Complete Guide",
    date: "Dec 23, 2024",
    image: blog18,
    link: "/legal-heirs-&-iepf-claims",
    category: "Asset Tracing",
    description: "How legal heirs and nominees can claim ancestral wealth with the right documentation."
  },
  {
    id: 12,
    title: "Role of Demat accounts in recovering shares from IEPF",
    date: "Dec 18, 2024",
    image: blog17,
    link: "/role-of-demat-accounts",
    category: "Legal Guide",
    description: "Why a demat account is essential for the final transfer of recovered physical shares."
  }
];

export default function Blog() {
  const featuredPost = blogPosts[0];
  const sidePosts = blogPosts.slice(1, 4);
  const gridPosts = blogPosts.slice(4);

  return (
    <main className="min-h-screen bg-white/20 pt-12 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section 1: Our Insightful Blog */}
        <section className="mb-24">
          <div className="text-center mb-16 space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-5xl font-bold text-slate-900"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#283655] tracking-tight leading-tight">
                Our{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a3a1f] via-[#2d5a34] to-[#00BE5D]">
                  Blog
                </span>
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-[#00BE5D] to-[#1a3a1f] mx-auto mt-6 rounded-full opacity-60 mb-20"></div>
            {/* </span> */}
          </motion.h1>
        
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Featured Post */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <Link href={featuredPost.link} className="group block relative h-[450px] md:h-[550px] overflow-hidden rounded-[2rem] shadow-2xl">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-10 text-white w-full">
              <div className="flex items-center gap-2 text-sm mb-4 text-white/80">
                <Clock className="w-4 h-4" />
                <span>{featuredPost.date}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight group-hover:text-[#00BE5D] transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-white/70 line-clamp-2 text-sm md:text-base mb-6 max-w-xl">
                {featuredPost.description}
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#00BE5D]">
                Read More <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Side Small Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {sidePosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={post.link} className="group flex gap-5 p-4 rounded-3xl transition-all duration-300 hover:bg-slate-50 border border-transparent hover:border-slate-100">
                <div className="w-32 h-28 md:w-40 md:h-32 relative flex-shrink-0 overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                </div>
                <div className="flex flex-col justify-between py-1 flex-1">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#00BE5D] transition-colors line-clamp-2 leading-snug mb-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#00BE5D] uppercase tracking-wider group-hover:gap-2.5 transition-all">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

        {/* Section 2: Explore Our Latest Articles */ }
  <section>
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-16 p-4">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-slate-900 whitespace-nowrap"
      >
        Explore Our Latest <span className="relative inline-block">
          Articles
          <span className="absolute bottom-2 left-0 w-full h-3 bg-[#00BE5D]/20 rounded-full -z-10" />
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-slate-500 max-w-xl text-sm md:text-base leading-relaxed"
      >
        Dive deeper into our archive of expert articles, case studies, and industry news to stay ahead in the financial landscape.
      </motion.p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
      {gridPosts.map((post, idx) => (
        <motion.article
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: (idx % 3) * 0.1 }}
          className="group flex flex-col h-full bg-white transition-all"
        >
          <Link href={post.link} className="flex flex-col h-full">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] mb-6 shadow-lg shadow-slate-200/50 group-hover:shadow-xl transition-all duration-300">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
            </div>
            <div className="flex flex-col flex-1 px-2">
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#00BE5D] transition-colors line-clamp-2 leading-tight mb-3">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{post.date}</span>
              </div>
              <div className="mt-auto flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-[#00BE5D] transition-all">
                Read More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  </section>
      </div >
    </main >
  );
}



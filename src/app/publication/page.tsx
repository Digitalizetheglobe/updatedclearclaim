"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    ArrowRight,
    Download,
    Calendar,
    User,
    Loader2
} from "lucide-react";

interface Publication {
    id: number;
    title: string;
    category: string;
    date: string;
    author: string;
    excerpt: string;
    image: string;
    link: string;
    featured: boolean;
}

const categories = ["Media"];

export default function PublicationPage() {
    const [publications, setPublications] = useState<Publication[]>([]);
    const [activeCategory, setActiveCategory] = useState("Media");
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPublications() {
            try {
                const res = await fetch("https://apicms.clearclaim.in/api/publications");
                if (res.ok) {
                    const data = await res.json();
                    setPublications(data);
                }
            } catch (err) {
                console.error("Failed to fetch publications:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchPublications();
    }, []);

    const filteredPublications = publications.filter(pub => {
        const matchesCategory = activeCategory === "All" || pub.category === activeCategory;
        const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pub.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredPub = publications.find(p => p.featured && p.category === "Media") || publications.find(p => p.category === "Media");

    return (
        <div className="min-h-screen bg-[#F9FAFB] font-sans selection:bg-[#00BE5D]/30 py-16 ">
            {/* Hero Section */}
            <section className="relative  pb-20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#E0F8EE] via-white to-white -z-10" />

                {/* Animated Background Shapes */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.2, 0.3]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-24 -right-24 w-96 h-96 bg-[#00BE5D]/5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 -left-48 w-[500px] h-[500px] bg-[#00743C]/5 rounded-full blur-3xl"
                />

                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className=" text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-[#00743C] uppercase bg-[#00BE5D]/10 rounded-full border border-[#00BE5D]/20">
                                Insights & Knowledge
                            </span>
                            <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-[#283655] tracking-tight">
                                ClearClaim{" "}
                                <span className="text-[#00BE5D]">
                                    Publications
                                </span>
                            </h2>
                            <div className="h-1.5 w-20 bg-gradient-to-r from-[#00BE5D] to-[#00BE5D]/40 mx-auto mt-6 rounded-full opacity-40 mb-20"></div>

                        </motion.div>

                        {/* Search Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative max-w-xl group mt-8"
                        >
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 transition-colors group-focus-within:text-[#00BE5D]">
                                <Search size={20} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search publications..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="block w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00BE5D]/20 focus:border-[#00BE5D] transition-all text-gray-700"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {loading ? (
                <div className="flex justify-center items-center py-20">
                    <Loader2 className="w-10 h-10 animate-spin text-[#00BE5D]" />
                </div>
            ) : (
                <>
                    {/* Featured Publication Section */}
                    {featuredPub && (
                        <section className="max-w-7xl mx-auto px-6 lg:px-12 -mt-10 mb-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="group relative bg-[#00743C] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[400px]"
                >
                    {/* Decorative Pattern */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                    </div>

                    <div className="w-full md:w-1/2 relative bg-[#00BE5D]/10 flex items-center justify-center p-8">
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#00743C]/60 to-transparent z-10" />
                            <img
                                src={featuredPub.image}
                                alt="Featured Publication"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4 z-20">
                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#00743C] text-xs font-bold rounded-full uppercase tracking-widest">
                                    Featured
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center relative z-20">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex items-center gap-1.5 text-[#E0F8EE] text-sm font-medium">
                                <Calendar size={14} />
                                {featuredPub.date}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E0F8EE]/30" />
                            <span className="text-[#E0F8EE] text-sm font-medium">
                                {featuredPub.category}
                            </span>
                        </div>
                        <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 leading-tight group-hover:text-[#E0F8EE] transition-colors">
                            {featuredPub.title}
                        </h2>
                        <p className="text-[#E0F8EE]/80 text-lg mb-8 leading-relaxed line-clamp-3">
                            {featuredPub.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href={featuredPub.link}
                                className="flex items-center gap-2 px-8 py-3.5 bg-white text-[#00743C] font-bold rounded-full hover:bg-[#E0F8EE] transition-all transform hover:-translate-y-1 shadow-lg"
                            >
                                Read Ful Paper
                                <ArrowRight size={18} />
                            </Link>
                            <button className="flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all">
                                <Download size={18} />
                                PDF Edition
                            </button>
                        </div>
                    </div>
                </motion.div>
            </section>
            )}

            {/* Filter and Grid Section */}
            <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
                    <div className="flex flex-wrap gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${activeCategory === cat
                                    ? "bg-[#00743C] text-white shadow-lg shadow-[#00743C]/20"
                                    : "bg-white text-gray-500 hover:text-[#00743C] hover:bg-gray-50 border border-gray-100"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="text-gray-500 text-sm font-medium">
                        Showing <span className="text-[#00743C] font-bold">{filteredPublications.length}</span> publications
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredPublications.map((pub) => (
                            <motion.div
                                key={pub.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="group flex flex-col h-full bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#00BE5D]/5 transition-all duration-500 overflow-hidden"
                            >
                                {/* Card Image Wrapper */}
                                <div className="relative h-56 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                    <img
                                        src={pub.image}
                                        alt={pub.title}
                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#00743C] text-[10px] font-black uppercase tracking-widest rounded-lg shadow-sm">
                                            {pub.category}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                        <div className="flex items-center gap-2 text-white text-xs font-bold">
                                            <User size={12} /> {pub.author}
                                        </div>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="flex-1 p-8 flex flex-col">
                                    <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">
                                        <Calendar size={12} />
                                        {pub.date}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1a3a1f] mb-4 group-hover:text-[#00743C] transition-colors line-clamp-2 leading-[1.3]">
                                        {pub.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-8 line-clamp-3 leading-relaxed">
                                        {pub.excerpt}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                                        <Link
                                            href={pub.link}
                                            className="text-[#00743C] font-black text-xs uppercase tracking-widest flex items-center gap-2"
                                        >
                                            read more
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredPublications.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <div className="inline-flex items-center justify-center p-6 bg-gray-50 rounded-full text-gray-400 mb-6">
                            <Search size={48} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">No publications found</h3>
                        <p className="text-gray-500">Try adjusting your search or category filters.</p>
                    </motion.div>
                    )}
                </section>
                </>
            )}

            {/* CTA Section */}
            <section className="bg-white py-24 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a1f] mb-6">
                            Never miss an update from our team
                        </h2>
                        <p className="text-gray-500 mb-10 text-lg leading-relaxed">
                            Join 5,000+ financial professionals and investors who receive our latest insights.
                            No spam, just pure expert value.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#00BE5D]/20 transition-all"
                            />
                            <button className="px-6 py-3 bg-[#00BE5D] text-white font-bold rounded-full hover:bg-[#00743C] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#00BE5D]/20">
                                Subscribe Now
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}

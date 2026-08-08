"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    ArrowRight,
    Calendar,
    User,
    Loader2,
    ImageIcon,
    Maximize2,
    ChevronLeft,
    ChevronRight,
    X
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

interface DigitalMediaItem {
    id: number;
    title?: string;
    description?: string;
    image: string;
    category?: string;
    createdAt?: string;
}

const mainTabs = ["Print Media", "Digital Media"];

export default function PublicationPage() {
    const [activeTab, setActiveTab] = useState<string>("Print Media");
    const [publications, setPublications] = useState<Publication[]>([]);
    const [digitalMedia, setDigitalMedia] = useState<DigitalMediaItem[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loadingPrint, setLoadingPrint] = useState(true);
    const [loadingDigital, setLoadingDigital] = useState(true);
    const [activePhotoIdx, setActivePhotoIdx] = useState<number | null>(null);

    // Fetch Print Media
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
                setLoadingPrint(false);
            }
        }
        fetchPublications();
    }, []);

    // Fetch Digital Media (GET API from CMS backend)
    useEffect(() => {
        async function fetchDigitalMedia() {
            try {
                const res = await fetch("https://apicms.clearclaim.in/api/digital-media/active");
                if (res.ok) {
                    const data = await res.json();
                    setDigitalMedia(Array.isArray(data) ? data : []);
                } else {
                    setDigitalMedia([]);
                }
            } catch (err) {
                console.error("Failed to fetch digital media:", err);
                setDigitalMedia([]);
            } finally {
                setLoadingDigital(false);
            }
        }
        fetchDigitalMedia();
    }, []);

    // Filter Print Media
    const filteredPublications = publications.filter(pub => {
        const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (pub.excerpt && pub.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesSearch;
    });

    // Filter Digital Media
    const filteredDigitalMedia = digitalMedia.filter(item => {
        const title = item.title || "";
        const desc = item.description || "";
        return title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            desc.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const featuredPub = publications.find(p => p.featured) || publications[0];

    // Lightbox Handlers
    const handlePrevPhoto = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setActivePhotoIdx((prev) => (prev !== null ? (prev - 1 + filteredDigitalMedia.length) % filteredDigitalMedia.length : null));
    };

    const handleNextPhoto = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setActivePhotoIdx((prev) => (prev !== null ? (prev + 1) % filteredDigitalMedia.length : null));
    };

    const handleClosePhoto = () => {
        setActivePhotoIdx(null);
    };

    // Keyboard support for Lightbox
    useEffect(() => {
        if (activePhotoIdx === null) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") handlePrevPhoto();
            else if (e.key === "ArrowRight") handleNextPhoto();
            else if (e.key === "Escape") handleClosePhoto();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activePhotoIdx, filteredDigitalMedia]);

    const isLoading = activeTab === "Print Media" ? loadingPrint : loadingDigital;

    return (
        <div className="min-h-screen bg-[#F9FAFB] font-sans selection:bg-[#00BE5D]/30 py-16">
            {/* Hero Section */}
            <section className="relative pb-16 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#E0F8EE] via-white to-white -z-10" />

                {/* Background Glow */}
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
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 mb-4 text-xs sm:text-sm font-bold tracking-wider text-[#00743C] uppercase bg-[#00BE5D]/10 rounded-full border border-[#00BE5D]/20">
                                Media & Coverage
                            </span>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#283655] tracking-tight">
                                ClearClaim{" "}
                                <span className="text-[#00BE5D]">
                                    {activeTab}
                                </span>
                            </h1>
                            <div className="h-1.5 w-20 bg-gradient-to-r from-[#00BE5D] to-[#00BE5D]/40 mx-auto mt-4 rounded-full opacity-40 mb-10"></div>
                        </motion.div>

                        {/* Search Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative max-w-xl mx-auto group mb-10"
                        >
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#00BE5D] transition-colors">
                                <Search size={20} />
                            </div>
                            <input
                                type="text"
                                placeholder={`Search ${activeTab.toLowerCase()}...`}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="block w-full pl-12 pr-4 py-3.5 sm:py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00BE5D]/20 focus:border-[#00BE5D] transition-all text-gray-700 text-sm sm:text-base"
                            />
                        </motion.div>

                        {/* Page Main Tabs: Print Media & Digital Media */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="inline-flex p-1.5 bg-white border border-gray-200 rounded-2xl shadow-sm gap-2"
                        >
                            {mainTabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 sm:px-8 py-3 rounded-xl text-sm sm:text-base font-extrabold transition-all duration-300 ${
                                        activeTab === tab
                                            ? "bg-[#00BE5D] text-white shadow-md shadow-[#00BE5D]/30"
                                            : "text-gray-600 hover:text-[#00BE5D] hover:bg-gray-50"
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {isLoading ? (
                <div className="flex justify-center items-center py-20">
                    <Loader2 className="w-10 h-10 animate-spin text-[#00BE5D]" />
                </div>
            ) : (
                <>
                    {/* PRINT MEDIA TAB CONTENT */}
                    {activeTab === "Print Media" && (
                        <>
                            {/* Featured Publication Section */}
                            {featuredPub && !searchQuery && (
                                <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8 }}
                                        className="group relative bg-[#00743C] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[380px]"
                                    >
                                        <div className="w-full md:w-1/2 relative bg-[#00BE5D]/10 flex items-center justify-center p-8">
                                            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]">
                                                <img
                                                    src={featuredPub.image}
                                                    alt={featuredPub.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute top-4 left-4 z-20">
                                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#00743C] text-xs font-bold rounded-full uppercase tracking-widest">
                                                        Featured
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-20">
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className="flex items-center gap-1.5 text-[#E0F8EE] text-sm font-medium">
                                                    <Calendar size={14} />
                                                    {featuredPub.date}
                                                </span>
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#E0F8EE]/30" />
                                                <span className="text-[#E0F8EE] text-sm font-medium">
                                                    Print Media
                                                </span>
                                            </div>
                                            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 leading-tight group-hover:text-[#E0F8EE] transition-colors">
                                                {featuredPub.title}
                                            </h2>
                                            <p className="text-[#E0F8EE]/80 text-base mb-6 leading-relaxed line-clamp-3">
                                                {featuredPub.excerpt}
                                            </p>
                                            <div>
                                                <Link
                                                    href={featuredPub.link || "#"}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#00743C] font-bold rounded-full hover:bg-[#E0F8EE] transition-all transform hover:-translate-y-1 shadow-lg text-sm"
                                                >
                                                    Read Full Article
                                                    <ArrowRight size={16} />
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                </section>
                            )}

                            {/* Print Media Grid */}
                            <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
                                <div className="flex items-center justify-between gap-8 mb-10">
                                    <span className="px-5 py-2 rounded-xl text-sm font-bold bg-[#00BE5D] text-white shadow-sm">
                                        Print Media
                                    </span>
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
                                                className="group flex flex-col h-full bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#00BE5D]/10 transition-all duration-500 overflow-hidden"
                                            >
                                                <div className="relative h-56 overflow-hidden">
                                                    <img
                                                        src={pub.image}
                                                        alt={pub.title}
                                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                    <div className="absolute top-4 left-4">
                                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#00743C] text-[10px] font-black uppercase tracking-widest rounded-lg shadow-sm">
                                                            PRINT MEDIA
                                                        </span>
                                                    </div>
                                                    {pub.author && (
                                                        <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                                            <div className="flex items-center gap-2 text-white text-xs font-bold bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-sm">
                                                                <User size={12} /> {pub.author}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="flex-1 p-6 flex flex-col">
                                                    <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest mb-3">
                                                        <Calendar size={12} />
                                                        {pub.date}
                                                    </div>
                                                    <h3 className="text-lg font-bold text-[#1a3a1f] mb-3 group-hover:text-[#00743C] transition-colors line-clamp-2 leading-snug">
                                                        {pub.title}
                                                    </h3>
                                                    <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                                                        {pub.excerpt}
                                                    </p>

                                                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                                                        <Link
                                                            href={pub.link || "#"}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-[#00743C] font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:text-[#00BE5D] transition-colors"
                                                        >
                                                            Read More
                                                            <ArrowRight size={14} />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </motion.div>

                                {filteredPublications.length === 0 && (
                                    <div className="text-center py-20">
                                        <div className="inline-flex items-center justify-center p-6 bg-gray-100 rounded-full text-gray-400 mb-4">
                                            <Search size={40} />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-1">No print media found</h3>
                                        <p className="text-gray-500 text-sm">Try adjusting your search query.</p>
                                    </div>
                                )}
                            </section>
                        </>
                    )}

                    {/* DIGITAL MEDIA TAB CONTENT */}
                    {activeTab === "Digital Media" && (
                        <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
                            <div className="flex items-center justify-between gap-8 mb-10">
                                <span className="px-5 py-2 rounded-xl text-sm font-bold bg-[#00BE5D] text-white shadow-sm">
                                    Digital Media Photos
                                </span>
                                <div className="text-gray-500 text-sm font-medium">
                                    Showing <span className="text-[#00743C] font-bold">{filteredDigitalMedia.length}</span> items
                                </div>
                            </div>

                            <motion.div
                                layout
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                            >
                                <AnimatePresence mode="popLayout">
                                    {filteredDigitalMedia.map((item, index) => (
                                        <motion.div
                                            key={item.id || index}
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.4 }}
                                            onClick={() => setActivePhotoIdx(index)}
                                            className="group relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#00BE5D]/10 overflow-hidden cursor-pointer flex flex-col"
                                        >
                                            <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
                                                <img
                                                    src={item.image}
                                                    alt={item.title || "Digital Media"}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                                                        <Maximize2 className="w-5 h-5" />
                                                    </div>
                                                </div>
                                                <div className="absolute top-3 left-3">
                                                    <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[#00743C] text-[10px] font-extrabold uppercase tracking-wider rounded-lg shadow-sm">
                                                        DIGITAL MEDIA
                                                    </span>
                                                </div>
                                            </div>

                                            {item.title && (
                                                <div className="p-4 bg-white border-t border-gray-50">
                                                    <h4 className="text-sm font-bold text-gray-800 line-clamp-1 group-hover:text-[#00BE5D] transition-colors">
                                                        {item.title}
                                                    </h4>
                                                    {item.description && (
                                                        <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                                                            {item.description}
                                                        </p>
                                                    )}
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>

                            {filteredDigitalMedia.length === 0 && (
                                <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 my-8">
                                    <div className="inline-flex items-center justify-center p-6 bg-green-50 rounded-full text-[#00BE5D] mb-4">
                                        <ImageIcon size={48} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-1">No digital media photos found</h3>
                                    <p className="text-gray-500 text-sm">Digital media items added via CMS backend API will appear here.</p>
                                </div>
                            )}
                        </section>
                    )}
                </>
            )}

            {/* Lightbox Modal for Digital Media Photos */}
            <AnimatePresence>
                {activePhotoIdx !== null && filteredDigitalMedia[activePhotoIdx] && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClosePhoto}
                        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md select-none"
                    >
                        {/* Close button */}
                        <button
                            onClick={handleClosePhoto}
                            className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 hover:bg-red-600 hover:text-white border border-white/20 text-white transition-all duration-300 z-[10000] cursor-pointer"
                        >
                            <span className="text-xs font-semibold">Close</span>
                            <X className="w-4 h-4" />
                        </button>

                        {/* Prev button */}
                        <button
                            onClick={handlePrevPhoto}
                            className="absolute left-4 md:left-8 p-3 rounded-full bg-black/60 hover:bg-white hover:text-black border border-white/20 text-white transition-all duration-300 z-[10000] cursor-pointer"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Image Container */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative flex flex-col items-center justify-center p-4 max-w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={filteredDigitalMedia[activePhotoIdx].image}
                                alt={filteredDigitalMedia[activePhotoIdx].title || "Digital Media"}
                                className="max-w-[85vw] max-h-[75vh] md:max-h-[80vh] w-auto h-auto object-contain rounded-2xl shadow-2xl border border-white/10"
                            />
                            {filteredDigitalMedia[activePhotoIdx].title && (
                                <p className="mt-4 text-white text-base font-semibold text-center max-w-lg">
                                    {filteredDigitalMedia[activePhotoIdx].title}
                                </p>
                            )}
                        </motion.div>

                        {/* Next button */}
                        <button
                            onClick={handleNextPhoto}
                            className="absolute right-4 md:right-8 p-3 rounded-full bg-black/60 hover:bg-white hover:text-black border border-white/20 text-white transition-all duration-300 z-[10000] cursor-pointer"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Counter */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/60 border border-white/20 text-white backdrop-blur-md text-xs font-bold">
                            {activePhotoIdx + 1} / {filteredDigitalMedia.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

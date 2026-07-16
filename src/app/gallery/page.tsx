"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

interface GalleryImage {
  id: number;
  title: string;
  image: string;
  category: string;
}

export default function GalleryPage() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const res = await fetch("https://apicms.clearclaim.in/api/gallery/active");
        if (res.ok) {
          const data = await res.json();
          setGalleryImages(data);
        }
      } catch (err) {
        console.error("Failed to fetch gallery images:", err);
      }
    }
    fetchGallery();
  }, []);

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveIdx((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveIdx((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
  };

  const handleClose = () => {
    setActiveIdx(null);
  };

  // Keyboard navigation support
  useEffect(() => {
    if (activeIdx === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "ArrowRight") handleNext();
      else if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIdx]);

  return (
    <div className="bg-slate-50 min-h-screen selection:bg-emerald-100 selection:text-emerald-900 py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-[#283655] tracking-tight">
              Our{" "}
              <span className="text-[#00BE5D]">
                Gallery
              </span>
            </h2>
            <div className="h-1.5 w-24 bg-emerald-500 mx-auto mt-6 rounded-full opacity-30"></div>
            <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
              A glimpse into our journey, our work, and the impact we create.
            </p>
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => setActiveIdx(index)}
              className="group relative overflow-hidden rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] aspect-square bg-white p-2 cursor-pointer"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={image.image}
                  alt={image.title || `Gallery ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-white">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md select-none"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-2 px-4 py-2 md:py-2.5 rounded-full bg-black/70 hover:bg-red-600 hover:text-white border border-white/20 text-white transition-all duration-300 z-[10000] cursor-pointer hover:scale-105 active:scale-95 shadow-xl text-xs md:text-sm font-semibold"
              title="Close (Esc)"
            >
              <span>Close</span>
              <X className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* Prev button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 p-2.5 md:p-4 rounded-full bg-black/60 hover:bg-white hover:text-black border border-white/20 text-white transition-all duration-300 z-[10000] cursor-pointer hover:scale-110 active:scale-95 shadow-lg"
              title="Previous"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Main Image Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative flex items-center justify-center p-4 max-w-full"
              onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking the image area
            >
              <img
                src={galleryImages[activeIdx].image}
                alt={galleryImages[activeIdx].title || `Gallery ${activeIdx + 1}`}
                className="max-w-[85vw] max-h-[75vh] md:max-h-[82vh] w-auto h-auto object-contain rounded-2xl shadow-2xl border border-white/10 select-none transition-all duration-300"
              />
            </motion.div>

            {/* Next button */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 p-2.5 md:p-4 rounded-full bg-black/60 hover:bg-white hover:text-black border border-white/20 text-white transition-all duration-300 z-[10000] cursor-pointer hover:scale-110 active:scale-95 shadow-lg"
              title="Next"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/60 border border-white/20 text-white backdrop-blur-md text-xs font-bold tracking-wider shadow-lg">
              {activeIdx + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


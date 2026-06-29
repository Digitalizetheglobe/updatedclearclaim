"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GalleryPage() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Fetch Gallery Images
    fetch("http://localhost:5000/api/gallery")
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        if (json && json.success && Array.isArray(json.data)) {
          const apiImages = json.data.map(
            (item: any) => `http://localhost:5000/uploads/update/${item.photo}`
          );
          setImages(apiImages);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen selection:bg-emerald-100 selection:text-emerald-900 py-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              Memories & Moments
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#283655] mb-6">
              Our <span className="text-emerald-500">Gallery</span>
            </h1>
            <div className="h-1.5 w-24 bg-emerald-500 mx-auto mt-6 rounded-full opacity-30"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {images.length > 0 ? (
            images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] aspect-square bg-white p-2"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400 py-20 flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-slate-200 rounded-full animate-pulse"></div>
              <p className="text-lg">No images in gallery yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

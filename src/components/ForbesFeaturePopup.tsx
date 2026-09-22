"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Award } from "lucide-react";

export default function ForbesFeaturePopup() {
  const [isOpen, setIsOpen] = useState(true);

  const articleUrl =
    "https://www.forbesindia.com/article/upfront/brand-connect/building-india-founders-and-industry-leaders-across-sectors-driving-business-growth/2997929/1";

  return (
    <div className="fixed bottom-[92px] left-4 sm:left-6 z-[1950] pointer-events-none font-sans">
      <AnimatePresence mode="wait">
        {isOpen ? (
          /* --- Expanded Card --- */
          <motion.div
            key="forbes-popup"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.92 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="pointer-events-auto relative w-[calc(100vw-32px)] max-w-[340px] rounded-2xl bg-white/95 backdrop-blur-md p-5 shadow-[0_12px_40px_rgba(0,0,0,0.18)] border border-amber-200/70 overflow-hidden"
          >
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-emerald-500" />

            {/* Header row: Badge + Close Button */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200/70 text-[11px] font-bold tracking-wider text-amber-900 uppercase">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                As Featured In
              </span>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Minimize feature"
                className="w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Publication Title */}
            <div className="mb-2">
              <h4 className="font-serif text-[22px] sm:text-[24px] font-black tracking-[0.14em] text-[#0d0d0d] uppercase leading-tight">
                FORBES INDIA
              </h4>
            </div>

            {/* Description / Highlight */}
            <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-gray-600 mb-4 font-normal">
              Recognised for our work in helping Indian families recover forgotten shares and unclaimed investments.
            </p>

            {/* CTA Button */}
            <a
              href={articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-gray-900 via-neutral-900 to-black hover:from-neutral-900 hover:to-zinc-800 text-white text-[13px] font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-200 group"
            >
              <span>Read Full Article</span>
              <ExternalLink className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </motion.div>
        ) : (
          /* --- Collapsed Sticky Button on Left Corner --- */
          <motion.button
            key="forbes-sticky-btn"
            initial={{ opacity: 0, scale: 0.85, x: -15 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.85, x: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={() => setIsOpen(true)}
            type="button"
            aria-label="Open Forbes India feature"
            className="pointer-events-auto flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-white text-gray-900 shadow-[0_8px_25px_rgba(0,0,0,0.18)] border border-amber-300 hover:border-amber-400 hover:bg-amber-50/50 hover:scale-105 active:scale-95 transition-all duration-200 group"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center shadow-inner">
              <Award className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="flex flex-col items-start pr-1">
              <span className="text-[9px] font-bold text-amber-700 tracking-wider uppercase leading-none">
                Featured In
              </span>
              <span className="font-serif text-[12px] font-black tracking-wide text-gray-900 leading-tight">
                Forbes India
              </span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

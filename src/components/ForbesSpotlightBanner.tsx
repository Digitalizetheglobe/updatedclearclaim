"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ArrowUpRight, Sparkles, ShieldCheck, CheckCircle2, FileText } from "lucide-react";

export default function ForbesSpotlightBanner() {
  const articleUrl =
    "https://www.forbesindia.com/article/upfront/brand-connect/building-india-founders-and-industry-leaders-across-sectors-driving-business-growth/2997929/1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-6xl mx-auto my-8 sm:my-10 text-left"
    >
      {/* Outer ambient soft glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-400/20 via-emerald-400/15 to-amber-400/20 rounded-3xl blur-xl opacity-80 -z-10" />

      {/* Main Container Card - Premium Light Luxury Theme (No Black) */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-[#FCFDFD] to-[#F4FAF6] border border-amber-200/90 shadow-[0_20px_50px_rgba(40,54,85,0.08)]">
        {/* Top Prestige Metallic Gradient Ribbon */}
        <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 via-yellow-400 to-[#00BE5D]" />

        {/* Decorative background soft radial lights */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="relative z-10 p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Editorial Recognition Details */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold tracking-wider uppercase shadow-xs">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  National Media Recognition
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E0F8EE] border border-[#00BE5D]/30 text-[#00743C] text-xs font-bold shadow-xs">
                  <Sparkles className="w-3 h-3 text-[#00BE5D]" />
                  Brand Connect Feature
                </span>
              </div>

              {/* Publication Masthead */}
              <div className="flex items-baseline gap-3 mb-2">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black tracking-[0.16em] text-[#1E293B] uppercase leading-none">
                  FORBES INDIA
                </h2>
              </div>

              {/* Story Title */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#283655] leading-snug mt-1 mb-3">
                “Building India: Founders and Industry Leaders Across Sectors Driving Business Growth”
              </h3>

              {/* Editorial Quote */}
              <div className="relative pl-4 border-l-4 border-amber-400 bg-amber-50/50 rounded-r-xl py-2 my-3">
                <p className="text-gray-700 text-sm sm:text-[15px] leading-relaxed font-normal italic">
                  Recognised by Forbes India for our pioneering work in helping Indian families and NRI investors recover forgotten shares, unclaimed dividends, and IEPF investments with total transparency.
                </p>
              </div>

              {/* Trust & Credibility Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-gray-100 shadow-xs text-xs text-gray-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#00BE5D] shrink-0" />
                  <span>IEPF & Share Recovery</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-gray-100 shadow-xs text-xs text-gray-700 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Transparent Process</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-gray-100 shadow-xs text-xs text-gray-700 font-semibold">
                  <FileText className="w-4 h-4 text-[#00743C] shrink-0" />
                  <span>National Publication</span>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Interactive Call-to-Action Plaque */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md rounded-2xl bg-white p-6 sm:p-7 border border-amber-200 shadow-lg shadow-amber-500/5 flex flex-col items-center text-center relative overflow-hidden group hover:border-amber-300 hover:shadow-xl transition-all duration-300">
                {/* Subtle corner badge decoration */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-amber-100/70 to-transparent rounded-bl-full pointer-events-none" />

                {/* Forbes India Official Logo */}
                <div className="relative mb-4">
                  <div className="relative px-6 py-3 rounded-2xl bg-white border border-amber-200/90 shadow-[0_4px_16px_rgba(245,158,11,0.08)] flex items-center justify-center group-hover:border-amber-300 group-hover:shadow-[0_6px_20px_rgba(245,158,11,0.14)] transition-all duration-300">
                    <Image
                      src="/images/forbes-india.webp"
                      alt="Forbes India"
                      width={180}
                      height={52}
                      className="h-8 sm:h-9 w-auto object-contain"
                      priority
                    />
                  </div>
                  {/* Verified feature pulse dot */}
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00BE5D] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00BE5D]"></span>
                  </span>
                </div>

                <h4 className="text-[#1E293B] text-base sm:text-lg font-extrabold tracking-tight mb-1">
                  Read the Full Forbes Coverage
                </h4>
                <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed mb-5 max-w-xs">
                  Discover how ClearClaim is transforming unclaimed wealth recovery for families across India & abroad.
                </p>

                {/* Primary CTA Button - Website Brand Color & Style */}
                <a
                  href={articleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#00BE5D] hover:bg-[#008C44] text-white font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-[#00BE5D]/30 hover:shadow-xl hover:shadow-[#00BE5D]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                >
                  {/* Website Signature Shine Effect */}
                  <div
                    className="absolute inset-0 -translate-x-[150%] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] animate-shine"
                    style={{ animationDuration: "3s" }}
                  />
                  <span className="relative z-10">Read Forbes India Feature</span>
                  <ArrowUpRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Direct link footer note */}
                <span className="text-[11px] text-gray-500 mt-3.5 flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00BE5D] inline-block" />
                  Official article on forbesindia.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

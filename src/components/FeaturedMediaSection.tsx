"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Newspaper, ArrowRight } from "lucide-react";

interface MediaItem {
  id: string;
  name: string;
  logo: string;
  bgDark?: boolean;
  maxHeightClass?: string;
}

const mediaLogos: MediaItem[] = [
  {
    id: "sakal-money",
    name: "Sakal Money",
    logo: "/images/media/sakal-money.jpg",
    bgDark: true,
    maxHeightClass: "max-h-12 sm:max-h-14"
  },
  {
    id: "pudhari",
    name: "Dainik Pudhari",
    logo: "/images/media/pudhari.jpg",
    bgDark: false,
    maxHeightClass: "max-h-12 sm:max-h-14"
  },
  {
    id: "dainik-sandesh",
    name: "Dainik Sandesh",
    logo: "/images/media/dainik-sandesh.jpg",
    bgDark: false,
    maxHeightClass: "max-h-10 sm:max-h-12"
  },
  {
    id: "punya-nagari",
    name: "Punya Nagari",
    logo: "/images/media/punya-nagari.jpg",
    bgDark: false,
    maxHeightClass: "max-h-14 sm:max-h-16"
  },
  {
    id: "anand-nagari",
    name: "Dainik Anand Nagari",
    logo: "/images/media/anand-nagari.jpg",
    bgDark: false,
    maxHeightClass: "max-h-10 sm:max-h-12"
  }
];

export default function FeaturedMediaSection() {
  // Duplicate array 4 times for a smooth, seamless infinite auto-scroll loop
  const marqueeLogos = [...mediaLogos, ...mediaLogos, ...mediaLogos, ...mediaLogos];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#F4FAF6]/60 via-white to-white overflow-hidden border-t border-gray-100">
      {/* Subtle background decoration */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#00BE5D 1px, transparent 1px), linear-gradient(90deg, #00BE5D 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00BE5D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0F8EE] border border-[#00BE5D]/30 text-[#00743C] text-xs sm:text-sm font-bold tracking-wide uppercase shadow-xs mb-3">
            <Newspaper className="w-3.5 h-3.5 text-[#00BE5D]" />
            <span>Featured Media</span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#161D34] tracking-tight">
            Recognized by <span className="text-[#00BE5D]">Leading Media & Press</span>
          </h2>

          {/* Accent Line */}
          <div className="h-1.5 w-20 bg-gradient-to-r from-[#00BE5D] to-[#00BE5D]/40 mx-auto mt-3.5 rounded-full opacity-60"></div>
        </div>

        {/* Auto-scrolling Logos Track with Pause-on-Hover */}
        <div className="relative w-full overflow-hidden select-none py-3">
          {/* Left & Right Gradient Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Marquee Animation Container */}
          <div className="flex animate-marquee-media gap-4 sm:gap-6 items-center py-2">
            {marqueeLogos.map((item, index) => (
              <Link
                key={`${item.id}-${index}`}
                href="/publication"
                className="group relative flex-shrink-0 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-gray-100 hover:border-[#00BE5D]/50 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(0,190,93,0.15)] hover:scale-105 transition-all duration-300 flex items-center justify-center h-24 sm:h-28 w-48 sm:w-56 md:w-64 cursor-pointer overflow-hidden"
              >
                {/* Top Accent Line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00BE5D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div
                  className={`relative w-full h-full flex items-center justify-center ${
                    item.bgDark ? "bg-[#153265] rounded-xl p-2 shadow-inner" : ""
                  }`}
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={240}
                    height={80}
                    className={`w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
                      item.maxHeightClass || "max-h-12"
                    }`}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Below CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-12 text-center">
          <Link
            href="/publication"
            className="group relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-[#00BE5D] hover:bg-[#008C44] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-lg shadow-[#00BE5D]/30 hover:shadow-xl hover:shadow-[#00BE5D]/40 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            {/* Website Signature Shine Effect */}
            <div
              className="absolute inset-0 -translate-x-[150%] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] animate-shine"
              style={{ animationDuration: "3s" }}
            />
            <span className="relative z-10">Explore All Media Coverage</span>
            <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Auto-Scroll Marquee Animation CSS with Pause-On-Hover */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes marqueeMedia {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-marquee-media {
              display: flex;
              width: max-content;
              animation: marqueeMedia 25s linear infinite;
              will-change: transform;
            }
            .animate-marquee-media:hover {
              animation-play-state: paused;
            }
          `
        }}
      />
    </section>
  );
}

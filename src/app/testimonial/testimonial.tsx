"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import google from "../../../public/images/google.webp";
import Howwework from "../howwework/howwework";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});
  const [reviews, setReviews] = useState<any[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/testimonials");
        const data = await response.json();

        if (Array.isArray(data)) {
          const dynamicReviews = data.map((item: any) => ({
            name: item.name,
            date: item.date || "Recently",
            stars: item.rating || 5,
            content: item.testimonial || item.testimonialText || "",
            platform: item.platform || "Google"
          }));
          setReviews(dynamicReviews);
        } else {
          setReviews([]);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setReviews([]);
      }
    };
    fetchReviews();
  }, []);

  useEffect(() => {
    resetTimeout();
    if (reviews.length > 0) {
      timeoutRef.current = setTimeout(
        () => setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length),
        5000
      );
    }
    return () => resetTimeout();
  }, [currentIndex, reviews.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const toggleReadMore = (index: number) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const renderStars = (count: number, isActive: boolean) => (
    <div className="flex items-center mb-4 gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < count ? (isActive ? "text-white" : "text-yellow-400") : "opacity-30"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        </span>
      ))}
    </div>
  );

  if (reviews.length === 0) return null;

  return (
    <>
      <section className="py-24 px-4 bg-[#F9FAFB] overflow-hidden relative">
        {/* Background Arches decorative SVG like in image */}
        <div className="absolute top-10 right-10 opacity-20 pointer-events-none hidden lg:block">
           <svg width="200" height="300" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="199" height="299" rx="99.5" stroke="#00BE5D" strokeOpacity="0.5"/>
              <rect x="30.5" y="30.5" width="139" height="239" rx="69.5" stroke="#00BE5D" strokeOpacity="0.3"/>
              <rect x="60.5" y="60.5" width="79" height="179" rx="39.5" stroke="#00BE5D" strokeOpacity="0.2"/>
           </svg>
        </div>

        <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#283655] text-center tracking-tight">
            Google Reviews <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a3a1f] via-[#2d5a34] to-[#00BE5D]">That Speak for Themselves</span>
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-[#1a3a1f] to-[#00BE5D] mx-auto mt-6 rounded-full opacity-40 mb-16"></div>
          <div className="relative flex items-center justify-center">
            {/* Left Navigation */}
            <button 
              onClick={handlePrev}
              className="absolute left-[-10px] md:left-4 z-20 p-4 bg-white hover:bg-gray-50 rounded-full shadow-xl border border-gray-100 text-gray-500 transition-all active:scale-90"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Carousel Container */}
            <div className="w-full overflow-hidden flex justify-center py-10 relative px-4 md:px-20">
              <div className="flex transition-all duration-700 ease-in-out gap-8 md:gap-12 items-center justify-center">
                {/* 
                   Visible window logic for desktop:
                   Show 3 items centered around currentIndex
                */}
                {[-1, 0, 1].map((offset) => {
                  let index = (currentIndex + offset + reviews.length) % reviews.length;
                  const review = reviews[index];
                  const isActive = offset === 0;

                  return (
                    <div
                      key={`${index}-${offset}`}
                      className={`
                        transition-all duration-700 ease-in-out flex-shrink-0 
                        rounded-[2rem] p-7 shadow-xl relative
                        ${isActive 
                          ? "bg-gradient-to-br from-[#00C853] via-[#00A243] to-[#017A34] text-white w-[300px] md:w-[380px] scale-100 md:scale-105 z-10" 
                          : "bg-white text-gray-700 w-[260px] md:w-[320px] scale-90 md:scale-95 z-0 opacity-40 md:opacity-100 hidden md:flex"
                        }
                        flex flex-col min-h-[360px] border border-gray-50/50
                      `}
                    >
                      {/* Top Header: Date */}
                      <div className={`text-right text-sm font-medium mb-10 ${isActive ? "text-white/90" : "text-gray-400"}`}>
                        {review.date}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <p className={`leading-relaxed text-base font-normal ${isActive ? "text-white" : "text-gray-600"}`}>
                          {expandedReviews[index]
                            ? review.content
                            : review.content.length > 200 
                              ? `“${review.content.substring(0, 200)}...”` 
                              : `“${review.content}”`
                          }
                          {review.content.length > 200 && (
                             <button
                              className={`ml-2 font-semibold border-b border-current py-0 text-sm ${isActive ? "text-white/100" : "text-[#00BE5D]"}`}
                              onClick={() => toggleReadMore(index)}
                            >
                              {expandedReviews[index] ? "Read Less" : "Read More"}
                            </button>
                          )}
                        </p>
                      </div>

                      {/* Divider */}
                      <div className={`h-px w-full my-8 ${isActive ? "bg-white/20" : "bg-gray-100"}`} />

                      {/* Footer: Avatar and Name */}
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full overflow-hidden border-2 flex-shrink-0 ${isActive ? "border-white/30" : "border-gray-200"}`}>
                           <div className={`w-full h-full flex items-center justify-center font-bold text-sm ${isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`}>
                             {review.name.charAt(0)}
                           </div>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <h4 className={`font-bold text-base truncate ${isActive ? "text-white" : "text-[#111827]"}`}>
                            {review.name}
                          </h4>
                          <div className={`text-xs font-medium ${isActive ? "text-white/80" : "text-gray-400"}`}>
                             Happy Client
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Navigation */}
            <button 
              onClick={handleNext}
              className="absolute right-[-10px] md:right-4 z-20 p-4 bg-white hover:bg-gray-50 rounded-full shadow-xl border border-gray-100 text-gray-500 transition-all active:scale-90"
            >
              <ChevronRight size={20} />
            </button>
          </div>


          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 transition-all duration-300 rounded-full ${currentIndex === i ? "w-8 bg-[#00BE5D]" : "w-2 bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="mt-[-2rem]">
        <Howwework />
      </div>
    </>
  );
}


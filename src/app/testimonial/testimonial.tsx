"use client";

import { useState, useEffect } from "react";
import Howwework from "../howwework/howwework";

export default function WhatClientSay() {
  const testimonials = [
    
   
    // {
    //   content:
    //     "I had a great experience working with Clearclaim. They helped me recover my parents SBI Limited unclaimed shares and dividends from IEPF and convert them to DEMAT. Their team was very responsive and kept me updated throughout the process. I would definitely recommend their services to anyone looking to recover their shares.",
    //   author: "Mukund Shah",
    //   rating: 5,
    // },
    {
      content:
        "Great service, quick response they helped me to recover my father physical shares. Highly recommended.",
      author: "RAKESH G PATIL",
      rating: 5,
    },
   
    {
      content:
        "Mr.Srikant is a good person and guide us in a proper way with his Expertise in his business areas.  You may negotiate and go with them for your requirements.",
      author: "Rajagopalan V",
      rating: 5,
    },
    {
      content:
        "I'm based in Australia and had troubles dealing with insurance and EPF withdrawal remotely. Fortunately, I found clear claim that was the only service that offered to help me out. Their expertise in the processes involved helped me prepare the documentation upfront. I highly recommend them!",
      author: "Piyush Dhimate",
      rating: 5,
    },
    {
      content:
        "Thanks team of clear claim.... Nice service as well as nice guidline and thx for sorting and clearing my case ... And thanks help us...",
      author: "INDRANEEL TAMBE",
      rating: 5,
    },
    {
      content:
        "Very reliable, gives personal attention & above all, very reasonable charges.I have given them shares which are in IEPF for transferring into my demat account. At present after completing all documentation by them the matter is with IEPF for their clearance. My Best Wishes to Shrikant and his team.",
      author: "Vinayak Gaitonde",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3); // Default to 3 cards for desktop

  useEffect(() => {
    const updateVisibleCards = () => {
      // Set visible cards to 1 if screen width <= 768px (mobile)
      if (window.innerWidth <= 768) {
        setVisibleCards(1);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < visibleCards; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <>
      <div className="mt-20 p-8 bg-[#283655] max-w-6xl mx-auto overflow-hidden">
        <style jsx>{`
          @media (max-width: 768px) {
            .testimonial-card {
              height: auto; /* Adjust height dynamically */
              padding-bottom: 60px; 
              // width: 400px !important; 
            }
            .testimonial-content {
              position: static; /* Avoid overlapping */
              margin-bottom: 20px; /* Space between content and footer */
            }
            .testimonial-author {
              position: relative; /* Keep footer at the bottom */
              text-align: center; /* Center-align author and rating */
            }
          }
        `}</style>

        <div className="mb-12 text-center">
          <h2 className="md:text-3xl text-xl font-semibold text-white">
            Google Reviews That Speak for Themselves
          </h2>
        </div>
        <div className="flex items-center gap-6">
          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            className="p-3 bg-white rounded-full shadow-lg text-[#283655] hover:bg-gray-200"
          >
            &lt;
          </button>

          {/* Testimonials */}
          <div className="flex gap-6 flex-1 overflow-hidden">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card relative flex-1 w-[300px] h-[450px] p-6 rounded-lg bg-gray-100 text-center flex flex-col justify-between"
              >
                <div className="testimonial-content">
                  <p className="text-gray-600 text-md leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>
                <div className="testimonial-author">
                  <hr className="my-4 border-t border-gray-300" />
                  <h1 className="text-gray-800 mt-2 text-lg font-bold">
                    {testimonial.author}
                  </h1>
                  <p className="text-yellow-500 font-semibold">
                    {"★".repeat(Math.floor(testimonial.rating)) +
                      "☆".repeat(5 - Math.floor(testimonial.rating))}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="p-3 bg-white rounded-full shadow-lg text-[#283655] hover:bg-gray-200"
          >
            &gt;
          </button>
        </div>
      </div>
      <Howwework />
    </>
  );
}

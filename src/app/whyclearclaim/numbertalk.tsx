"use client";

import React, { useState, useEffect } from "react";
import WhatClientSay from "../../app/whyclearclaim/whatclientsay";

// Counter Component
const Counter: React.FC<{ target: number }> = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = Math.ceil(target / (duration / 50));

    const counterInterval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counterInterval);
      } else {
        setCount(start);
      }
    }, 50);

    return () => clearInterval(counterInterval);
  }, [target]);

  return <>{count.toLocaleString()}</>;
};

export default function NumberTalk() {
  const stats = [
    {
      id: 1,
      target: 400,
      label: "Companies Worked With",
      suffix: "+",
    },
    {
      id: 2,
      target: 1000,
      label: "Clients Served",
      suffix: "+",
    },
    {
      id: 3,
      target: 2000,
      label: "DEMAT & IEPF Claims Filed",
      suffix: "+",
    },
    {
      id: 4,
      target: 100,
      label: "Amount Recovered (₹)",
      suffix: " CR+",
    },
  ];

  return (
    <>
      <section className="py-24 px-4 bg-gradient-to-r from-[#1a3a1f] to-[#2d5a34] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Side: Growth Journey Card */}
            <div className="bg-white p-12 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,190,93,0.3)] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              <div className="relative z-10 text-center max-w-2xl mx-auto px-4">

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#283655] tracking-tight leading-tight">
                  Our{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a3a1f] via-[#2d5a34] to-[#00BE5D]">
                    Numbers Talk
                  </span>
                </h2>

                {/* Gradient Line */}
                <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-[#1a3a1f] to-[#00BE5D] mx-auto mt-5 rounded-full opacity-40"></div>

                {/* Subtext */}
                <p className="text-[#1a3a1f]/70 text-base sm:text-lg font-medium mt-6">
                  Reflecting our commitment to excellence
                </p>

              </div>

              {/* Stylized Wavy Graph */}
              <div className="absolute bottom-0 right-0 left-0 h-48 opacity-10 pointer-events-none">
                <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path
                    d="M-10 180C50 180 80 120 120 140C160 160 200 60 260 8C320 100 360 20 410 40"
                    stroke="#00BE5D"
                    strokeWidth="8"
                    strokeLinecap="round"
                    className="animate-dash"
                    style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                  />
                  <path
                    d="M-10 180C50 180 80 120 120 140C160 160 200 60 260 80C320 100 360 20 410 40"
                    stroke="#00BE5D"
                    strokeWidth="8"
                    strokeLinecap="round"
                    className="blur-xl opacity-40"
                  />
                </svg>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-24 h-24 bg-[#00BE5D]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
            </div>

            {/* Right Side: 2x2 Grid with Cross-Dividers */}
            <div className="relative p-4 md:p-8">
              {/* Divider Lines */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Horizontal Line */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#00BE5D]/30 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Vertical Line */}
                <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-[#00BE5D]/30 to-transparent"></div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-y-16 py-8">
                {stats.map((stat) => (
                  <div key={stat.id} className="flex flex-col items-center justify-center text-center px-4 group">
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                      <Counter target={stat.target} />
                      <span className="text-[#00BE5D] ml-0.5">{stat.suffix}</span>
                    </h3>
                    <p className="text-white/70 text-gray-600 lg:text-xl font-medium text-lg md:text-lg max-w-lg leading-relaxed">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        <style jsx>{`
          .animate-dash {
            animation: dash 3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          @keyframes dash {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}</style>
      </section>

      <WhatClientSay />
    </>
  );
}
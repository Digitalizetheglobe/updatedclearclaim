"use client";

import Image from "next/image";
import service from "../../../public/images/problem_solving.png";
import recovery from "../../../public/images/recovery_img.jpeg";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function OurServices() {
  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const },
  };

  return (
    <section className="bg-gradient-to-br from-[#E6F5ED] via-[#F4FAF7] to-[#FFFFFF] py-16 px-4 md:px-0 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-[#283655] tracking-tight">
          Our{" "}
          <span className="text-[#00BE5D]">
            Services
          </span>
        </h2>
        <div className="h-1.5 w-20 bg-gradient-to-r from-[#00BE5D] to-[#00BE5D]/40 mx-auto mt-6 rounded-full opacity-40 mb-10 md:mb-20"></div>

        <div className="flex flex-col space-y-12 md:space-y-16 w-full px-4 md:px-20 lg:px-24">
          {/* Service 1: IEPF Claim */}
          <motion.div
            {...slideInLeft}
            className="flex flex-col md:flex-row items-center bg-white rounded-[2rem] p-6 sm:p-8 md:p-6 border-2 border-[#00BE5D] md:border-r-0 relative group transition-all duration-500"
          >
            {/* Content Side */}
            <div className="w-full md:w-3/5 md:pr-10">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a3a1f] mb-6 md:mb-8">
                IEPF Claim
              </h3>

              {/* Layout wrapper to align text and button perfectly */}
              <div className="flex gap-3 sm:gap-4 mb-8 md:mb-10 items-start">
                {/* Left Column: Icon */}
                <div className="bg-[#00BE5D]/10 p-2 rounded-lg shrink-0">
                  <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-[#00BE5D]" />
                </div>

                {/* Right Column: Text and Button (Both vertically aligned) */}
                <div className="flex flex-col gap-5 sm:gap-6">
                  <p className="text-gray-600 lg:text-base font-medium text-sm sm:text-base md:text-base max-w-lg leading-relaxed">
                    We help investors recover unclaimed shares, dividends, and investments transferred to IEPF with
                    complete legal and documentation support.
                  </p>

                  {/* <Link href="/iepfclaim">
                    <button className="w-fit  text-white py-3 px-10 rounded-full font-bold transition-all duration-300 hover:bg-[#00a651] active:scale-95" style={{
                      background: "linear-gradient(rgb(61, 111, 240) 0%, rgb(36, 80, 196) 100%)",
                    }}>
                      Know More
                    </button>
                  </Link> */}
                  <Link href="/iepfclaim">
                    <button
                      className="group relative overflow-hidden w-fit text-white py-2.5 px-8 bg-[#00BE5D] hover:bg-[#00BE5D] rounded-full font-bold transition-all duration-300 active:scale-95 shadow-lg shadow-[#2450c4]/20"
                      // style={{
                      //   background: "linear-gradient(rgb(61, 111, 240) 0%, rgb(36, 80, 196) 100%)",
                      // }}
                    >
                      <div
                        className="absolute inset-0 -translate-x-[150%] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] animate-shine"
                        style={{ animationDuration: "3s" }}
                      />
                      <span className="relative z-10">Know More</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="w-full md:w-2/5 mt-8 md:mt-0 relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#00743C] blur-[80px] opacity-20 rounded-full"></div>
              <div className="relative h-56 sm:h-64 md:h-72 w-full overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem]">
                <Image
                  src={service}
                  alt="IEPF Claim"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </div>
          </motion.div>

          {/* Service 2: Recovery Of Shares */}
          <motion.div
            {...slideInRight}
            className="flex flex-col md:flex-row-reverse items-center bg-white rounded-[2rem] p-6 sm:p-8 md:p-6 border-2 border-[#00BE5D] md:border-l-0 relative group transition-all duration-500"
          >
            {/* Content Side */}
            <div className="w-full md:w-3/5 md:pl-10">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a3a1f] mb-6 md:mb-8">
                Recovery of Shares
              </h3>

              {/* Layout wrapper to align text and button perfectly */}
              <div className="flex gap-3 sm:gap-4 mb-8 md:mb-10 items-start">
                {/* Left Column: Icon */}
                <div className="bg-[#00BE5D]/10 p-2 rounded-lg shrink-0">
                  <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-[#00BE5D]" />
                </div>

                {/* Right Column: Text and Button (Both vertically aligned) */}
                <div className="flex flex-col gap-5 sm:gap-6">
                  <p className="text-gray-600 lg:text-base font-medium text-sm sm:text-base md:text-base max-w-lg leading-relaxed">
                    We help you recover old paper shares with expert assistance. We assist investors in recovering lost,
                    forgotten or unknown shares with complete documentation and legal support.
                  </p>

                  <Link href="/recovery-of-shares">
                    <button
                      className="group relative overflow-hidden w-fit text-white py-2.5 px-8  bg-[#00BE5D] hover:bg-[#00BE5D] rounded-full font-bold transition-all duration-300 active:scale-95 shadow-lg shadow-[#2450c4]/20"
                      // style={{
                      //   background: "linear-gradient(rgb(61, 111, 240) 0%, rgb(36, 80, 196) 100%)",
                      // }}
                    >
                      <div
                        className="absolute inset-0 -translate-x-[150%] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] animate-shine"
                        style={{ animationDuration: "3s" }}
                      />
                      <span className="relative z-10">Know More</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="w-full md:w-2/5 mt-8 md:mt-0 relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#00BE5D] blur-[80px] opacity-20 rounded-full"></div>
              <div className="relative h-56 sm:h-64 md:h-72 w-full overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem]">
                <Image
                  src={recovery}
                  alt="Recovery Of Shares"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Shine Animation Styles */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-150%) skewX(-20deg); }
          20% { transform: translateX(200%) skewX(-20deg); }
          100% { transform: translateX(200%) skewX(-20deg); }
        }
        .animate-shine {
          animation: shine 3s infinite;
        }
      `}</style>
    </section>
  );
}

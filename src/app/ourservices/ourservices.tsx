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
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <section className="bg-gradient-to-br from-[#E6F5ED] via-[#F4FAF7] to-[#FFFFFF] py-16 px-4 md:px-0 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#283655] tracking-tight leading-tight">
          Our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a3a1f] via-[#2d5a34] to-[#00BE5D]">
            Services
          </span>
        </h2>
        <div className="h-1.5 w-32 bg-gradient-to-r from-[#00BE5D] to-[#1a3a1f] mx-auto mt-6 rounded-full opacity-60 mb-20"></div>

        <div className="flex flex-col space-y-16 w-full px-4 md:px-20 lg:px-24">
          {/* Service 1: IEPF Claim */}
          <motion.div
            {...slideInLeft}
            className="flex flex-col md:flex-row items-center bg-white rounded-[2rem] p-6 md:p-6 border-2 border-r-0 border-[#00BE5D]  relative group transition-all duration-500"
          >
            {/* Content Side */}
            <div className="w-full md:w-3/5 md:pr-10">
              <h3 className="text-3xl md:text-4xl font-bold text-[#1a3a1f] mb-8">
                IEPF Claim
              </h3>
              <div className="flex gap-4 mb-10 items-start">
                <div className="bg-[#00BE5D]/10 p-2 rounded-lg">
                  <ShieldCheck className="w-6 h-6 text-[#00BE5D]" />
                </div>
                <p className="text-gray-600 lg:text-xl font-medium text-lg md:text-lg max-w-lg leading-relaxed">
                  We help you recover your shares from IEPF smoothly like we have
                  done it for hundreds of our other clients.
                </p>
              </div>
              <Link href="/iepfclaim">
                <button className="w-fit bg-[#00743C] text-white py-3.5 px-10 rounded-full font-bold transition-all duration-300 hover:bg-[#00a651]  active:scale-95">
                  Know More
                </button>
              </Link>
            </div>
            {/* Image Side */}
            <div className="w-full md:w-2/5 mt-10 md:mt-0 relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#00743C] blur-[80px] opacity-20 rounded-full"></div>
              <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-[2.5rem]">
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
            className="flex flex-col md:flex-row-reverse items-center bg-white rounded-[2rem] p-6 md:p-6 border-2 border-l-0 border-[#00BE5D] relative group transition-all duration-500"
          >
            {/* Content Side */}
            <div className="w-full md:w-3/5 md:pl-10">
              <h3 className="text-3xl md:text-4xl font-bold text-[#1a3a1f] mb-8">
                Recovery of Shares
              </h3>
              <div className="flex gap-4 mb-10 items-start">
                <div className="bg-[#00BE5D]/10 p-2 rounded-lg">
                  <ShieldCheck className="w-6 h-6 text-[#00BE5D]" />
                </div>
                <p className="text-gray-600 lg:text-xl font-medium text-lg md:text-lg max-w-lg leading-relaxed ">
                  We can help you to recover your old shares which you cannot access
                  due to various reasons.
                </p>
              </div>
              <Link href="/recovery-of-shares">
                <button className="w-fit bg-[#00743C] text-white py-3.5 px-10 rounded-full font-bold transition-all duration-300 hover:bg-[#00a651] active:scale-95">
                  Know More
                </button>
              </Link>
            </div>
            {/* Image Side */}
            <div className="w-full md:w-2/5 mt-10 md:mt-0 relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#00BE5D] blur-[80px] opacity-20 rounded-full"></div>
              <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-[2.5rem]">
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
    </section>
  );
}

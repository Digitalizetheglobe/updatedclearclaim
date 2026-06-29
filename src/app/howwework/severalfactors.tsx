"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import gif from "../../../public/gif/1.gif";
import gif1 from "../../../public/gif/2.gif";
import gif2 from "../../../public/gif/3.gif";
import gif3 from "../../../public/gif/4.gif";
import gif4 from "../../../public/gif/5.gif";
import RecentBlogs from "../blog/recentblogs";

export default function Severalfactors() {
  const factors = [
    {
      id: "01",
      title: "Delayed Transition",
      text: "Some individuals procrastinated and failed to take action when urged to transition to modern systems.",
      image: gif,
      color: "#00BE5D",
    },
    {
      id: "02",
      title: "Lost Documentation",
      text: "Others have forgotten about investments made years ago, misplacing related documents.",
      image: gif1,
      color: "#283655",
    },
    {
      id: "03",
      title: "Legal Heir Challenges",
      text: "In cases where holders passed away, legal heirs face significant challenges in claiming investments.",
      image: gif2,
      color: "#00BE5D",
    },
    {
      id: "04",
      title: "Unknown Assets",
      text: "Legal heirs may not even be aware of investments made by their forefathers, resulting in hidden assets.",
      image: gif3,
      color: "#283655",
    },
    {
      id: "05",
      title: "Complex Processes",
      text: "The claim processes are strict, time-consuming, and complex, leaving much money inaccessible.",
      image: gif4,
      color: "#00BE5D",
    },
  ];

  return (
    <>
      <section className="py-20 bg-[#f8faf9] relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
          <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 left-[-10%] w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              {/* <span className="text-[#00BE5D] font-black tracking-[0.3em] uppercase text-xs mb-3 block">
                The Challenges
              </span> */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#283655] tracking-tight leading-tight">
                Factors Contributing to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a3a1f] via-[#2d5a34] to-[#00BE5D]">Unclaimed Money</span>
              </h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-[#1a3a1f] to-[#00BE5D] mx-auto mt-6 rounded-full opacity-40 mb-16"></div>
            </motion.div>
          </div>

          {/* Factors Grid */}
          <div className="relative">
            {/* Center Line (Desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#00BE5D]/20 to-transparent -translate-x-1/2"></div>

            <div className="flex flex-col gap-12 lg:gap-4 relative">
              {factors.map((factor, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col lg:flex-row items-center w-full min-h-[180px] ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Content Half */}
                    <div className={`w-full lg:w-1/2 flex ${isEven ? "justify-end lg:pr-16" : "justify-start lg:pl-16"}`}>
                      <div className="group relative bg-white rounded-3xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-emerald-50 hover:shadow-[0_20px_50px_rgba(0,190,93,0.1)] transition-all duration-500 max-w-md w-full">
                        {/* Floating Number */}
                        <span className="absolute -top-6 -left-4 text-6xl font-black text-[#00BE5D]/5 group-hover:text-[#00BE5D]/10 transition-colors pointer-events-none">
                          {factor.id}
                        </span>

                        <div className="flex items-start gap-4">
                          {/* Small GIF Icon */}
                          <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-emerald-50 p-2 border border-emerald-100 group-hover:scale-110 transition-transform duration-500">
                            <Image
                              src={factor.image}
                              alt={factor.title}
                              className="w-full h-full object-contain"
                            />
                          </div>

                          <div>
                            <h3 className="text-lg font-bold text-[#283655] mb-2 group-hover:text-[#00BE5D] transition-colors uppercase tracking-tight">
                              {factor.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {factor.text}
                            </p>
                          </div>
                        </div>

                        {/* Decoration */}
                        <div className={`absolute top-1/2 -translate-y-1/2 hidden lg:block w-4 h-4 rounded-full bg-white border-4 border-[#00BE5D] z-20 ${
                          isEven ? "right-[-74px]" : "left-[-74px]"
                        }`}></div>
                      </div>
                    </div>

                    {/* Empty Half (Desktop) */}
                    <div className="hidden lg:block w-1/2"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <RecentBlogs />
    </>
  );
}

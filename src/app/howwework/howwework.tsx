"use client";

import { motion } from "framer-motion";
import { Settings } from "lucide-react";
import Image from "next/image";
import tick from "../../../public/images/tick.svg";
import Severalfactors from "./severalfactors";
import OurServices from "../ourservices/ourservices";

export default function Howwework() {
  const steps = [
    "Find your real worth of shares",
    "Know your exact claim type of shares",
    "Get exclusive consultation from experts",
    "Accurate documentation of your claim",
    "Get your shares in your DEMAT",
    "Superior Follow-up of your claim",
  ];

  return (
    <>

      {/* How it works */}
      <section className=" py-16 md:py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#283655] tracking-tight">
              How <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a3a1f] via-[#2d5a34] to-[#00BE5D]">It Works</span>
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-[#1a3a1f] to-[#00BE5D] mx-auto mt-6 rounded-full opacity-40"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-2 items-center">
            {/* Left Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >

              <div className="space-y-6">
                {steps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4 group cursor-default"
                  >
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                      <Image src={tick} alt="tick" className="w-full h-full" />
                      {/* <Image src={tick} alt="clearclaim" className="w-5 h-6 " /> */}
                    </div>
                    <span className="text-[#283655] text-lg lg:text-xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2">
                      {step}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Visual Side - Premium Orbital Arch */}
            <div className="relative flex items-center justify-center mt-12 lg:mt-0 px-0 mt-12">
              {/* The Arch Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] flex items-center justify-center translate-x-8 sm:translate-x-12"
              >
                {/* Orbital Background Image */}
                <div className="absolute inset-0 rounded-full overflow-hidden z-20">
                  <Image
                    src="/images/orbital-background.png"
                    alt="Orbital Background"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Inner White Circle */}
                <div className="absolute w-[40%] h-[40%] rounded-full flex flex-col items-center justify-center z-30 text-center p-4 border border-emerald-50 bg-white">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="mb-2"
                  >
                    <Settings className="w-8 h-8 sm:w-10 sm:h-10 text-[#283655]" />
                  </motion.div>
                  <p className="text-[#283655] font-bold text-base sm:text-xl leading-tight">
                    Artificial<br />Intelligence
                  </p>
                </div>

                {/* Floating Cards */}
                {[
                  { title: "Valuation engine", position: "-top-10 left-[10%] sm:-top-12 sm:left-[5%]", zIndex: "z-10" },
                  { title: "Claim process map", position: "top-[12%] -right-4 sm:top-[18%] sm:-right-12", zIndex: "z-30" },
                  // { title: "Ultra follow-up method", position: "top-[25%] -left-10 sm:-right- -translate-y-1/2", zIndex: "z-10" },
                  {
                    title: "Ultra follow-up method",
                    position: "top-[25%] -left-16 sm:-left-28 -translate-y-1/2",
                    zIndex: "z-10"
                  },
                  { title: "Documents engine", position: "bottom-[5%] -right-4 sm:bottom-[18%] sm:-right-12", zIndex: "z-30" },
                ].map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.2, duration: 0.6 }}
                    className={`absolute ${card.position} ${card.zIndex} bg-white shadow-[0_6px_20px_rgba(0,0,0,0.05)] 
                          rounded-xl p-2 sm:p-6 w-24 sm:w-36 text-center border border--50 
                          flex items-center justify-center min-h-[60px] sm:min-h-[80px]`}
                  >
                    <span className="text-[#283655] font-medium text-xs sm:text-sm leading-tight font-semibold">
                      {card.title}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Decorative radial blur for depth */}
              <div className="absolute -z-10 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>
      <OurServices />
      <Severalfactors />
    </>
  );
}
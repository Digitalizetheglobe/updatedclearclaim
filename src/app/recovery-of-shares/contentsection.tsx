"use client";

import Image from "next/image";
import closeup from "../../../public/images/close_up.png";
import tick from "../../../public/images/tick.svg";
import LandingTestimonial2 from "../landingtestimonial2/page";

export default function ContentSection() {
  return (
    <>
      <section className="relative py-6 md:py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* ✅ Left Image Section - Clean */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative flex items-center justify-center">

                {/* Circular Image */}
                <div className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[560px] lg:h-[560px] overflow-hidden">
                  <Image
                    src={closeup}
                    alt="Businessman analyzing unclaimed shares"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Right Content Section */}
            <div className="space-y-8">
              <div className="space-y-4">
                {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6F9EF] text-[#00BE5D] text-sm font-bold tracking-wide uppercase">
                  <span className="text-lg leading-none">+</span>
                  About Company
                </div> */}
                <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-[#283655] tracking-tight">
                  Why shares are <span className="text-[#00BE5D]">lost</span> or remain <span className="text-[#00BE5D]">unclaimed</span>?
                </h2>

                <p className="text-gray-500 text-sm sm:text-base md:text-base lg:text-base font-medium tracking-tight leading-snug">
                  Understanding the complexities behind unclaimed assets is the first step toward recovery and financial security for your future.
                </p>
              </div>

              {/* Grid of Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2">
                {[
                  {
                    title: "Historical Procrastination",
                    desc: "Individuals failed to transition when institutions urged digital shifts years ago."
                  },
                  {
                    title: "Lost Documentation",
                    desc: "Investments made decades ago are often forgotten, along with physical share certificates."
                  },
                  {
                    title: "Succession Challenges",
                    desc: "When original holders pass away, legal heirs struggle to navigate claim complexities."
                  },
                  {
                    title: "Hidden Generational Assets",
                    desc: "Heirs are frequently unaware of wealth built by forefathers in the paper era."
                  },
                  {
                    title: "Address & Records Mismatch",
                    desc: "Unupdated contact records lead to missed dividend communication and corporate actions."
                  },
                  {
                    title: "Automatic IEPF Transfers",
                    desc: "Shares move to IEPF when dividends remain unclaimed for 7 consecutive years."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8  flex items-center justify-center group-hover:scale-110 transition-transform ">
                      <Image src={tick} alt="tick" className="w-5 h-5 flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className=" text-[#111827] text-base  mb-1">{item.title}</h4>
                      {/* <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <LandingTestimonial2 />
    </>
  );
}
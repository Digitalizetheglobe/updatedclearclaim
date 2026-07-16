"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, FileSearch, MessageSquare, FileCheck, TrendingUp, Activity } from "lucide-react";
import tick from "../../../public/images/tick.svg";
import iepf from "../../../public/images/new_one.jpeg";
import iepf1 from "../../../public/images/new_two.png";
import iepf2 from "../../../public/images/new_three.png";
import LandingTestimonial from "../testimonial/landingtestimonial";

const claimsData = [
  {
    id: 1,
    title: "What is IEPFA and IEPF?",
    image: iepf,
    // date: "2023-11-10",
    summary: "IEPFA stands for ‘Investor Education and Protection Fund Authority’. The IEPFA Authority is entrusted with the responsibility of administration of the IEPF...",
    fullContent: (
      <ul className="space-y-4">
        <li className="flex gap-3 text-sm text-gray-600">
          <Image src={tick} alt="tick" className="w-4 h-4 mt-0.5 flex-shrink-0" />
          IEPFA stands for ‘Investor Education and Protection Fund Authority’. The IEPFA Authority is entrusted with the responsibility of administration of the Investor Education Protection Fund (IEPF), making refunds of shares, unclaimed dividends, matured deposits/debentures etc. to investors, promoting awareness among investors, and protecting the interests of the investors.
        </li>
        <li className="flex gap-3 text-sm text-gray-600">
          <Image src={tick} alt="tick" className="w-4 h-4 mt-0.5 flex-shrink-0" />
          IEPFA makes sure that investors unclaimed shares and unclaimed dividends are not misused and protect them by taking the custody of such unclaimed shares and dividends from companies to avoid any fraud activities. In other way it safeguards investors shares and funds.
        </li>
        <li className="flex gap-3 text-sm text-gray-600">
          <Image src={tick} alt="tick" className="w-4 h-4 mt-0.5 flex-shrink-0" />
          Apart from this IEPFA is responsible for promotion of investors’ education, awareness and protection activities.
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    title: "Why my shares are transferred to IEPF?",
    image: iepf2,
    // date: "2023-11-10",
    summary: "The Ministry of Corporate Affairs, Government of India have notified new rules under Section 124(6) in The Companies Act, 2013...",
    fullContent: (
      <ul className="space-y-4">
        <li className="text-sm text-gray-600">
          The Ministry of Corporate Affairs, Government of India have notified new rules under Section 124(6) in The Companies Act, 2013, The Investor Education and Protection Fund Authority [Accounting, Audit, Transfer and Refund] Rules, 2016 which vide Rule 6 has been implemented by the Ministry of Corporate Affairs, with effect from 13th October 2017.
        </li>
        <li className="text-sm text-gray-600">
          All shares in respect of which dividend has not been paid or claimed for seven consecutive years or more shall be transferred by the company in the name of Investor Education and Protection Fund along with a statement containing such details as may be prescribed: Provided that any claimant of shares transferred above shall be entitled to claim the transfer of shares from Investor Education and Protection Fund in accordance with such procedure and on submission of such documents as may be prescribed.
        </li>
      </ul>
    ),
  },
  {
    id: 3,
    title: "Is it possible to recover my shares and dividends from IEPF?",
    image: iepf1,
    // date: "2023-11-10",
    summary: "It is 100% possible to recover your shares and dividends transferred to IEPF through the IEPF-5 claim process...",
    fullContent: (
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          It is 100% possible to recover your shares and dividends transferred to IEPF. Along with the MCA rule of transmission of shares to IEPF, they have also given the process of claiming shares back from IEPF. By submitting IEPF-5 claim form on MCA website you can claim your shares from IEPF.
        </p>
        <p className="font-semibold text-gray-900 text-sm">IEPF claim is processed in 3 stages:</p>
        <ul className="space-y-3">
          <li className="flex gap-3 text-sm text-gray-600">
            <Image src={tick} alt="tick" className="w-4 h-4 mt-0.5 flex-shrink-0" />
            1. Filing IEPF-5 claim online on MCA portal and generate a SRN number. After that sending hard copy documents to the Nodal officer or RTA of the company.
          </li>
          <li className="flex gap-3 text-sm text-gray-600">
            <Image src={tick} alt="tick" className="w-4 h-4 mt-0.5 flex-shrink-0" />
            2. Company verifies your claim by scrutinizing documents you submitted and sends verification report to IEPFA through their internal portal.
          </li>
          <li className="flex gap-3 text-sm text-gray-600">
            <Image src={tick} alt="tick" className="w-4 h-4 mt-0.5 flex-shrink-0" />
            3. IEPFA approves or rejects your claim after their verification.
          </li>
        </ul>
      </div>
    ),
  },
];

export default function Content() {
  const [selectedClaim, setSelectedClaim] = useState<null | typeof claimsData[0]>(null);

  const themeColor = "#00BE5D"; // Brand green

  return (
    <>
      <div className="bg-[#f8fafc]/50 py-12 md:py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">

          <div className="text-center space-y-4 max-w-3xl mx-auto mb-10 md:mb-22">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-[#283655] text-center tracking-tight">
              Essential Information on <span className="text-[#00BE5D]">IEPF Claims</span>
            </h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-[#00BE5D] to-[#00BE5D]/40 mx-auto mt-6 rounded-full opacity-40 mb-4"></div>
          </div>

          <div className="flex flex-col relative w-full">
            {claimsData.map((item, index) => {
              // Predefined colors for the "tabs" to match the colorful reference image
              const tabColors = [
                "bg-[#00BE5D]", // Primary Green
                "bg-[#00994A]", // Slightly darker
                "bg-[#007A3B]", // Slightly lighter
                "bg-[#005C2C]"  // Deep green
              ];

              return (
                <div
                  key={item.id}
                  className="sticky w-full"
                  style={{
                    // Incremental offset creates the "tab" visibility effect (stepped stack)
                    top: `calc(100px + ${index * 64}px)`,
                    zIndex: index + 1,
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    onClick={() => setSelectedClaim(item)}
                    className="relative bg-white cursor-pointer group transition-all duration-500 rounded-t-[40px] rounded-b-[40px] border border-gray-100 shadow-[0_-15px_60px_-15px_rgba(0,0,0,0.1)] mb-12 overflow-hidden"
                  >
                    {/* Tab Header Area - This stays visible when stacked */}
                    <div className={`${tabColors[index]} px-8 py-4 flex items-center gap-6`}>
                      <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-lg lg:text-xl font-medium  tracking-widest">
                        {index + 1}/{claimsData.length}
                      </span>
                      <h4 className="text-white font-bold text-sm md:text-base truncate">
                        {item.title}
                      </h4>
                    </div>

                    <div className="p-6 md:p-8">
                      <div className={`flex flex-col gap-6 md:gap-10 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>

                        {/* Content Section */}
                        <div className="w-full md:w-3/5 space-y-4">
                          <h3 className="text-2xl lg:text-3xl font-extrabold text-[#283655] leading-tight group-hover:text-[#00BE5D] transition-colors duration-300">
                            {item.title}
                          </h3>

                          <p className="text-gray-600 text-base lg:text-base font-medium leading-relaxed">
                            {item.summary}
                          </p>

                          <div className="pt-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedClaim(item);
                              }}
                              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#00BE5D] font-bold rounded-full border-2 border-[#00BE5D] hover:bg-[#00BE5D] hover:text-white transition-all duration-300 group/btn shadow-sm hover:shadow-lg text-sm md:text-base"
                            >
                              Learn Detailed Insights
                              <span className="group-hover/btn:translate-x-1.5 transition-transform duration-300 text-lg">→</span>
                            </button>
                          </div>
                        </div>

                        {/* Image Section */}
                        <div className="w-full md:w-2/5">
                          <div className="relative h-48 sm:h-56 md:h-64 rounded-[24px] overflow-hidden shadow-xl group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] transition-all duration-500">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover object-top group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className={`absolute inset-0 ${tabColors[index]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                          </div>
                        </div>

                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
            {/* Extended Bottom Spacer to allow scrolling through the stack */}
            <div className="h-[50vh]" />
          </div>
        </div>
      </div>

      {/* ✅ Modal */}
      <AnimatePresence>
        {selectedClaim && (
          <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4 sm:p-6">

            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setSelectedClaim(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white max-w-4xl w-full rounded-xl sm:rounded-2xl relative overflow-hidden shadow-2xl mx-auto flex flex-col max-h-[85vh] sm:max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="px-5 py-4 sm:px-6 sm:py-5 border-b border-gray-100 flex justify-between items-center flex-shrink-0 bg-white z-10">
                <h2 className="text-lg sm:text-xl font-bold text-[#283655] pr-6">
                  {selectedClaim.title}
                </h2>
                <button
                  onClick={() => setSelectedClaim(null)}
                  className="p-2 bg-gray-50 hover:bg-red-50 hover:text-red-500 rounded-full transition-all duration-300 group flex-shrink-0"
                >
                  <X className="w-5 h-5 transition-transform group-hover:rotate-90" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-5 sm:p-6 overflow-y-auto flex-1">
                {selectedClaim.fullContent}
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:px-6 sm:py-4 border-t border-gray-100 flex-shrink-0 bg-gray-50/50">
                <button
                  onClick={() => setSelectedClaim(null)}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#00BE5D] text-white font-bold rounded-full hover:bg-[#009e4d] transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                >
                  Got it, thanks!
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <LandingTestimonial formApi="/api/iepf" />
    </>
  );
}

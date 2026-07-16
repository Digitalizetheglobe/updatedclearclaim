// "use client";

// import { motion } from "framer-motion";
// import { Search, FileSearch, MessageSquare, FileCheck, TrendingUp, Activity } from "lucide-react";
// import Severalfactors from "./severalfactors";
// import OurServices from "../ourservices/ourservices";

// export default function Howwework() {
//   const steps = [
//     { title: "Worth Valuation", text: "Find your real worth of shares", icon: Search },
//     { title: "Claim Analysis", text: "Know your exact claim type of shares", icon: FileSearch },
//     { title: "Expert Consultation", text: "Get exclusive consultation from experts", icon: MessageSquare },
//     { title: "Documentation", text: "Accurate documentation of your claim", icon: FileCheck },
//     { title: "Claim Follow-up", text: "Superior Follow-up RTA & Companies IPF & Demant Transfer", icon: Activity },


//     { title: "DEMAT Transfer", text: "Get your shares in your DEMAT", icon: TrendingUp },
//   ];

//   // Original CSS borders ko animate karne ke liye variants
//   const lineVariants = {
//     hidden: { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }, // Line chhupi rahegi
//     visible: (idx) => ({
//       clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Line smoothly draw hogi
//       transition: {
//         delay: idx * 0.15 + 0.4, // Card ke baad line animate hogi
//         duration: 0.6,
//         ease: "easeInOut",
//       },
//     }),
//   };

//   return (
//     <>
//       <section className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           {/* Heading */}
//           <div className="text-center mb-16 sm:mb-24 flex flex-col items-center">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#283655] tracking-tight">
//               How It <span className="text-[#00BE5D]">Works</span>
//             </h2>
//             <div className="h-1.5 w-32 bg-gradient-to-r from-[#00BE5D] to-[#00BE5D]/40 mx-auto mt-6 rounded-full opacity-40 "></div>

//             {/* <div className="h-1.5 w-24 bg-gradient-to-r from-[#00BE5D] to-[#00BE5D]/40 mt-4 rounded-full"></div> */}
//           </div>

//           <div className="relative w-full max-w-4xl mx-auto flex flex-col gap-6 md:gap-0">
//             {steps.map((step, idx) => {
//               const Icon = step.icon;
//               const isEven = idx % 2 === 0;

//               return (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
//                   whileInView={{ opacity: 1, x: 0, y: 0 }}
//                   viewport={{ once: true, margin: "-50px" }}
//                   transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
//                   className={`w-full md:w-[46%] relative z-10 ${
//                     isEven ? "md:self-start" : "md:self-end md:-mt-16"
//                   }`}
//                 >
//                   {/* Left-to-Right Connector (Aapki Original Design) */}
//                   {isEven && idx < steps.length - 1 && (
//                     <motion.div
//                       variants={lineVariants}
//                       custom={idx}
//                       initial="hidden"
//                       whileInView="visible"
//                       viewport={{ once: true }}
//                       className="hidden md:block absolute top-[45%] -right-[25%] w-[25%] h-[65%] border-t-2 border-r-2 border-dashed border-[#00BE5D]/60 rounded-tr-3xl z-[-1]"
//                     >
//                       <svg className="absolute -bottom-[10px] -right-[7px] w-4 h-4 text-[#00BE5D]/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M6 9l6 6 6-6" />
//                       </svg>
//                     </motion.div>
//                   )}

//                   {/* Right-to-Left Connector (Aapki Original Design) */}
//                   {!isEven && idx < steps.length - 1 && (
//                     <motion.div
//                       variants={lineVariants}
//                       custom={idx}
//                       initial="hidden"
//                       whileInView="visible"
//                       viewport={{ once: true }}
//                       className="hidden md:block absolute top-[45%] -left-[25%] w-[25%] h-[65%] border-t-2 border-l-2 border-dashed border-[#00BE5D]/60 rounded-tl-3xl z-[-1]"
//                     >
//                       <svg className="absolute -bottom-[10px] -left-[7px] w-4 h-4 text-[#00BE5D]/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M6 9l6 6 6-6" />
//                       </svg>
//                     </motion.div>
//                   )}

//                   {/* Card Content */}
//                   <div className={`p-4 sm:p-5 rounded-[2rem] flex gap-4 shadow-sm border ${
//                     isEven ? 'bg-[#f4fbf0] border-[#e6f4df]' : 'bg-[#f8fafc] border-slate-100'
//                   }`}>

//                     {/* Vertical Pill */}
//                     <div className={`flex-shrink-0 w-10 sm:w-12 h-32 sm:h-36 rounded-full flex items-center justify-center ${
//                       isEven ? 'bg-[#283655]' : 'bg-[#283655]'
//                     }`}>
//                       <span className="transform -rotate-90 text-white text-xs sm:text-sm font-medium whitespace-nowrap tracking-wider">
//                         Step {idx + 1}
//                       </span>
//                     </div>

//                     {/* Text Details */}
//                     <div className="flex-1 py-2 sm:py-3 pr-2">
//                       <div className="flex items-center gap-3 mb-3">
//                         <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-sm ${
//                           isEven ? 'bg-[#e5f5da]' : 'bg-white'
//                         }`}>
//                           <Icon className={`w-4 h-4 ${isEven ? 'text-[#0f4c3a]' : 'text-[#1e293b]'}`} />
//                         </div>
//                         <h3 className={`font-semibold text-base sm:text-lg ${isEven ? 'text-[#0f4c3a]' : 'text-slate-800'}`}>
//                           {idx + 1} {step.title}
//                         </h3>
//                       </div>
//                       <p className="text-slate-600 text-base sm:text-base leading-relaxed font-medium">
//                         {step.text}
//                       </p>
//                     </div>

//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       <OurServices />
//       <Severalfactors />
//     </>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { Search, FileSearch, MessageSquare, FileCheck, TrendingUp, Activity } from "lucide-react";
import Severalfactors from "./severalfactors";
import OurServices from "../ourservices/ourservices";

export default function Howwework() {
  const steps = [
    { title: "Worth Valuation", text: "Find your real worth of shares", icon: Search },
    { title: "Claim Analysis", text: "Know your exact claim type of shares", icon: FileSearch },
    { title: "Expert Consultation", text: "Get exclusive consultation from experts", icon: MessageSquare },
    { title: "Documentation", text: "Accurate documentation of your claim", icon: FileCheck },
    { title: "Claim Follow-up", text: "Superior Follow-up RTA & Companies IPF & Demant Transfer", icon: Activity },
    { title: "DEMAT Transfer", text: "Get your shares in your DEMAT", icon: TrendingUp },
  ];

  // Original CSS borders ko animate karne ke liye variants
  const lineVariants: any = {
    hidden: { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
    visible: (idx: number) => ({
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        delay: idx * 0.15 + 0.4,
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <>
      {/* 🟢 CUSTOM CSS FOR SHINE EFFECT (100% Working) */}
      <style jsx>{`
        @keyframes custom-shine {
          0% { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(150%) skewX(-20deg); }
        }
        .animate-custom-shine {
          animation: custom-shine 3s infinite ease-in-out;
        }
      `}</style>

      <section className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Heading */}
          <div className="text-center mb-16 sm:mb-24 flex flex-col items-center">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-[#283655] tracking-tight">
              How It <span className="text-[#00BE5D]">Works</span>
            </h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-[#00BE5D] to-[#00BE5D]/40 mx-auto mt-6 rounded-full opacity-40 "></div>
          </div>

          <div className="relative w-full max-w-4xl mx-auto flex flex-col gap-6 md:gap-0">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
                  className={`w-full md:w-[46%] relative z-10 ${
                    isEven ? "md:self-start" : "md:self-end md:-mt-16"
                  }`}
                >
                  {/* Left-to-Right Connector */}
                  {isEven && idx < steps.length - 1 && (
                    <motion.div
                      variants={lineVariants}
                      custom={idx}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="hidden md:block absolute top-[45%] -right-[25%] w-[25%] h-[65%] border-t-2 border-r-2 border-dashed border-[#00BE5D]/60 rounded-tr-3xl z-[-1]"
                    >
                      <svg className="absolute -bottom-[10px] -right-[7px] w-4 h-4 text-[#00BE5D]/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </motion.div>
                  )}

                  {/* Right-to-Left Connector */}
                  {!isEven && idx < steps.length - 1 && (
                    <motion.div
                      variants={lineVariants}
                      custom={idx}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="hidden md:block absolute top-[45%] -left-[25%] w-[25%] h-[65%] border-t-2 border-l-2 border-dashed border-[#00BE5D]/60 rounded-tl-3xl z-[-1]"
                    >
                      <svg className="absolute -bottom-[10px] -left-[7px] w-4 h-4 text-[#00BE5D]/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </motion.div>
                  )}

                  {/* Card Content - SHINE EFFECT ADDED HERE */}
                  <div className={`group relative overflow-hidden p-4 sm:p-5 rounded-[2rem] flex gap-4 shadow-sm border ${
                    isEven ? 'bg-[#f4fbf0] border-[#e6f4df]' : 'bg-[#f8fafc] border-slate-100'
                  }`}>

                    {/* 🟢 Shine Effect Div - Zyada bright banaya hai */}
                    <div 
                      className="absolute top-0 left-0 h-full w-[150%] bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-20deg] opacity-70 animate-custom-shine z-0 pointer-events-none" 
                    />

                    {/* Vertical Pill */}
                    <div className={`relative z-10 flex-shrink-0 w-10 sm:w-12 h-32 sm:h-36 rounded-full flex items-center justify-center ${
                      isEven ? 'bg-[#283655]' : 'bg-[#283655]'
                    }`}>
                      <span className="transform -rotate-90 text-white text-xs sm:text-sm font-medium whitespace-nowrap tracking-wider">
                        Step {idx + 1}
                      </span>
                    </div>

                    {/* Text Details */}
                    <div className="relative z-10 flex-1 py-2 sm:py-3 pr-2">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-sm ${
                          isEven ? 'bg-[#e5f5da]' : 'bg-white'
                        }`}>
                          <Icon className={`w-4 h-4 ${isEven ? 'text-[#0f4c3a]' : 'text-[#1e293b]'}`} />
                        </div>
                        <h3 className={`font-semibold text-base sm:text-lg ${isEven ? 'text-[#0f4c3a]' : 'text-slate-800'}`}>
                          {idx + 1} {step.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 text-base sm:text-base leading-relaxed font-medium">
                        {step.text}
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <OurServices />
      <Severalfactors />
    </>
  );
}
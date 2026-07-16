// "use client"; // Ensures this is a client component

// import Link from "next/link";
// import Image from "next/image";
// import gif from "../../public/images/old_man.png"; 
// import shield from "../../public/images/shield.png"; // Shield image to be placed behind
// import WhyClearClaim from "../app/whyclearclaim/whyclearclaim";
// import ScrollButton from "@/components/scrollbutton";
// import { Phone } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";


// const words = [
//   "Old shares recovery",
//   "Lost shares recovery",
//   "IEPF claim",
//   "Transmission of shares",
//   "NRI claims"
// ];

// const IndiaFlag = () => (
//   <span className="inline-flex items-center ml-1.5 align-middle">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 900 600"
//       className="w-6 h-4 rounded-sm shadow-sm border border-gray-200"
//     >
//       <rect width="900" height="200" fill="#FF9933" />
//       <rect y="200" width="900" height="200" fill="#FFFFFF" />
//       <rect y="400" width="900" height="200" fill="#138808" />
//       <g transform="translate(450,300)">
//         <circle r="92" fill="none" stroke="#000080" strokeWidth="6" />
//         <circle r="16" fill="#000080" />
//         {[...Array(24)].map((_, i) => (
//           <line
//             key={i}
//             x1="0"
//             y1="0"
//             x2="0"
//             y2="-92"
//             stroke="#000080"
//             strokeWidth="4"
//             transform={`rotate(${(i * 360) / 24})`}
//           />
//         ))}
//       </g>
//     </svg>
//   </span>
// );

// const AnimatedWord = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % words.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <span className="inline-flex items-center min-h-[1.2em]">
//       <AnimatePresence mode="wait">
//         <motion.span
//           key={index}
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -15 }}
//           transition={{ duration: 0.35, ease: "easeOut" }}
//           className="whitespace-normal md:whitespace-nowrap"
//         >
//           {words[index]}
//         </motion.span>
//       </AnimatePresence>
//     </span>
//   );
// };

// const TypingText = ({ text, delayOffset = 0 }: { text: string; delayOffset?: number }) => {
//   return (
//     <>
//       {text.split("").map((char, index) => (
//         <motion.span
//           key={index}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{
//             delay: delayOffset + index * 0.04,
//             duration: 0.05,
//           }}
//         >
//           {char}
//         </motion.span>
//       ))}
//     </>
//   );
// };

// export default function Home() {

//   // Function to handle phone call
//   const handleCall = () => {
//     window.location.href = "tel:+919156701900"; // This ensures the phone dialer always opens
//   };

//   return (
//     <main className="relative min-h-screen">
//       <ScrollButton />

//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-[#E0F8EE] via-[#F2FBF7] to-[#FFFFFF] pt-12 pb-20 ">
//         {/* Background elements (Shield shape placeholder) - Removed to use the real image */}

//         <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

//             {/* Left Content Column */}
//             <div className="flex flex-col items-start space-y-6">
//               {/* Badge */}
//               <motion.div 
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//                 className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-[#00BE5D]/20 shadow-sm"
//               >
//                 <span className="text-[#00BE5D] text-sm font-semibold tracking-wide uppercase">Start your claim journey now! </span>
//               </motion.div>

//               {/* Title Content */}
//               <motion.div 
//                 initial="hidden"
//                 animate="visible"
//                 variants={{
//                   hidden: { opacity: 0 },
//                   visible: {
//                     opacity: 1,
//                     transition: {
//                       staggerChildren: 0.15,
//                       delayChildren: 0.2
//                     }
//                   }
//                 }}
//                 className="space-y-4"
//               >
//                 <motion.h1 
//                   className="text-4xl md:text-5xl font-extrabold text-[#1a3a1f] leading-tight"
//                 >
//                   <TypingText text="India's No. 1 platform for" delayOffset={0.2} /> <br className="hidden md:block" />
//                   <span className="text-[#00BE5D] relative inline-flex flex-col mt-2">
//                     <span className="relative">
//                       <AnimatedWord />
//                       {/* SVG brush underline */}
//                       <svg className="absolute -bottom-2 left-0 w-full h-2 md:h-3" viewBox="0 0 100 10" preserveAspectRatio="none" fill="none">
//                         <motion.path 
//                           initial={{ pathLength: 0, opacity: 0 }}
//                           animate={{ pathLength: 1, opacity: 1 }}
//                           transition={{ 
//                             delay: 1.5, 
//                             duration: 1.2, 
//                             ease: "easeInOut" 
//                           }}
//                           d="M1 9C10.5 8 20.5 7.5 30 7M30.5 7.5C45.5 6.5 60.5 6 75.5 5.5M76 6C84 5.5 91.5 5.2 99 5" 
//                           stroke="#00BE5D" 
//                           strokeWidth="2.5" 
//                           strokeLinecap="round" 
//                         />
//                       </svg>
//                     </span>
//                   </span>
//                 </motion.h1>

//                 <motion.p 
//                   variants={{
//                     hidden: { opacity: 0, y: 15 },
//                     visible: { 
//                       opacity: 1, 
//                       y: 0,
//                       transition: { duration: 0.8, ease: "easeOut" }
//                     }
//                   }}
//                   className="text-gray-600 lg:text-xl font-medium text-lg md:text-lg max-w-lg leading-relaxed pt-2 flex items-center flex-wrap"
//                 >
//                   We specialize in protecting investor's wealth in India <IndiaFlag />.
//                 </motion.p>

//                 {/* Action Button */}
//                 <motion.div 
//                   variants={{
//                     hidden: { opacity: 0, scale: 0.9 },
//                     visible: { 
//                       opacity: 1, 
//                       scale: 1,
//                       transition: { duration: 0.5, ease: "backOut" }
//                     }
//                   }}
//                   className="pt-4"
//                 >
//                   <button
//                     onClick={handleCall}
//                     className="group relative flex items-center gap-3 bg-[#00743C] hover:bg-[#00BE5D] text-white px-6 py-2 rounded-full font-bold transition-all duration-300 shadow-xl shadow-[#00743C]/20 hover:scale-105"
//                   >
//                     <div className="p-1 rounded-full group-hover:rotate-12 transition-transform duration-300">
//                       <Phone size={16} className="fill-current" />
//                     </div>
//                     <span className="text-lg">Call Now</span>
//                   </button>
//                 </motion.div>
//               </motion.div>
//             </div>

//             {/* Right Image column */}
//             <div className="relative flex justify-center items-center">
//               <div className="relative flex items-center justify-center">

//                 {/* Shield Background Image */}
//                 <div className="absolute inset-0 flex items-center justify-center z-10 opacity-30">
//                   <Image
//                     src={shield}
//                     alt="Security Shield"
//                     className="object-contain w-[120%] h-[120%]"
//                     priority
//                   />
//                 </div>

//                 {/* Main Hero Image */}
//                 <motion.div 
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ 
//                     y: [0, -15, 0],
//                     opacity: 1
//                   }}
//                   transition={{
//                     y: {
//                       duration: 4,
//                       repeat: Infinity,
//                       ease: "easeInOut"
//                     },
//                     opacity: {
//                       duration: 1,
//                       ease: "easeOut"
//                     }
//                   }}
//                   className="relative z-20 flex items-center justify-center"
//                 >
//                   <Image
//                     src={gif}
//                     alt="Wealth Protection Specialist"
//                     className="object-contain"
//                     priority
//                     unoptimized
//                     width={500}
//                     height={450}
//                   />
//                 </motion.div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Sticky Vertical Call Now Button */}
//       <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">

//         {/* Call Button */}
//         <button
//           onClick={handleCall}
//           className="bg-[#2F855A] text-white px-4 py-6 rounded-l-full flex flex-col items-center justify-center gap-2 shadow-lg hover:bg-[#38A169] transition-all"
//         >
//           <Phone size={20} />
//           <span className="text-xs font-semibold">Call</span>
//         </button>

//       </div>

//       <WhyClearClaim />

//       <style jsx>{`
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(-50%) translateY(-5px); }
//           50% { transform: translateY(-50%) translateY(5px); }
//         }
//         @keyframes pulse-slow {
//           0%, 100% { transform: scale(1); opacity: 1; }
//           50% { transform: scale(1.05); opacity: 0.9; }
//         }
//         .animate-bounce-slow {
//           animation: bounce-slow 4s ease-in-out infinite;
//         }
//         .animate-pulse-slow {
//           animation: pulse-slow 3s ease-in-out infinite;
//         }
//         @keyframes shake {
//           0%, 100% { transform: rotate(90deg); }
//           10%, 30%, 50%, 70%, 90% { transform: rotate(85deg); }
//           20%, 40%, 60%, 80% { transform: rotate(95deg); }
//         }
//         .group:hover .group-hover\:animate-shake {
//           animation: shake 0.5s ease-in-out infinite;
//         }
//       `}</style>
//     </main>
//   );
// }

"use client"; // Ensures this is a client component

import Link from "next/link";
import Image from "next/image";
import gif from "../../public/images/old_man.png";
import shield from "../../public/images/shield.png"; // Shield image to be placed behind
import WhyClearClaim from "../app/whyclearclaim/whyclearclaim";
import ScrollButton from "@/components/scrollbutton";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";


const words = [
  "Old shares recovery",
  "Lost shares recovery",
  "IEPF claim",
  "Transmission of shares",
  "NRI claims"
];

const IndiaFlag = () => (
  <span className="inline-flex items-center ml-1.5 align-middle">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 600"
      className="w-6 h-4 rounded-sm shadow-sm border border-gray-200"
    >
      <rect width="900" height="200" fill="#FF9933" />
      <rect y="200" width="900" height="200" fill="#FFFFFF" />
      <rect y="400" width="900" height="200" fill="#138808" />
      <g transform="translate(450,300)">
        <circle r="92" fill="none" stroke="#000080" strokeWidth="6" />
        <circle r="16" fill="#000080" />
        {[...Array(24)].map((_, i) => (
          <line
            key={i}
            x1="0"
            y1="0"
            x2="0"
            y2="-92"
            stroke="#000080"
            strokeWidth="4"
            transform={`rotate(${(i * 360) / 24})`}
          />
        ))}
      </g>
    </svg>
  </span>
);

const AnimatedWord = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    // inline-flex lagaya hai aur text left-aligned hai taaki space clean dikhe
    <span className="inline-flex items-center justify-start text-left min-h-[1.2em] w-full sm:w-auto min-w-[240px] sm:min-w-[280px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="whitespace-normal sm:whitespace-nowrap leading-tight"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const TypingText = ({ text, delayOffset = 0 }: { text: string; delayOffset?: number }) => {
  return (
    <>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: delayOffset + index * 0.04,
            duration: 0.05,
          }}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
};

export default function Home() {

  // Function to handle phone call
  const handleCall = () => {
    window.location.href = "tel:+919156701900"; // This ensures the phone dialer always opens
  };

  return (
    <main className="relative min-h-screen">
      <ScrollButton />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#E0F8EE] via-[#F2FBF7] to-[#FFFFFF] pt-12 pb-20 ">
        {/* Background elements (Shield shape placeholder) - Removed to use the real image */}

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left Content Column */}
            <div className="flex flex-col items-start space-y-6">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-[#00BE5D]/20 shadow-sm"
              >
                <span className="text-[#00BE5D] text-sm font-semibold tracking-wide uppercase">Start your claim journey now! </span>
              </motion.div>

              {/* Title Content */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: 0.2
                    }
                  }
                }}
                className="space-y-4 w-full"
              >
                {/* 
                  Yahan humne flewwrapping use ki hai taaki "for" ke aage hi direct words start ho jayein.
                  Bade screens par line break na ho isliye inline-flex / flex-wrap classes add kari hain.
                */}
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#161D34] leading-tight flex flex-col md:flex-row md:flex-wrap items-start md:items-center gap-x-3 gap-y-1 md:gap-y-2"
                >
                  <span className="whitespace-normal md:whitespace-nowrap">
                    <TypingText text="India's No. 1 platform for" delayOffset={0.2} />
                  </span>

                  <span className="text-[#00BE5D] relative inline-flex flex-col justify-center mt-1 md:mt-0 w-full sm:w-auto">
                    <span className="relative inline-block w-full sm:w-auto">
                      <AnimatedWord />
                      {/* SVG brush underline */}
                      <svg className="absolute -bottom-2 left-0 w-full h-2 md:h-3" viewBox="0 0 100 10" preserveAspectRatio="none" fill="none">
                        <motion.path
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{
                            delay: 1.5,
                            duration: 1.2,
                            ease: "easeInOut"
                          }}
                          d="M1 9C10.5 8 20.5 7.5 30 7M30.5 7.5C45.5 6.5 60.5 6 75.5 5.5M76 6C84 5.5 91.5 5.2 99 5"
                          stroke="#00BE5D"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </span>
                </motion.h1>

                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, ease: "easeOut" }
                    }
                  }}
                  className="text-gray-600 font-medium text-base sm:text-base max-w-lg leading-relaxed pt-2 flex items-center flex-wrap"
                >
                  We specialize in protecting investor's wealth in India <IndiaFlag />.
                </motion.p>

                {/* Action Button */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.5, ease: "backOut" }
                    }
                  }}
                  className="pt-4"
                >
                  {/* <button
                    onClick={handleCall}
                    className="group relative flex items-center gap-3 bg-[#00743C] hover:bg-[#00BE5D] text-white px-6 py-2 rounded-full font-bold transition-all duration-300 shadow-xl shadow-[#00743C]/20 hover:scale-105"
                  >
                    <div className="p-1 rounded-full group-hover:rotate-12 transition-transform duration-300">
                      <Phone size={16} className="fill-current" />
                    </div>
                    <span className="text-lg">Call Now</span>
                  </button> */}
                  <button
                    onClick={handleCall}
                    className="group relative overflow-hidden bg-[#00BE5D] hover:bg-[#00BE5D] flex items-center gap-3 text-white px-6 py-2 rounded-full font-bold transition-all duration-300 shadow-xl shadow-[#2450c4]/20 hover:scale-105"
                   
                  >
                    {/* Shine Effect - Updated with animationDuration */}
                    <div
                      className="absolute inset-0 -translate-x-[150%] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] animate-shine"
                      style={{ animationDuration: "3s" }} /* <--- Yahan 3s ya 4s daal kar speed check karein */
                    />

                    <div className="relative z-10 p-1 rounded-full group-hover:rotate-12 transition-transform duration-300">
                      <Phone size={16} className="" />
                    </div>
                    <span className="relative z-10 text-lg">Call Now</span>
                  </button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Image column */}
            <div className="relative flex justify-center items-center">
              <div className="relative flex items-center justify-center">

                {/* Shield Background Image */}
                <div className="absolute inset-0 flex items-center justify-center z-10 opacity-30">
                  <Image
                    src={shield}
                    alt="Security Shield"
                    className="object-contain w-[120%] h-[120%]"
                    priority
                  />
                </div>

                {/* Main Hero Image */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: 1
                  }}
                  transition={{
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    opacity: {
                      duration: 1,
                      ease: "easeOut"
                    }
                  }}
                  className="relative z-20 flex items-center justify-center"
                >
                  <Image
                    src={gif}
                    alt="Wealth Protection Specialist"
                    className="object-contain"
                    style={{
                      WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                      maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)"
                    }}
                    priority
                    unoptimized
                    width={500}
                    height={450}
                  />
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Vertical Call Now Button */}
      {/* <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">

     
        <button
          onClick={handleCall}
          className="bg-[#2F855A] text-white px-4 py-6 rounded-l-full flex flex-col items-center justify-center gap-2 shadow-lg hover:bg-[#38A169] transition-all"
        >
          <Phone size={20} />
          <span className="text-xs font-semibold">Call</span>
        </button>

      </div> */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">

        {/* Call Button */}
        <button
          onClick={handleCall}
          className="group relative overflow-hidden text-white bg-[#00BE5D] hover:bg-[#00BE5D] px-3 py-4 sm:px-4 sm:py-6 rounded-l-full flex flex-col items-center justify-center gap-2 shadow-lg transition-all"
          // style={{
          //   background: "linear-gradient(rgb(61, 111, 240) 0%, rgb(36, 80, 196) 100%)",
          // }}
        >
          {/* Shine Effect */}
          <div
            className="absolute inset-0 -translate-x-[150%] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] animate-shine"
            style={{ animationDuration: "3s" }}
          />

          {/* Content */}
          <Phone size={20} className="relative z-10" />
          <span className="relative z-10 text-xs font-semibold">Call</span>
        </button>

      </div>

      <WhyClearClaim />

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-50%) translateY(-5px); }
          50% { transform: translateY(-50%) translateY(5px); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        @keyframes shake {
          0%, 100% { transform: rotate(90deg); }
          10%, 30%, 50%, 70%, 90% { transform: rotate(85deg); }
          20%, 40%, 60%, 80% { transform: rotate(95deg); }
        }
        .group:hover .group-hover\:animate-shake {
          animation: shake 0.5s ease-in-out infinite;
        }
        @keyframes shine {
          0% { transform: translateX(-150%) skewX(-20deg); }
          20% { transform: translateX(200%) skewX(-20deg); }
          100% { transform: translateX(200%) skewX(-20deg); }
        }
        .animate-shine {
          animation: shine 3s infinite;
        }
      `}</style>
    </main>
  );
}
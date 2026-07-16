// "use client";

// import Image from "next/image";

// const logos = [
//   { src: "/logos/20241118105709_Muthoot_Finance_Logo.svg.png", alt: "Muthoot Finance" },
//   { src: "/logos/20241118110503_Infosys_logo.png", alt: "Infosys" },
//   { src: "/logos/20241118105828_idbi.png", alt: "IDBI Bank" },
//   { src: "/logos/20241118105858_ICICI_Bank_Logo.svg.png", alt: "ICICI Bank" },
//   { src: "/logos/20241118110126_gaill.png", alt: "GAIL" },
//   { src: "/logos/20241118110639_HCL-Technologies.png", alt: "HCL Technologies" },
//   { src: "/logos/20241118110929_reliance-industries-logo.png", alt: "Reliance Industries" },
//   { src: "/logos/20241118111008_ruchi-soya.png", alt: "Ruchi Soya" },
//   { src: "/logos/20241118111238_tcs.png", alt: "TCS" },
//   { src: "/logos/20241118111411_adani-power.png", alt: "Adani Power" }
// ];

// export default function LogoSection() {
//   // Triple the list to ensure it spans the screen and scrolls infinitely without any gaps
//   const marqueeLogos = [...logos, ...logos, ...logos];

//   return (
//     <section className="bg-white border-y border-gray-100 py-8 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
//         {/* Left text section */}
//         <div className="w-full md:w-auto flex-shrink-0 text-left">
//           <h2 className="text-xl md:text-2xl font-black text-[#1a3a1f] leading-tight tracking-tight">
//             Expertise In IEPF <br />
//             Share Recovery
//           </h2>
//         </div>

//         {/* Right scrolling marquee section */}
//         <div className="relative flex-1 overflow-hidden w-full select-none">
//           {/* Fades on edges for premium visual appearance */}
//           <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
//           <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

//           <div className="flex animate-marquee-container gap-12 items-center py-2">
//             {marqueeLogos.map((logo, index) => (
//               <div 
//                 key={index} 
//                 className="flex-shrink-0 flex items-center justify-center h-10 md:h-12 w-28 md:w-36 grayscale opacity-70"
//               >
//                 <img
//                   src={logo.src}
//                   alt={logo.alt}
//                   className="max-h-full max-w-full object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>

//       <style dangerouslySetInnerHTML={{__html: `
//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-33.33%); }
//         }
//         .animate-marquee-container {
//           display: flex;
//           width: max-content;
//           animation: marquee 35s linear infinite;
//         }
//         .animate-marquee-container:hover {
//           animation-play-state: paused;
//         }
//       `}} />
//     </section>
//   );
// }
"use client";

import Image from "next/image";

const logos = [
  { src: "/logos/20241118105709_Muthoot_Finance_Logo.svg.png", alt: "Muthoot Finance" },
  { src: "/logos/20241118110503_Infosys_logo.png", alt: "Infosys" },
  { src: "/logos/20241118105828_idbi.png", alt: "IDBI Bank" },
  { src: "/logos/20241118105858_ICICI_Bank_Logo.svg.png", alt: "ICICI Bank" },
  { src: "/logos/20241118110126_gaill.png", alt: "GAIL" },
  { src: "/logos/20241118110639_HCL-Technologies.png", alt: "HCL Technologies" },
  { src: "/logos/20241118110929_reliance-industries-logo.png", alt: "Reliance Industries" },
  { src: "/logos/20241118111008_ruchi-soya.png", alt: "Ruchi Soya" },
  { src: "/logos/20241118111238_tcs.png", alt: "TCS" },
  { src: "/logos/20241118111411_adani-power.png", alt: "Adani Power" }
];

export default function LogoSection() {
  // Triple the list to ensure it spans the screen and scrolls infinitely without any gaps
  const marqueeLogos = [...logos, ...logos, ...logos];

  return (
    <section className="bg-white border-y border-gray-100 py-6 sm:py-8 lg:py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
        
        {/* Left text section */}
        <div className="w-full md:w-auto flex-shrink-0 text-center md:text-left mb-2 md:mb-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#161D34] leading-tight tracking-tight">
            Expertise In IEPF <br className="hidden md:block" />
            <span className="md:hidden"> </span>Share Recovery
          </h2>
        </div>

        {/* Right scrolling marquee section */}
        <div className="relative flex-1 overflow-hidden w-full select-none">
          {/* Fades on edges for premium visual appearance */}
          <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 md:w-12 lg:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-8 md:w-12 lg:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee-container gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center py-2">
            {marqueeLogos.map((logo, index) => (
              /* REMOVED 'grayscale' AND 'opacity-70' FROM THE CLASS BELOW */
              <div 
                key={index} 
                className="flex-shrink-0 flex items-center justify-center h-8 sm:h-10 md:h-12 lg:h-14 w-20 sm:w-28 md:w-32 lg:w-40"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-container {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-container:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
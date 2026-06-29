// "use client";

// import NumberTalk from "../../app/whyclearclaim/numbertalk";

// export default function ScammerExposed() {
//   return (
//     <>
//       <section className="py-20 px-4 bg-white overflow-hidden">
//         <div className="max-w-7xl mx-auto">
//           {/* Section Header */}
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="md:text-3xl text-xl font-semibold md:!leading-[55px] text-[#00BE5D] mb-12">
//               <span className="text-[#283655]">Physical Shareholders -</span>{" "}
//               <span className="text-[#00BE5D]">Don&apos;t Miss This Video</span>
//             </h2>
//           </div>


//           {/* Video Container */}
//           <div className="flex justify-center animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:200ms]">
//             <div className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-8 border-white ring-1 ring-gray-100">
//               <iframe
//                 src="https://www.youtube.com/embed/wNqDCTfOwBI?si=z6DP9b3TH9rHnvZ8"
//                 title="YouTube video"
//                 className="absolute top-0 left-0 w-full h-full"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>

//           <div className="mt-12 text-center animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:400ms]">
//             <p className="text-[#283655] font-semibold text-lg italic bg-[#f0fdf4] inline-block px-6 py-2 rounded-full border border-[#00BE5D]/20">
//               &ldquo;Security and Transparency are the pillars of our recovery process.&rdquo;
//             </p>
//           </div>
//         </div>
//       </section>

//       <NumberTalk />
//     </>
//   );
// }

import NumberTalk from "../../app/whyclearclaim/numbertalk";
// import eclipse from "../../../public/images/Ellipse.png";
// import Image from "next/image";

export default function scammerexposed() {
  return (
    <>
      <div className="relative bg-gradient-to-b from-[#7ed3a6]/20 via-[#a8e6c1]/40 to-[#ffffff] py-20 overflow-hidden">
        {/* Grid Background Overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(#00BE5D 1px, transparent 1px), linear-gradient(90deg, #00BE5D 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-0 relative z-10">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#283655] tracking-tight">
              Physical shareholders <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a3a1f] via-[#2d5a34] to-[#00BE5D]">Don't miss this video</span>
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-[#1a3a1f] to-[#00BE5D] mx-auto mt-6 rounded-full opacity-40 mb-12"></div>
          </div>

          {/* Banner Video */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-3xl h-[280px] md:h-[380px] rounded-[32px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.15)] group transition-transform duration-500 hover:scale-[1.01]">

              {/* YouTube */}
              <iframe
                src="https://www.youtube.com/embed/wNqDCTfOwBI"
                title="Important Video"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>

              {/* Overlay Gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

              {/* Play Button Icon (Visual only) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-20 h-20 bg-[#00BE5D] rounded-full flex items-center justify-center shadow-2xl">
                  <svg className="w-10 h-10 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Text Content */}
              <div className="absolute bottom-10 left-10 right-10 text-white z-10 pointer-events-none">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-3xl font-bold max-w-2xl leading-[1.2] drop-shadow-lg">
                      Important Guidance for Physical Shareholders
                    </h3>

                    <div className="flex items-center gap-3 mt-4">
                      <div className="h-px w-8 bg-[#00BE5D]"></div>
                      <p className="text-[#00BE5D] text-lg font-bold tracking-wide uppercase">
                        Safety & Recovery
                      </p>
                    </div>
                  </div>

                  <p className="text-green-300 font-medium text-sm md:text-base">
                    Learn how to stay safe & recover your investments
                  </p>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-8 left-8 bg-[#00BE5D] text-white text-[10px] md:text-xs font-bold tracking-widest uppercase px-6 py-2.5 rounded-full shadow-2xl z-10 border border-white/20 backdrop-blur-sm pointer-events-none">
                Must Watch
              </div>

            </div>
          </div>
        </div>
      </div>


      <NumberTalk />
    </>
  );
}
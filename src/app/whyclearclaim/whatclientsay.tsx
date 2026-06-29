// "use client";

// import Testimonial from "../../app/testimonial/testimonial";

// export default function WhatClientSay() {
//   return (
//     <>
//       <section className="py-20 px-4 bg-white overflow-hidden">
//         <div className="max-w-7xl mx-auto">
//           {/* Section Header */}
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="md:text-3xl text-xl font-semibold md:!leading-[55px] text-[#00BE5D] mb-12">
//               <span className="text-[#283655]"> What </span> Clients Say
//             </h2>
//           </div>

//           {/* Video Section */}
//           <div className="flex justify-center animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:200ms]">
//             <div className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-8 border-white ring-1 ring-gray-100">
//               <iframe
//                 src="https://www.youtube.com/embed/yagxF8loMrM?si=VKRfV1CSjfXR7fCZ"
//                 title="YouTube video"
//                 className="absolute top-0 left-0 w-full h-full"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Testimonial />
//     </>
//   );
// }
import Testimonial from '../../app/testimonial/testimonial'

export default function WhatClientSay() {
  return (
    <>
      <div className="relative bg-gradient-to-b from-[#7ed3a6]/20 via-[#a8e6c1]/40 to-[#ffffff] py-20 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ 
               backgroundImage: `linear-gradient(#00BE5D 1px, transparent 1px), linear-gradient(90deg, #00BE5D 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
             }}>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-0 relative z-10">

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-extrabold text-[#283655] tracking-tight leading-tight">
            What{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a3a1f] via-[#2d5a34] to-[#00BE5D]">
              Client Say
            </span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#1a3a1f] to-[#00BE5D] mx-auto mt-6 rounded-full opacity-40 mb-16"></div>

          {/* Video Banner */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-3xl h-[240px] md:h-[380px] rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)] group">

              {/* YouTube */}
              <iframe
                src="https://www.youtube.com/embed/yagxF8loMrM"
                title="Client Testimonial"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

              {/* Text Content */}
              <div className="absolute bottom-8 left-8 right-8 text-white z-10 pointer-events-none">
                <h3 className="text-xl md:text-3xl font-bold max-w-xl leading-snug drop-shadow-lg">
                  Clearclaim Helped Me Recover My Parents's Lost Shares
                </h3>

                <div className="flex items-center gap-2 mt-4">
                  <p className="text-[#00BE5D] font-bold text-lg">
                    – Mr. Mukund Shah
                  </p>
                  <span className="text-xs text-gray-400">(Maharashtra)</span>
                </div>
              </div>

              {/* Stars Overlay (Inspired by image) */}
              <div className="absolute right-8 bottom-8 hidden md:flex gap-1 text-yellow-400 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Badge */}
              <div className="absolute top-6 left-6 bg-[#00BE5D] text-white text-[10px] md:text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-full shadow-lg z-10 border border-white/20 pointer-events-none">
                1000+ shares recovered
              </div>

            </div>
          </div>

        </div>
      </div>

      <Testimonial />
    </>
  );
}
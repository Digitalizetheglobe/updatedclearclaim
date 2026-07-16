"use client"; // Ensure this component is client-side rendered

import {
  Zap,
  ShieldCheck,
  Handshake,
  Headphones,
  MapPin,
  Award
} from "lucide-react";
import ScammerExposed from "../../app/whyclearclaim/scammersexposed";

export default function WhyClearClaim() {
  const contentBlocks = [
    {
      id: 1,
      icon: Zap,
      title: "Hassle Free",
      description:
        "Relax at home while our experts manage your complete share recovery process from start to End.",
    },
    {
      id: 2,
      icon: ShieldCheck,
      title: "Safe & Transparent Process",
      description:
        "Every step is handled with proper documentation, legal agreements, and regular updates.",
    },
    {
      id: 3,
      icon: Handshake,
      title: "Trusted Documentation Support",
      description:
        "Expert help for KYC updates, affidavits, transmission, duplicate shares & IEPF paperwork. ",
    },
    {
      id: 4,
      icon: Headphones,
      title: "Client-First Approach",
      description:
        "We focus on smooth communication, fast assistance, and a stress-free recovery experience. ",
    },
    {
      id: 5,
      icon: MapPin,
      title: "PAN India Assistance",
      description:
        "No matter where you live in India, our team provides complete remote support for your claim.",
    },
    {
      id: 6,
      icon: Award,
      title: "Experienced Recovery Team ",
      description:
        "We have 125+ years of industry experience as a team. We have a fleet of experts with us.",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeInUpProfessional {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 50 Q 25 45 50 50 T 100 50" fill="none" stroke="#283655" strokeWidth="0.5" />
            <path d="M0 60 Q 25 55 50 60 T 100 60" fill="none" stroke="#283655" strokeWidth="0.5" />
            <path d="M0 40 Q 25 35 50 40 T 100 40" fill="none" stroke="#283655" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-extrabold text-[#283655] text-center tracking-tight px-4">
            Why <span className="text-[#00BE5D]">Clear Claim</span>
          </h2>
          <div className="h-1.5 w-24 sm:w-20 bg-gradient-to-r from-[#00BE5D] to-[#00BE5D]/40 mx-auto mt-4 sm:mt-6 rounded-full opacity-40 mb-12 sm:mb-16"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10 px-2 sm:px-0">
            {contentBlocks.map((block, index) => (
              <div
                key={block.id}
                className="relative bg-[#161D34] rounded-[1.5rem] sm:rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_-15px_rgba(22,29,52,0.4)] border border-white/10 hover:-translate-y-2 hover:scale-[1.02] will-change-transform transition-all duration-500 ease-out flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group overflow-hidden"
                style={{
                  animation: `fadeInUpProfessional 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                  animationDelay: `${index * 120}ms`,
                  opacity: 0
                }}
              >
                {/* Subtle Glow Effect on Hover */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>

                {/* Icon Container */}
                <div className="relative z-10 flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-white/20 rounded-[1rem] sm:rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-white/30 group-hover:scale-110 group-hover:-rotate-3 shadow-lg">
                  <block.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white transition-transform duration-500" strokeWidth={2.5} />
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex-1">
                  <h3 className="text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-white/90 transition-colors">
                    {block.title}
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base  leading-relaxed">
                    {block.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScammerExposed />
    </>
  );
}
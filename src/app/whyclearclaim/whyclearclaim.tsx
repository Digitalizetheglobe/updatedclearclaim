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
        "You sit at your home and we take care of everything needed for your claim.",
    },
    {
      id: 2,
      icon: ShieldCheck,
      title: "100% Refund Guarantee",
      description:
        "We refund all your money if we fail to recover your shares.",
    },
    {
      id: 3,
      icon: Handshake,
      title: "Trust & Transparency",
      description:
        "We do a service agreement for the work and keep you updated on every step we perform.",
    },
    {
      id: 4,
      icon: Headphones,
      title: "Client Oriented Approach",
      description:
        "Customer satisfaction is our prime value and we do not compromise on it.",
    },
    {
      id: 5,
      icon: MapPin,
      title: "PAN India Service",
      description:
        "Our service is available across India. No matter where you are, your job will be done.",
    },
    {
      id: 6,
      icon: Award,
      title: "Strong Industry Experience",
      description:
        "We have 125+ years of industry experience as a team. We have a fleet of experts with us.",
    },
  ];

  return (
    <>
      <section className="relative py-24 px-4 bg-white overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#283655] text-center tracking-tight">
            Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a3a1f] via-[#2d5a34] to-[#00BE5D]">Clear Claim</span>
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-[#1a3a1f] to-[#00BE5D] mx-auto mt-6 rounded-full opacity-40 mb-16"></div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {contentBlocks.map((block, index) => (
              <div
                key={block.id}
                className="relative bg-gradient-to-br from-[#1a3a1f] via-[#2d5a34] to-[#00BE5D] rounded-3xl p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] hover:shadow-[0_40px_80px_-20px_rgba(0,190,93,0.4)] border border-white/10 hover:-translate-y-4 hover:scale-[1.02] will-change-transform transition-all duration-700 flex flex-row items-start space-x-6 group overflow-hidden animate-fade-in-up-light opacity-100 [animation-fill-mode:forwards]"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  opacity: 1
                }}
              >
                {/* Subtle Glow Effect on Hover */}
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"></div>

                {/* Icon Container */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-white/30 shadow-lg">
                  <block.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex-1">
                  <h3 className="text-white text-xl font-bold mb-3">
                    {block.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
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


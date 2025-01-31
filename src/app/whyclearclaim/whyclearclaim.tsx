"use client"; // Ensure this component is client-side rendered

import Image from "next/image";
import gif1 from "../../../public/gif/wired-flat-1505-radio-walkie-talkie.gif";
import gif2 from "../../../public/gif/wired-flat-153-bar-chart-1.gif";
import gif3 from "../../../public/gif/wired-flat-186-puzzle.gif";
import gif4 from "../../../public/gif/wired-flat-298-coins.gif";
import gif5 from "../../../public/gif/wired-flat-56-document.gif";
import gif6 from "../../../public/gif/wired-flat-981-consultation-1.gif";
import ScammerExposed from "../../app/whyclearclaim/scammersexposed";

// Import Swiper styles and modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay CSS
import { Pagination, Autoplay } from "swiper/modules"; // Add Autoplay module

export default function WhyClearClaim() {
  const contentBlocks = [
    {
      id: 1,
      image: gif6,
      title: "Hassle Free",
      description: "You sit at your home and we take care of everything needed for your claim",
    },
    {
      id: 2,
      image: gif4,
      title: "100% Refund Guarantee",
      description: "We refund all your money if we fail to recover your shares",
    },
    {
      id: 3,
      image: gif1,
      title: "Trust & Transparency",
      description: "We do a service agreement for the work and keep you updated on every step we perform",
    },
    {
      id: 4,
      image: gif3,
      title: "Client Oriented Approach",
      description: "Customer satisfaction is our prime value and we do not compromise on it",
    },
    {
      id: 5,
      image: gif2,
      title: "PAN India Service",
      description: "Our service is available across India. No matter where you are, your job will be done",
    },
    {
      id: 6,
      image: gif5,
      title: "Strong Industry Experience",
      description: "We have 125+ years of industry experience as a team. We have a fleet of experts with us",
    },
  ];

  return (
    <>
      <div className="p-16 mb-12">
        <div className="bg-[#00BE5D] rounded-[120px]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="md:text-3xl text-xl font-semibold md:!leading-[55px] text-white pt-6">
              <span className="text-[#283655]"> why </span> Clearclaim
            </h2>
          </div>
          <div className="xl:max-w-7xl max-w-4xl mx-auto">
            {/* Mobile View - Swiper Slider */}
            <div className="md:hidden">
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 3000, // Auto-slide every 3 seconds
                  disableOnInteraction: false, // Continue autoplay even when user interacts with the slider
                }}
                modules={[Pagination, Autoplay]} // Add Autoplay module
                className="mySwiper"
              >
                {contentBlocks.map((block) => (
                  <SwiperSlide key={block.id}>
                    <div className="p-6 mt-4 max-w-96 mx-auto rounded flex flex-col items-center justify-center text-center">
                      <Image src={block.image} alt="Logo" className="w-24 h-24" priority />
                      <h3 className="text-[#283655] text-xl font-bold">{block.title}</h3>
                      <p className="text-md font-bold mt-2 text-white">{block.description}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desktop and Tablet View - Grid Layout */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-6 ">
              {contentBlocks.map((block) => (
                <div key={block.id} className="p-6 mt-4 mb-12 max-w-96 mx-auto rounded flex flex-col items-center justify-center text-center">
                  <Image src={block.image} alt="Logo" className="w-24 h-24" priority />
                  <h3 className="text-[#283655] text-xl font-bold">{block.title}</h3>
                  <p className="text-md font-bold mt-2 text-white">{block.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ScammerExposed />
    </>
  );
}
"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import blog from "../../../public/blogs/blog55 (1).png";
import blog1 from "../../../public/blogs/2.png";
import blog2 from "../../../public/blogs/3.png";
import blog3 from "../../../public/blogs/Understanding the Investor Education and Protection Fund (IEPF) Authority in India.png";
import blog4 from "../../../public/blogs/Understanding IPO and Its Advantages to Retail Investors.png";
import blog20 from "../../../public/blogs/document.png";
import blog21 from "../../../public/blogs/Digital.png";
import blog22 from "../../../public/blogs/kyc.png";
import blog19 from "../../../public/blogs/unclaim shares.png";
import "./recentblogs.css";

export default function RecentBlogs() {
  return (
    <>
      <div className="bg-white font-[sans-serif] my-4 mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="md:text-3xl text-xl font-semibold md:!leading-[55px] text-[#00BE5D] mb-12">
              <span className="text-[#283655]">Our</span> Blog
            </h2>
          </div>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">
            <SwiperSlide>
            <Link href="/navigatingrules">
                  <div className="bg-white mb-12 items-center cursor-pointer h-[450px] rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(0,190,93,0.8)] relative top-0 hover:-top-2 transition-all duration-300">
                    <Image
                      src={blog20}
                      alt="Blog Post 1"
                      className="h-60 items-center"
                    />
                    <div
                      className="h-[2px] bg-[#00BE5D] font-bold"
                      style={{ fontWeight: "bold" }}
                    ></div>
                    <div className="p-6">
                      <span className="text-sm block text-gray-400 mb-2">
                      Jan 2nd 2025
                      </span>
                      <h3 className="text-xl font-bold text-gray-800">
                      The Importance of Document Verification in IEPF Claims: A Guide to an Effective Recovery Process
                      </h3>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
           
           
            <SwiperSlide>
            <Link href="/navigatingrules">
                  <div className="bg-white mb-12 items-center cursor-pointer h-[450px] rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(0,190,93,0.8)] relative top-0 hover:-top-2 transition-all duration-300">
                    <Image
                      src={blog19}
                      alt="Blog Post 1"
                      className="h-60 items-center"
                    />
                    <div
                      className="h-[2px] bg-[#00BE5D] font-bold"
                      style={{ fontWeight: "bold" }}
                    ></div>
                    <div className="p-6">
                      <span className="text-sm block text-gray-400 mb-2">
                      Jan 1st 2025
                      </span>
                      <h3 className="text-xl font-bold text-gray-800">
                      Unclaimed Dividends vs. Unclaimed Shares: How to Navigate the Recovery Process
                      </h3>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            
            <SwiperSlide>
            <Link href="/navigatingrules">
                  <div className="bg-white mb-12 items-center cursor-pointer h-[450px] rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(0,190,93,0.8)] relative top-0 hover:-top-2 transition-all duration-300">
                    <Image
                      src={blog22}
                      alt="Blog Post 1"
                      className="h-60 items-center"
                    />
                    <div
                      className="h-[2px] bg-[#00BE5D] font-bold"
                      style={{ fontWeight: "bold" }}
                    ></div>
                    <div className="p-6">
                      <span className="text-sm block text-gray-400 mb-2">
                      Jan 30th 2025
                      </span>
                      <h3 className="text-xl font-bold text-gray-800">
                      The Role of KYC Updates in Preventing Unclaimed Financial Assets
                      </h3>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
           
            <SwiperSlide>
            <Link href="/navigatingrules">
                  <div className="bg-white mb-12 items-center cursor-pointer h-[450px] rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(0,190,93,0.8)] relative top-0 hover:-top-2 transition-all duration-300">
                    <Image
                      src={blog21}
                      alt="Blog Post 1"
                      className="h-60 items-center"
                    />
                    <div
                      className="h-[2px] bg-[#00BE5D] font-bold"
                      style={{ fontWeight: "bold" }}
                    ></div>
                    <div className="p-6">
                      <span className="text-sm block text-gray-400 mb-2">
                      Jan 29th 2025
                      </span>
                      <h3 className="text-xl font-bold text-gray-800">
                      The Rise of Digital Platforms for Tracing Inactive Financial Assets: What You Need to Know
                      </h3>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>


              <SwiperSlide>
                <Link href="/navigatingrules">
                  <div className="bg-white mb-12 items-center cursor-pointer h-[450px] rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(0,190,93,0.8)] relative top-0 hover:-top-2 transition-all duration-300">
                    <Image
                      src={blog}
                      alt="Blog Post 1"
                      className="h-60 items-center"
                    />
                    <div
                      className="h-[2px] bg-[#00BE5D] font-bold"
                      style={{ fontWeight: "bold" }}
                    ></div>
                    <div className="p-6">
                      <span className="text-sm block text-gray-400 mb-2">
                        Dec 12th 2024
                      </span>
                      <h3 className="text-xl font-bold text-gray-800">
                        Navigating the new nomination rules: how recent changes
                        affect your dormant bank account
                      </h3>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
              <Link href="/rise-of-unclaimed-assets">
                <div className="bg-white mb-12 cursor-pointer rounded h-[450px] overflow-hidden shadow-[0_2px_10px_-3px_rgba(0,190,93,0.8)] relative top-0 hover:-top-2 transition-all duration-300">
                  <Image
                    src={blog1}
                    alt="Blog Post 3"
                    className="w-full h-60 items-center "
                  />
                  <div
                    className="h-[2px] bg-[#00BE5D] font-bold"
                    style={{ fontWeight: "bold" }}
                  ></div>
                  <div className="p-6">
                    <span className="text-sm block text-gray-400 mb-2">
                      Dec 12th 2024
                    </span>
                    <h3 className="text-xl font-bold text-gray-800">
                      The Rise of Unclaimed Assets in India: A Deep Dive into
                      Current Statistics and Recovery Processes
                    </h3>
                   
                  </div>
                </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href="/understanding-banking-laws">
                <div className="bg-white mb-12 cursor-pointer rounded h-[450px] overflow-hidden shadow-[0_2px_10px_-3px_rgba(0,190,93,0.8)] relative top-0 hover:-top-2 transition-all duration-300">
                  <Image
                    src={blog2}
                    alt="Blog Post 2"
                    className="w-full h-60 object-cover"
                  />
                  <div
                    className="h-[2px] bg-[#00BE5D] font-bold"
                    style={{ fontWeight: "bold" }}
                  ></div>
                  <div className="p-6">
                    <span className="text-sm block text-gray-400 mb-2">
                      Dec 6th 2024
                    </span>
                    <h3 className="text-xl font-bold text-gray-800">
                      IEPF Claims: Understanding the Banking Laws (Amendment)
                      Bill 2024
                    </h3>
                   
                  </div>
                </div>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                   <Link
                  href="/heg-limited">
                <div className="bg-white mb-12 cursor-pointer rounded h-[450px] overflow-hidden shadow-[0_2px_10px_-3px_rgba(0,190,93,0.8)] relative top-0 hover:-top-2 transition-all duration-300">
                  <Image
                    src={blog3}
                    alt="Blog Post 3"
                    className="w-full h-60 object-cover"
                  />
                  <div
                    className="h-[2px] bg-[#00BE5D] font-bold"
                    style={{ fontWeight: "bold" }}
                  ></div>
                  <div className="p-6">
                    <span className="text-sm block text-gray-400 mb-2">
                      Dec 6th 2024
                    </span>
                    <h3 className="text-xl font-bold text-gray-800">
                      HEG Limiteds Major Announcement: Key Insights You Need to
                      Know
                    </h3>
                
                  </div>
                </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                 <Link
                  href="/investor-education">
                <div className="bg-white mb-12 cursor-pointer rounded h-[450px] overflow-hidden shadow-[0_2px_10px_-3px_rgba(0,190,93,0.8)] relative top-0 hover:-top-2 transition-all duration-300">
                  <Image
                    src={blog4}
                    alt="Blog Post 3"
                    className="w-full h-60 object-cover"
                  />
                  <div
                    className="h-[2px] bg-[#00BE5D] font-bold"
                    style={{ fontWeight: "bold" }}
                  ></div>
                  <div className="p-6">
                    <span className="text-sm block text-gray-400 mb-2">
                      Nov 29th 2024
                    </span>
                    <h3 className="text-xl font-bold text-gray-800">
                      Understanding the Investor Education and Protection Fund
                      (IEPF) Authority in India
                    </h3>
                
                  </div>
                </div>
                </Link>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>

      {/* <InstaFeed/> */}
    </>
  );
}

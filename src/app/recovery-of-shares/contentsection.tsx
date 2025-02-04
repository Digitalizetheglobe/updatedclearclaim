"use client";

import Image from "next/image";
import closeup from "../../../public/images/close-up-businessman-with-digital-tablet 3.svg";
import tick from "../../../public/images/tick.svg";
import LandingTestimonial2 from "../landingtestimonial2/page";

export default function ContentSection() {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12 overflow-hidden">
        <div className="mx-auto max-w-screen-xl">
          <div className="lg:max-w-7xl max-w-xl mx-auto">
            {/* Grid for Desktop and Mobile */}
            <div className="grid md:grid-cols-2 gap-24 max-md:gap-8">
              {/* Image Section - Order 2 on Mobile */}
              <div className="max-md:order-2 max-md:px-4">
                <Image
                  src={closeup}
                  alt="Placeholder Image"
                  className="w-full h-[600px] object-cover max-md:h-[400px]"
                />
              </div>

              {/* Content Section - Order 1 on Mobile */}
              <div className="text-left max-md:order-1 max-md:px-4">
                <div className="bg-[#00BE5D] text-white p-2">
                  <h2 className="text-2xl font-bold">
                    Why shares are lost or remain <br /> unclaimed ?
                  </h2>
                </div>
                <ul className="space-y-6 mt-8 mb-6 text-gray-500 sm:text-md md:mb-8 max-md:px-4">
  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
    Some individuals procrastinated and failed to take action when the government and financial institutions urged them to make the transition.
  </li>
  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
    Others have forgotten about investments made years ago, misplacing or losing the related documents.
  </li>
  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
    In unfortunate cases where the original holders have passed away, legal heirs often face challenges in claiming these investments.
  </li>
  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
    Legal heirs themselves may not be aware of investments made by their forefathers, resulting in hidden assets.
  </li>
  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
    Shareholders change their addresses and forget to change the address in company records hence they miss the communication from company regarding dividends and other corporate actions.
  </li>
  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
    Shares are transferred to IEPF as dividends of shares remain unclaimed for 7 consecutive years.
  </li>
</ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LandingTestimonial2 />
    </>
  );
}
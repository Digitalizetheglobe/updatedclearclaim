import aiimg from "../../../public/images/AI-img.png";
import Image from "next/image";
import Severalfactors from "./severalfactors";
import OurServices from "../ourservices/ourservices";
import tick from "../../../public/images/tick.svg";

export default function Howwework() {
  return (
    <>
      <div className="max-w-6xl mx-auto mt-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="md:text-3xl text-xl font-semibold md:!leading-[55px] text-[#00BE5D]">
            <span className="text-[#283655]">How It</span> Works
          </h2>
        </div>
        <div className="lg:p-8 p-6 rounded-md">
          <div className="grid md:grid-cols-2 items-center gap-16">
            {/* Image Section */}
            <div className="relative w-full flex flex-col items-center md:items-start text-center md:text-left">
              <Image src={aiimg} alt="Logo" className="w-[420px]" priority />
              <p className="text-2xl text-[#00BE5D] font-semibold mt-4">
                AI-Powered Smart Claim Framework
              </p>
            </div>

            {/* Content Section */}
            <div className="text-xl text-left md:text-left">
              <div className="grid sm:grid-cols-2 gap-4 mx-auto w-full">
                <div className="text-center hover:shadow-md transition-all duration-300 rounded-xl p-4 w-full bg-[#d9fce9]">
                  <Image src={tick} alt="clearclaim" />
                  <h3 className="text-gray-800 text-base mt-1 mb-2">
                    Find your real worth of shares
                  </h3>
                </div>
                <div className="text-center hover:shadow-md transition-all duration-300 rounded-xl p-4 w-full bg-[#d9fce9]">
                  <Image src={tick} alt="clearclaim" />
                  <h3 className="text-gray-800 text-base mt-1 mb-2">
                    Know your exact claim type of shares
                  </h3>
                </div>
                <div className="text-center hover:shadow-md transition-all duration-300 rounded-xl p-4 w-full bg-[#d9fce9]">
                  <Image src={tick} alt="clearclaim" />
                  <h3 className="text-gray-800 text-base mt-1 mb-2">
                    Get exclusive consultation from experts
                  </h3>
                </div>
                <div className="text-center hover:shadow-md transition-all duration-300 rounded-xl p-4 w-full bg-[#d9fce9]">
                  <Image src={tick} alt="clearclaim" />
                  <h3 className="text-gray-800 text-base mt-1 mb-2">
                    Accurate documentation of your claim
                  </h3>
                </div>
                <div className="text-center hover:shadow-md transition-all duration-300 rounded-xl p-4 w-full bg-[#d9fce9]">
                  <Image src={tick} alt="clearclaim" />
                  <h3 className="text-gray-800 text-base mt-1 mb-2">
                    Get your shares in your DEMAT
                  </h3>
                </div>
                <div className="text-center hover:shadow-md transition-all duration-300 rounded-xl p-4 w-full bg-[#d9fce9]">
                  <Image src={tick} alt="clearclaim" />
                  <h3 className="text-gray-800 text-base mt-1 mb-2">
                    Superior Follow-up of your claim
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OurServices />
      <Severalfactors />
    </>
  );
}

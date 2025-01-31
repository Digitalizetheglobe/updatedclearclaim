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
                {[
                  "Find your real worth of shares",
                  "Know your exact claim type of shares",
                  "Get exclusive consultation from experts",
                  "Accurate documentation of your claim",
                  "Get your shares in your DEMAT",
                  "Superior Follow-up of your claim",
                ].map((text, index) => (
                  <div
                    key={index}
                    className="flex md:grid md:grid-cols-[auto_1fr] md:items-start items-center gap-3 hover:shadow-md transition-all duration-300 rounded-xl h-28 p-4 w-full bg-[#d9fce9]"
                  >
                    <Image src={tick} alt="tick" className="w-6 h-6" />
                    <h3 className="text-gray-800 text-base">{text}</h3>
                  </div>
                ))}
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

"use client";

import Image from "next/image";
import gif1 from "../../../public/gif/wired-flat-1505-radio-walkie-talkie.gif";
import gif2 from "../../../public/gif/wired-flat-153-bar-chart-1.gif";
import gif3 from "../../../public/gif/wired-flat-186-puzzle.gif";
import gif4 from "../../../public/gif/wired-flat-298-coins.gif";
import gif5 from "../../../public/gif/wired-flat-56-document.gif";
import gif6 from "../../../public/gif/wired-flat-981-consultation-1.gif";
import ScammerExposed from "../../app/whyclearclaim/scammersexposed";

export default function WhyClearClaim() {
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-6">
              {/* Content Block 1 */}
              <div className="p-6 mt-4 max-w-96 mx-auto rounded flex flex-col items-center justify-center text-center">
                <Image src={gif6} alt="Logo" className="w-24 h-24" priority />
                <h3 className="text-[#283655] text-xl font-bold">Hassle Free</h3>
                <p className="text-md font-bold mt-2 text-white">
                  You sit at your home and we take care of everything needed for your claim
                </p>
              </div>

              {/* Content Block 2 */}
              <div className="p-6 mt-4 max-w-96 mx-auto rounded flex flex-col items-center justify-center text-center">
                <Image src={gif4} alt="Logo" className="w-24 h-24" priority />
                <h3 className="text-[#283655] text-xl font-bold">100% Refund Guarantee</h3>
                <p className="text-md mt-2 font-bold text-white">
                  We refund all your money if we fail to recover your shares
                </p>
              </div>

              {/* Content Block 3 */}
              <div className="p-6 mt-4 max-w-96 mx-auto rounded flex flex-col items-center justify-center text-center">
                <Image src={gif1} alt="Logo" className="w-24 h-24" priority />
                <h3 className="text-[#283655] text-xl font-bold">Trust & Transparency</h3>
                <p className="text-md mt-2 font-bold text-white">
                  We do a service agreement for the work and keep you updated on every step we perform
                </p>
              </div>

              {/* Content Block 4 */}
              <div className="p-6 mt-4 max-w-96 mx-auto rounded flex flex-col items-center justify-center text-center">
                <Image src={gif3} alt="Logo" className="w-24 h-24" priority />
                <h3 className="text-[#283655] text-xl font-bold">Client Oriented Approach</h3>
                <p className="text-md mt-2 font-bold text-white">
                  Customer satisfaction is our prime value and we do not compromise on it
                </p>
              </div>

              {/* Content Block 5 */}
              <div className="p-6 mb-16 mt-4 max-w-96 mx-auto rounded flex flex-col items-center justify-center text-center">
                <Image src={gif2} alt="Logo" className="w-24 h-24" priority />
                <h3 className="text-[#283655] text-xl font-bold">PAN India Service</h3>
                <p className="text-md mt-2 font-bold text-white">
                  Our service is available across India. No matter where you are, your job will be done
                </p>
              </div>

              {/* Content Block 6 */}
              <div className="p-6 mb-16 mt-4 max-w-96 mx-auto rounded flex flex-col items-center justify-center text-center">
                <Image src={gif5} alt="Logo" className="w-24 h-24" priority />
                <h3 className="text-[#283655] text-xl font-bold">Strong Industry Experience</h3>
                <p className="text-md mt-2 font-bold text-white">
                  We have 125+ years of industry experience as a team. We have a fleet of experts with us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScammerExposed />
    </>
  );
}

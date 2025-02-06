import Link from "next/link";
import Image from "next/image";
import gif from "../../public/images/Old-shares-and-dividends-recovery-840-x-1378-px.gif";
import WhyClearClaim from "../app/whyclearclaim/whyclearclaim";
import design from "../../public/images/Clear claim banner (400 x 320 px) (2).gif";

export default function Home() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-center md:gap-8">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* 1. Design Gif */}
            <div className="order-1 md:order-none">
              <Link href="/">
                <Image
                  src={design}
                  alt="Design Gif"
                  className="-mt-4"
                  priority
                  unoptimized
                  width={430}
                  height={400}
                />
              </Link>
            </div>

            {/* 2. Text */}
            <div className="order-2 md:order-none mt-4">
              <h1 className="text-[#000] text-xl">
                Physical shares to DEMAT conversion
              </h1>
            </div>

            {/* 3. Call Now Button */}
            <div className="order-3 md:order-none mt-4">
              <Link href="tel:+919156701900">
                <button className="bg-[#00BE5D] text-white py-3 px-6 rounded-full rounded-tl-none flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1.23 1.23 0 011.23-.28 11.42 11.42 0 003.58.57 1.25 1.25 0 011.25 1.25v3.46a1.25 1.25 0 01-1.25 1.25A16.94 16.94 0 013 4.25a1.25 1.25 0 011.25-1.25h3.46a1.25 1.25 0 011.25 1.25 11.42 11.42 0 00.57 3.58 1.23 1.23 0 01-.28 1.23z" />
                  </svg>
                  Call Now
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column: Old Man Photo */}
          <div className="order-4 md:order-none mt-4 md:mt-0 px-4">
            <Link href="/">
              <Image
                src={gif}
                alt="Old Man Photo"
                className="w-full h-auto max-w-[434px] max-h-[700px]"
                priority
                width={434}
                height={700}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Vertical Sticky Call Now Button */}
      <button
        className="bg-[#00BE5D] font-semibold text-white py-8 px-3 rounded-3xl rounded-tr-none flex gap-4 fixed top-1/2 transform -translate-y-1/2 right-0 z-50 max-md:py-4 max-md:px-2 max-md:right-2"
        style={{ writingMode: "vertical-rl", transformOrigin: "right center" }}
      >
        <Link href="tel:+919156701900" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1.23 1.23 0 011.23-.28 11.42 11.42 0 003.58.57 1.25 1.25 0 011.25 1.25v3.46a1.25 1.25 0 01-1.25 1.25A16.94 16.94 0 013 4.25a1.25 1.25 0 011.25-1.25h3.46a1.25 1.25 0 011.25 1.25 11.42 11.42 0 00.57 3.58 1.23 1.23 0 01-.28 1.23z" />
          </svg>
          Call Now
        </Link>
      </button>

      <WhyClearClaim />
    </>
  );
}

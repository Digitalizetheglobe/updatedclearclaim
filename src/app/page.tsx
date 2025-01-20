import Link from "next/link";
import Image from "next/image";
 import gif from "../../public/images/Old-shares-and-dividends-recovery-840-x-1378-px.gif";
import WhyClearClaim from "../app/whyclearclaim/whyclearclaim";
import design from "../../public/gif/Untitled (450 x 420 px).gif";
// const gif = "/images/Old-shares-and-dividends-recovery-840-x-1378-px.gif";
// const design = "/gif/Untitled (450 x 420 px).gif";

export default function Home() {
  return (
    <>
      <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6 max-w-5xl max-md:max-w-md mx-auto">
        {/* Left Section */}
        <div className="max-md:order-1 max-md:text-center">
          <Link href="/" className="flex items-center flex-col">
            {/* Use Next.js Image component for the textgif */}
            <Image
              src={design}
              alt="Logo"
              className="-mt-4"
              priority
              unoptimized
              width={430} 
              height={400} 
            />
          </Link>
          <div >
          <h1 className="text-[#000] text-xl text-center">
            Physical shares to DEMAT conversion
          </h1>
          <Link href="tel:+919156701922" >
          <button className="bg-[#00BE5D] text-white mt-4 py-3 px-6 rounded-full rounded-tl-none items-center flex gap-2 ml-16 ">
            {/* Phone Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1.23 1.23 0 011.23-.28 11.42 11.42 0 003.58.57 1.25 1.25 0 011.25 1.25v3.46a1.25 1.25 0 01-1.25 1.25A16.94 16.94 0 013 4.25a1.25 1.25 0 011.25-1.25h3.46a1.25 1.25 0 011.25 1.25 11.42 11.42 0 00.57 3.58 1.23 1.23 0 01-.28 1.23z" />
            </svg>
            {/* Button Text */}
            Call Now
          </button>
          </Link>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <Link href="/" className="flex items-center">
            {/* Use Next.js Image component for the gif */}
            <Image
              src={gif}
              alt="Logo"
              className="w-[434px] h-[700px]"
              priority
            />
          </Link>
        </div>
      </div>

      {/* Vertical Sticky Call Now Button */}
      <button
        className="bg-[#00BE5D] font-semibold text-white py-8 px-3 rounded-3xl rounded-tr-none flex gap-4 fixed top-1/2 transform -translate-y-1/2 right-0 z-50 "
        style={{ writingMode: "vertical-rl", transformOrigin: "right center" }}
      >
        <Link href="tel:+919156701922" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1.23 1.23 0 011.23-.28 11.42 11.42 0 003.58.57 1.25 1.25 0 011.25 1.25v3.46a1.25 1.25 0 01-1.25 1.25A16.94 16.94 0 013 4.25a1.25 1.25 0 011.25-1.25h3.46a1.25 1.25 0 011.25 1.25 11.42 11.42 0 00.57 3.58 1.23 1.23 0 01-.28 1.23z" />
          </svg>
          {/* Button Text */}
          Call Now
        </Link>
      </button>

      <WhyClearClaim />
    </>
  );
}

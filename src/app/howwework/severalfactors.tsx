import Image from "next/image";
import gif from "../../../public/gif/1.gif";
import gif1 from "../../../public/gif/2.gif";
import gif2 from "../../../public/gif/3.gif";
import gif3 from "../../../public/gif/4.gif";
import gif4 from "../../../public/gif/5.gif";
import RecentBlogs from "../blog/recentblogs";

export default function Severalfactors() {
  return (
    <>
      <div className="bg-white p-4 mt-14">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="md:text-3xl text-xl font-semibold md:!leading-[55px] text-[#00BE5D]">
            <span className="text-[#283655]">
              Several factors contribute to{" "}
            </span>
            Unclaimed Money
          </h2>
        </div>

        {/* Centered Two Columns */}
        <div className="md:max-w-4xl mx-auto flex items-center justify-center mt-12 md:flex-row flex-col text-center">
          <div className=" text-left mt-4 md:mt-0">
            <p className="text-md text-black">
              Some individuals procrastinated and failed to take action when the
              government and financial institutions urged them to make the
              transition.
            </p>
          </div>
          {/* GIF Column */}
          <div className="md:w-1/2 flex justify-center">
            <Image src={gif} alt="GIF" className="w-36 h-36" priority />
          </div>
        </div>

        <hr className="border-gray-300 my-12" />
        <div className="md:max-w-4xl mx-auto flex items-center justify-center mt-12 md:flex-row flex-col text-center">
          {/* GIF Column */}
          <div className="md:w-1/2 flex justify-center">
            <Image src={gif1} alt="GIF" className="w-36 h-36" priority />
          </div>
          <div className=" text-left mt-4 md:mt-0">
            <p className="text-md text-black">
              Others have forgotten about investments made years ago, misplacing
              or losing the related documents.
            </p>
          </div>
        </div>
        <hr className="border-gray-300 my-12" />
        <div className="md:max-w-4xl mx-auto flex items-center justify-center mt-12 md:flex-row flex-col text-center">
          <div className=" text-left mt-4 md:mt-0">
            <p className="text-md text-black">
              In unfortunate cases where the original holders have passed away,
              legal heirs often face challengesin claiming these investments.
            </p>
          </div>
          {/* GIF Column */}
          <div className="md:w-1/2 flex justify-center">
            <Image src={gif2} alt="GIF" className="w-36 h-36" priority />
          </div>
        </div>
        <hr className="border-gray-300 my-12" />
        <div className="md:max-w-4xl mx-auto flex items-center justify-center mt-12 md:flex-row flex-col text-center">
          {/* GIF Column */}
          <div className="md:w-1/2 flex justify-center">
            <Image src={gif3} alt="GIF" className="w-36 h-36" priority />
          </div>
          <div className=" text-left mt-4 md:mt-0">
            <p className="text-md text-black">
              Legal heirsthemselves may not be aware of investments made by
              their forefathers, resulting in hidden assets.
            </p>
          </div>
        </div>
        <hr className="border-gray-300 my-12" />
        <div className="md:max-w-4xl mx-auto flex items-center justify-center mt-12 md:flex-row flex-col text-center">
          <div className=" text-left mt-4 md:mt-0">
            <p className="text-md text-black">
              The conversion and claim processes can be strict, time-consuming,
              and complex. Moreover, there is a significant amount of money that
              remainsinaccessible in the economy, belonging to individuals who
              are unable to claim it. This money is commonly known as Unclaimed
              Money.
            </p>
          </div>
          {/* GIF Column */}
          <div className="md:w-1/2 flex justify-center">
            <Image src={gif4} alt="GIF" className="w-36 h-36" priority />
          </div>
        </div>
        <hr className="border-gray-300 my-12" />
      </div>

      <RecentBlogs />
    </>
  );
}

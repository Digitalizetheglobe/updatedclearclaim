import Image from "next/image";
import service from "../../../public/images/services.png";
import recovery from "../../../public/images/service1.png";
import Link from "next/link";

export default function OurServices() {
  return (
    <>
      <div
        className="flex flex-col items-center py-12 space-y-16 font-sofia-pro"
        style={{ backgroundSize: "cover" }}
      >
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="md:text-3xl text-xl font-semibold md:!leading-[55px] text-[#00BE5D]">
            <span className="text-[#283655]">Our</span> Services
          </h2>
        </div>

        {/* First Card */}
        <div className="relative flex justify-start w-full max-w-6xl">
          {/* Image Section */}
          <div className="w-[600px] h-[480px] overflow-hidden">
            <Image
              src={service}
              alt="IEPF Claim"
              width={600}
              height={550}
              className="object-cover w-full h-full"
            />
          </div>
          {/* Content Box */}
          <div className="absolute right-20 top-1/4 bg-white shadow-xl p-6 w-[45%]">
            <h2 className="text-black text-lg font-bold mb-4">IEPF Claim</h2>
            <hr />
            <p className="text-md mb-6 text-gray-700 mt-4">
              We help you recover your shares from IEPF smoothly like we have
              done it for hundreds of our other clients.
            </p>
            <Link href="/iepfclaim">
              <button className="text-white py-2 px-6 bg-green-600 hover:bg-green-700 mt-4 mb-6">
                Know More
              </button>
            </Link>
          </div>
        </div>

        {/* Second Card */}
        <div className="relative flex justify-end w-full max-w-6xl">
          {/* Image Section */}
          <div className="w-[600px] h-[480px] overflow-hidden order-2">
            <Image
              src={recovery}
              alt="Recovery Of Shares"
              width={600}
              height={550}
              className="object-cover w-full h-full"
            />
          </div>
          {/* Content Box */}
          <div className="absolute left-20 top-1/4 bg-white shadow-xl p-6 w-[45%]">
            <h2 className="text-black text-lg font-bold mb-4">
              Recovery Of Shares
            </h2>
            <hr />
            <p className="text-md mb-6 text-gray-700 mt-4">
              We can help you to recover your old shares which you cannot access
              due to various reasons.
            </p>
            <Link href="/recovery-of-shares">
              <button className="text-white py-2 px-6 bg-green-600 hover:bg-green-700 mt-4 mb-6">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

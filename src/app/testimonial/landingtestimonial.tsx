"use client";

// import { useState, useEffect } from "react";
import eclipse from "../../../public/images/Ellipse.png";
import aiimg from "../../../public/images/AI-img.png";
import Image from "next/image";
import tick from "../../../public/images/tick.svg";
import google from '../../../public/images/google.webp'

export default function LandingTestimonial() {
  const reviews = [
    {
      name: "Vinayak Gaitonde",
      date: "22 January 2025",
      stars: 5,
      content:
        "Very reliable, gives personal attention & above all, very reasonable charges.I have given them shares which are in IEPF for transferring into my demat account. At present after completing all documentation by them the matter is with IEPF for their clearance. My Best Wishes to Shrikant and his team.",
    },
    {
      name: "Vicky Jain",
      date: "17 January 2025",
      stars: 5,
      content:
        "Great service, quick response they helped me to recover my father physical shares. Highly recommended.",
    },
    {
      name: "Rajagopalan V",
      date: "6 January 2025",
      stars: 5,
      content:
        "Mr.Srikant is a good person and guide us in a proper way with his Expertise in his business areas. You may negotiate and go with them for your requirements.",
    },
    {
      name: "Piyush Dhimate",
      date: "4 January 2025",
      stars: 5,
      content:
        "I'm based in Australia and had troubles dealing with insurance and EPF withdrawal remotely. Fortunately, I found clear claim that was the only service that offered to help me out. Their expertise in the processes involved helped me prepare the documentation upfront. I highly recommend them!.",
    },
    {
      name: "INDRANEEL TAMBE",
      date: "3 January 2025",
      stars: 4,
      content:
        "Thanks team of clear claim.... Nice service as well as nice guidline and thx for sorting and clearing my case ... And thanks help us...",
    },
    {
      name: "Saikat Dastidar",
      date: "2 January 2025",
      stars: 5,
      content:
        "Great service, quick response they helped me to recover my father physical shares. Highly recommended.",
    },
    {
      name: "RAJESH TATED",
      date: "29 December 2024",
      stars: 5,
      content:
        "Company is doing a good job with constant follow up.",
    },
  ];

  


  return (
    <>
         <section className="bg-gray-100 py-12 px-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Google Reviews That Speak for Themselves</h2>
      </div>
<div className="relative max-w-6xl mx-auto">
        <div className="h-[500px] overflow-y-scroll rounded-lg bg-grey shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg p-4 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {review.name}
                  </h3>
                  <Image
                    src={google}
                    alt="Google"
                    className="w-12 h-6"
                  />
                </div>
                <p className="text-sm text-gray-500 mb-2">{review.date}</p>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={i < review.stars ? "gold" : "gray"}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.75.75 0 011.04 0l1.755 2.26a.75.75 0 00.57.3l2.698.02a.75.75 0 01.548 1.277l-2.158 1.89a.75.75 0 00-.24.669l.5 2.698a.75.75 0 01-1.11.79l-2.39-1.33a.75.75 0 00-.75 0l-2.39 1.33a.75.75 0 01-1.11-.79l.5-2.698a.75.75 0 00-.24-.669l-2.158-1.89a.75.75 0 01.548-1.277l2.698-.02a.75.75 0 00.57-.3l1.755-2.26z"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm">{review.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

{/* Scammers Exposed */}
      <div className="max-w-6xl mx-auto mt-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="md:text-3xl text-xl font-semibold md:!leading-[55px] text-[#00BE5D]">
            <span className="text-[#283655]">Warning : </span> Scammers Exposed
          </h2>
        </div>
        <div className="mt-6 lg:p-10 p-6 rounded-md">
          <div className="grid md:grid-cols-2 items-center gap-16">
            <div>
              <h2 className="md:text-3xl text-xl font-semibold md:!leading-[40px] text-[#000]">
                Beware of Deceptive Claim Services
              </h2>

              <button
                type="button"
                className="text-[#00BE5D] border-2 bg-transparent border-[#00BE5D] tracking-wide rounded-md font-semibold text-md px-4 py-3 w-64 !mt-6"
              >
                Don’t fall for scammers!
              </button>

              <ul className="space-y-4 mt-8">
                <li className="flex items-center gap-3 text-md text-gray-600">
                  <Image src={eclipse} alt="clearclaim" className="w-[17]" />
                  Some may charge 15% to 30% commission for claims services.
                </li>
                <li className="flex items-center gap-3 text-md text-gray-600">
                  <Image src={eclipse} alt="clearclaim" className="w-[17]" />
                  Trust only verified professionals and genuine claim services.
                </li>
              </ul>
            </div>
            <div className="w-full overflow-hidden rounded-md row-2 ">
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/X3Sme--jbkk"
                  title="YouTube video"
                  className="absolute top-0 left-0 w-full h-80"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <h2 className="md:text-xl text-xl font-semibold md:!leading-[40px] text-[#000] mt-12">
                Stay Safe: Learn how to identify and avoid scams.
              </h2>
            </div>
          </div>
        </div>
      </div>

{/* How it works */}
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


{/* REquest acll back form  */}
<div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl">
    <div className="lg:max-w-7xl max-w-xl mx-auto">
      <div className="grid md:grid-cols-2 gap-24">
        
        {/* Form Section */}
        <div className="flex bg-black border border-white items-center lg:ml-auto h-[500px] w-full md:w-[450px] mx-auto">
          <form className="max-w-lg p-4 mx-auto w-full">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-[#FEB066]">
                REQUEST A CALL BACK
              </h3>
            </div>

            {/* Input Fields */}
            <input
              type="text"
              placeholder="First Name"
              className="w-full mb-6 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
            />
            <input
              type="email"
              placeholder="Last Name"
              className="w-full mb-6 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full mb-6 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
            />
            <textarea
              placeholder=""
              rows={6}
              className="w-full mb-6 text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-blue-500"
              defaultValue={""}
            />

            {/* Submit Button */}
            <div className="">
              <button
                type="button"
                className="w-max shadow-xl py-3 px-6 text-sm text-gray-800 font-semibold rounded-md bg-[#FEB066] hover:bg-[#FEB066] focus:outline-none"
              >
                Get Free Consulting
              </button>
            </div>
          </form>
        </div>
        
        {/* Document List Section */}
        <div className="text-left">
          <div className="bg-[#00BE5D] text-white p-3">
            <h2 className="text-2xl font-bold">
              Document Required For Shares Transmission
            </h2>
          </div>
          <ul className="space-y-8 mt-12 mb-6 text-gray-500 sm:text-md md:mb-8">
            <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
              <Image src={tick} alt="clearclaim" className="w-5 h-6" />
              Certified copy of death certificate.
            </li>
            <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
              <Image src={tick} alt="clearclaim" className="w-5 h-6" />
              Request application for the transmission from legal heir(s)
              or representatives.
            </li>
            <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
              <Image src={tick} alt="clearclaim" className="w-5 h-6" />
              Letter of Administration or Succession Certificate or
              Probate of Will.
            </li>
            <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
              <Image src={tick} alt="clearclaim" className="w-5 h-6" />
              Specimen signature of the successor(s).
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

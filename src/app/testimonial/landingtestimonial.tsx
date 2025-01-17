"use client";

import { useState, useEffect } from "react";
import eclipse from "../../../public/images/Ellipse.png";
import aiimg from "../../../public/images/AI-img.png";
import Image from "next/image";
import tick from "../../../public/images/tick.svg";

export default function LandingTestimonial() {
  const testimonials = [
    {
      content:
        "Very reliable, gives personal attention & above all, very reasonable charges.I have given them shares which are in IEPF for transferring into my demat account. At present after completing all documentation by them the matter is with IEPF for their clearance. My Best Wishes to Shrikant and his team.",
      author: "Vinayak Gaitonde",
      rating: 5, // Add ratings here
    },
    {
      content:
        "I'm based in Australia and had troubles dealing with insurance and EPF withdrawal remotely. Fortunately, I found clear claim that was the only service that offered to help me out. Their expertise in the processes involved helped me prepare the documentation upfront and made the claim process hassle-free. I highly recommend them!",
      author: "Piyush Dhimate",
      rating: 5, // Add ratings here
    },
    {
      content:
        "I had a great experience working with Clearclaim. They helped me recover my parents SBI Limited unclaimed shares and dividends from IEPF and convert them to DEMAT. Their team was very responsive and kept me updated throughout the process. I would definitely recommend their services to anyone looking to recover their shares.”",
      author: "Mukund Shah",
      rating: 5, // Add ratings here
    },
    {
      content:
        "Great service, quick response they helped me to recover my father physical shares. Highly recommended.",
      author: "RAKESH G PATIL",
      rating: 5, // Add ratings here
    },

    {
      content:
        "Mr.Srikant is a good person and guide us in a proper way with his Expertise in his business areas.  You may negotiate and go with them for your requirements.",
      author: "Rajagopalan V",
      rating: 5, // Add ratings here
    },

    {
      content:
        "Thanks team of clear claim.... Nice service as well as nice guidline and thx for sorting and clearing my case ... And thanks help us...",
      author: "INDRANEEL TAMBE",
      rating: 5, // Add ratings here
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3); // Default to 3 cards for desktop

  useEffect(() => {
    const updateVisibleCards = () => {
      // Set visible cards to 1 if screen width <= 768px (mobile)
      if (window.innerWidth <= 768) {
        setVisibleCards(1);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < visibleCards; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <>
      <div className="mt-20 p-8 bg-[#283655] max-w-6xl mx-auto overflow-hidden">
        <style jsx>{`
          @media (max-width: 768px) {
            .testimonial-card {
              height: auto; /* Adjust height dynamically */
              padding-bottom: 60px; /* Space for author and rating */
            }
            .testimonial-content {
              position: static; /* Avoid overlapping */
              margin-bottom: 20px; /* Space between content and footer */
            }
            .testimonial-author {
              position: relative; /* Keep footer at the bottom */
              text-align: center; /* Center-align author and rating */
            }
          }
        `}</style>

        <div className="mb-12 text-center">
          <h2 className="md:text-3xl text-xl font-semibold text-white">
            Google Reviews That Speak for Themselves
          </h2>
        </div>
        <div className="flex items-center gap-6">
          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            className="p-3 bg-white rounded-full shadow-lg text-[#283655] hover:bg-gray-200"
          >
            &lt;
          </button>

          {/* Testimonials */}
          <div className="flex gap-6 flex-1 overflow-hidden">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card relative flex-1 w-[300px] h-[450px] p-6 rounded-lg bg-gray-100 text-center flex flex-col justify-between"
              >
                <div className="testimonial-content">
                  <p className="text-gray-600 text-md leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>
                <div className="testimonial-author">
                  <hr className="my-4 border-t border-gray-300" />
                  <h1 className="text-gray-800 mt-2 text-lg font-bold">
                    {testimonial.author}
                  </h1>
                  <p className="text-yellow-500 font-semibold">
                    {"★".repeat(Math.floor(testimonial.rating)) +
                      "☆".repeat(5 - Math.floor(testimonial.rating))}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="p-3 bg-white rounded-full shadow-lg text-[#283655] hover:bg-gray-200"
          >
            &gt;
          </button>
        </div>
      </div>

{/* Scammers Exposed */}
      <div className="max-w-6xl mx-auto ">
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
              placeholder="Name"
              className="w-full mb-6 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-6 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full mb-6 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
            />
            <textarea
              placeholder="Message"
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

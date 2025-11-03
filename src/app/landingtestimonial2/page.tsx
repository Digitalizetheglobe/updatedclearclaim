"use client";

import { useState, useRef } from "react";
import eclipse from "../../../public/images/Ellipse.png";
import aiimg from "../../../public/images/AI-img.png";
import Image from "next/image";
import tick from "../../../public/images/tick.svg";
import google from "../../../public/images/google.webp";
import emailjs from "emailjs-com";

export default function LandingTestimonial2() {
  const formRef = useRef<HTMLFormElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_0m8kbz9", // Replace with your EmailJS service ID
        "template_foaef8d", // Replace with your EmailJS template ID
        formRef.current,
        "Fkjr_xe9jDFgk_BFj" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setToastMessage(
            "Thank you for your response. Our representative will contact you shortly."
          );
          setShowModal(true); // Show modal on success

          if (formRef.current) {
            formRef.current.reset(); // Ensure formRef.current is not null before calling reset()
          }
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setToastMessage("Failed to send the form. Try again.");
          setShowModal(true);
          setTimeout(() => setShowModal(false), 3000);
        }
      );
  };

  const reviews = [
    {
      name: "Vinayak Gaitonde",
      date: "22 January 2025",
      stars: 5,
      content:
        "Very reliable, gives personal attention & above all, very reasonable charges. I have given them shares which are in IEPF for transferring into my demat account. At present after completing all documentation by them the matter is with IEPF for their clearance. My Best Wishes to Shrikant and his team.",
    },
    {
      name: "Jayant V Patil",
      date: "a month ago",
      stars: 5,
      content:
        "Clear claim transferred my physical shares within given time, very professional, very prompt, overall a hassle-free experience, i highly recommend Clear claim for you share transfer and other related works.. thank u",
    },
    {
      name: "Rajagopalan V",
      date: "6 January 2025",
      stars: 5,
      content:
        "Mr. Srikant is a good person and guides us in a proper way with his expertise in his business areas. You may negotiate and go with them for your requirements.",
    },
    {
      name: "Piyush Dhimate",
      date: "4 January 2025",
      stars: 5,
      content:
        "I'm based in Australia and had troubles dealing with insurance and EPF withdrawal remotely. Fortunately, I found clear claim that was the only service that offered to help me out. Their expertise in the processes involved helped me prepare the documentation upfront. I highly recommend them!",
    },
    {
      name: "INDRANEEL TAMBE",
      date: "3 January 2025",
      stars: 4,
      content:
        "Thanks team of clear claim.... Nice service as well as nice guidance and thanks for sorting and clearing my case ... And thanks for helping us...",
    },
    {
      name: "Vinayak Gaitonde",
      date: "10 months ago",
      stars: 5,
      content:
        "Very reliable, gives personal attention & above all, very reasonable charges. I have given them shares which are in IEPF for transferring into my demat account. At present after completing all documentation by them the matter is with IEPF for their clearance. My Best Wishes to Shrikant and his team.",
    },
    {
      name: "Chetan",
      date: "10 months ago",
      stars: 5,
      content:
        "I recently got to know about Clearclaim and till the time I wasn’t aware of that we can claim our old unclaimed shares. I tried to reach them and explained my situation and asked for help. The process was smooth and transparent, with clear instructions provided at each step. The customer support team was very responsive, answering all my questions promptly. They also made sure to explain any paperwork and helped me complete it correctly. Although the process took a few weeks, they kept me updated throughout, and I received my shares without any issues. Their fees were reasonable, and I appreciated the upfront disclosure of all charges. I would definitely recommend their services to anyone looking to claim unclaimed shares.",
    },
    {
      name: "shahaji dudhabhate",
      date: "10 months ago",
      stars: 5,
      content:
        "Due to change in name and signature, my father-in-law's Reliance Company shares were stuck in the papers for many years, despite many attempts, they were repeatedly rejected. When I contacted the company Clear Claim on Facebook, they made my work very easy and at a low cost, their working method is very transparent. They are trustworthy people, if you have any work related to old shares, close your eyes and get it done from them. Thank you team🙏🙏🙏",
    },
  ];

  const renderStars = (count: number) => {
    return (
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <span key={i}>{i < count ? "⭐" : "☆"}</span>
        ))}
      </div>
    );
  };

  return (
    <>

      <div className="max-w-6xl mx-auto px-4 md:px-0">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="md:text-3xl text-xl font-semibold md:!leading-[55px] text-[#00BE5D]">
            <span className="text-[#283655]">What </span> Client Say
          </h2>
        </div>

        {/* Video Section */}
        <div className="flex justify-center">
          <div
            className="relative overflow-hidden rounded-md"
            style={{
              width: '650px',
              height: '370px',
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/yagxF8loMrM?si=VKRfV1CSjfXR7fCZ"
              title="YouTube video"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          {/* Outer container to capture clicks */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {toastMessage}
            </h2>
            <button
              onClick={() => setShowModal(false)} // Closes the modal only when clicked
              className="mt-3 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <section className="bg-gray-100 py-12 px-6 mt-10 mb-5">
        <div className="text-center mb-8">
          <h2 className="md:text-3xl text-xl font-semibold md:!leading-[55px] text-[#00BE5D] pt-6">
            <span className="text-[#283655]"> Google Reviews That </span> Speak
            for Themselves
          </h2>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="h-[500px] overflow-y-scroll rounded-lg bg-gray-200 shadow-md p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-lg p-4 shadow-sm flex flex-col hover:shadow-xl transition-shadow transform hover:scale-105 duration-300"
                  role="article"
                  aria-label={`Review by ${review.name}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {review.name}
                    </h3>
                    <Image src={google} alt="Google" width={48} height={24} />
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{review.date}</p>
                  {renderStars(review.stars)}
                  <p className="text-gray-700 text-sm flex-1">
                    {review.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scammers Exposed */}
      <div className="max-w-6xl mx-auto mt-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="md:text-3xl text-xl font-semibold md:!leading-[55px] text-[#00BE5D]">
            <span className="text-[#283655]">Physical shareholders - </span> Don't miss this video
          </h2>
        </div>
        <div className="flex justify-center">
          <div
            className="relative overflow-hidden rounded-md"
            style={{
              width: '650px',
              height: '370px',
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/wNqDCTfOwBI?si=z6DP9b3TH9rHnvZ8"
              title="YouTube video"
              className="absolute top-0 left-0 w-full h-96"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* <h2 className="md:text-xl text-xl font-semibold md:!leading-[40px] text-[#000] mt-12">
                Stay Safe: Learn how to identify and avoid scams.
              </h2> */}
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
      <div className="bg-white py-6 sm:py-8 lg:py-12 max-md:px-4">
        <div className="mx-auto max-w-screen-xl">
          <div className="lg:max-w-7xl max-w-xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20">
              {/* Form Section */}
              <div className="flex bg-black border border-white items-center lg:ml-auto h-[500px] w-full md:w-[450px] mx-auto py-0 sm:py-6">
                <form
                  ref={formRef}
                  onSubmit={sendEmail}
                  className="max-w-lg p-4 mx-auto max-md:px-4"
                >
                  <div className="mb-10">
                    <h3 className="text-3xl font-bold text-[#FEB066]">
                      Talk to experts – FREE
                    </h3>
                  </div>

                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    className="w-full mb-6 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
                    required
                  />
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    className="w-full mb-6 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
                    required
                  />

                  <div className="relative w-full mb-6">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 font-semibold">
                      +91
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full pl-14 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
                      maxLength={10} // Restrict to 10 digits
                      pattern="^\d{10}$" // Ensure exactly 10 digits
                      onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        target.value = target.value.replace(/\D/g, ""); // Remove non-numeric characters
                      }}
                      required
                      title="Phone number must be exactly 10 digits"
                    />
                  </div>

                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    className="w-full mb-6 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
                    required
                  />

                  <div className="flex items-top mb-6">
                    <input
                      type="checkbox"
                      id="agree"
                      name="agree"
                      className="w-4 h-4 mr-2 accent-[#FEB066] cursor-pointer"
                      required
                    />
                    <label htmlFor="agree" className="text-sm text-white">
                      I agree to receive updates on email or phone.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="text-white w-max bg-[#00BE5D] border border-[#00BE5D] tracking-wide rounded-md text-sm px-6 py-3 mt-2 
             hover:bg-white hover:text-[#00BE5D] hover:border-[#00BE5D] transition-all duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>

              {/* Document List Section */}
              <div className="text-left max-md:px-4">
                <div className="bg-[#00BE5D] text-white p-3 max-md:px-4">
                  <h2 className="text-2xl font-bold">
                    India’s No.1 shares recovery experts
                  </h2>
                </div>
                <ul className="space-y-6  text-gray-500 sm:text-md md:mb-4 p-4">
                  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
                    Old shares and dividends recovery
                  </li>
                  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
                    Physical shares to DEMAT conversion
                  </li>
                  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
                    Transmission of shares for death claims
                  </li>
                  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
                    Recovery of lost shares
                  </li>
                  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
                    Issue of duplicate shares
                  </li>
                  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
                    IEPF claims of shares
                  </li>
                  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
                    IEPF claim of dividends
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

"use client";

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";
import tick from "../../../public/images/tick.svg";
import map3 from "../../../public/images/geomatric.png";
import ContentSection from "./contentsection";

export default function IEPFClaim() {
  const formRef = useRef<HTMLFormElement>(null);
  const [showToast, setShowToast] = useState(false); // State to control toast visibility
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    // Get the phone number input value
    const phoneNumber = formRef.current.phoneNumber.value;

    // Validate phone number (must be exactly 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setMessage("Phone number must be exactly 10 digits.");
      setShowToast(true);

      // Hide the toast after 3 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return; // Stop form submission if validation fails
    }

    // If validation passes, proceed with form submission
    emailjs
      .sendForm(
        "service_0m8kbz9", // Replace with your Email.js service ID
        "template_gs8t31r", // Replace with your Email.js template ID
        formRef.current,
        "Fkjr_xe9jDFgk_BFj" // Replace with your public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setMessage("Your message has been sent successfully!");
          setShowToast(true); // Show toast notification
          if (formRef.current) formRef.current.reset();

          // Hide the toast after 3 seconds
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setMessage(
            "There was an error sending your message. Please try again."
          );
          setShowToast(true);

          setTimeout(() => {
            setShowToast(false);
          }, 3000);
        }
      );
  };

  return (
    <>
      <div
        className="object-cover overflow-hidden min-h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${map3.src})` }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="max-md:order-1">
              <div className="max-w-xl bg-[#00BE5D] mt-12">
                <h2 className="md:text-2xl text-xl font-semibold md:!leading-[55px] text-white pt-2 pb-2 p-4">
                  India’s No.1 shares recovery experts
                </h2>
              </div>
              <div>
                <ul className="space-y-4 p-12">
                  <li className="flex items-center gap-3 text-md text-white">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
                    Old shares and dividends recovery
                  </li>
                  <li className="flex items-center gap-3 text-md text-white">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
                    Physical shares to DEMAT conversion
                  </li>
                  <li className="flex items-center gap-3 text-md text-white">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
                    Transmission of shares for death claims
                  </li>
                  <li className="flex items-center gap-3 text-md text-white">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
                    Recovery of lost shares
                  </li>
                  <li className="flex items-center gap-3 text-md text-white">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
                    Issue of duplicate shares
                  </li>
                  <li className="flex items-center gap-3 text-md text-white">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
                    IEPF claims of shares
                  </li>
                  <li className="flex items-center gap-3 text-md text-white">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
                    IEPF claim of dividends
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex bg-black border border-white items-center justify-center md:w-8/12 lg:ml-auto relative max-md:px-4 max-md:mt-8">
              {showToast && (
                <div className="absolute top-[-40px] left-1/4 transform -translate-x-1/2 bg-green-600 text-white py-2 px-6 rounded-md shadow-md animate-fade-in w-[400px] text-center whitespace-nowrap">
                  {message}
                </div>
              )}
              <form
                ref={formRef}
                className="max-w-lg p-4 mx-auto max-md:px-4"
                onSubmit={handleSubmit}
              >
                <div className="mb-12">
                  <h3 className="text-3xl font-bold text-[#FEB066]">
                    REQUEST A CALL BACK
                  </h3>
                </div>

                <>
                  {/* First Name */}
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full mb-6 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
                    required
                  />

                  {/* Last Name */}
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full mb-6 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
                    required
                  />

                  {/* Phone Number */}
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="w-full mb-6 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
                    required
                  />

                  {/* City */}
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    className="w-full mb-6 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
                    required
                  />
                </>

                <div className="">
                  <button
                    type="submit"
                    className="w-max shadow-xl py-3 px-6 text-sm text-gray-800 font-semibold rounded-md bg-[#FEB066] hover:bg-[#FEB066] focus:outline-none"
                  >
                    Get Free Consulting
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ContentSection />

    </>
  );
}
"use client";

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";
import tick from "../../../public/images/tick.svg";
import map3 from "../../../public/images/geomatric.png";
import ContentSection from "./contentsection";
import ScrollButton from "@/components/scrollbutton";


export default function IEPFClaim() {
  const formRef = useRef<HTMLFormElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_4fca0ux", // Replace with your EmailJS service ID
        "template_0esr8bw", // Replace with your EmailJS template ID
        formRef.current,
        "Ycds2m4eCIak1IOcz" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setToastMessage("Thank you for your response. Our representative will contact you shortly.");
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

  return (
    <>
<ScrollButton/>
    {/* Modal Popup */}
    {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{toastMessage}</h2>
            <button
              onClick={() => setShowModal(false)}
              className="mt-3 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              OK
            </button>
          </div>
        </div>
      )}
     <div
  className="object-cover overflow-hidden min-h-screen flex items-center justify-center"
  style={{ backgroundImage: `url(${map3.src})` }} // Corrected template literal
>

        <div className="grid md:grid-cols-2 gap-16 items-center">
  {/* Content Section */}
  <div >
    <div className="max-w-xl bg-[#00BE5D] mt-12">
      <h2 className="md:text-2xl text-xl font-semibold md:!leading-[55px] text-white pt-2 pb-2 p-4">
      India’s No.1 Shares Recovery Experts
      </h2>
    </div>
    <div >
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

          {/* Form Section */}
          <div className="flex bg-black border border-white items-center justify-center md:w-8/12 lg:ml-auto relative max-md:px-4 max-md:mt-8 min-h-[400px] w-full md:min-w-[350px] mb-8">
            <form ref={formRef} onSubmit={sendEmail} className="max-w-lg p-4 mx-auto max-md:px-4">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-[#FEB066] text-center">
                  Talk to experts – FREE
                </h3>
              </div>

              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                className="w-full mb-4 text-gray-800 rounded-md py-2 px-4 border text-sm outline-blue-500"
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                className="w-full mb-4 text-gray-800 rounded-md py-2 px-4 border text-sm outline-blue-500"
                required
              />

              <div className="relative w-full mb-4">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 font-semibold">
                  +91
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full pl-14 text-gray-800 rounded-md py-2 px-4 border text-sm outline-blue-500"
                  maxLength={10}
                  pattern="^\d{10}$"
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    target.value = target.value.replace(/\D/g, "");
                  }}
                  required
                  title="Phone number must be exactly 10 digits"
                />
              </div>

              <input
                type="text"
                name="city"
                placeholder="City"
                className="w-full mb-4 text-gray-800 rounded-md py-2 px-4 border text-sm outline-blue-500"
                required
              />

              <div className="flex items-top mb-4">
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
        </div>
      </div>

      <ContentSection />
    </>
  );
}

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
  
    const formData = new FormData(formRef.current);
  
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const city = formData.get("city") as string;
    const agree = formData.get("agree") as string;
  
    // Validate phone number (must be exactly 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setMessage("Phone number must be exactly 10 digits.");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return; // Stop form submission if validation fails
    }
  
    // Ensure required fields are not empty
    if (!firstName || !lastName || !phoneNumber || !city || !agree) {
      setMessage("All fields are required.");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }
  
    // If validation passes, proceed with form submission
    emailjs
      .sendForm(
        "service_4fca0ux", // Replace with your Email.js service ID
        "template_0esr8bw", // Replace with your Email.js template ID
        formRef.current,
        "Ycds2m4eCIak1IOcz" // Replace with your public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setMessage("Your message has been sent successfully!");
          setShowToast(true);
          if (formRef.current) formRef.current.reset();
  
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setMessage("There was an error sending your message. Please try again.");
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
  style={{ backgroundImage: `url(${map3.src})` }} // Corrected template literal
>

        <div className="grid md:grid-cols-2 gap-8 items-center">
  {/* Content Section */}
  <div>
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

  {/* Form Section */}
  {/* Form Section */}
  <div className="flex bg-black border border-white items-center justify-center md:w-8/12 lg:ml-auto relative max-md:px-4 max-md:mt-8 min-h-[400px] w-full md:min-w-[350px]">
  {showToast && (
    <div className="absolute top-[-40px] left-1/4 transform -translate-x-1/2 bg-green-600 text-white py-2 px-6 rounded-md shadow-md animate-fade-in w-[400px] text-center whitespace-nowrap">
      {message}
    </div>
  )}
  <form ref={formRef} className="max-w-lg p-4 mx-auto max-md:px-4" onSubmit={handleSubmit}>
    <div className="mb-12">
      <h3 className="text-3xl font-bold text-[#FEB066]">Talk to experts – FREE</h3>
    </div>

    {/* First Name */}
    <input
       id="first_name"
       name="first_name"
       type="text"
       placeholder="Enter First Name"
      className="w-full mb-6 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
      required
    />

    {/* Last Name */}
    <input
      id="phone"
      name="phone"
      type="tel"
      placeholder="Enter Phone Number"
      className="w-full mb-6 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
      required
    />

    {/* Phone Number Input with +91 Prefix */}
    <div className="relative w-full mb-6">
      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 font-semibold">
        +91
      </span>
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone Number"
        className="w-full pl-14 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
        required
      />
    </div>

    {/* City */}
    <input
    id="city"
    name="city"
    type="text"
    placeholder="Enter City"
      className="w-full mb-6 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
      required
    />

    {/* Checkbox for Consent */}
    <div className="flex items-center mb-6">
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

    {/* Submit Button */}
    <div>
      <button
        type="submit"
        className="w-max shadow-xl py-3 px-6 text-sm text-gray-800 font-semibold rounded-md bg-[#FEB066] hover:bg-[#FEB066] focus:outline-none"
      >
        Submit
      </button>
    </div>
  </form>
</div>

</div>

      </div>

      <ContentSection />
    </>
  );
}
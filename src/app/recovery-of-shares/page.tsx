"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import tick from "../../../public/images/tick.svg";
import map3 from "../../../public/images/geomatric.png";
import ContentSection from "./contentsection";
import ScrollButton from "@/components/scrollbutton";

export default function IEPFClaim() {
  const formRef = useRef<HTMLFormElement>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current || formSubmitting) return;

    const form = formRef.current;
    const payload = {
      name: (form.querySelector('[name="name"]') as HTMLInputElement)?.value?.trim() ?? "",
      email: (form.querySelector('[name="email"]') as HTMLInputElement)?.value?.trim() ?? "",
      subject: (form.querySelector('[name="subject"]') as HTMLInputElement)?.value?.trim() ?? "",
      message: (form.querySelector('[name="message"]') as HTMLTextAreaElement)?.value?.trim() ?? "",
    };

    setFormSubmitting(true);
    fetch("/api/share-recovery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText || "Request failed");
        return res.json();
      })
      .then(() => {
        setToastMessage("Your message has been sent successfully!");
        setShowToast(true);
        form.reset();
        setTimeout(() => setShowToast(false), 3000);
      })
      .catch(() => {
        setToastMessage("There was an error sending your message. Please try again.");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      })
      .finally(() => setFormSubmitting(false));
  };

  return (
    <>
      <ScrollButton />
      <div
        className="object-cover overflow-hidden min-h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${map3.src})` }}
      >
        <div className="grid md:grid-cols-2 gap-16 items-center max-md:flex max-md:flex-col max-md:gap-6 max-md:px-4">
          {/* Content Section */}
          <div>
            <div className="max-w-xl bg-[#00BE5D] mt-12">
              <h2 className="md:text-2xl text-xl font-semibold md:!leading-[55px] text-white pt-2 pb-2 p-4">
                India's No.1 Shares Recovery Experts
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
          <div className="mt-2 flex bg-black border border-white items-center justify-center md:w-8/12 lg:ml-auto relative max-md:w-full max-md:px-6 max-md:py-6 max-md:mt-4 min-h-[400px] md:min-w-[450px] mb-8">
            <div className="max-w-xl p-4 mx-auto max-md:px-4 max-md:w-full">
              {showToast && (
                <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 bg-green-600 text-white py-2 px-6 rounded-md shadow-md animate-fade-in max-w-[90%] text-center z-10">
                  {toastMessage}
                </div>
              )}
                <div className="mb-12">
                  <h3 className="text-3xl font-bold text-[#FEB066]">
                    REQUEST A CALL BACK
                  </h3>
                </div>
              <form
                ref={formRef}
                className="max-w-lg mx-auto max-md:px-4 max-md:w-full"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full mb-6 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500 bg-white"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full mb-6 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500 bg-white"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full mb-6 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500 bg-white"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  required
                  className="w-full mb-6 text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-blue-500 bg-white"
                  defaultValue={""}
                />
                <div>
                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="w-max shadow-xl py-3 px-6 text-sm text-gray-800 font-semibold rounded-md bg-[#FEB066] hover:bg-[#FEB066] focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formSubmitting ? "Sending…" : "Get Free Consulting"}
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

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
    const phoneRaw = (form.querySelector('[name="mobile"]') as HTMLInputElement)?.value?.replace(/\D/g, "") ?? "";
    const payload = {
      name: (form.querySelector('[name="name"]') as HTMLInputElement)?.value?.trim() ?? "",
      mobileNumber: phoneRaw ? `+91 ${phoneRaw}` : "",
      email: (form.querySelector('[name="email"]') as HTMLInputElement)?.value?.trim() ?? "",
      city: (form.querySelector('[name="city"]') as HTMLInputElement)?.value?.trim() ?? "",
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
        className="object-cover overflow-hidden"
        style={{ backgroundImage: `url(${map3.src})` }}
      >
        <div className="md:min-h-screen flex items-center max-md:py-8">
          <div className="grid md:grid-cols-2 gap-16 items-center w-full max-md:gap-8 max-md:px-4">
            {/* Content Section - no left padding so content touches screen edge */}
            <div className="max-md:order-1">
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
          <div className="w-full max-w-[480px] mx-auto flex flex-col bg-black border border-white justify-center relative py-8 px-6 md:py-10 md:px-8 lg:ml-auto mb-8">
            {showToast && (
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-green-600 text-white py-3 px-6 rounded-md shadow-lg text-center text-sm min-w-[280px] max-w-[calc(100%-2rem)] z-20">
                {toastMessage}
              </div>
            )}
            <form
              ref={formRef}
              className="w-full max-w-lg mx-auto"
              onSubmit={handleSubmit}
            >
              <div className="mb-8 md:mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-[#FEB066]">
                  REQUEST A CALL BACK
                </h3>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full mb-6 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500 bg-white"
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile number"
                maxLength={10}
                pattern="^\d{10}$"
                required
                onInput={(e) => {
                  const target = e.target as HTMLInputElement;
                  target.value = target.value.replace(/\D/g, "");
                }}
                className="w-full mb-6 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500 bg-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email id"
                required
                className="w-full mb-6 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500 bg-white"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                required
                className="w-full mb-6 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500 bg-white"
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

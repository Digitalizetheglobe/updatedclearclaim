"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import tick from "../../../public/images/tick.svg";
import map3 from "../../../public/images/geomatric.png";
import Content from "./content";
import ScrollButton from "@/components/scrollbutton";

export default function IEPFClaim() {
  const formRef = useRef<HTMLFormElement>(null);
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("");
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
        setMessage("Your message has been sent successfully!");
        setShowToast(true);
        if (formRef.current) formRef.current.reset();
        setTimeout(() => setShowToast(false), 3000);
      })
      .catch(() => {
        setMessage("There was an error sending your message. Please try again.");
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
        <div className="md:h-screen">
          <div className="grid md:grid-cols-2 items-center h-full">
            <div className="max-md:order-1">
              <div className="max-w-xl bg-[#00BE5D] mt-12">
                <h2 className="md:text-2xl text-xl font-semibold md:!leading-[55px] text-white pt-2 pb-2 p-4">
                  India's No.1 IEPF consultant
                </h2>
              </div>
              <div>
                <ul className="space-y-4 p-12">
                  <li className="flex items-center gap-3 text-md text-white">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" width={20} height={24} />
                    Recover of shares from IEPF
                  </li>
                  <li className="flex items-center gap-3 text-md text-white">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" width={20} height={24} />
                    Recovery of unclaimed dividends from IEPF
                  </li>
                  <li className="flex items-center gap-3 text-md text-white">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" width={20} height={24} />
                    Transmission of shares and recovery from IEPF in death
                    claims
                  </li>
                  <li className="flex items-center gap-3 text-md text-white">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" width={20} height={24} />
                    Issue of duplicate and recovery from IEPF
                  </li>
                  <li className="flex items-center gap-3 text-md text-white">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" width={20} height={24} />
                    Recovery of share transferred from DEMAT to IEPF
                  </li>
                  <li className="flex items-center gap-3 text-md text-white">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" width={20} height={24} />
                    Discover your forgotten shares/dividends transferred to IEPF
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex bg-black border border-white items-center md:w-8/12 lg:ml-auto relative max-md:px-4">
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

                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full mb-6 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full mb-6 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full mb-6 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  className="w-full mb-6 text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-blue-500"
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

      <Content />
    </>
  );
}

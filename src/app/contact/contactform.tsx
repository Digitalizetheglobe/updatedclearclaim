"use client";

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import phone from "../../../public/images/phone-call.png";
import email from "../../../public/images/email.png";
import address from "../../../public/images/location.png";
import Image from "next/image";


export default function ContactForm() {
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

  return (
    <>
      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {toastMessage}
            </h2>
            <button
              onClick={() => setShowModal(false)}
              className="mt-3 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Contact Form */}
      <div className="mb-24 relative">
        <div className="mb-6 px-4">
          <div className="pb-16 mx-auto max-w-5xl shadow-lg px-6 sm:px-12 lg:px-24 bg-[#161d34] rounded-md relative">
            <h2 className="text-4xl text-center text-white font-bold pt-16">
              Contact Us
            </h2>
            <div className="flex justify-center mt-2">
              <div className="h-[4px] w-[80px] bg-[#00BE5D]"></div>
            </div>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div>
                <label
                  htmlFor="first_name"
                  className="text-white text-sm block mb-2"
                >
                  First Name
                </label>
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  placeholder="Enter First Name"
                  className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="text-white text-sm block mb-2"
                >
                  Last Name
                </label>
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  placeholder="Enter Last Name"
                  className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                  required
                />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="phone"
                  className="text-white text-sm block mb-2"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter Phone Number"
                  maxLength={10} // Restricts input to 10 characters
                  pattern="^\d{10}$" // Ensures exactly 10 digits
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    target.value = target.value.replace(/\D/g, ""); // Remove non-numeric characters
                  }}
                  className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                  required
                  title="Phone number must be exactly 10 digits"
                />
              </div>

              <div className="col-span-full">
                <label htmlFor="city" className="text-white text-sm block mb-2">
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Enter City"
                  className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                  required
                />
              </div>

              <div className="col-span-full">
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
  Get Free Consulting
</button>

            </form>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white">
          <div className="p-6">
            <div className="flex items-center my-6">
              <div className=" flex items-center justify-center">
                {/* Envelope SVG */}
                <Image src={address} alt=""/>
              </div>
              <div className="ml-4">
                <a
                  href="https://www.google.com/maps/search/?q=Office+No+C-201,+2nd+Floor,+Vantage+Tower,+Bramha+Corp,+Opposite+to+Bavdhan+Police+Chowky,+NDA+Pashan+Road,+Bavdhan,+Pune+-+411021"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="text-black text-lg font-bold">Address</h1>
                  <p className="text-gray-500 hover:text-[#00BE5D]">Office No C-201, 2nd Floor</p>
                  <p className="text-gray-500 hover:text-[#00BE5D]">
                    Vantage Tower, Bavdhan, Pune-411021
                  </p>
                </a>
              </div>
            </div>
            <hr />

            {/* Mail Section */}
            <div className="flex items-center my-6">
              <div className=" flex items-center justify-center">
                {/* Envelope SVG */}
                <Image src={email} alt="" />
              </div>
              <div className="ml-4">
                <h1 className="text-black text-lg font-bold">Mail</h1>
                <a href="mailto:sales@clearclaim.in">
                  <p className="text-gray-500 hover:text-[#00BE5D]">sales@clearclaim.in</p>
                </a>
              </div>
            </div>
            <hr />

            {/* Phone Section */}
            <div className="flex items-center mt-6">
              <div className=" flex items-center justify-center ">
                {/* Phone SVG */}
              <Image src={phone} alt=""/>
              </div>
              <div className="ml-4">
                <h1 className="text-black text-lg font-bold">Phone</h1>
                <a href="tel:+919156701900">
                  <p className="text-gray-500 hover:text-[#00BE5D]">+91 9156701900</p>
                </a>
                <a href="tel:+919970651900">
                  <p className="text-gray-500 hover:text-[#00BE5D]">+91 9970651900</p>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7566.28390458752!2d73.77102345228194!3d18.52248629551362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb9349e1eeb%3A0xf79a3b1ab0fcc2a6!2sClearclaim%20Ventures%20Private%20Limited!5e0!3m2!1sen!2sus!4v1734504174452!5m2!1sen!2sus"
              width="100%"
              height="370"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clearclaim Ventures Location"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

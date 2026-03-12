"use client";

import React, { useState, useRef } from "react";
import aiimg from "../../../public/images/AI-img.png";
import Image from "next/image";
import tick from "../../../public/images/tick.svg";
import google from '../../../public/images/google.webp'

export default function LandingTestimonial() {
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});
  const [visibleCount, setVisibleCount] = useState(3);

  const formRefTestimonial = useRef<HTMLFormElement>(null);
  const [showToastTestimonial, setShowToastTestimonial] = useState(false);
  const [messageTestimonial, setMessageTestimonial] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);

  const handleSubmitTestimonial = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRefTestimonial.current || formSubmitting) return;

    const form = formRefTestimonial.current;
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
        setMessageTestimonial("Your message has been sent successfully!");
        setShowToastTestimonial(true);
        if (formRefTestimonial.current) formRefTestimonial.current.reset();
        setTimeout(() => setShowToastTestimonial(false), 3000);
      })
      .catch(() => {
        setMessageTestimonial("There was an error sending your message. Please try again.");
        setShowToastTestimonial(true);
        setTimeout(() => setShowToastTestimonial(false), 3000);
      })
      .finally(() => setFormSubmitting(false));
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
      name: "RAKESH G PATIL",
      date: "10 months ago",
      stars: 5,
      content:
        "Great service, quick response they helped me to recover my father physical shares. Highly recommended.",
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
    {
      name: "Mukund Shah",
      date: "10 months ago",
      stars: 5,
      content:
        "I had a great experience working with Clearclaim. They helped me recover my parents SBI Limited unclaimed shares and dividends from IEPF and convert them to DEMAT. Their team was very responsive and kept me updated throughout the process. I would definitely recommend their services to anyone looking to recover their shares.",
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

  const toggleReadMore = (index: number) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the boolean value
    }));
  };

  const loadMore = () => {
    setVisibleCount(reviews.length);
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
      



      <section className="bg-gray-100 py-12 px-6 mt-10 mb-5">
        <div className="text-center mb-8">
          <h2 className="md:text-3xl text-xl font-semibold md:!leading-[55px] text-[#00BE5D] pt-6">
            <span className="text-[#283655]"> Google Reviews That </span> Speak for Themselves
          </h2>
        </div>
        <div className="relative max-w-6xl mx-auto">
          {/* Mobile: Show limited testimonials with Load More */}
          <div className="sm:hidden flex flex-col gap-6 px-6">
            {reviews.slice(0, visibleCount).map((review, index) => (
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
                  {expandedReviews[index]
                    ? review.content
                    : `${review.content.substring(0, 100)}...`}
                </p>
                <button
                  className="mt-2 text-green-500 text-sm font-semibold hover:underline self-start"
                  onClick={() => toggleReadMore(index)}
                >
                  {expandedReviews[index] ? "Read Less" : "Read More"}
                </button>
              </div>
            ))}
            {visibleCount < reviews.length && (
              <button
                onClick={loadMore}
                className="mt-4 px-6 py-3 bg-[#00BE5D] text-white rounded-md font-semibold hover:bg-[#00a050] transition-colors duration-300 self-center"
              >
                Load More
              </button>
            )}
          </div>
          {/* Desktop: Show all reviews in scrollable container */}
          <div className="hidden sm:block h-[500px] overflow-y-scroll rounded-lg bg-gray-200 shadow-md p-6">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
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
                    {expandedReviews[index]
                      ? review.content
                      : `${review.content.substring(0, 100)}...`}
                  </p>
                  <button
                    className="mt-2 text-green-500 text-sm font-semibold hover:underline self-start"
                    onClick={() => toggleReadMore(index)}
                  >
                    {expandedReviews[index] ? "Read Less" : "Read More"}
                  </button>
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
            <span className="text-[#283655]">Physical shareholders - </span> Dont miss this video
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
            <div className="grid lg:grid-cols-[1.3fr_1fr] items-center gap-12 lg:gap-16">

              {/* Left Side: Form Section - EmailJS */}
              <div className="flex bg-black border border-white items-center lg:ml-auto min-h-[500px] w-full md:w-[450px] mx-auto py-0 sm:py-6 relative">
                {showToastTestimonial && (
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white py-2 px-6 rounded-md shadow-md w-[90%] max-w-[400px] text-center text-sm z-10">
                    {messageTestimonial}
                  </div>
                )}
                <form
                  ref={formRefTestimonial}
                  className="max-w-lg p-4 mx-auto max-md:px-4 w-full"
                  onSubmit={handleSubmitTestimonial}
                >
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-[#FEB066]">Talk to experts – FREE</h3>
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full mb-4 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500 bg-white"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full mb-4 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500 bg-white"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full mb-4 text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500 bg-white"
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    className="w-full mb-4 text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-blue-500 bg-white"
                    defaultValue={""}
                  />
                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="w-max shadow-xl py-3 px-6 text-sm text-gray-800 font-semibold rounded-md bg-[#FEB066] hover:bg-[#FEB066] focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formSubmitting ? "Sending…" : "Get Free Consulting"}
                  </button>
                </form>
              </div>


              {/* Right Side: Text Content */}
              <div className="text-left flex flex-col justify-center pl-6 md:pl-10 lg:pl-14 max-md:px-4">
                <div className="bg-[#00BE5D] text-white py-4 px-6">
                  <h2 className="text-2xl font-bold">India’s No.1 Shares Recovery Experts</h2>
                </div>
                <ul className="space-y-6 mt-8 text-gray-600 text-[16px]">
                  <li className="flex gap-3">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" /> Old shares and dividends recovery
                  </li>
                  <li className="flex gap-3">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" /> Physical shares to DEMAT conversion
                  </li>
                  <li className="flex gap-3">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" /> Transmission of shares for death claims
                  </li>
                  <li className="flex gap-3">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" /> Recovery of lost shares
                  </li>
                  <li className="flex gap-3">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" /> Issue of duplicate shares
                  </li>
                  <li className="flex gap-3">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" /> IEPF claims of shares
                  </li>
                  <li className="flex gap-3">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" /> IEPF claim of dividends
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

import React, { useState } from "react";
import Image from "next/image";
import google from "../../../public/images/google.webp";
import Howwework from "../howwework/howwework";

export default function ReviewSection() {
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


const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});

const toggleReadMore = (index: number) => {
  setExpandedReviews((prev) => ({
    ...prev,
    [index]: !prev[index], // Toggle the boolean value
  }));
};

  

  return (
    <>
    <section className="bg-gray-100 py-12 px-6 mt-10 mb-5">
      <div className="text-center mb-8">
        <h2 className="md:text-3xl text-xl font-semibold md:!leading-[55px] text-[#00BE5D] pt-6">
          <span className="text-[#283655]">Google Reviews That</span> Speak for Themselves
        </h2>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="h-[500px] overflow-y-scroll rounded-lg bg-gray-200 shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

    <Howwework/>
    </>
  );
}

import React, { useState } from "react";
import Image from "next/image";
import google from "../../../public/images/google.webp";

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
      name: "Vicky Jain",
      date: "17 January 2025",
      stars: 5,
      content:
        "Great service, quick response they helped me to recover my father's physical shares. Highly recommended.",
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
      name: "Saikat Dastidar",
      date: "2 January 2025",
      stars: 5,
      content:
        "Great service, quick response they helped me to recover my father's physical shares. Highly recommended.",
    },
    {
      name: "Saikat Dastidar",
      date: "2 January 2025",
      stars: 5,
      content:
        "Great service, quick response they helped me to recover my father's physical shares. Highly recommended.",
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
  );
}

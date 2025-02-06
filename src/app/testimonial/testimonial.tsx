import React from "react";
import Image from "next/image";
import google from '../../../public/images/google.webp';

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
  ];

  const renderStars = (count) => {
    return (
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill={i < count ? "#FFD700" : "#E5E7EB"} // Gold for filled stars, light gray for empty stars
            aria-label={i < count ? "Filled star" : "Empty star"}
          >
            <path d="M12 2l2.9 5.9 6.5 1-4.7 4.6 1.1 6.4-5.8-3-5.8 3 1.1-6.4-4.7-4.6 6.5-1L12 2z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="bg-gray-100 py-12 px-6 mt-10 mb-5">
      <div className="text-center mb-8">
        <h2 className="md:text-3xl text-xl font-semibold md:!leading-[55px] text-[#00BE5D] pt-6">
          <span className="text-[#283655]"> Google Reviews That </span> Speak for Themselves
        </h2>
      </div>
      <div className="relative max-w-6xl mx-auto">
        <div className="h-[500px] overflow-y-scroll rounded-lg bg-gray-200 shadow-md p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <p className="text-gray-700 text-sm flex-1">{review.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

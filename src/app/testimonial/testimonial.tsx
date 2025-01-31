import React from "react";
import Image from "next/image";
import google from '../../../public/images/google.webp'

export default function ReviewSection() {
  const reviews = [
    {
      name: "Vinayak Gaitonde",
      date: "22 January 2025",
      stars: 5,
      content:
        "Very reliable, gives personal attention & above all, very reasonable charges.I have given them shares which are in IEPF for transferring into my demat account. At present after completing all documentation by them the matter is with IEPF for their clearance. My Best Wishes to Shrikant and his team.",
    },
    {
      name: "Vicky Jain",
      date: "17 January 2025",
      stars: 5,
      content:
        "Great service, quick response they helped me to recover my father physical shares. Highly recommended.",
    },
    {
      name: "Rajagopalan V",
      date: "6 January 2025",
      stars: 5,
      content:
        "Mr.Srikant is a good person and guide us in a proper way with his Expertise in his business areas. You may negotiate and go with them for your requirements.",
    },
    {
      name: "Piyush Dhimate",
      date: "4 January 2025",
      stars: 5,
      content:
        "I'm based in Australia and had troubles dealing with insurance and EPF withdrawal remotely. Fortunately, I found clear claim that was the only service that offered to help me out. Their expertise in the processes involved helped me prepare the documentation upfront. I highly recommend them!.",
    },
    {
      name: "INDRANEEL TAMBE",
      date: "3 January 2025",
      stars: 4,
      content:
        "Thanks team of clear claim.... Nice service as well as nice guidline and thx for sorting and clearing my case ... And thanks help us...",
    },
    {
      name: "Saikat Dastidar",
      date: "2 January 2025",
      stars: 5,
      content:
        "Great service, quick response they helped me to recover my father physical shares. Highly recommended.",
    },
    {
      name: "RAJESH TATED",
      date: "29 December 2024",
      stars: 5,
      content:
        "Company is doing a good job with constant follow up.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Google Reviews That Speak for Themselves</h2>
      </div>
<div className="relative max-w-6xl mx-auto">
        <div className="h-[500px] overflow-y-scroll rounded-lg bg-grey shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg p-4 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {review.name}
                  </h3>
                  <Image
                    src={google}
                    alt="Google"
                    className="w-12 h-6"
                  />
                </div>
                <p className="text-sm text-gray-500 mb-2">{review.date}</p>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={i < review.stars ? "gold" : "gray"}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.75.75 0 011.04 0l1.755 2.26a.75.75 0 00.57.3l2.698.02a.75.75 0 01.548 1.277l-2.158 1.89a.75.75 0 00-.24.669l.5 2.698a.75.75 0 01-1.11.79l-2.39-1.33a.75.75 0 00-.75 0l-2.39 1.33a.75.75 0 01-1.11-.79l.5-2.698a.75.75 0 00-.24-.669l-2.158-1.89a.75.75 0 01.548-1.277l2.698-.02a.75.75 0 00.57-.3l1.755-2.26z"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm">{review.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

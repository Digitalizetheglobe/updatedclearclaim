"use client";

import Image from "next/image";
import blogbg from "../../../public/blogs/blogbg.png";

export default function ClearclaimVenturesPrivateLimited() {
  return (
    <>
      <main>
        <div>
          <header className="mx-auto mt-28 max-w-screen-lg rounded-t-lg bg-white pt-16 text-center shadow-lg">
            <p className="text-gray-500">Published Aug 12, 2024</p>
            <h1 className="mt-2 text-xl font-bold text-gray-900 sm:text-2xl max-w-2xl mx-auto">
              Clearclaim Ventures Private Limited: How It Started{" "}
            </h1>
            {/* <p className="mt-6 text-md text-gray-500">
              Recently, introduced in the Lok Sabha, the Banking Laws
              (Amendment) Bill 2024 brought in some drastic changes in the
              Indian scenario of unclaimed dividends and shares.
            </p> */}

            <Image
              className="-z-10 absolute top-0 left-0 mt-10 h-96 w-full object-cover"
              src={blogbg} 
              alt=""
            />
          </header>

          <div className="mx-auto max-w-screen-lg space-y-6 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg">
            <blockquote className=" border-[#00BE5D] border-l-4 px-4">
              Clearclaim is making waves in the field of unclaimed funds
              recovery domain in India. With a focus on transparency,
              efficiency, and customer satisfaction, Clearclaim is
              revolutionizing the way claims are handled. Let’s delve into their
              journey and milestones.
              {/* <span className="whitespace-nowrap text-sm">— Daniel Lehmer</span> */}
            </blockquote>

            <h2 className="text-xl font-semibold">
              The Clearclaim Story Roadmap
            </h2>
            <h2 className="text-xl font-semibold">1. Service to humanity:</h2>

            <li>
              Founders of Clearclaim had a good financial knowledge of various
              financial instruments hence they started helping friends and
              family to recover stuck funds as a service to humanity.
            </li>
            <li>
              Later with the word of mouth they started receiving numerous
              enquiries for helping out to recover stuck funds.
            </li>
            <li>
              This service to humanity later turned into an business idea and
              now it’s helping people across the world.
            </li>

            <h2 className="text-xl font-semibold">
              2. Inception and Research:
            </h2>
            <li>
              Clearclaim took its first strategic step of conducting extensive
              surveys and research, gathering insights from over 15,000
              respondents on its then portal claimwala.in in the year of 2018.
            </li>

            <li>
              Collaborated with 50+ industry experts to design innovative
              solutions in the field of unclaimed funds recovery domain.
            </li>

            <h2 className="text-xl font-semibold">3. Company Establishment:</h2>

            <li>
              In December 2021, Clearclaim Ventures Private Limited was
              officially registered in ROC Pune.
            </li>

            <li>
              Introduced the Claim+ service in Jan 2022 to help people recover
              their stuck funds and shares.
            </li>
            <li>
              Launched the clearclaim.in a full-fledged website on 1st May 2022.{" "}
            </li>

            <h2 className="text-xl font-semibold">3. Achievements:</h2>

            <li>
              Successfully settled over Rs. 1+ Crore worth claims through Claim+
              within first 6 months of operations.
            </li>

            <li>
              Successfully settled Rs. 10+ Crore worth claims by July 2023.
            </li>
            <li>
              Successfully settled Rs. 50+ Crore worth claims by July 2024.
            </li>

            <h2 className="text-xl font-semibold">
            Clearclaim’s Vision
            </h2>

            <li>
            <b>Building Trust:</b> Clearclaim aims to be the trusted single-window platform for claim settlement.
            </li>

            <li>
            <b>Financial Safety:</b> Enhancing financial safety for individuals and businesses.
            </li>
            <li>
            <b>Quality of Life:</b> Contributing to improved quality of life.
            </li>
            <li>
            <b>Economic Development: </b>Unlocking hidden funds and bring them to mainstream economy, especially in cases like IEPF claims.
            </li>

            <h2 className="text-xl font-semibold">Advisory Board</h2>
            <li>
            Clearclaim benefits from the expertise of industry professionals from various industries with combined industry experience of 150+ years. You can refer the advisory board here  https://clearclaim.in/about/
            </li>

            <h2 className="text-xl font-semibold">It’s just the beginning</h2>
            <p>
            Clearclaim’s commitment to financial safety and societal well-being is commendable. As they continue to innovate in funds recovery domain, we can expect even greater strides in the claim settlement landscape.            </p>
          </div>
        </div>
      </main>
      <div className="w-fit mx-auto mt-10 flex space-x-2">
        <div className="h-0.5 w-2 bg-gray-600" />
        <div className="h-0.5 w-32 bg-gray-600" />
        <div className="h-0.5 w-2 bg-gray-600" />
      </div>
      <aside
        aria-label="Recent Posts"
        className="mx-auto mt-10 max-w-screen-xl py-20"
      ></aside>
    </>
  );
}

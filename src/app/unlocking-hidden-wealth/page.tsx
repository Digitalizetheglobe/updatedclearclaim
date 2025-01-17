"use client";

import Image from "next/image";
import blogbg from "../../../public/blogs/blogbg.png";

export default function UnlockingHiddenWealth() {
  return (
    <>
      <main>
        <div>
          <header className="mx-auto mt-28 max-w-screen-lg rounded-t-lg bg-white pt-16 text-center shadow-lg">
            <p className="text-gray-500">Published Aug 14, 2024</p>
            <h1 className="mt-2 text-xl font-bold text-gray-900 sm:text-2xl max-w-2xl mx-auto">
              Unlocking Hidden Wealth: Clearclaim’s IEPF Success{" "}
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
              In the pursuit of financial security, millions of Indians invest
              their hard-earned money across various avenues. However, a
              significant amount of wealth remains inaccessible due to various
              reasons.
              {/* <span className="whitespace-nowrap text-sm">— Daniel Lehmer</span> */}
            </blockquote>

            <h2 className="text-xl font-semibold">The IEPF Revolution</h2>

            <li>
              <b>IEPF (Investor Education and Protection Fund)</b>
              claims are where Clearclaim shines.
            </li>
            <li>
              A substantial amount of money is held in the form of stocks and
              dividends, often forgotten or misplaced.
            </li>
            <li>
              Clearclaim specializes in retrieving these stuck funds, ensuring
              rightful ownership.{" "}
            </li>

            <h2 className="text-xl font-semibold">Milestones Achieved</h2>
            <h2 className="text-xl font-semibold">1. 1000+ claims filed:</h2>
            <li>
              Clearclaim’s AI-powered smart claim service gained rapid traction
              across India from its inception.
            </li>

            <li>
              Providing financial safety and peace of mind to subscribers is the
              prime motive, which helped Clearclaim to file more than 1000+
              claims in the shares recovery domain.
            </li>

            <h2 className="text-xl font-semibold">2. 500+ customers served:</h2>

            <li>
              <b>Personalized Advice:</b>
              Clearclaim has successfully served 500+ customers across India and
              abroad in countries like Australia, United States, UK, Canada and
              UAE etc. till date and its counting.
            </li>

            <li>
              <b>Word of mouth and trust</b> of existing customers is the key
              factor that is helping Clearclaim to increase its customer base
              slowly and steadily.
            </li>

            <h2 className="text-xl font-semibold">
              3. 300+ companies worked with
            </h2>

            <li>
              Clearclaim has worked with more than 300+{" "}
              <b>listed renowned companies</b> for stuck shares recovery.
            </li>

            <li>
              With this experience Clearclaim was able to fine tune the claim
              process and help the shareholders to get back their stuck shares
              and dividends efficiently.
            </li>

            <h2 className="text-xl font-semibold">
              5. Rs. 70+ Crores Worth Claims Settled:
            </h2>

            <li>
              Through the powerful <b>AI Powered platform,</b> Clearclaim
              facilitated swift claim settlements.
            </li>

            <li>
              Empowering individuals to reclaim their rightful assets and get
              back their hard earned money.
            </li>

            <h2 className="text-xl font-semibold">Join the Movement</h2>
            <p>
              Clearclaim’s mission is ambitious: to recover an astounding $100
              billion worth of dead money in the form of shares and dividends
              from the Indian economy. Together, we can empower individuals,
              fulfil dreams, and create a financially secure future.
            </p>
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

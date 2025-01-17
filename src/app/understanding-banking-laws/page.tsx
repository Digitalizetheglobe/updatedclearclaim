"use client";

import Image from "next/image";
import blogbg from '../../../public/blogs/blogbg.png'

export default function UnderstandingBankingLaws() {
  return (
    <>
      <main>
        <div>
          <header className="mx-auto mt-28 max-w-screen-lg rounded-t-lg bg-white pt-16 text-center shadow-lg">
            <p className="text-gray-500">Published Dec 6, 2024</p>
            <h1 className="mt-2 text-xl font-bold text-gray-900 sm:text-2xl max-w-2xl mx-auto">
              IEPF Claims: Understanding the Banking Laws (Amendment) Bill 2024
            </h1>
            <p className="mt-6 text-md text-gray-500">
              Recently, introduced in the Lok Sabha, the Banking Laws
              (Amendment) Bill 2024 brought in some drastic changes in the
              Indian scenario of unclaimed dividends and shares.
            </p>

            <Image
              className="-z-10 absolute top-0 left-0 mt-10 h-96 w-full object-cover"
              src={blogbg}
              alt=""
            />
          </header>
          <div className="mx-auto max-w-screen-lg space-y-6 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg">
            {/* <h2 className="text-2xl font-semibold">
        First Steps to Life Betterment
      </h2> */}
            <blockquote className=" border-[#00BE5D] border-l-4 px-4">
              As specialists in IEPF claims and recovery of unclaimed financial
              assets, Clearclaim is the best placed to explain the ramifications
              of these changes for you and to outline how these affect the
              process of recovery of your missed investments. Key changes in the
              Banking Laws (Amendment) Bill 2024 are:
              {/* <span className="whitespace-nowrap text-sm">— Daniel Lehmer</span> */}
            </blockquote>
            <ul>
              <li>
                1. <b>More Nomination Options : </b> The bill proposes that the
                permissible number of nominees per bank account be raised from
                one to four. This amendment would apply to bank lockers as well
                as deposits so that the account holder may have flexibility in
                managing assets.
              </li>

              <li>
                2. Also, one of the most important aspects for our clients is
                the inclusion of a long list of securities that could be
                transferred to the Investor Education and Protection Fund.
              </li>
              <li>
                3. <b>Nowadays, it includes: </b> These shares whose dividends
                have stayed unsettled for seven successive years.
              </li>
              <li>
                4. These Interest or redemption amount for Bonds are unclaimed
                for seven consecutive years. Recovery of unmovable monies form
                the IEPF.
              </li>
              <li>
                5. This proposed bill explains the process one ought to
                undertake to retrieve all these transferred assets from IEPF.
              </li>
              <li>
                6. Clearclaim’s experience can be really helpful in walking
                customers through the very complicated process of retrieving
                their money back.
              </li>
            </ul>
            <ul>
              <li>
                <b>Effect on IEPF Claims and Unclaimed Dividends:</b>The same
                changes affect the lives of people who hold unclaimed financial
                assets.
              </li>
              <li>
                <b>Awareness: </b>The bill will bring the people’s attention to
                the problem of unclaimed assets, which may lead them to find and
                claim lost investments.
              </li>
              <li>
                <b>Easy Claim Process:</b>An easy-to-understand process for
                claiming assets from IEPF will simplify this process. However,
                the claim process is still complex and so requires professional
                help.
              </li>
              <li>
                <b>Further Scope for Claimable Assets: </b>The introduction of
                unclaimed interest on bonds and redemption amount added further
                scope for assets retrievable under IEPF.
              </li>
            </ul>
            <h2 className="text-xl font-semibold">
              How Clearclaim can Help: As an IEPF claim and unclaimed shares and
              dividends company, Clearclaim is best suited for help in such new
              regulations for their clients:
            </h2>

            <li>
              <b>Expert Advice: </b> Our experts are up-to-date with the latest
              modifications in the banking law and IEPF law for the advice of
              the customer.
            </li>
            <li>
              <b>Processing of Claim: </b>
              We process the entire claim right from finding unclaimed assets to
              preparing the relevant papers for filing at IEPF.
            </li>
            <li>
              <b>Recovery: </b> This way, our customers retrieve all their
              eligible unclaimed financial assets that have been included
              recently in the amended laws.
            </li>
            <li>
              <b>Time-Saving Solution: </b> We will take care of the complicated
              claim process so our customers do not have to bother themselves
              and can do other things.
            </li>

            <p>
              Action Step for Prospective Claimant: If you suspect to have some
              unclaimed dividend, shares, or other financial asset, this is the
              right time to make a move. There was an expansion of the category
              to consider transferable assets by introducing IEPF. So, check to
              identify such unclaimed assets in your name, gather all your
              supporting documentations, and start raising your claim as early
              as you possibly can. Don’t make your hard-earned dollars a drop to
              nowhere.
            </p>
            <p>
              Contact Clearclaim today to start the recovery of the financial
              assets. Our experts will lead you through step by step the IEPF
              claim process and help you to avail of the benefits from the
              amendments introduced through the Banking Laws (Amendment) Bill
              2024. Your unclaimed assets await you-Clearclaim takes you back to
              what is yours.{" "}
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

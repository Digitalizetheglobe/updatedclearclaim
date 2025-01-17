"use client";

import Image from "next/image";
import closeup from "../../../public/images/close-up-businessman-with-digital-tablet 3.svg";
import tick from "../../../public/images/tick.svg";
import LandingTestimonial from "../testimonial/landingtestimonial";

export default function ContentSection() {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12 overflow-hidden">
        <div className="mx-auto max-w-screen-xl">
          
          <div className="lg:max-w-7xl max-w-xl mx-auto">
            <div className="grid md:grid-cols-2 gap-24">
              <div className=" max-md:order-1">
                <Image
                  src={closeup}
                  alt="Placeholder Image"
                  className=" w-full h-[600px] object-cover"
                />
              </div>
              <div className="text-left">
                <div className="bg-[#00BE5D] text-white p-2 ">
                  <h2 className=" text-2xl font-bold ">
                    Why shares are lost or remain <br /> unclaimed ?
                  </h2>
                </div>
                <ul className="space-y-6 mt-8 mb-6 text-gray-500 sm:text-md md:mb-8">
                  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
                    Some individuals procrastinated and failed to take action
                    when the government and financial institutions urged them to
                    make the transition.
                  </li>
                  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
                    Others have forgotten about investments made years ago,
                    misplacing or losing the related documents.
                  </li>
                  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
                    In unfortunate cases where the original holders have passed
                    away, legal heirs often face challenges in claiming these
                    investments.
                  </li>
                  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
                    Legal heirs themselves may not be aware of investments made
                    by their forefathers, resulting in hidden assets.
                  </li>{" "}
                  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
                    Shareholders change their addresses and forget to change the
                    address in company records hence they miss the communication
                    from company regarding dividends and other corporate
                    actions.
                  </li>
                  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
                    Shares are transferred to IEPF as dividends of shares remain
                    unclaimed for 7 consecutive years.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="gap-8 lg:gap-12">
            <div className="md:pt-8 lg:justify-center">
              <p className="text-center font-semibold text-green-500 sm:text-2xl lg:text-left">
                Understanding IEPF (Investor Education and Protection Fund)
              </p>
             
              <p className="mb-6 mt-4 text-gray-500 sm:text-md md:mb-8">
                The Central Government established the IEPF to safeguard
                investors’ interests and raise awareness. It was created in
                accordance with Section 125 of the Companies Act of 2013 (the
                “Act”). Investors’ unpaid or unclaimed funds are collected and
                contributed to the IEPF as a whole. According to the Act, the
                IEPF monies are used for a range of objectives.
              </p>
            </div>

            <div className="md:col-span-2">
              <ul className="space-y-4 mt-8 mb-6 text-gray-500 sm:text-md md:mb-8">
                <li className="flex items-center gap-3 text-md text-[16px] text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={26}
                    className="bg-[#00BE5D] fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  The IEPF Authority is in charge of overseeing the IEPF money
                  after consultation with the Comptroller and Auditor-General of
                  India. Additionally, it maintains separate accounts and other
                  necessary documentation related to the cash as needed. The
                  IEPF's funds are the total amount that has been accrued or
                  credited to it in compliance with the Act's rules.
                </li>
                <li className="flex items-center gap-3 text-md text-[16px] text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    className="bg-[#00BE5D] fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Goals outlined in the Act may be expanded upon by the IEPF
                  Authority. The financial records of the IEPF will be examined
                  by the Comptroller and Auditor-General of India. The IEPF
                  Authority yearly transmits the audited accounts and audit
                  report to the Central Government.
                </li>
                <li className="flex items-center gap-3 text-md text-[16px] text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    className="bg-[#00BE5D] fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Transparency: By centralizing unclaimed funds and promoting a
                  straightforward approach for their use, the IEPF promotes
                  transparency and accountability in the financial system.
                </li>
                <li className="flex items-center gap-3 text-md text-[16px] text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    className="bg-[#00BE5D] fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Investor Education: The fund is crucial for boosting investor
                  awareness and education, assisting investors in choosing wise
                  investments, and assisting consumers in navigating the
                  complexity of the financial system.
                </li>{" "}
                <li className="flex items-center gap-3 text-md text-[16px] text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    className="bg-[#00BE5D] fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Social Responsibility: By gathering unclaimed funds that are
                  then used for different investor welfare programmes, the IEPF
                  encourages businesses to uphold their corporate social
                  responsibility.
                </li>
                <li className="flex items-center gap-3 text-md text-[16px] text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    className="bg-[#00BE5D] fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Market Confidence: By ensuring that unclaimed funds are used
                  for investors' benefits, the IEPF contributes to increasing
                  trust and confidence in the financial markets. As a result,
                  domestic and international investors are increasingly
                  interested.{" "}
                </li>
                <li className="flex items-center gap-3 text-[16px] text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={27}
                    className="bg-[#00BE5D] fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Additionally, the IEPF Authority shall compile its annual
                  report for each fiscal year, providing a thorough description
                  of its operations throughout the year, and provide a copy to
                  the Central Government. Before each House of Parliament, the
                  Central Government will present the annual report from the
                  IEPF Authority and the audit report from the Comptroller and
                  Auditor-General of India.{" "}
                </li>
              </ul>

              <h1 className="mb-4 text-center mt-4 text-xl font-bold text-gray-800 md:mb-6 md:text-left">
                Restoring Shared Ownership through IEPF: Is it Possible?
              </h1>
              <p className="mb-6 text-gray-800 sm:text-md md:mb-8">
                The Investor Education and Protection Fund (IEPF) has announced
                that joint ownership is not being reestablished. Its primary
                focus is on protecting unclaimed gains, deposits, and promoting
                investor education rather than immediately addressing issues
                with joint ownership.
              </p>

              <h1 className="mb-4 text-center mt-4 text-xl font-bold text-gray-800 md:mb-6 md:text-left">
                Exploring the Objectives of IEPF in India
              </h1>
              <p className="mb-6 text-gray-800 sm:text-md md:mb-8">
                The IEPF’s objectives in India are to defend investors’ rights,
                advance investor education, see to it that unclaimed funds are
                used, and promote responsibility and transparency in the
                financial industry.{" "}
              </p>

              <ul className="space-y-4 mt-8 mb-6 text-gray-500 sm:text-md md:mb-8">
                <li className="flex items-center gap-3 text-md text-[16px] text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    className="bg-[#00BE5D] fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  <b> Verification:</b> Establish if unpaid dividends or
                  unclaimed shares make certain shares transferable to the IEPF.
                </li>
                <li className="flex items-center gap-3 text-md text-[16px] text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    className="bg-[#00BE5D] fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  <b>Claim Submission:</b> On the IEPF website, fill out the
                  online claim form and attach the necessary files.
                </li>
                <li className="flex items-center gap-3 text-md text-[16px] text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    className="bg-[#00BE5D] fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  <b>Firm verification: </b> If the claim is found to be
                  legitimate, the firm confirms it and gives its approval.
                </li>
                <li className="flex items-center gap-3 text-md text-[16px] text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    className="bg-[#00BE5D] fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  <b> Transfer to IEPF Authority:</b> If the transfer of
                  unclaimed shares is approved, they are delivered to the IEPF
                  authority.
                </li>{" "}
                <li className="flex items-center gap-3 text-md text-[16px] text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    className="bg-[#00BE5D] fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  <b> Claim Verification:</b> The IEPF verifies a claim's
                  validity and distributes shares to the claimant's Demat
                  account if it is valid.
                </li>
                <li className="flex items-center gap-3 text-md text-[16px] text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    className="bg-[#00BE5D] fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  <b> Settlement of the Claim: </b> The claim is resolved, and
                  the claimant is given custody of the shares once more.
                </li>
              </ul>

              <h1 className="mb-4 text-center mt-4 text-xl font-bold text-gray-800 md:mb-6 md:text-left">
                Uncovering the Varied Reasons Behind Unclaimed or Lost Shares
              </h1>
              <ul className="space-y-4 mt-8 text-gray-500 sm:text-md">
                <li className="flex items-center gap-3 text-md text-[16px] text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    className="bg-[#00BE5D] fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Change of Address: Shareholders may not get communications
                  about dividends or other corporate activities if they neglect
                  to update their address with the firm or registrar.
                </li>
                <li className="flex items-center gap-3 text-md text-[16px] text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    className="bg-[#00BE5D] fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Shareholders who have passed away: Unclaimed shares may result
                  when a shareholder's legal heirs or beneficiaries are not
                  aware of their ownership.
                </li>
                <li className="flex items-center gap-3 text-md text-[16px] text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    className="bg-[#00BE5D] fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Non-Receipt of Dividends: Unclaimed dividends may result from
                  shareholders who do not pay dividend warrants or who do not
                  give bank information for direct credit.
                </li>
                <li className="flex items-center gap-3 text-md text-[16px] text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    className="bg-[#00BE5D] fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Inactive Accounts: Shares that are dormant or inactive Demat
                  accounts may go unclaimed.
                </li>{" "}
                <li className="flex items-center gap-3 text-md text-[16px] text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    className="bg-[#00BE5D] fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Transfer of Ownership: Shares that are given or transferred
                  without the necessary paperwork or follow-up procedures may
                  not be reclaimed.
                </li>
                <li className="flex items-center gap-3 text-md text-[16px] text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    className="bg-[#00BE5D] fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Shareholders may lose sight of their investments as a result
                  of corporate mergers, name changes, or reorganization.
                </li>
                <li className="flex items-center gap-3 text-[16px] text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    className="bg-[#00BE5D] fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Changes in laws, rules, or compliance standards can
                  occasionally be confusing or make the claim process more
                  difficult.
                </li>
                <li className="flex items-center gap-3 text-[16px] text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    className="bg-[#00BE5D] fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Non-Response to Notices: Unclaimed shares may be considered
                  lost if their owners fail to reply to corporate notices or
                  regulatory correspondence.{" "}
                </li>
                <li className="flex items-center gap-3 text-[16px] text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    className="bg-[#00BE5D] fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Shares that were inherited without the required paperwork or
                  legal procedures can go unclaimed.
                </li>
                <li className="flex items-center gap-3 text-[16px] text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    className="bg-[#00BE5D] fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Shares that remain unclaimed may also be the result of lost,
                  broken, or misplaced physical share certificates.
                </li>
                <li className="flex items-center gap-3 text-[16px] text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    className="bg-[#00BE5D] fill-white rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Investors should keep their contact information current, keep
                  accurate records, be aware of their investments, and reply
                  quickly to correspondence from businesses and regulatory
                  bodies to prevent unclaimed shares.{" "}
                </li>
              </ul>
            </div>
          </div> */}
        </div>

        {/* <div className="max-w-6xl mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">
            <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
              <Image src={img4} alt="Blog Post 1" className="w-full h-96" />
              <div className="p-6 absolute bottom-0 left-0 right-0 bg-[#4b9f47] opacity-90">
                <h3 className="text-lg font-semibold text-black">
                  Igniting Your Imagination
                </h3>
                <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300"></div>
              </div>
            </div>
            <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
              <Image
                src={img3}
                alt="Blog Post 2"
                className="w-full h-96 object-cover"
              />
              <div className="p-6 absolute bottom-0 left-0 right-0 bg-[#4b9f47] opacity-90">
                <h3 className="text-lg font-semibold text-black">
                  Hacks to Supercharge Your Day
                </h3>
                <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300"></div>
              </div>
            </div>

            <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
              <Image
                src={img1}
                alt="Blog Post 3"
                className="w-full h-96 object-cover"
              />
              <div className="p-6 absolute bottom-0 left-0 right-0 bg-[#4b9f47] opacity-90">
                <h3 className="text-lg font-semibold text-black">
                  Trends and Predictions
                </h3>
                <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <LandingTestimonial />

    </>
  );
}

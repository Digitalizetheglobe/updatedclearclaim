"use client";

import Image from "next/image";
import tick from "../../../public/images/tick.svg";
import LandingTestimonial from "../testimonial/landingtestimonial";
import iepf from '../../../public/images/iepf (1).svg'
import iepf1 from '../../../public/images/iepf (2).svg'
import iepf2 from '../../../public/images/iepf (3).svg'

export default function Content() {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12 overflow-hidden">
        <div className="mx-auto max-w-screen-xl">
          <div className="lg:max-w-7xl max-w-xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20">
              <div className=" max-md:order-1">
                <Image
                  src={iepf}
                  alt="Placeholder Image"
                  className=" w-full h-[500px] object-cover"
                />
              </div>
              <div className="text-left text-justify">
                <div className="bg-[#00BE5D] text-white p-2 ">
                  <h2 className=" text-2xl font-semibold ">
                    What is IEPFA and IEPF?
                  </h2>
                </div>
                <ul className="space-y-6 mb-6 text-gray-500 sm:text-md md:mb-8 p-8">
                  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
                    IEPFA stands for ‘Investor Education and Protection Fund
                    Authority’. The IEPFA Authority is entrusted with the
                    responsibility of administration of the Investor Education
                    Protection Fund (IEPF), making refunds of shares, unclaimed
                    dividends, matured deposits/debentures etc. to investors,
                    promoting awareness among investors, and protecting the
                    interests of the investors.
                  </li>
                  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
                    IEPFA makes sure that investors unclaimed shares and
                    unclaimed dividends are not misused and protect them by
                    taking the custody of such unclaimed shares and dividends
                    from companies to avoid any fraud activities. In other way
                    it safeguards investors shares and funds.
                  </li>
                  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
                    Apart from this IEPFA is responsible for promotion of
                    investors’ education, awareness and protection activities.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:max-w-7xl max-w-xl mx-auto mt-24">
            <div className="grid md:grid-cols-2 gap-24">
              <div className="text-left text-justify">
                <div className="bg-[#00BE5D] text-white p-2 ">
                  <h2 className=" text-2xl font-semibold ">
                  Why my shares are transferred to IEPF?
                  </h2>
                </div>
                <ul className="space-y-6 mb-6 text-gray-500 sm:text-md md:mb-8 p-6">
                  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
                    {/* <Image src={tick} alt="clearclaim" className="w-5 h-6" /> */}
                    The Ministry of Corporate Affairs, Government of India have notified new rules under Section 124(6) in The Companies Act, 2013, The Investor Education and Protection Fund Authority [Accounting, Audit, Transfer and Refund] Rules, 2016 which vide Rule 6 has been implemented by the Ministry of Corporate Affairs, with effect from 13th October 2017.
                  </li>
                  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
                    {/* <Image src={tick} alt="clearclaim" className="w-5 h-6" /> */}
                    All shares in respect of which dividend has not been paid or claimed for seven consecutive years or more shall be transferred by the company in the name of Investor Education and Protection Fund along with a statement containing such details as may be prescribed: Provided that any claimant of shares transferred above shall be entitled to claim the transfer of shares from Investor Education and Protection Fund in accordance with such procedure and on submission of such documents as may be prescribed.
                  </li>
                 
                </ul>
              </div>
              <div className=" max-md:order-2">
                <Image
                  src={iepf2}
                  alt="Placeholder Image"
                  className=" w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:max-w-7xl max-w-xl mx-auto mt-24">
            <div className="grid md:grid-cols-2 gap-20">
              <div className=" max-md:order-1">
                <Image
                  src={iepf1}
                  alt="Placeholder Image"
                  className=" w-full h-[500px] object-cover"
                />
              </div>
              <div className="text-left text-justify">
                <div className="bg-[#00BE5D] text-white p-2 ">
                  <h2 className=" text-2xl font-semibold ">
                  Is it possible to recover my shares and dividends from IEPF?
                  </h2>
                </div>
                <ul className="space-y-6 mb-6 text-gray-500 sm:text-md md:mb-8 p-8">
                  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
                    {/* <Image src={tick} alt="clearclaim" className="w-5 h-6" /> */}
                    It is 100% possible to recover your shares and dividends transferred to IEPF.
Along with the MCA rule of transmission of shares to IEPF, they have also given the process of claiming shares back from IEPF. By submitting IEPF-5 claim form on MCA website you can claim your shares from IEPF.

                  </li>
                  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
                  IEPF claim is processed in 3 stages.
                  </li>
                  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
                    1.	Filing IEPF-5 claim online on MCA portal and generate a SRN number. After that sending hard copy documents to the Nodal officer or RTA of the company.
                  </li>
                  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
                    2.	Company verifies your claim by scrutinizing documents you submitted and sends verification report to IEPFA through their internal portal.
                  </li>
                  <li className="flex gap-3 text-md text-[16px] text-[rgba(0, 0, 0, 0.6)]">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6" />
                    3. IEPFA approves or rejects your claim after their verification.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LandingTestimonial />
    </>
  );
}

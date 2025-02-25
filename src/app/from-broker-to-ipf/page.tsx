"use client";

import Image from "next/image";
import blogbg from '../../../public/blogs/blogbg.png';

export default function IndiasDigitalInitiative() {
  return (
    <>
      <main>
        <div>
          <header className="mx-auto mt-28 max-w-screen-lg rounded-t-lg bg-white pt-16 text-center shadow-lg">
            <p className="text-gray-500">Published Feb 21, 2024</p>
            <h1 className="mt-2 text-xl font-bold text-gray-900 sm:text-2xl max-w-2xl mx-auto">
            From Broker to IPF: A Journey Through the Odyssey of Unclaimed Funds in India
            </h1>
            <p className="mt-6 text-md text-gray-500">
            In the past few years, the Securities and Exchange Board of India (SEBI) has taken significant steps to address the growing problem of unclaimed securities and funds in the Indian financial system. As of January 31, 2025, the value of unclaimed funds stands at a whopping ₹323 crore, and unclaimed securities at ₹182 crore. In this blog post, the mechanism through which the unclaimed assets filter through the system, from the brokers to the Investor Protection Fund (IPF), is explained, and the timelines and recovery options available at each stage are referred to.
            </p>
            <Image className="-z-10 absolute top-0 left-0 mt-10 h-96 w-full object-cover" src={blogbg} alt="" />
          </header>
          <div className="mx-auto max-w-screen-lg space-y-6 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg">
            <h2 className="text-2xl font-semibold">Initial Phase: Brokers Obligation</h2>
            <blockquote className="border-[#00BE5D] border-l-4 px-4">
            Where the stockbroker cannot credit funds or securities into a demat or bank account of the client, or where the client is no longer traceable, the account is simultaneously flagged as being in enquiry status.
            </blockquote>

           <p>At this point:</p>
            <ul className="list-disc pl-5">
              <li>Brokers have to take a minimum of six attempts of calling the client using all methods of communication.</li>
            </ul>
            <p>It is important that they also reach out to the clients introducer, nominee, employer, or any other person whose details are known, without revealing any financial information.</p>

            <h2 className="text-xl font-semibold">Classification as Unclaimed Assets</h2>
            <p>Unclaimed money is money that is not claimed within a period of one year</p>
            <ul className="list-disc pl-5">
              <li>Shares: Client securities in enquiry status or held by the trading member for over 30 days are unclaimed securities</li>
            </ul>

            <h2 className="text-xl font-semibold">Transfer to a Named Bank Account</h2>
            <p>The unclaimed funds are paid quarterly to the special bank account of the appointed stock exchange. During this period:</p>
            <ul className="list-disc pl-5">
              <li>The brokers need to invest the unclaimed funds in low-risk vehicles like liquid or overnight mutual fund schemes and fixed deposits.</li>
              <li>These funds are collateralized in favor of the clearing corporation, thus guaranteeing that clients get a minimum interest on their unclaimed funds.</li>
            </ul>

            <h2 className="text-xl font-semibold">Stock Exchange Custody</h2>
            <p>Upon transfer to the stock exchange:</p>
            <ul className="list-disc pl-5">
              <li>The funds are still trackable for the owner to retrieve.</li>
              <li>The exchange maintains careful records of such funds, in the original amount, interest accrued, and withdrawals.</li>
            </ul>

            <h2 className="text-xl font-semibold">Final Transfer to the Investor Protection Fund (IPF)</h2>
            <p>If the funds remain unclaimed after the exchange for three years, they are then transferred to the Investor Protection Fund (IPF) of the exchange.</p>

            <h2 className="text-xl font-semibold">Recovery Options in Each Stage</h2>
            <h2 className="text-xl font-semibold">1. At Broker Level:</h2>
            <p>Exchanges provide internet search facilities where investors, legal heirs, and nominees are able to search and claim assets</p>
            <p>Complaints can be made under the process prescribed by the exchange.</p>

            <h2 className="text-xl font-semibold">2. At Stock Exchange Level:</h2>
            <p>Artificial Intelligence (AI) is used to match potential claimants with unclaimed assets effectively.</p>
            <ul className="list-disc pl-5">
              <li>Analyze vast amounts of data to identify patterns and matches</li>
              <li>Predict which accounts are likely to remain dormant</li>
              <li>Recommend measures to prevent assets from becoming unclaimed</li>
            </ul>

            <h2 className="text-xl font-semibold">3. Regarding the Investor Protection Fund:</h2>
            <p>Despite the transition to IPF, the customers are entitled to invoke a claims process.</p>
<p>The total claim is restricted to the original funds along with interest accumulated up to the fourth year.</p>
        

<h2 className="text-xl font-semibold">SEBIs Initiatives towards Investor Protection</h2>
            <p>To enhance transparency and facilitate easier asset recovery,</p>
            <p>SEBI has mandated: </p>
            <ul className="list-disc pl-5">
              <li>Online Search Facilities: Brokers and stock exchanges should provide easily accessible online search facilities on their websites.</li>
              <li>Awareness Campaigns: Ongoing campaigns aimed at educating investors regarding unclaimed assets and the recovery process entailed.</li>
              <li>Streamlined Procedures: Clear guidelines for brokers and exchanges to handle unclaimed assets efficiently.</li>
            </ul>

            <h2 className="text-xl font-semibold">Conclusion</h2>
            <p>SEBIs suggested framework for the management of unclaimed securities and funds is a big step towards strengthening investor protection in India. By creating an open channel from the broker to the Investor Protection Fund, with multiple checks and recovery processes, the regulator is hoping to reunite investors with their missing assets. </p>
            <p>As an investor, it is your responsibility to be aware of your investments and provide your contact details to your broker at intervals so that your assets do not become unclaimed. Always remember, caution and awareness are the key to keeping control of your financial assets in the dynamic situation of the Indian securities market.</p>
          </div>
        </div>
      </main>
    </>
  );
}
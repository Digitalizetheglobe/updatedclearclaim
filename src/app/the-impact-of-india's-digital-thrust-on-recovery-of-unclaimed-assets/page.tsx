"use client";

import Image from "next/image";
import blogbg from '../../../public/blogs/blogbg.png';

export default function IndiasDigitalInitiative() {
  return (
    <>
      <main>
        <div>
          <header className="mx-auto mt-28 max-w-screen-lg rounded-t-lg bg-white pt-16 text-center shadow-lg">
            <p className="text-gray-500">Published Mar 25, 2024</p>
            <h1 className="mt-2 text-xl font-bold text-gray-900 sm:text-2xl max-w-2xl mx-auto">
            The Impact of India's digital thrust on recovery of unclaimed assets: Facts investors need to know
            </h1>
            <p className="mt-6 text-md text-gray-500">
            India's financial landscape is experiencing a dramatic shift with the push of a technological revolution that is transforming the recovery and handling of unclaimed assets. The technological push is not just making financial transactions more effective but is also critical in the recovery and tracing of unclaimed investments. Investors must understand the effects of these technological changes on unclaimed asset recovery.
            </p>
            <Image className="-z-10 absolute top-0 left-0 mt-10 h-96 w-full object-cover" src={blogbg} alt="" />
          </header>
          <div className="mx-auto max-w-screen-lg space-y-6 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg">
            {/* <h2 className="text-2xl font-semibold">Categories of Unclaimed Financial Assets</h2> */}
            <h2 className="text-2xl font-semibold">1. The Role of Digital Payments</h2>
            <p>India's digital payments system has seen tremendous growth, with the Unified Payments Interface (UPI) leading the growth. In January 2024, UPI supported over 12 billion transactions in a month, with the transaction value crossing ₹18 lakh crore. Such large-scale adoption of digital payments is extremely crucial in reducing the number of inactive accounts and unclaimed funds since it enables real-time tracking and management of financial assets.</p>


            <h2 className="text-2xl font-semibold">2. SEBI's Unclaimed Asset Recovery Initiatives</h2>
            <p>The Securities and Exchange Board of India (SEBI) has made serious efforts towards addressing the problem of unclaimed assets. One such crucial effort in this context is the introduction of the Mutual Fund Investment Tracing and Retrieval Assistant (MITRA) platform. It is a centralized repository to trace dormant and unclaimed mutual fund folios, thus making it convenient for investors, nominees, and legal heirs to trace and retrieve their assets.</p>


            <h2 className="text-2xl font-semibold">3. Technological Developments in Asset Tracing</h2>
            <p>Application: of advanced technologies, such as Artificial Intelligence (AI) and blockchain, is transforming the tracking of assets in India. AI systems can scan vast amounts of data in a bid to spot patterns and possible matches for untracked assets. On the other hand, blockchain technology offers a secure and transparent way of tracking financial transactions, thus reducing the likelihood of assets going untraceable.</p>


            <h2 className="text-2xl font-semibold">4. Centralized Databases and Online Search Facilities</h2>
            <p>The Securities and Exchange Board of India (SEBI) has directed stock exchanges and brokers to launch easy-to-use online search facilities on their respective websites. The online facilities allow investors to search easily for any unclaimed funds or securities standing in their name, thereby minimizing significantly the time and effort needed to locate unclaimed assets. Centralized databases further support this process by consolidating information from various financial institutions, thereby giving a comprehensive picture of unclaimed funds and securities.</p>

            <h2 className="text-2xl font-semibold">5. Automated Notification Systems</h2>
            <p>In order to prevent assets from going unclaimed, financial institutions and regulatory bodies have put in place automated reminder systems. By these systems, the investors are reminded periodically about their dormant accounts as well as the nominees and legal heirs of deceased investors about the unclaimed assets of those investors. Such systems actively notify possible claimants and effectively minimize the frequency of unclaimed assets in the long run.</p>
           

            <h2 className="text-xl font-semibold">Conclusion</h2>
            <p>India's digital push is significantly impacting the growth of the unclaimed asset recovery process. With digital payments, new technologies, and central databases, the country is making significant strides in the effective recovery and tracking of unclaimed investments. For investors, it is essential to stay updated on the technological front and verify regularly for unclaimed assets using digital avenues in an effort to stay in control of their financial assets. With the financial system in perpetual motion, the use of these digital innovations will be vital in the safeguarding and recovery of unclaimed assets in India.</p>
            {/* <p>Financial literacy and active asset management are the best methods to ensure that they do not go unclaimed in the first place. As an investor, you need to verify all your financial assets from time to time and take the necessary steps to keep them active. If you have any doubts that you might have unclaimed assets, do not wait and initiate the recovery process. The Indian financial system is constantly changing to increase the ease and efficiency of asset recovery, thus empowering investors to control their financial legacy.</p> */}
          </div>
        </div>
      </main>
    </>
  );
}
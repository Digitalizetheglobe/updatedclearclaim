"use client";

import Link from "next/link";
import Image from "next/image";
import sbi from "../../../../public/casestudy/state-bank-of-india.webp";
import fileimg from "../../../../public/images/server-01.png";
import tick from "../../../../public/images/tick.svg";
import phone from "../../../../public/images/phone.png";
import email from "../../../../public/images/mail-02.png";
import pin from "../../../../public/images/marker-pin-01.png";
import { useEffect, useState, useRef } from "react";
import FaqAparm from "../unclaimed-shares-apar-industries/faqapar";

export default function UnclaimedsharesAdaniPower() {
  const [activeSection, setActiveSection] = useState("");
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const [visibleCount, setVisibleCount] = useState(8);

  const [searchQuery, setSearchQuery] = useState("");
  const sidebarRef = useRef<HTMLElement | null>(null); // Sidebar reference
  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setSidebarOpen(false);
    }
  };

  // Handle sidebar toggle
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Adding event listener on mount
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const companies = [
    { name: "3M India Limited", path: "/case-study/3m-india-limited" },
    {
      name: "ABB India Ltd.",
      path: "/case-study/unclaimed-shares-dividends-abbindia",
    },
    {
      name: "Adani Ports and Special Economic Zone Limited",
      path: "/case-study/adani-ports-special-economic-zone-limited",
    },
    {
      name: "Adani Power Limited",
      path: "/case-study/unclaimed-shares-adani-power-ltd",
    },
    {
      name: "Alkem Laboratories Ltd",
      path: "/case-study/unclaimed-shares-alkem-laboratories",
    },
    {
      name: "Apar Industries Limited",
      path: "/case-study/unclaimed-shares-apar-industries",
    },
    { name: "Apollo Hospitals", path: "/case-study/apollo-hospitals" },
    {
      name: "Asahi India Glass Ltd",
      path: "/case-study/unclaimed-shares-asahi-india-glass",
    },
    {
      name: "Asian Paints Ltd",
      path: "/case-study/unclaimed-shares-asian-paints",
    },
    {
      name: "Axis Bank Limited",
      path: "/case-study/unclaimed-shares-axis-bank",
    },
    {
      name: "Bank of Baroda",
      path: "/case-study/unclaimed-shares-bank-baroda",
    },
    { name: "Bank Of India", path: "/case-study/bank-of-india" },
    {
      name: "Bharat Electronics Limited",
      path: "/case-study/bharat-electronics-limited",
    },
    {
      name: "Bharat Forge Limited",
      path: "/case-study/unclaimed-shares-bharat-forge",
    },
    {
      name: "Bharti Airtel Limited",
      path: "/case-study/bharti-airtel-limited",
    },
    {
      name: "Bharat Heavy Electricals Limited",
      path: "/case-study/bharat-heavy-electricals-limited",
    },
    { name: "Biocon Limited", path: "/case-study/unclaimed-shares-biocon" },
    {
      name: "Bombay Oxygen Investments Limited",
      path: "/case-study/Bombay-oxygen-investments-limited",
    },
    { name: "Bosch Limited", path: "/case-study/bosch-limited" },
    {
      name: "Britannia Industries Limited",
      path: "/case-study/britannia-industries-limited",
    },
    { name: "CEAT Limited", path: "/case-study/unclaimed-shares-ceat" },
    {
      name: "Chambal Fertilisers and Chemicals Limited ",
      path: "/case-study/chambal-fertilizer-chemicals",
    },
    { name: "Coal India Limited", path: "/case-study/coal-india-limited" },
    {
      name: "Colgate Palmolive India Ltd",
      path: "/case-study/colgate-palmolive-india",
    },
    {
      name: "Cummins India Limited",
      path: "/case-study/cummins-india-limited",
    },
    {
      name: "Deepak Fertilizers and Petrochemicals Corporation Ltd",
      path: "/case-study/deepak-fertilizers-petrochemicals-corporation",
    },
    {
      name: "Deepak Nitrite Limited",
      path: "/case-study/unclaimed-shares-deepak-nitrite",
    },
    { name: "DLF Limited", path: "/case-study/dlf-limited" },
    {
      name: "Exide Industries",
      path: "/case-study/unclaimed-shares-exide-industries",
    },
    {
      name: "Finolex Industries",
      path: "/case-study/unclaimed-shares-finolex-industries",
    },
    {
      name: "GE Vernova T&D India",
      path: "/case-study/unclaimed-shares-ge-vernova-t&d-india",
    },
    {
      name: "GlaxoSmithKline Pharmaceuticals Limited",
      path: "/case-study/glaxosmithkline-pharmaceuticals-limited",
    },
    {
      name: "Graphite India Limited",
      path: "/case-study/graphite-india-limited",
    },
    {
      name: "Grasim Industries Limited",
      path: "/case-study/grasim-industries-limited",
    },
    {
      name: "Grindwell Norton Limited",
      path: "/case-study/grindwell-norton-limited",
    },
    {
      name: "Gujarat Heavy Chemicals",
      path: "/case-study/unclaimed-shares-gujarat-heavy-chemicals",
    },
    {
      name: "HCL Technologies Limited",
      path: "/case-study/hcl-technologies-limited",
    },
    {
      name: "HDFC Bank Limited",
      path: "/case-study/hdfc-bank-limited",
    },
    {
      name: "HEG Limited",
      path: "/case-study/unclaimed-shares-heg",
    },
    {
      name: "Hitachi Energy India Ltd.",
      path: "/case-study/unclaimed-shares-hitachi-energy-india",
    },
    {
      name: "Hindustan Aeronautics Limited",
      path: "/case-study/hindustan-aeronautics-limited",
    },
    {
      name: "Hindustan Unilever Limited",
      path: "/case-study/hindustan-unilever-limited",
    },
    {
      name: "ICICI Bank",
      path: "/case-study/icici-bank-limited",
    },
    {
      name: "Unclaimed Shares of IG Petrochemicals Ltd",
      path: "/case-study/unclaimed-shares-of-iG-petrochemicals-ltd",
    },
    {
      name: "Infosys Limited",
      path: "/case-study/infosys-limited",
    },
  ];

  // Filter companies based on search query
  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle showing more companies
  const handleReadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  // const toggleSidebar = () => {
  //   setSidebarOpen(!isSidebarOpen);
  // };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 50% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  
  return (
    <>
      <div> 
        
        <div className="flex items-center gap-4 ml-8 mt-4">
          <Image
            src={fileimg}
            alt="file"
            className="p-2 bg-green-600 text-white rounded-lg md:hidden cursor-pointer"
            onClick={toggleSidebar} // Open/close functionality only here
          />
          
          <h1 className="font-bold text-md text-[#00BE5D]">All (288)</h1>
        </div>

        <div className="h-screen flex bg-gray-100">
          {/* Left Sidebar */}
          <aside
           ref={sidebarRef}
            className={`${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } fixed md:static top-0 left-0 w-64 bg-white shadow-md p-4 h-full transform transition-transform duration-300 md:translate-x-0 overflow-y-auto custom-scrollbar`}
          >
            <style jsx>{`
              .custom-scrollbar::-webkit-scrollbar {
                width: 5px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background-color: #00be5d; /* Thumb color */
                border-radius: 10px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background-color: lightgray; /* Track color */
              }
            `}</style>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search Company"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-200"
              />
            </div>
            <ul className="space-y-2">
              {filteredCompanies
                .slice(0, visibleCount)
                .map((company, index) => (
                  <li key={index} className="hover:bg-gray-200 p-2 rounded-md">
                    <Link href={company.path} className="text-black">
                      {company.name}
                    </Link>
                  </li>
                ))}
              {filteredCompanies.length > visibleCount && (
                <li>
                  <button
                    onClick={handleReadMore}
                    className="text-[#00BE5D] font-semibold p-2"
                  >
                    Read More
                  </button>
                </li>
              )}
            </ul>
          </aside>

          {/* Main Content */}
          <main
            className="flex-1 bg-gray-50 p-8 overflow-y-auto h-screen"
            style={{
              scrollbarWidth: "none", // Hide scrollbar for Firefox
              msOverflowStyle: "none", // Hide scrollbar for Internet Explorer
            }}
          >
            <style jsx>{`
              /* Hide scrollbar for Chrome, Safari, and Edge */
              main::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <h1 className="text-3xl font-semibold mb-4">
              Unclaimed Shares of{" "}
              <span className="text-green-600">State Bank of India Ltd.
              </span>
            </h1>
            <p className="mb-6 text-[#00000099] text-justify">
            The State Bank of India (SBI) is India’s largest public sector bank and a cornerstone of the country’s financial landscape. Headquartered in Mumbai, SBI has a legacy that dates back to 1806, with the establishment of the Bank of Calcutta. Later, it evolved into the Imperial Bank of India and was renamed the State Bank of India after nationalization in 1955. This long-standing history has positioned SBI as a trusted name in Indian banking.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
            SBI offers a comprehensive suite of financial services, including personal banking, corporate banking, international banking, treasury operations, wealth management, and insurance. It has an extensive network of over 22,000 branches and 65,000 ATMs across urban, semi-urban, and rural areas, making it a vital player in promoting financial inclusion. The bank supports several government initiatives like Jan Dhan Yojana, Mudra Loans, and Start-Up India, contributing significantly to the nations socio-economic development.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
            In recent years, SBI has embraced digital transformation, offering cutting-edge banking solutions through its YONO app, internet banking, and mobile platforms. These efforts enhance customer experience while streamlining operations. SBI also plays a crucial role in the global banking sector, with operations in over 30 countries catering to non-resident Indians and international clients.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
            With its vast reach, strong financial performance, and unwavering commitment to innovation and inclusivity, SBI continues to be a driving force in India’s economic growth, serving millions of customers with trust, efficiency, and reliability.
            </p>
            <Image
              src={sbi}
              alt="sbi Logo"
              className="mb-6 mx-auto w-[200px] h-[200px]"
            />
            <section className="bg-white p-4 ">
              <div className="flex gap-4">
                <Image src={tick} alt="file" className="w-5 h-6" />

                <h2 className="text-2xl text-gray-700 font-[600px] mb-2">
                  Company Details
                </h2>
              </div>
              <ul className="space-y-4 mt-4 text-gray-500">
                <li>
                  <b>Registered Name: </b> State Bank of India Ltd.
                </li>
                <li>
                  <b>CIN Number: </b> U65190MH1993PLC074381
                </li>
                <li>
                  <b>ISIN Number: </b> INE062A01020
                </li>
              </ul>
            </section>

            <section id="dividend-history" className="mt-6 bg-white p-4 ">
              <div className="flex gap-4">
                <Image src={tick} alt="file" className="w-5 h-6" />

                <h2 className="text-2xl text-gray-700 font-[600px] mb-2">
                  Dividend’s History of Sate Bank of India Ltd.
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 mt-4">
                  <thead className="bg-[#00BE5D] text-white">
                    <tr>
                    <th className="text-left p-3">Announcement Date</th>
                      <th className="text-left p-3">Ex-Dividend Date </th>
                      <th className="text-left p-3">Dividend Type </th>
                      <th className="text-left p-3">Dividend (Rs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">09 May, 2024</td>
                      <td className="text-gray-600 p-3">22 May, 2024</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">13.70</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      18 May, 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      31 May, 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">11.30</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">13 May, 2022</td>
                      <td className="text-gray-600 p-3">25 May, 2022</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">7.10</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      21 May, 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      03 Jun, 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">4.00</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3">19 May, 2017</td>
                      <td className="text-gray-600 p-3">26 May, 2017</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">2.60</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      16 May, 2016
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      03 Jun, 2016
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">2.60</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">22 May, 2015</td>
                      <td className="text-gray-600 p-3">28 May, 2015</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">3.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      14 May, 2014
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      29 May, 2014
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">15.00</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3">04 Mar, 2014</td>
                      <td className="text-gray-600 p-3">11 Mar, 2014</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">15.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      14 May, 2013
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      28 May, 2013
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">41.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">12 May, 2012</td>
                      <td className="text-gray-600 p-3">24 May, 2012</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">35.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      11 May, 2011
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      20 May, 2011
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">30.00</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3">11 May, 2010</td>
                      <td className="text-gray-600 p-3">09 Jun, 2010</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">20.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      25 Jan, 2010
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      05 Feb, 2010
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">10.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">11 May, 2009</td>
                      <td className="text-gray-600 p-3">10 Jun, 2009</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">29.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      02 May, 2008
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      29 May, 2008
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">21.50</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3">09 May, 2007</td>
                      <td className="text-gray-600 p-3">13 Jun, 2007</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">14.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      10 May, 2006
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      19 Jun, 2006
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">14.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">20 May, 2005</td>
                      <td className="text-gray-600 p-3">17 Jun, 2005</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">12.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      11 May, 2004
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      25 Jun, 2004
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">11.00</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3">05 Jun, 2003</td>
                      <td className="text-gray-600 p-3">04 Jul, 2003</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">8.50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="bonus" className="bg-white p-4 mt-6">
              <div className="flex gap-4">
                <Image src={tick} alt="file" className="w-5 h-6" />

                <h2 className="text-2xl text-gray-700 font-[600px] mb-2">
                  Bonus
                </h2>
              </div>
              <p className="text-gray-500">NA</p>
            </section>

            <section id="split" className="mt-6 bg-white p-4 ">
              <div className="flex gap-4">
                <Image src={tick} alt="file" className="w-5 h-6" />

                <h2 className="text-2xl text-gray-700 font-[600px] mb-2">
                  Split
                </h2>
              </div>
              <table className="min-w-full border-collapse border border-gray-200 mt-4">
                  <thead className="bg-[#00BE5D] text-white">
                    <tr>
                    <th className="text-left p-3">Announcement Date</th>
                      <th className="text-left p-3">Ex-Dividend Date </th>
                      <th className="text-left p-3">Dividend Type </th>
                      <th className="text-left p-3">Dividend (Rs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">09 May, 2024</td>
                      <td className="text-gray-600 p-3">22 May, 2024</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">13.70</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            {/* Add more content to demonstrate scrolling */}
            <section id="mergers-amalgamation" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                  Mergers / Amalgamation
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
              The State Bank of India (SBI) has a rich history of mergers and amalgamations that have significantly contributed to its growth and status as India’s largest public sector bank. These mergers were aimed at consolidating the banking sector and improving operational efficiency. Below is the history of SBI’s key mergers and amalgamations:
              </p>
            
              <h2 className="text-2xl text-gray-700 ">
              Formation of SBI (1955):
                </h2>
                <li>
                SBI was formed when the Imperial Bank of India was nationalized and reconstituted as the State Bank of India under the State Bank of India Act, 1955.
                </li><br />

                <h2 className="text-2xl text-gray-700 ">
              Formation of SBI (1955):
                </h2>
                <p className="text-[#00000099] leading-6 mb-6 text-justify">
                SBI had several associate banks, which were originally princely state banks. These banks were gradually merged to create a unified entity:
              </p>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
              1959: The Government of India passed the State Bank of India (Subsidiary Banks) Act, bringing eight regional banks under SBI as its associates. These included:
              </p>
              <li>State Bank of Bikaner</li>
              <li>State Bank of Jaipur</li>
              <li>State Bank of Mysore</li>
              <li>State Bank of Hyderabad</li>
              <li>State Bank of Patiala</li>
              <li>State Bank of Saurashtra</li>
              <li>State Bank of Travancore</li>
              <li>State Bank of Indore</li>
              <br />

              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                2008: SBI merged the State Bank of Saurashtra with itself.
              </p>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
              2010: The State Bank of Indore was merged into SBI.
              </p>

              <h2 className="text-2xl text-gray-700 ">
              Mega Merger of 2017:
                </h2>

                <p className="text-[#00000099] leading-6 mb-6 text-justify">
                On April 1, 2017, SBI undertook a historic merger, integrating its five remaining associate banks and the Bharatiya Mahila Bank:
              </p>
              <li>State Bank of Bikaner and Jaipur (SBBJ)</li>
              <li>State Bank of Hyderabad (SBH)</li>
              <li>State Bank of Mysore (SBM)</li>
              <li>State Bank of Patiala (SBP)</li>
              <li>State Bank of Travancore (SBT)</li>
              <li>Bharatiya Mahila Bank (established in 2013 to empower women)</li>
              <br />

              <p className="text-[#00000099] leading-6 mb-6 text-justify">
              This merger catapulted SBI into the ranks of the world’s top 50 banks by assets and solidified its position as the market leader in Indian banking.
              </p>

              <h2 className="text-2xl text-gray-700 ">
              Impact of the Mergers:
                </h2>
                <li>Expanded branch network, surpassing 22,000 branches.</li>
                <li>Enhanced operational efficiency and economies of scale.</li>
                <li>Improved customer service and streamlined offerings.</li>
                <br />

                <p className="text-[#00000099] leading-6 mb-6 text-justify">
                The amalgamation history of SBI reflects its evolving role in shaping Indias banking and financial sector.
              </p>
            </section>

            <section id="physical-shares" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                Physical Shares of State Bank of India Ltd
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
              Physical shares refer to share certificates issued in paper form, representing ownership of a certain number of shares in a company. Before the advent of electronic trading and the dematerialization (demat) system in India, these certificates were the primary way of holding shares. If you own physical shares of the State Bank of India (SBI), it is important to take the necessary steps to convert them into demat form as physical share trading has been discontinued.
              </p>
            </section>

            <section id="unclaimed-shares" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                Unclaimed Shares and Dividends of State Bank of India Ltd. Transferred to IEPF
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
              Unclaimed shares and dividends of State Bank of India Ltd. (SBI) are transferred to the Investor Education and Protection Fund (IEPF) Authority in compliance with Section 124(6) of the Companies Act, 2013, and associated rules. If shareholders fail to claim dividends for seven consecutive years, these amounts, along with the corresponding shares, are moved to the IEPF. This ensures dormant funds and securities are consolidated under the governments oversight.
              </p>
            </section>

            <section id="faq" className="mt-8 p-6 ">
              <div className="flex gap-4 items-center ">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700">
                FAQs about unclaimed shares of Maharashtra Scooters Ltd.
                </h2>
              </div>
            </section>

            <FaqAparm/>

            <section id="company-details" className="p-4 mt-8">
              {/* Header Section */}
              <div className="flex items-center gap-4 mb-4 ">
                <Image src={tick} alt="file" className="w-5 h-6" />
                <h2 className="text-2xl text-gray-700 ">Company Details</h2>
              </div>

              {/* Numbers with Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Image src={phone} alt="file" className="w-4 h-4" />
                  <p className="text-md text-[#00000099]">+91 9156701900</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={phone} alt="file" className="w-4 h-4" />
                  <p className="text-md text-[#00000099] ">+91 9970651900</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={email} alt="file" className="w-4 h-4" />
                  <p className="text-md text-[#00000099] ">
                    sales@clearclaim.in
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-2">
                <Image src={pin} alt="file" className="w-4 h-4" />
                <p className="text-md text-[#00000099]">
                  Office No C-201, 2nd Floor, Vantage Tower, Bramha Corp,
                  Opposite to Bavdhan Police Chowky, NDA Pashan Road, Bavdhan,
                  Pune – 411021
                </p>
              </div>
            </section>
          </main>

          {/* Right Sidebar */}
          <aside className="w-1/5 bg-white shadow-md p-4 hidden md:block overflow-y-auto"  style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none", 
            }}>
            <h2 className="font-bold mb-4">Content</h2>
            <ul className="space-y-2">
              <li
                className={`hover:bg-gray-200 p-2 rounded-md text-[15px]${
                  activeSection === "dividend-history" ? "bg-gray-300" : ""
                }`}
              >
                <a href="#dividend-history">Dividend History</a>
              </li>
              <li
                className={`hover:bg-gray-200 p-2 rounded-md text-[15px]${
                  activeSection === "bonus" ? "bg-gray-300" : ""
                }`}
              >
                <a href="#bonus">Bonus</a>
              </li>
              <li
                className={`hover:bg-gray-200 p-2 rounded-md text-[15px]${
                  activeSection === "split" ? "bg-gray-300" : ""
                }`}
              >
                <a href="#split">Split</a>
              </li>
              <li
                className={`hover:bg-gray-200 p-2 rounded-md text-[15px]${
                  activeSection === "mergers-amalgamation" ? "bg-gray-300" : ""
                }`}
              >
                <a href="#mergers-amalgamation">Mergers / Amalgamation</a>
              </li>
              <li
                className={`hover:bg-gray-200 p-2 rounded-md text-[15px]${
                  activeSection === "physical-shares" ? "bg-gray-300" : ""
                }`}
              >
                <a href="#physical-shares">Physical Shares</a>
              </li>
              <li
                className={`hover:bg-gray-200 p-2 rounded-md text-[15px]${
                  activeSection === "unclaimed-shares" ? "bg-gray-300" : ""
                }`}
              >
                <a href="#unclaimed-shares">Unclaimed Shares</a>
              </li>
              <li
                className={`hover:bg-gray-200 p-2 rounded-md text-[15px]${
                  activeSection === "faq" ? "bg-gray-300" : ""
                }`}
              >
                <a href="#faq">FAQ</a>
              </li>
              <li
                className={`hover:bg-gray-200 p-2 rounded-md text-[15px]${
                  activeSection === "company-details" ? "bg-gray-300" : ""
                }`}
              >
                <a href="#company-details">Company Details</a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
}

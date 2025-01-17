"use client";

import Link from "next/link";
import Image from "next/image";
import ceat from "../../../../public/casestudy/ceat.png";
import fileimg from "../../../../public/images/server-01.png";
import tick from "../../../../public/images/tick.svg";
import phone from "../../../../public/images/phone.png";
import email from "../../../../public/images/mail-02.png";
import pin from "../../../../public/images/marker-pin-01.png";
import { useEffect, useState, useRef } from "react";
import FaqAparm from "../unclaimed-shares-apar-industries/faqapar";

export default function UnclaimedshareCEAT() {
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
              <span className="text-green-600">CEAT Ltd.</span>
            </h1>
            <p className="mb-6 text-[#00000099] text-justify">
              CEAT Limited, established in 1924, is one of India leading tyre
              manufacturers, providing a wide range of automotive tyres,
              including for two-wheelers, cars, trucks, buses, and off-road
              vehicles. The company operates both domestically and
              internationally, and its products are widely known for their
              performance, safety, and reliability. CEAT has been a significant
              player in the Indian market and has expanded its reach to global
              markets.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
              Headquartered in Mumbai, CEAT manufactures tyres at multiple
              facilities across India. Its product portfolio includes tyres for
              scooters, motorcycles, and heavy-duty vehicles, and it is involved
              in both the domestic and export markets. The company underwent a
              name change in 1990, becoming CEAT Limited from CEAT Tyres of
              India Limited.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
              The company has continually innovated, embracing automation and
              sustainability in its manufacturing processes, and has recently
              made significant investments to expand its production
              capabilities, including setting up new facilities. CEAT also
              engages in sports sponsorships and has forged partnerships with
              various international and national entities, including the Indian
              Supercross Racing League and cricket events.
            </p>

            <Image
              src={ceat}
              alt="ceat Logo"
              className="mb-6 mx-auto w-[280px] h-[200px]"
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
                  <b>Registered Name: </b> CEAT Ltd
                </li>
                <li>
                  <b>CIN Number: </b> L25100MH1958PLC011041
                </li>
                <li>
                  <b>ISIN Number: </b> INE482A01020
                </li>
              </ul>
            </section>

            <section id="dividend-history" className="mt-6 bg-white p-4 ">
              <div className="flex gap-4">
                <Image src={tick} alt="file" className="w-5 h-6" />

                <h2 className="text-2xl text-gray-700 font-[600px] mb-2">
                  Dividend’s History of Apar Industries Ltd.{" "}
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 mt-4">
                  <thead className="bg-[#00BE5D] text-white">
                    <tr>
                      <th className="text-left p-3">Announcement Date</th>
                      <th className="text-left p-3">Ex-Dividend Date</th>
                      <th className="text-left p-3">Dividend Type</th>
                      <th className="text-left p-3">-</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">02 May, 2024</td>
                      <td className="text-gray-600 p-3">09 Aug, 2024</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">30.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        04 May, 2023{" "}
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        20 Jun, 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">12.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">05 May, 2022</td>
                      <td className="text-gray-600 p-3">10 Jun, 2022</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">3.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        05 May, 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        27 Aug, 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">FINAL</td>
                      <td className="text-gray-600 bg-gray-100 p-3">18.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">24 Feb, 2020</td>
                      <td className="text-gray-600 p-3">19 Mar, 2020</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">12.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        07 May, 2019
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        18 Jul, 2019
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">FINAL</td>
                      <td className="text-gray-600 bg-gray-100 p-3">12.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">30 Apr, 2018</td>
                      <td className="text-gray-600 p-3">10 Jul, 2018</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">11.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        02 May, 2017
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        28 Jul, 2017
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">FINAL</td>
                      <td className="text-gray-600 bg-gray-100 p-3">11.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">02 Mar, 2016</td>
                      <td className="text-gray-600 p-3">22 Mar, 2016</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">5.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        08 Mar, 2016
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        22 Mar, 2016
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Interim</td>
                      <td className="text-gray-600 p-3 bg-gray-100">11.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">22 May, 2015</td>
                      <td className="text-gray-600 p-3">03 Aug, 20155</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">10.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        29 Apr, 2014
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        17 Sep, 2014
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">10.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">07 May, 2013</td>
                      <td className="text-gray-600 p-3">12 Aug, 2013</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        08 May, 2012
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        25 Jul, 2012
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">1.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">02 May, 2011</td>
                      <td className="text-gray-600 p-3">10 Aug, 2011</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        30 Apr, 2010
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        14 Jul, 2010
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">29 Apr, 2008</td>
                      <td className="text-gray-600 p-3">09 Jul, 2008</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">4.00</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        23 Apr, 2007
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        11 Jul, 2007
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">1.80</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">01 Jul, 2004</td>
                      <td className="text-gray-600 p-3">07 Sep, 2004</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">1.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        21 Oct, 2003
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        28 Nov, 2003
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">1.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">02 May, 2002</td>
                      <td className="text-gray-600 p-3">30 Aug, 2002</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">1.00</td>
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
              <table className="min-w-full border-collapse border border-gray-200 mt-4">
                <thead className="bg-[#00BE5D] text-white">
                  <tr>
                    <th className="text-left p-3">Announcement Date</th>
                    <th className="text-left p-3">Ex-Bonus Date</th>
                    <th className="text-left p-3">Bonus Ratio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-gray-600 p-3">04 Jan, 1987</td>
                    <td className="text-gray-600 p-3">-</td>
                    <td className="text-gray-600 p-3">1:2</td>
                  </tr>
                  <tr>
                    <td className="text-gray-600 p-3 bg-gray-100">
                      07 Oct, 1986
                    </td>
                    <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    <td className="text-gray-600 p-3 bg-gray-100">1:2</td>
                  </tr>
                  <tr>
                    <td className="text-gray-600 p-3">04 Jan, 1980</td>
                    <td className="text-gray-600 p-3">-</td>
                    <td className="text-gray-600 p-3">1:1</td>
                  </tr>
                  <tr>
                    <td className="text-gray-600 p-3 bg-gray-100">
                      04 Jan, 1976
                    </td>
                    <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    <td className="text-gray-600 p-3 bg-gray-100">1:7</td>
                  </tr>
                  <tr>
                    <td className="text-gray-600 p-3">04 Jan, 1973</td>
                    <td className="text-gray-600 p-3">-</td>
                    <td className="text-gray-600 p-3">1:6</td>
                  </tr>
                  <tr>
                    <td className="text-gray-600 p-3 bg-gray-100">
                      04 Jan, 1969
                    </td>
                    <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    <td className="text-gray-600 p-3 bg-gray-100">1:10</td>
                  </tr>
                  <tr>
                    <td className="text-gray-600 p-3">04 Jan, 1969</td>
                    <td className="text-gray-600 p-3">-</td>
                    <td className="text-gray-600 p-3">1:10</td>
                  </tr>
                  <tr>
                    <td className="text-gray-600 p-3 bg-gray-100">
                      04 Jan, 1969
                    </td>
                    <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    <td className="text-gray-600 p-3 bg-gray-100">1:10</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section id="split" className="mt-6 bg-white p-4 ">
              <div className="flex gap-4">
                <Image src={tick} alt="file" className="w-5 h-6" />

                <h2 className="text-2xl text-gray-700 font-[600px] mb-2">
                  Split
                </h2>
              </div>
              <p className="text-gray-500">NA</p>
            </section>
            {/* Add more content to demonstrate scrolling */}
            <section id="mergers-amalgamation" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                  Mergers / Amalgamation
                </h2>
              </div>

              <div className="text-[#00000099] leading-6 mb-6 text-justify">
                <li>
                  CEAT Limited has undergone significant corporate restructuring
                  in its history. One notable event is the merger of its
                  wholly-owned subsidiary, CEAT Specialty Tyres Limited (CSTL),
                  with CEAT Limited. The National Company Law Tribunal (NCLT),
                  Mumbai Bench, approved this Scheme of Amalgamation on March
                  13, 2020. This merger streamlined operations by integrating
                  CEATs specialty tyre segment, which focuses on products for
                  agricultural, construction, and mining vehicles, into its core
                  operations. The merger aimed to enhance operational efficiency
                  and consolidate the brand under one legal entity.
                </li>

                <li>
                  Previously, CEAT Limited was part of the global conglomerate
                  Pirelli before it was acquired by the RPG Group in 1982,
                  marking a pivotal moment in its history. Since then, CEAT has
                  diversified its product offerings and expanded its global
                  presence.
                </li>

                <li>
                  These restructuring activities reflect CEAT strategic
                  approach to optimizing business operations and maintaining
                  competitiveness in the tyre manufacturing industry.
                </li>
              </div>
            </section>

            <section id="physical-shares" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                  Physical Shares of CEAT Ltd.
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                Physical shares of CEAT Limited, like all physical share
                certificates in India, are subject to regulations mandating
                their conversion into electronic form (dematerialization). As
                per the Securities and Exchange Board of India (SEBI), trading
                of physical shares has been prohibited since April 1, 2019.
                Shareholders holding physical shares must convert them into
                Demat form to sell, transfer, or pledge them.
              </p>
            </section>

            <section id="unclaimed-shares" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                  Unclaimed Shares and Dividends of CEAT Ltd. transferred to
                  IEPF{" "}
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                Unclaimed shares and dividends of CEAT Ltd., as with other
                companies, are transferred to the Investor Education and
                Protection Fund (IEPF) if they remain unclaimed for seven
                consecutive years. This process is in compliance with the
                Companies Act, 2013, and the associated IEPF Rules. Such
                transfers include unpaid dividends, matured deposits, and the
                corresponding shares.
              </p>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                CEAT Ltd. has provided detailed communication to shareholders
                about claiming unclaimed dividends and avoiding such transfers.
                Shareholders are advised to keep their KYC details updated and
                to claim their dividends promptly to avoid complications.
              </p>
            </section>

            <section id="faq" className="mt-8 p-6 ">
              <div className="flex gap-4 items-center ">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700">
                  FAQs about unclaimed shares of CEAT Ltd.
                </h2>
              </div>
            </section>

            <FaqAparm />

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
          <aside
            className="w-1/5 bg-white shadow-md p-4 hidden md:block overflow-y-auto"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
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

"use client";

import Link from "next/link";
import Image from "next/image";
import heg from "../../../../public/casestudy/heg.jpg";
import fileimg from "../../../../public/images/server-01.png";
import tick from "../../../../public/images/tick.svg";
import phone from "../../../../public/images/phone.png";
import email from "../../../../public/images/mail-02.png";
import pin from "../../../../public/images/marker-pin-01.png";
import { useEffect, useState, useRef } from "react";
import FaqAparm from "../unclaimed-shares-apar-industries/faqapar";

export default function UnclaimedsharesHEG() {
  const [activeSection, setActiveSection] = useState("");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  const [searchQuery, setSearchQuery] = useState("");
  const sidebarRef = useRef<HTMLElement | null>(null); // Sidebar reference
  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
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
  ];
//   hindustan-aeronautics-limited
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
              Unclaimed Shares of
              <span className="text-green-600"> HEG Ltd.</span>
            </h1>
            <p className="mb-6 text-[#00000099] text-justify">
              HEG Limited is a leading global manufacturer and exporter of
              graphite electrodes, which are critical components used in
              electric arc furnaces for steel production. Founded in 1977, the
              company is headquartered in Bhopal, Madhya Pradesh, India, and
              operates one of the world’s largest single-site graphite electrode
              manufacturing facilities in Mandideep, with a capacity of 80,000
              metric tons per annum.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
              HEG specializes in the production of ultra-high power (UHP) and
              high-power (HP) graphite electrodes, catering to the growing
              demand from the steel and metal industries worldwide. Its
              operations are vertically integrated, encompassing key processes
              like needle coke procurement, impregnation, baking, and machining.
              The company exports over 70% of its production to more than 30
              countries, including the U.S., Europe, and Asia.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
              Known for its focus on innovation and sustainability, HEG invests
              significantly in research and development to enhance efficiency
              and reduce its carbon footprint. It has consistently delivered
              strong financial performance, benefiting from global trends like
              increasing steel production through electric arc furnaces, which
              are more environmentally friendly.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
              HEG Limited is listed on major Indian stock exchanges and
              continues to maintain its position as a market leader, driven by
              operational excellence, quality, and customer-centricity.
            </p>

            <Image
              src={heg}
              alt="heg Logo"
              className="mb-6 mx-auto w-[300px] h-[220px]"
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
                  <b>Registered Name: </b> HEG Ltd.
                </li>
                <li>
                  <b>CIN Number: </b> L23109MP1972PLC008290
                </li>
                <li>
                  <b>ISIN Number: </b> INE545A01024
                </li>
              </ul>
            </section>

            <section id="dividend-history" className="mt-6 bg-white p-4 ">
              <div className="flex gap-4">
                <Image src={tick} alt="file" className="w-5 h-6" />

                <h2 className="text-2xl text-gray-700 font-[600px] mb-2">
                  Dividend’s History of HEG Ltd.
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
                      <td className="text-gray-600 p-3">22 May, 2024</td>
                      <td className="text-gray-600 p-3">31 Jul, 2024</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">22.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        22 May, 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        24 Aug, 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">42.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">25 May, 2022</td>
                      <td className="text-gray-600 p-3">24 Aug, 2022</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">40.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        27 May, 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        19 Jul, 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">3.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">06 Feb, 2020</td>
                      <td className="text-gray-600 p-3">17 Feb, 2020</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">25.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        20 May, 2019
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        09 Aug, 2019
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">50.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">26 Oct, 2018</td>
                      <td className="text-gray-600 p-3">12 Nov, 2018</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">30.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        08 May, 2018
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        13 Jul, 2018
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">50.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">06 Feb, 2018</td>
                      <td className="text-gray-600 p-3">15 Feb, 2018</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">30.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        14 May, 2015
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        14 Sep, 2015{" "}
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">3.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">21 Apr, 2014</td>
                      <td className="text-gray-600 p-3">14 Aug, 2014</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">6.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        03 May, 2013
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        06 Sep, 2013
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">8.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">29 Apr, 2011</td>
                      <td className="text-gray-600 p-3">02 Sep, 2011</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">5.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        13 Jun, 2008
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        17 Sep, 2008
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">3.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">31 Dec, 2007</td>
                      <td className="text-gray-600 p-3">11 Jan, 2008</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">7.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        27 Apr, 2007
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        18 Sep, 2007
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">5.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">27 Apr, 2006</td>
                      <td className="text-gray-600 p-3">13 Sep, 2006</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">3.00</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        02 May, 2005
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        22 Sep, 2005
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">3.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">04 May, 2004</td>
                      <td className="text-gray-600 p-3">04 May, 2004</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">3.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        22 Aug, 2003
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        18 Sep, 2003
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">2.20</td>
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
                    <td className="text-gray-600 p-3">27 Jul, 1994</td>
                    <td className="text-gray-600 p-3">25 Nov, 1994</td>
                    <td className="text-gray-600 p-3">1:1</td>
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
              <table className="min-w-full border-collapse border border-gray-200 mt-4">
                <thead className="bg-[#00BE5D] text-white">
                  <tr>
                    <th className="text-left p-3">Announcement Date</th>
                    <th className="text-left p-3">Ex-Split Date</th>
                    <th className="text-left p-3">Old FV</th>
                    <th className="text-left p-3">New FV</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-gray-600 p-3">13 Aug, 2024</td>
                    <td className="text-gray-600 p-3">18 Oct, 2024</td>
                    <td className="text-gray-600 p-3">10</td>
                    <td className="text-gray-600 p-3">2</td>
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

              <ul className="text-[#00000099] leading-6 mb-6 text-justify">
                <li>
                  Bhilwara Energy Limited shareholders will receive eight (8)
                  fully paid-up equity shares of ₹10 each in the merged HEG
                  Limited for every thirty-five (35) equity shares of ₹10 each
                  held in Bhilwara Energy Limited.
                </li>
              </ul>
            </section>
            <section id="demerger" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">Demerger </h2>
              </div>

              <ul className="text-[#00000099] leading-6 mb-6 text-justify">
                <li>
                  Shareholders of HEG Limited will receive one (1) fully paid-up
                  equity share of ₹10 each in the resulting graphite business
                  company for every one (1) equity share of ₹10 each held in HEG
                  Limited.
                </li>
              </ul>
            </section>

            <section id="physical-shares" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                  Physical Shares of HEG Ltd.
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                Physical shares of HEG Ltd. are no longer eligible for trading
                on stock exchanges as per SEBI regulations implemented on April
                1, 2019. Investors holding such shares must dematerialize them
                to trade or transfer ownership. Dematerialization involves
                converting physical share certificates into an electronic format
                through a Demat account held with a Depository Participant (DP).
              </p>
            </section>

            <section id="unclaimed-shares" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                  Unclaimed Shares and Dividends of HEG Ltd. Transferred to IEPF
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                HEG Limited, in accordance with the Investor Education and
                Protection Fund (IEPF) regulations, has been transferring equity
                shares to the IEPF if dividends remain unclaimed for seven
                consecutive years. As per the rules under the Companies Act,
                2013, shares of individuals who have not claimed their dividends
                for seven years are moved to the IEPF’s demat account.
              </p>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                For instance, unclaimed dividends and shares for financial years
                2014-15 and beyond are being transferred, with a specific cutoff
                date. If the dividends have not been claimed by shareholders,
                their respective shares will be transferred to IEPF, and the
                original share certificates become void and non-negotiable.
                Affected shareholders are notified, and are given the chance to
                claim unclaimed dividends before the transfer happens.
              </p>
            </section>

            <section id="faq" className="mt-8 p-6 ">
              <div className="flex gap-4 items-center ">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700">
                  FAQs about unclaimed shares of Exide Industries Ltd.
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
                  activeSection === "demerger" ? "bg-gray-300" : ""
                }`}
              >
                <a href="#demerger">Demerger</a>
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

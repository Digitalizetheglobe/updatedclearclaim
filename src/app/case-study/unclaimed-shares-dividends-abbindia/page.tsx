"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import fileimg from "../../../../public/images/server-01.png";
import abblogo from "../../../../public/images/Group 2.png";
import tick from "../../../../public/images/tick.svg";
import ecplise from "../../../../public/images/Ellipse.png";
import phone from "../../../../public/images/phone.png";
import email from "../../../../public/images/mail-02.png";
import pin from "../../../../public/images/marker-pin-01.png";
import Faq from "../faq";

export default function UnclaimedsharesABB() {
  const [activeSection, setActiveSection] = useState("");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  const [searchQuery, setSearchQuery] = useState("");
  const sidebarRef = useRef<HTMLElement | null>(null); // Sidebar reference


  // Handle outside click
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
            className="flex-1 bg-gray-50 p-6 overflow-y-auto h-screen"
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
              <span className="text-green-600">ABB India Ltd.</span>
            </h1>
            <p className="mb-6 text-[#00000099] text-justify">
              ABB Ltd., a global leader in electrification, automation,
              robotics, and industrial digitalization, was established in 1988
              after the merger of Asea (Sweden) and Brown Boveri (Switzerland).
              Headquartered in Zurich, Switzerland, ABB operates in over 100
              countries and is one of the world’s largest engineering companies.
              The company is known for providing advanced technologies that help
              industries improve productivity, reduce energy consumption, and
              meet sustainability goals.{" "}
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
              ABB’s key areas of focus include power grids, automation solutions
              for industries such as manufacturing, and robotics. Their products
              range from electrical grids and control systems to industrial
              robots, making ABB a key player in digital industries and the
              energy sector. In India, ABB Ltd. is known for its strong presence
              in electrification and automation, contributing significantly to
              infrastructure projects, manufacturing, and utilities.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
              In recent years, ABB has also made strategic moves to simplify its
              operations, such as the spin-off of its Power Grids business to
              Hitachi and acquisitions like Numocity, which strengthens its
              electric vehicle charging infrastructure. These shifts reflect
              ABB’s broader strategy of focusing on innovation and sustainable
              solutions across various industrial sectors.
            </p>
            <Image
              src={abblogo}
              alt="ABB Logo"
              className="mb-6 mx-auto w-96 h-46"
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
                  <b>Registered Name: </b> ABB India Ltd.
                </li>
                <li>
                  <b>CIN Number: </b>L32202KA1996PLC020055
                </li>
                <li>
                  <b>ISIN Number: </b>INE000A01018
                </li>
              </ul>
            </section>

            <section id="dividend-history" className="mt-6 bg-white p-4 ">
              <div className="flex gap-4">
                <Image src={tick} alt="file" className="w-5 h-6" />

                <h2 className="text-2xl text-gray-700 font-[600px] mb-2">
                  Dividend’s History of ABB India Ltd.
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 mt-4">
                  <thead className="bg-[#00BE5D] text-white">
                    <tr>
                      <th className="text-left p-3">Ex-Date</th>
                      <th className="text-left p-3">Dividend Amount</th>
                      <th className="text-left p-3">Dividend Type</th>
                      <th className="text-left p-3">Record Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">23 Aug 2024</td>
                      <td className="text-gray-600 p-3">10.66</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">23 Aug 2024</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        03 May 2024
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">23.80</td>
                      <td className="text-gray-600 bg-gray-100 p-3">FINAL</td>
                      <td className="text-gray-600 bg-gray-100 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">25 Aug 2023</td>
                      <td className="text-gray-600 p-3">5.50</td>
                      <td className="text-gray-600 p-3">SPECIAL</td>
                      <td className="text-gray-600 p-3">25 Aug 2023</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        27 Apr 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">5.50</td>
                      <td className="text-gray-600 bg-gray-100 p-3">FINAL</td>
                      <td className="text-gray-600 bg-gray-100 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">27 Apr 2022</td>
                      <td className="text-gray-600 p-3">5.20</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        19 Apr 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">5.00</td>
                      <td className="text-gray-600 bg-gray-100 p-3">FINAL</td>
                      <td className="text-gray-600 bg-gray-100 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">16 Jul 2020</td>
                      <td className="text-gray-600 p-3">4.80</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        26 Apr 2019
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">4.80</td>
                      <td className="text-gray-600 bg-gray-100 p-3">FINAL</td>
                      <td className="text-gray-600 bg-gray-100 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">27 Apr 2018</td>
                      <td className="text-gray-600 p-3">4.40</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        28 Apr 2017
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">4.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">13 Apr 2016</td>
                      <td className="text-gray-600 p-3">3.70</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        28 Apr 2015
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">3.70</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">25 Apr 2014</td>
                      <td className="text-gray-600 p-3">3.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        30 Apr 2013
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">3.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">02 May 2012</td>
                      <td className="text-gray-600 p-3">3.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        02 May 2011
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">2.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">03 May 2010</td>
                      <td className="text-gray-600 p-3">2.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        11 May 2009
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">2.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">26 May 2008</td>
                      <td className="text-gray-600 p-3">2.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        14 May 2007
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">2.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">14 May 2007</td>
                      <td className="text-gray-600 p-3">10.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        12 May 2006
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">8.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">11 May 2005</td>
                      <td className="text-gray-600 p-3">7.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        12 Apr 2004
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">6.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">27 Mar 2003</td>
                      <td className="text-gray-600 p-3">6.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        22 Mar 2002
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">0.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">17 May 2001</td>
                      <td className="text-gray-600 p-3">0.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
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
              <p className="text-[#00000099] p-4 text-justify">
                ABB India Ltd. has split the face value 1 time since June 28,
                2007. ABB India Ltd. had last split the face value of its shares
                from ₹10 to ₹2 in 2007.The share has been quoting on an ex-split
                basis from June 28, 2007.
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 mt-4">
                  <thead className="bg-[#00BE5D] text-white">
                    <tr>
                      <th className="text-left p-3">Ex-Date</th>
                      <th className="text-left p-3">Old FV</th>
                      <th className="text-left p-3">New FV</th>
                      <th className="text-left p-3">Record Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">28 Jun 2007</td>
                      <td className="text-gray-600 p-3">10</td>
                      <td className="text-gray-600 p-3">2</td>
                      <td className="text-gray-600 p-3">06 Jul 2007</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                ABB India, a subsidiary of the global technology giant ABB Ltd.,
                has had a few key mergers and restructuring events in its
                history, particularly in recent years as part of ABB Groups
                broader strategic moves.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start p-2">
                  <Image
                    src={ecplise}
                    alt="bullet"
                    className="w-4 h-4 mt-1 mr-2"
                  />
                  <div>
                    <p className="text-gray-500 font-semibold">
                      Merger with Brown Boveri (1988):
                    </p>
                    <p className="text-[#00000099] leading-6 text-justify">
                      ABB India was originally part of a global merger between
                      two major companies: ASEA (Sweden) and Brown Boveri
                      (Switzerland), forming what is now known as ABB Group.
                      This merger established ABB as a global leader in
                      automation, electrification, and industrial technology.
                    </p>
                  </div>
                </li>
                <li className="flex items-start p-2">
                  <Image
                    src={ecplise}
                    alt="bullet"
                    className="w-4 h-4 mt-1 mr-2"
                  />
                  <div>
                    <p className="text-gray-500 font-semibold">
                      Acquisition of Power Grids by Hitachi (2020):
                    </p>
                    <p className="text-[#00000099] leading-6 text-justify">
                      In a significant move, ABB spun off its Power Grids
                      division and sold it to Hitachi in 2020, marking a major
                      restructuring. This deal, which was valued at
                      approximately $11 billion, was aimed at refocusing ABB on
                      its core electrification and automation businesses. The
                      spin-off and sale to Hitachi also led to the formation of
                      Hitachi Energy.
                    </p>
                  </div>
                </li>
                <li className="flex items-start p-2">
                  <Image
                    src={ecplise}
                    alt="bullet"
                    className="w-4 h-4 mt-1 mr-2"
                  />
                  <div>
                    <p className="text-gray-500 font-semibold">
                      Acquisitions to Strengthen Core Businesses:
                    </p>
                    <p className="text-[#00000099] leading-6 text-justify">
                      Over the years, ABB India has also made strategic
                      acquisitions to bolster its automation and electrification
                      sectors, including the acquisition of a controlling stake
                      in Numocity, an electric vehicle charging infrastructure
                      company, in 2022.
                      These moves reflect ABB Indias
                      commitment to remaining at the forefront of technological
                      innovation, particularly in energy efficiency and
                      automation, while adapting to changing market conditions.
                    </p>
                  </div>
                </li>

                <p className="text-[#00000099] leading-6 mb-6 text-justify">
                  These moves reflect ABB Indias commitment to remaining at the
                  forefront of technological innovation, particularly in energy
                  efficiency and automation, while adapting to changing market
                  conditions.
                </p>
              </ul>
            </section>

            <section id="physical-shares" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                  Physical Shares of ABB India Ltd.
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                As of now, ABB India Ltd. has transitioned to a dematerialized
                system for its shares. Historically, physical shares of the
                company were in circulation, but due to regulations and the
                drive for digitalization, most shares are now held
                electronically in demat form. This move was driven by the
                Securities and Exchange Board of India (SEBI) mandates, which
                aimed at reducing fraud and simplifying trading procedures.
              </p>
            </section>

            <section id="unclaimed-shares" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                  Unclaimed Shares and Dividends of ABB India Ltd.
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                Under the Companies Act, 2013, unclaimed dividends and shares
                are transferred to the Investor Education and Protection Fund
                (IEPF) after a period of seven years if not claimed by the
                shareholders. ABB India Ltd., like other companies, adheres to
                this provision. If dividends are unclaimed for seven consecutive
                years, both the unpaid dividend amount and the corresponding
                shares are transferred to the IEPF.
              </p>
            </section>

            <section id="faq" className="mt-8 p-6 ">
              <div className="flex gap-4 items-center ">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700">
                  FAQs about unclaimed shares of ABB India Ltd.
                </h2>
              </div>
            </section>

            <Faq />

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
                className={`hover:bg-gray-200 p-2 rounded-md text-[15px]a${
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

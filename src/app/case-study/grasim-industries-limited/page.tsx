"use client";

import Link from "next/link";
import Image from "next/image";
import grasim from "../../../../public/casestudy/Aditya_Birla_Grasim_Logo.svg.png";
import fileimg from "../../../../public/images/server-01.png";
import tick from "../../../../public/images/tick.svg";
import { useEffect, useState, useRef } from "react";

export default function GrasimIndustriesLimited() {
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
              Grasim
              <span className="text-green-600"> Industries Limited </span>
            </h1>
            <p className="mb-6 text-[#00000099] text-justify">
              Grasim Industries Limited is a manufacturing company from India,
              located in Mumbai. It started out in 1947 as a textile maker and
              has since branched out into various areas, including textile raw
              materials like viscose staple fiber (VSF) and viscose filament
              yarn, as well as chemicals and insulators. They also deal in
              cement and financial services through their subsidiaries,
              UltraTech Cement and Aditya Birla Capital. Grasim is part of the
              larger Aditya Birla Group.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
              Grasim is Indias leading exporter of Viscose Rayon Fiber, serving
              over 50 countries. Headquartered in Mumbai, it has manufacturing
              facilities in Madhya Pradesh, Gujarat, and Karnataka. The company
              produces Viscose Staple Fiber (VSF) through Grasim Industries in
              India, Indo Bharat Rayon in Indonesia, and Thai Rayon Corporation
              in Thailand, which also oversees operations in China.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
              In 2021, Grasim, part of the Aditya Birla Group, entered the
              paints sector with an initial investment of INR 5,000 crore, later
              increased to INR 10,000 crore, to disrupt the market.
            </p>

            <Image
              src={grasim}
              alt="grasim Logo"
              className="mb-6 mx-auto w-[370px] h-[200px]"
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
                  <b>Registered Name: </b> Grasim Industries Ltd
                </li>
                <li>
                  <b>CIN Number: </b> L17124MP1947PLC000410
                </li>
                <li>
                  <b>ISIN Number: </b> INE047A01021
                </li>
              </ul>
            </section>

            <section id="dividend-history" className="mt-6 bg-white p-4 ">
              <div className="flex gap-4">
                <Image src={tick} alt="file" className="w-5 h-6" />

                <h2 className="text-2xl text-gray-700 font-[600px] mb-2">
                  Dividend’s History of Grasim Industries Limited
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 mt-4">
                  <thead className="bg-[#00BE5D] text-white">
                    <tr>
                      <th className="text-left p-3">Announcement Date</th>
                      <th className="text-left p-3">Ex-Dividend Date</th>
                      <th className="text-left p-3">Ex-Dividend Date</th>
                      <th className="text-left p-3">Dividend (Rs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">22 May, 2024</td>
                      <td className="text-gray-600 p-3">06 Aug, 2024</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">10.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        26 May, 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        11 Aug, 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">10.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">24 May, 2022</td>
                      <td className="text-gray-600 p-3">11 Aug, 2022</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">5.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        25 May, 2022
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        11 Aug, 2022
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Special</td>
                      <td className="text-gray-600 bg-gray-100 p-3">5.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">24 May, 2021</td>
                      <td className="text-gray-600 p-3">12 Aug, 2021</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">5.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        25 May, 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        12 Aug, 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Special</td>
                      <td className="text-gray-600 bg-gray-100 p-3">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">15 Jun, 2020</td>
                      <td className="text-gray-600 p-3">26 Aug, 2020</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        24 May, 2019
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        08 Aug, 2019
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">7.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">23 May, 2018</td>
                      <td className="text-gray-600 p-3">31 Aug, 2018</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">6.20</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        19 May, 2017
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        08 Sep, 2017
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">5.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">09 May, 2016</td>
                      <td className="text-gray-600 p-3">07 Sep, 2016</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">22.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        04 May, 2015
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        03 Sep, 2015
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        18.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 mt-4">
                  <thead className="bg-[#00BE5D] text-white">
                    <tr>
                      <th className="text-left p-3">Announcement Date</th>
                      <th className="text-left p-3">Ex-Dividend Date</th>
                      <th className="text-left p-3">Ex-Dividend Date</th>
                      <th className="text-left p-3">Dividend (Rs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">02 May, 2014</td>
                      <td className="text-gray-600 p-3">20 Aug, 2014</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">21.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        06 May, 2013
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        31 Jul, 2013
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">22.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">05 May, 2012</td>
                      <td className="text-gray-600 p-3">27 Aug, 2012</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">22.50</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        11 May, 2011
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        06 Sep, 2011
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">20.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">20 May, 2010</td>
                      <td className="text-gray-600 p-3">10 Aug, 2010</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">30.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        19 May, 2009
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        24 Jul, 2009
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">30.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">29 Apr, 2008</td>
                      <td className="text-gray-600 p-3">22 Jul, 2008</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">30.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        05 Mar, 2007
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        15 Mar, 2007
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Interim</td>
                      <td className="text-gray-600 p-3 bg-gray-100">27.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">25 May, 2021</td>
                      <td className="text-gray-600 p-3">12 Aug, 2021</td>
                      <td className="text-gray-600 p-3">Special</td>
                      <td className="text-gray-600 p-3">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        15 Jun, 2020
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        26 Aug, 2020
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">19 May, 2017</td>
                      <td className="text-gray-600 p-3">08 Sep, 2017</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">5.50</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 mt-4">
                  <thead className="bg-[#00BE5D] text-white">
                    <tr>
                      <th className="text-left p-3">Announcement Date</th>
                      <th className="text-left p-3">Ex-Dividend Date</th>
                      <th className="text-left p-3">Ex-Dividend Date</th>
                      <th className="text-left p-3">Dividend (Rs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">09 May, 2016</td>
                      <td className="text-gray-600 p-3">07 Sep, 2016</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">22.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      04 May, 2015
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      03 Sep, 2015
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">18.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">02 May, 2014</td>
                      <td className="text-gray-600 p-3">20 Aug, 2014</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">21.00</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      06 May, 2013
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      31 Jul, 2013
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">22.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">05 May, 2012</td>
                      <td className="text-gray-600 p-3">27 Aug, 2012</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">22.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      11 May, 2011
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      06 Sep, 2011
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">20.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">20 May, 2010</td>
                      <td className="text-gray-600 p-3">10 Aug, 2010</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">30.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      19 May, 2009
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      24 Jul, 2009
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">30.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">29 Apr, 2008</td>
                      <td className="text-gray-600 p-3">22 Jul, 2008</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">30.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      05 Mar, 2007
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      15 Mar, 2007
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Interim</td>
                      <td className="text-gray-600 p-3 bg-gray-100">27.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">30 Apr, 2001</td>
                      <td className="text-gray-600 p-3">28 May, 2001</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">0.00</td>
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
              <p className="mb-6 text-[#00000099] text-justify">NA </p>
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
                    <th className="text-left p-3">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-gray-600 p-3">11 Aug, 2016</td>
                    <td className="text-gray-600 p-3">06 Oct, 2016</td>
                    <td className="text-gray-600 p-3">10</td>
                    <td className="text-gray-600 p-3">2</td>
                    <td className="text-gray-600 p-3">
                    For every share held,  Holder will get 5 shares. 
                    </td>
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

              <p className="mb-6 text-[#00000099] text-justify">In 2016, the Aditya Birla Group (ABG) announced a merger between Grasim Industries Limited (Grasim) and Aditya Birla Nuvo Limited (ABNL). The merger was intended to create one of Indias largest and most diversified companies. The merger also included the demerger of Aditya Birla Financial Services Limited (ABFSL) from the newly merged company. </p>
              <p className="mb-6 text-[#00000099] text-justify">The merger ratio for the merger of Aditya Birla Nuvo (ABNL) with Grasim Industries was 3 shares of Grasim for every 10 shares of ABNL. For example, a shareholder with 100 shares of ABNL would receive 30 shares of Grasim. </p>

              <p className="mb-6 text-[#00000099] text-justify">The merger also included a demerger of the financial services business into Aditya Birla Financial Services (ABFSL). The demerger ratio for this was 7 shares of ABFSL for every 1 share of Grasim.</p>

            </section>

            <section id="unclaimed-shares" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700">
                Unclaimed Shares and Dividends Of Grasim Industries Ltd Transferred To IEPF
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
              The Central Government set up the Investor Education and Protection Fund (IEPF) to safeguard investors interests and raise awareness. This fund was created under Section 125 of the Companies Act, 2013. Any unpaid or unclaimed money from investors is collected and added to the IEPF. The funds in the 
are used for various purposes as outlined in the Act. The IEPFA Authority is responsible for managing the IEPF, handling refunds for shares, unclaimed dividends, matured deposits, and debentures, while also working to educate investors and protect their interests.

              </p>
            </section>

            <section id="why-my-Share" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700">
                Why my shares of Grasim Industries Ltd are in IEPF?                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
              The company needs to let the shareholder know before moving the shares to IEPF. They do this by sending a letter to the shareholders registered address and also by posting a public notice in the newspaper. If the shareholder doesn’t respond, the company can go ahead and transfer the shares to IEPF. This transfer happens when the shareholder hasn’t claimed dividends for seven or more years in a row.
              </p>
            </section>

            <section id="how-can-claim" className="mt-8 p-6 ">
              <div className="flex gap-4 items-center mb-5">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700">
                  How can I claim IEPF Shares?
                </h2>
              </div>
              <div className="">
                <p className="text-[#00000099] leading-6 mb-6 text-justify">
                  If you want to claim your IEPF shares{" "}
                  <b>
                    <i>CLEARCLAIM VENTURES PRIVATE LIMITED</i>
                  </b>{" "}
                  can help you recover them.
                  <br />
                  <b>
                    <i>
                      {" "}
                      Clearclaim Ventures Private Limited helps you to recover
                      your old shares which you cannot access due to several
                      reasons. Clearclaim ventures private limited has recovered
                      immense number of IEPF shares smoothly.
                    </i>
                  </b>
                  <b>
                    <i>
                      {" "}
                      At Clearclaim, our goal is to help you reclaim what is rightfully yours, allowing you to focus on what matters most to you. Trust us to handle your IEPF claims and unclaimed assets with the utmost care and expertise, so you can enjoy peace of mind knowing that you are in capable hands.
                    </i>
                  </b>
                  <br />
                  You can visit us at- Office No. C 201, Vantage Tower by Bramha
                  Corp, NDA Pashan Rd, Ram Nagar, Bavdhan, Pune, Maharashtra
                  411021
                </p>
                <Link
                  className="text-md text-[#00000099] "
                  href="https://www.clearclaim.in/"
                >
                  https://www.clearclaim.in/
                </Link>
              </div>
            </section>

            <section id="company-details" className="p-4 mt-4">
              {/* Header Section */}
              <div className="flex items-center gap-4 mb-4 ">
                <Image src={tick} alt="file" className="w-5 h-6" />
                <h2 className="text-2xl text-gray-700 ">Company Details</h2>
              </div>

              {/* Numbers with Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-2">
                  {/* First Text */}
                  <p className="text-md text-[#00000099]">
                  Grasim Industries Ltd 
                  </p>

                  {/* Link */}
                  <Link
                    className="text-md text-[#00000099] "
                    href="https://www.grasim.com/"
                  >
                   https://www.grasim.com/

                  </Link>
                </div>
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
                className={`hover:bg-gray-200 p-2 rounded-mdtext-[15px] ${
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
                  activeSection === "unclaimed-shares" ? "bg-gray-300" : ""
                }`}
              >
                <a href="#unclaimed-shares">Unclaimed Shares</a>
              </li>
              <li
                className={`hover:bg-gray-200 p-2 rounded-md text-[15px]${
                  activeSection === "why-my-Share" ? "bg-gray-300" : ""
                }`}
              >
                <a href="#why-my-Share">
                  Why my shares of Grasim Industries Limited are
                  in IEPF?
                </a>
              </li>
              <li
                className={`hover:bg-gray-200 p-2 rounded-md text-[15px]${
                  activeSection === "how-can-claim" ? "bg-gray-300" : ""
                }`}
              >
                <a href="#how-can-claim">How can I claim IEPF Shares?</a>
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

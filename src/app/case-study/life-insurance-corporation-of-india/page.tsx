"use client";
import { useEffect, useState, useRef } from "react";

import Link from "next/link";
import Image from "next/image";
import LT from "../../../../public/casestudy/LTI.jpg";
import fileimg from "../../../../public/images/server-01.png";
import tick from "../../../../public/images/tick.svg";


export default function LarsenandToubro() {
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
            Larsen
              <span className="text-green-600"> And Toubro</span>
            </h1>
            <p className="mb-6 text-[#00000099] text-justify">
            Larsen & Toubro (L&T) is a renowned Indian multinational conglomerate, established in 1938 by two Danish engineers, Henning Holck-Larsen and Soren Kristian Toubro. Headquartered in Mumbai, India, L&T operates in a wide array of sectors, including engineering, construction, manufacturing, technology, and financial services. It has become one of the largest and most respected companies in India and globally.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
            L&T’s core business is in the construction and infrastructure sector, where it has built iconic projects such as highways, bridges, dams, and airports, playing a critical role in India’s urbanization and infrastructure development. The company also has a strong presence in the defense, power, and heavy engineering industries, offering solutions in power generation, water treatment, and defense systems.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
            L&T's technological division is highly regarded for innovation and includes products like IT services, automation, and smart city technologies. Through its subsidiary L&T Infotech, the company is a major player in the global IT services industry.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
            L&T’s financial services division encompasses a wide range of products, from investment and insurance services to asset management, enhancing its footprint in the financial sector.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
            The company prides itself on its commitment to quality, sustainability, and corporate responsibility. Its dedication to excellence, long-term partnerships, and a strong focus on customer satisfaction have earned L&T a reputation as a leader in engineering and construction. It continues to drive economic growth and progress in India and across the world.
            </p>
            <Image
              src={LT}
              alt="LT"
              className="mb-6 mx-auto w-52 h-30"
            />
            <section className="bg-white p-4">
              <div className="flex gap-4">
                <Image src={tick} alt="file" className="w-5 h-6" />
                <h2 className="text-2xl text-gray-700 font-[600px] mb-2">
                  Company Details
                </h2>
              </div>
              <ul className="space-y-4 mt-4 text-gray-500">
                <li>
                  <b>Registered Name: </b> Larsen And Toubro
                </li>
                <li>
                  <b>CIN Number: </b>L99999MH1946PLC004768
                </li>
                <li>
                  <b>ISIN Number: </b>INE018A01030
                </li>
              </ul>
            </section>

            <section id="dividend-history" className="mt-6 bg-white p-4 ">
              <div className="flex gap-4">
                <Image src={tick} alt="file" className="w-5 h-6" />

                <h2 className="text-2xl text-gray-700 font-[600px] mb-2">
                  Dividend History Of Adani Ports and Special Economic Zone
                  Limited
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 mt-4">
                  <thead className="bg-[#00BE5D] text-white">
                    <tr>
                      <th className="text-left p-3">Ex-Dividend Date </th>
                      <th className="text-left p-3">Dividend Type </th>
                      <th className="text-left p-3">Dividend (Rs)</th>
                      <th className="text-left p-3">-</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">08 May, 2024</td>
                      <td className="text-gray-600 p-3">20 Jun, 2024</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">28.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      10 May, 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      02 Aug, 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">24.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">20 Jul, 2023</td>
                      <td className="text-gray-600 p-3">02 Aug, 2023 </td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">6.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      12 May, 2022
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      21 Jul, 2022
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">22.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">14 May, 2021</td>
                      <td className="text-gray-600 p-3">28 Jul, 2021 </td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">18.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      23 Oct, 2020
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      04 Nov, 2020
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Special</td>
                      <td className="text-gray-600 bg-gray-100 p-3">18.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">05 Jun, 2020 </td>
                      <td className="text-gray-600 p-3">05 Aug, 2020</td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">8.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        24 May, 2017
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        31 Jul, 2017
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">1.30</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">13 Mar, 2020 </td>
                      <td className="text-gray-600 p-3">24 Mar, 2020</td>
                      <td className="text-gray-600 p-3">Interim </td>
                      <td className="text-gray-600 p-3">10.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      10 May, 2019
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      24 Jul, 2019
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">18.00 </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">28 May, 2018 </td>
                      <td className="text-gray-600 p-3">14 Aug, 2018</td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">16.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      31 May, 2017
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      11 Aug, 2017
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">14.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">25 May, 2016 </td>
                      <td className="text-gray-600 p-3">18 Aug, 2016 </td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">18.25</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      01 Jun, 2015
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      01 Sep, 2015
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">16.25</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">30 May, 2014</td>
                      <td className="text-gray-600 p-3">13 Aug, 2014 </td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">14.25</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      22 May, 2013
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      13 Aug, 2013
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">12.33</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">14 May, 2012 </td>
                      <td className="text-gray-600 p-3">14 Aug, 2012 </td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">16.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      19 May, 2011
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      17 Aug, 2011
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">14.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">17 May, 2010 </td>
                      <td className="text-gray-600 p-3">17 Aug, 2010 </td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">12.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        03 Feb, 2009
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      18 Aug, 2009
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">10.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">29 May, 2008</td>
                      <td className="text-gray-600 p-3">20 Aug, 2008</td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">15.00</td>
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
                      <td className="text-gray-600 p-3">29 May, 2017</td>
                      <td className="text-gray-600 p-3">13 Jul, 2017</td>
                      <td className="text-gray-600 p-3">1:2</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      22 May, 2013
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      11 Jul, 2013
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">1:2</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">29 May, 2008</td>
                      <td className="text-gray-600 p-3">01 Oct, 2008</td>
                      <td className="text-gray-600 p-3">1:1</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      07 Jun, 2006
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      28 Sep, 2006
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">1:1</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">15 Apr, 1986</td>
                      <td className="text-gray-600 p-3">-</td>
                      <td className="text-gray-600 p-3">3.5</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      10 Nov, 1981
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      -
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">3:5</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">20 Sep, 1976</td>
                      <td className="text-gray-600 p-3">-</td>
                      <td className="text-gray-600 p-3">1.2</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      17 Feb, 1973
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      -
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">1:3</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">01 Aug, 1969</td>
                      <td className="text-gray-600 p-3">-</td>
                      <td className="text-gray-600 p-3">1.10</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      09 Dec, 1964
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      -
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">1:7</td>
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
              <p className="text-[#00000099] p-4">
                NA
              </p>
            </section>
            {/* Add more content to demonstrate scrolling */}
            <section id="mergers-amalgamation" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                  Mergers / Amalgamation
                </h2>
              </div>
              <p className="text-gray-500">Under the demerger scheme, shareholders of L&T received 5 shares of L&T and 4 shares of the newly formed UltraTech CemCo Limited for every 10 shares held in L&T prior to the demerger.  Fractional shares were partially sold in Grasim's open offer, and the remaining fractional shares of both companies were sold in the open market with proceeds sent to shareholders. L&T shares resumed trading on June 23, 2004 on the BSE and NSE, while UltraTech CemCo Limited shares began trading on August 24, 2004 on both exchanges after the demerger.</p>
            </section>

            <section id="unclaimed-shares" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700">
                Unclaimed Shares and Dividends Of Larsen and Toubro are in IEPF 
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
              The Central Government introduced the Investor Education and Protection Fund (IEPF) to protect investors’  interests and promote awareness. It is established under Section 125 of the Companies Act, 2013 (Act). The unpaid or unclaimed amounts belonging to a company’s investors are pooled and credited into the IEPF. The IEPF funds are utilized for various purposes as provided under the Act.  The IEPFA Authority is entrusted with the responsibility of administration of the Investor Education Protection Fund (IEPF), making refunds of shares, unclaimed  dividends, matured deposits/debentures etc. to investors, promoting awareness among investors, and protecting the interests of the investors.

              </p>
            </section>

            <section id="why-my-Share" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700">
                Why my shares of Larsen and Toubro are in IEPF?
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                Before transferring the shares to IEPF the company has to notify
                the shareholder by sending letter to the registered address of
                the shareholder. The company also has to notify by giving a
                public notification in the newspaper. If the shareholder does not
                communicate back, the company can transfer the shares to IEPF.
                The company transfers the shares to IEPF when the dividends of
                seven or more consecutive years are not claimed by the
                shareholder.
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
                <br />
                You can visit us at- Office No. C 201, Vantage Tower by Bramha
                Corp, NDA Pashan Rd, Ram Nagar, Bavdhan, Pune, Maharashtra
                411021
               
              </p>
              <Link className="text-md text-[#00000099] " href="https://www.clearclaim.in/">https://www.clearclaim.in/</Link>
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
                  Larsen and Toubro 
                  </p>

                  {/* Link */}
                  <Link
                    className="text-md text-[#00000099] "
                    href="https://investors.larsentoubro.com/"
                  >
                  https://investors.larsentoubro.com/ 
                  </Link>
                </div>
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
                  Why my Shares of Larsen & Toubro are in IEPF?
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

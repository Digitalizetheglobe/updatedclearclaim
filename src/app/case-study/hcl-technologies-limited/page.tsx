"use client";
import { useEffect, useState, useRef } from "react";

import Link from "next/link";
import Image from "next/image";
import hcl from "../../../../public/casestudy/HCL_tech.avif";
import fileimg from "../../../../public/images/server-01.png";
import tick from "../../../../public/images/tick.svg";

export default function HCLTechnologiesLimited() {
  const [activeSection, setActiveSection] = useState("");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  const [searchQuery, setSearchQuery] = useState("");
  const sidebarRef = useRef<HTMLElement | null>(null); // Sidebar reference
  // Handle outside click
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
    {
      name: "HCL Technologies Limited",
      path: "/case-study/hcl-technologies-limited",
    },
    {
      name: "HDFC Bank Limited",
      path: "/case-study/hdfc-bank-limited",
    },
    {
        name: "HDFC Bank Limited",
        path: "/case-study/hdfc-bank-limited",
      },
  ];
  //
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
              HCL
              <span className="text-green-600"> Technologies Limited</span>
            </h1>
            <p className="mb-6 text-[#00000099] text-justify">
              HCL Technologies Limited, operating under the name HCLTech, is a
              multinational information technology consulting firm based in
              Noida, Uttar Pradesh, India.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
              Established by Shiv Nadar, the company was separated from HCL in
              1991 to focus on the software services sector. HCLTech maintains a
              presence in 59 countries and employs more than 220,000
              individuals.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
              In 2019, HCL Technologies established a software product division
              known as HCLSoftware, following the acquisition of IBM software
              tools.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
              HCLTechs HCLSoftware division is engaged in the development,
              marketing, and support of software solutions that facilitate
              digital transformation, data management, analytics and insights,
              artificial intelligence and automation, as well as enterprise
              security.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
              The full form of HCL is Hindustan Computers Limited . HCL is a
              multinational IT company started in India.
            </p>

            <Image
              src={hcl}
              alt="hcl Logo"
              className="mb-6 mx-auto w-[300px] h-[200px]"
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
                  <b>Registered Name: </b> HCL Technologies Ltd Limited
                </li>
                <li>
                  <b>CIN Number: </b> L74140DL1991PLC046369
                </li>
                <li>
                  <b>ISIN Number: </b> INE860A01027
                </li>
              </ul>
            </section>

            <section id="dividend-history" className="mt-6 bg-white p-4 ">
              <div className="flex gap-4">
                <Image src={tick} alt="file" className="w-5 h-6" />

                <h2 className="text-2xl text-gray-700 font-[600px] mb-2">
                  Dividend History Of HCL Technologies Limited
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 mt-4">
                  <thead className="bg-[#00BE5D] text-white">
                    <tr>
                      <th className="text-left p-3">Announcement Date </th>
                      <th className="text-left p-3">Ex-Dividend Date </th>
                      <th className="text-left p-3">Dividend Type</th>
                      <th className="text-left p-3">Dividend (Rs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">17 Sep, 2024</td>
                      <td className="text-gray-600 p-3">22 Oct, 2024</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">12.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        18 Jun, 2024
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        23 Jul, 2024
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">0.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">20 Mar, 2024</td>
                      <td className="text-gray-600 p-3">07 May, 2024 </td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">18.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        15 Dec, 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        19 Jan, 2024
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">12.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">15 Sep, 2023</td>
                      <td className="text-gray-600 p-3">20 Oct, 2023 </td>
                      <td className="text-gray-600 p-3">Interim </td>
                      <td className="text-gray-600 p-3">12.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        15 Jun, 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        20 Jul, 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">10.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">17 Mar, 2023 </td>
                      <td className="text-gray-600 p-3">28 Apr, 2023 </td>
                      <td className="text-gray-600 p-3">Interim </td>
                      <td className="text-gray-600 p-3">18.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        16 Dec, 2022
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        19 Jan, 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">10.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">09 Mar, 2016 </td>
                      <td className="text-gray-600 p-3">22 Mar, 2016 </td>
                      <td className="text-gray-600 p-3">Interim </td>
                      <td className="text-gray-600 p-3">1.10</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        12 Oct, 2022
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        19 Oct, 2022
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">10.00 </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">04 Jul, 2022 </td>
                      <td className="text-gray-600 p-3">19 Jul, 2022 </td>
                      <td className="text-gray-600 p-3">Interim </td>
                      <td className="text-gray-600 p-3">10.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        01 Apr, 2022
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        28 Apr, 2022
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">18.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 mt-4">
                  <thead className="bg-[#00BE5D] text-white">
                    <tr>
                      <th className="text-left p-3">Announcement Date </th>
                      <th className="text-left p-3">Ex-Dividend Date </th>
                      <th className="text-left p-3">Dividend Type</th>
                      <th className="text-left p-3">Dividend (Rs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">24 Dec, 2021</td>
                      <td className="text-gray-600 p-3">20 Jan, 2022</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">10.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        15 Sep, 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        21 Oct, 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">10.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">07 Jul, 2021</td>
                      <td className="text-gray-600 p-3">27 Jul, 2021</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">6.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        13 Apr, 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        29 Apr, 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">6.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">15 Sep, 2023</td>
                      <td className="text-gray-600 p-3">20 Oct, 2023 </td>
                      <td className="text-gray-600 p-3">Interim </td>
                      <td className="text-gray-600 p-3">12.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        14 Apr, 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        29 Apr, 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Special</td>
                      <td className="text-gray-600 bg-gray-100 p-3">10.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">15 Jan, 2021 </td>
                      <td className="text-gray-600 p-3">21 Jan, 2021</td>
                      <td className="text-gray-600 p-3">Interim </td>
                      <td className="text-gray-600 p-3">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        28 Sep, 2020
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        22 Oct, 2020
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">07 May, 2020 </td>
                      <td className="text-gray-600 p-3">14 Sep, 2020 </td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        03 Jul, 2020
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        23 Jul, 2020
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">2.00 </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">15 Jun, 2023</td>
                      <td className="text-gray-600 p-3">20 Jul, 2023</td>
                      <td className="text-gray-600 p-3">Interim </td>
                      <td className="text-gray-600 p-3">10.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        16 Dec, 2022
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        19 Jan, 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">10.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 mt-4">
                  <thead className="bg-[#00BE5D] text-white">
                    <tr>
                      <th className="text-left p-3">Announcement Date </th>
                      <th className="text-left p-3">Ex-Dividend Date </th>
                      <th className="text-left p-3">Dividend Type</th>
                      <th className="text-left p-3">Dividend (Rs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">12 Oct, 2022</td>
                      <td className="text-gray-600 p-3">19 Oct, 2022</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">10.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        04 Jul, 2022
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        19 Jul, 2022
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">10.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">01 Apr, 2022</td>
                      <td className="text-gray-600 p-3">28 Apr, 2022</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">18.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        24 Dec, 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        20 Jan, 2022
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">10.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">15 Sep, 2021</td>
                      <td className="text-gray-600 p-3">21 Oct, 2021 </td>
                      <td className="text-gray-600 p-3">Interim </td>
                      <td className="text-gray-600 p-3">10.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        07 Jul, 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        27 Jul, 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">6.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">13 Apr, 2021</td>
                      <td className="text-gray-600 p-3">29 Apr, 2021</td>
                      <td className="text-gray-600 p-3">Interim </td>
                      <td className="text-gray-600 p-3">6.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        14 Apr, 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        29 Apr, 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Special</td>
                      <td className="text-gray-600 bg-gray-100 p-3">10.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">15 Jan, 2021</td>
                      <td className="text-gray-600 p-3">15 Jan, 2021</td>
                      <td className="text-gray-600 p-3">Interim </td>
                      <td className="text-gray-600 p-3">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        28 Sep, 2020
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        22 Oct, 2020
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">4.00 </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">07 May, 2020 </td>
                      <td className="text-gray-600 p-3">14 Sep, 2020</td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        15 Jan, 2019
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        05 Feb, 2019
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">2.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 mt-4">
                  <thead className="bg-[#00BE5D] text-white">
                    <tr>
                      <th className="text-left p-3">Announcement Date </th>
                      <th className="text-left p-3">Ex-Dividend Date </th>
                      <th className="text-left p-3">Dividend Type</th>
                      <th className="text-left p-3">Dividend (Rs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">12 Oct, 2018</td>
                      <td className="text-gray-600 p-3">30 Oct, 2018</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        13 Jul, 2018
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        02 Aug, 2018
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">18 Apr, 2018</td>
                      <td className="text-gray-600 p-3">09 May, 2018</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        08 Jan, 2018
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        29 Jan, 2018
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">16 Oct, 2017</td>
                      <td className="text-gray-600 p-3">01 Nov, 2017</td>
                      <td className="text-gray-600 p-3">Interim </td>
                      <td className="text-gray-600 p-3">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        17 Jul, 2017
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        03 Aug, 2017
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">11 May, 2017</td>
                      <td className="text-gray-600 p-3">24 May, 2017</td>
                      <td className="text-gray-600 p-3">Interim </td>
                      <td className="text-gray-600 p-3">6.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        13 Jan, 2017
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        01 Feb, 2017
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">6.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">10 Oct, 2016</td>
                      <td className="text-gray-600 p-3">27 Oct, 2016</td>
                      <td className="text-gray-600 p-3">Interim </td>
                      <td className="text-gray-600 p-3">6.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        22 Jul, 2016
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        10 Aug, 2016
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">6.00 </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">18 Apr, 2016</td>
                      <td className="text-gray-600 p-3">05 May, 2016</td>
                      <td className="text-gray-600 p-3">Interim </td>
                      <td className="text-gray-600 p-3">6.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        07 Oct, 2014
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        21 Oct, 2014
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">6.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 mt-4">
                  <thead className="bg-[#00BE5D] text-white">
                    <tr>
                      <th className="text-left p-3">Announcement Date </th>
                      <th className="text-left p-3">Ex-Dividend Date </th>
                      <th className="text-left p-3">Dividend Type</th>
                      <th className="text-left p-3">Dividend (Rs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">28 Jul, 2014</td>
                      <td className="text-gray-600 p-3">05 Aug, 2014</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">12.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        28 Mar, 2014
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        22 Apr, 2014
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">03 Jan, 2014</td>
                      <td className="text-gray-600 p-3">22 Jan, 2014</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        31 Jul, 2013
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        18 Dec, 2013
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">6.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">04 Oct, 2013</td>
                      <td className="text-gray-600 p-3">22 Oct, 2013 </td>
                      <td className="text-gray-600 p-3">Interim </td>
                      <td className="text-gray-600 p-3">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        05 Apr, 2013
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        22 Apr, 2013
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">17 Jan, 2013</td>
                      <td className="text-gray-600 p-3">21 Jan, 2013</td>
                      <td className="text-gray-600 p-3">Interim </td>
                      <td className="text-gray-600 p-3">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        25 Jul, 2012
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        19 Oct, 2012
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">25 Jul, 2012</td>
                      <td className="text-gray-600 p-3">19 Oct, 2012</td>
                      <td className="text-gray-600 p-3">Interim </td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        26 Jul, 2012
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        19 Oct, 2022
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">2.00 </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">04 Apr, 2012</td>
                      <td className="text-gray-600 p-3">23 Apr, 2012</td>
                      <td className="text-gray-600 p-3">Interim </td>
                      <td className="text-gray-600 p-3">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        29 Jul, 2010
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        22 Oct, 2010
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">1.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 mt-4">
                  <thead className="bg-[#00BE5D] text-white">
                    <tr>
                      <th className="text-left p-3">Announcement Date </th>
                      <th className="text-left p-3">Ex-Dividend Date </th>
                      <th className="text-left p-3">Dividend Type</th>
                      <th className="text-left p-3">Dividend (Rs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">30 Jul, 2010</td>
                      <td className="text-gray-600 p-3">22 Oct, 2010</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">1.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        09 Apr, 2010
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        26 Apr, 2010
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">1.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">12 Jan, 2010</td>
                      <td className="text-gray-600 p-3">29 Jan, 2010</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">1.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        25 Aug, 2009
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        02 Dec, 2009
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">1.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">15 Oct, 2009</td>
                      <td className="text-gray-600 p-3">30 Oct, 2009</td>
                      <td className="text-gray-600 p-3">Interim </td>
                      <td className="text-gray-600 p-3">1.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        13 Apr, 2009
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        24 Apr, 2009
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">1.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">13 Jan, 2009</td>
                      <td className="text-gray-600 p-3">28 Jan, 2009</td>
                      <td className="text-gray-600 p-3">Interim </td>
                      <td className="text-gray-600 p-3">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        01 Aug, 2008
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        22 Oct, 2008
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">3.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">02 Aug, 2008</td>
                      <td className="text-gray-600 p-3">22 Oct, 2008</td>
                      <td className="text-gray-600 p-3">Interim </td>
                      <td className="text-gray-600 p-3">3.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        07 Jan, 2008
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        07 Jan, 2008
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">2.00 </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">21 Aug, 2006</td>
                      <td className="text-gray-600 p-3">04 Dec, 2006</td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        28 Sep, 2006
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        20 Oct, 2006
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">4.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 mt-4">
                  <thead className="bg-[#00BE5D] text-white">
                    <tr>
                      <th className="text-left p-3">Announcement Date </th>
                      <th className="text-left p-3">Ex-Dividend Date </th>
                      <th className="text-left p-3">Dividend Type</th>
                      <th className="text-left p-3">Dividend (Rs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">30 Mar, 2006</td>
                      <td className="text-gray-600 p-3">25 Apr, 2006</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        02 Jan, 2006
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        24 Jan, 2006
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">23 Aug, 2005</td>
                      <td className="text-gray-600 p-3">06 Dec, 2005</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        06 Oct, 2005
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        31 Oct, 2005
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        Interim{" "}
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">06 Apr, 2005</td>
                      <td className="text-gray-600 p-3">29 Apr, 2005</td>
                      <td className="text-gray-600 p-3">Interim </td>
                      <td className="text-gray-600 p-3">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        07 Jan, 2005
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        01 Feb, 2005
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">15 Sep, 2004</td>
                      <td className="text-gray-600 p-3">08 Dec, 2004</td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        12 Aug, 2003
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        17 Dec, 2003
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">01 Nov, 2003</td>
                      <td className="text-gray-600 p-3">18 Nov, 2003</td>
                      <td className="text-gray-600 p-3">Interim </td>
                      <td className="text-gray-600 p-3">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        19 Mar, 2003
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        15 May, 2003
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">2.00 </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">30 Aug, 2002</td>
                      <td className="text-gray-600 p-3">17 Oct, 2002</td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">0.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        10 Aug, 2000
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        25 Sep, 2000
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">0.00</td>
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
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 mt-4">
                  <thead className="bg-[#00BE5D] text-white">
                    <tr>
                      <th className="text-left p-3">Announcement Date</th>
                      <th className="text-left p-3">Ex-Bonus Date</th>
                      <th className="text-left p-3">Bonus Ratio</th>
                      <th className="text-left p-3">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">23 Oct, 2019</td>
                      <td className="text-gray-600 p-3">05 Dec, 2019</td>
                      <td className="text-gray-600 p-3">1:1</td>
                      <td className="text-gray-600 p-3">
                        For every 1 share held; Holder will receive 1 bonus
                        shares.
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        30 Jan, 2015
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        19 Mar, 2015
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">1:1</td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        For every 1 share held; Holder will receive 1 bonus
                        shares.
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">14 Dec, 2006</td>
                      <td className="text-gray-600 p-3">15 Mar, 2007</td>
                      <td className="text-gray-600 p-3">1:1</td>
                      <td className="text-gray-600 p-3">
                        For every 1 share held; Holder will receive 1 bonus
                        shares.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="split" className="mt-6 bg-white p-4 ">
              <div className="flex gap-4">
                <Image src={tick} alt="file" className="w-5 h-6" />

                <h2 className="text-2xl text-gray-700 font-[600px] mb-2">
                  Split
                </h2>
              </div>

              <div className="overflow-x-auto">
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
                      <td className="text-gray-600 p-3">24 Oct, 2000</td>
                      <td className="text-gray-600 p-3">27 Nov, 2000</td>
                      <td className="text-gray-600 p-3">4</td>
                      <td className="text-gray-600 p-3">2</td>
                      <td className="text-gray-600 p-3">
                        For every share held, the holder will receive 2 shares
                        post the split adjustment.
                      </td>
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
              <p className="text-gray-500">
                In 2022, HCL Technologies rebranded as HCLTech. In May 2024,
                HCLTech announced the acquisition of select assets of
                Communications Technology Group, a business division of Hewlett
                Packard Enterprise (HPE), for $225 million.
              </p>
            </section>

            <section id="unclaimed-shares" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700">
                  Unclaimed Shares and Dividends Of HCL Technologies Ltd
                  Transferred To IEPF
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                he Central Government set up the Investor Education and
                Protection Fund (IEPF) to safeguard investors interests and
                raise awareness. This fund was created under Section 125 of the
                Companies Act, 2013. Any unpaid or unclaimed money from
                investors is collected and added to the IEPF. The funds in the
                are used for various purposes as outlined in the Act. The IEPFA
                Authority is responsible for managing the IEPF, handling refunds
                for shares, unclaimed dividends, matured deposits, and
                debentures, while also working to educate investors and protect
                their interests.
              </p>
            </section>

            <section id="why-my-Share" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700">
                  Why my shares of HCL Technologies Ltd are in IEPF?
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                The company needs to let the shareholder know before moving the
                shares to IEPF. They do this by sending a letter to the
                shareholders registered address and also by posting a public
                notice in the newspaper. If the shareholder doesn’t respond, the
                company can go ahead and transfer the shares to IEPF. This
                transfer happens when the shareholder hasn’t claimed dividends
                for seven or more years in a row.
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
                      At Clearclaim, our goal is to help you reclaim what is
                      rightfully yours, allowing you to focus on what matters
                      most to you. Trust us to handle your IEPF claims and
                      unclaimed assets with the utmost care and expertise, so
                      you can enjoy peace of mind knowing that you are in
                      capable hands.
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
                    HCL Technologies Ltd
                  </p>

                  {/* Link */}
                  <Link
                    className="text-md text-[#00000099] "
                    href="https://www.hcltech.com/"
                  >
                    https://www.hcltech.com/
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
                  Why my shares of HCL Technologies Ltd are in IEPF?
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

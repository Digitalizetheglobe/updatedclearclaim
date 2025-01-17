"use client";

import Link from "next/link";
import Image from "next/image";
import cummins from "../../../../public/casestudy/Cummins India Limited 5.jpg";
import fileimg from "../../../../public/images/server-01.png";
import tick from "../../../../public/images/tick.svg";
import { useEffect, useState, useRef } from "react";

export default function CumminsIndiaLimited() {
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
              {" "}
              Cummins
              <span className="text-green-600"> India Limited (CIL)</span>
            </h1>
            <p className="mb-6 text-[#00000099] text-justify">
              Cummins India Limited (CIL) is a subsidiary of Cummins Inc., the
              worlds largest independent designer and manufacturer of diesel
              engines. CIL is Indias leading manufacturer of diesel and natural
              gas engines, and is involved in designing, manufacturing,
              distributing, and servicing engines and related components.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
              <b>Engine Business: </b>Manufactures engines for commercial
              vehicles and off-highway equipment.
            </p>
            <p className="mb-6 text-[#00000099] text-justify ">
              <b>Power Systems Business:</b>Designs and manufactures high
              horsepower engines for marine, railways, defense, and mining.
            </p>
            <p className="mb-6 text-[#00000099] text-justify ">
              <b>Distribution Business:</b>Provides products, services, and
              solutions for Cummins equipment.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
              Cummins India Ltd (CIL) is a subsidiary of Cummins Inc.,
              manufactures and markets diesel and fuel engines. It is engaged in
              the design, manufacturing, and distribution of engines and related
              technologies, including filtration, fuel systems, emission
              solutions, air handling, and electrical power generation systems.
            </p>

            <Image
              src={cummins}
              alt="cummins Logo"
              className="mb-6 mx-auto w-[350px] h-[200px]"
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
                  <b>Registered Name: </b> Cummins India Limited
                </li>
                <li>
                  <b>CIN Number: </b> L29112PN1962PLC012276
                </li>
                <li>
                  <b>ISIN Number: </b> INE298A01020
                </li>
              </ul>
            </section>

            <section id="dividend-history" className="mt-6 bg-white p-4 ">
              <div className="flex gap-4">
                <Image src={tick} alt="file" className="w-5 h-6" />

                <h2 className="text-2xl text-gray-700 font-[600px] mb-2">
                  Dividend’s History of Cummins India Limited
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 mt-4">
                  <thead className="bg-[#00BE5D] text-white">
                    <tr>
                      <th className="text-left p-3">Announcement Date</th>
                      <th className="text-left p-3">Ex-Dividend Date</th>
                      <th className="text-left p-3">Dividend Type</th>
                      <th className="text-left p-3">Dividend (Rs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">29 May, 2024</td>
                      <td className="text-gray-600 p-3">19 Jul, 2024</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">20.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        07 Feb, 2024
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        21 Feb, 2024
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">18.00</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3">24 May, 2023</td>
                      <td className="text-gray-600 p-3">26 Jul, 2023</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">13.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        08 Feb, 2023
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        21 Feb, 2023
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Interim</td>
                      <td className="text-gray-600 p-3 bg-gray-100">12.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">26 May, 2022</td>
                      <td className="text-gray-600 p-3">02 Aug, 2022</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">10.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        10 Feb, 2022
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        21 Feb, 2022
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Interim</td>
                      <td className="text-gray-600 p-3 bg-gray-100">8.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">26 May, 2021</td>
                      <td className="text-gray-600 p-3">04 Aug, 2021</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">8.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        28 Jan, 2021
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        09 Feb, 2021
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">7.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">17 Jun, 2020</td>
                      <td className="text-gray-600 p-3">17 Aug, 2020</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">7.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        28 Jan, 2020
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        07 Feb, 2020
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">7.00</td>
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
                      <th className="text-left p-3">Dividend Type</th>
                      <th className="text-left p-3">Dividend (Rs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">24 May, 2018</td>
                      <td className="text-gray-600 p-3">02 Aug, 2018</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">10.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        01 Feb, 2018
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        15 Feb, 2018
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">5.00</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3">18 May, 2017</td>
                      <td className="text-gray-600 p-3">27 Jul, 2017</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">9.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        01 Feb, 2017
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        09 Feb, 2017
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Interim</td>
                      <td className="text-gray-600 p-3 bg-gray-100">5.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">25 May, 2016</td>
                      <td className="text-gray-600 p-3">28 Jul, 2016</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">9.00</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        02 Feb, 2016
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        11 Feb, 2016
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Interim</td>
                      <td className="text-gray-600 p-3 bg-gray-100">5.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">28 May, 2015</td>
                      <td className="text-gray-600 p-3">30 Jul, 2015</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">9.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        01 Feb, 2017
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        09 Feb, 2017
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Interim</td>
                      <td className="text-gray-600 p-3 bg-gray-100">5.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">25 May, 2016</td>
                      <td className="text-gray-600 p-3">28 Jul, 2016</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">9.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        02 Feb, 2016
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        11 Feb, 2016
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Interim</td>
                      <td className="text-gray-600 p-3 bg-gray-100">5.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">28 May, 2015</td>
                      <td className="text-gray-600 p-3">30 Jul, 2015</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">9.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        27 Aug, 2014
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        18 Sep, 2014
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Interim</td>
                      <td className="text-gray-600 p-3 bg-gray-100">5.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">10 Feb, 2022</td>
                      <td className="text-gray-600 p-3">21 Feb, 2022</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">8.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        26 May, 2021
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        04 Feb, 2021
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">8.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">28 Jan, 2021</td>
                      <td className="text-gray-600 p-3">09 Feb, 2021</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">7.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        17 Jun, 2020
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        17 Aug, 2020
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">7.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">28 Jan, 2020</td>
                      <td className="text-gray-600 p-3">07 Feb, 2020</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">7.00</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        17 Jun, 2020
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        17 Aug, 2020
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">7.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">28 Jan, 2020</td>
                      <td className="text-gray-600 p-3">07 Feb, 2020</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">7.00</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        10 Feb, 2022
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        21 Feb, 2022
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Interim</td>
                      <td className="text-gray-600 p-3 bg-gray-100">8.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">26 May, 2021</td>
                      <td className="text-gray-600 p-3">04 Aug, 2021</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">8.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        28 Jan, 2021
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        09 Feb, 2021
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Interim</td>
                      <td className="text-gray-600 p-3 bg-gray-100">7.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">17 Jun, 2020</td>
                      <td className="text-gray-600 p-3">17 Aug, 2020</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">7.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        28 Jan, 2020
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        07 Feb, 2020
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Interim</td>
                      <td className="text-gray-600 p-3 bg-gray-100">7.00</td>
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
                      <th className="text-left p-3">Dividend Type</th>
                      <th className="text-left p-3">Dividend (Rs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">31 May, 2010</td>
                      <td className="text-gray-600 p-3">05 Aug, 2010</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">6.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        04 Dec, 2009
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        14 Dec, 2009
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">6.00</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3">27 May, 2009</td>
                      <td className="text-gray-600 p-3">23 Jul, 2009</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">2.60</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        19 Jan, 2009
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        03 Feb, 2009
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Interim</td>
                      <td className="text-gray-600 p-3 bg-gray-100">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">01 Dec, 2008</td>
                      <td className="text-gray-600 p-3">15 Dec, 2008</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">2.40</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        22 May, 2008
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        17 Jul, 2008
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">2.60</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">30 Jan, 2008</td>
                      <td className="text-gray-600 p-3">14 Feb, 2008</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        31 May, 2007
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        19 Jul, 2007
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">25 Jan, 2007</td>
                      <td className="text-gray-600 p-3">08 Feb, 2007</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        08 Jun, 2006
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        17 Jul, 2006
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">31 Jan, 2006</td>
                      <td className="text-gray-600 p-3">02 Mar, 2006</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        03 Jun, 2005
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        15 Jul, 2005
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">28 Jan, 2005</td>
                      <td className="text-gray-600 p-3">11 Feb, 2005</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        02 Jun, 2004
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        16 Jul, 2004
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">28 Jan, 2021</td>
                      <td className="text-gray-600 p-3">09 Feb, 2021</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">7.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        05 Nov, 2003
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        05 Dec, 2003
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Interim</td>
                      <td className="text-gray-600 p-3 bg-gray-100">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">25 Mar, 2003</td>
                      <td className="text-gray-600 p-3">23 May, 2003</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">4.00</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        11 Jun, 2002
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        03 Sep, 2002
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">0.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">11 Jun, 2001</td>
                      <td className="text-gray-600 p-3">09 Jul, 2001</td>
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
                      <td className="text-gray-600 p-3">04 Aug, 2011</td>
                      <td className="text-gray-600 p-3">20 Sep, 2011</td>
                      <td className="text-gray-600 p-3">2:5</td>
                      <td className="text-gray-600 p-3">
                        For every 5 share held; Holder will receive 2 bonus
                        shares.
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        12 Aug, 1994
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        23 Sep, 1994
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">1:2</td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        For every 5 share held; Holder will receive 2 bonus
                        shares.
                      </td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3">29 Apr, 1987</td>
                      <td className="text-gray-600 p-3">-</td>
                      <td className="text-gray-600 p-3">1:1</td>
                      <td className="text-gray-600 p-3">
                        For every 1 share held; Holder will receive 1 bonus
                        shares.
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        29 Apr, 1984
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                      <td className="text-gray-600 p-3 bg-gray-100">1:1</td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        For every 1 share held; Holder will receive 1 bonus
                        shares.
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">29 Apr, 1981</td>
                      <td className="text-gray-600 p-3">-</td>
                      <td className="text-gray-600 p-3">4:7</td>
                      <td className="text-gray-600 p-3">
                        For every 7 share held; Holder will receive 4 bonus
                        shares.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="split" className="bg-white p-4 mt-6">
              <div className="flex gap-4">
                <Image src={tick} alt="file" className="w-5 h-6" />

                <h2 className="text-2xl text-gray-700 font-[600px] mb-2">
                  Split details
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
                      <td className="text-gray-600 p-3">20 Nov, 2000</td>
                      <td className="text-gray-600 p-3">10</td>
                      <td className="text-gray-600 p-3">2</td>
                      <td className="text-gray-600 p-3">
                        For every share held, the holder will receive 5 shares
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
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                Cummins India Ltd. (CIL) is a subsidiary of Cummins Inc. USA,
                and has not been involved in any mergers.
              </p>
            </section>

            <section id="unclaimed-shares" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                  Unclaimed Shares and Dividends Of Cummins India Ltd
                  Transferred To IEPF
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                The Central Government set up the Investor Education and
                Protection Fund (IEPF) to safeguard investors interests and
                raise awareness. This fund was created under Section 125 of the
                Companies Act, 2013. Any unpaid or unclaimed money from
                investors is collected and added to the IEPF.
              </p>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                The funds in the are used for various purposes as outlined in
                the Act. The IEPFA Authority is responsible for managing the
                IEPF, handling refunds for shares, unclaimed dividends, matured
                deposits, and debentures, while also working to educate
                investors and protect their interests.
              </p>
            </section>

            <section id="whymyshares" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                  Why my shares of Cummins India Ltd are in IEPF?
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                The company needs to let the shareholder know before moving the
                shares to IEPF. They do this by sending a letter to the
                shareholders registered address and also by posting a public
                notice in the newspaper. If the shareholder does not respond, the
                company can go ahead and transfer the shares to IEPF. This
                transfer happens when the shareholder has not claimed dividends
                for seven or more years in a row.
              </p>
            </section>

            <section id="howcaniclaimiepf" className="mt-8 p-6 ">
              <div className="flex gap-4 items-center ">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700">
                  How can I claim IEPF Shares?
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                If you want to claim your IEPF shares
                <b>CLEARCLAIM VENTURES PRIVATE LIMITED</b> can help you recover
                them.
              </p>
              <b>
                <i className="text-[#00000099] leading-6 mb-6 text-justify">
                  Clearclaim Ventures Private Limited helps you to recover your
                  old shares which you cannot access due to several reasons.
                  Clearclaim ventures private limited has recovered immense
                  number of IEPF shares smoothly.
                </i>
              </b>
              <b>
                <i className="text-[#00000099] leading-6 mb-6 text-justify">
                  At Clearclaim, our goal is to help you reclaim what is
                  rightfully yours, allowing you to focus on what matters most
                  to you. Trust us to handle your IEPF claims and unclaimed
                  assets with the utmost care and expertise, so you can enjoy
                  peace of mind knowing that you are in capable hands.
                </i>
              </b>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                You can visit us at- Office No. C 201, Vantage Tower by Bramha
                Corp, NDA Pashan Rd, Ram Nagar, Bavdhan, Pune, Maharashtra
                411021{" "}
              </p>

              <Link
                className="text-md text-[#00000099]"
                href="https://www.clearclaim.in/"
              >
                https://www.clearclaim.in/
              </Link>
            </section>

            <section id="company-details" className="p-4 mt-8">
              {/* Header Section */}
              <div className="flex items-center gap-4 mb-4 ">
                <Image src={tick} alt="file" className="w-5 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                  Company Website Address
                </h2>
              </div>

              {/* Numbers with Icons */}
              <div className="gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <p className="text-md text-[#00000099]">
                    CUMMINS INDIA LIMITED
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href="https://www.cummins.com/en/in/company/india-companies/cummins-india-limited"
                    className="text-md text-[#00000099] "
                  >
                    https://www.cummins.com/en/in/company/india-companies/cummins-india-limited
                  </Link>
                </div>
              </div>
            </section>
          </main>

          {/* Right Sidebar */}
          <aside
            className="w-1/5 bg-white shadow-md p-4 hidden md:block overflow-y-auto"
            style={{
              scrollbarWidth: "none", // Hide scrollbar for Firefox
              msOverflowStyle: "none", // Hide scrollbar for Internet Explorer
            }}
          >
            <h2 className="font-bold mb-4">Content</h2>
            <ul className="space-y-2">
              <li
                className={`hover:bg-gray-200 p-2 rounded-md text-[15px] ${
                  activeSection === "dividend-history" ? "bg-gray-300" : ""
                }`}
              >
                <a href="#dividend-history">Dividend History</a>
              </li>
              <li
                className={`hover:bg-gray-200 p-2 rounded-md text-[15px] ${
                  activeSection === "bonus" ? "bg-gray-300" : ""
                }`}
              >
                <a href="#bonus">Bonus</a>
              </li>
              <li
                className={`hover:bg-gray-200 p-2 rounded-md text-[15px] ${
                  activeSection === "split" ? "bg-gray-300" : ""
                }`}
              >
                <a href="#split">Split</a>
              </li>
              <li
                className={`hover:bg-gray-200 p-2 rounded-md text-[15px] ${
                  activeSection === "mergers-amalgamation" ? "bg-gray-300" : ""
                }`}
              >
                <a href="#mergers-amalgamation">Mergers / Amalgamation</a>
              </li>
              <li
                className={`hover:bg-gray-200 p-2 rounded-md text-[15px] ${
                  activeSection === "unclaimed-shares" ? "bg-gray-300" : ""
                }`}
              >
                <a href="#unclaimed-sharess">
                  Unclaimed Shares and Dividends Of Cummins India Ltd
                </a>
              </li>
              <li
                className={`hover:bg-gray-200 p-2 rounded-md text-[15px] ${
                  activeSection === "whymyshares" ? "bg-gray-300" : ""
                }`}
              >
                <a href="#whymyshares">
                  Why my shares of Cummins India Ltd are in IEPF?
                </a>
              </li>
              <li
                className={`hover:bg-gray-200 p-2 rounded-md text-[15px] ${
                  activeSection === "howcaniclaimiepf" ? "bg-gray-300" : ""
                }`}
              >
                <a href="#howcaniclaimiepf"> How can I claim IEPF Shares?</a>
              </li>
              <li
                className={`hover:bg-gray-200 p-2 rounded-md text-[15px] ${
                  activeSection === "company-details" ? "bg-gray-300" : ""
                }`}
              >
                <a href="#company-details"> Company Website Address</a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
}

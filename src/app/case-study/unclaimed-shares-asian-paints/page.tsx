"use client";

import Link from "next/link";
import Image from "next/image";
import asianpaints from "../../../../public/casestudy/asian-paints.jpg";
import fileimg from "../../../../public/images/server-01.png";
import tick from "../../../../public/images/tick.svg";
import phone from "../../../../public/images/phone.png";
import email from "../../../../public/images/mail-02.png";
import pin from "../../../../public/images/marker-pin-01.png";
import { useEffect, useState, useRef } from "react";
import FaqAlkem from "../unclaimed-shares-alkem-laboratories/faqalkem";

export default function UnclaimedsharesAsianpaints() {
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
              Unclaimed Shares of
              <span className="text-green-600"> Asian Paints Ltd.</span>
            </h1>
            <p className="mb-6 text-[#00000099] text-justify">
              Asian Paints Ltd, founded in 1942, is Indias largest and Asias
              third-largest paint manufacturer, with a strong global presence in
              over 15 countries. Headquartered in Mumbai, the company is a
              market leader in decorative and industrial coatings, offering an
              extensive range of products that cater to home décor, industrial
              coatings, and waterproofing solutions.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
              Asian Paints operates through a diversified portfolio, including
              paints, wall textures, adhesives, waterproofing solutions, and
              home improvement services like kitchen and bathroom redesign. Its
              flagship decorative paints segment has maintained a dominant
              market share due to innovative offerings, such as eco-friendly
              paints and advanced technology-based solutions.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
              The company has a robust distribution network with over 70,000
              dealers, ensuring a strong retail presence in urban and rural
              markets alike. It operates manufacturing plants across India,
              including in Maharashtra, Gujarat, and Andhra Pradesh, with
              state-of-the-art technology ensuring efficient production.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
              Asian Paints is also known for its emphasis on technology and
              innovation, being a pioneer in introducing trends like virtual
              painting tools and color consultancy services. Its marketing
              strategies and brand campaigns have built strong consumer trust,
              making it one of India’s most admired companies.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
              On the financial front, Asian Paints consistently delivers strong
              performance with stable revenue growth and profitability. The
              company is listed on the NSE and BSE and is part of India’s
              blue-chip indices like NIFTY 50.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
              With a vision for sustainable and innovative growth, Asian Paints
              continues to set benchmarks in the global coatings industry while
              catering to the evolving needs of its customers.
            </p>
            <Image
              src={asianpaints}
              alt="Asian Logo"
              className="mb-6 mx-auto w-[400px] h-[250px]"
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
                  <b>Registered Name: </b> Asian Paints Ltd
                </li>
                <li>
                  <b>CIN Number: </b>L24220MH1945PLC004598
                </li>
                <li>
                  <b>ISIN Number: </b> INE021A01026
                </li>
              </ul>
            </section>

            <section id="dividend-history" className="mt-6 bg-white p-4 ">
              <div className="flex gap-4">
                <Image src={tick} alt="file" className="w-5 h-6" />

                <h2 className="text-2xl text-gray-700 font-[600px] mb-2">
                  Dividend’s History of Asian Paints Ltd.
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
                      <td className="text-gray-600 p-3">17 Sep, 2024</td>
                      <td className="text-gray-600 p-3">19 Nov, 2024</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">4.25</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        09 May, 2024
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        11 Jun, 2024
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">28.15</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">15 Sep, 2023</td>
                      <td className="text-gray-600 p-3">03 Nov, 2023</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">5.15</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        11 May, 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        09 Jun, 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">21.25</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">29 Sep, 2022</td>
                      <td className="text-gray-600 p-3">31 Oct, 2022</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">4.40</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        10 May, 2022
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        09 Jun, 2022
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">15.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">04 Oct, 2021</td>
                      <td className="text-gray-600 p-3">28 Oct, 2021</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">3.65</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        12 May, 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        10 Jun, 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">14.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">05 Oct, 2020 </td>
                      <td className="text-gray-600 p-3">28 Oct, 2020</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">14.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        23 Jun, 2020
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        23 Jul, 2020
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">1.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">19 Feb, 2020</td>
                      <td className="text-gray-600 p-3">03 Mar, 2020</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">7.15</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        07 Oct, 2019
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        30 Oct, 2019
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">3.35</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">09 May, 2019</td>
                      <td className="text-gray-600 p-3">13 Jun, 2019</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">7.65</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        04 Oct, 2018
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        29 Oct, 2018
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">2.85</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">10 May, 2018</td>
                      <td className="text-gray-600 p-3">14 Jun, 2018</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">6.05</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        29 Sep, 2017
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        31 Oct, 2017
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">2.65</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">11 May, 2017</td>
                      <td className="text-gray-600 p-3">15 Jun, 2017</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">5.65</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        12 May, 2017
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        15 Jun, 2017
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Special</td>
                      <td className="text-gray-600 bg-gray-100 p-3">2.00</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3">04 Oct, 2016</td>
                      <td className="text-gray-600 p-3">01 Nov, 2016</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">2.65</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        11 May, 2016
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        16 Jun, 2016
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">5.30</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">11 May, 2017</td>
                      <td className="text-gray-600 p-3">15 Jun, 2017</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">5.65</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        18 May, 2015
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        24 Jun, 2015
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">4.30</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">28 Aug, 2014</td>
                      <td className="text-gray-600 p-3">22 Sep, 2014</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">1.80</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        14 May, 2014
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        16 Jun, 2014
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">4.20</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">30 Sep, 2013</td>
                      <td className="text-gray-600 p-3">24 Oct, 2013</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">1.10</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        09 May, 2013
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        06 Jun, 2013
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">36.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">04 Oct, 2012</td>
                      <td className="text-gray-600 p-3">29 Oct, 2012</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">9.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        08 May, 2012
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        07 Jun, 2012
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        30.50
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">03 Oct, 2011</td>
                      <td className="text-gray-600 p-3">25 Oct, 2011</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">9.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        10 May, 2011
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        09 Jun, 2011
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">23.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">12 Oct, 2010</td>
                      <td className="text-gray-600 p-3">29 Oct, 2010</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">8.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        28 May, 2010
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        30 Jun, 2010
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">18.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">30 Sep, 2009</td>
                      <td className="text-gray-600 p-3">26 Oct, 2009</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">8.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        12 May, 2009
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        17 Jun, 2009
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">11.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">07 Oct, 2008</td>
                      <td className="text-gray-600 p-3">29 Oct, 2008</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">6.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        09 May, 2008
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        12 Jun, 2008
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">10.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">01 Oct, 2007</td>
                      <td className="text-gray-600 p-3">25 Oct, 2007</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">6.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        10 May, 2007
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        13 Jun, 2007
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">1.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">06 Mar, 2007</td>
                      <td className="text-gray-600 p-3">20 Mar, 2007</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">6.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        11 Oct, 2006
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        03 Nov, 2006
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">5.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">10 May, 2006</td>
                      <td className="text-gray-600 p-3">15 Jun, 2006</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">8.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        11 Oct, 2005
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        31 Oct, 2005
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">4.50</td>
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
                      <th className="text-left p-3">-</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">11 May, 2005</td>
                      <td className="text-gray-600 p-3">22 Jun, 2005</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">5.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        11 Oct, 2004
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        01 Nov, 2004
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Interim</td>
                      <td className="text-gray-600 p-3 bg-gray-100">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">11 May, 2004</td>
                      <td className="text-gray-600 p-3">16 Jun, 2004</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">5.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        08 Oct, 2003
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        07 Nov, 2003
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Interim</td>
                      <td className="text-gray-600 p-3 bg-gray-100">3.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">28 May, 2003</td>
                      <td className="text-gray-600 p-3">09 Jul, 2003</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">6.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        19 Sep, 2002
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        21 Oct, 2002
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Interim</td>
                      <td className="text-gray-600 p-3 bg-gray-100">4.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">29 May, 2002</td>
                      <td className="text-gray-600 p-3">11 Jul, 2002</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">5.50</td>
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
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">28 May, 2003</td>
                      <td className="text-gray-600 p-3">22 Aug, 2003</td>
                      <td className="text-gray-600 p-3">1:2</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        30 May, 2000
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        02 Aug, 2000
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">3:5</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">18 Oct, 1995</td>
                      <td className="text-gray-600 p-3">08 Nov, 1995</td>
                      <td className="text-gray-600 p-3">1:1</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        06 May, 1985
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                      <td className="text-gray-600 p-3 bg-gray-100">3:5</td>
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
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">09 May, 2013</td>
                      <td className="text-gray-600 p-3">30 Jul, 2013</td>
                      <td className="text-gray-600 p-3">10</td>
                      <td className="text-gray-600 p-3">1</td>
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
              <b className="text-[#00000099] leading-6 mb-6 text-justify">
                Acquisition of Berger International Ltd (2002):
              </b>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                Asian Paints acquired a controlling stake in Berger
                International Ltd, a multinational paint company with operations
                in several countries. This acquisition helped Asian Paints
                expand its global footprint, especially in regions like the
                Middle East, South Asia, and Africa.
              </p>
              <b className="text-[#00000099] leading-6 mb-6 text-justify">
                Merger with SCIB Paints (Egypt) (2002):
              </b>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                The acquisition of SCIB Paints, a prominent player in the
                Egyptian market, allowed Asian Paints to establish a presence in
                North Africa, enhancing its global reach and diversifying its
                portfolio.
              </p>

              <b className="text-[#00000099] leading-6 mb-6 text-justify">
                Acquisition of Kadisco Paints (Ethiopia) (2015):
              </b>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                Asian Paints acquired a majority stake in Kadisco Paints, one of
                the leading paint companies in Ethiopia. This move further
                strengthened its footprint in the African market.
              </p>
              <b className="text-[#00000099] leading-6 mb-6 text-justify">
                Joint Venture with PPG Industries (1997):
              </b>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                Asian Paints acquired a controlling stake in Berger
                International Ltd, a multinational paint company with operations
                in several countries. This acquisition helped Asian Paints
                expand its global footprint, especially in regions like the
                Middle East, South Asia, and Africa.
              </p>
              <b className="text-[#00000099] leading-6 mb-6 text-justify">
                Acquisition of Sleek International (2013):
              </b>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                Asian Paints entered the home improvement market by acquiring
                Sleek International, a modular kitchen solutions provider,
                signaling diversification beyond paints.{" "}
              </p>
              <b className="text-[#00000099] leading-6 mb-6 text-justify">
                Joint Venture with PPG Industries (1997):
              </b>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                Asian Paints acquired a controlling stake in Berger
                International Ltd, a multinational paint company with operations
                in several countries. This acquisition helped Asian Paints
                expand its global footprint, especially in regions like the
                Middle East, South Asia, and Africa.
              </p>
            </section>

            <section id="physical-shares" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                  Physical Shares of Asian Paints Ltd.
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                Physical shares of Asian Paints Ltd. are no longer eligible for
                trading on stock exchanges as per SEBI regulations implemented
                on April 1, 2019. Investors holding such shares must
                dematerialize them to trade or transfer ownership.
                Dematerialization involves converting physical share
                certificates into an electronic format through a Demat account
                held with a Depository Participant (DP).
              </p>
            </section>

            <section id="unclaimed-shares" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                  Unclaimed Shares and Dividends of Asian Paints Ltd.
                  Transferred to IEPF{" "}
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                Asian Paints Limited, in accordance with the Investor Education
                and Protection Fund (IEPF) regulations, has been transferring
                equity shares to the IEPF if dividends remain unclaimed for
                seven consecutive years. As per the rules under the Companies
                Act, 2013, shares of individuals who have not claimed their
                dividends for seven years are moved to the IEPF demat account.
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
                  FAQ about unclaimed shares of Asian Paints Ltd.
                </h2>
              </div>
            </section>

            <FaqAlkem />

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

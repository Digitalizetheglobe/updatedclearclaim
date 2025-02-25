"use client";

import Link from "next/link";
import Image from "next/image";
import vedanta from "../../../../public/casestudy/vedanta.jpg";
import fileimg from "../../../../public/images/server-01.png";
import tick from "../../../../public/images/tick.svg";
import phone from "../../../../public/images/phone.png";
import email from "../../../../public/images/mail-02.png";
import pin from "../../../../public/images/marker-pin-01.png";
import { useEffect, useState, useRef } from "react";
import FaqAparm from "../unclaimed-shares-of-iG-petrochemicals-ltd/faqapar";

export default function UnclaimedSharesofTVSMotorsLtd() {
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
    {
      name: "Unclaimed Shares of Jio Financial Services Ltd",
      path: "/case-study/unclaimed-shares-of-jio-financial-services-ltd",
    },

    {
      name: "Unclaimed Shares of JSW Holdings Ltd",
      path: "/case-study/unclaimed-shares-of-jsw-holdings-ltd",
    },
    {
      name: "JSW Infrastructure Limited",
      path: "/case-study/jsw-infrastructure-limited",
    },

    {
      name: "Unclaimed shares of JSW Steel Ltd",
      path: "/case-study/unclaimed-shares-of-jsw-steel-ltd",
    },

    {
      name: "Unclaimed shares of Kaynes Technology India Limited",
      path: "/case-study/unclaimed-shares-of-kaynes-technology-india-limited",
    },

    {
      name: "KEI Industries Limited",
      path: "/case-study/kei-industries-limited",
    },

    {
      name: "Unclaimed shares of KPIT Technologies Ltd",
      path: "/case-study/unclaimed-shares-of-kpit-technologies-ltd",
    },

    {
      name: "Larsen & Toubro",
      path: "/case-study/Larsen-and-toubro",
    },

    {
      name: "LIFE INSURANCE CORPORATION OF INDIA",
      path: "/case-study/life-insurance-corporation-of-india",
    },

    {
      name: "Unclaimed Shares of  Linde India Ltd",
      path: "/case-study/unclaimed-shares-of-linde-india-ltd",
    },

    {
      name: "Unclaimed Shares of Lupin Ltd",
      path: "/case-study/unclaimed-shares-of-lupin-ltd",
    },

    {
      name: "Unclaimed Shares of Maharashtra Scooters Ltd",
      path: "/case-study/unclaimed-shares-of-maharashtra-scooters-ltd",
    },
    {
      name: "MAHINDRA AND MAHINDRA LIMITED",
      path: "/case-study/mahindra-and-mahindra-limited",
    },
    {
      name: "Mangalore Refinery And Petrochemicals Limited",
      path: "/case-study/mangalore-refinery-and-petrochemicals-limited",
    },
    {
      name: " MARUTI SUZUKI INDIA LIMITED",
      path: "/case-study/maruti-suzuki-india-limited",
    },

    {
      name: "MRF Limited",
      path: "/case-study/mrf-limited",
    },

    {
      name: "Navin Fluorine International Limited",
      path: "/case-study/navin-fluorine-international-limited",
    },

    {
      name: "Unclaimed shares of NCL Industries Limited",
      path: "/case-study/unclaimed-shares-of-ncl-industries-limited",
    },

    {
      name: "Nestle India",
      path: "/case-study/nestle-india",
    },

    {
      name: "NTPC LIMITED",
      path: "/case-study/ntpc-limited",
    },
    {
      name: "OIL AND NATURAL GAS CORPORATION LIMITED",
      path: "/case-study/oil-and-natural-gas-corporation-limited",
    },

    {
      name: "Procter & Gamble Hygiene and Health Care Ltd",
      path: "/case-study/procter-and-gamble-hygiene-and-health-care-ltd",
    },

    {
      name: "Ratnamani Metals And Tubes Limited",
      path: "/case-study/ratnamani-metals-and-tubes-limited",
    },

    {
      name: "Unclaimed Shares  of Reliance Industries Ltd",
      path: "/case-study/Unclaimed-shares-of-reliance-industries-ltd",
    },

    {
      name: "Unclaimed shares of Safari Industries India Ltd",
      path: "/case-study/unclaimed-shares-of-safari-industries-india-ltd",
    },

    {
      name: "Shree Cement Limited",
      path: "/case-study/shree-cement-limited",
    },

    {
      name: "SHRIRAM FINANCE LIMITED",
      path: "/case-study/shriram-finance-limited",
    },

    {
      name: "SRF",
      path: "/case-study/srf-limited",
    },

    {
      name: "Unclaimed shares of State Bank of India Ltd",
      path: "/case-study/unclaimed-shares-of-state-bank-of-india-ltd",
    },

    {
      name: "Unclaimed shares of Subros Ltd",
      path: "/case-study/unclaimed-shares-of-subros-ltd",
    },

    {
      name: "Sun Pharmaceuticals Industries Limited",
      path: "/case-study/sun-pharmaceuticals-industries-limited",
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

          <h1 className="font-bold text-md text-[#00BE5D]">All (100)</h1>
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
              <span className="text-green-600">Vedanta Ltd.</span>
            </h1>
            <p className="mb-6 text-[#00000099] text-justify">
            Vedanta Ltd, established in 1979, is one of Indias largest and most diversified natural resources companies, with a global presence across sectors like oil and gas, metals, mining, and power generation. Headquartered in Mumbai, Vedanta is a subsidiary of Vedanta Resources Limited, a UK-based mining conglomerate. The company has a significant presence in India, Africa, Australia, and other regions, with operations spanning across sectors such as zinc, lead, silver, copper, aluminum, iron ore, and power.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
            Vedantas key subsidiaries include Hindustan Zinc, which is one of the worlds largest producers of zinc, Bharat Aluminum Company (BALCO), and Cairn Oil & Gas, a major player in the Indian oil and gas sector. The companys mining operations cover a wide range of materials, including coal, copper, and iron ore. Vedantas energy division includes both thermal power plants and renewable energy initiatives, contributing significantly to Indias energy requirements.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
            The company is committed to sustainability and responsible mining practices, focusing on minimizing environmental impact and improving the well-being of local communities through its CSR initiatives. The Vedanta Foundation plays a significant role in supporting educational, healthcare, and rural development projects.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
            Vedanta is listed on the NSE and BSE, and it is part of the NIFTY 50 index. Despite facing challenges in global commodity markets, Vedanta continues to maintain a strong financial performance, driven by its diversified portfolio and strategic investments in technology and sustainability.
            </p>

            <Image
              src={vedanta}
              alt="vedanta Logo"
              className="mb-6 mx-auto w-[240px] h-[200px]"
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
                  <b>Registered Name: </b> Vedanta Ltd.
                </li>
                <li>
                  <b>CIN Number: </b> L13209MH1965PLC291394
                </li>
                <li>
                  <b>ISIN Number: </b> INE205A01025
                </li>
              </ul>
            </section>

            <section id="dividend-history" className="mt-6 bg-white p-4 ">
              <div className="flex gap-4">
                <Image src={tick} alt="file" className="w-5 h-6" />

                <h2 className="text-2xl text-gray-700 font-[600px] mb-2">
                Dividend’s History of Vedanta Ltd.
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
                      <td className="text-gray-600 p-3">28 Aug, 2024</td>
                      <td className="text-gray-600 p-3">10 Sep, 2024</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">20.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      24 Jul, 2024
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      02 Aug, 2024
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">13 May, 2024</td>
                      <td className="text-gray-600 p-3">24 May, 2024</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">11.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      13 Dec, 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      27 Dec, 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">INTERIM</td>
                      <td className="text-gray-600 bg-gray-100 p-3">11.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">18 May, 2023</td>
                      <td className="text-gray-600 p-3">30 May, 2023</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">18.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      23 Mar, 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      06 Apr, 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">INTERIM</td>
                      <td className="text-gray-600 bg-gray-100 p-3">20.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">23 Jan, 2023</td>
                      <td className="text-gray-600 p-3">03 Feb, 2023</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">12.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      17 Nov, 2022
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      29 Nov, 2022
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">INTERIM</td>
                      <td className="text-gray-600 bg-gray-100 p-3">17.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">19 Jul, 2022</td>
                      <td className="text-gray-600 p-3">26 Jul, 2022</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">19.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      06 Apr, 2022
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      06 May, 2022
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">31.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">23 Feb, 2022</td>
                      <td className="text-gray-600 p-3">09 Mar, 2022</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">13.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      13 Dec, 2021
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      17 Dec, 2021
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">13.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">30 Aug, 2021</td>
                      <td className="text-gray-600 p-3">08 Sep, 2021</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">18.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      22 Oct, 2020
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      28 Oct, 2020
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">9.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">26 Feb, 2020</td>
                      <td className="text-gray-600 p-3">05 Mar, 2020</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">3.90</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      05 Mar, 2019
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      13 Mar, 2019
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">1.85</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">31 Oct, 2018</td>
                      <td className="text-gray-600 p-3">06 Nov, 2018</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">17.00</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      09 Mar, 2018
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      20 Mar, 2018
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">21.20</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">30 Mar, 2017</td>
                      <td className="text-gray-600 p-3">11 Apr, 2017</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">17.70</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      25 Oct, 2016
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      07 Nov, 2016
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">1.75</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">20 Oct, 2015</td>
                      <td className="text-gray-600 p-3">30 Oct, 2015</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">3.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      29 Apr, 2015
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      06 Jul, 2015
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">2.35</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">21 Oct, 2014</td>
                      <td className="text-gray-600 p-3">03 Nov, 2014</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">1.75</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      29 Apr, 2014
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      04 Jul, 2014
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">1.75</td>
                    </tr>


                    <tr>
                      <td className="text-gray-600 p-3">28 Oct, 2013</td>
                      <td className="text-gray-600 p-3">06 Nov, 2013</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      29 Apr, 2013
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      31 May, 2013
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">0.10</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">24 Apr, 2012</td>
                      <td className="text-gray-600 p-3">08 Jun, 2012</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      20 Jan, 2012
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      01 Feb, 2012
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Interim</td>
                      <td className="text-gray-600 p-3 bg-gray-100">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">25 Apr, 2011</td>
                      <td className="text-gray-600 p-3">30 Jun, 2011</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">3.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      20 Apr, 2010
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      02 Jul, 2010
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">3.25</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">20 Apr, 2009</td>
                      <td className="text-gray-600 p-3">31 Jul, 2009</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">2.25</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      29 Apr, 2008
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      11 Jul, 2008
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">30.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">23 Jan, 2008</td>
                      <td className="text-gray-600 p-3">06 Feb, 2008</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">15.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      23 Jul, 2007
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      21 Sep, 2007
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">25.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">01 Feb, 2007</td>
                      <td className="text-gray-600 p-3">19 Feb, 2007</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">15.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      30 Oct 2006
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      04 Dec, 2006
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">25.00</td>
                    </tr>


                    <tr>
                      <td className="text-gray-600 p-3">27 Feb, 2006</td>
                      <td className="text-gray-600 p-3">13 Mar, 2006</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">15.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      31 May, 2005
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      11 Jul, 2005
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">20.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">17 Dec, 2004</td>
                      <td className="text-gray-600 p-3">06 Jan, 2005</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">5.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      20 May, 2004
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      28 Jun, 2004
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">8.00</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3">29 Jan, 2004</td>
                      <td className="text-gray-600 p-3">12 Feb, 2004</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      27 Jun, 2003
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      09 Sep, 2003
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">2.50</td>
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
                    <td className="text-gray-600 p-3">28 Apr, 2008</td>
                    <td className="text-gray-600 p-3">08 Aug, 2008</td>
                    <td className="text-gray-600 p-3">1:1</td>
                  </tr>

                  <tr>
                    <td className="text-gray-600 p-3">17 Dec, 2004</td>
                    <td className="text-gray-600 p-3">16 Feb, 2005</td>
                    <td className="text-gray-600 p-3">1:1</td>
                  </tr>
                  <tr>
                    <td className="text-gray-600 p-3">30 Mar, 1993</td>
                    <td className="text-gray-600 p-3">23 Apr, 1993</td>
                    <td className="text-gray-600 p-3">1:1</td>
                  </tr>
                  <tr>
                    <td className="text-gray-600 p-3">29 Aug, 1986</td>
                    <td className="text-gray-600 p-3">-</td>
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
                    <th className="text-left p-3">Ex-Date</th>
                    <th className="text-left p-3">Old FV</th>
                    <th className="text-left p-3">New FV</th>
                    <th className="text-left p-3">Record Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-gray-600 p-3">28 Apr, 2008</td>
                    <td className="text-gray-600 p-3">08 Aug, 2008</td>
                    <td className="text-gray-600 p-3">10</td>
                    <td className="text-gray-600 p-3">1</td>
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
              <p className="text-gray-500">Acquisition of Sterlite Industries (2001):
One of the most significant milestones in Vedanta’s history was the acquisition of Sterlite Industries, an Indian multinational company specializing in the production of non-ferrous metals like copper and zinc. This acquisition helped Vedanta diversify into the metals sector and provided a foundation for its growth in zinc, copper, and lead production.
</p>

<p className="text-gray-500">Merger of Vedanta Resources and Sterlite Industries (2007):
In 2007, Vedanta Resources, the parent company of Vedanta Ltd, completed a reverse merger with Sterlite Industries. This merger unified their operations and led to the establishment of a more diversified natural resources company, which included mining, oil, and metals.
</p> 

<p className="text-gray-500">Acquisition of Cairn India (2011):
Vedanta acquired Cairn India, a leading oil and gas exploration and production company, for around $8.5 billion. This acquisition significantly boosted Vedanta’s presence in the energy sector, particularly in oil and gas exploration, making it one of the largest players in India’s oil industry.
</p>

<p className="text-gray-500">Acquisition of Zinc International (2011):
Vedanta acquired Zinc International, a subsidiary of Anglo American, which provided the company with a greater foothold in the global zinc market, particularly in Africa and South Africa. This acquisition allowed Vedanta to expand its zinc production and further consolidate its position as one of the largest producers of zinc.
</p>

<p className="text-gray-500">Merger of Bharat Aluminum Company (BALCO) and Vedanta (2001):
Bharat Aluminum Company (BALCO), a major aluminum producer in India, was merged with Vedanta in 2001. This merger helped Vedanta strengthen its position in the aluminum sector and further diversified its operations.
</p>

<p className="text-gray-500">Acquisition of Sesa Goa (2007):
Vedanta acquired Sesa Goa, an Indian mining company focused on iron ore, for approximately $1.5 billion. This acquisition gave Vedanta access to one of the largest iron ore reserves in India and further bolstered its mining portfolio.
</p>

<p className="text-gray-500">Acquisition of the Australian Oil and Gas Assets of BHP Billiton (2007):
Vedanta acquired assets from BHP Billiton in Australia, which helped expand its presence in the oil and gas sector. This was part of Vedanta’s broader strategy to become a more integrated player in the natural resources space.
</p>
            </section>


            <section id="physical-shares" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                Physical Shares of Vedanta Ltd.
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
              Physical shares of Vedanta Ltd. are no longer eligible for trading on stock exchanges as per SEBI regulations implemented on April 1, 2019. Investors holding such shares must dematerialize them to trade or transfer ownership. Dematerialization involves converting physical share certificates into an electronic format through a Demat account held with a Depository Participant (DP).
              </p>
            </section>

            <section id="unclaimed-shares" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                Unclaimed Shares and Dividends of Vedanta Ltd. Transferred to IEPF
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
              Vedanta Limited, in accordance with the Investor Education and Protection Fund (IEPF) regulations, has been transferring equity shares to the IEPF if dividends remain unclaimed for seven consecutive years. As per the rules under the Companies Act, 2013, shares of individuals who have not claimed their dividends for seven years are moved to the IEPF’s demat account.
              </p>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
              For instance, unclaimed dividends and shares for financial years 2014-15 and beyond are being transferred, with a specific cutoff date. If the dividends have not been claimed by shareholders, their respective shares will be transferred to IEPF, and the original share certificates become void and non-negotiable. Affected shareholders are notified, and are given the chance to claim unclaimed dividends before the transfer happens.
              </p>
            </section>

            <section id="faq" className="mt-8 p-6 ">
              <div className="flex gap-4 items-center ">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700">
                FAQs about unclaimed shares of Vedanta Ltd.
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

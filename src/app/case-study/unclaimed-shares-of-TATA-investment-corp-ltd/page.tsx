"use client";

import Link from "next/link";
import Image from "next/image";
import tata from "../../../../public/casestudy/Tata-Investment_Logo.png";
import fileimg from "../../../../public/images/server-01.png";
import tick from "../../../../public/images/tick.svg";
import phone from "../../../../public/images/phone.png";
import email from "../../../../public/images/mail-02.png";
import pin from "../../../../public/images/marker-pin-01.png";
import { useEffect, useState, useRef } from "react";
import FaqAparm from "../unclaimed-shares-of-iG-petrochemicals-ltd/faqapar";

export default function UnclaimedsharesofTATAInvestmentCorpLtd() {
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
              <span className="text-green-600">TATA Investment Corp. Ltd.</span>
            </h1>
            <p className="mb-6 text-[#00000099] text-justify">
            Tata Investment Corporation Ltd. (TICL) is a prominent Indian investment company and a part of the Tata Group, one of Indias largest and most respected conglomerates. Established in 1937, TICL has built a strong reputation as a diversified investment firm, primarily focusing on long-term investments in equity, debt, and other financial instruments.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
            The company’s primary objective is to generate consistent, long-term growth by investing in a broad spectrum of industries such as manufacturing, energy, technology, financial services, and consumer goods. It manages a portfolio of both listed and unlisted securities, with a strategic focus on value-based investments in high-quality companies with strong growth potential.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
            Tata Investment Corporation is known for its disciplined and research-driven investment approach. It has a diversified portfolio that includes both domestic and international assets, which allows the company to mitigate risks and tap into growth opportunities in various sectors and markets. TICL also provides a platform for investors seeking to benefit from the Tata Groups legacy of excellence and corporate governance.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
            In addition to its investment activities, TICL is known for maintaining a strong track record of providing value to its shareholders through consistent dividend payouts and capital appreciation. The company follows a conservative yet growth-oriented investment strategy, which has helped it maintain stability even during market volatility.
            </p>

            <p className="mb-6 text-[#00000099] text-justify">
            Tata Investment Corporation Ltd. continues to be a trusted name in the Indian financial sector, leveraging the strength of the Tata brand and its long-standing expertise to generate wealth and create value for its stakeholders.
            </p>


            <Image
              src={tata}
              alt="tata Logo"
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
                  <b>Registered Name: </b> TATA Investment Corporation Ltd.
                </li>
                <li>
                  <b>CIN Number: </b> L67200MH1937PLC002622
                </li>
                <li>
                  <b>ISIN Number: </b> INE672A01018
                </li>
              </ul>
            </section>

            <section id="dividend-history" className="mt-6 bg-white p-4 ">
              <div className="flex gap-4">
                <Image src={tick} alt="file" className="w-5 h-6" />

                <h2 className="text-2xl text-gray-700 font-[600px] mb-2">
                Dividend’s History of TATA Investment Corporation Ltd.
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
                      <td className="text-gray-600 p-3">18 Jun 2024</td>
                      <td className="text-gray-600 p-3">28.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      12 Jun 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      48.00
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">02 Jun 2022</td>
                      <td className="text-gray-600 p-3">55.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      16 Jun 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      24.00
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">FINAL</td>
                      <td className="text-gray-600 bg-gray-100 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">01 Jul 2020</td>
                      <td className="text-gray-600 p-3">18.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      15 Jul 2019
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      20.00
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">FINAL</td>
                      <td className="text-gray-600 bg-gray-100 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">13 Jul 2018</td>
                      <td className="text-gray-600 p-3">2.00</td>
                      <td className="text-gray-600 p-3">SPECIAL</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      13 Jul 2018
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      18.00
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">FINAL</td>
                      <td className="text-gray-600 bg-gray-100 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">17 Mar 2016</td>
                      <td className="text-gray-600 p-3">17.00</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">19 Mar 2016</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      04 Aug 2017
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      18.00
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">28 Jul 2015</td>
                      <td className="text-gray-600 p-3">17.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      18 Jul 2014
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      17.00
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">15 Jul 2013</td>
                      <td className="text-gray-600 p-3">16.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      18 Jul 2012
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      21.00
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">07 Feb 2011</td>
                      <td className="text-gray-600 p-3">16.00</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">08 Feb 2011</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      01 Feb 2010
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      15.00
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">02 Feb 2010</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">17 Jun 2009</td>
                      <td className="text-gray-600 p-3">15.00</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      27 Jun 2008
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      15.00
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">05 Jul 2007</td>
                      <td className="text-gray-600 p-3">15.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      06 Jul 2006
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      12.00
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">08 Jul 2005</td>
                      <td className="text-gray-600 p-3">12.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      07 Jul 2004
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      8.10
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">09 Oct 2003</td>
                      <td className="text-gray-600 p-3">2.00</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">10 Oct 2003</td>
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
                    <th className="text-left p-3">Ex-Date</th>
                    <th className="text-left p-3">Bonus Ratio</th>
                    <th className="text-left p-3">Record Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-gray-600 p-3">22 Aug 2005</td>
                    <td className="text-gray-600 p-3">1:2</td>
                    <td className="text-gray-600 p-3">23 Aug 2005</td>
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
              <p className="text-gray-500">NA</p>

        
            </section>

            <section id="physical-shares" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                Physical Shares of TATA Investment Corporation Ltd.
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
              Physical shares of TATA Investment Corporation Ltd. are no longer eligible for trading on stock exchanges as per SEBI regulations implemented on April 1, 2019. Investors holding such shares must dematerialize them to trade or transfer ownership. Dematerialization involves converting physical share certificates into an electronic format through a Demat account held with a Depository Participant (DP).
              </p>
            </section>

            <section id="unclaimed-shares" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                Unclaimed Shares and Dividends of TATA Investment Corporation Ltd.
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
              TATA Investment Corporation Ltd., in accordance with the Investor Education and Protection Fund (IEPF) regulations, has been transferring equity shares to the IEPF if dividends remain unclaimed for seven consecutive years. As per the rules under the Companies Act, 2013, shares of individuals who have not claimed their dividends for seven years are moved to the IEPF’s demat account.
For instance, unclaimed dividends and shares for financial years 2014-15 and beyond are being transferred, with a specific cutoff date. If the dividends have not been claimed by shareholders, their respective shares will be transferred to IEPF, and the original share certificates become void and non-negotiable. Affected shareholders are notified, and are given the chance to claim unclaimed dividends before the transfer happens.
              </p>
            </section>

            <section id="faq" className="mt-8 p-6 ">
              <div className="flex gap-4 items-center ">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700">
                FAQs about unclaimed shares of TATA Investment Corporation Ltd.
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

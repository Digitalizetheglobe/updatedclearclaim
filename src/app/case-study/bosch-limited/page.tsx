"use client";

import Link from "next/link";
import Image from "next/image";
import bosch from "../../../../public/casestudy/Bosch-Logo.png";
import fileimg from "../../../../public/images/server-01.png";
import tick from "../../../../public/images/tick.svg";
import ecplise from "../../../../public/images/Ellipse.png";
import { useEffect, useState, useRef } from "react";

export default function BoschLimited() {
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
              Bosch
              <span className="text-green-600"> Limited </span>
            </h1>
            <p className="mb-6 text-[#00000099] text-justify">
              Bosch develops innovative solutions that facilitate new mobility
              offerings. Whether for private or commercial vehicles, multimodal
              transportation services, fleet management, or smart transport
              infrastructure, Bosch brings together vehicle technology, the data
              cloud, and services to offer complete mobility solutions.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
              Bosch is 94% owned by the Robert Bosch Stiftung, a charitable
              institution. Although the charity is funded by owning the vast
              majority of shares, it has no voting rights and is involved in
              health and social causes unrelated to Boschs business.
            </p>
            <p className="mb-6 text-[#00000099] text-justify ">
              Bosch offers you individual solutions for your home to make life a
              bit easier every day.
            </p>
            <p className="mb-6 text-[#00000099] text-justify ">
              In India, Bosch is a leading supplier of technology and services
              in the areas of Mobility Solutions, Industrial Technology,
              Consumer Goods, and Energy and Building Technology.
            </p>
            <p className="mb-6 text-[#00000099] text-justify ">
              Additionally, Bosch has in India the largest development center
              outside Germany, for end-to-end engineering and technology
              solutions.
            </p>

            <Image
              src={bosch}
              alt="bosch Logo"
              className="mb-6 mx-auto w-[400px] h-[220px]"
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
                  <b>Registered Name: </b> Bosch Ltd
                </li>
                <li>
                  <b>CIN Number: </b> L85110KA1951PLC000761
                </li>
                <li>
                  <b>ISIN Number: </b> INE323A01026
                </li>
              </ul>
            </section>

            <section id="dividend-history" className="mt-6 bg-white p-4 ">
              <div className="flex gap-4">
                <Image src={tick} alt="file" className="w-5 h-6" />

                <h2 className="text-2xl text-gray-700 font-[600px] mb-2">
                  Dividend’s History of Bosch Limited
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
                      <th className="text-left p-3">Instrument Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">19 Jul 2024</td>
                      <td className="text-gray-600 p-3">170.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                      <td className="text-gray-600 p-3">Equity Share</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        23 Feb 2024
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">205.00</td>
                      <td className="text-gray-600 bg-gray-100 p-3">INTERIM</td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        23 Feb 2024
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        Equity Share
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">14 Jul 2023</td>
                      <td className="text-gray-600 p-3">280.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                      <td className="text-gray-600 p-3">Equity Share</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        22 Feb 2023
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">200.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        Equity Share
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">14 Jul 2022</td>
                      <td className="text-gray-600 p-3">100.00</td>
                      <td className="text-gray-600 p-3">SPECIAL</td>
                      <td className="text-gray-600 p-3">-</td>
                      <td className="text-gray-600 p-3">Equity Share</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        14 Jul 2022
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">110.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        Equity Share
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">12 Jul 2021</td>
                      <td className="text-gray-600 p-3">115.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                      <td className="text-gray-600 p-3">Equity Share</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        03 Aug 2020
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">105.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        Equity Share
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">14 Aug 2019</td>
                      <td className="text-gray-600 p-3">105.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                      <td className="text-gray-600 p-3">Equity Share</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        07 Jun 2018
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">100.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        Equity Share
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">08 Jun 2017</td>
                      <td className="text-gray-600 p-3">90.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                      <td className="text-gray-600 p-3">Equity Share</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        16 Feb 2017
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">75.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        18 Feb 2017
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        Equity Share
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 mt-4">
                  <thead className="bg-[#00BE5D] text-white">
                    <tr>
                      <th className="text-left p-3">Ex-Date</th>
                      <th className="text-left p-3">Dividend Amount</th>
                      <th className="text-left p-3">Dividend Type</th>
                      <th className="text-left p-3">Record Date</th>
                      <th className="text-left p-3">Instrument Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">09 Jun 2016</td>
                      <td className="text-gray-600 p-3">85.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                      <td className="text-gray-600 p-3">Equity Share</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        20 Aug 2015
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">85.00</td>
                      <td className="text-gray-600 bg-gray-100 p-3">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        Equity Share
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">12 May 2014</td>
                      <td className="text-gray-600 p-3">55.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                      <td className="text-gray-600 p-3">Equity Share</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        10 May 2013
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">60.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        Equity Share
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">11 May 2012</td>
                      <td className="text-gray-600 p-3">50.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                      <td className="text-gray-600 p-3">Equity Share</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        23 Jun 2011
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">85.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">SPECIAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        26 Jun 2011
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        Equity Share
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">12 Jul 2021</td>
                      <td className="text-gray-600 p-3">115.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                      <td className="text-gray-600 p-3">Equity Share</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        13 May 2010
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">30.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        Equity Share
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">07 May 2009</td>
                      <td className="text-gray-600 p-3">25.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                      <td className="text-gray-600 p-3">Equity Share</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        14 May 2008
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">25.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        Equity Share
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">14 May 2007</td>
                      <td className="text-gray-600 p-3">4.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                      <td className="text-gray-600 p-3">Equity Share</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        22 Mar 2007
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">12.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        23 Mar 2007
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        Equity Share
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">28 Apr 2006</td>
                      <td className="text-gray-600 p-3">12.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                      <td className="text-gray-600 p-3">Equity Share</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        13 May 2005
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">10.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        Equity Share
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">13 May 2004</td>
                      <td className="text-gray-600 p-3">6.50</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                      <td className="text-gray-600 p-3">Equity Share</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        10 Apr 2003
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">4.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        Equity Share
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 mt-4">
                  <thead className="bg-[#00BE5D] text-white">
                    <tr>
                      <th className="text-left p-3">Ex-Date</th>
                      <th className="text-left p-3">Dividend Amount</th>
                      <th className="text-left p-3">Dividend Type</th>
                      <th className="text-left p-3">Record Date</th>
                      <th className="text-left p-3">Instrument Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">27 Jun 2002</td>
                      <td className="text-gray-600 p-3">0.30</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">01 Jul 2002</td>
                      <td className="text-gray-600 p-3">Equity Share</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        13 May 2002
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">3.10</td>
                      <td className="text-gray-600 bg-gray-100 p-3">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        Equity Share
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">27 Apr 2001</td>
                      <td className="text-gray-600 p-3">0.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                      <td className="text-gray-600 p-3">Equity Share</td>
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
              <p className="text-[#00000099] leading-6 mb-6 text-justify">NA</p>
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
                      <th className="text-left p-3">Ex-Date</th>
                      <th className="text-left p-3">Old FV</th>
                      <th className="text-left p-3">New FV</th>
                      <th className="text-left p-3">Record Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">08 Jul 2004</td>
                      <td className="text-gray-600 p-3">100</td>
                      <td className="text-gray-600 p-3">10</td>
                      <td className="text-gray-600 p-3">16 Jul 2004</td>
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
                Bosch has merged with several companies over the years,
                including:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start p-2">
                  <Image
                    src={ecplise}
                    alt="bullet"
                    className="w-4 h-4 mt-1 mr-2"
                  />
                  <div>
                    <p className="text-gray-500 font-semibold">Buderus</p>
                    <p className="text-[#00000099] leading-6 text-justify">
                      In 2004, Bosch merged its heating technology activities
                      with Buderus, a company founded in 1731. The resulting
                      company was named BBT Thermotechnik, which was later
                      renamed Bosch Thermotechnik GmbH.
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
                      BSH Bosch and Siemens Hausgeräte GmbH
                    </p>
                    <p className="text-[#00000099] leading-6 text-justify">
                      In 2014, Bosch acquired 100% of the shares in this joint
                      venture, which produced home appliances. The company was
                      renamed BSH Hausgeräte GmbH.
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
                      Mannesmann Rexroth
                    </p>
                    <p className="text-[#00000099] leading-6 text-justify">
                      In 2001, Bosch merged with Mannesmann Rexroth to create a
                      global leader for drive and control solutions.
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
                    <p className="text-gray-500 font-semibold">FEMSA</p>
                    <p className="text-[#00000099] leading-6 text-justify">
                      In 1985, Bosch merged its manufacturing companies in Spain
                      with FEMSA to create one company under the FEMSA name.
                      Five years later, Bosch merged FEMSA with the sales
                      company Robert Bosch Comercial Española S.A. to create
                      Robert Bosch S.A.
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
                      Worchester Group plc
                    </p>
                    <p className="text-[#00000099] leading-6 text-justify">
                      In 1992, Bosch acquired a majority shareholding in the
                      British Worchester Group plc, which included the Belgian
                      heater manufacturer Radson.
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
                    <p className="text-gray-500 font-semibold">e.l.m.leblanc</p>
                    <p className="text-[#00000099] leading-6 text-justify">
                      In 1996, Bosch acquired e.l.m.leblanc, which was founded
                      in 1945.
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
                      FHP Manufacturing Company
                    </p>
                    <p className="text-[#00000099] leading-6 text-justify">
                      In 2007, Bosch acquired FHP Manufacturing Company, a US
                      manufacturer of electric heat pumps
                    </p>
                  </div>
                </li>
              </ul>
            </section>

            <section id="unclaimed-shares" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                  Unclaimed Shares and Dividends Of Bosch Limited Transferred To
                  IEPF
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
                  Why my shares of Bosch Ltd are in IEPF?
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
                  <p className="text-md text-[#00000099]">Bosch Ltd</p>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href="https://www.bosch.com/products-and-services/
"
                    className="text-md text-[#00000099] "
                  >
                    https://www.bosch.com/products-and-services/
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
                  activeSection === "unclaimed-shares" ? "bg-gray-300" : ""
                }`}
              >
                <a href="#unclaimed-sharess">
                  Unclaimed Shares and Dividends Of Bosch Limited
                </a>
              </li>
              <li
                className={`hover:bg-gray-200 p-2 rounded-md text-[15px]${
                  activeSection === "whymyshares" ? "bg-gray-300" : ""
                }`}
              >
                <a href="#whymyshares">
                  Why my shares of Bosch Limited are in IEPF?
                </a>
              </li>
              <li
                className={`hover:bg-gray-200 p-2 rounded-md text-[15px]${
                  activeSection === "howcaniclaimiepf" ? "bg-gray-300" : ""
                }`}
              >
                <a href="#howcaniclaimiepf"> How can I claim IEPF Shares?</a>
              </li>
              <li
                className={`hover:bg-gray-200 p-2 rounded-md text-[15px]${
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

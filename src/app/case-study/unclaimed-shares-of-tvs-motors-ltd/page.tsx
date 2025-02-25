"use client";

import Link from "next/link";
import Image from "next/image";
import tvs from "../../../../public/casestudy/tvs.png";
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
              <span className="text-green-600">TVS Motors Ltd.</span>
            </h1>
            <p className="mb-6 text-[#00000099] text-justify">
            TVS Motor Company is one of Indias leading manufacturers of two-wheelers and three-wheelers, with a strong presence in both domestic and international markets. Founded in 1978 and headquartered in Chennai, India, it is part of the larger TVS Group, known for its heritage and innovation in automotive technology.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
            TVS offers a diverse portfolio of motorcycles, scooters, and three-wheelers catering to various customer segments. Popular models like the TVS Apache, Jupiter, and NTORQ have gained significant traction for their performance, style, and reliability. The companys vehicles are known for their cutting-edge technology, fuel efficiency, and affordability, appealing to a wide range of users, from daily commuters to racing enthusiasts.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
            In addition to its strong domestic footprint, TVS Motor has a growing global presence, exporting to over 80 countries. The company has been actively investing in electric mobility, with the launch of its e-scooter iQube, signaling its commitment to sustainable transportation.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
            TVS Motor has received several accolades, including the prestigious Deming Prize for quality management. It focuses on customer satisfaction and environmental stewardship, with robust initiatives in safety, innovation, and sustainability.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
            As a forward-looking company, TVS continues to evolve with advancements in technology, aiming to strengthen its position in the global automotive industry while contributing to India’s reputation as a hub for quality vehicle manufacturing.
            </p>

            <Image
              src={tvs}
              alt="tvs Logo"
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
                  <b>Registered Name: </b> TVS Motors Ltd.
                </li>
                <li>
                  <b>CIN Number: </b> L35921TN1992PLC022845
                </li>
                <li>
                  <b>ISIN Number: </b> INE494B01023
                </li>
              </ul>
            </section>

            <section id="dividend-history" className="mt-6 bg-white p-4 ">
              <div className="flex gap-4">
                <Image src={tick} alt="file" className="w-5 h-6" />

                <h2 className="text-2xl text-gray-700 font-[600px] mb-2">
                Dividend’s History of TVS Motors Ltd.
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
                      <td className="text-gray-600 p-3">19 Mar 2024</td>
                      <td className="text-gray-600 p-3">8.00</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">19 Mar 2024</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      02 Feb 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      5.00
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Special</td>
                      <td className="text-gray-600 bg-gray-100 p-3">02 Feb 2023</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">25 Mar 2022</td>
                      <td className="text-gray-600 p-3">3.75</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">28 Mar 2022</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      30 Mar 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      1.40
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">INTERIM</td>
                      <td className="text-gray-600 bg-gray-100 p-3">02 Apr 2021</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">04 Feb 2021</td>
                      <td className="text-gray-600 p-3">2.10</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">05 Feb 2021</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      17 Mar 2020
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      1.40


                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">INTERIM</td>
                      <td className="text-gray-600 bg-gray-100 p-3">18 Mar 2020</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">11 Feb 2020</td>
                      <td className="text-gray-600 p-3">2.10</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">12 Feb 2020</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      18 Mar 2019
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      1.40
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">INTERIM</td>
                      <td className="text-gray-600 bg-gray-100 p-3">19 Mar 2019</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">30 Oct 2018</td>
                      <td className="text-gray-600 p-3">2.10</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">31 Oct 2018</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      06 Mar 2018
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      1.30
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">07 Mar 2018</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">08 Nov 2017</td>
                      <td className="text-gray-600 p-3">2.00</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">09 Nov 2017</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      14 Mar 2017
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      1.25
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">15 Mar 2017</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">03 Nov 2016</td>
                      <td className="text-gray-600 p-3">1.25</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">05 Nov 2016</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      17 Mar 2016
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      1.50
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">19 Mar 2016</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">04 Feb 2016</td>
                      <td className="text-gray-600 p-3">1.00</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">06 Feb 2016</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      05 May 2015
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      1.15
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">06 May 2015</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">06 Feb 2015</td>
                      <td className="text-gray-600 p-3">0.75</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">09 Feb 2015</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      02 May 2014
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      0.75
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">05 May 2014</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">30 Oct 2013</td>
                      <td className="text-gray-600 p-3">0.65</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">31 Oct 2013</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      03 May 2013
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      0.60
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">06 May 2013</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">06 Feb 2013</td>
                      <td className="text-gray-600 p-3">0.60</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">07 Feb 2013</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      04 Jun 2012
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      0.70
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">05 Jun 2012</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">02 Aug 2011</td>
                      <td className="text-gray-600 p-3">0.60</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      25 Jan 2011
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      0.50
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">27 Jan 2011</td>
                    </tr>


                    <tr>
                      <td className="text-gray-600 p-3">26 Jul 2010</td>
                      <td className="text-gray-600 p-3">0.50</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      25 Jan 2010
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      0.70
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">27 Jan 2010</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">29 Jun 2009</td>
                      <td className="text-gray-600 p-3">0.70</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      06 Aug 2008
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      0.70
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">10 Aug 2007</td>
                      <td className="text-gray-600 p-3">0.15</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      27 Oct 2006
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      0.70
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">30 Oct 2006</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">03 Jul 2006</td>
                      <td className="text-gray-600 p-3">0.60</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">04 Jul 2006</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      31 Oct 2005
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      0.70
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">03 Nov 2005</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">03 Jun 2005</td>
                      <td className="text-gray-600 p-3">0.60</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      29 Oct 2004
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      0.70
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">01 Nov 2004</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">29 Apr 2004</td>
                      <td className="text-gray-600 p-3">0.70</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">30 Apr 2004</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      30 Oct 2003
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                      6.00
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">31 Oct 2003</td>
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
                    <td className="text-gray-600 p-3">08 Sep 2010</td>
                    <td className="text-gray-600 p-3">1:1</td>
                    <td className="text-gray-600 p-3">09 Sep 2010</td>
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
                    <td className="text-gray-600 p-3">18 Dec 2003</td>
                    <td className="text-gray-600 p-3">10</td>
                    <td className="text-gray-600 p-3">1</td>
                    <td className="text-gray-600 p-3">26 Dec 2003</td>
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
              <p className="text-gray-500">NA
</p>
            
            </section>

            <section id="mergers-amalgamation" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                Demerger
                </h2>
              </div>
              <p className="text-gray-500">TVS Motor Company Limited (TVS-M) is part of the TVS Group, which has undergone a series of demergers and amalgamations as part of a family settlement.
</p>
            
            </section>

            <section id="physical-shares" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                Physical Shares of TVS Motors Ltd.
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
              Physical shares of TVS Motors Ltd. are no longer eligible for trading on stock exchanges as per SEBI regulations implemented on April 1, 2019. Investors holding such shares must dematerialize them to trade or transfer ownership. Dematerialization involves converting physical share certificates into an electronic format through a Demat account held with a Depository Participant (DP).
              </p>
            </section>

            <section id="unclaimed-shares" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                Unclaimed Shares and Dividends of TVS Motors Ltd.
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
              TVS Motors Limited, in accordance with the Investor Education and Protection Fund (IEPF) regulations, has been transferring equity shares to the IEPF if dividends remain unclaimed for seven consecutive years. As per the rules under the Companies Act, 2013, shares of individuals who have not claimed their dividends for seven years are moved to the IEPF’s demat account.
              </p>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
              For instance, unclaimed dividends and shares for financial years 2014-15 and beyond are being transferred, with a specific cutoff date. If the dividends have not been claimed by shareholders, their respective shares will be transferred to IEPF, and the original share certificates become void and non-negotiable. Affected shareholders are notified, and are given the chance to claim unclaimed dividends before the transfer happens.
              </p>
            </section>

            <section id="faq" className="mt-8 p-6 ">
              <div className="flex gap-4 items-center ">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700">
                FAQs about unclaimed shares of TVS Motors Ltd.
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

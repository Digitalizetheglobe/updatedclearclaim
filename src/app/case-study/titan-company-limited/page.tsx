"use client";
import { useEffect, useState, useRef } from "react";

import Link from "next/link";
import Image from "next/image";
import titan from "../../../../public/casestudy/titan.png";
import fileimg from "../../../../public/images/server-01.png";
import tick from "../../../../public/images/tick.svg";


export default function TITANCOMPANYLIMITED() {
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
            TITAN COMPANY
              <span className="text-green-600"> LIMITED</span>
            </h1>
            <p className="mb-6 text-[#00000099] text-justify">
            Titan Company Limited is an Indian enterprise under the Tata Group, specializing in fashion accessories like jewellery, watches, and eyewear. Founded in 1984 as Titan Watches Limited, it expanded into jewellery with the Tanishq brand in 1994 and eyewear with Titan Eyeplus.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
            In 2005, it launched the youth-oriented brand Fastrack.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
            Titan Company Ltd is the organization that brought about a paradigm shift in the Indian watch market when it introduced its futuristic quartz technology
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
            As of 2022, Titan is Indias largest branded jewellery manufacturer, holding a 6% market share, with over 80% of its revenue from jewellery. It is also the fifth-largest watch manufacturer globally as of 2019.
            </p>
            <Image
              src={titan}
              alt="titan"
              className="mb-6 mx-auto w-52 h-30"
            />

<p className="mb-6 text-[#00000099] text-justify">
Titan is a leading player in the Watches, Jewellery and Eyewear categories with several successful brands.
            </p>

            <p className="mb-6 text-[#00000099] text-justify">
            Titan Company Limited is an India-based consumer lifestyle company.
            </p>
            <section className="bg-white p-4">
              <div className="flex gap-4">
                <Image src={tick} alt="file" className="w-5 h-6" />
                <h2 className="text-2xl text-gray-700 font-[600px] mb-2">
                  Company Details
                </h2>
              </div>
              <ul className="space-y-4 mt-4 text-gray-500">
                <li>
                  <b>Registered Name: </b> Titan company limited
                </li>
                <li>
                  <b>CIN Number: </b>L74999TZ1984PLC001456 
                </li>
                <li>
                  <b>ISIN Number: </b>INE280A01028
                </li>
              </ul>
            </section>

            <section id="dividend-history" className="mt-6 bg-white p-4 ">
              <div className="flex gap-4">
                <Image src={tick} alt="file" className="w-5 h-6" />

                <h2 className="text-2xl text-gray-700 font-[600px] mb-2">
                  Dividend History Of Titan company limited
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
                      <td className="text-gray-600 p-3">03 May, 2024</td>
                      <td className="text-gray-600 p-3">27 Jun, 2024</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">11.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      03 May, 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      13 Jul, 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">10.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">04 May, 2022</td>
                      <td className="text-gray-600 p-3">08 Jul, 2022 </td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">7.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      29 Apr, 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      22 Jul, 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">08 Jun, 2020</td>
                      <td className="text-gray-600 p-3">03 Aug, 2020 </td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      08 May, 2019
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      29 Jul, 2019
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Special</td>
                      <td className="text-gray-600 bg-gray-100 p-3">5.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">10 May, 2018</td>
                      <td className="text-gray-600 p-3">23 Jul, 2018</td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">3.75</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      15 May, 2017
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      24 Jul, 2017
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">2.60</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">09 Mar, 2016</td>
                      <td className="text-gray-600 p-3">22 Mar, 2016</td>
                      <td className="text-gray-600 p-3">Interim </td>
                      <td className="text-gray-600 p-3">2.20</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      07 May, 2015
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      17 Jul, 2015
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">2.30 </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">06 May, 2014 </td>
                      <td className="text-gray-600 p-3">15 Jul, 2014</td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">2.10</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      03 May, 2013
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      16 Jul, 2013
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">2.10</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">30 Apr, 2012 </td>
                      <td className="text-gray-600 p-3">13 Jul, 2012 </td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">1.75</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      29 Apr, 2011
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      22 Jul, 2011
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">1.25</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">03 May, 2010</td>
                      <td className="text-gray-600 p-3">09 Jul, 2010</td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">15.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      29 Apr, 2009
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      10 Jul, 2009
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">10.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">25 Apr, 2008 </td>
                      <td className="text-gray-600 p-3">15 Jul, 2008 </td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">8.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      23 Apr, 2007
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      11 Jul, 2007
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">5.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">05 Jun, 2006</td>
                      <td className="text-gray-600 p-3">04 Aug, 2006 </td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">3.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      08 Jun, 2005
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      12 Aug, 2005
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">08 May, 2019</td>
                      <td className="text-gray-600 p-3">29 Jul, 2019</td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">5.00</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      10 May, 2018
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      23 Jul, 2018
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">3.75</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">15 May, 2017</td>
                      <td className="text-gray-600 p-3">24 Jul, 2017 </td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">2.60</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      09 Mar, 2016
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      22 Mar, 2016
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">2.20</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">07 May, 2015</td>
                      <td className="text-gray-600 p-3">17 Jul, 2015</td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">2.30</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      08 May, 2019
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      29 Jul, 2019
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">5.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">10 May, 2018</td>
                      <td className="text-gray-600 p-3">23 Jul, 2018 </td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">3.75</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      15 May, 2017
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      24 Jul, 2017
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">2.60</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">09 Mar, 2016</td>
                      <td className="text-gray-600 p-3">22 Mar, 2016</td>
                      <td className="text-gray-600 p-3">Interim </td>
                      <td className="text-gray-600 p-3">2.20</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      07 May, 2015
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      17 Jul, 2015
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">2.30</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">06 May, 2014</td>
                      <td className="text-gray-600 p-3">15 Jul, 2014 </td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">2.10</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      03 May, 2013
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      16 Jul, 2013
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">2.10</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">30 Apr, 2012</td>
                      <td className="text-gray-600 p-3">13 Jul, 2012</td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">1.75</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      29 Apr, 2011
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      22 Jul, 2011
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">1.25</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">03 May, 2010</td>
                      <td className="text-gray-600 p-3">09 Jul, 2010 </td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">15.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      29 Apr, 2009
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      10 Jul, 2009
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">10.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">25 Apr, 2008</td>
                      <td className="text-gray-600 p-3">15 Jul, 2008</td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">8.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      23 Apr, 2007
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      11 Jul, 2007
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">5.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">05 Jun, 2006</td>
                      <td className="text-gray-600 p-3">04 Aug, 2006 </td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">3.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      08 Jun, 2005
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      12 Aug, 2005
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">11 Jun, 2004</td>
                      <td className="text-gray-600 p-3">13 Aug, 2004</td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">1.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      30 Jun, 2003
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      27 Aug, 2003
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">1.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">26 Jun, 2002</td>
                      <td className="text-gray-600 p-3">29 Aug, 2002 </td>
                      <td className="text-gray-600 p-3">Final </td>
                      <td className="text-gray-600 p-3">0.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      27 Jun, 2001
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      30 Jul, 2001
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
                      <td className="text-gray-600 p-3">29 Apr, 2011</td>
                      <td className="text-gray-600 p-3">23 Jun, 2011</td>
                      <td className="text-gray-600 p-3">1:1</td>
                      <td className="text-gray-600 p-3">For every 1 share held; Holder will receive 1 bonus shares.</td>
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
                      <th className="text-left p-3">Announcement Date</th>
                      <th className="text-left p-3">Ex-Split Date</th>
                      <th className="text-left p-3">Old Fv</th>
                      <th className="text-left p-3">New Fv</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">29 Apr, 2011</td>
                      <td className="text-gray-600 p-3">23 Jun, 2011</td>
                      <td className="text-gray-600 p-3">10</td>
                      <td className="text-gray-600 p-3">1</td>
                      <td className="text-gray-600 p-3">For every share held, the holder will receive 10 shares post the split adjustment</td>
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
              <p className="text-gray-500">Titan Engineering & Automation Limited, a wholly owned subsidiary of Titan formerly known as the Titan-Precision Engineering Division, specializes in machine building, automation, and component manufacturing.</p>
              <p className="text-gray-500">In 2016, Titan acquired a 62% stake in CaratLane for $50 million. By 2023, Titan increased its investment by purchasing an additional 27.18% stake for Rs 4,621 crore, raising its total ownership to 98.28%.</p>
              <p className="text-gray-500">In 2015, Titan formed a joint venture to market Montblanc products, holding a 49% stake in Montblanc India Retail Private Limited, while Montblanc Services B.V. holds 51%.</p>
            </section>

            <section id="unclaimed-shares" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700">
                Unclaimed Shares and Dividends Of Titan company Ltd Transferred To IEPF
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
                Why my shares of Titan company Ltd are in IEPF?
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
              The company needs to let the shareholder know before moving the shares to IEPF. They do this by sending a letter to the shareholders registered address and also by posting a public notice in the newspaper. If the shareholder doesnt respond, the company can go ahead and transfer the shares to IEPF. This transfer happens when the shareholder hasnt claimed dividends for seven or more years in a row.
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
                  Titan company Ltd 
                  </p>

                  {/* Link */}
                  <Link
                    className="text-md text-[#00000099] "
                    href="https://www.titancompany.in/"
                  >
                  https://www.titancompany.in/ 
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
                  Why my Shares of Titan company Ltd are in IEPF?
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

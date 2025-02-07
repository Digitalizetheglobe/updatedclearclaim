"use client";

import Link from "next/link";
import Image from "next/image";
import Supreme  from "../../../../public/casestudy/supreme.jpeg";
import fileimg from "../../../../public/images/server-01.png";
import tick from "../../../../public/images/tick.svg";
import phone from "../../../../public/images/phone.png";
import email from "../../../../public/images/mail-02.png";
import pin from "../../../../public/images/marker-pin-01.png";
import { useEffect, useState, useRef } from "react";
import FaqAparm from "../unclaimed-shares-apar-industries/faqapar";

export default function UnclaimedSharesofSupremePetrochemLtd() {
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
              Unclaimed Shares of{" "}
              <span className="text-green-600">Supreme Petrochem Ltd.
              </span>
            </h1>
            <p className="mb-6 text-[#00000099] text-justify">
            Supreme Petrochem Ltd (SPL) is one of India’s leading manufacturers of polystyrene and its variants. Incorporated in 1995, the company operates with a strong presence in the polymer industry, catering to a diverse range of applications, including packaging, electronics, automotive, appliances, healthcare, and construction. It is headquartered in Mumbai, India, and has state-of-the-art manufacturing facilities in Maharashtra and Tamil Nadu.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
            The company specializes in producing General Purpose Polystyrene (GPPS) and High Impact Polystyrene (HIPS) alongside value-added products such as Expanded Polystyrene (EPS) and specialty polymers. SPL has also diversified into the production of compounds, masterbatches, and extrusion polystyrene insulation boards, further expanding its market reach.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
            Supreme Petrochem exports its products to over 100 countries, showcasing its robust international presence. Its focus on quality, innovation, and sustainability has enabled it to maintain a competitive edge. The company has consistently invested in R&D and technology upgrades to cater to evolving customer needs and global standards.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
            In recent years, SPL has seen growth driven by rising demand for its products across various sectors. With its strong financial performance and commitment to sustainability, the company is well-positioned to capitalize on future opportunities in the global polymer market.
            </p>
            <Image
              src={Supreme }
              alt="Supreme  Logo"
              className="mb-6 mx-auto w-[200px] h-[200px]"
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
                  <b>Registered Name: </b> State Bank of India Ltd.
                </li>
                <li>
                  <b>CIN Number: </b> U65190MH1993PLC074381
                </li>
                <li>
                  <b>ISIN Number: </b> INE062A01020
                </li>
              </ul>
            </section>

            <section id="dividend-history" className="mt-6 bg-white p-4 ">
              <div className="flex gap-4">
                <Image src={tick} alt="file" className="w-5 h-6" />

                <h2 className="text-2xl text-gray-700 font-[600px] mb-2">
                  Dividend’s History of Supreme Petrochem Ltd.
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 mt-4">
                  <thead className="bg-[#00BE5D] text-white">
                    <tr>
                    <th className="text-left p-3">Announcement Date</th>
                      <th className="text-left p-3">Ex-Dividend Date </th>
                      <th className="text-left p-3">Dividend Type </th>
                      <th className="text-left p-3">Dividend (Rs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">21 Oct, 2024</td>
                      <td className="text-gray-600 p-3">31 Oct, 2024</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">2.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      24 Apr, 2024
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      27 Jun, 2024
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">7.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">27 Oct, 2023</td>
                      <td className="text-gray-600 p-3">08 Nov, 2023</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      26 Apr, 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      27 Jun, 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">7.00</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3">27 Oct, 2022</td>
                      <td className="text-gray-600 p-3">26 May, 2017</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">2.60</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      27 Oct, 2022
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      07 Nov, 2022
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">27 Apr, 2022</td>
                      <td className="text-gray-600 p-3">22 Jul, 2022</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">14.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      20 Oct, 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      02 Nov, 2021
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">4.00</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3">30 Apr, 2021</td>
                      <td className="text-gray-600 p-3">25 Jun, 2021</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">12.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      23 Oct, 2020
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      05 Nov, 2020
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">2.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">20 May, 2020</td>
                      <td className="text-gray-600 p-3">14 Sep, 2020</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">1.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      11 Oct, 2019
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      31 Oct, 2019
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">1.00</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3">22 Oct, 2019</td>
                      <td className="text-gray-600 p-3">31 Oct, 2019</td>
                      <td className="text-gray-600 p-3">Special</td>
                      <td className="text-gray-600 p-3">3.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      26 Apr, 2019
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      08 Jul, 2019
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">2.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">26 Oct, 2018</td>
                      <td className="text-gray-600 p-3">05 Nov, 2018</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">1.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      24 Apr, 2018
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      29 May, 2008
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">21.50</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3">16 Oct, 2017</td>
                      <td className="text-gray-600 p-3">02 Nov, 2017</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">1.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      02 May, 2017
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      06 Jul, 2017
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">3.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">13 Oct, 2016</td>
                      <td className="text-gray-600 p-3">01 Nov, 2016</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">1.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      10 Mar, 2016
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      22 Mar, 2016
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Interim</td>
                      <td className="text-gray-600 bg-gray-100 p-3">1.50</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3">21 Jul, 2015</td>
                      <td className="text-gray-600 p-3">16 Sep, 2015</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">1.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      18 Jul, 2014
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      17 Sep, 2014
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">1.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">17 Jul, 2013</td>
                      <td className="text-gray-600 p-3">14 Oct, 2013</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">2.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      18 Jul, 2012
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      25 Sep, 2012
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">1.40</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3">18 Jul, 2011</td>
                      <td className="text-gray-600 p-3">05 Sep, 2011</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">2.80</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      21 Jul, 2010
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      20 Sep, 2010
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">1.80</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">04 Aug, 2009</td>
                      <td className="text-gray-600 p-3">17 Sep, 2009</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">1.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      22 Aug, 2008
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      26 Sep, 2008
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">1.00</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3">10 Aug, 2007</td>
                      <td className="text-gray-600 p-3">18 Sep, 2007</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">1.00</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      17 Aug, 2006
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      06 Oct, 2006
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">1.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">19 Apr, 2005</td>
                      <td className="text-gray-600 p-3">04 May, 2005</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">1.20</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      29 Jul, 2004
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                      08 Oct, 2004
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">Final</td>
                      <td className="text-gray-600 bg-gray-100 p-3">0.80</td>
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
              <p className="text-gray-500">NA</p>
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
                      <th className="text-left p-3">Ex-Dividend Date </th>
                      <th className="text-left p-3">Old FV </th>
                      <th className="text-left p-3">New FV</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">27 Oct, 2022</td>
                      <td className="text-gray-600 p-3">06 Jan, 2023</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">13.70</td>
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
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
              As of now, there have been no major mergers or amalgamations involving Supreme Petrochem Ltd (SPL). The company operates independently and is a significant player in the Indian petrochemical industry. It is part of the Rajan Raheja Group and is primarily engaged in the production and export of polystyrene, expandable polystyrene, and other polymer-based products. SPL is recognized as Indias largest exporter of polystyrene, supplying products to over 90 countries worldwide
              </p>
            </section>

            <section id="physical-shares" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                Physical Shares of Supreme Petrochem Ltd.
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
              Physical shares of Supreme Petrochem Ltd. refer to share certificates issued in paper form before the dematerialization process became common in India. With SEBIs directive that all shares must be held in dematerialized form for trading on stock exchanges, physical shares are now largely obsolete, although they may still be owned by long-term investors who have not converted them to electronic form.
              </p>
            </section>

            <section id="unclaimed-shares" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                Unclaimed Shares and Dividends of Supreme Petrochem Ltd.
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
              Unclaimed shares and dividends of Supreme Petrochem Ltd. are generally managed in compliance with the rules of the Investor Education and Protection Fund (IEPF). Shareholders who have not claimed their dividends or have unclaimed shares due to various reasons, such as a change in address, outdated contact information, or a lapse in tracking, can retrieve these by following a specific process.
              </p>
            </section>

            <section id="faq" className="mt-8 p-6 ">
              <div className="flex gap-4 items-center ">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700">
                FAQs about unclaimed shares of Maharashtra Scooters Ltd.
                </h2>
              </div>
            </section>

            <FaqAparm/>

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

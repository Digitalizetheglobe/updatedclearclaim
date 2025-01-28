"use client";

import Link from "next/link";
import Image from "next/image";
import bharat from "../../../../public/casestudy/bharat-electronics.png";
import fileimg from "../../../../public/images/server-01.png";
import tick from "../../../../public/images/tick.svg";
import { useEffect, useState, useRef } from "react";


export default function BharatElectronicslimited() {
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
              Bharat
              <span className="text-green-600"> Electronics Limited</span>
            </h1>
            <p className="mb-6 text-[#00000099] text-justify">
              Bharat Electronics Limited (BEL) is a premier public sector
              company in India, specializing in the design, development, and
              manufacturing of advanced electronic products and systems for the
              defense and civilian sectors. Established in 1954 under the
              Ministry of Defense, BEL has played a vital role in supporting
              Indias defense infrastructure, providing cutting-edge technology
              solutions to the Indian Armed Forces.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
              BEL product portfolio includes radar systems, communication
              equipment, electronic warfare systems, software-defined radios,
              and missile systems, among others. Over the years, the company has
              diversified into areas such as smart cities, automation, and
              renewable energy, leveraging its expertise in electronics and
              technology to contribute to Indias modernization efforts.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
              With state-of-the-art manufacturing facilities and R&D centers
              across India, BEL is a leader in indigenization, reducing reliance
              on foreign imports by developing technologies suited to the Indian
              context. The companys commitment to quality and innovation has
              earned it recognition both domestically and internationally.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
              BEL has consistently ranked among the top defense PSUs in India
              and holds a significant market share in defense electronics. It
              has also partnered with various global defense companies to bring
              advanced technology to India.{" "}
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
              Besides defense, BEL contributions to other sectors like
              telecommunications, aerospace, and healthcare are noteworthy. As a
              key player in Indias defense ecosystem, BEL continues to
              strengthen the nations security, contributing to economic
              development through technological advancements and industrial
              growth.
            </p>

            <Image
              src={bharat}
              alt="bharat Logo"
              className="mb-6 mx-auto w-[350px] h-[220px]"
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
                  <b>Registered Name: </b> Bharat Electronics Limited
                </li>
                <li>
                  <b>CIN Number: </b> L32309KA1954GOI000787
                </li>
                <li>
                  <b>ISIN Number: </b> INE263A01016
                </li>
              </ul>
            </section>

            <section id="dividend-history" className="mt-6 bg-white p-4 ">
              <div className="flex gap-4">
                <Image src={tick} alt="file" className="w-5 h-6" />

                <h2 className="text-2xl text-gray-700 font-[600px] mb-2">
                  Dividend’s History of Bharat Electronics Limited
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
                      <td className="text-gray-600 p-3">14 Aug 2024</td>
                      <td className="text-gray-600 p-3">0.80</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        22 Mar 2024
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">0.70</td>
                      <td className="text-gray-600 bg-gray-100 p-3">INTERIM</td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        23 Mar 2024
                      </td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3">09 Feb 2024</td>
                      <td className="text-gray-600 p-3">0.70</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">10 Feb 2024</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        17 Aug 2023
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">0.60</td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">24 Mar 2023</td>
                      <td className="text-gray-600 p-3">0.60</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">25 Mar 2023</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        10 Feb 2023
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">0.60</td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        10 Feb 2023
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">08 Aug 2022</td>
                      <td className="text-gray-600 p-3">1.50</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        24 Mar 2022
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">1.50</td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        26 Mar 2022
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">09 Feb 2022</td>
                      <td className="text-gray-600 p-3">1.50</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">10 Feb 2022</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        14 Sep 2021
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">1.20</td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">23 Mar 2021</td>
                      <td className="text-gray-600 p-3">1.40</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">24 Mar 2021</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        08 Feb 2021
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">1.40</td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        09 Feb 2021
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">15 Sep 2020</td>
                      <td className="text-gray-600 p-3">1.40</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        11 Feb 2020
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">1.40</td>
                      <td className="text-gray-600 p-3 bg-gray-100">Interim</td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        12 Feb 2020
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">20 Aug 2019</td>
                      <td className="text-gray-600 p-3">1.70</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        27 Mar 2019
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">0.70</td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        28 Mar 2019
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">19 Mar 2019</td>
                      <td className="text-gray-600 p-3">0.70</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">20 Mar 2019</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        08 Feb 2019
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">0.30</td>
                      <td className="text-gray-600 p-3 bg-gray-100">Interim</td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        11 Feb 2019
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">20 Aug 2018</td>
                      <td className="text-gray-600 p-3">0.40</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        08 Feb 2018
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">1.60</td>
                      <td className="text-gray-600 p-3 bg-gray-100">Interim</td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        09 Feb 2018
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">14 Aug 2017</td>
                      <td className="text-gray-600 p-3">1.05</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        29 Mar 2017
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">0.90</td>
                      <td className="text-gray-600 p-3 bg-gray-100">Interim</td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        30 Mar 2017
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">02 Feb 2017</td>
                      <td className="text-gray-600 p-3">3.00</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">04 Feb 2017</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        18 Aug 2016
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">14.50</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3">04 Feb 2016</td>
                      <td className="text-gray-600 p-3">2.50</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">05 Feb 2016</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        10 Aug 2015
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">23.20</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">28 Jan 2015</td>
                      <td className="text-gray-600 p-3">6.00</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">29 Jan 2015</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        12 Sep 2014
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">17.30</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">29 Jan 2014</td>
                      <td className="text-gray-600 p-3">6.00</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">30 Jan 2014</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        06 Sep 2013
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">16.30</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">30 Jan 2013</td>
                      <td className="text-gray-600 p-3">16.30</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        07 Sep 2012
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">10.80</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">01 Feb 2012</td>
                      <td className="text-gray-600 p-3">10.00</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">02 Feb 2012</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        13 Sep 2011
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">15.60</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">02 Feb 2017</td>
                      <td className="text-gray-600 p-3">6.00</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">03 Feb 2011</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        13 Sep 2010
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">13.20</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
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
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">03 Feb 2010</td>
                      <td className="text-gray-600 p-3">6.00</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">04 Feb 2010</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        14 Sep 2009
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">12.70</td>
                      <td className="text-gray-600 bg-gray-100 p-3">FINAL</td>
                      <td className="text-gray-600 bg-gray-100 p-3">-</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3">28 Jan 2009</td>
                      <td className="text-gray-600 p-3">6.00</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">29 Jan 2009</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        12 Sep 2008
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">14.70</td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">30 Jan 2008</td>
                      <td className="text-gray-600 p-3">6.00</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">31 Jan 2008</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        07 Sep 2007
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">14.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">25 Jan 2007</td>
                      <td className="text-gray-600 p-3">4.00</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">29 Jan 2007</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        01 Sep 2006
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">10.60</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">31 Oct 2005</td>
                      <td className="text-gray-600 p-3">4.00</td>
                      <td className="text-gray-600 p-3">INTERIM</td>
                      <td className="text-gray-600 p-3">03 Nov 2005</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        07 Dec 2004
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">4.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">INTERIM</td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        08 Dec 2004
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">23 Mar 2021</td>
                      <td className="text-gray-600 p-3">1.40</td>
                      <td className="text-gray-600 p-3">Interim</td>
                      <td className="text-gray-600 p-3">24 Mar 2021</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        29 Aug 2003
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">7.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">-</td>
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
                      <th className="text-left p-3">Ex-Date</th>
                      <th className="text-left p-3">Bonus Ratio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">15 Sep 2022</td>
                      <td className="text-gray-600 p-3">2:1</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        28 Sep 2017
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">1:10</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">14 Sep 2015</td>
                      <td className="text-gray-600 p-3">2:1</td>
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
                      <th className="text-left p-3">Ex-Date</th>
                      <th className="text-left p-3">Old FV</th>
                      <th className="text-left p-3">New FV</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">16 Mar 2017</td>
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
              <p className="text-[#00000099] leading-6 mb-6 text-justify">NA</p>
            </section>

            <section id="unclaimed-shares" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                  Unclaimed Shares and Dividends Of Bharat Electronics Limited
                  are in IEPF
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                The Central Government introduced the Investor Education and
                Protection Fund (IEPF) to protect investors interests and
                promote awareness. It is established under Section 125 of the
                Companies Act, 2013 (Act). The unpaid or unclaimed amounts
                belonging to a companys investors are pooled and credited into
                the IEPF. The IEPF funds are utilized for various purposes as
                provided under the Act. The IEPFA Authority is entrusted with
                the responsibility of administration of the Investor Education
                Protection Fund (IEPF), making refunds of shares, unclaimed
                dividends, matured deposits/debentures etc. to investors,
                promoting awareness among investors, and protecting the
                interests of the investors.
              </p>
            </section>

            <section id="whymyshares" className="mt-8 bg-white p-6 ">
              <div className="flex gap-4 items-center mb-4">
                <Image src={tick} alt="tick" className="w-6 h-6" />
                <h2 className="text-2xl text-gray-700 ">
                  Why my shares of Bharat Electronics Limited are in IEPF?
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
                    Bharat Electronics Limited
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-md text-[#00000099] ">
                    http://www.bel-india.in/
                  </p>
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
                  Unclaimed Shares and Dividends Of Bharat Heavy Electricals Limited
                </a>
              </li>
              <li
                className={`hover:bg-gray-200 p-2 rounded-md text-[15px]${
                  activeSection === "whymyshares" ? "bg-gray-300" : ""
                }`}
              >
                <a href="#whymyshares">
                  Why my shares of Bharat Heavy Electricals Limited are in IEPF?
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

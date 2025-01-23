"use client";

import Link from "next/link";
import Image from "next/image";
import bombay from "../../../../public/casestudy/Bombay Oxygen Investments Limited.jpg";
import fileimg from "../../../../public/images/server-01.png";
import tick from "../../../../public/images/tick.svg";
import { useEffect, useState, useRef } from "react";

export default function BombayOxygenInvestmentsLimited() {
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
              Bombay Oxygen
              <span className="text-green-600"> Investments Limited </span>
            </h1>
            <p className="mb-6 text-[#00000099] text-justify">
              Bombay Oxygen Investments Limited (BOIL) is an investment company
              based in India. The company primarily focuses on making
              investments in a diverse range of assets, including equities,
              fixed-income securities, and other financial instruments, aiming
              to generate long-term capital appreciation. Bombay Oxygen
              Investments Limited is listed on the Bombay Stock Exchange (BSE),
              providing shareholders with an opportunity to participate in the
              growth and profitability of its investments. Historically, the
              company was associated with Bombay Oxygen Corporation Limited,
              which was involved in the production of oxygen, a key product used
              in medical, industrial, and commercial applications. However, over
              time, the company transitioned to a more investment-oriented
              business model, shifting its focus to capital market activities.
              Formerly the company was known as Bombay Oxygen Corporation. BOIL
              operates with a strategy that emphasizes prudent investment
              decisions, managing risks effectively, and optimizing returns for
              its shareholders. Its portfolio often includes a mix of
              traditional and alternative investments, reflecting the companys
              goal of balancing risk and return. The company is known for
              maintaining a conservative and long-term approach in its
              investment philosophy.
            </p>
            <p className="mb-6 text-[#00000099] text-justify">
              The corporate governance of Bombay Oxygen Investments Limited is
              overseen by a board of directors, who ensure that the company
              adheres to regulatory requirements and acts in the best interest
              of its shareholders. Over the years, BOIL has gained recognition
              for its stability and consistent performance in the investment
              space.
            </p>
            <p className="mb-6 text-[#00000099] text-justify underline font-bold">
              In conclusion, Bombay Oxygen Investments Limited continues to play
              an important role in Indias financial landscape by offering
              investment opportunities that are aligned with its long-term
              growth strategy.
            </p>

            <Image
              src={bombay}
              alt="bombay Logo"
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
                  <b>Registered Name: </b> Bombay Oxygen Investments Limited
                </li>
                <li>
                  <b>CIN Number: </b>
                  L65100MH1960PLC011835
                </li>
                <li>
                  <b>ISIN Number: </b> INE01TL01014
                </li>
              </ul>
            </section>

            <section id="dividend-history" className="mt-6 bg-white p-4 ">
              <div className="flex gap-4">
                <Image src={tick} alt="file" className="w-5 h-6" />

                <h2 className="text-2xl text-gray-700 font-[600px] mb-2">
                  Dividend’s History of Bombay Oxygen Investments Limited
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 mt-4">
                  <thead className="bg-[#00BE5D] text-white">
                    <tr>
                      <th className="text-left p-3">Ex-Date</th>
                      <th className="text-left p-3">Dividend Amount</th>
                      <th className="text-left p-3">Dividend Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">06 Aug 2024</td>
                      <td className="text-gray-600 p-3">25.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        27 Jun 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">15.00</td>
                      <td className="text-gray-600 bg-gray-100 p-3">FINAL</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">25 Jul 2022</td>
                      <td className="text-gray-600 p-3">20.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        20 Jul 2021
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">20.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">27 Aug 2020</td>
                      <td className="text-gray-600 p-3">10.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        09 Aug 2019
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">10.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">19 Jul 2018</td>
                      <td className="text-gray-600 p-3">10.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        15 Jun 2017
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">20.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">26 May 2016</td>
                      <td className="text-gray-600 p-3">10.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        23 Jul 2015
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">10.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">11 Jul 2013</td>
                      <td className="text-gray-600 p-3">5.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        09 Aug 2012
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">20.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">26 Aug 2011</td>
                      <td className="text-gray-600 p-3">20.00</td>
                      <td className="text-gray-600 p-3">Final</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        29 Jul 2010
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">20.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">27 Aug 2009</td>
                      <td className="text-gray-600 p-3">20.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        05 Jun 2008
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">20.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3">06 Sep 2007</td>
                      <td className="text-gray-600 p-3">11.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        17 Aug 2006
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">20.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">29 Aug 2005</td>
                      <td className="text-gray-600 p-3">20.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        03 Sep 2004
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">18.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">08 Sep 2003</td>
                      <td className="text-gray-600 p-3">10.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        31 May 2002
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">0.00</td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
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
              <p className="text-[#00000099] leading-6 mb-6 text-justify">NA</p>
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
                  Unclaimed Shares and Dividends Of Bombay Oxygen Investments
                  Limited Transferred To IEPF
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
                  Why my shares of Bombay Oxygen Investments Limited are in
                  IEPF?{" "}
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                Before transferring the shares to IEPF the company has to notify
                the shareholder by sending letter to the registered address of
                the shareholder. The company also has to notify by giving a
                public notification in the newspaper. If the shareholder does
                not communicate back, the company can transfer the shares to
                IEPF. The company transfers the shares to IEPF when the
                dividends of seven or more consecutive years are not claimed by
                the shareholder.
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
                    Bombay Oxygen Investments Limited
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href="http://www.bomoxy.com/"
                    className="text-md text-[#00000099] "
                  >
                    http://www.bomoxy.com/
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
                  Unclaimed Shares and Dividends Of Bombay Oxygen Investments
                  Limited
                </a>
              </li>
              <li
                className={`hover:bg-gray-200 p-2 rounded-md text-[15px]${
                  activeSection === "whymyshares" ? "bg-gray-300" : ""
                }`}
              >
                <a href="#whymyshares">
                  Why my shares of Bombay Oxygen Investments Limited are in
                  IEPF?
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

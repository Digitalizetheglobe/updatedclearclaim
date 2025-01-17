"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import deepak from "../../../../public/casestudy/deepak.webp";
import fileimg from "../../../../public/images/server-01.png";
import tick from "../../../../public/images/tick.svg";


export default function DeepakFertilizer() {


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
              Deepak Fertilisers
              <span className="text-green-600">
                {" "}
                and Petrochemicals Corporation Limited
              </span>
            </h1>
            <p className="mb-6 text-[#00000099] text-justify">
              Deepak Fertilizers and Petrochemicals Corporation Ltd. (DFPCL) is
              among India’s leading producers of fertilizers and industrial
              chemicals. Set up in 1979 as an Ammonia manufacturer, DFPCL today
              is a publicly listed, multi-product Indian conglomerate with an
              annual turnover of over one billion USD with a product portfolio
              spanning industrial chemicals, bulk and specialty fertilizers,
              farming diagnostics and solutions, technical ammonium nitrate and
              value added real estate, which includes India’s 1st & largest
              revolutionary concept retail destination for Home Interiors &
              Design. DFPCL today is a name that spells quality and trust. It
              has established a prime position for itself over the last three
              and a half decades across Indian and global markets. Focused on
              growth, drawing synergies from its existing products and
              leveraging current strengths, DFPCL is augmenting its
              manufacturing capabilities to expand its product portfolio. DFPCL
              is directed towards shaping a successful growth trajectory in the
              dynamically changing world of business. It is building resilience
              to spearhead change through the swiftly transforming world
              economy. The focus is to create value. DFPCL has developed a
              unique business model where synergies and diversities can be
              mutually inherent, allowing the Company to build its financial
              strength, generate free cash flow and invest in growth, both in
              India and globally.
            </p>

            <Image
              src={deepak}
              alt="deepak Logo"
              className="mb-6 mx-auto w-[350px] h-[250px]"
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
                  <b>Registered Name: </b> Deepak Fertilizers and Petrochemicals
                  Corporation Limited
                </li>
                <li>
                  <b>CIN Number: </b>
                  L24121MH1979PLC021360
                </li>
                <li>
                  <b>ISIN Number: </b> INE501A01019
                </li>
              </ul>
            </section>

            <section id="dividend-history" className="mt-6 bg-white p-4 ">
              <div className="flex gap-4">
                <Image src={tick} alt="file" className="w-5 h-6" />

                <h2 className="text-2xl text-gray-700 font-[600px] mb-2">
                  Dividend’s History of Deepak Fertilizers and Petrochemicals
                  Corporation Limited
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 mt-4">
                  <thead className="bg-[#00BE5D] text-white">
                    <tr>
                      <th className="text-left p-3">Announcement Date </th>
                      <th className="text-left p-3">Ex Dividend Date </th>
                      <th className="text-left p-3">Dividend (Rs)</th>
                      <th className="text-left p-3">-</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-gray-600 p-3">29 May, 2024</td>
                      <td className="text-gray-600 p-3">03 Sep, 2024</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">8.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        17 May, 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">
                        25 Aug, 2023
                      </td>
                      <td className="text-gray-600 bg-gray-100 p-3">FINAL</td>
                      <td className="text-gray-600 bg-gray-100 p-3">10.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">25 Jul 2022</td>
                      <td className="text-gray-600 p-3">20.00</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        25 May, 2022
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        25 Aug, 2022
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Final</td>
                      <td className="text-gray-600 p-3 bg-gray-100">9.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">28 May, 2021</td>
                      <td className="text-gray-600 p-3">17 Aug, 2021</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">7.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        30 Jun, 2020
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        16 Sep, 2020
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">3.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">30 May, 2019</td>
                      <td className="text-gray-600 p-3">05 Aug, 2019</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">3.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        31 May, 2018
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        07 Sep, 2018
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">6.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">30 Jun, 2017</td>
                      <td className="text-gray-600 p-3">12 Sep, 2017</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">6.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        04 Mar, 2016
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        17 Mar, 2016
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">Interim</td>
                      <td className="text-gray-600 p-3 bg-gray-100">5.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">21 May, 2015</td>
                      <td className="text-gray-600 p-3">28 Jul, 2015</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        15 May, 2014
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        17 Jul, 2014
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">6.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">31 May, 2013</td>
                      <td className="text-gray-600 p-3">25 Jul, 2013</td>
                      <td className="text-gray-600 p-3">Final</td>
                      <td className="text-gray-600 p-3">5.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        18 May, 2012
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        12 Jul, 2012
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">5.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">11 May, 2011</td>
                      <td className="text-gray-600 p-3">21 Jul, 2011</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">5.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        26 May, 2010
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        06 Jul, 2010
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">4.50</td>
                    </tr>

                    <tr>
                      <td className="text-gray-600 p-3">20 May, 2009</td>
                      <td className="text-gray-600 p-3">07 Jul, 2009</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">4.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        02 Jun, 2008
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        11 Jul, 2008
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">3.50</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3"> 22 May, 2007</td>
                      <td className="text-gray-600 p-3">28 Jun, 2007</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">3.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        19 May, 2006
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">
                        29 Jun, 2006
                      </td>
                      <td className="text-gray-600 p-3 bg-gray-100">FINAL</td>
                      <td className="text-gray-600 p-3 bg-gray-100">3.00</td>
                    </tr>
                    <tr>
                      <td className="text-gray-600 p-3">19 May, 2005</td>
                      <td className="text-gray-600 p-3">01 Jul, 2005</td>
                      <td className="text-gray-600 p-3">FINAL</td>
                      <td className="text-gray-600 p-3">3.00</td>
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
                  Unclaimed Shares and Dividends Of Deepak Fertilisers and
                  Petrochemicals Corporation Limited Transferred To IEPF
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                The Central Government introduced the Investor Education and
                Protection Fund (IEPF) to protect investors’ interests and
                promote awareness. It is established under Section 125 of the
                Companies Act, 2013 (Act). The unpaid or unclaimed amounts
                belonging to a company’s investors are pooled and credited into
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
                  Why my shares of Deepak Fertilisers and Petrochemicals
                  Corporation Limited are in IEPF?
                </h2>
              </div>
              <p className="text-[#00000099] leading-6 mb-6 text-justify">
                Before transferring the shares to IEPF the company has to notify
                the shareholder by sending letter to the registered address of
                the shareholder. The company also has to notify by giving a
                public notification in the newspaper. If the shareholder doesn’t
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
                <b> CLEARCLAIM VENTURES PRIVATE LIMITED </b> can help you recover
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
                    Deepak Fertilisers and Petrochemicals Corporation Limited
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href="https://www.dfpcl.com/"
                    className="text-md text-[#00000099] "
                  >
                    https://www.dfpcl.com/
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
            <ul className="space-y-1">
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
                  Unclaimed Shares and Dividends Of   Deepak Fertilizers and Petrochemicals Corporation Ltd.
                </a>
              </li>
              <li
                className={`hover:bg-gray-200 p-2 rounded-md text-[15px] ${
                  activeSection === "whymyshares" ? "bg-gray-300" : ""
                }`}
              >
                <a href="#whymyshares">
                  Why my shares of Deepak Fertilizers and Petrochemicals Corporation Ltd are in
                  IEPF?
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

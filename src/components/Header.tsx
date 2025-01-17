"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png";

// Export default at the top
export default function Header() {
  const handleToggleMenu = () => {
    const collapseMenu = document.getElementById("collapseMenu");
    if (collapseMenu) {
      collapseMenu.classList.toggle("hidden");
    }
  };

  useEffect(() => {
    // Type the event parameter explicitly as MouseEvent
    const handleOutsideClick = (event: MouseEvent) => {
      const toggleButton = document.getElementById("toggleMenu");
      const collapseMenu = document.getElementById("collapseMenu");

      // Close the menu if the click is outside the menu and the toggle button
      if (
        collapseMenu &&
        !collapseMenu.contains(event.target as Node) &&
        toggleButton &&
        !toggleButton.contains(event.target as Node)
      ) {
        collapseMenu.classList.add("hidden");
      }
    };

    // Add event listener to detect clicks outside
    document.addEventListener("click", handleOutsideClick);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <header className="flex py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide relative ">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" className="w-36" priority />
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          id="toggleMenu"
          onClick={handleToggleMenu}
          className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 fill-black"
            viewBox="0 0 24 24"
          >
            <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
          </svg>
        </button>

        {/* Menu */}
        <div
          id="collapseMenu"
          className="hidden max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 lg:block"
        >
          <ul className="lg:flex gap-x-5 max-lg:space-y-3">
            <li className="mb-6 hidden max-lg:block">
              <Link href="/">
                <Image src={logo} alt="Logo" className="w-36" priority />
              </Link>
            </li>
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
              <Link
                href="/"
                className="hover:text-[#00BE5D] text-[#000] block font-semibold text-[15px]"
              >
                Home
              </Link>
            </li>
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
              <Link
                href="/about"
                className="hover:text-[#00BE5D] text-[#000] block font-semibold text-[15px]"
              >
                About
              </Link>
            </li>
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
              <Link
                href="/iepfclaim"
                className="hover:text-[#00BE5D] text-[#000] block font-semibold text-[15px]"
              >
                IEPF Claim
              </Link>
            </li>
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
              <Link
                href="/recovery-of-shares"
                className="hover:text-[#00BE5D] text-[#000] block font-semibold text-[15px]"
              >
                Recovery of Shares
              </Link>
            </li>
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
              <Link
                href="/blog"
                className="hover:text-[#00BE5D] text-[#000] block font-semibold text-[15px]"
              >
                Blog
              </Link>
            </li>
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
              <Link
                href="/contact"
                className="hover:text-[#00BE5D] text-[#000] block font-semibold text-[15px]"
              >
                Contact
              </Link>
            </li>
            <Link href="/case-study/3m-india-limited">
              <button className="py-2 px-3 text-xs bg-transparent text-[#00BE5D] border-[#00BE5D] border-2 hover:text-white font-semibold hover:bg-[#00BE5D] mt-6 md:mt-0">
                Case Study
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}

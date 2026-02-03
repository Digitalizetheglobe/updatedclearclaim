"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png";

export default function Header() {
  const handleToggleMenu = () => {
    const collapseMenu = document.getElementById("collapseMenu");
    if (collapseMenu) {
      collapseMenu.classList.toggle("hidden");
    }
  };

  const handleCloseMenu = () => {
    const collapseMenu = document.getElementById("collapseMenu");
    if (collapseMenu) {
      collapseMenu.classList.add("hidden");
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const toggleButton = document.getElementById("toggleMenu");
      const collapseMenu = document.getElementById("collapseMenu");

      if (
        toggleButton &&
        collapseMenu &&
        !toggleButton.contains(event.target as Node) &&
        !collapseMenu.contains(event.target as Node)
      ) {
        collapseMenu.classList.add("hidden");
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <header className="flex py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide relative">
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
        {/* Menu */}
        <div
          id="collapseMenu"
          className="hidden max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 lg:block"
        >
          <div className="lg:flex items-center gap-5">
            {" "}
            {/* Flex container for menu and button */}
            <ul className="lg:flex gap-x-5 max-lg:space-y-3">
              <li className="mb-6 hidden max-lg:block">
                <Link href="/" onClick={handleCloseMenu}>
                  <Image src={logo} alt="Logo" className="w-36" priority />
                </Link>
              </li>
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <Link
                  href="/"
                  className="hover:text-[#00BE5D] text-[#000] block font-semibold text-[15px]"
                  onClick={handleCloseMenu}
                >

                  
                  Home
                </Link>
              </li>
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <Link
                  href="/about"
                  className="hover:text-[#00BE5D] text-[#000] block font-semibold text-[15px]"
                  onClick={handleCloseMenu}
                >
                  About
                </Link>
              </li>
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <Link
                  href="/iepfclaim"
                  className="hover:text-[#00BE5D] text-[#000] block font-semibold text-[15px]"
                  onClick={handleCloseMenu}
                >
                  IEPF Claim
                </Link>
              </li>
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <Link
                  href="/recovery-of-shares"
                  className="hover:text-[#00BE5D] text-[#000] block font-semibold text-[15px]"
                  onClick={handleCloseMenu}
                >
                  Recovery of Shares
                </Link>
                {/* new update  */}
      </li>
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <Link
                  href="/clearclaim-nri"
                  className="hover:text-[#00BE5D] text-[#000] block font-semibold text-[15px]"
                  onClick={handleCloseMenu}
                >

                  NRI Services
                </Link>
              </li>
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <Link
                  href="/blog"
                  className="hover:text-[#00BE5D] text-[#000] block font-semibold text-[15px]"
                  onClick={handleCloseMenu}
                >
                  Blog
                </Link>
              </li>
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <Link
                  href="/contact"
                  className="hover:text-[#00BE5D] text-[#000] block font-semibold text-[15px]"
                  onClick={handleCloseMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
            {/* Case Study Button */}
            <Link href="/case-study/3m-india-limited" onClick={handleCloseMenu}>
              <button className="py-2 px-4 text-sm bg-transparent text-[#00BE5D] border-[#00BE5D] border-2 hover:text-white font-semibold hover:bg-[#00BE5D] lg:ml-5 max-lg:mt-6 lg:mt-0">
                Case Study
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

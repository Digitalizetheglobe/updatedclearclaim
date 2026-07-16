"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setIsResourcesOpen(false); // Reset dropdown when menu closes
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const toggleButton = document.getElementById("toggleMenu");
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        toggleButton &&
        !toggleButton.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMenuOpen]);

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  const toggleResources = () => setIsResourcesOpen(!isResourcesOpen);

  return (
    <>
      <header
        className={`flex py-4 px-4 sm:px-10 min-h-[70px] tracking-wide sticky top-0 z-[1000] transition-all duration-300 ${isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-3"
          : "bg-white py-4"
          }`}
      >
        <div className="flex items-center justify-between gap-5 w-full max-w-7xl mx-auto">
          <Link href="/" className="flex items-center shrink-0">
            <Image src={logo} alt="Logo" className="w-32 sm:w-36" priority />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-x-8">
              <li>
                <Link href="/" className="hover:text-[#00BE5D] text-[#000] font-semibold text-[15px] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#00BE5D] text-[#000] font-semibold text-[15px] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/iepfclaim" className="hover:text-[#00BE5D] text-[#000] font-semibold text-[15px] transition-colors">
                  IEPF Claim
                </Link>
              </li>
              <li>
                <Link href="/recovery-of-shares" className="hover:text-[#00BE5D] text-[#000] font-semibold text-[15px] transition-colors">
                  Recovery of Shares
                </Link>
              </li>
              <li>
                <Link href="/nri-services" className="hover:text-[#00BE5D] text-[#000] font-semibold text-[15px] transition-colors">
                  NRI Services
                </Link>
              </li>
              <li className="relative group">
                <div className="hover:text-[#00BE5D] text-[#000] flex items-center gap-1 font-semibold text-[15px] cursor-pointer">
                  Resources
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 transition-transform duration-300 group-hover:rotate-180">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
                <ul className="absolute top-full left-0 bg-white shadow-2xl border border-gray-100 rounded-2xl py-4 px-5 min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-50">
                  <li><Link href="/blog" className="hover:text-[#00BE5D] text-gray-700 block py-2 text-[15px] font-medium transition-colors hover:bg-green-50 px-3 rounded-lg">Blog</Link></li>
                  <li><Link href="/gallery" className="hover:text-[#00BE5D] text-gray-700 block py-2 text-[15px] font-medium transition-colors hover:bg-green-50 px-3 rounded-lg">Gallery</Link></li>
                  <li><Link href="/publication" className="hover:text-[#00BE5D] text-gray-700 block py-2 text-[15px] font-medium transition-colors hover:bg-green-50 px-3 rounded-lg">Publication</Link></li>
                </ul>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#00BE5D] text-[#000] font-semibold text-[15px] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
            {/* <Link href="/case-study/3m-india-limited">
              <button className="py-2.5 px-6 text-sm bg-transparent text-[#00BE5D] border-[#00BE5D] border-2 hover:text-white font-bold rounded-full hover:bg-[#00BE5D] transition-all duration-300">
                Case Study
              </button>
            </Link> */}
            <Link href="/case-study/3m-india-limited">
              <button className="group relative overflow-hidden py-2.5 px-8 text-sm bg-[#00BE5D] text-white border-[#00BE5D] border-2 hover:text-[#00BE5D] font-bold rounded-full hover:bg-transparent transition-all duration-300">
                <div
                  className="absolute inset-0 -translate-x-[150%] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] animate-shine"
                  style={{ animationDuration: "3s" }}
                />
                <span className="relative z-10">Case Study</span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button id="toggleMenu" onClick={handleToggleMenu} className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 fill-black" viewBox="0 0 24 24">
              <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar - Moved outside the header tag to avoid stacking context issues with backdrop-filter */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-3/4 min-w-[300px] bg-white shadow-2xl z-[1100] transition-transform duration-300 lg:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8 border-b pb-4">
            <Link href="/" onClick={handleCloseMenu}>
              <Image src={logo} alt="Logo" className="w-32" priority />
            </Link>
            <button onClick={handleCloseMenu} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto">
            <ul className="space-y-4">
              <li><Link href="/" onClick={handleCloseMenu} className="block text-lg font-bold text-gray-800 hover:text-[#00BE5D] transition-colors py-2">Home</Link></li>
              <li><Link href="/about" onClick={handleCloseMenu} className="block text-lg font-bold text-gray-800 hover:text-[#00BE5D] transition-colors py-2">About</Link></li>
              <li><Link href="/iepfclaim" onClick={handleCloseMenu} className="block text-lg font-bold text-gray-800 hover:text-[#00BE5D] transition-colors py-2">IEPF Claim</Link></li>
              <li><Link href="/recovery-of-shares" onClick={handleCloseMenu} className="block text-lg font-bold text-gray-800 hover:text-[#00BE5D] transition-colors py-2">Recovery of Shares</Link></li>
              <li><Link href="/nri-services" onClick={handleCloseMenu} className="block text-lg font-bold text-gray-800 hover:text-[#00BE5D] transition-colors py-2">NRI Services</Link></li>

              <li className="space-y-3">
                <div
                  onClick={toggleResources}
                  className="flex items-center justify-between cursor-pointer group py-2"
                >
                  <p className="text-lg font-bold text-gray-800 group-hover:text-[#00BE5D] transition-colors">Resources</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${isResourcesOpen ? "rotate-180 text-[#00BE5D]" : "text-gray-400"}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>

                <div className={`overflow-hidden transition-all duration-300 ${isResourcesOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                  <ul className="pl-4 space-y-3 border-l-2 border-green-100 ml-1">
                    <li><Link href="/blog" onClick={handleCloseMenu} className="block text-base font-semibold text-gray-700 hover:text-[#00BE5D]">Blog</Link></li>
                    <li><Link href="/gallery" onClick={handleCloseMenu} className="block text-base font-semibold text-gray-700 hover:text-[#00BE5D]">Gallery</Link></li>
                    <li><Link href="/publication" onClick={handleCloseMenu} className="block text-base font-semibold text-gray-700 hover:text-[#00BE5D]">Publication</Link></li>
                  </ul>
                </div>
              </li>

              <li><Link href="/contact" onClick={handleCloseMenu} className="block text-lg font-bold text-gray-800 hover:text-[#00BE5D] transition-colors py-2">Contact</Link></li>
            </ul>
          </nav>

          <div className="mt-auto pt-6 border-t font-semibold">
            <Link href="/case-study/3m-india-limited" onClick={handleCloseMenu}>
              <button className="group relative overflow-hidden w-full py-4 bg-[#00BE5D] text-white rounded-xl font-bold shadow-lg shadow-green-100 transition-transform active:scale-95">
                <div
                  className="absolute inset-0 -translate-x-[150%] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] animate-shine"
                  style={{ animationDuration: "3s" }}
                />
                <span className="relative z-10">Case Study</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1050] lg:hidden transition-opacity duration-300"
          onClick={handleCloseMenu}
        />
      )}
    </>
  );
}

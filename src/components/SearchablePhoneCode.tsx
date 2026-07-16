"use client";
import React, { useState, useRef, useEffect } from "react";

interface CountryOption {
  value: string;
  label: string;
  flag: string;
  dial: string;
  iso2: string;
}

interface SearchablePhoneCodeProps {
  options: CountryOption[];
  name: string;
  id?: string;
  className?: string;
}

export default function SearchablePhoneCode({
  options,
  name,
  id,
  className = "",
}: SearchablePhoneCodeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("+91");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = options.filter(
    (c) =>
      c.label.toLowerCase().includes(search.toLowerCase()) ||
      c.dial.includes(search)
  );

  const selectedOption = options.find((c) => c.dial === selected) || options[0];

  return (
    <div className="relative h-full" ref={dropdownRef}>
      <input type="hidden" name={name} value={selected} id={id} />
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`${className} w-full flex items-center justify-between gap-1`}
        style={{ appearance: "none" }} // Ensure it removes default styling but we add our own arrow
      >
        <span className="truncate">{selectedOption.flag} {selectedOption.dial || "Other"}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute z-[100] top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden flex flex-col">
          <div className="p-2 border-b border-gray-100 bg-gray-50">
            <input
              type="text"
              placeholder="Search country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-white text-gray-800"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  if (filtered.length > 0) {
                    setSelected(filtered[0].dial);
                    setIsOpen(false);
                  }
                }
              }}
            />
          </div>
          <ul className="max-h-60 overflow-y-auto py-1">
            {filtered.length > 0 ? (
              filtered.map((c) => (
                <li
                  key={c.value}
                  onClick={() => {
                    setSelected(c.dial);
                    setIsOpen(false);
                    setSearch("");
                  }}
                  className={`px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 cursor-pointer flex items-center gap-3 ${
                    selected === c.dial ? "bg-emerald-50/50 font-medium" : ""
                  }`}
                >
                  <span className="text-lg w-6 text-center">{c.flag}</span>
                  <span className="flex-1 truncate">{c.label}</span>
                  <span className="text-gray-400 text-xs">{c.dial}</span>
                </li>
              ))
            ) : (
              <li className="px-4 py-3 text-sm text-gray-500 text-center">
                No countries found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

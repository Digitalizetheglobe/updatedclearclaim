"use client";

import React, { useState, useRef, useEffect } from "react";

interface CountryOption {
  value: string;
  label: string;
  flag: string;
  dial: string;
  iso2: string;
}

interface CountrySelectProps {
  id: string;
  options: CountryOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const FLAG_IMG_BASE = "https://flagcdn.com/w40";

export default function CountrySelect({
  id,
  options,
  value,
  onChange,
  className = "",
}: CountrySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchString, setSearchString] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchString) {
      const timeout = setTimeout(() => setSearchString(""), 1000);
      return () => clearTimeout(timeout);
    }
  }, [searchString]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen((o) => !o);
      return;
    }
    
    if (e.key === "Escape") {
      setIsOpen(false);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const currentIndex = options.findIndex((c) => c.value === value);
      if (currentIndex < options.length - 1) {
        onChange(options[currentIndex + 1].value);
        scrollToOption(currentIndex + 1);
      } else if (currentIndex === -1 && options.length > 0) {
        onChange(options[0].value);
        scrollToOption(0);
      }
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      const currentIndex = options.findIndex((c) => c.value === value);
      if (currentIndex > 0) {
        onChange(options[currentIndex - 1].value);
        scrollToOption(currentIndex - 1);
      }
      return;
    }

    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      const newSearch = searchString + e.key.toLowerCase();
      setSearchString(newSearch);
      
      const matchIndex = options.findIndex((c) => 
        c.label.toLowerCase().startsWith(newSearch)
      );
      
      if (matchIndex !== -1) {
        onChange(options[matchIndex].value);
        scrollToOption(matchIndex);
      }
    }
  };

  const scrollToOption = (index: number) => {
    if (listboxRef.current) {
      const optionEl = listboxRef.current.children[index] as HTMLElement;
      if (optionEl) {
        optionEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  };

  const selectedOption = options.find((c) => c.value === value);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        id={id}
        onClick={() => setIsOpen((o) => !o)}
        onKeyDown={handleKeyDown}
        className={`${className} flex items-center gap-3 text-left`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedOption ? (
          <>
            {selectedOption.iso2 ? (
              <img src={`${FLAG_IMG_BASE}/${selectedOption.iso2}.png`} alt="" className="w-6 h-4 object-cover rounded shrink-0" />
            ) : (
              <span className="text-lg w-6 text-center">{selectedOption.flag}</span>
            )}
            <span className="text-gray-900 truncate">{selectedOption.label}</span>
          </>
        ) : (
          <span className="text-gray-400">Select Country</span>
        )}
        <span className="ml-auto shrink-0 text-gray-800">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={isOpen ? "rotate-180" : ""}>
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>
      
      {isOpen && (
        <ul
          ref={listboxRef}
          className="absolute z-20 mt-1 w-full max-h-52 overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg py-1 text-sm"
          role="listbox"
        >
          {options.map((c, index) => (
            <li
              key={c.value}
              role="option"
              aria-selected={value === c.value}
              onClick={() => {
                onChange(c.value);
                setIsOpen(false);
              }}
              className={`flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-emerald-50 text-gray-800 ${
                value === c.value ? "bg-emerald-50 font-medium" : ""
              }`}
            >
              {c.iso2 ? (
                <img src={`${FLAG_IMG_BASE}/${c.iso2}.png`} alt="" className="w-6 h-4 object-cover rounded shrink-0" />
              ) : (
                <span className="text-lg w-6 text-center">{c.flag}</span>
              )}
              <span className="truncate">{c.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

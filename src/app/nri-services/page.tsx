"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import google from "../../../public/images/google.webp";
import nriabout from '../../../public/images/nri-about.png'
import phoneicon from '../../../public/images/contact.png'
import globalnews from '../../../public/images/folder.png'
import thunder from '../../../public/images/thunder.png';
import rupees from '../../../public/images/rupee-coins.png';
import { Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import recovery from '../../../public/images/global-news.png';
import midnight from '../../../public/images/midnight.png';
import SearchablePhoneCode from "@/components/SearchablePhoneCode";
import CountrySelect from "@/components/CountrySelect";
// import rupees from '../../../public/images/rupee-coins.png'

// Same-origin API routes (no trailing slash - Next matches /api/inquiries)
const API_BASE = "";

const INVESTMENT_TYPES = [
  "Shares Recovery",
  "Mutual Funds Redemption",
  "Insurance Claim Recovery",
  "Provident Funds Recovery",
  "Debtor Recovery",
  "Unclaimed Bank Deposits",
  "Property Dispute",
  "Litigation Funding Consulting",
] as const;

const CALLBACK_TIMES = [
  "10:00 AM-11:00 AM",
  "11:00 AM-12:00 PM",
  "12:00 PM-1:00 PM",
  "2:00 PM-3:00 PM",
  "3:00 PM-4:00 PM",
  "4:00 PM-5:00 PM",
  "5:00 PM-6:00 PM",
  "6:00 PM-7:00 PM",
] as const;

// Flag image base URL (FlagCDN - no API key needed)
const FLAG_IMG_BASE = "https://flagcdn.com/w40";

// All countries with flag images (iso2 for CDN), dial codes
const COUNTRY_OPTIONS: { value: string; label: string; flag: string; dial: string; iso2: string }[] = [
  { value: "India", label: "India", flag: "🇮🇳", dial: "+91", iso2: "in" },
  { value: "United States", label: "United States", flag: "🇺🇸", dial: "+1", iso2: "us" },
  { value: "United Arab Emirates", label: "United Arab Emirates", flag: "🇦🇪", dial: "+971", iso2: "ae" },
  { value: "United Kingdom", label: "United Kingdom", flag: "🇬🇧", dial: "+44", iso2: "gb" },
  { value: "Canada", label: "Canada", flag: "🇨🇦", dial: "+1", iso2: "ca" },
  { value: "Australia", label: "Australia", flag: "🇦🇺", dial: "+61", iso2: "au" },
  { value: "Singapore", label: "Singapore", flag: "🇸🇬", dial: "+65", iso2: "sg" },
  { value: "Afghanistan", label: "Afghanistan", flag: "🇦🇫", dial: "+93", iso2: "af" },
  { value: "Albania", label: "Albania", flag: "🇦🇱", dial: "+355", iso2: "al" },
  { value: "Algeria", label: "Algeria", flag: "🇩🇿", dial: "+213", iso2: "dz" },
  { value: "Andorra", label: "Andorra", flag: "🇦🇩", dial: "+376", iso2: "ad" },
  { value: "Angola", label: "Angola", flag: "🇦🇴", dial: "+244", iso2: "ao" },
  { value: "Antigua and Barbuda", label: "Antigua and Barbuda", flag: "🇦🇬", dial: "+1268", iso2: "ag" },
  { value: "Argentina", label: "Argentina", flag: "🇦🇷", dial: "+54", iso2: "ar" },
  { value: "Armenia", label: "Armenia", flag: "🇦🇲", dial: "+374", iso2: "am" },
  { value: "Austria", label: "Austria", flag: "🇦🇹", dial: "+43", iso2: "at" },
  { value: "Azerbaijan", label: "Azerbaijan", flag: "🇦🇿", dial: "+994", iso2: "az" },
  { value: "Bahamas", label: "Bahamas", flag: "🇧🇸", dial: "+1242", iso2: "bs" },
  { value: "Bahrain", label: "Bahrain", flag: "🇧🇭", dial: "+973", iso2: "bh" },
  { value: "Bangladesh", label: "Bangladesh", flag: "🇧🇩", dial: "+880", iso2: "bd" },
  { value: "Barbados", label: "Barbados", flag: "🇧🇧", dial: "+1246", iso2: "bb" },
  { value: "Belarus", label: "Belarus", flag: "🇧🇾", dial: "+375", iso2: "by" },
  { value: "Belgium", label: "Belgium", flag: "🇧🇪", dial: "+32", iso2: "be" },
  { value: "Belize", label: "Belize", flag: "🇧🇿", dial: "+501", iso2: "bz" },
  { value: "Benin", label: "Benin", flag: "🇧🇯", dial: "+229", iso2: "bj" },
  { value: "Bhutan", label: "Bhutan", flag: "🇧🇹", dial: "+975", iso2: "bt" },
  { value: "Bolivia", label: "Bolivia", flag: "🇧🇴", dial: "+591", iso2: "bo" },
  { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina", flag: "🇧🇦", dial: "+387", iso2: "ba" },
  { value: "Botswana", label: "Botswana", flag: "🇧🇼", dial: "+267", iso2: "bw" },
  { value: "Brazil", label: "Brazil", flag: "🇧🇷", dial: "+55", iso2: "br" },
  { value: "Brunei", label: "Brunei", flag: "🇧🇳", dial: "+673", iso2: "bn" },
  { value: "Bulgaria", label: "Bulgaria", flag: "🇧🇬", dial: "+359", iso2: "bg" },
  { value: "Burkina Faso", label: "Burkina Faso", flag: "🇧🇫", dial: "+226", iso2: "bf" },
  { value: "Burundi", label: "Burundi", flag: "🇧🇮", dial: "+257", iso2: "bi" },
  { value: "Cambodia", label: "Cambodia", flag: "🇰🇭", dial: "+855", iso2: "kh" },
  { value: "Cameroon", label: "Cameroon", flag: "🇨🇲", dial: "+237", iso2: "cm" },
  { value: "Cape Verde", label: "Cape Verde", flag: "🇨🇻", dial: "+238", iso2: "cv" },
  { value: "Central African Republic", label: "Central African Republic", flag: "🇨🇫", dial: "+236", iso2: "cf" },
  { value: "Chad", label: "Chad", flag: "🇹🇩", dial: "+235", iso2: "td" },
  { value: "Chile", label: "Chile", flag: "🇨🇱", dial: "+56", iso2: "cl" },
  { value: "China", label: "China", flag: "🇨🇳", dial: "+86", iso2: "cn" },
  { value: "Colombia", label: "Colombia", flag: "🇨🇴", dial: "+57", iso2: "co" },
  { value: "Comoros", label: "Comoros", flag: "🇰🇲", dial: "+269", iso2: "km" },
  { value: "Congo", label: "Congo", flag: "🇨🇬", dial: "+242", iso2: "cg" },
  { value: "Costa Rica", label: "Costa Rica", flag: "🇨🇷", dial: "+506", iso2: "cr" },
  { value: "Croatia", label: "Croatia", flag: "🇭🇷", dial: "+385", iso2: "hr" },
  { value: "Cuba", label: "Cuba", flag: "🇨🇺", dial: "+53", iso2: "cu" },
  { value: "Cyprus", label: "Cyprus", flag: "🇨🇾", dial: "+357", iso2: "cy" },
  { value: "Czech Republic", label: "Czech Republic", flag: "🇨🇿", dial: "+420", iso2: "cz" },
  { value: "Denmark", label: "Denmark", flag: "🇩🇰", dial: "+45", iso2: "dk" },
  { value: "Djibouti", label: "Djibouti", flag: "🇩🇯", dial: "+253", iso2: "dj" },
  { value: "Dominica", label: "Dominica", flag: "🇩🇲", dial: "+1767", iso2: "dm" },
  { value: "Dominican Republic", label: "Dominican Republic", flag: "🇩🇴", dial: "+1809", iso2: "do" },
  { value: "Ecuador", label: "Ecuador", flag: "🇪🇨", dial: "+593", iso2: "ec" },
  { value: "Egypt", label: "Egypt", flag: "🇪🇬", dial: "+20", iso2: "eg" },
  { value: "El Salvador", label: "El Salvador", flag: "🇸🇻", dial: "+503", iso2: "sv" },
  { value: "Equatorial Guinea", label: "Equatorial Guinea", flag: "🇬🇶", dial: "+240", iso2: "gq" },
  { value: "Eritrea", label: "Eritrea", flag: "🇪🇷", dial: "+291", iso2: "er" },
  { value: "Estonia", label: "Estonia", flag: "🇪🇪", dial: "+372", iso2: "ee" },
  { value: "Eswatini", label: "Eswatini", flag: "🇸🇿", dial: "+268", iso2: "sz" },
  { value: "Ethiopia", label: "Ethiopia", flag: "🇪🇹", dial: "+251", iso2: "et" },
  { value: "Fiji", label: "Fiji", flag: "🇫🇯", dial: "+679", iso2: "fj" },
  { value: "Finland", label: "Finland", flag: "🇫🇮", dial: "+358", iso2: "fi" },
  { value: "France", label: "France", flag: "🇫🇷", dial: "+33", iso2: "fr" },
  { value: "Gabon", label: "Gabon", flag: "🇬🇦", dial: "+241", iso2: "ga" },
  { value: "Gambia", label: "Gambia", flag: "🇬🇲", dial: "+220", iso2: "gm" },
  { value: "Georgia", label: "Georgia", flag: "🇬🇪", dial: "+995", iso2: "ge" },
  { value: "Germany", label: "Germany", flag: "🇩🇪", dial: "+49", iso2: "de" },
  { value: "Ghana", label: "Ghana", flag: "🇬🇭", dial: "+233", iso2: "gh" },
  { value: "Greece", label: "Greece", flag: "🇬🇷", dial: "+30", iso2: "gr" },
  { value: "Grenada", label: "Grenada", flag: "🇬🇩", dial: "+1473", iso2: "gd" },
  { value: "Guatemala", label: "Guatemala", flag: "🇬🇹", dial: "+502", iso2: "gt" },
  { value: "Guinea", label: "Guinea", flag: "🇬🇳", dial: "+224", iso2: "gn" },
  { value: "Guinea-Bissau", label: "Guinea-Bissau", flag: "🇬🇼", dial: "+245", iso2: "gw" },
  { value: "Guyana", label: "Guyana", flag: "🇬🇾", dial: "+592", iso2: "gy" },
  { value: "Haiti", label: "Haiti", flag: "🇭🇹", dial: "+509", iso2: "ht" },
  { value: "Honduras", label: "Honduras", flag: "🇭🇳", dial: "+504", iso2: "hn" },
  { value: "Hong Kong", label: "Hong Kong", flag: "🇭🇰", dial: "+852", iso2: "hk" },
  { value: "Hungary", label: "Hungary", flag: "🇭🇺", dial: "+36", iso2: "hu" },
  { value: "Iceland", label: "Iceland", flag: "🇮🇸", dial: "+354", iso2: "is" },
  { value: "Indonesia", label: "Indonesia", flag: "🇮🇩", dial: "+62", iso2: "id" },
  { value: "Iran", label: "Iran", flag: "🇮🇷", dial: "+98", iso2: "ir" },
  { value: "Iraq", label: "Iraq", flag: "🇮🇶", dial: "+964", iso2: "iq" },
  { value: "Ireland", label: "Ireland", flag: "🇮🇪", dial: "+353", iso2: "ie" },
  { value: "Israel", label: "Israel", flag: "🇮🇱", dial: "+972", iso2: "il" },
  { value: "Italy", label: "Italy", flag: "🇮🇹", dial: "+39", iso2: "it" },
  { value: "Jamaica", label: "Jamaica", flag: "🇯🇲", dial: "+1876", iso2: "jm" },
  { value: "Japan", label: "Japan", flag: "🇯🇵", dial: "+81", iso2: "jp" },
  { value: "Jordan", label: "Jordan", flag: "🇯🇴", dial: "+962", iso2: "jo" },
  { value: "Kazakhstan", label: "Kazakhstan", flag: "🇰🇿", dial: "+7", iso2: "kz" },
  { value: "Kenya", label: "Kenya", flag: "🇰🇪", dial: "+254", iso2: "ke" },
  { value: "Kuwait", label: "Kuwait", flag: "🇰🇼", dial: "+965", iso2: "kw" },
  { value: "Kyrgyzstan", label: "Kyrgyzstan", flag: "🇰🇬", dial: "+996", iso2: "kg" },
  { value: "Laos", label: "Laos", flag: "🇱🇦", dial: "+856", iso2: "la" },
  { value: "Latvia", label: "Latvia", flag: "🇱🇻", dial: "+371", iso2: "lv" },
  { value: "Lebanon", label: "Lebanon", flag: "🇱🇧", dial: "+961", iso2: "lb" },
  { value: "Lesotho", label: "Lesotho", flag: "🇱🇸", dial: "+266", iso2: "ls" },
  { value: "Liberia", label: "Liberia", flag: "🇱🇷", dial: "+231", iso2: "lr" },
  { value: "Libya", label: "Libya", flag: "🇱🇾", dial: "+218", iso2: "ly" },
  { value: "Liechtenstein", label: "Liechtenstein", flag: "🇱🇮", dial: "+423", iso2: "li" },
  { value: "Lithuania", label: "Lithuania", flag: "🇱🇹", dial: "+370", iso2: "lt" },
  { value: "Luxembourg", label: "Luxembourg", flag: "🇱🇺", dial: "+352", iso2: "lu" },
  { value: "Macau", label: "Macau", flag: "🇲🇴", dial: "+853", iso2: "mo" },
  { value: "Madagascar", label: "Madagascar", flag: "🇲🇬", dial: "+261", iso2: "mg" },
  { value: "Malawi", label: "Malawi", flag: "🇲🇼", dial: "+265", iso2: "mw" },
  { value: "Malaysia", label: "Malaysia", flag: "🇲🇾", dial: "+60", iso2: "my" },
  { value: "Maldives", label: "Maldives", flag: "🇲🇻", dial: "+960", iso2: "mv" },
  { value: "Mali", label: "Mali", flag: "🇲🇱", dial: "+223", iso2: "ml" },
  { value: "Malta", label: "Malta", flag: "🇲🇹", dial: "+356", iso2: "mt" },
  { value: "Mauritania", label: "Mauritania", flag: "🇲🇷", dial: "+222", iso2: "mr" },
  { value: "Mauritius", label: "Mauritius", flag: "🇲🇺", dial: "+230", iso2: "mu" },
  { value: "Mexico", label: "Mexico", flag: "🇲🇽", dial: "+52", iso2: "mx" },
  { value: "Moldova", label: "Moldova", flag: "🇲🇩", dial: "+373", iso2: "md" },
  { value: "Monaco", label: "Monaco", flag: "🇲🇨", dial: "+377", iso2: "mc" },
  { value: "Mongolia", label: "Mongolia", flag: "🇲🇳", dial: "+976", iso2: "mn" },
  { value: "Montenegro", label: "Montenegro", flag: "🇲🇪", dial: "+382", iso2: "me" },
  { value: "Morocco", label: "Morocco", flag: "🇲🇦", dial: "+212", iso2: "ma" },
  { value: "Mozambique", label: "Mozambique", flag: "🇲🇿", dial: "+258", iso2: "mz" },
  { value: "Myanmar", label: "Myanmar", flag: "🇲🇲", dial: "+95", iso2: "mm" },
  { value: "Namibia", label: "Namibia", flag: "🇳🇦", dial: "+264", iso2: "na" },
  { value: "Nepal", label: "Nepal", flag: "🇳🇵", dial: "+977", iso2: "np" },
  { value: "Netherlands", label: "Netherlands", flag: "🇳🇱", dial: "+31", iso2: "nl" },
  { value: "New Zealand", label: "New Zealand", flag: "🇳🇿", dial: "+64", iso2: "nz" },
  { value: "Nicaragua", label: "Nicaragua", flag: "🇳🇮", dial: "+505", iso2: "ni" },
  { value: "Niger", label: "Niger", flag: "🇳🇪", dial: "+227", iso2: "ne" },
  { value: "Nigeria", label: "Nigeria", flag: "🇳🇬", dial: "+234", iso2: "ng" },
  { value: "North Macedonia", label: "North Macedonia", flag: "🇲🇰", dial: "+389", iso2: "mk" },
  { value: "Norway", label: "Norway", flag: "🇳🇴", dial: "+47", iso2: "no" },
  { value: "Oman", label: "Oman", flag: "🇴🇲", dial: "+968", iso2: "om" },
  { value: "Pakistan", label: "Pakistan", flag: "🇵🇰", dial: "+92", iso2: "pk" },
  { value: "Palestine", label: "Palestine", flag: "🇵🇸", dial: "+970", iso2: "ps" },
  { value: "Panama", label: "Panama", flag: "🇵🇦", dial: "+507", iso2: "pa" },
  { value: "Papua New Guinea", label: "Papua New Guinea", flag: "🇵🇬", dial: "+675", iso2: "pg" },
  { value: "Paraguay", label: "Paraguay", flag: "🇵🇾", dial: "+595", iso2: "py" },
  { value: "Peru", label: "Peru", flag: "🇵🇪", dial: "+51", iso2: "pe" },
  { value: "Philippines", label: "Philippines", flag: "🇵🇭", dial: "+63", iso2: "ph" },
  { value: "Poland", label: "Poland", flag: "🇵🇱", dial: "+48", iso2: "pl" },
  { value: "Portugal", label: "Portugal", flag: "🇵🇹", dial: "+351", iso2: "pt" },
  { value: "Qatar", label: "Qatar", flag: "🇶🇦", dial: "+974", iso2: "qa" },
  { value: "Romania", label: "Romania", flag: "🇷🇴", dial: "+40", iso2: "ro" },
  { value: "Russia", label: "Russia", flag: "🇷🇺", dial: "+7", iso2: "ru" },
  { value: "Rwanda", label: "Rwanda", flag: "🇷🇼", dial: "+250", iso2: "rw" },
  { value: "Saudi Arabia", label: "Saudi Arabia", flag: "🇸🇦", dial: "+966", iso2: "sa" },
  { value: "Senegal", label: "Senegal", flag: "🇸🇳", dial: "+221", iso2: "sn" },
  { value: "Serbia", label: "Serbia", flag: "🇷🇸", dial: "+381", iso2: "rs" },
  { value: "Seychelles", label: "Seychelles", flag: "🇸🇨", dial: "+248", iso2: "sc" },
  { value: "Sierra Leone", label: "Sierra Leone", flag: "🇸🇱", dial: "+232", iso2: "sl" },
  { value: "Slovakia", label: "Slovakia", flag: "🇸🇰", dial: "+421", iso2: "sk" },
  { value: "Slovenia", label: "Slovenia", flag: "🇸🇮", dial: "+386", iso2: "si" },
  { value: "South Africa", label: "South Africa", flag: "🇿🇦", dial: "+27", iso2: "za" },
  { value: "South Korea", label: "South Korea", flag: "🇰🇷", dial: "+82", iso2: "kr" },
  { value: "Spain", label: "Spain", flag: "🇪🇸", dial: "+34", iso2: "es" },
  { value: "Sri Lanka", label: "Sri Lanka", flag: "🇱🇰", dial: "+94", iso2: "lk" },
  { value: "Sudan", label: "Sudan", flag: "🇸🇩", dial: "+249", iso2: "sd" },
  { value: "Suriname", label: "Suriname", flag: "🇸🇷", dial: "+597", iso2: "sr" },
  { value: "Sweden", label: "Sweden", flag: "🇸🇪", dial: "+46", iso2: "se" },
  { value: "Switzerland", label: "Switzerland", flag: "🇨🇭", dial: "+41", iso2: "ch" },
  { value: "Syria", label: "Syria", flag: "🇸🇾", dial: "+963", iso2: "sy" },
  { value: "Taiwan", label: "Taiwan", flag: "🇹🇼", dial: "+886", iso2: "tw" },
  { value: "Tajikistan", label: "Tajikistan", flag: "🇹🇯", dial: "+992", iso2: "tj" },
  { value: "Tanzania", label: "Tanzania", flag: "🇹🇿", dial: "+255", iso2: "tz" },
  { value: "Thailand", label: "Thailand", flag: "🇹🇭", dial: "+66", iso2: "th" },
  { value: "Togo", label: "Togo", flag: "🇹🇬", dial: "+228", iso2: "tg" },
  { value: "Trinidad and Tobago", label: "Trinidad and Tobago", flag: "🇹🇹", dial: "+1868", iso2: "tt" },
  { value: "Tunisia", label: "Tunisia", flag: "🇹🇳", dial: "+216", iso2: "tn" },
  { value: "Turkey", label: "Turkey", flag: "🇹🇷", dial: "+90", iso2: "tr" },
  { value: "Turkmenistan", label: "Turkmenistan", flag: "🇹🇲", dial: "+993", iso2: "tm" },
  { value: "Uganda", label: "Uganda", flag: "🇺🇬", dial: "+256", iso2: "ug" },
  { value: "Ukraine", label: "Ukraine", flag: "🇺🇦", dial: "+380", iso2: "ua" },
  { value: "Uruguay", label: "Uruguay", flag: "🇺🇾", dial: "+598", iso2: "uy" },
  { value: "Uzbekistan", label: "Uzbekistan", flag: "🇺🇿", dial: "+998", iso2: "uz" },
  { value: "Venezuela", label: "Venezuela", flag: "🇻🇪", dial: "+58", iso2: "ve" },
  { value: "Vietnam", label: "Vietnam", flag: "🇻🇳", dial: "+84", iso2: "vn" },
  { value: "Yemen", label: "Yemen", flag: "🇾🇪", dial: "+967", iso2: "ye" },
  { value: "Zambia", label: "Zambia", flag: "🇿🇲", dial: "+260", iso2: "zm" },
  { value: "Zimbabwe", label: "Zimbabwe", flag: "🇿🇼", dial: "+263", iso2: "zw" },
  { value: "Other", label: "Other Country", flag: "🌍", dial: "", iso2: "" },
];
import phoneIcon from "../../../public/images/phone-call.png";
import emailIcon from "../../../public/images/email.png";
import bankrupty from "../../../public/images/bankruptcy.png";
import bank from "../../../public/images/bank.png";
import growth from "../../../public/images/growth.png";

// Counter Component
const Counter: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = Math.ceil(target / (duration / 50));

    const counterInterval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counterInterval);
      } else {
        setCount(start);
      }
    }, 50);

    return () => clearInterval(counterInterval);
  }, [target]);

  return <>{count.toLocaleString()}{suffix}</>;
};


export default function NRISamadhan() {
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});

  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await fetch("https://apicms.clearclaim.in/api/testimonials");
        if (res.ok) {
          const data = await res.json();
          const mappedReviews = data.map((item: any) => ({
            name: item.name || item.fullName || "Anonymous",
            date: item.date ? new Date(item.date).toLocaleDateString() : "Recent",
            stars: item.rating || 5,
            content: item.testimonial || item.testimonialText || "",
            platform: "Google",
            image: item.image
          }));
          setReviews(mappedReviews);
        }
      } catch (err) {
        console.error("Failed to fetch testimonials", err);
      }
    }
    fetchTestimonials();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const heroFormRef = useRef<HTMLFormElement>(null);
  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [options, setOptions] = useState<{ type_of_unclaimed_investments?: string[]; preferred_callback_time?: string[] } | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const PHONE_MIN_LENGTH = 7;
  const PHONE_MAX_LENGTH = 13;

  // Toggle function
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(e.target as Node)) {
        setCountryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    fetch(`${API_BASE}/api/inquiries/options`)
      .then((res) => res.ok ? res.json() : null)
      .then((data) => data && setOptions(data))
      .catch(() => { });
  }, []);

  const faqData = [
    {
      question: "What types of unclaimed investments can ClearClaim help NRIs recover?",
      answer: "ClearClaim assists NRIs in recovering a wide range of unclaimed investments in India, including shares transferred to IEPF, unclaimed mutual funds, matured insurance policies, old provident fund balances, unclaimed bank deposits (including fixed deposits and savings accounts), and outstanding debtor payments. Our team handles the entire documentation and follow-up process remotely.",
    },
    {
      question: "Do I need to visit India to recover my unclaimed investments?",
      answer: "No, you do not need to travel to India at all. ClearClaim's entire recovery process is managed remotely and digitally. We handle all paperwork, liaison with authorities such as IEPF, registrars, banks, and insurance companies on your behalf. You simply need to provide the required documents online, and our team takes care of the rest from India.",
    },
    {
      question: "How long does the NRI investment recovery process take?",
      answer: "The timeline varies depending on the type of investment and the complexity of the case. Typically, share recovery from IEPF takes 3–6 months, mutual fund and insurance claim recoveries may take 4–8 weeks, and bank deposit recoveries depend on the institution. During your free consultation, we provide an estimated timeline specific to your case and keep you updated at every stage.",
    },
    {
      question: "What documents do NRIs need to provide for recovery?",
      answer: "The documents required vary by case but generally include a valid passport, PAN card, Aadhaar card (if available), proof of investment (old share certificates, policy documents, bank statements), and an NRI address proof. Our team guides you through the exact requirements for your specific case during the initial consultation so there is no confusion.",
    },
    {
      question: "Is my personal and financial information secure with ClearClaim?",
      answer: "Absolutely. Data security and client confidentiality are our top priorities. All documents and personal information shared with ClearClaim are handled with strict confidentiality and secured using industry-standard encryption. We follow rigorous compliance protocols and never share your information with any unauthorized third parties.",
    },
    {
      question: "How does ClearClaim charge for NRI recovery services?",
      answer: "ClearClaim offers a free initial consultation and case evaluation. Our fee structure is transparent and typically success-based, meaning you pay only when your investments are successfully recovered. The exact fees depend on the type and value of the investment. We discuss all charges upfront during the consultation so there are no surprises.",
    },
  ];


  const renderStars = (count: number, isActive: boolean) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < count ? (isActive ? "text-white" : "text-yellow-400") : "opacity-30"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </span>
        ))}
      </div>
    );
  };

  const toggleReadMore = (index: number) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const submitInquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = heroFormRef.current;
    if (!form || formSubmitting) return;

    const first = (form.querySelector('[name="first_name"]') as HTMLInputElement)?.value?.trim() ?? "";
    const last = (form.querySelector('[name="last_name"]') as HTMLInputElement)?.value?.trim() ?? "";
    const phoneRaw = (form.querySelector('[name="phone"]') as HTMLInputElement)?.value?.replace(/\D/g, "") ?? "";
    const phoneCountryCode = (form.querySelector('[name="phone_country_code"]') as HTMLSelectElement)?.value ?? "+91";
    const email = (form.querySelector('[name="email"]') as HTMLInputElement)?.value?.trim() ?? "";
    const country = (form.querySelector('[name="country"]') as HTMLInputElement | HTMLSelectElement)?.value ?? "";
    const typeOfInvestment = (form.querySelector('[name="type_of_unclaimed_investments"]') as HTMLSelectElement)?.value ?? "";
    const callbackTime = (form.querySelector('[name="preferred_callback_time"]') as HTMLSelectElement)?.value ?? "";

    setPhoneError("");
    if (!phoneRaw || phoneRaw.length < PHONE_MIN_LENGTH) {
      setPhoneError(`Please enter at least ${PHONE_MIN_LENGTH} digits`);
      return;
    }
    if (phoneRaw.length > PHONE_MAX_LENGTH) {
      setPhoneError(`Phone number cannot exceed ${PHONE_MAX_LENGTH} digits`);
      return;
    }
    if (!/^\d+$/.test(phoneRaw)) {
      setPhoneError("Phone number must contain only digits");
      return;
    }

    const fullPhone = phoneCountryCode && phoneRaw ? `${phoneCountryCode}${phoneRaw}` : phoneRaw ? `+${phoneRaw}` : "";

    const payload = {
      name: `${first} ${last}`.trim(),
      country_of_residence: country,
      whatsapp_number: fullPhone,
      email,
      type_of_unclaimed_investments: typeOfInvestment,
      preferred_callback_time: callbackTime,
    };

    setFormSubmitting(true);
    fetch(`${API_BASE}/api/inquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText || "Request failed");
        return res.json();
      })
      .then(() => {
        setToastMessage("Thank you for your response. Our representative will contact you shortly.");
        setShowModal(true);
        form.reset();
        setSelectedCountry("");
        setPhoneError("");
      })
      .catch(() => {
        setToastMessage("Failed to send the form. Please try again or contact us at +91 9156701900 / +91 9970651900 or sales@clearclaim.in.");
        setShowModal(true);
      })
      .finally(() => setFormSubmitting(false));
  };

  return (
    <>
      {/* Modal Popup for Contact Form */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 animate-in fade-in duration-300">
          <div className="bg-white/95 p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center max-w-md mx-4 border border-white/20 transform scale-100 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#00BE5D] to-[#008C44]"></div>
            <div className="w-16 h-16 mx-auto bg-[#e6f7ed] rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#00BE5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-extrabold text-[#1a3a1f] mb-3 tracking-tight">Success!</h2>
            <p className="text-gray-600 text-base mb-8 leading-relaxed font-medium">{toastMessage}</p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full px-6 py-3.5 bg-gradient-to-r from-[#00BE5D] to-[#008C44] text-white rounded-xl font-bold tracking-wide hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Okay, Thanks!
            </button>
          </div>
        </div>
      )}

      <div className="bg-white text-gray-800">
        {/* ================= HERO SECTION ================= */}
        <section className="relative bg-[#041a0f] bg-gradient-to-br from-[#020d08] via-[#052616] to-[#010a05] flex items-start justify-center px-4 py-10 sm:py-16 sm:px-6 lg:px-8 overflow-hidden">

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
          </div>

          {/* Premium Tech Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
            backgroundImage: `linear-gradient(to right, #22c55e 1px, transparent 1px), linear-gradient(to bottom, #22c55e 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />

          {/* Floating Light Specks */}
          <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-white rounded-full opacity-40 blur-sm animate-pulse pointer-events-none"></div>
          <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-emerald-400 rounded-full opacity-30 blur-md animate-pulse [animation-delay:1s] pointer-events-none"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-0 w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* LEFT CONTENT */}
              <div className="animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:0ms]">

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white tracking-tight leading-tight">
                  <span className="block">NRI Share</span>
                  <span className="block text-[#00BE5D] bg-clip-text">Recovery Services</span>
                </h1>

                <p className="text-sm sm:text-base text-white/90 mb-6 font-medium max-w-xl">
                  Reclaim Your Unclaimed Investments in India: <br />
                  <span className="text-white">Remotely, Securely, and Legally</span>
                </p>

                <p className="text-white/80 mb-8 text-base">
                  Indias trusted investment recovery company helping NRIs recover stuck financial investments without setting foot in India
                </p>

                {/* STATS */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4">
                  <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-4 rounded-lg border border-white/20">
                    <div className="text-xl sm:text-2xl font-bold text-white">
                      <Counter target={150} suffix="+ Cr" />
                    </div>
                    <div className="text-white/80 text-[10px] sm:text-sm leading-tight">Shares Recovered</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-4 rounded-lg border border-white/20">
                    <div className="text-xl sm:text-2xl font-bold text-white">
                      <Counter target={1250} suffix="+" />
                    </div>
                    <div className="text-white/80 text-[10px] sm:text-sm leading-tight">Clients Assisted</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-4 rounded-lg border border-white/20">
                    <div className="text-xl sm:text-2xl font-bold text-white">
                      <Counter target={2500} suffix="+" />
                    </div>
                    <div className="text-white/80 text-[10px] sm:text-sm leading-tight">Claims Settled</div>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-3 mt-5 text-sm">
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                    <span className="text-white/90">✓ Dedicated Claim Coordinator</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                    <span className="text-white/90">✓ 25+ Expert Team</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                    <span className="text-white/90">✓ 400+ Companies Worked</span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row gap-4 mt-5">
                  <a
                    href="tel:+919156701900"
                    className="bg-white text-[#00BE5D] px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition flex items-center justify-center gap-2"
                  >
                    <Image src={phoneIcon} alt="Phone" width={20} height={20} />
                    +91 9156-70-1900
                  </a>
                  <a
                    href="mailto:sales@clearclaim.in"
                    className="bg-[#00BE5D] border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#008C44] hover:border-[#008C44] transition flex items-center justify-center gap-2"
                  >
                    <Image
                      src={emailIcon}
                      alt="Email"
                      width={20}
                      height={20}
                      className="invert brightness-0"
                    />
                    sales@clearclaim.in
                  </a>
                </div>
              </div>

              {/* RIGHT FORM - NRI Get Started */}
              <div id="form" className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.15] rounded-2xl p-5 sm:p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:120ms]">
                <h3 className="text-lg sm:text-2xl font-bold text-white text-center tracking-wide uppercase mb-5 sm:mb-6">
                  Start Your Recovery Journey
                </h3>

                <form
                  ref={heroFormRef}
                  onSubmit={submitInquiry}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="hero_first_name" className="block text-[11px] font-bold text-[#00BE5D] uppercase tracking-wider mb-1.5">
                        First Name
                      </label>
                      <input
                        id="hero_first_name"
                        name="first_name"
                        type="text"
                        placeholder="Enter First Name"
                        className="w-full bg-white/[0.92] border border-transparent focus:border-emerald-400 focus:bg-white rounded-lg px-4 py-2.5 text-gray-900 text-sm outline-none transition-all shadow-inner placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="hero_last_name" className="block text-[11px] font-bold text-[#00BE5D] uppercase tracking-wider mb-1.5">
                        Last Name
                      </label>
                      <input
                        id="hero_last_name"
                        name="last_name"
                        type="text"
                        placeholder="Enter Last Name"
                        className="w-full bg-white/[0.92] border border-transparent focus:border-emerald-400 focus:bg-white rounded-lg px-4 py-2.5 text-gray-900 text-sm outline-none transition-all shadow-inner placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="hero_email" className="block text-[11px] font-bold text-[#00BE5D] uppercase tracking-wider mb-1.5">
                      Email
                    </label>
                    <input
                      id="hero_email"
                      name="email"
                      type="email"
                      placeholder="Enter Email"
                      className="w-full bg-white/[0.92] border border-transparent focus:border-emerald-400 focus:bg-white rounded-lg px-4 py-2.5 text-gray-900 text-sm outline-none transition-all shadow-inner placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="hero_phone" className="block text-[11px] font-bold text-[#00BE5D] uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <div className="flex gap-2">
                      <div className="flex-shrink-0">
                        <SearchablePhoneCode
                          id="hero_phone_code"
                          name="phone_country_code"
                          options={COUNTRY_OPTIONS}
                          className="h-full bg-white/[0.85] rounded-lg px-2 py-2.5 text-gray-800 text-[11px] font-semibold outline-none border border-transparent shadow-inner cursor-pointer"
                        />
                      </div>
                      <input
                        id="hero_phone"
                        name="phone"
                        type="tel"
                        placeholder="e.g. 9876543210"
                        minLength={PHONE_MIN_LENGTH}
                        maxLength={PHONE_MAX_LENGTH}
                        pattern="[0-9]{6,15}"
                        onInput={(e) => {
                          const target = e.target as HTMLInputElement;
                          target.value = target.value.replace(/\D/g, "");
                          if (phoneError) setPhoneError("");
                        }}
                        className={`w-full bg-white/[0.92] border text-gray-900 placeholder:text-gray-400 rounded-lg px-4 py-2.5 text-sm outline-none transition-all shadow-inner ${phoneError ? "border-red-400 focus:border-red-400" : "border-transparent focus:border-emerald-400"}`}
                        required
                        title={`Enter ${PHONE_MIN_LENGTH}–${PHONE_MAX_LENGTH} digits without country code`}
                        aria-invalid={!!phoneError}
                        aria-describedby={phoneError ? "hero_phone_error" : undefined}
                      />
                    </div>
                    {phoneError && (
                      <p id="hero_phone_error" className="text-red-400 text-[11px] mt-1" role="alert">
                        {phoneError}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="hero_country" className="block text-[11px] font-bold text-[#00BE5D] uppercase tracking-wider mb-1.5">
                      Current Country
                    </label>
                    <input type="hidden" name="country" value={selectedCountry} required />
                    <CountrySelect
                      id="hero_country"
                      options={COUNTRY_OPTIONS}
                      value={selectedCountry}
                      onChange={setSelectedCountry}
                      className="w-full bg-white/[0.92] border border-transparent focus:border-emerald-400 rounded-lg px-4 py-2.5 text-sm outline-none transition-all shadow-inner"
                    />
                  </div>

                  <div>
                    <label htmlFor="hero_investment_type" className="block text-[11px] font-bold text-[#00BE5D] uppercase tracking-wider mb-1.5">
                      Type of Unclaimed Investment
                    </label>
                    <div className="relative">
                      <select
                        id="hero_investment_type"
                        name="type_of_unclaimed_investments"
                        className="w-full bg-white/[0.92] border border-transparent focus:border-emerald-400 rounded-lg px-4 py-2.5 pr-10 text-gray-900 text-sm outline-none transition-all shadow-inner appearance-none cursor-pointer"
                        required
                      >
                        <option value="">Select type</option>
                        {(options?.type_of_unclaimed_investments ?? INVESTMENT_TYPES).map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="hero_callback_time" className="block text-[11px] font-bold text-[#00BE5D] uppercase tracking-wider mb-1.5">
                      Preferred Callback Time (IST)
                    </label>
                    <div className="relative">
                      <select
                        id="hero_callback_time"
                        name="preferred_callback_time"
                        className="w-full bg-white/[0.92] border border-transparent focus:border-emerald-400 rounded-lg px-4 py-2.5 pr-10 text-gray-900 text-sm outline-none transition-all shadow-inner appearance-none cursor-pointer"
                        required
                      >
                        <option value="">Select time slot</option>
                        {(options?.preferred_callback_time ?? CALLBACK_TIMES).map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="hero_agree"
                      name="agree"
                      className="mt-0.5 w-4 h-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-500 bg-white/20 accent-emerald-500 cursor-pointer"
                      required
                    />
                    <label
                      htmlFor="hero_agree"
                      className="text-sm text-white leading-tight cursor-pointer"
                    >
                      Yes, I agree with the{" "}
                      <Link
                        href="/privacy-policy"
                        className="text-[#00BE5D] hover:underline"
                      >
                        privacy policy
                      </Link>
                    </label>
                  </div>

                  <div className="pt-2 items-center justify-center flex">
                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="group relative overflow-hidden bg-[#00BE5D] hover:bg-[#00b569] active:bg-[#00a35e] text-white font-extrabold py-3.5 px-4 rounded-full transition-all duration-200 shadow-lg shadow-emerald-950/50 tracking-wider text-xs cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <div
                        className="absolute inset-0 -translate-x-[150%] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] animate-shine"
                        style={{ animationDuration: "3s" }}
                      />
                      <span className="relative z-10">
                        {formSubmitting ? "Processing..." : "Get Free Consulting"}
                      </span>
                    </button>
                  </div>
                </form>

                <div className="mt-6 text-center text-sm text-gray-400">
                  <p>Your information is secure & confidential</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{`
          @keyframes shine {
            0% { transform: translateX(-150%) skewX(-20deg); }
            20% { transform: translateX(200%) skewX(-20deg); }
            100% { transform: translateX(200%) skewX(-20deg); }
          }
          .animate-shine {
            animation: shine 3s infinite;
          }
        `}</style>

     

        {/* ================= NRI SERVICES INTRO ================= */}
        <section className="py-16 px-4 bg-white animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:80ms]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:120ms]">
                <div className="mb-4">
                  <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-[#283655] tracking-tight">
                    NRI Services – Recover Your <span className="text-[#00BE5D]">Financial Assets</span> from India
                  </h2>
                  <div className="h-1.5 w-20 bg-gradient-to-r from-[#00BE5D] to-[#00BE5D]/40 mt-6 rounded-full opacity-40 mb-4"></div>
                </div>
                <p className="text-base text-[#00BE5D] font-semibold mb-6">
                  Reclaim What&apos;s Rightfully Yours, Even While Living Abroad
                </p>
                <p className="text-base text-gray-600 mb-6">
                  Living overseas shouldn&apos;t mean losing access to your hard-earned investments in India. ClearClaim assists Non-Resident Indians (NRIs) in recovering unclaimed financial assets like shares, dividends, bank accounts, mutual funds, and much more without needing you to return to India.
                </p>
                <p className="text-base text-gray-600">
                  We already support NRI clients living in the USA, UAE, UK, Canada, Australia, and Singapore, handling the entire recovery process from start to finish remotely, from paperwork to final credit. You stay updated, and we handle the hassles.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden lg:h-full animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:200ms]">
                <Image
                  src={nriabout}
                  alt="NRI discussing financial matters"
                  className="w-full h-auto lg:absolute lg:inset-0 lg:w-full lg:h-full lg:object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-semibold">Global NRI Support</p>
                  <p>Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </section>

           {/* ================= COUNTER SECTION ================= */}
        <section className="py-16 px-4 bg-[#1a3a1f] animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:0ms]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
              {/* 5+ Years */}
              <div className="text-center bg-white px-4 py-6 border-b-4 border-[#00BE5D] rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:0ms]">
                <h3 className="text-[#1a3a1f] text-4xl font-bold mt-4">
                  <Counter target={5} />+
                </h3>
                <p className="text-[#1a3a1f] font-semibold mt-2">Years Experience</p>
              </div>

              {/* ₹600+ Crores */}
              <div className="text-center bg-white px-4 py-6 border-b-4 border-[#00BE5D] rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:80ms]">
                <h3 className="text-[#1a3a1f] text-4xl font-bold mt-4">
                  ₹<Counter target={150} />+ Cr
                </h3>
                <p className="text-[#1a3a1f] font-semibold mt-2">Shares Recovered</p>
              </div>

              {/* 40,000+ Clients */}
              <div className="text-center bg-white px-4 py-6 border-b-4 border-[#00BE5D] rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:160ms]">
                <h3 className="text-[#1a3a1f] text-4xl font-bold mt-4">
                  <Counter target={20000} />+
                </h3>
                <p className="text-[#1a3a1f] font-semibold mt-2">Client Interactions</p>
              </div>

              {/* 10+ Countries */}
              <div className="text-center bg-white px-4 py-6 border-b-4 border-[#00BE5D] rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:240ms]">
                <h3 className="text-[#1a3a1f] text-4xl font-bold mt-4">
                  <Counter target={10} />+
                </h3>
                <p className="text-[#1a3a1f] font-semibold mt-2 text-base">Countries Served</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHY NRIs NEED ASSET RECOVERY ================= */}
        <section className="py-16 px-4 bg-gradient-to-r from-[#f0f9ff] to-[#e6f7ed] animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:160ms]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-4">
              <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-[#283655] tracking-tight">
                Why NRIs Often Need <span className="text-[#00BE5D]">Asset Recovery Services</span>
              </h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-[#00BE5D] to-[#00BE5D]/40 mx-auto mt-6 rounded-full opacity-40 mb-4"></div>
            </div>
            <p className="text-base text-gray-600 text-center mb-6 max-w-3xl mx-auto">
              When individuals relocate to other countries, their financial investments in India are left unattended. Over time, these investments can become dormant or unclaimed due to outdated contact information, lack of follow-through, or changes in regulations.
            </p>
            <p className="text-lg font-semibold text-gray-800 mb-4 text-center">Typical unclaimed assets include:</p>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#00BE5D] animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:200ms]">
                <div className="w-12 h-12 bg-[#00BE5D]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl"><Image src={growth} alt="Shares" width={24} height={24} /></span>
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-3">Unclaimed Shares & Dividends</h3>
                <p className="text-base text-gray-600">Shares and dividends transferred to government bodies</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#00BE5D] animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:280ms]">
                <div className="w-12 h-12 bg-[#00BE5D]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl"><Image src={bank} alt="Bank" width={24} height={24} /></span>
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-3">Dormant Bank Accounts</h3>
                <p className="text-base text-gray-600">Dormant savings accounts or fixed deposits</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#00BE5D] animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:360ms]">
                <div className="w-12 h-12 bg-[#00BE5D]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl"><Image src={bankrupty} alt="Investments" width={24} height={24} /></span>
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-3">Forgotten Investments</h3>
                <p className="text-gray-600">Mutual fund investments not redeemed; provident fund balances or insurance claims unclaimed</p>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-xl p-8 shadow-lg animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:440ms]">
              <p className="text-base text-gray-600 text-center max-w-3xl mx-auto">
                Without an in-country presence, such assets can remain stranded for years. At ClearClaim, we are experts at tracking down and recovering them on your behalf, ensuring that nothing that belongs to you is left behind.
              </p>
            </div>
          </div>
        </section>

        {/* ================= OUR NRI ASSET RECOVERY SERVICES ================= */}
        <section className="py-16 px-4 bg-white animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:240ms]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-[#283655] tracking-tight">
                Our NRI Asset <span className="text-[#00BE5D]">Recovery Services</span>
              </h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-[#00BE5D] to-[#00BE5D]/40 mx-auto mt-6 rounded-full opacity-40 mb-4"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-[#f0f9ff] to-[#e6f7ed] rounded-xl p-6 border-l-4 border-[#00BE5D] hover:shadow-xl transition-all duration-300 animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:280ms]">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-[#00BE5D] rounded-full flex items-center justify-center text-white text-2xl mb-4">
                    <span className="text-2xl"><Image src={growth} alt="Shares" width={24} height={24} /></span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Unclaimed Shares & Dividends</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">Many NRIs miss out on dividends or share entitlements simply because they moved abroad or didn&apos;t update their records. Our team helps you:</p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#00BE5D] mt-1">✓</span><span>Check whether your shares or dividends are unclaimed</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#00BE5D] mt-1">✓</span><span>Manage the complete IEPF (Investor Education and Protection Fund) claim process</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#00BE5D] mt-1">✓</span><span>Prepare and submit all required forms and supporting documents</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#00BE5D] mt-1">✓</span><span>Coordinate with companies and regulatory authorities until recovery is completed</span></li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#f0f9ff] to-[#e6f7ed] rounded-xl p-6 border-l-4 border-[#00BE5D] hover:shadow-xl transition-all duration-300 animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:380ms]">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-[#00BE5D] rounded-full flex items-center justify-center text-white text-2xl mb-4">
                    <span className="text-2xl"><Image src={bank} alt="Bank" width={24} height={24} /></span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Dormant Bank Accounts & Fixed Deposits</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">Bank accounts with no activity for long periods are often marked dormant. We assist with:</p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#00BE5D] mt-1">✓</span><span>Tracing inactive bank accounts and fixed deposits</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#00BE5D] mt-1">✓</span><span>Filing recovery requests with the respective banks</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#00BE5D] mt-1">✓</span><span>Supporting you through KYC updates and documentation</span></li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#f0f9ff] to-[#e6f7ed] rounded-xl p-6 border-l-4 border-[#00BE5D] hover:shadow-xl transition-all duration-300 animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:480ms]">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-[#00BE5D] rounded-full flex items-center justify-center text-white text-2xl mb-4">
                    <span className="text-2xl"><Image src={bankrupty} alt="Investments" width={24} height={24} /></span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Mutual Funds, Provident Funds & Insurance Claims</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">If mutual fund units were never redeemed, EPF accounts were forgotten, or insurance policies matured without being claimed, we:</p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#00BE5D] mt-1">✓</span><span>Verify your holdings with fund houses and institutions</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#00BE5D] mt-1">✓</span><span>Help complete and submit complex claim documentation</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#00BE5D] mt-1">✓</span><span>Follow up consistently to speed up the recovery process</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================= HOW OUR NRI RECOVERY PROCESS WORKS ================= */}
        <section className="py-16 px-4 bg-gradient-to-r from-[#1a3a1f] to-[#2d5a34] text-white animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:320ms]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                How Our NRI <span className="text-[#00BE5D]">Recovery Process</span> Works
              </h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-[#00BE5D] to-[#00BE5D]/40 mx-auto mt-6 rounded-full opacity-40 mb-4"></div>
            </div>

            <div className="grid lg:grid-cols-5 gap-6">
              {[
                {
                  step: "1",
                  title: "Free Case Evaluation",
                  desc: "We begin with a no-obligation assessment to identify potential unclaimed assets linked to your name.",
                  icon: phoneicon
                },
                {
                  step: "2",
                  title: "Asset Tracing & Verification",
                  desc: "Using official databases and company records, our team traces eligible claims across institutions.",
                  icon: "🔍"
                },
                {
                  step: "3",
                  title: "Documentation & Filing",
                  desc: "From IEPF-5 forms to bank and fund house requests, we handle preparation, verification, and submission.",
                  icon: globalnews
                },
                {
                  step: "4",
                  title: "Continuous Follow-Ups",
                  desc: "We stay in touch with authorities and institutions and keep you updated on progress at every stage.",
                  icon: thunder
                },
                {
                  step: "5",
                  title: "Final Credit",
                  desc: "Recovered funds or shares are credited directly to your NRO, NRE, or Demat account, as applicable.",
                  icon: rupees
                }
              ].map((item, stepIndex) => (
                <div key={item.step} className="text-center relative animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: `${stepIndex * 80}ms` }}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 h-full">
                    <div className="w-16 h-16 bg-[#00BE5D] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 overflow-hidden">
                      {typeof item.icon === "string" ? (
                        <span className="text-2xl">{item.icon}</span>
                      ) : (
                        <Image src={item.icon} alt={item.title} width={32} height={32} className="object-contain" />
                      )}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.desc}</p>
                  </div>
                  {item.step !== "5" && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-[#00BE5D]"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:400ms]">
              <p className="text-base">
                ClearClaim manages everything end-to-end, saving you from confusing regulations, paperwork, and long waiting periods.
              </p>
            </div>
          </div>
        </section>

        {/* ================= WHY NRIs TRUST CLEARCLAIM ================= */}
        <section className="py-16 px-4 bg-white animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:400ms]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-[#283655] tracking-tight">
                Why NRIs Trust <span className="text-[#00BE5D]">ClearClaim</span>
              </h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-[#00BE5D] to-[#00BE5D]/40 mx-auto mt-6 rounded-full opacity-40 mb-4"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-[#f0f9ff] to-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:440ms]">
                <div className="w-12 h-12 bg-[#00BE5D]/10 rounded-full flex items-center justify-center text-[#00BE5D] text-xl mb-4">
                  <Image src={recovery} alt="Remote & Fully Online Assistance" width={32} height={32} className="object-contain" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Remote & Fully Online Assistance</h3>
                <p className="text-gray-600 text-sm">No travel to India required. The entire process is managed digitally, no matter where you live.</p>
              </div>

              <div className="bg-gradient-to-br from-[#f0f9ff] to-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:520ms]">
                <div className="w-12 h-12 bg-[#00BE5D]/10 rounded-full flex items-center justify-center text-[#00BE5D] text-xl mb-4">
                  👨‍💼
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Experienced & Compliance-Focused Team</h3>
                <p className="text-gray-600 text-sm">Our specialists understand Indian regulations, IEPF procedures, and recovery timelines in detail.</p>
              </div>

              <div className="bg-gradient-to-br from-[#f0f9ff] to-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:600ms]">
                <div className="w-12 h-12 bg-[#00BE5D]/10 rounded-full flex items-center justify-center text-[#00BE5D] text-xl mb-4">
                  <Image src={phoneicon} alt="Remote & Fully Online Assistance" width={32} height={32} className="object-contain" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Transparent Communication</h3>
                <p className="text-gray-600 text-sm">You receive clear timelines, regular updates, and a dedicated point of contact.</p>
              </div>

              <div className="bg-gradient-to-br from-[#f0f9ff] to-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:680ms]">
                <div className="w-12 h-12 bg-[#00BE5D]/10 rounded-full flex items-center justify-center text-[#00BE5D] text-xl mb-4">
                  <Image src={midnight} alt="Remote & Fully Online Assistance" width={32} height={32} className="object-contain" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Time-Saving & Stress-Free</h3>
                <p className="text-gray-600 text-sm">We simplify a process that is otherwise lengthy and complex, helping you reclaim your assets faster.</p>
              </div>
            </div>

            <div className="mt-12 text-center animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:760ms]">
              <a href="#form" className="inline-block text-white px-6 py-3 rounded-full bg-[#00BE5D] hover:bg-[#00BE5D] font-semibold transition text-base shadow-lg hover:shadow-xl"
              >
                Schedule a Call with Our NRI Expert
              </a>
            </div>
          </div>
        </section>

        {/* ================= FAQs ================= */}
        <section className="py-16 px-4 bg-gradient-to-br from-[#f8fdf9] to-[#e6f7ed] animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:480ms]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-[#283655] tracking-tight">
                Frequently Asked <span className="text-[#00BE5D]">Questions</span>
              </h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-[#00BE5D] to-[#00BE5D]/40 mx-auto mt-6 rounded-full opacity-40 mb-4"></div>
            </div>

            <div className="space-y-4 text-base">
              {/* Mapping through the dynamic FAQ array */}
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards]"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {/* Header section with cursor-pointer and onClick handler */}
                  <div
                    className="w-full text-left p-4 flex justify-between items-center cursor-pointer select-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center gap-4 pr-4">
                      <div className="w-10 h-10 rounded-full bg-[#00BE5D]/10 text-[#00BE5D] flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <h3 className="font-bold text-base text-gray-800 flex-1">
                        {faq.question}
                      </h3>
                    </div>
                    {/* Open/Close Visual Indicator */}
                    <div className="text-[#00BE5D] text-2xl font-light transition-transform duration-300">
                      {openIndex === index ? "−" : "+"}
                    </div>
                  </div>

                  {/* Expandable Body Section */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${openIndex === index
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                      } overflow-hidden`}
                  >
                    <div className="p-6 pt-0 border-t border-gray-100">
                      <p className="text-gray-600 mb-4">{faq.answer}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="w-2 h-2 bg-[#00BE5D] rounded-full"></span>
                        <span>NRI Recovery Specialist</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Contact Section */}
            <div className="mt-12 text-center animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:400ms]">
              <p className="text-gray-600 mb-4">Have more questions about NRI recovery?</p>
              <a
                href="tel:+919156701900"
                className="inline-flex items-center bg-[#00BE5D] gap-2 text-white px-6 py-3 text-base rounded-full font-semibold transition shadow-lg hover:bg-[#00a852]"

              >
                <Image
                  src={phoneIcon}
                  alt="Phone"
                  width={20}
                  height={20}
                  className="filter invert brightness-0"
                />
                Call Our NRI Helpline: +91 9156-70-1900
              </a>
            </div>
          </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        {reviews.length > 0 && (
          <section className="py-16 px-4 bg-white animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:560ms]">
            <div className="max-w-7xl mx-auto">
              <div className="text-center">
                <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-[#283655] tracking-tight">
                  Google Reviews That <span className="text-[#00BE5D]">Speak for Themselves</span>
                </h2>
                <div className="h-1.5 w-20 bg-gradient-to-r from-[#00BE5D] to-[#00BE5D]/40 mx-auto mt-6 rounded-full opacity-40 mb-4"></div>
              </div>
              <div className="relative">
                <div className="flex items-center justify-center relative">
                  {/* Left Navigation */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-[-10px] md:left-4 z-20 p-4 bg-white hover:bg-gray-50 rounded-full shadow-xl border border-gray-100 text-gray-500 transition-all active:scale-90"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <div className="w-full overflow-hidden flex justify-center py-10 relative px-4 md:px-20">
                    <div className="flex transition-all duration-700 ease-in-out gap-8 md:gap-12 items-center justify-center">
                      {[-1, 0, 1].map((offset) => {
                        let index = (currentIndex + offset + reviews.length) % reviews.length;
                        const review = reviews[index];
                        const isActive = offset === 0;

                        return (
                          <div
                            key={`${index}-${offset}`}
                            className={`
                              transition-all duration-700 ease-in-out flex-shrink-0 
                              rounded-[2rem] p-7 shadow-xl relative
                              ${isActive
                                ? "bg-[#00BE5D] text-white w-[300px] md:w-[380px] scale-100 md:scale-105 z-10"
                                : "bg-white border-2 border-green-500 text-gray-700 w-[260px] md:w-[320px] scale-90 md:scale-95 z-0 opacity-40 md:opacity-100 hidden md:flex"
                              }
                              flex flex-col min-h-[360px] border border-gray-50/50
                            `}
                          >
                            {/* Top Header: Stars & Date */}
                            <div className="flex justify-between items-start mb-10">
                              {renderStars(review.stars || 5, isActive)}
                              <div className={`text-right text-sm font-medium ${isActive ? "text-white/90" : "text-gray-400"}`}>
                                {review.date}
                              </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                              <p className={`leading-relaxed text-base font-normal ${isActive ? "text-white" : "text-gray-600"}`}>
                                {expandedReviews[index]
                                  ? review.content
                                  : review.content.length > 200
                                    ? `“${review.content.substring(0, 200)}...”`
                                    : `“${review.content}”`
                                }
                                {review.content.length > 200 && (
                                  <button
                                    className={`ml-2 font-semibold border-b border-current py-0 text-sm ${isActive ? "text-white/100" : "text-[#00BE5D]"}`}
                                    onClick={() => toggleReadMore(index)}
                                  >
                                    {expandedReviews[index] ? "Read Less" : "Read More"}
                                  </button>
                                )}
                              </p>
                            </div>

                            {/* Divider */}
                            <div className={`h-px w-full my-8 ${isActive ? "bg-white/20" : "bg-gray-100"}`} />

                            {/* Footer: Name and Status */}
                            <div className="flex items-center gap-4">
                              <div className="flex flex-col min-w-0">
                                <h4 className={`font-bold text-base truncate ${isActive ? "text-white" : "text-[#111827]"}`}>
                                  {review.name}
                                </h4>
                                <div className={`text-xs font-medium ${isActive ? "text-white/80" : "text-gray-400"}`}>
                                  Happy Client
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Navigation */}
                  <button
                    onClick={handleNext}
                    className="absolute right-[-10px] md:right-4 z-20 p-4 bg-white hover:bg-gray-50 rounded-full shadow-xl border border-gray-100 text-gray-500 transition-all active:scale-90"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-8">
                  {reviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`h-2 transition-all duration-300 rounded-full ${currentIndex === i ? "w-8 bg-[#00BE5D]" : "w-2 bg-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================= READY TO RECLAIM CTA ================= */}
        <section className="relative py-16 px-4 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Global Business Background"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a1f]/90 via-[#2d5a34]/80 to-[#00BE5D]/70"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center text-white animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:640ms]">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Ready to Reclaim <span className="text-[#00BE5D]">Your Assets?</span>
              </h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-[#00BE5D] to-[#00BE5D]/40 mx-auto mt-6 rounded-full opacity-40 mb-4"></div>
            </div>
            <p className="text-base text-white/90 mb-8">
              Don&apos;t let your investments remain forgotten. Whether you&apos;re living in the USA, UAE, UK, Canada, Australia, Singapore, or elsewhere, ClearClaim has the expertise to help you recover your Indian financial assets securely and efficiently.
            </p>
            <p className="text-base text-white/90 mb-8">
              Start with a free case evaluation today and find out what you may be entitled to.
            </p>
            <a
              href="#form"
              className="inline-block bg-white text-[#00BE5D] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition text-base shadow-xl hover:shadow-2xl mb-12"
            >
              Start Your Recovery Now
            </a>

            <div className="mt-12 pt-8 border-t border-white/20">
              <h3 className="text-2xl font-semibold mb-6">Helping NRIs Worldwide Reclaim What&apos;s Theirs</h3>
              <p className="text-white/90 mb-6">Confidential. Compliant. Reliable.</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                <a
                  href="tel:+919156701900"
                  className="flex items-center gap-3 text-white hover:text-white/80 font-semibold"
                >
                  <div className="w-10 h-10 rounded-full bg-[#00BE5D] flex items-center justify-center">
                    <Phone size={20} className="text-white" />
                  </div>


                  <div className="text-left">
                    <div className="text-sm text-white/70">Call us at</div>
                    <div>+91 9156-70-1900</div>
                  </div>
                </a>

                <a
                  href="mailto:sales@clearclaim.in"
                  className="flex items-center gap-3 text-white hover:text-white/80 font-semibold"
                >
                  <div className="w-10 h-10 rounded-full bg-[#00BE5D] flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-white/70">Email us at</div>
                    <div>sales@clearclaim.in</div>
                  </div>
                </a>
              </div>

            </div>

            <div className="mt-8 text-base text-white/80">
              <p>
                <strong>Compliance Note:</strong> All services are offered under applicable Indian
                laws. ClearClaim ensures full transparency and legal compliance in every step of the
                recovery.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
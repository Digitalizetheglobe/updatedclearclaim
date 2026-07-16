"use client";

import React, { useState, useRef, useEffect } from "react";
import aiimg from "../../../public/images/AI-img.png";
import Image from "next/image";
import { motion } from "framer-motion";
import tick from "../../../public/images/tick.svg";
import google from '../../../public/images/google.webp';
import SearchablePhoneCode from "@/components/SearchablePhoneCode";
import CountrySelect from "@/components/CountrySelect";
import { ChevronLeft, ChevronRight, Settings, Search, FileSearch, MessageSquare, FileCheck, TrendingUp, Activity } from "lucide-react";
import Link from "next/link";

const API_BASE = "";
const PHONE_MIN_LENGTH = 7;
const PHONE_MAX_LENGTH = 13;

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

const FLAG_IMG_BASE = "https://flagcdn.com/w40";

const COUNTRY_OPTIONS = [
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

const steps = [
  {
    num: "01",
    title: "Find Your Real Worth",
    body: "Know the true market value of your shares with precision and certified expert insight.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
        <circle cx="8.5" cy="8.5" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 13L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 8.5h5M8.5 6v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Know Your Claim Type",
    body: "Understand the exact category and nature of your share claim with complete legal clarity.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="2" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 7h8M6 10.5h5M6 14h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Expert Consultation",
    body: "Exclusive one-on-one guidance from seasoned recovery specialists who know your claim inside out.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
        <circle cx="8" cy="6" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 18c0-3.314 2.686-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Accurate Documentation",
    body: "Meticulous preparation and verification of every document required for a successful claim.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
        <path d="M4 2h9l5 5v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 2v5h5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 12l2.5 2.5 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Shares in Your DEMAT",
    body: "Your recovered shares seamlessly and securely credited directly to your DEMAT account.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
        <rect x="1" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M1 9h18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 13h4M13 13h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Superior Follow-Up",
    body: "Persistent, proactive follow-up at every stage until your claim is fully and finally resolved.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
        <path d="M10 2v4M10 14v4M2 10h4M14 10h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

function RecoveryProcess() {
  const [active, setActive] = useState(0);
  const s = steps[active];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500;1,600&family=Jost:wght@300;400;500&display=swap');

        .rp {
          font-family: 'Jost', sans-serif;
          display: grid;
          grid-template-columns: 45fr 55fr;
          min-height: 620px;
          overflow: hidden;
          background: #0d1f10;
        }

        /* ══ LEFT — very dark green, gradient only as a hint ══ */
        .rp-left {
          background: linear-gradient(160deg, #0d1f10 60%, #1a3a1f 100%);
          padding: 72px 48px 72px 56px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
          border-right: 1px solid rgba(0,190,93,0.1);
        }

        /* single very faint circle — just enough texture */
        .rp-left::before {
          content: '';
          position: absolute;
          width: 380px; height: 380px;
          border-radius: 50%;
          border: 1px solid rgba(0,190,93,0.06);
          top: -100px; right: -120px;
          pointer-events: none;
        }

        .rp-eyebrow {
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #00BE5D;
          margin-bottom: 36px;
          display: flex;
          align-items: center;
          gap: 12px;
          opacity: 0.9;
        }
        .rp-eyebrow::after {
          content: '';
          flex: 1;
          height: 0.5px;
          background: #00BE5D;
          opacity: 0.25;
        }

        .rp-tab {
          all: unset;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 14px 16px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s;
          position: relative;
        }
        .rp-tab:hover { background: rgba(0,190,93,0.05); }
        .rp-tab.active { background: rgba(0,190,93,0.08); }

        .rp-tab-accent {
          position: absolute;
          left: 0; top: 50%;
          transform: translateY(-50%);
          width: 3px;
          border-radius: 0 2px 2px 0;
          background: #00BE5D;
          height: 0;
          transition: height 0.3s cubic-bezier(.22,.68,0,1.2);
        }
        .rp-tab.active .rp-tab-accent { height: 56%; }

        .rp-tab-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          color: rgba(255,255,255,0.22);
          min-width: 22px;
          transition: color 0.2s;
        }
        .rp-tab.active .rp-tab-num { color: #00BE5D; }

        .rp-tab-icon {
          color: rgba(255,255,255,0.22);
          display: flex; flex-shrink: 0;
          transition: color 0.2s;
        }
        .rp-tab.active .rp-tab-icon { color: #00BE5D; }

        .rp-tab-label {
          font-size: 15px;
          font-weight: 400;
          color: rgba(255,255,255,0.55);
          transition: color 0.2s;
          line-height: 1.3;
        }
        .rp-tab.active .rp-tab-label {
          font-weight: 500;
          color: rgba(255,255,255,0.95);
        }

        /* ══ RIGHT — slightly lighter dark, content panel ══ */
        .rp-right {
          background: #111d13;
          padding: 72px 60px 72px 56px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .rp-right::after {
          content: '';
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          border: 1px solid rgba(0,190,93,0.05);
          bottom: -200px; right: -140px;
          pointer-events: none;
        }

        .rp-panel { animation: rp-in 0.34s ease; }
        @keyframes rp-in {
          from { opacity: 0; transform: translateX(18px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* ghost step number */
        .rp-ghost {
          font-family: 'Cormorant Garamond', serif;
          font-size: 160px;
          font-weight: 500;
          line-height: 0.85;
          color: #00BE5D;
          opacity: 0.05;
          margin-bottom: -28px;
          margin-left: -6px;
          letter-spacing: -0.06em;
          user-select: none;
          pointer-events: none;
        }

        /* icon orb */
        .rp-orb {
          width: 56px; height: 56px;
          border-radius: 50%;
          border: 1.5px solid rgba(0,190,93,0.5);
          color: #00BE5D;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 24px;
          flex-shrink: 0;
          background: rgba(0,190,93,0.06);
        }

        .rp-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 600;
          color: #ffffff;
          line-height: 1.08;
          letter-spacing: -0.02em;
          margin: 0 0 18px;
        }

        .rp-body {
          font-size: 17px;
          font-weight: 300;
          color: rgba(255,255,255,0.62);
          line-height: 1.85;
          margin: 0 0 40px;
          max-width: 400px;
        }

        /* nav */
        .rp-nav {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .rp-btn {
          all: unset;
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(0,190,93,0.3);
          display: flex; align-items: center; justify-content: center;
          color: #00BE5D;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          flex-shrink: 0;
        }
        .rp-btn:hover {
          background: #00BE5D;
          color: #0d1f10;
          border-color: #00BE5D;
        }
        .rp-btn:disabled { opacity: 0.18; pointer-events: none; }

        .rp-dots { display: flex; gap: 6px; align-items: center; }
        .rp-dot {
          height: 2px; border-radius: 1px;
          background: rgba(255,255,255,0.15);
          width: 16px;
          transition: width 0.3s, background 0.3s;
        }
        .rp-dot.on { width: 30px; background: #00BE5D; }

        .rp-cta {
          all: unset;
          margin-left: auto;
          display: flex; align-items: center; gap: 9px;
          font-size: 12px; font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #0d1f10;
          background: #00BE5D;
          padding: 14px 26px;
          cursor: pointer;
          border-radius: 2px;
          transition: opacity 0.2s;
          white-space: nowrap;
        }
        .rp-cta:hover { opacity: 0.88; }

        @media (max-width: 820px) {
          .rp { grid-template-columns: 1fr; min-height: unset; }
          .rp-left {
            padding: 48px 28px 24px;
            flex-direction: row; flex-wrap: wrap; gap: 6px;
            border-right: none;
            border-bottom: 1px solid rgba(0,190,93,0.1);
          }
          .rp-eyebrow { width: 100%; }
          .rp-tab { padding: 8px 12px; }
          .rp-tab-num, .rp-tab-icon { display: none; }
          .rp-tab-label { font-size: 13px; }
          .rp-right { padding: 32px 28px 52px; }
          .rp-ghost { font-size: 100px; }
          .rp-cta { margin-left: 0; }
        }
      `}</style>

      <section className="rp">

        {/* LEFT */}
        <div className="rp-left">
          <div className="rp-eyebrow">Our process</div>
          {steps.map((st, i) => (
            <button
              key={st.num}
              className={`rp-tab${active === i ? " active" : ""}`}
              onClick={() => setActive(i)}
            >
              <div className="rp-tab-accent" />
              <span className="rp-tab-num">{st.num}</span>
              <span className="rp-tab-icon">{st.icon}</span>
              <span className="rp-tab-label">{st.title}</span>
            </button>
          ))}
        </div>

        {/* RIGHT */}
        <div className="rp-right">
          <div className="rp-panel" key={active}>
            <div className="rp-ghost">{s.num}</div>
            <div className="rp-orb">{s.icon}</div>
            <h2 className="rp-title">{s.title}</h2>
            <p className="rp-body">{s.body}</p>

            <div className="rp-nav">
              <button className="rp-btn" disabled={active === 0} onClick={() => setActive(p => p - 1)} aria-label="Prev">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M9 2L4.5 7 9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="rp-dots">
                {steps.map((_, i) => (
                  <div key={i} className={`rp-dot${active === i ? " on" : ""}`} />
                ))}
              </div>

              <button className="rp-btn" disabled={active === steps.length - 1} onClick={() => setActive(p => p + 1)} aria-label="Next">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 2l4.5 5L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button className="rp-cta">
                Start claim
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default function LandingTestimonial({ formApi = "/api/iepf" }: { formApi?: string }) {
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

  const formRefTestimonial = useRef<HTMLFormElement>(null);
  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const [showToastTestimonial, setShowToastTestimonial] = useState(false);
  const [messageTestimonial, setMessageTestimonial] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [options, setOptions] = useState<{ type_of_unclaimed_investments?: string[]; preferred_callback_time?: string[] } | null>(null);
  const [phoneError, setPhoneError] = useState("");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

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

  const handleSubmitTestimonial = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
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
        setMessageTestimonial("Thank you for your response. Our representative will contact you shortly.");
        setShowToastTestimonial(true);
        if (formRefTestimonial.current) formRefTestimonial.current.reset();
        setSelectedCountry("");
        setPhoneError("");
        setTimeout(() => setShowToastTestimonial(false), 3000);
      })
      .catch(() => {
        setMessageTestimonial("Failed to send the form. Please try again.");
        setShowToastTestimonial(true);
        setTimeout(() => setShowToastTestimonial(false), 3000);
      })
      .finally(() => setFormSubmitting(false));
  };


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
      [index]: !prev[index], // Toggle the boolean value
    }));
  };


  const steps = [
    { title: "Worth Valuation", text: "Find your real worth of shares", icon: Search },
    { title: "Claim Analysis", text: "Know your exact claim type of shares", icon: FileSearch },
    { title: "Expert Consultation", text: "Get exclusive consultation from experts", icon: MessageSquare },
    { title: "Documentation", text: "Accurate documentation of your claim", icon: FileCheck },
    { title: "Claim Follow-up", text: "Superior Follow-up RTA & Companies IPF & Demant Transfer", icon: Activity },
    { title: "DEMAT Transfer", text: "Get your shares in your DEMAT", icon: TrendingUp },

  ];

  return (
    <>
      <div className="relative bg-gradient-to-b from-[#7ed3a6]/20 via-[#a8e6c1]/40 to-[#ffffff] py-10 md:py-20 overflow-hidden">
        {/* Grid Background Overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(#00BE5D 1px, transparent 1px), linear-gradient(90deg, #00BE5D 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-0 relative z-10">

          {/* Heading */}
          <div className="relative mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-2xl text-center md:text-3xl font-extrabold text-[#283655] tracking-tight leading-tight">
              What{" "}
              <span className="text-[#00BE5D]">
                Client Say
              </span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#00BE5D] to-[#00BE5D]/40 mx-auto mt-6 rounded-full opacity-40 mb-8 md:mb-16"></div>
          </div>

          {/* Video Banner */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-3xl h-[280px] md:h-[380px] rounded-[32px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.15)] group transition-transform duration-500 hover:scale-[1.01]">

              {/* YouTube */}
              <iframe
                src={`https://www.youtube.com/embed/yagxF8loMrM${isVideoPlaying ? '?autoplay=1' : ''}`}
                title="Client Testimonial"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {!isVideoPlaying && (
                <div 
                  className="absolute inset-0 z-10 cursor-pointer"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  {/* Overlay Gradient for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

                  {/* Play Button Icon (Visual only, clicks go to iframe) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-20 h-20 bg-[#00BE5D] rounded-full flex items-center justify-center shadow-2xl">
                      <svg className="w-10 h-10 text-white fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="absolute bottom-10 left-10 right-10 text-white z-10 pointer-events-none">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                      <div>
                        <h3 className="text-xl md:text-3xl font-bold max-w-2xl leading-[1.2] drop-shadow-lg">
                          Clearclaim Helped Me Recover My <br className="hidden md:block" /> Parents's Lost Shares
                        </h3>

                        <div className="flex items-center gap-3 mt-4">
                          <div className="h-px w-8 bg-[#00BE5D]"></div>
                          <p className="text-[#00BE5D] text-lg font-bold tracking-wide uppercase">
                            Mr. Mukund Shah
                          </p>
                          <span className="text-xs text-gray-400 font-medium">| Maharashtra</span>
                        </div>
                      </div>

                      {/* Performance stars similar to the image */}
                      <div className="flex gap-1 text-yellow-400 drop-shadow-md">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Badge */}
              {/* <div className="absolute top-8 left-8 bg-[#00BE5D] text-white text-[10px] md:text-xs font-bold tracking-widest uppercase px-6 py-2.5 rounded-full shadow-2xl z-10 border border-white/20 backdrop-blur-sm pointer-events-none">
                1000+ shares recovered
              </div> */}

            </div>
          </div>

        </div>
      </div>

      {/* Testimonials */}
      {reviews.length > 0 && (
        <section className="py-12 md:py-20 px-4  overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-[#283655] tracking-tight">
                Google Reviews That <span className="text-[#00BE5D]">Speak for Themselves</span>
              </h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-[#00BE5D] to-[#00BE5D]/40 mx-auto mt-6 rounded-full opacity-40"></div>
            </div>


            <div className="relative">
              <div className="flex items-center justify-center relative">
                {/* Left Navigation */}
                <button
                  onClick={handlePrev}
                  className="absolute left-1 sm:left-2 md:left-4 z-20 p-2 sm:p-3 md:p-4 bg-white hover:bg-gray-50 rounded-full shadow-xl border border-gray-100 text-gray-500 transition-all active:scale-90"
                >
                  <ChevronLeft size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <div className="w-full overflow-hidden flex justify-center py-4 sm:py-10 relative px-6 sm:px-12 md:px-20">
                  <div className="flex transition-all duration-700 ease-in-out gap-4 sm:gap-8 md:gap-12 items-center justify-center">
                    {[-1, 0, 1].map((offset) => {
                      let index = (currentIndex + offset + reviews.length) % reviews.length;
                      const review = reviews[index];
                      const isActive = offset === 0;

                      return (
                        <div
                          key={`${index}-${offset}`}
                          className={`
                            transition-all duration-700 ease-in-out flex-shrink-0 
                            rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-7 shadow-xl relative
                            ${isActive
                              ? "bg-[#00BE5D] text-white w-[280px] sm:w-[320px] md:w-[380px] scale-100 md:scale-105 z-10"
                              : "bg-white border-2 border-green-500 text-gray-700 w-[240px] sm:w-[280px] md:w-[320px] scale-90 md:scale-95 z-0 opacity-40 md:opacity-100 hidden md:flex"
                            }
                            flex flex-col min-h-[320px] md:min-h-[360px] border border-gray-50/50
                          `}
                        >
                          {/* Top Header: Stars & Date */}
                          <div className="flex justify-between items-start mb-8 md:mb-10">
                            {renderStars(review.stars || 5, isActive)}
                            <div className={`text-right text-xs md:text-sm font-medium ${isActive ? "text-white/90" : "text-gray-400"}`}>
                              {review.date}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <p className={`leading-relaxed text-sm md:text-base font-normal ${isActive ? "text-white" : "text-gray-600"}`}>
                              {expandedReviews[index]
                                ? review.content
                                : review.content.length > 200
                                  ? `“${review.content.substring(0, 200)}...”`
                                  : `“${review.content}”`
                              }
                              {review.content.length > 200 && (
                                <button
                                  className={`ml-2 font-semibold border-b border-current py-0 text-xs md:text-sm ${isActive ? "text-white/100" : "text-[#00BE5D]"}`}
                                  onClick={() => toggleReadMore(index)}
                                >
                                  {expandedReviews[index] ? "Read Less" : "Read More"}
                                </button>
                              )}
                            </p>
                          </div>

                          {/* Divider */}
                          <div className={`h-px w-full my-6 md:my-8 ${isActive ? "bg-white/20" : "bg-gray-100"}`} />

                          {/* Footer: Name */}
                          <div className="flex items-center gap-3 md:gap-4">
                            <div className="flex flex-col min-w-0">
                              <h4 className={`font-bold text-sm md:text-base truncate ${isActive ? "text-white" : "text-[#111827]"}`}>
                                {review.name}
                              </h4>
                              <div className={`text-[10px] md:text-xs font-medium ${isActive ? "text-white/80" : "text-gray-400"}`}>
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
                  className="absolute right-1 sm:right-2 md:right-4 z-20 p-2 sm:p-3 md:p-4 bg-white hover:bg-gray-50 rounded-full shadow-xl border border-gray-100 text-gray-500 transition-all active:scale-90"
                >
                  <ChevronRight size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
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

      {/* Scammers Exposed */}
      <div className="relative bg-gradient-to-b from-[#7ed3a6]/20 via-[#a8e6c1]/40 to-[#ffffff] py-10 md:py-20 overflow-hidden">
        {/* Grid Background Overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(#00BE5D 1px, transparent 1px), linear-gradient(90deg, #00BE5D 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-0 relative z-10">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-[#283655] tracking-tight">
              Physical shareholders <span className="text-[#00BE5D]">Don't miss this video</span>
            </h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-[#00BE5D] to-[#00BE5D]/40 mx-auto mt-6 rounded-full opacity-40 mb-6 md:mb-12"></div>
          </div>

          {/* Video Banner */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-3xl h-[280px] md:h-[380px] rounded-[32px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.15)] group transition-transform duration-500 hover:scale-[1.01]">

              {/* YouTube */}
              <iframe
                src="https://www.youtube.com/embed/wNqDCTfOwBI"
                title="Important Video"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>

              {/* Overlay Gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

              {/* Play Button Icon (Visual only) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-20 h-20 bg-[#00BE5D] rounded-full flex items-center justify-center shadow-2xl">
                  <svg className="w-10 h-10 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Text Content */}
              <div className="absolute bottom-10 left-10 right-10 text-white z-10 pointer-events-none">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-3xl font-bold max-w-2xl leading-[1.2] drop-shadow-lg">
                      Important Guidance for Physical Shareholders
                    </h3>

                    <div className="flex items-center gap-3 mt-4">
                      <div className="h-px w-8 bg-[#00BE5D]"></div>
                      <p className="text-[#00BE5D] text-lg font-bold tracking-wide uppercase">
                        Safety & Recovery
                      </p>
                    </div>
                  </div>

                  <p className="text-green-300 font-medium text-sm md:text-base">
                    Learn how to stay safe & recover your investments
                  </p>
                </div>
              </div>

              {/* Badge */}
              {/* <div className="absolute top-8 left-8 bg-[#00BE5D] text-white text-[10px] md:text-xs font-bold tracking-widest uppercase px-6 py-2.5 rounded-full shadow-2xl z-10 border border-white/20 backdrop-blur-sm pointer-events-none">
                Must Watch
              </div> */}

            </div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <section className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Heading */}
          <div className="text-center mb-12 sm:mb-12 flex flex-col items-center">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-[#283655] tracking-tight">
              How It <span className="text-[#00BE5D]">Works</span>
            </h2>
            {/* <div className="h-1.5 w-24 bg-gradient-to-r from-[#00BE5D] to-[#00BE5D]/40 mt-4 rounded-full"></div> */}
            <div className="h-1.5 w-20 bg-gradient-to-r from-[#00BE5D] to-[#00BE5D]/40 mx-auto mt-6 rounded-full opacity-40 "></div>

          </div>

          <div className="relative w-full max-w-4xl mx-auto flex flex-col gap-6 md:gap-0">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
                  className={`w-full md:w-[46%] relative z-10 ${isEven ? "md:self-start" : "md:self-end md:-mt-16"
                    }`}
                >
                  {/* Left-to-Right Connector */}
                  {isEven && idx < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + 0.4, duration: 0.4 }}
                      className="hidden md:block absolute top-[45%] -right-[25%] w-[25%] h-[65%] border-t-2 border-r-2 border-dashed border-[#00BE5D]/60 rounded-tr-3xl z-[-1]"
                    >
                      <svg className="absolute -bottom-[10px] -right-[7px] w-4 h-4 text-[#00BE5D]/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </motion.div>
                  )}

                  {/* Right-to-Left Connector */}
                  {!isEven && idx < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + 0.4, duration: 0.4 }}
                      className="hidden md:block absolute top-[45%] -left-[25%] w-[25%] h-[65%] border-t-2 border-l-2 border-dashed border-[#00BE5D]/60 rounded-tl-3xl z-[-1]"
                    >
                      <svg className="absolute -bottom-[10px] -left-[7px] w-4 h-4 text-[#00BE5D]/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </motion.div>
                  )}

                  {/* Card Content */}
                  <div className={`p-4 sm:p-5 rounded-[2rem] flex gap-4 shadow-sm border ${isEven ? 'bg-[#f4fbf0] border-[#e6f4df]' : 'bg-[#f8fafc] border-slate-100'
                    }`}>

                    {/* Vertical Pill */}
                    <div className={`flex-shrink-0 w-10 sm:w-12 h-32 sm:h-36 rounded-full flex items-center justify-center ${isEven ? 'bg-[#0f4c3a]' : 'bg-[#1e293b]'
                      }`}>
                      <span className="transform -rotate-90 text-white text-xs sm:text-sm font-medium whitespace-nowrap tracking-wider">
                        Step {idx + 1}
                      </span>
                    </div>

                    {/* Text Details */}
                    <div className="flex-1 py-2 sm:py-3 pr-2">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-sm ${isEven ? 'bg-[#e5f5da]' : 'bg-white'
                          }`}>
                          <Icon className={`w-4 h-4 ${isEven ? 'text-[#0f4c3a]' : 'text-[#1e293b]'}`} />
                        </div>
                        <h3 className={`font-semibold text-base sm:text-lg ${isEven ? 'text-[#0f4c3a]' : 'text-slate-800'}`}>
                          {idx + 1} {step.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                        {step.text}
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Request call back form */}
      <div className="relative py-6 sm:py-8 lg:py-12 max-md:px-4 bg-[#041a0f] bg-gradient-to-br from-[#020d08] via-[#052616] to-[#010a05] overflow-hidden">

        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/images/new_iepf.png')] bg-cover bg-center mix-blend-overlay"></div>
        </div>

        {/* <div className="lg:max-w-6xl max-w-xl mx-auto"> */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left Side: Form Section */}
            <div className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.15] rounded-2xl p-6 sm:p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
              {showToastTestimonial && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-[#00BE5D] text-white py-2 px-6 rounded-md shadow-md w-[90%] max-w-[400px] text-center text-sm z-10 font-semibold">
                  {messageTestimonial}
                </div>
              )}
              <h3 className="text-xl sm:text-2xl font-bold text-white text-center tracking-wide uppercase mb-6">
                Talk to experts – <span className="text-[#00BE5D]">FREE</span>
              </h3>
              <p className="text-[11px] text-center text-gray-300 uppercase tracking-[0.1em] font-medium mt-[-10px] mb-6">
                Share your details and we’ll get back to you shortly.
              </p>

              <form
                ref={formRefTestimonial}
                onSubmit={handleSubmitTestimonial}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="testimonial_first_name" className="block text-[11px] font-bold text-[#00BE5D] uppercase tracking-wider mb-1.5">
                      First Name
                    </label>
                    <input
                      id="testimonial_first_name"
                      name="first_name"
                      type="text"
                      placeholder="Enter First Name"
                      className="w-full bg-white/[0.92] border border-transparent focus:border-emerald-400 focus:bg-white rounded-lg px-4 py-2.5 text-gray-900 text-sm outline-none transition-all shadow-inner placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="testimonial_last_name" className="block text-[11px] font-bold text-[#00BE5D] uppercase tracking-wider mb-1.5">
                      Last Name
                    </label>
                    <input
                      id="testimonial_last_name"
                      name="last_name"
                      type="text"
                      placeholder="Enter Last Name"
                      className="w-full bg-white/[0.92] border border-transparent focus:border-emerald-400 focus:bg-white rounded-lg px-4 py-2.5 text-gray-900 text-sm outline-none transition-all shadow-inner placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="testimonial_email" className="block text-[11px] font-bold text-[#00BE5D] uppercase tracking-wider mb-1.5">
                    Email
                  </label>
                  <input
                    id="testimonial_email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    className="w-full bg-white/[0.92] border border-transparent focus:border-emerald-400 focus:bg-white rounded-lg px-4 py-2.5 text-gray-900 text-sm outline-none transition-all shadow-inner placeholder:text-gray-400"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="testimonial_phone" className="block text-[11px] font-bold text-[#00BE5D] uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <div className="flex-shrink-0">
                      <SearchablePhoneCode
                        id="testimonial_phone_code"
                        name="phone_country_code"
                        options={COUNTRY_OPTIONS}
                        className="h-full bg-white/[0.85] rounded-lg px-2 py-2.5 text-gray-800 text-[11px] font-semibold outline-none border border-transparent shadow-inner cursor-pointer"
                      />
                    </div>
                    <input
                      id="testimonial_phone"
                      name="phone"
                      type="tel"
                      placeholder="9876543210"
                      minLength={PHONE_MIN_LENGTH}
                      maxLength={PHONE_MAX_LENGTH}
                      onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        target.value = target.value.replace(/\D/g, "");
                        if (phoneError) setPhoneError("");
                      }}
                      className={`w-full bg-white/[0.92] border text-gray-900 placeholder:text-gray-400 rounded-lg px-4 py-2.5 text-sm outline-none transition-all shadow-inner ${phoneError ? "border-red-400 focus:border-red-400" : "border-transparent focus:border-emerald-400"}`}
                      required
                    />
                  </div>
                  {phoneError && <p className="text-red-400 text-[11px] mt-1">{phoneError}</p>}
                </div>

                <div>
                  <label htmlFor="testimonial_country" className="block text-[11px] font-bold text-[#00BE5D] uppercase tracking-wider mb-1.5">
                    Current Country
                  </label>
                  <input type="hidden" name="country" value={selectedCountry} required />
                  <CountrySelect
                    id="testimonial_country"
                    options={COUNTRY_OPTIONS}
                    value={selectedCountry}
                    onChange={setSelectedCountry}
                    className="w-full bg-white/[0.92] border border-transparent focus:border-emerald-400 rounded-lg px-4 py-2.5 text-sm outline-none transition-all shadow-inner"
                  />
                </div>

                <div>
                  <label htmlFor="testimonial_investment_type" className="block text-[11px] font-bold text-[#00BE5D] uppercase tracking-wider mb-1.5">
                    Type of Unclaimed Investment
                  </label>
                  <div className="relative">
                      <select
                        id="testimonial_investment_type"
                        name="type_of_unclaimed_investments"
                        className="w-full bg-white/[0.92] border border-transparent focus:border-emerald-400 rounded-lg px-4 py-2.5 text-gray-900 text-sm outline-none transition-all shadow-inner appearance-none pr-10 cursor-pointer"
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
                  <label htmlFor="testimonial_callback_time" className="block text-[11px] font-bold text-[#00BE5D] uppercase tracking-wider mb-1.5">
                    Preferred Callback Time (IST)
                  </label>
                  <div className="relative">
                      <select
                        id="testimonial_callback_time"
                        name="preferred_callback_time"
                        className="w-full bg-white/[0.92] border border-transparent focus:border-emerald-400 rounded-lg px-4 py-2.5 text-gray-900 text-sm outline-none transition-all shadow-inner appearance-none pr-10 cursor-pointer"
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

                <div className="flex items-start gap-2.5 pt-2">
                  <input
                    type="checkbox"
                    id="testimonial_agree"
                    name="agree"
                    className="mt-0.5 w-4 h-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-500 bg-white/20 accent-emerald-500 cursor-pointer"
                    required
                  />
                  <label
                    htmlFor="testimonial_agree"
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

                <div className="pt-2 flex justify-center">
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
            </div>

            {/* Right Side: Text Content */}
            <div className="text-left flex flex-col    max-md:px-4">
              <div className="text-white mb-6">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">India’s No.1 <span className="text-[#00BE5D] bg-clip-text">Share</span> Recovery Experts</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  "Old shares and dividends recovery",
                  "Physical shares to DEMAT conversion",
                  "Transmission of shares for death claims",
                  "Recovery of lost shares",
                  "Issue of duplicate shares",
                  "IEPF claims of shares",
                  "IEPF claim of dividends"
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-emerald-500/30 hover:bg-white/[0.05] transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                      <svg className="w-3.5 h-3.5 text-[#00c875]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-200 text-sm md:text-base font-medium leading-snug tracking-wide">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

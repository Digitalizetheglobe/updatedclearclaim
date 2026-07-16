"use client";

import React, { useRef, useState, useEffect } from "react";
import { useInView, animate } from "framer-motion";
import Image from "next/image";
import ContentSection from "./contentsection";
import ScrollButton from "@/components/scrollbutton";
import Link from "next/link";
import phoneIcon from "../../../public/images/phone-call.png";
import emailIcon from "../../../public/images/email.png";
import SearchablePhoneCode from "@/components/SearchablePhoneCode";
import CountrySelect from "@/components/CountrySelect";
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

// Counter Component
function AnimatedNumber({ value, suffix = "" }: { value: number, suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-10px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(v) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(v).toLocaleString("en-IN") + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, suffix]);

  return <span ref={nodeRef}>0{suffix}</span>;
}

export default function RecoveryOfShares() {
  const heroFormRef = useRef<HTMLFormElement>(null);
  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [options, setOptions] = useState<{ type_of_unclaimed_investments?: string[]; preferred_callback_time?: string[] } | null>(null);

  const PHONE_MIN_LENGTH = 7;
  const PHONE_MAX_LENGTH = 13;

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      <ScrollButton />

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

          {/* Background Image Overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-[url('/images/recovery_shares_bg.png')] bg-cover bg-center mix-blend-overlay"></div>
          </div>

          {/* Premium Tech Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
            backgroundImage: `linear-gradient(to right, #22c55e 1px, transparent 1px), linear-gradient(to bottom, #22c55e 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />

          {/* Ambient Glows */}
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-emerald-600/15 blur-[150px] rounded-full pointer-events-none" />

          {/* Floating Light Specks */}
          <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-white rounded-full opacity-40 blur-sm animate-pulse pointer-events-none"></div>
          <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-emerald-400 rounded-full opacity-30 blur-md animate-pulse [animation-delay:1s] pointer-events-none"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-0">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

              {/* LEFT COLUMN: Value Proposition & Services */}
              <div className="animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:0ms]">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white tracking-tight leading-tight">
                  India&apos;s No.1 <span className=" text-[#00BE5D] bg-clip-text">Shares Recovery</span> Experts
                </h1>
                <p className="text-sm sm:text-base text-white/90 mb-6 font-medium max-w-xl">
                  Recover your lost, stuck or unclaimed shares with India&apos;s most trusted financial recovery specialists.
                </p>

                {/* Modern Service Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {[
                    "Old shares and dividends recovery",
                    "Physical shares to DEMAT conversion",
                    "Transmission of shares for death claims",
                    "Recovery of lost shares",
                    "Issue of duplicate shares",
                    "IEPF claims of shares & dividends",
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
                      <p className="text-gray-200 text-base font-medium leading-snug tracking-wide">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4">
                  <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-4 rounded-lg border border-white/20">
                    <div className="text-xl sm:text-2xl font-bold text-white"><AnimatedNumber value={150} suffix="+ Cr" /></div>
                    <div className="text-white/80 text-[10px] sm:text-sm leading-tight">Shares Recovered</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-4 rounded-lg border border-white/20">
                    <div className="text-xl sm:text-2xl font-bold text-white"><AnimatedNumber value={1250} suffix="+" /></div>
                    <div className="text-white/80 text-[10px] sm:text-sm leading-tight">Clients Assisted</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-4 rounded-lg border border-white/20">
                    <div className="text-xl sm:text-2xl font-bold text-white"><AnimatedNumber value={2500} suffix="+" /></div>
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

                {/* Contact Buttons */}
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
                    <Image src={emailIcon} alt="Email" width={20} height={20} className="invert brightness-0" />
                    sales@clearclaim.in
                  </a>
                </div>
              </div>

              {/* RIGHT COLUMN: Premium Lead Form */}
              <div id="form" className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.15] rounded-2xl p-5 sm:p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:120ms]">
                <h3 className="text-lg sm:text-2xl font-bold text-white text-center tracking-wide uppercase mb-5 sm:mb-6">
                  Request A Call Back
                </h3>

                <form ref={heroFormRef} onSubmit={handleSubmit} className="space-y-4">
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
                    <label htmlFor="ros_country" className="block text-[11px] font-bold text-[#00BE5D] uppercase tracking-wider mb-1.5">
                      Current Country
                    </label>
                    <input type="hidden" name="country" value={selectedCountry} required />
                    <CountrySelect
                      id="ros_country"
                      options={COUNTRY_OPTIONS}
                      value={selectedCountry}
                      onChange={setSelectedCountry}
                      className="w-full bg-white/[0.92] border border-transparent focus:border-emerald-400 rounded-lg px-4 py-2.5 text-sm outline-none transition-all shadow-inner"
                    />
                  </div>

                  <div>
                    <label htmlFor="ros_investment_type" className="block text-[11px] font-bold text-[#00BE5D] uppercase tracking-wider mb-1.5">
                      Type of Unclaimed Investment
                    </label>
                    <div className="relative">
                      <select
                        id="ros_investment_type"
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
                    <label htmlFor="ros_callback_time" className="block text-[11px] font-bold text-[#00BE5D] uppercase tracking-wider mb-1.5">
                      Preferred Callback Time (IST)
                    </label>
                    <div className="relative">
                      <select
                        id="ros_callback_time"
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

                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="hero_agree"
                      name="agree"
                      className="mt-0.5 w-4 h-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-500 bg-white/20 accent-emerald-500 cursor-pointer"
                      required
                    />
                    <label
                      htmlFor="agree"
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
                      className="group relative overflow-hidden bg-[#00BE5D] hover:bg-[#00c875] active:bg-[#00b569] text-white font-extrabold py-3.5 px-4 rounded-full transition-all duration-200 shadow-lg shadow-emerald-950/50  tracking-wider text-xs cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
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

                <p className="text-[9px] text-center text-gray-400 uppercase tracking-[0.15em] font-medium mt-6">
                  Powering Wealth Recovery &amp; Financial Freedom
                </p>
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

        <ContentSection />
      </div>
    </>
  );
}

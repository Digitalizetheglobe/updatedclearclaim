"use client";

import { useState, useRef, useEffect } from "react";
import aiimg from "../../../public/images/AI-img.png";
import Image from "next/image";
import tick from "../../../public/images/tick.svg";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Settings } from "lucide-react";

import google from "../../../public/images/google.webp";
import ScrollButton from "@/components/scrollbutton";

const API_BASE = "";

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

export default function LandingTestimonial2() {
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});
  const [visibleCount, setVisibleCount] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/testimonials");
        const data = await response.json();

        if (Array.isArray(data)) {
          const dynamicReviews = data.map((item: any) => ({
            name: item.name,
            date: item.date || "Recently",
            stars: item.rating || 5,
            content: item.testimonial || item.testimonialText || "",
            platform: item.platform || "Google"
          }));
          setReviews(dynamicReviews);
        } else {
          setReviews([]);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setReviews([]);
      }
    };
    fetchReviews();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const formRefTestimonial2 = useRef<HTMLFormElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const PHONE_MIN_LENGTH = 6;
  const PHONE_MAX_LENGTH = 15;

  const handleSubmitTestimonial2 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRefTestimonial2.current || formSubmitting) return;

    const form = formRefTestimonial2.current;

    const first = (form.querySelector('[name="first_name"]') as HTMLInputElement)?.value?.trim() ?? "";
    const last = (form.querySelector('[name="last_name"]') as HTMLInputElement)?.value?.trim() ?? "";
    const phoneRaw = (form.querySelector('[name="phone"]') as HTMLInputElement)?.value?.replace(/\D/g, "") ?? "";
    const phoneCountryCode = (form.querySelector('[name="phone_country_code"]') as HTMLSelectElement)?.value ?? "+91";
    const email = (form.querySelector('[name="email"]') as HTMLInputElement)?.value?.trim() ?? "";

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
      whatsapp_number: fullPhone,
      email,
    };

    setFormSubmitting(true);
    fetch("/api/share-recovery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText || "Request failed");
        return res.json();
      })
      .then(() => {
        setToastMessage("Thank you! Your message has been sent successfully.");
        setShowModal(true);
        if (formRefTestimonial2.current) formRefTestimonial2.current.reset();
        setPhoneError("");
      })
      .catch(() => {
        setToastMessage("There was an error sending your message. Please try again.");
        setShowModal(true);
      })
      .finally(() => setFormSubmitting(false));
  };
  const steps = [
    "Find your real worth of shares",
    "Know your exact claim type of shares",
    "Get exclusive consultation from experts",
    "Accurate documentation of your claim",
    "Get your shares in your DEMAT",
    "Superior Follow-up of your claim",
  ];



  const renderStars = (count: number, isActive: boolean) => {
    return (
      <div className="flex items-center mb-4 gap-1">
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

  const loadMore = () => {
    setVisibleCount(reviews.length);
  };

  return (
    <>
      <ScrollButton />

      {/* Modal Popup for Contact Form */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md mx-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{toastMessage}</h2>
            <button
              onClick={() => setShowModal(false)}
              className="mt-3 px-4 py-2 bg-[#00BE5D] text-white rounded-md hover:bg-[#008C44] transition"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <div className="relative bg-gradient-to-br from-[#f8fdf9] to-[#e6f7ed] py-16 overflow-hidden">
        {/* Grid Background Overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(#00BE5D 1px, transparent 1px), linear-gradient(90deg, #00BE5D 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}>
        </div>
        <div className="max-w-6xl mx-auto px-4 md:px-0">

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-extrabold text-[#283655] tracking-tight leading-tight">
            What{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a3a1f] via-[#2d5a34] to-[#00BE5D]">
              Client Say
            </span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#1a3a1f] to-[#00BE5D] mx-auto mt-6 rounded-full opacity-40 mb-16"></div>

          {/* Video Banner */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-3xl h-[240px] md:h-[380px] rounded-[28px] overflow-hidden shadow-xl group">

              {/* YouTube */}
              <iframe
                src="https://www.youtube.com/embed/yagxF8loMrM"
                title="Client Testimonial"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent pointer-events-none"></div>

              {/* Text Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <h3 className="text-lg md:text-3xl font-bold max-w-xl leading-snug">
                  Clearclaim Helped Me Recover My Parents&apos;s Lost Shares
                </h3>

                <p className="mt-2 text-green-300 font-medium">
                  – Mr. Mukund Shah
                </p>
                <p className="text-xs text-gray-300">(Maharashtra)</p>
              </div>

              {/* Badge */}
              <div className="absolute top-4 left-4 bg-[#00BE5D] text-white text-xs px-4 py-2 rounded-full shadow-md z-10">
                1000+ shares recovered
              </div>

            </div>
          </div>

        </div>
      </div>
      {reviews.length > 0 && (
        <section className="py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#283655] tracking-tight">
                Google Reviews That <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a3a1f] via-[#2d5a34] to-[#00BE5D]">Speak for Themselves</span>
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-[#1a3a1f] to-[#00BE5D] mx-auto mt-6 rounded-full opacity-40"></div>
            </div>

            <div className="relative">
              {/* Mobile: Show limited testimonials with Load More */}
              <div className="md:hidden flex flex-col gap-6">
                {reviews.slice(0, visibleCount).map((review, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-col">
                        <h3 className="text-lg font-bold text-[#283655]">
                          {review.name || "Anonymous"}
                        </h3>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded-lg">
                        <Image src={google} alt="Google" width={40} height={20} className="object-contain" />
                      </div>
                    </div>
                    {renderStars(review.stars, false)}
                    <p className="text-gray-600 leading-relaxed text-sm flex-1">
                      {expandedReviews[index]
                        ? review.content
                        : `${review.content.substring(0, 120)}...`}
                    </p>
                    <button
                      className="mt-4 text-[#00BE5D] text-sm font-bold hover:underline self-start"
                      onClick={() => toggleReadMore(index)}
                    >
                      {expandedReviews[index] ? "Read Less" : "Read More"}
                    </button>
                  </div>
                ))}
                {visibleCount < reviews.length && (
                  <button
                    onClick={loadMore}
                    className="mt-4 px-8 py-3 bg-[#00BE5D] text-white rounded-xl font-bold hover:bg-[#008C44] transition-all shadow-lg self-center"
                  >
                    Load More Reviews
                  </button>
                )}
              </div>

              {/* Desktop Carousel */}
              <div className="hidden md:flex items-center justify-center relative">
                {/* Left Navigation */}
                <button
                  onClick={handlePrev}
                  className="absolute left-[-20px] lg:left-0 z-20 p-4 bg-white hover:bg-gray-50 rounded-full shadow-xl border border-gray-100 text-gray-500 transition-all active:scale-90"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="w-full overflow-hidden flex justify-center py-10 px-4">
                  <div className="flex transition-all duration-700 ease-in-out gap-8 items-center justify-center">
                    {[
                      (currentIndex - 1 + reviews.length) % reviews.length,
                      currentIndex,
                      (currentIndex + 1) % reviews.length
                    ].map((reviewIndex, displayIdx) => {
                      const review = reviews[reviewIndex];
                      if (!review || !reviews.length) return null;
                      
                      const isActive = reviewIndex === currentIndex;
                      
                      return (
                        <div
                          key={reviewIndex}
                          className={`
                            transition-all duration-700 ease-in-out flex-shrink-0 
                            rounded-[2rem] p-7 shadow-xl relative
                            ${isActive
                              ? "bg-gradient-to-br from-[#00C853] via-[#00A243] to-[#017A34] text-white w-[300px] md:w-[380px] scale-100 md:scale-105 z-10"
                              : "bg-white text-gray-700 w-[260px] md:w-[320px] scale-90 md:scale-95 z-0 opacity-40 md:opacity-100 hidden lg:flex"
                            }
                            flex flex-col min-h-[360px] border border-gray-50/50
                          `}
                        >
                          <div className={`text-right text-xs font-medium mb-8 ${isActive ? "text-white/90" : "text-gray-400"}`}>
                            {review.date}
                          </div>

                          <div className="flex-1">
                            <p className={`leading-relaxed text-sm font-normal ${isActive ? "text-white" : "text-gray-600"}`}>
                              {expandedReviews[reviewIndex]
                                ? review.content
                                : review.content.length > 180
                                  ? `“${review.content.substring(0, 180)}...”`
                                  : `“${review.content}”`
                              }
                              {review.content.length > 180 && (
                                <button
                                  className={`ml-2 font-semibold border-b border-current py-0 text-xs ${isActive ? "text-white/100" : "text-[#00BE5D]"}`}
                                  onClick={() => toggleReadMore(reviewIndex)}
                                >
                                  {expandedReviews[reviewIndex] ? "Read Less" : "Read More"}
                                </button>
                              )}
                            </p>
                          </div>

                          <div className={`h-px w-full my-6 ${isActive ? "bg-white/20" : "bg-gray-100"}`} />

                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full overflow-hidden border-2 flex-shrink-0 ${isActive ? "border-white/30" : "border-gray-200"}`}>
                              <div className={`w-full h-full flex items-center justify-center font-bold text-xs ${isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`}>
                                {(review.name || "A").charAt(0)}
                              </div>
                            </div>
                            <div className="flex flex-col min-w-0">
                              <h4 className={`font-bold text-sm truncate ${isActive ? "text-white" : "text-[#111827]"}`}>
                                {review.name || "Anonymous"}
                              </h4>
                              {renderStars(review.stars, isActive)}
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
                  className="absolute right-[-20px] lg:right-0 z-20 p-4 bg-white hover:bg-gray-50 rounded-full shadow-xl border border-gray-100 text-gray-500 transition-all active:scale-90"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="hidden md:flex justify-center gap-2 mt-8">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${currentIndex === i ? "w-6 bg-[#00BE5D]" : "w-1.5 bg-gray-300"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Scammers Exposed */}
      <div className="relative bg-gradient-to-b from-[#7ed3a6]/20 via-[#a8e6c1]/40 to-[#ffffff] py-20 overflow-hidden">
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
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#283655] tracking-tight">
                Physical shareholders <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a3a1f] via-[#2d5a34] to-[#00BE5D]">Don't miss this video</span>
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-[#1a3a1f] to-[#00BE5D] mx-auto mt-6 rounded-full opacity-40 mb-12"></div>
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
              <div className="absolute top-8 left-8 bg-[#00BE5D] text-white text-[10px] md:text-xs font-bold tracking-widest uppercase px-6 py-2.5 rounded-full shadow-2xl z-10 border border-white/20 backdrop-blur-sm pointer-events-none">
                Must Watch
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* How it works */}
      <section className=" py-16 md:py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#283655] tracking-tight">
              How <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a3a1f] via-[#2d5a34] to-[#00BE5D]">It Works</span>
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-[#1a3a1f] to-[#00BE5D] mx-auto mt-6 rounded-full opacity-40"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-2 items-center">
            {/* Left Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >

              <div className="space-y-6">
                {steps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4 group cursor-default"
                  >
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                      <Image src={tick} alt="tick" className="w-full h-full" />
                      {/* <Image src={tick} alt="clearclaim" className="w-5 h-6 " /> */}
                    </div>
                    <span className="text-[#283655] text-lg lg:text-xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2">
                      {step}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Visual Side - Premium Orbital Arch */}
            <div className="relative flex items-center justify-center mt-12 lg:mt-0 px-0 mt-12">
              {/* The Arch Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] flex items-center justify-center translate-x-8 sm:translate-x-12"
              >
                {/* Orbital Background Image */}
                <div className="absolute inset-0 rounded-full overflow-hidden z-20">
                  <Image
                    src="/images/orbital-background.png"
                    alt="Orbital Background"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Inner White Circle */}
                <div className="absolute w-[40%] h-[40%] rounded-full flex flex-col items-center justify-center z-30 text-center p-4 border border-emerald-50 bg-white">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="mb-2"
                  >
                    <Settings className="w-8 h-8 sm:w-10 sm:h-10 text-[#283655]" />
                  </motion.div>
                  <p className="text-[#283655] font-bold text-base sm:text-xl leading-tight">
                    Artificial<br />Intelligence
                  </p>
                </div>

                {/* Floating Cards */}
                {[
                  { title: "Valuation engine", position: "-top-10 left-[10%] sm:-top-12 sm:left-[5%]", zIndex: "z-10" },
                  { title: "Claim process map", position: "top-[12%] -right-4 sm:top-[18%] sm:-right-12", zIndex: "z-30" },
                  // { title: "Ultra follow-up method", position: "top-[25%] -left-10 sm:-right- -translate-y-1/2", zIndex: "z-10" },
                  {
                    title: "Ultra follow-up method",
                    position: "top-[25%] -left-16 sm:-left-28 -translate-y-1/2",
                    zIndex: "z-10"
                  },
                  { title: "Documents engine", position: "bottom-[5%] -right-4 sm:bottom-[18%] sm:-right-12", zIndex: "z-30" },
                ].map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.2, duration: 0.6 }}
                    className={`absolute ${card.position} ${card.zIndex} bg-white shadow-[0_6px_20px_rgba(0,0,0,0.05)] 
                      rounded-xl p-2 sm:p-6 w-24 sm:w-36 text-center border border--50 
                      flex items-center justify-center min-h-[60px] sm:min-h-[80px]`}
                  >
                    <span className="text-[#283655] font-medium text-xs sm:text-sm leading-tight font-semibold">
                      {card.title}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Decorative radial blur for depth */}
              <div className="absolute -z-10 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Request call back form - EXACT MATCH with IEPF Reference */}
      <div
        className="relative py-6 sm:py-8 lg:py-12 max-md:px-4 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/images/paper_img.png')" }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00BE5D]/80 via-[#1f7a4a]/90 to-[#2F2F2F] backdrop-blur-[1px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
          <div className="grid lg:grid-cols-[1.3fr_1fr] items-center gap-12 lg:gap-16">

            {/* Left Side: Form Section */}
            <div className="flex bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-100 items-center lg:mr-auto min-h-[500px] w-full md:w-[450px] mx-auto py-0 sm:py-6 relative shadow-2xl">
              <form
                ref={formRefTestimonial2}
                className="max-w-lg p-6 sm:p-8 mx-auto w-full"
                onSubmit={handleSubmitTestimonial2}
              >
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-800 leading-tight">
                    Talk to experts – <span className="text-[#00BE5D]">FREE</span>
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Share your details and we’ll get back to you shortly.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        required
                        className="w-full text-gray-800 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#00BE5D] bg-white transition-all shadow-sm"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        required
                        className="w-full text-gray-800 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#00BE5D] bg-white transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="w-full text-gray-800 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#00BE5D] bg-white transition-all shadow-sm"
                    />
                  </div>

                  <div className="flex gap-2">
                    <div className="w-24 flex-shrink-0">
                      <select
                        name="phone_country_code"
                        className="w-full bg-white border border-gray-300 rounded-md py-2.5 px-2 text-[11px] text-gray-700 outline-[#00BE5D] font-bold appearance-none shadow-sm"
                        required
                      >
                        {COUNTRY_OPTIONS.map((c) => (
                          <option key={c.value} value={c.dial}>{c.flag} {c.dial || "Other"}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex-1 min-w-0">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        onInput={(e) => {
                          const target = e.target as HTMLInputElement;
                          target.value = target.value.replace(/\D/g, "");
                        }}
                        className="w-full text-gray-800 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#00BE5D] bg-white transition-all shadow-sm"
                      />
                    </div>
                  </div>
                  {phoneError && <p className="text-red-500 text-[10px] mt--2 ml-1">{phoneError}</p>}

                  <div className="flex items-start gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="agree"
                      name="agree"
                      className="mt-1 w-4 h-4 accent-[#00BE5D] cursor-pointer"
                      required
                    />
                    <label htmlFor="agree" className="text-[10px] text-gray-500 leading-tight  mt-1">
                      I agree to receive updates via email or phone. I understand my data is secure.
                    </label>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="w-full sm:w-max shadow-lg py-3 px-8 text-sm text-white font-bold rounded-md bg-[#00BE5D] hover:bg-[#008C44] transition-all focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wider"
                    >
                      {formSubmitting ? "Sending..." : "Get Free Consulting"}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Side: Text Content */}
            <div className="text-left flex flex-col justify-center max-md:px-4">
              <div className="text-white mb-6">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">India’s No.1 Shares Recovery Experts</h2>
              </div>
              <ul className="space-y-6 mt-8 text-white text-lg lg:text-xl font-medium">
                {[
                  "Old shares and dividends recovery",
                  "Physical shares to DEMAT conversion",
                  "Transmission of shares for death claims",
                  "Recovery of lost shares",
                  "Issue of duplicate shares",
                  "IEPF claims of shares",
                  "IEPF claim of dividends"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <Image src={tick} alt="clearclaim" className="w-5 h-6 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

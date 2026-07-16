"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  MessageSquare,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import phoneImg from "../../../public/images/phone-call.png";
import emailImg from "../../../public/images/email.png";
import addressImg from "../../../public/images/location.png";
import SearchablePhoneCode from "@/components/SearchablePhoneCode";

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

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const PHONE_MIN_LENGTH = 7;
  const PHONE_MAX_LENGTH = 13;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current || formSubmitting) return;

    const form = formRef.current;
    const first_name = (form.querySelector('[name="first_name"]') as HTMLInputElement)?.value?.trim() ?? "";
    const last_name = (form.querySelector('[name="last_name"]') as HTMLInputElement)?.value?.trim() ?? "";
    const phoneRaw = (form.querySelector('[name="phone"]') as HTMLInputElement)?.value?.replace(/\D/g, "") ?? "";
    const phoneCountryCode = (form.querySelector('[name="phone_country_code"]') as HTMLSelectElement)?.value ?? "+91";
    const city = (form.querySelector('[name="city"]') as HTMLInputElement)?.value?.trim() ?? "";
    const email = (form.querySelector('[name="email"]') as HTMLInputElement)?.value?.trim() ?? "";
    const message = (form.querySelector('[name="message"]') as HTMLTextAreaElement)?.value?.trim() ?? "";

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

    const phone_number = phoneCountryCode && phoneRaw ? `${phoneCountryCode}${phoneRaw}` : phoneRaw ? `+${phoneRaw}` : "";

    const payload = { 
      name: `${first_name} ${last_name}`.trim(), 
      email, 
      contact: phone_number, 
      message: `City: ${city}\n\n${message}` 
    };

    setFormSubmitting(true);
    fetch("https://apicms.clearclaim.in/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText || "Request failed");
        return res.json();
      })
      .then(() => {
        setIsError(false);
        setToastMessage("Thank you for reaching out! Our representative will contact you shortly.");
        setShowModal(true);
        form.reset();
      })
      .catch(() => {
        setIsError(true);
        setToastMessage("Something went wrong. Please try again later.");
        setShowModal(true);
      })
      .finally(() => setFormSubmitting(false));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const infoItems = [
    {
      icon: <MapPin className="w-6 h-6 text-[#00BE5D] translate-y-[1px]" />,
      title: "Our Office",
      content: "Office No C-201, 2nd Floor, Vantage Tower, Bavdhan, Pune-411021",
      link: "https://www.google.com/maps/search/?q=Clearclaim+Ventures+Pune"
    },
    {
      icon: <Mail className="w-6 h-6 text-[#00BE5D]" />,
      title: "Email Us",
      content: "sales@clearclaim.in",
      link: "mailto:sales@clearclaim.in"
    },
    {
      icon: <Phone className="w-6 h-6 text-[#00BE5D]" />,
      title: "Call Us",
      content: "+91 9156701900 / +91 9970651900",
      link: "tel:+919156701900"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8 selection:bg-[#00BE5D]/20">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          {/* <span className="text-[#00BE5D] font-semibold tracking-wider uppercase text-sm block mb-4">Get In Touch</span> */}
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-[#283655] tracking-tight leading-tight">
            Let's Start a{" "}
            <span className="text-[#00BE5D]">
              Conversation
            </span>
          </h2>

          <div className="h-1 w-24 sm:w-20 bg-gradient-to-r from-[#00BE5D] to-[#00BE5D]/40 mx-auto mt-5 rounded-full opacity-40"></div>
          {/* <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions about claim settlements? Our experts are here to provide free consultation and guide you through every step.
          </p> */}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-100">

          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 lg:order-1 lg:col-span-5 bg-[#283655] p-6 sm:p-8 md:p-12 text-white relative"
          >
            {/* Background Decorative Circles */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-black/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 flex flex-col h-full">
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-8 flex-grow">
                {infoItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target={item.title === "Our Office" ? "_blank" : undefined}
                    rel={item.title === "Our Office" ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 10 }}
                    className="flex items-start group cursor-pointer"
                  >
                    <div className="shrink-0 mt-0.5 mr-5 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white/90 group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-base text-white/70 group-hover:text-white/90 transition-colors mt-1 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Map Preview section */}
              <div className="mt-2 group relative rounded-2xl overflow-hidden border border-slate-200 h-48 sm:h-64 shadow-lg ring-1 ring-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7566.28390458752!2d73.77102345228194!3d18.52248629551362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb9349e1eeb%3A0xf79a3b1ab0fcc2a6!2sClearclaim%20Ventures%20Private%20Limited!5e0!3m2!1sen!2sus!4v1734504174452!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
                <div className="absolute bottom-4 left-4 flex items-center">
                  <span className="text-xs bg-[#00BE5D] text-white px-2 py-1 rounded font-medium shadow-md flex items-center">
                    <MapPin className="w-3 h-3 mr-1" /> View Live Map
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-1 lg:order-2 lg:col-span-7 p-6 sm:p-8 md:p-12 lg:p-16"
          >
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                <MessageSquare className="w-6 h-6 mr-3 text-[#00BE5D]" />
                Send us a Message
              </h2>
              <p className="text-slate-500 mt-2">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="first_name" className="text-sm font-medium text-slate-700 ml-1">
                    First Name
                  </label>
                  <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    placeholder="Enter First Name"
                    className="w-full rounded-xl py-3 px-4 bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:ring-2 focus:ring-[#00BE5D]/20 focus:border-[#00BE5D] outline-none transition-all duration-200 shadow-sm placeholder:text-slate-400"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="last_name" className="text-sm font-medium text-slate-700 ml-1">
                    Last Name
                  </label>
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    placeholder="Enter Last Name"
                    className="w-full rounded-xl py-3 px-4 bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:ring-2 focus:ring-[#00BE5D]/20 focus:border-[#00BE5D] outline-none transition-all duration-200 shadow-sm placeholder:text-slate-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-medium text-slate-700 ml-1">
                  Phone Number
                </label>
                <div className="flex gap-2 mt-1.5">
                  <div className="flex-shrink-0 w-[100px] sm:w-[120px]">
                    <SearchablePhoneCode
                      id="phone_code"
                      name="phone_country_code"
                      options={COUNTRY_OPTIONS}
                      className="w-full h-full bg-slate-50 border border-slate-200 rounded-xl px-2 sm:px-3 py-3 text-slate-900 text-sm font-semibold outline-none focus:ring-2 focus:ring-[#00BE5D]/20 focus:border-[#00BE5D] transition-all duration-200 cursor-pointer shadow-sm text-center sm:text-left"
                    />
                  </div>
                  <div className="w-full relative">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter Phone Number"
                      minLength={PHONE_MIN_LENGTH}
                      maxLength={PHONE_MAX_LENGTH}
                      onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        target.value = target.value.replace(/\D/g, "");
                        if (phoneError) setPhoneError("");
                      }}
                      className={`w-full rounded-xl py-3 px-4 bg-slate-50 border text-slate-900 text-sm outline-none transition-all duration-200 shadow-sm placeholder:text-slate-400 ${phoneError ? "border-red-400 focus:ring-2 focus:ring-red-400/20 focus:border-red-400" : "border-slate-200 focus:ring-2 focus:ring-[#00BE5D]/20 focus:border-[#00BE5D]"}`}
                      required
                    />
                  </div>
                </div>
                {phoneError && <p className="text-red-500 text-xs mt-1.5 ml-1">{phoneError}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="city" className="text-sm font-medium text-slate-700 ml-1">
                    City
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Which city are you from?"
                    className="w-full rounded-xl py-3 px-4 bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:ring-2 focus:ring-[#00BE5D]/20 focus:border-[#00BE5D] outline-none transition-all duration-200 shadow-sm placeholder:text-slate-400"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 ml-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter Email Address"
                    className="w-full rounded-xl py-3 px-4 bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:ring-2 focus:ring-[#00BE5D]/20 focus:border-[#00BE5D] outline-none transition-all duration-200 shadow-sm placeholder:text-slate-400"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 ml-1">
                  How can we help you?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about the claim you need help with..."
                  className="w-full rounded-xl py-3 px-4 bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:ring-2 focus:ring-[#00BE5D]/20 focus:border-[#00BE5D] outline-none transition-all duration-200 shadow-sm placeholder:text-slate-400 resize-none"
                  required
                ></textarea>
              </div>

              <div className="flex items-start pt-2">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    className="w-4 h-4 text-[#00BE5D] border-slate-300 rounded focus:ring-[#00BE5D] cursor-pointer"
                    required
                  />
                </div>
                <label
                  htmlFor="agree"
                  className="ml-3 text-sm text-slate-600 leading-tight cursor-pointer"
                >
                  Yes, I agree with the{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-emerald-600 hover:underline"
                  >
                    privacy policy
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                disabled={formSubmitting}
                className="group relative overflow-hidden bg-[#00c875] hover:bg-[#00b569] active:bg-[#00a35e] text-white font-extrabold py-3.5 px-4 rounded-full transition-all duration-200 shadow-lg shadow-[#00c875]/50 uppercase tracking-wider text-xs cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto mx-auto flex items-center justify-center mt-6"
              >
                <div
                  className="absolute inset-0 -translate-x-[150%] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] animate-shine"
                  style={{ animationDuration: "3s" }}
                />
                <span className="relative z-10 flex items-center justify-center">
                  {formSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Get Free Consultation"
                  )}
                </span>
              </button>
            </form>

            <p className="mt-8 text-center text-xs text-slate-400">
              Your information is secure and will never be shared with third parties.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Modern Pop-up Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center border border-slate-100"
            >
              <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 ${isError ? 'bg-red-100 text-red-600' : 'bg-green-100 text-[#00BE5D]'}`}>
                {isError ? <AlertCircle className="w-10 h-10" /> : <CheckCircle2 className="w-10 h-10" />}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                {isError ? "Oops!" : "Success!"}
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {toastMessage}
              </p>
              <button
                onClick={() => setShowModal(false)}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg ${isError ? 'bg-red-500 hover:bg-red-600 shadow-red-200' : 'bg-[#00BE5D] hover:bg-[#008C44] shadow-green-200'}`}
              >
                Okay, got it
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

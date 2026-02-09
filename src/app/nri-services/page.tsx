"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import google from "../../../public/images/google.webp";
import nriabout from '../../../public/images/nri-about.png'
import phoneicon from '../../../public/images/contact.png'
import globalnews from '../../../public/images/folder.png'
import thunder from '../../../public/images/thunder.png';
import rupees from '../../../public/images/rupee-coins.png';
import { Phone, Mail } from "lucide-react";

import recovery from '../../../public/images/global-news.png';
import midnight from '../../../public/images/midnight.png';
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

// Chevron Icons as SVG
const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const ChevronUp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 15l6-6 6 6" />
  </svg>
);

export default function NRISamadhan() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});
  const [expandedFaqs, setExpandedFaqs] = useState<Record<number, boolean>>({ 0: true });

  const heroFormRef = useRef<HTMLFormElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [options, setOptions] = useState<{ type_of_unclaimed_investments?: string[]; preferred_callback_time?: string[] } | null>(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/inquiries/options`)
      .then((res) => res.ok ? res.json() : null)
      .then((data) => data && setOptions(data))
      .catch(() => { });
  }, []);

  const reviews = [
    {
      name: "Vinayak Gaitonde",
      date: "22 January 2025",
      stars: 5,
      content:
        "Very reliable, gives personal attention & above all, very reasonable charges. I have given them shares which are in IEPF for transferring into my demat account. At present after completing all documentation by them the matter is with IEPF for their clearance. My Best Wishes to Shrikant and his team.",
    },
    {
      name: "Jayant V Patil",
      date: "a month ago",
      stars: 5,
      content:
        "Clear claim transferred my physical shares within given time, very professional, very prompt, overall a hassle-free experience, i highly recommend Clear claim for you share transfer and other related works.. thank u",
    },
    {
      name: "Rajagopalan V",
      date: "6 January 2025",
      stars: 5,
      content:
        "Mr. Srikant is a good person and guides us in a proper way with his expertise in his business areas. You may negotiate and go with them for your requirements.",
    },
    {
      name: "Piyush Dhimate",
      date: "4 January 2025",
      stars: 5,
      content:
        "I'm based in Australia and had troubles dealing with insurance and EPF withdrawal remotely. Fortunately, I found clear claim that was the only service that offered to help me out. Their expertise in the processes involved helped me prepare the documentation upfront. I highly recommend them!",
    },
    {
      name: "INDRANEEL TAMBE",
      date: "3 January 2025",
      stars: 5,
      content:
        "Thanks team of clear claim.... Nice service as well as nice guidance and thanks for sorting and clearing my case ... And thanks for helping us...",
    },
    {
      name: "RAKESH G PATIL",
      date: "10 months ago",
      stars: 5,
      content:
        "Great service, quick response they helped me to recover my father physical shares. Highly recommended.",
    },
    {
      name: "Chetan",
      date: "10 months ago",
      stars: 5,
      content:
        "I recently got to know about Clearclaim and till the time I wasn't aware of that we can claim our old unclaimed shares. I tried to reach them and explained my situation and asked for help. The process was smooth and transparent, with clear instructions provided at each step. The customer support team was very responsive, answering all my questions promptly. They also made sure to explain any paperwork and helped me complete it correctly. Although the process took a few weeks, they kept me updated throughout, and I received my shares without any issues. Their fees were reasonable, and I appreciated the upfront disclosure of all charges. I would definitely recommend their services to anyone looking to claim unclaimed shares.",
    },
    {
      name: "shahaji dudhabhate",
      date: "10 months ago",
      stars: 5,
      content:
        "Due to change in name and signature, my father-in-law's Reliance Company shares were stuck in the papers for many years, despite many attempts, they were repeatedly rejected. When I contacted the company Clear Claim on Facebook, they made my work very easy and at a low cost, their working method is very transparent. They are trustworthy people, if you have any work related to old shares, close your eyes and get it done from them. Thank you team🙏🙏🙏",
    },
    {
      name: "Mukund Shah",
      date: "10 months ago",
      stars: 5,
      content:
        "I had a great experience working with Clearclaim. They helped me recover my parents SBI Limited unclaimed shares and dividends from IEPF and convert them to DEMAT. Our team was very responsive and kept me updated throughout the process. I would definitely recommend their services to anyone looking to recover their shares.",
    },
  ];

  const faqs = [
    {
      question: "Can NRIs recover unclaimed shares without original documents?",
      answer: "Yes. In many cases, recovery can begin with basic details like name, PAN, and previous address. We guide you step by step through documentation.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      question: "How long does the recovery process take?",
      answer: "Timelines vary depending on asset type and authority response, but we keep you informed throughout.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      question: "What if my contact details are outdated?",
      answer: "Updating and validating your records is part of our service to avoid unnecessary delays.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
  ];

  const renderStars = (count: number) => {
    return (
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <span key={i}>{i < count ? "⭐" : "☆"}</span>
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

  const toggleFaq = (index: number) => {
    setExpandedFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const loadMore = () => {
    setVisibleCount(reviews.length);
  };

  const submitInquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = heroFormRef.current;
    if (!form || formSubmitting) return;

    const first = (form.querySelector('[name="first_name"]') as HTMLInputElement)?.value?.trim() ?? "";
    const last = (form.querySelector('[name="last_name"]') as HTMLInputElement)?.value?.trim() ?? "";
    const phone = (form.querySelector('[name="phone"]') as HTMLInputElement)?.value?.replace(/\D/g, "") ?? "";
    const email = (form.querySelector('[name="email"]') as HTMLInputElement)?.value?.trim() ?? "";
    const country = (form.querySelector('[name="country"]') as HTMLSelectElement)?.value ?? "";
    const typeOfInvestment = (form.querySelector('[name="type_of_unclaimed_investments"]') as HTMLSelectElement)?.value ?? "";
    const callbackTime = (form.querySelector('[name="preferred_callback_time"]') as HTMLSelectElement)?.value ?? "";

    const payload = {
      name: `${first} ${last}`.trim(),
      country_of_residence: country,
      whatsapp_number: phone.length === 10 ? `+91${phone}` : phone.startsWith("+") ? phone : `+91${phone}`,
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

      <div className="bg-white text-gray-800">
        {/* ================= HERO SECTION ================= */}
        <section className="relative bg-gradient-to-r from-[#1a3a1f] via-[#2d5a34] to-[#00BE5D] text-white py-16 md:py-24 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* LEFT CONTENT */}
              <div className="animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:0ms]">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">
                    🇮🇳 Trusted by NRIs Worldwide
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  <span className="block">NRI Wealth</span>
                  <span className="block text-[#00BE5D]">Recovery Services</span>
                </h1>

                <h2 className="text-xl md:text-2xl text-white/90 mb-6 font-medium">
                  Reclaim Your Unclaimed Investments in India: <br />
                  <span className="text-white">Remotely, Securely, and Legally</span>
                </h2>

                <p className="text-white/80 mb-8 text-lg">
                  Indias trusted investment recovery company helping NRIs recover stuck financial investments without setting foot in India
                </p>

                {/* STATS */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <div className="text-2xl font-bold text-white">100+ Cr</div>
                    <div className="text-white/80 text-sm">Amount Recovered</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <div className="text-2xl font-bold text-white">1,000+</div>
                    <div className="text-white/80 text-sm">Clients Served</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <div className="text-2xl font-bold text-white">2,000+</div>
                    <div className="text-white/80 text-sm">Claim Settled</div>
                  </div>
                </div>

                {/* Additional Stats */}
                <div className="flex flex-wrap gap-3 mb-8 text-sm">
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                    <span className="text-white/90">✓ Dedicated Claim Coordinator</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                    <span className="text-white/90">✓ 25+ Expert Team</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                    <span className="text-white/90">✓ 400+ Companies Worked </span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row gap-4">
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
              <div id="form" className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl border border-white/30 animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:120ms]">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Start Your Recovery Journey
                  </h3>
                  <p className="text-gray-600 mt-2">Free consultation & case evaluation</p>
                </div>

                <form
                  ref={heroFormRef}
                  onSubmit={submitInquiry}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <div>
                    <label htmlFor="hero_first_name" className="text-gray-800 text-sm block mb-2">
                      First Name
                    </label>
                    <input
                      id="hero_first_name"
                      name="first_name"
                      type="text"
                      placeholder="Enter First Name"
                      className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#00BE5D] text-gray-800"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="hero_last_name" className="text-gray-800 text-sm block mb-2">
                      Last Name
                    </label>
                    <input
                      id="hero_last_name"
                      name="last_name"
                      type="text"
                      placeholder="Enter Last Name"
                      className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#00BE5D] text-gray-800"
                      required
                    />
                  </div>
                  <div className="col-span-full sm:col-span-1">
                    <label htmlFor="hero_phone" className="text-gray-800 text-sm block mb-2">
                      Phone Number
                    </label>
                    <input
                      id="hero_phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter Phone Number"
                      maxLength={10}
                      pattern="^\d{10}$"
                      onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        target.value = target.value.replace(/\D/g, "");
                      }}
                      className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#00BE5D] text-gray-800"
                      required
                      title="Phone number must be exactly 10 digits"
                    />
                  </div>
                  {/* <div className="col-span-full sm:col-span-1">
                  <label htmlFor="hero_city" className="text-gray-800 text-sm block mb-2">
                    Current City
                  </label>
                <input
                    id="hero_city"
                    name="city"
                    type="text"
                    placeholder="Enter City"
                    className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#00BE5D] text-gray-800"
                  required
                />
                </div> */}
                  <div className="col-span-full sm:col-span-1">
                    <label htmlFor="hero_email" className="text-gray-800 text-sm block mb-2">
                      Email
                    </label>
                    <input
                      id="hero_email"
                      name="email"
                      type="email"
                      placeholder="Enter Email"
                      className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#00BE5D] text-gray-800"
                      required
                    />
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="hero_country" className="text-gray-800 text-sm block mb-2">
                      Current Country
                    </label>
                    <select
                      id="hero_country"
                      name="country"
                      className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#00BE5D] text-gray-800"
                      required
                    >
                      <option value="">Select Country</option>
                      <option value="India">India</option>
                      <option value="USA">United States</option>
                      <option value="UAE">United Arab Emirates</option>
                      <option value="UK">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Other">Other Country</option>
                    </select>
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="hero_investment_type" className="text-gray-800 text-sm block mb-2">
                      Type of Unclaimed Investment
                    </label>
                    <select
                      id="hero_investment_type"
                      name="type_of_unclaimed_investments"
                      className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#00BE5D] text-gray-800"
                      required
                    >
                      <option value="">Select type</option>
                      {(options?.type_of_unclaimed_investments ?? INVESTMENT_TYPES).map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="hero_callback_time" className="text-gray-800 text-sm block mb-2">
                      Preferred Callback Time (IST)
                    </label>
                    <select
                      id="hero_callback_time"
                      name="preferred_callback_time"
                      className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#00BE5D] text-gray-800"
                      required
                    >
                      <option value="">Select time slot</option>
                      {(options?.preferred_callback_time ?? CALLBACK_TIMES).map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-full">
                    <input
                      type="checkbox"
                      id="hero_agree"
                      name="agree"
                      className="w-4 h-4 mr-2 accent-[#00BE5D] cursor-pointer"
                      required
                    />
                    <label htmlFor="hero_agree" className="text-sm text-gray-800">
                      I agree to receive updates on email or phone.
                    </label>
                  </div>
                  <div className="col-span-full">
                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="text-white w-full bg-[#00BE5D] border border-[#00BE5D] tracking-wide rounded-md text-sm px-6 py-3 mt-2 hover:bg-[#008C44] hover:border-[#008C44] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {formSubmitting ? "Sending…" : "Get Free Consultation"}
                    </button>
                  </div>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                  <p>Your information is secure & confidential</p>
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
                  ₹<Counter target={100} />+ Cr
                </h3>
                <p className="text-[#1a3a1f] font-semibold mt-2">Amount Recovered</p>
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
                <p className="text-[#1a3a1f] font-semibold mt-2">Countries Served</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= NRI SERVICES INTRO ================= */}
        <section className="py-16 px-4 bg-white animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:80ms]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:120ms]">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                  NRI Services – Recover Your Financial Assets from India
                </h2>
                <p className="text-xl text-[#00BE5D] font-semibold mb-6">
                  Reclaim What&apos;s Rightfully Yours, Even While Living Abroad
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Living overseas shouldn&apos;t mean losing access to your hard-earned investments in India. ClearClaim assists Non-Resident Indians (NRIs) in recovering unclaimed financial assets like shares, dividends, bank accounts, mutual funds, and much more without needing you to return to India.
                </p>
                <p className="text-lg text-gray-600">
                  We already support NRI clients living in the USA, UAE, UK, Canada, Australia, and Singapore, handling the entire recovery process from start to finish remotely, from paperwork to final credit. You stay updated, and we handle the hassles.
                </p>
              </div>
              <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:200ms]">
                <Image
                  src={nriabout}
                  alt="NRI discussing financial matters"
                  fill
                  className="object-cover"
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

        {/* ================= WHY NRIs NEED ASSET RECOVERY ================= */}
        <section className="py-16 px-4 bg-gradient-to-r from-[#f0f9ff] to-[#e6f7ed] animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:160ms]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800">
              Why NRIs Often Need Asset Recovery Services
            </h2>
            <p className="text-lg text-gray-600 text-center mb-6 max-w-3xl mx-auto">
              When individuals relocate to other countries, their financial investments in India are left unattended. Over time, these investments can become dormant or unclaimed due to outdated contact information, lack of follow-through, or changes in regulations.
            </p>
            <p className="text-lg font-semibold text-gray-800 mb-4 text-center">Typical unclaimed assets include:</p>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#00BE5D] animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:200ms]">
                <div className="w-12 h-12 bg-[#00BE5D]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl"><Image src={growth} alt="Shares" width={24} height={24} /></span>
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-3">Unclaimed Shares & Dividends</h3>
                <p className="text-gray-600">Shares and dividends transferred to government bodies</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#00BE5D] animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:280ms]">
                <div className="w-12 h-12 bg-[#00BE5D]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl"><Image src={bank} alt="Bank" width={24} height={24} /></span>
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-3">Dormant Bank Accounts</h3>
                <p className="text-gray-600">Dormant savings accounts or fixed deposits</p>
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
              <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
                Without an in-country presence, such assets can remain stranded for years. At ClearClaim, we are experts at tracking down and recovering them on your behalf, ensuring that nothing that belongs to you is left behind.
              </p>
            </div>
          </div>
        </section>

        {/* ================= OUR NRI ASSET RECOVERY SERVICES ================= */}
        <section className="py-16 px-4 bg-white animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:240ms]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
              Our NRI Asset Recovery Services
            </h2>

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
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              How Our NRI Recovery Process Works
            </h2>

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

            <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:400ms]">
              <p className="text-xl">
                ClearClaim manages everything end-to-end, saving you from confusing regulations, paperwork, and long waiting periods.
              </p>
            </div>
          </div>
        </section>

        {/* ================= WHY NRIs TRUST CLEARCLAIM ================= */}
        <section className="py-16 px-4 bg-white animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:400ms]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
              Why NRIs Trust ClearClaim
            </h2>

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
              <a href="#form" className="inline-block bg-[#00BE5D] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#008C44] transition text-lg shadow-lg hover:shadow-xl">
                Schedule a Call with Our NRI Expert
              </a>
            </div>
          </div>
        </section>

        {/* ================= FAQs with Images ================= */}
        <section className="py-16 px-4 bg-gradient-to-br from-[#f8fdf9] to-[#e6f7ed] animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:480ms]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards]"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <button
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50/50 transition"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#00BE5D]/10 text-[#00BE5D] flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <h3 className="font-bold text-lg text-gray-800 flex-1">{faq.question}</h3>
                    </div>
                    {expandedFaqs[index] ? (
                      <ChevronUp />
                    ) : (
                      <ChevronDown />
                    )}
                  </button>

                  {expandedFaqs[index] && (
                    <div className="p-6 pt-0 border-t border-gray-100">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="lg:w-2/3">
                          <p className="text-gray-600 mb-4">{faq.answer}</p>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span className="w-2 h-2 bg-[#00BE5D] rounded-full"></span>
                            <span>NRI Recovery Specialist</span>
                          </div>
                        </div>
                        <div className="lg:w-1/3">
                          <div className="relative h-48 rounded-lg overflow-hidden">
                            <Image
                              src={faq.image}
                              alt={faq.question}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 33vw"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:400ms]">
              <p className="text-gray-600 mb-4">Have more questions about NRI recovery?</p>
              <a
                href="tel:+919156701900"
                className="inline-flex items-center gap-2 bg-[#00BE5D] text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg"
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
        <section className="py-16 px-4 bg-white animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:560ms]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards] [animation-delay:0ms]">
              <h2 className="md:text-3xl text-xl font-semibold text-[#1a3a1f]">
                Google Reviews That <span className="text-[#00BE5D]">Speak for Themselves</span>
              </h2>
              <p className="text-gray-600 mt-2">See what our NRI clients say about us</p>
            </div>

            <div className="relative">
              {/* Mobile: Show limited testimonials with Load More */}
              <div className="md:hidden flex flex-col gap-6 px-4">
                {reviews.slice(0, visibleCount).map((review, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col hover:shadow-lg transition-shadow animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards]"
                    style={{ animationDelay: `${index * 60}ms` }}
                    role="article"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {review.name}
                      </h3>
                      <Image src={google} alt="Google" width={48} height={24} />
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{review.date}</p>
                    {renderStars(review.stars)}
                    <p className="text-gray-700 text-sm flex-1">
                      {expandedReviews[index]
                        ? review.content
                        : `${review.content.substring(0, 120)}...`}
                    </p>
                    <button
                      className="mt-2 text-[#00BE5D] text-sm font-semibold hover:underline self-start"
                      onClick={() => toggleReadMore(index)}
                    >
                      {expandedReviews[index] ? "Read Less" : "Read More"}
                    </button>
                  </div>
                ))}
                {visibleCount < reviews.length && (
                  <button
                    onClick={loadMore}
                    className="mt-4 px-6 py-3 bg-[#00BE5D] text-white rounded-lg font-semibold hover:bg-[#008C44] transition-colors self-center shadow-md hover:shadow-lg"
                  >
                    Load More Reviews
                  </button>
                )}
              </div>

              {/* Desktop: Show all reviews in scrollable container */}
              <div className="hidden md:block h-[500px] overflow-y-scroll rounded-xl bg-gradient-to-br from-gray-50 to-white p-6 shadow-inner">
                <div className="grid grid-cols-3 gap-6">
                  {reviews.map((review, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col hover:shadow-lg transition-shadow animate-fade-in-up-light opacity-0 [animation-fill-mode:forwards]"
                      style={{ animationDelay: `${index * 50}ms` }}
                      role="article"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {review.name}
                        </h3>
                        <Image src={google} alt="Google" width={48} height={24} />
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{review.date}</p>
                      {renderStars(review.stars)}
                      <p className="text-gray-700 text-sm flex-1">
                        {expandedReviews[index]
                          ? review.content
                          : `${review.content.substring(0, 100)}...`}
                      </p>
                      <button
                        className="mt-2 text-[#00BE5D] text-sm font-semibold hover:underline self-start"
                        onClick={() => toggleReadMore(index)}
                      >
                        {expandedReviews[index] ? "Read Less" : "Read More"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Reclaim Your Assets?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Don&apos;t let your investments remain forgotten. Whether you&apos;re living in the USA, UAE, UK, Canada, Australia, Singapore, or elsewhere, ClearClaim has the expertise to help you recover your Indian financial assets securely and efficiently.
            </p>
            <p className="text-lg text-white/90 mb-8">
              Start with a free case evaluation today and find out what you may be entitled to.
            </p>
            <a
              href="#form"
              className="inline-block bg-white text-[#00BE5D] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg shadow-xl hover:shadow-2xl mb-12"
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

            <div className="mt-8 text-sm text-white/80">
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
"use client";

import React, { useState, useRef, useEffect } from "react";
import aiimg from "../../../public/images/AI-img.png";
import Image from "next/image";
import { motion } from "framer-motion";
import tick from "../../../public/images/tick.svg";
import google from '../../../public/images/google.webp'
import { ChevronLeft, ChevronRight, Settings } from "lucide-react";

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

  const formRefTestimonial = useRef<HTMLFormElement>(null);
  const [showToastTestimonial, setShowToastTestimonial] = useState(false);
  const [messageTestimonial, setMessageTestimonial] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);

  const handleSubmitTestimonial = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRefTestimonial.current || formSubmitting) return;

    const form = formRefTestimonial.current;
    const payload = {
      name: (form.querySelector('[name="name"]') as HTMLInputElement)?.value?.trim() ?? "",
      email: (form.querySelector('[name="email"]') as HTMLInputElement)?.value?.trim() ?? "",
      subject: (form.querySelector('[name="subject"]') as HTMLInputElement)?.value?.trim() ?? "",
      message: (form.querySelector('[name="message"]') as HTMLTextAreaElement)?.value?.trim() ?? "",
    };

    setFormSubmitting(true);
    fetch(formApi, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText || "Request failed");
        return res.json();
      })
      .then(() => {
        setMessageTestimonial("Your message has been sent successfully!");
        setShowToastTestimonial(true);
        if (formRefTestimonial.current) formRefTestimonial.current.reset();
        setTimeout(() => setShowToastTestimonial(false), 3000);
      })
      .catch(() => {
        setMessageTestimonial("There was an error sending your message. Please try again.");
        setShowToastTestimonial(true);
        setTimeout(() => setShowToastTestimonial(false), 3000);
      })
      .finally(() => setFormSubmitting(false));
  };






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


  const steps = [
    "Find your real worth of shares",
    "Know your exact claim type of shares",
    "Get exclusive consultation from experts",
    "Accurate documentation of your claim",
    "Get your shares in your DEMAT",
    "Superior Follow-up of your claim",
  ];

  return (
    <>
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
          <div className="relative mb-16">
            <h2 className="text-3xl sm:text-4xl text-center md:text-5xl font-extrabold text-[#283655] tracking-tight leading-tight">
              What{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a3a1f] via-[#2d5a34] to-[#00BE5D]">
                Client Say
              </span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#1a3a1f] to-[#00BE5D] mx-auto mt-6 rounded-full opacity-40 mb-16"></div>
          </div>

          {/* Video Banner */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-3xl h-[280px] md:h-[380px] rounded-[32px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.15)] group transition-transform duration-500 hover:scale-[1.01]">

              {/* YouTube */}
              <iframe
                src="https://www.youtube.com/embed/yagxF8loMrM"
                title="Client Testimonial"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>

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

              {/* Badge */}
              <div className="absolute top-8 left-8 bg-[#00BE5D] text-white text-[10px] md:text-xs font-bold tracking-widest uppercase px-6 py-2.5 rounded-full shadow-2xl z-10 border border-white/20 backdrop-blur-sm pointer-events-none">
                1000+ shares recovered
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Testimonials */}
      {reviews.length > 0 && (
        <section className="py-20 px-4  overflow-hidden">
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
                    <p className="text-gray-600 lg:text-xl font-medium text-lg md:text-lg max-w-lg leading-relaxed  flex-1">
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
                              {expandedReviews[index]
                                ? review.content
                                : review.content.length > 180
                                  ? `“${review.content.substring(0, 180)}...”`
                                  : `“${review.content}”`
                              }
                              {review.content.length > 180 && (
                                <button
                                  className={`ml-2 font-semibold border-b border-current py-0 text-xs ${isActive ? "text-white/100" : "text-[#00BE5D]"}`}
                                  onClick={() => toggleReadMore(index)}
                                >
                                  {expandedReviews[index] ? "Read Less" : "Read More"}
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
                    <div className="flex-shrink-0 w-6 h-6  bg-[#] flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
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

      {/* Request call back form */}
      <div
        className="relative py-6 sm:py-8 lg:py-12 max-md:px-4 bg-cover bg-center  overflow-hidden"
        style={{ backgroundImage: "url('/images/paper_img.png')" }}
      >
        {/* Dark gradient overlay as requested */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00BE5D]/80 via-[#1f7a4a]/90 to-[#2F2F2F] backdrop-blur-[1px]"></div>

        {/* <div className="lg:max-w-6xl max-w-xl mx-auto"> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
          <div className="grid lg:grid-cols-[1.3fr_1fr] items-center gap-12 lg:gap-16">

            {/* Left Side: Form Section (IEPF API) */}
            <div className="flex bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-100 items-center lg:ml-auto min-h-[500px] w-full md:w-[450px] mx-auto py-0 sm:py-6 relative shadow-2xl">
              {showToastTestimonial && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-[#00BE5D] text-white py-2 px-6 rounded-md shadow-md w-[90%] max-w-[400px] text-center text-sm z-10 font-semibold">
                  {messageTestimonial}
                </div>
              )}
              <form
                ref={formRefTestimonial}
                className="max-w-lg p-6 sm:p-8 mx-auto w-full"
                onSubmit={handleSubmitTestimonial}
              >
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-800 leading-tight">
                    Talk to experts – <span className="text-[#00BE5D]">FREE</span>
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Share your details and we’ll get back to you shortly.
                  </p>
                </div>

                <label className="sr-only" htmlFor="testimonial-name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="testimonial-name"
                  placeholder="Name"
                  autoComplete="name"
                  required
                  className="w-full mb-4 text-gray-800 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#00BE5D] bg-white transition-all"
                />

                <label className="sr-only" htmlFor="testimonial-email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="testimonial-email"
                  placeholder="Email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  className="w-full mb-4 text-gray-800 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#00BE5D] bg-white transition-all"
                />

                <label className="sr-only" htmlFor="testimonial-subject">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="testimonial-subject"
                  placeholder="Subject"
                  autoComplete="off"
                  required
                  className="w-full mb-4 text-gray-800 rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#00BE5D] bg-white transition-all"
                />

                <label className="sr-only" htmlFor="testimonial-message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="testimonial-message"
                  placeholder="Message"
                  rows={4}
                  required
                  className="w-full mb-4 text-gray-800 rounded-md px-4 border border-gray-300 text-sm pt-2.5 outline-[#00BE5D] bg-white resize-y transition-all"
                  defaultValue={""}
                />
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full sm:w-max shadow-lg py-3 px-8 text-sm text-white font-bold rounded-md bg-[#00BE5D] hover:bg-[#008C44] transition-all focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formSubmitting ? "Sending…" : "Get Free Consulting"}
                </button>
              </form>
            </div>

            {/* Right Side: Text Content */}
            <div className="text-left flex flex-col justify-center   max-md:px-4">
              <div className="text-white mb-6">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">India’s No.1 Shares Recovery Experts</h2>
              </div>
              <ul className="space-y-6 mt-8 text-white text-lg lg:text-xl font-medium ">
                <li className="flex gap-3">
                  <Image src={tick} alt="clearclaim" className="w-5 h-6 " /> Old shares and dividends recovery
                </li>
                <li className="flex gap-3">
                  <Image src={tick} alt="clearclaim" className="w-5 h-6" /> Physical shares to DEMAT conversion
                </li>
                <li className="flex gap-3">
                  <Image src={tick} alt="clearclaim" className="w-5 h-6" /> Transmission of shares for death claims
                </li>
                <li className="flex gap-3">
                  <Image src={tick} alt="clearclaim" className="w-5 h-6" /> Recovery of lost shares
                </li>
                <li className="flex gap-3">
                  <Image src={tick} alt="clearclaim" className="w-5 h-6" /> Issue of duplicate shares
                </li>
                <li className="flex gap-3">
                  <Image src={tick} alt="clearclaim" className="w-5 h-6" /> IEPF claims of shares
                </li>
                <li className="flex gap-3">
                  <Image src={tick} alt="clearclaim" className="w-5 h-6" /> IEPF claim of dividends
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

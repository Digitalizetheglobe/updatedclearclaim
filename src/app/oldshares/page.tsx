"use client";

import { useEffect, useState, FormEvent, createElement, type ReactNode } from "react";
import { Archivo, JetBrains_Mono, Caveat } from "next/font/google";
import emailjs from "emailjs-com";

const EMAILJS_SERVICE_ID = "service_4fca0ux";
const EMAILJS_TEMPLATE_ID = "template_0esr8bw";
/** EmailJS Account → Public Key (or set NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) */
const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "YOUR_EMAILJS_PUBLIC_KEY";

/** Google Apps Script Web App — appends leads to Google Sheet */
const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxzKwmCsmMghIzzHQFq6t1Z1PylJ-nmOfeEksDnUxvH3dVmzlmanzibTbcvZBYAf2pX/exec";

const CASE_TYPE_LABELS: Record<string, string> = {
  old_certificates: "I have old physical share certificates",
  deceased_family: "A family member passed away with shares",
  unsure: "I am unsure of the category",
};

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono-os",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

/* ─── Image placeholders — drop files into /public/images/oldshares/ ─── */
const IMG = {
  meera: "/images/oldshares/meera.png",
  rohit: "/images/oldshares/rohit.png",
  prakash: "/images/oldshares/prakash.png",
  hardik: "/images/oldshares/hardik.jpg",
  shrikant: "/images/oldshares/shrikant.jpg",
};

const TRUST_REVIEWS = [
  {
    name: "Meera K.",
    meta: "Mumbai · Recovered ₹22 lakh",
    img: IMG.meera,
    initial: "M",
    quote: (
      <>
        &ldquo;Found certificates from{" "}
        <b className="font-semibold text-slate-900">1987 in my late father&apos;s almirah</b>
        . The ClearClaim team valued them in 18 minutes and walked me through the IEPF route. I would have given up without them.&rdquo;
      </>
    ),
  },
  {
    name: "Rohit Agarwal",
    meta: "Pune · Recovered ₹11 lakh",
    img: IMG.rohit,
    initial: "R",
    quote: (
      <>
        &ldquo;I had spent{" "}
        <b className="font-semibold text-slate-900">₹40,000 on stamps and notary fees</b> getting
        nowhere. ClearClaim gave me a fixed quote in writing. No percentage commission. That alone made me trust them.&rdquo;
      </>
    ),
  },
  {
    name: "Prakash Venkatesh",
    meta: "Chennai · Recovered ₹19 lakh",
    img: IMG.prakash,
    initial: "P",
    quote: (
      <>
        &ldquo;My mother kept asking <i>&apos;beta, woh shares ka kya hua?&apos;</i> for 8 months.
        ClearClaim closed the case in{" "}
        <b className="font-semibold text-slate-900">under 5 hours of my time</b> across the entire
        process. WhatsApp updates at every step.&rdquo;
      </>
    ),
  },
];

const FEATURES = [
  {
    title: "2-Minute Submission",
    description:
      "Share certificate details from a phone or laptop. No appointments. No paperwork.",
    icon: (
      <svg className="w-[30px] h-[30px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "No Originals Required",
    description:
      "Originals stay in your safe. Our team works from a clear photo or scan at this stage.",
    icon: (
      <svg className="w-[30px] h-[30px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M4 7h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
        <path d="M9 4h6v3H9z" />
        <circle cx="12" cy="14" r="2" />
      </svg>
    ),
  },
  {
    title: "Verified Market Valuation",
    description:
      "Today's market price across NSE and BSE. Bonus and split history factored in. Not a guess.",
    icon: (
      <svg className="w-[30px] h-[30px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M14 7h7v7" />
      </svg>
    ),
  },
  {
    title: "Zero Commitment",
    description:
      "You see your number, your category, your path. Then you decide. No call required.",
    icon: (
      <svg className="w-[30px] h-[30px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 2L4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "WhatsApp Updates",
    description:
      "Plain-language status messages. No portal logins. No jargon. No ghosting.",
    icon: (
      <svg className="w-[30px] h-[30px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 21l2.1-5.1A8.5 8.5 0 1 1 21 11.5z" />
      </svg>
    ),
  },
  {
    title: "Fixed Fee Quote",
    description:
      "If you choose to proceed, you get a fixed price in writing. Never a percentage of recovery.",
    icon: (
      <svg className="w-[30px] h-[30px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18" />
        <path d="M8 15h4" />
      </svg>
    ),
  },
];

const BENEFITS = [
  {
    title: "Real Numbers Before You Spend Anything",
    description:
      'Most "DIY" families spend ₹40,000+ on stamps, notary, and consultants before knowing if recovery is even worth it. ClearClaim gives you the value first, free.',
  },
  {
    title: "Originals Stay In Your Safe Until A Signed Agreement",
    description:
      "You never courier originals based on a phone call. Documents move only after a written, signed service agreement is in your hands. Period.",
  },
  {
    title: "Fixed Fee, Not A Percentage Of Your Family's Wealth",
    description:
      "Most recovery agents take 15% to 30% of what they recover. On ₹41 lakh, that is ₹6 to 12 lakh. Our quote is a fixed number in writing. You decide if it is fair.",
  },
  {
    title: "Plain-Language Checklists, Not Legal Jargon",
    description:
      "You get a one-page checklist in English (or Hindi if requested) of exactly what is needed at each stage. No CA glossary. No surprise stamp paper trips.",
  },
  {
    title: "Most Recovery Cases Need Under 5 Hours Of Your Time",
    description:
      "Across the entire recovery, end to end. Mostly WhatsApp messages, document signatures, and one or two video calls if the case needs them.",
  },
  {
    title: "One Specialised Team. Not A Generalist Lawyer Or CA.",
    description:
      "The IEPF and RTA process was designed for full-time professionals. We are full-time professionals. We file these every day. Generalists were never built for this.",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Submit Certificate Details",
    description:
      "Snap a photo or scan. Share folio numbers, company names, holder details. No originals. No couriers. Two minutes total.",
  },
  {
    n: "2",
    title: "Receive Your Valuation Report",
    description:
      "Within 24 hours you get the current market value, the underlying companies, and the claim category your case falls into. In plain English on WhatsApp.",
  },
  {
    n: "3",
    title: "Decide On Your Timeline",
    description:
      "Sit on it. DIY with our roadmap. Or hire ClearClaim full recovery on a fixed fee. Your call. No pressure. No follow-up sequence.",
  },
];

const FAMILY_REVIEWS = [
  {
    title: "The valuation was the unlock.",
    quote:
      "I had no idea my mother's 1994 certificates were worth almost ₹18 lakh. ClearClaim gave me a clear number and the IEPF route in under a day. I would have never started without that report.",
    name: "Suresh V.",
    meta: "IT Manager, Delhi",
    initial: "S",
  },
  {
    title: "Fixed fee. No percentage drama.",
    quote:
      'Three other "consultants" wanted 22% to 28% of recovery. ClearClaim quoted a fixed ₹28,000 in writing before I shared a single original. That is the only honest pricing I saw in this category.',
    name: "Meenakshi R.",
    meta: "Operations Head, Mumbai",
    initial: "M",
  },
  {
    title: "WhatsApp updates kept me sane.",
    quote:
      "Three of us siblings, two cities, one in Toronto. ClearClaim used a single WhatsApp group, posted milestone updates, and we always knew where the case was. Closed it in 11 weeks.",
    name: "Kiran Deshpande",
    meta: "Jaipur",
    initial: "K",
  },
  {
    title: "They told me I did not need them.",
    quote:
      'My case was simple RTA-only. The recovery team said outright: "you can do this yourself, here are the 4 steps." Honest enough that I came back two months later for a more complex IEPF case.',
    name: "Lakshmi Narayanan",
    meta: "Pune",
    initial: "D",
  },
];

const inputClass =
  "w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-[15px] text-[#161d34] outline-none focus:border-[#00BE5D] focus:ring-2 focus:ring-[#00BE5D]/20 transition";

function Stars({ className = "text-[#16a34a]", size = 14 }: { className?: string; size?: number }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      ))}
    </div>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-[family-name:var(--font-mono-os)] text-[11px] font-bold tracking-[0.16em] uppercase text-[#00BE5D] mb-3 flex items-center gap-2">
      <span className="text-[#00BE5D]">◆</span> {children}
    </p>
  );
}

function CtaButton({
  children,
  onClick,
  className = "",
  variant = "green",
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "green" | "blue" | "dark";
}) {
  const styles =
    variant === "blue"
      ? {
          background: "linear-gradient(180deg, #3D6FF0 0%, #2450C4 100%)",
          boxShadow: "0 4px 0 #173A8F, 0 8px 24px rgba(61,111,240,0.42), inset 0 1px 0 rgba(255,255,255,0.28)",
        }
      : variant === "dark"
        ? {
            background: "linear-gradient(180deg, #0F1F14 0%, #00301A 100%)",
            boxShadow: "0 4px 0 #001a0e, 0 8px 24px rgba(0,48,26,0.35), inset 0 1px 0 rgba(255,255,255,0.12)",
          }
        : {
            background: "linear-gradient(180deg, #00BE5D 0%, #008B45 100%)",
            boxShadow: "0 4px 0 #00582C, 0 8px 24px rgba(0,190,93,0.35), inset 0 1px 0 rgba(255,255,255,0.28)",
          };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2.5 text-white font-extrabold text-[16px] sm:text-[17px] px-8 py-[16px] rounded-full transition-all hover:-translate-y-0.5 ${className}`}
      style={styles}
    >
      {children}
    </button>
  );
}

function PersonAvatar({
  src,
  initial,
  alt,
  size = 48,
  rounded = "full",
}: {
  src: string;
  initial: string;
  alt: string;
  size?: number;
  rounded?: "full" | "2xl";
}) {
  const [failed, setFailed] = useState(false);
  const radius = rounded === "2xl" ? "rounded-2xl" : "rounded-full";

  if (failed) {
    return (
      <div
        className={`${radius} bg-[#E9F8E7] text-[#008B45] font-extrabold flex items-center justify-center shrink-0`}
        style={{ width: size, height: size, fontSize: size * 0.38 }}
        aria-label={alt}
      >
        {initial}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`${radius} object-cover shrink-0`}
      style={{ width: size, height: size }}
      onError={() => setFailed(true)}
    />
  );
}

export default function OldSharesPage() {
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [showSocialProof, setShowSocialProof] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    case: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const openForm = () => setShowForm(true);
  const closeForm = () => {
    setShowForm(false);
    setErrors({});
  };

  const resetForm = () =>
    setForm({ name: "", phone: "", email: "", case: "", message: "", website: "" });

  useEffect(() => {
    const player = document.createElement("script");
    player.src = "https://fast.wistia.com/player.js";
    player.async = true;
    const embed = document.createElement("script");
    embed.src = "https://fast.wistia.com/embed/s242w29jyn.js";
    embed.async = true;
    embed.type = "module";
    document.body.appendChild(player);
    document.body.appendChild(embed);
    return () => {
      player.remove();
      embed.remove();
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setShowSocialProof(true), 3500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!showSocialProof) return;
    const t = setTimeout(() => setShowSocialProof(false), 6000);
    return () => clearTimeout(t);
  }, [showSocialProof]);

  useEffect(() => {
    if (showForm) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showForm]);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please enter your name";
    if (!form.phone.trim() || !/^\d{7,14}$/.test(form.phone.replace(/\D/g, "")))
      next.phone = "Enter a valid phone number";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email";
    if (!form.case) next.case = "Please select your situation";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (form.website) return;
    if (!validate() || submitting) return;

    setSubmitting(true);
    try {
      const phone = form.phone.replace(/\D/g, "");
      const caseLabel = CASE_TYPE_LABELS[form.case] ?? form.case;
      const fullName = form.name.trim();
      const email = form.email.trim();
      const message = form.message.trim() || "—";

      // 1) Save lead to Google Sheet via Apps Script Web App
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          full_name: fullName,
          email,
          phone,
          case_type: caseLabel,
          message,
        }),
      });

      // 2) Also notify via EmailJS (non-blocking if key missing)
      if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== "YOUR_EMAILJS_PUBLIC_KEY") {
        try {
          await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
              "Full Name": fullName,
              Email: email,
              Phone: phone,
              "Case type": caseLabel,
              Message: message,
              full_name: fullName,
              email,
              phone,
              case_type: caseLabel,
              message,
            },
            EMAILJS_PUBLIC_KEY
          );
        } catch {
          // Sheet save already succeeded — ignore email errors
        }
      }

      setToast(
        "Thank you for your response. Our representative will contact you shortly."
      );
      resetForm();
      setShowForm(false);
    } catch {
      setToast(
        "Could not submit right now. Please call +91 9156701900 or email sales@clearclaim.in."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className={`${archivo.variable} ${jetbrains.variable} ${caveat.variable} ${archivo.className} bg-[#FAFAF7] text-[#161d34] text-[17px] leading-relaxed`}
    >
      {/* ═══════════ HERO ═══════════ */}
      <section
        id="top"
        className="relative overflow-hidden py-12 pb-16 sm:py-20"
        style={{
          background: `
            radial-gradient(ellipse at top right, rgba(0,190,93,0.10), transparent 55%),
            radial-gradient(ellipse at bottom left, rgba(103,142,240,0.06), transparent 55%),
            #fff
          `,
        }}
      >
        <style>{`
          @keyframes pulse-dot-red {
            0%, 100% { box-shadow: 0 0 0 0 rgba(217, 45, 58, 0.45); }
            50% { box-shadow: 0 0 0 8px rgba(217, 45, 58, 0); }
          }
          .pulse-dot-red { animation: pulse-dot-red 1.6s ease-out infinite; }
          @keyframes blink-glow {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 4px 0 #173A8F, 0 8px 24px rgba(61, 111, 240, 0.5), 0 0 0 0 rgba(61, 111, 240, 0.6);
            }
            50% {
              transform: scale(1.05);
              box-shadow: 0 4px 0 #173A8F, 0 14px 32px rgba(61, 111, 240, 0.8), 0 0 0 16px rgba(61, 111, 240, 0);
            }
          }
          .blink-btn {
            animation: blink-glow 2s ease-in-out infinite;
          }
          wistia-player[media-id='s242w29jyn']:not(:defined) {
            background: center / cover no-repeat url('https://fast.wistia.com/embed/medias/s242w29jyn/swatch');
            display: block;
            filter: blur(5px);
            padding-top: 56.25%;
          }
        `}</style>

        <div className="max-w-full mx-auto px-4 sm:px-6">
          <div className="text-center">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2.5 mb-6 px-4 sm:px-[18px] py-[9px] rounded-full font-[family-name:var(--font-mono-os)] text-[11px] tracking-[0.14em] uppercase font-semibold"
              style={{
                background: "#FDECEE",
                color: "#C42330",
                border: "1px solid rgba(217,45,58,0.22)",
              }}
            >
              <span
                className="w-2 h-2 sm:w-2 sm:h-2 rounded-full pulse-dot-red flex-shrink-0"
                style={{ background: "#D92D3A" }}
              />
              Share Recovery Specialists For Forgotten Share Certificates
            </div>

            {/* Headline */}
            <h1 className="font-black tracking-tight leading-[1.05] text-[#161d34] text-[clamp(32px,5.5vw,64px)] mb-5 max-w-[1000px] mx-auto">
              Your Parents&apos; Old Share Certificates Could Be{" "}
              <em className="text-[#00984A] not-italic">Worth Lakhs Today</em>
              . Find Out In 2 Minutes, Free.
            </h1>

            {/* Subhead */}
            <p className="text-[17px] sm:text-[19px] text-slate-600 max-w-[700px] mx-auto mb-9 leading-relaxed">
              Submit your old certificate details to the ClearClaim team. We tell you the current
              market value, what kind of claim applies, and the path forward.{" "}
              <b className="text-[#161d34] font-semibold">
                No original documents required. No commitment.
              </b>
            </p>

            {/* Video frame */}
            <div
              className="max-w-[920px] mx-auto relative p-3.5 rounded-[20px] shadow-lg border border-[#00BE5D]/20"
              style={{ background: "linear-gradient(180deg, #D4EFD5, #EAF7E9)" }}
            >
              {/* watch this annotation */}
              <div className="hidden md:flex flex-col items-start absolute -top-[58px] left-[3%] z-20 pointer-events-none select-none -rotate-[7deg]">
                <span
                  className={`${caveat.className} font-bold text-[#00984A] leading-none ml-1 text-[40px]`}
                  style={{ textShadow: "0 1px 0 rgba(255,255,255,0.7)" }}
                >
                  watch this
                </span>
                <svg width="92" height="66" viewBox="0 0 92 66" fill="none" className="-mt-1" aria-hidden>
                  <path d="M12 8 C 46 2, 86 16, 70 60" stroke="#00984A" strokeWidth="5" strokeLinecap="round" fill="none" />
                  <path d="M52 50 L71 62 L82 42" stroke="#00984A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>

              <div className="relative rounded-xl overflow-hidden bg-[#161d34] aspect-video shadow-[0_8px_24px_rgba(22,29,52,0.22)]">
                {createElement("wistia-player", {
                  "media-id": "s242w29jyn",
                  aspect: "1.7777777777777777",
                  style: { display: "block", width: "100%", height: "100%" },
                })}
              </div>
            </div>

            {/* CTA + trust markers */}
            <div className="flex flex-col items-center gap-3.5 mt-9">
              <CtaButton onClick={openForm} variant="blue">
                Get My Free Valuation
              </CtaButton>
              <div className="font-[family-name:var(--font-mono-os)] text-[12px] sm:text-[11px] tracking-[0.14em] uppercase text-[#5F6E66] flex flex-wrap justify-center gap-x-1 gap-y-1">
                <span>
                  <span className="text-[#00BE5D] font-bold mr-1">✓</span>No documents required
                </span>
                <span className="mx-1 hidden sm:inline">·</span>
                <span>
                  <span className="text-[#00BE5D] font-bold mr-1">✓</span>No commitment
                </span>
                <span className="mx-1 hidden sm:inline">·</span>
                <span>
                  <span className="text-[#00BE5D] font-bold mr-1">✓</span>2-minute submission
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TRUST TESTIMONIALS ═══════════ */}
      <section className="py-14 sm:py-16" style={{ background: "#F5F8F6" }}>
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <Stars className="text-[#16a34a]" size={16} />
            </div>
            <h2 className="text-[22px] sm:text-[28px] font-bold text-[#161d34] max-w-[720px] mx-auto leading-snug">
              See why{" "}
              <span className="text-[#15803d] font-medium">1,250+ Indian families</span> trust
              ClearClaim&apos;s recovery specialists to find their number first
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-9">
            {TRUST_REVIEWS.map((r) => (
              <div
                key={r.name}
                className="bg-white border border-black/10 rounded-2xl p-6 flex flex-col shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div className="text-[#16a34a] text-sm tracking-[2px] mb-3">
                  <Stars className="text-[#16a34a]" size={13} />
                </div>
                <p className="text-[15px] text-slate-700 leading-relaxed mb-5 flex-1">{r.quote}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                  <div className="rounded-full border-[3px] border-white shadow-lg shrink-0 overflow-hidden">
                    <PersonAvatar src={r.img} initial={r.initial} alt={r.name} size={52} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-slate-900">{r.name}</div>
                    <div className="text-xs text-slate-500">{r.meta}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ WHAT WE DO ═══════════ */}
      <section className="py-[88px] bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-4">
            <span className="font-[family-name:var(--font-mono-os)] text-[11px] tracking-[0.16em] uppercase text-[#00984A] font-medium inline-block mb-3.5">
              ◆ What Our Recovery Team Does
            </span>
            <h2 className="font-black text-[clamp(30px,4vw,48px)] tracking-tight text-[#161d34] mb-3.5 leading-[1.1]">
              Everything Is Just You Need To Find Your Number,{" "}
              <em className="italic">Before</em> You Commit To Anything
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 mt-12">
            {FEATURES.map((f) => (
              <div key={f.title} className="text-center px-2">
                <div className="w-[72px] h-[72px] mx-auto mb-[18px] bg-gradient-to-b from-[#EAF7E9] to-[#D4EFD5] rounded-[18px] flex items-center justify-center border border-[#00BE5D]/20 shadow-[0_6px_16px_rgba(0,190,93,0.10)] text-[#00984A]">
                  {f.icon}
                </div>
                <h4 className="font-bold text-[16px] text-[#161d34] mb-1.5">{f.title}</h4>
                <p className="text-[14px] text-[#8590A0] leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ STEP ONE · FIND YOUR NUMBER ═══════════ */}
      <section className="bg-[#EAF7E9] py-24">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-[family-name:var(--font-mono-os)] text-[11px] tracking-[0.16em] uppercase text-[#00984A] font-medium inline-block mb-3.5">
                ◆ Step One · Find Your Number
              </span>
              <h2 className="font-black text-[clamp(30px,4vw,48px)] tracking-tight text-[#161d34] mb-5 mt-3.5 leading-[1.1]">
                Discover What Your Certificates Are{" "}
                <em className="italic">Actually</em> Worth Today
              </h2>
              <p className="text-[17px] text-[#4A5468] leading-relaxed mb-3.5">
                Most families have no idea. Some are sitting on{" "}
                <b className="text-[#161d34] font-semibold">₹4 lakh</b>. Some are sitting on{" "}
                <b className="text-[#161d34] font-semibold">₹41 lakh</b>. We have seen both in the same week.
              </p>
              <p className="text-[17px] text-[#4A5468] leading-relaxed mb-3.5">
                Our valuation team pulls live market data, factors in 30 years of bonus issues, splits, and amalgamations, and gives you the actual current value of what your father bought in 1991. Or 1987. Or 1995.
              </p>
              <p className="text-[17px] text-[#4A5468] leading-relaxed mb-3.5">
                You see one clean number. Plus the underlying companies. Plus what kind of claim category your case falls into (IEPF, RTA-only, or legal heir).
              </p>
              <p className="text-[17px] text-[#4A5468] leading-relaxed">
                <b className="text-[#161d34] font-semibold">Free. Before you agree to anything.</b>
              </p>
            </div>

            <div>
              <div className="bg-white border border-black/10 rounded-[18px] p-3.5 shadow-md -rotate-[1.2deg]">
                <div className="bg-gradient-to-br from-[#FAFFF6] to-[#E9F8E7] border-2 border-[#00984A] rounded-[10px] p-7 relative">
                  <div className="absolute top-[18px] right-[18px] w-[80px] h-[80px] border-[2.5px] border-[#00984A] text-[#00984A] rounded-full flex items-center justify-center flex-col font-[family-name:var(--font-mono-os)] text-[9px] tracking-[0.1em] -rotate-12 bg-white/60 text-center leading-tight font-bold">
                    UNCLAIMED
                    <br />
                    FOUND
                  </div>
                  <div className="text-center mb-3.5">
                    <div className="text-[22px] text-[#161d34] tracking-[0.08em] font-bold">
                      RELIANCE INDUSTRIES
                    </div>
                    <div className="font-[family-name:var(--font-mono-os)] text-[9px] tracking-[0.2em] text-[#00984A] uppercase mt-1 font-semibold">
                      Equity Share Certificate · 1991
                    </div>
                  </div>
                  <div className="flex justify-between font-[family-name:var(--font-mono-os)] text-[11px] text-[#283655] py-2 border-b border-dashed border-[#00984A]/30">
                    <span>Folio Number</span>
                    <span className="font-bold">R-04719</span>
                  </div>
                  <div className="flex justify-between font-[family-name:var(--font-mono-os)] text-[11px] text-[#283655] py-2 border-b border-dashed border-[#00984A]/30">
                    <span>Original Holding</span>
                    <span className="font-bold">100 Shares</span>
                  </div>
                  <div className="flex justify-between font-[family-name:var(--font-mono-os)] text-[11px] text-[#283655] py-2 border-b border-dashed border-[#00984A]/30">
                    <span>After 35 Years Of Splits & Bonus</span>
                    <span className="font-bold">2,560 Shares</span>
                  </div>
                  <div className="flex justify-between font-[family-name:var(--font-mono-os)] text-[11px] text-[#283655] py-2">
                    <span>Today&apos;s Market Value</span>
                    <span className="font-bold text-[#00984A]">₹32,84,800</span>
                  </div>
                  <div className="text-center mt-3.5 italic text-[14px] text-[#00984A]">
                    Sample valuation report
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ STEP TWO · SKIP THE MAZE ═══════════ */}
      <section className="bg-white py-24">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white border border-black/10 rounded-[18px] p-3.5 shadow-md rotate-[1.2deg]">
                <div className="bg-white rounded-[10px] overflow-hidden border border-black/10">
                  <div className="bg-[#161d34] px-3.5 py-2.5 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-[9px] h-[9px] rounded-full bg-[#ff5f57]" />
                      <span className="w-[9px] h-[9px] rounded-full bg-[#febc2e]" />
                      <span className="w-[9px] h-[9px] rounded-full bg-[#28c840]" />
                    </div>
                    <div className="flex-1 bg-white/10 text-[#5ee89a] font-[family-name:var(--font-mono-os)] text-[10px] px-2.5 py-1.5 rounded-md tracking-[0.06em]">
                      clearclaim.in/case/CC-04829
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center py-3 border-b border-black/5">
                      <span className="font-[family-name:var(--font-mono-os)] text-[11px] tracking-[0.1em] uppercase text-[#8590A0] font-medium">
                        Case ID
                      </span>
                      <span className="font-black text-[20px] text-[#161d34]">CC-04829</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-black/5">
                      <span className="font-[family-name:var(--font-mono-os)] text-[11px] tracking-[0.1em] uppercase text-[#8590A0] font-medium">
                        Companies Identified
                      </span>
                      <span className="font-black text-[20px] text-[#161d34]">3 of 3</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-black/5">
                      <span className="font-[family-name:var(--font-mono-os)] text-[11px] tracking-[0.1em] uppercase text-[#8590A0] font-medium">
                        Estimated Value
                      </span>
                      <span className="font-semibold text-[20px] text-[#00984A]">₹14,73,200</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-black/5">
                      <span className="font-[family-name:var(--font-mono-os)] text-[11px] tracking-[0.1em] uppercase text-[#8590A0] font-medium">
                        Claim Category
                      </span>
                      <span className="bg-[#EEF2FC] text-[#283655] px-2.5 py-1 rounded-full font-[family-name:var(--font-mono-os)] text-[10px] tracking-[0.1em] uppercase font-bold">
                        RTA-Only
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-[family-name:var(--font-mono-os)] text-[11px] tracking-[0.1em] uppercase text-[#8590A0] font-medium">
                        Originals Needed Now?
                      </span>
                      <span className="bg-[#D4EFD5] text-[#007038] px-2.5 py-1 rounded-full font-[family-name:var(--font-mono-os)] text-[10px] tracking-[0.1em] uppercase font-bold">
                        No
                      </span>
                    </div>
                    <div className="mt-[18px]">
                      <div className="bg-[#D4EFD5] rounded-full h-2.5 overflow-hidden relative">
                        <div
                          className="h-full relative rounded-full"
                          style={{
                            width: "62%",
                            background: "linear-gradient(90deg,#00984A,#00BE5D)",
                          }}
                        />
                      </div>
                      <div className="flex justify-between mt-2 font-[family-name:var(--font-mono-os)] text-[10px] tracking-[0.1em] uppercase text-[#8590A0]">
                        <span>Claim Review</span>
                        <span>62% · 14 min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <span className="font-[family-name:var(--font-mono-os)] text-[11px] tracking-[0.16em] uppercase text-[#00984A] font-medium inline-block mb-3.5">
                ◆ Step Two · Skip The Maze
              </span>
              <h2 className="font-black text-[clamp(30px,4vw,48px)] tracking-tight text-[#161d34] mb-5 mt-3.5 leading-[1.1]">
                Skip The IEPF-5 Form, The RTA Loops, And The Legal Heir Confusion
              </h2>
              <p className="text-[17px] text-[#4A5468] leading-relaxed mb-3.5">
                You already tried.{" "}
                <b className="text-[#161d34] font-semibold">DP ID. Client ID. Folio number.</b> The
                IEPF helpline that nobody answers. The company that bounces you back to the RTA. The
                RTA that bounces you back to the company.
              </p>
              <p className="text-[17px] text-[#4A5468] leading-relaxed mb-3.5">
                Our recovery team tells you exactly which of three categories your case falls into:
              </p>
              <div className="pl-[18px] border-l-[3px] border-[#00BE5D] text-[15px] text-[#283655] my-[18px] space-y-1">
                <p>
                  <b className="font-semibold">1. RTA-only.</b> Cleanest path. Often closes in 60 to
                  90 days.
                </p>
                <p>
                  <b className="font-semibold">2. IEPF claim.</b> Government-side filing. Documented
                  timeline.
                </p>
                <p>
                  <b className="font-semibold">3. Legal heir route.</b> Succession or transmission
                  needed first.
                </p>
              </div>
              <p className="text-[17px] text-[#4A5468] leading-relaxed">
                You walk away knowing what you have, what it is worth, and what it takes.{" "}
                <b className="text-[#161d34] font-semibold">
                  That clarity alone is worth the 2 minutes.
                </b>
              </p>

              <div className="mt-7 p-[18px] bg-[#EAF7E9] border-l-[3px] border-[#00BE5D] rounded-lg">
                <div className="mb-1.5">
                  <Stars className="text-[#00BE5D]" size={12} />
                </div>
                <p className="text-[15px] italic text-[#283655] mb-2 leading-relaxed">
                  &ldquo;Eight months I spent confused between CA and lawyer. The ClearClaim team
                  told me in one message it was a transmission case, not succession. Saved me ₹25,000
                  in wrong filings.&rdquo;
                </p>
                <div className="flex items-center gap-2.5 text-[13px] text-[#4A5468]">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4EFD5] to-[#EAF7E9] flex items-center justify-center font-black text-[14px] text-[#00984A]">
                    A
                  </div>
                  <div>
                    <b>Ananya R.</b> · Austin, TX
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip after Step Two */}
      <div className="py-12 bg-white text-center">
        <div className="max-w-[1180px] mx-auto px-6 flex flex-col items-center gap-3.5">
          <CtaButton onClick={openForm} variant="blue">
            Get My Free Share Valuation
          </CtaButton>
          <div className="font-[family-name:var(--font-mono-os)] text-[11px] tracking-[0.14em] uppercase text-[#8590A0]">
            <span className="text-[#00BE5D] font-bold mr-1">✓</span>
            Most families finish submission in under 2 minutes
          </div>
        </div>
      </div>

      {/* ═══════════ OLD WAY VS CLEARCLAIM ═══════════ */}
      <section className="bg-[#EAF7E9] py-24">
        <div className="max-w-[880px] mx-auto px-6">
          <div className="text-center mb-4">
            <span className="font-[family-name:var(--font-mono-os)] text-[11px] tracking-[0.16em] uppercase text-[#00984A] font-medium inline-block mb-3.5">
              ◆ The Old Way · The ClearClaim Way
            </span>
            <h2 className="font-black text-[clamp(30px,4vw,48px)] tracking-tight text-[#161d34] leading-[1.1]">
              Recovering Forgotten Shares Has Never Been This{" "}
              <em className="italic">Clear</em>
            </h2>
          </div>

          <div className="mt-12 flex flex-col gap-3.5">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="bg-white border border-black/10 rounded-[14px] p-[22px] px-[26px] flex gap-[18px] items-start shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-[34px] h-[34px] bg-gradient-to-b from-[#00BE5D] to-[#00984A] rounded-full flex items-center justify-center text-white font-black text-[16px] mt-0.5 shadow-[0_4px_10px_rgba(0,190,93,0.30)]">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-[17px] text-[#161d34] mb-1.5">{b.title}</h4>
                  <p className="text-[15px] text-[#4A5468] leading-relaxed">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA after Old Way */}
      <div className="py-12 bg-[#EAF7E9] text-center -mt-4">
        <div className="max-w-[880px] mx-auto px-6 flex flex-col items-center gap-3.5">
          <CtaButton onClick={openForm} variant="blue">
            Submit My Certificate Details Now
          </CtaButton>
          <div className="font-[family-name:var(--font-mono-os)] text-[11px] tracking-[0.14em] uppercase text-[#8590A0] flex flex-wrap justify-center gap-x-3 gap-y-1">
            <span>
              <span className="text-[#00BE5D] font-bold mr-1">✓</span>Free
            </span>
            <span>
              <span className="text-[#00BE5D] font-bold mr-1">✓</span>2 minutes
            </span>
            <span>
              <span className="text-[#00BE5D] font-bold mr-1">✓</span>No commitment
            </span>
          </div>
        </div>
      </div>

      {/* ═══════════ STEP THREE · DECIDE ═══════════ */}
      <section className="bg-[#EAF7E9] py-24">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-[family-name:var(--font-mono-os)] text-[11px] tracking-[0.16em] uppercase text-[#00984A] font-medium inline-block mb-3.5">
                ◆ Step Three · Decide On Your Terms
              </span>
              <h2 className="font-black text-[clamp(30px,4vw,48px)] tracking-tight text-[#161d34] mb-5 mt-3.5 leading-[1.1]">
                You Move Forward <em className="italic">Only</em> When You Choose To
              </h2>
              <p className="text-[17px] text-[#4A5468] leading-relaxed mb-3.5">
                This is not a sales call. There is no follow-up sequence designed to pressure you.
                There is no countdown timer.
              </p>
              <p className="text-[17px] text-[#4A5468] leading-relaxed mb-3.5">
                <b className="text-[#161d34] font-semibold">You can sit on it.</b> The certificates
                are not going anywhere. Some families take 6 months to decide. That is fine.
              </p>
              <p className="text-[17px] text-[#4A5468] leading-relaxed mb-3.5">
                <b className="text-[#161d34] font-semibold">You can do it yourself.</b> We give you
                the category and the path. If you have the time, the patience, and a tolerant lawyer,
                do it. We are not insulted.
              </p>
              <p className="text-[17px] text-[#4A5468] leading-relaxed mb-6">
                <b className="text-[#161d34] font-semibold">
                  You can engage ClearClaim for the full recovery.
                </b>{" "}
                Fixed fee in writing. Milestone payments. Refund assurance. No pressure to decide
                today.
              </p>
              <p className="text-[17px] text-[#4A5468] leading-relaxed">
                <b className="text-[#161d34] font-semibold">
                  Your money. Your timeline. Your call.
                </b>
              </p>

              <div className="mt-7 p-[18px] bg-white border-l-[3px] border-[#00BE5D] rounded-lg shadow-sm">
                <div className="mb-1.5">
                  <Stars className="text-[#00BE5D]" size={12} />
                </div>
                <p className="text-[15px] italic text-[#283655] mb-2 leading-relaxed">
                  &ldquo;I sat on the recovery report for 4 months before deciding. They never once
                  chased. When I came back, the case was open and they picked up exactly where it
                  ended.&rdquo;
                </p>
                <div className="flex items-center gap-2.5 text-[13px] text-[#4A5468]">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4EFD5] to-[#EAF7E9] flex items-center justify-center font-black text-[14px] text-[#00984A]">
                    V
                  </div>
                  <div>
                    <b>Sandeep Nair</b> · Dubai, UAE
                  </div>
                </div>
              </div>
            </div>

            <div id="your-options">
              <div className="bg-white border border-black/10 rounded-[18px] p-3.5 shadow-md">
                <div className="bg-white rounded-[10px] overflow-hidden border border-black/10">
                  <div className="bg-[#161d34] px-3.5 py-2.5 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-[9px] h-[9px] rounded-full bg-[#ff5f57]" />
                      <span className="w-[9px] h-[9px] rounded-full bg-[#febc2e]" />
                      <span className="w-[9px] h-[9px] rounded-full bg-[#28c840]" />
                    </div>
                    <div className="flex-1 bg-white/10 text-[#5ee89a] font-[family-name:var(--font-mono-os)] text-[10px] px-2.5 py-1.5 rounded-md tracking-[0.06em]">
                      clearclaim.in/your-options
                    </div>
                  </div>
                  <div className="p-[18px]">
                    <span className="font-[family-name:var(--font-mono-os)] text-[11px] tracking-[0.16em] uppercase text-[#00984A] font-medium inline-block mb-3">
                      ◆ Your Three Options
                    </span>
                    <div className="bg-[#EEF2FC] p-3.5 px-4 rounded-[10px] mb-2.5 border-l-[3px] border-[#678EF0]">
                      <div className="font-bold text-[#161d34] mb-1 text-[14px]">
                        A. Wait. No deadline.
                      </div>
                      <div className="text-[13px] text-[#4A5468]">
                        Your case stays open in our system.
                      </div>
                    </div>
                    <div className="bg-[#FFE6C2] p-3.5 px-4 rounded-[10px] mb-2.5 border-l-[3px] border-[#FEB066]">
                      <div className="font-bold text-[#161d34] mb-1 text-[14px]">
                        B. DIY With Our Roadmap.
                      </div>
                      <div className="text-[13px] text-[#4A5468]">
                        We send the category + steps. You file.
                      </div>
                    </div>
                    <div
                      className="p-3.5 px-4 rounded-[10px] border-l-[3px] border-[#00BE5D]"
                      style={{ background: "linear-gradient(135deg,#D4EFD5,#EAF7E9)" }}
                    >
                      <div className="font-bold text-[#161d34] mb-1 text-[14px]">
                        C. ClearClaim Full Recovery.
                      </div>
                      <div className="text-[13px] text-[#4A5468]">
                        Fixed fee. Refund assurance. Milestone-based.
                      </div>
                    </div>
                    <div className="mt-[18px] pt-3.5 border-t border-black/5 text-center font-black text-[20px] text-[#00984A]">
                      No pressure to decide today.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ BUILT BY SPECIALISTS ═══════════ */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 items-center">
            {/* Polaroid founders */}
            <div className="flex md:block justify-center">
              <div className="flex items-end justify-center">
                <div className="w-[clamp(128px,42vw,200px)] bg-white border border-black/10 rounded-[14px] p-3.5 shadow-md -rotate-3 z-10 mr-2">
                  <div className="aspect-square rounded-[10px] overflow-hidden mb-2.5 border border-green-200 bg-[#EAF7E9]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={IMG.hardik}
                      alt="Hardik Manek"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="font-bold text-[14px] text-slate-900">Hardik Manek</div>
                  <div className="text-[12px] text-slate-500">Co-Founder & CEO</div>
                </div>
                <div className="w-[clamp(128px,42vw,200px)] bg-white border border-black/10 rounded-[14px] p-3.5 shadow-md rotate-3 mt-7">
                  <div className="aspect-square rounded-[10px] overflow-hidden mb-2.5 border border-green-200 bg-[#EAF7E9]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={IMG.shrikant}
                      alt="Shrikant Pandore"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="font-bold text-[14px] text-slate-900">Shrikant Pandore</div>
                  <div className="text-[12px] text-slate-500">Co-Founder & COO</div>
                </div>
              </div>
            </div>

            <div>
              <span className="font-[family-name:var(--font-mono-os)] text-[11px] tracking-[0.16em] uppercase text-[#15803d] font-medium inline-block mb-3.5">
                ◆ Built By Specialists
              </span>
              <h2 className="font-black text-[clamp(30px,4vw,48px)] tracking-tight text-slate-900 mb-[18px] mt-3.5 leading-[1.1]">
                Made By Recovery Specialists,
                <br />
                <em className="italic">For Indian Families</em>
              </h2>
              <p className="text-slate-600 mb-3.5 leading-relaxed">
                The IEPF and RTA process was not built for a busy IT manager in Bengaluru handling
                his late father&apos;s affairs from his phone on a Sunday. It was built for full-time
                specialists who file these claims every week.
              </p>
              <p className="text-slate-600 leading-relaxed">
                That is exactly what we are.{" "}
                <b className="text-slate-900 font-semibold">
                  The ClearClaim team has filed claims for 1,250 families across 22 states
                </b>
                , navigating IEPF, RTA, succession, transmission, and legal heir routes daily.
              </p>

              <div className="flex gap-8 mt-8 flex-wrap">
                {[
                  { n: "1,250+", l: "Families Served" },
                  { n: "₹150 Cr", l: "Recovered To Date" },
                  { n: "22", l: "States Covered" },
                  { n: "98.4%", l: "Client Response Rate" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-black text-[38px] text-[#15803d] leading-none">{s.n}</div>
                    <div className="font-[family-name:var(--font-mono-os)] text-[10px] tracking-[0.14em] uppercase text-slate-500 mt-1 font-semibold">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3.5 mt-14">
            <CtaButton onClick={openForm} variant="blue">
              Speak With A Recovery Specialist
            </CtaButton>
            <div className="font-[family-name:var(--font-mono-os)] text-[11px] tracking-[0.14em] uppercase text-[#8590A0] flex flex-wrap justify-center gap-x-3 gap-y-1">
              <span>
                <span className="text-[#00BE5D] font-bold mr-1">✓</span>Free valuation
              </span>
              <span>
                <span className="text-[#00BE5D] font-bold mr-1">✓</span>No originals required
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ HOW IT WORKS ═══════════ */}
      <section id="how-it-works" className="bg-[#161d34] py-24 relative overflow-hidden">
        <div
          className="absolute -top-[300px] -right-[300px] w-[700px] h-[700px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,190,93,0.14), transparent 60%)",
          }}
        />
        <div className="max-w-[1180px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-[760px] mx-auto mb-4">
            <span className="font-[family-name:var(--font-mono-os)] text-[11px] tracking-[0.16em] uppercase text-[#5ee89a] font-medium inline-block mb-3.5">
              ◆ How It Works
            </span>
            <h2 className="font-black text-[clamp(30px,4vw,48px)] tracking-tight text-white mb-3.5 leading-[1.1]">
              Find Your Number In <em className="italic">3 Simple Steps</em>
            </h2>
            <p className="text-[18px] text-white/70 leading-relaxed">
              From &ldquo;I have no idea what these certificates are worth&rdquo; to &ldquo;I know
              exactly what I have and what to do next&rdquo; in under 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="bg-white/5 border border-white/10 rounded-[18px] p-8 relative backdrop-blur-sm"
              >
                <div className="font-black text-[80px] leading-none text-[#00BE5D] mb-3.5">
                  {s.n}
                </div>
                <h4 className="font-bold text-[20px] text-white mb-2.5">{s.title}</h4>
                <p className="text-white/75 text-[15px] leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-3.5 mt-12">
            <CtaButton onClick={openForm} variant="blue">
              Start Step 1 Now
            </CtaButton>
            <div className="font-[family-name:var(--font-mono-os)] text-[11px] tracking-[0.14em] uppercase text-white/55 flex flex-wrap justify-center gap-x-3 gap-y-1">
              <span>
                <span className="text-[#00BE5D] font-bold mr-1">✓</span>Free
              </span>
              <span>
                <span className="text-[#00BE5D] font-bold mr-1">✓</span>2 minutes
              </span>
              <span>
                <span className="text-[#00BE5D] font-bold mr-1">✓</span>Reply within 24 hrs
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PROMISE ═══════════ */}
      <section className="bg-[#EAF7E9] py-24 text-center relative overflow-hidden">
        <div className="max-w-[880px] mx-auto px-6">
          <div
            className="w-[120px] h-[120px] mx-auto mb-6 rounded-[22px] flex items-center justify-center relative -rotate-3"
            style={{
              background: "linear-gradient(180deg,#00BE5D 0%,#00984A 100%)",
              boxShadow:
                "0 14px 38px rgba(0,190,93,0.40), inset 0 2px 0 rgba(255,255,255,0.25)",
            }}
          >
            <div className="absolute inset-2 border-2 border-white/40 rounded-[16px]" />
            <svg className="w-[60px] h-[60px] relative z-10" viewBox="0 0 64 64" fill="none" aria-hidden>
              <path
                d="M32 6 L54 14 V32 C54 46 44 56 32 60 C20 56 10 46 10 32 V14 Z"
                fill="#ffffff"
                fillOpacity="0.15"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path
                d="M22 32 L29 39 L43 25"
                stroke="#ffffff"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          <span className="font-[family-name:var(--font-mono-os)] text-[11px] tracking-[0.16em] uppercase text-[#00984A] font-medium inline-block mb-3.5">
            ◆ ClearClaim Promise
          </span>
          <h2 className="font-black text-[clamp(30px,4vw,48px)] tracking-tight text-[#161d34] mt-3.5 max-w-[780px] mx-auto mb-[18px] leading-[1.1]">
            The Share Valuation Is Free, Or You Walk Away.{" "}
            <em className="italic">No Questions.</em>
          </h2>
          <p className="text-[18px] text-[#4A5468] max-w-[680px] mx-auto mb-[18px] leading-relaxed">
            If your valuation report does not give you a clear current market value, a defined claim
            category, and a written next-step roadmap, you owe us nothing. You walk. We do not chase.
          </p>
          <p className="text-[18px] text-[#4A5468] max-w-[680px] mx-auto mb-6 leading-relaxed">
            And if you do choose to engage ClearClaim for full recovery and the case fully completes
            without recovery happening, our written{" "}
            <b className="text-[#161d34] font-semibold">refund assurance</b> protects you.
          </p>
          <div className="font-black italic text-[26px] text-[#00984A] mt-6">
            No clauses. No fine print games.
          </div>
        </div>
      </section>

      {/* CTA after Promise */}
      <div className="py-12 bg-white text-center">
        <div className="max-w-[1180px] mx-auto px-6 flex flex-col items-center gap-3.5">
          <CtaButton onClick={openForm} variant="blue">
            Get Your Free Valuation
          </CtaButton>
          <div className="font-[family-name:var(--font-mono-os)] text-[11px] tracking-[0.14em] uppercase text-[#8590A0] flex flex-wrap justify-center gap-x-3 gap-y-1">
            <span>
              <span className="text-[#00BE5D] font-bold mr-1">✓</span>Zero risk
            </span>
            <span>
              <span className="text-[#00BE5D] font-bold mr-1">✓</span>No commitment
            </span>
          </div>
        </div>
      </div>

      {/* ═══════════ WHAT FAMILIES SAY ═══════════ */}
      <section className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-[760px] mx-auto mb-4">
            <span className="font-[family-name:var(--font-mono-os)] text-[11px] tracking-[0.16em] uppercase text-[#00984A] font-medium inline-block mb-3.5">
              ◆ What Families Say
            </span>
            <h2 className="font-black text-[clamp(30px,4vw,48px)] tracking-tight text-[#161d34] leading-[1.1]">
              Hear Why Indian Families Trust <br />
              The <em className="italic">ClearClaim Team</em>
            </h2>
          </div>

          <div className="flex justify-center gap-4 flex-wrap mt-4 mb-12">
            {[
              { name: "Google", rating: "4.9 / 5", reviews: "312 reviews" },
              { name: "Trustpilot", rating: "4.8 / 5", reviews: "187 reviews" },
              { name: "Justdial", rating: "4.9 / 5", reviews: "428 reviews" },
            ].map((p) => (
              <div
                key={p.name}
                className="bg-white border border-black/10 px-[18px] py-2.5 rounded-full flex items-center gap-2 text-[13px] text-[#161d34] shadow-sm"
              >
                <b>{p.name}</b>
                <span className="text-[#00BE5D] text-[11px] tracking-[1.5px]">★★★★★</span>
                {p.rating} from {p.reviews}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
            {FAMILY_REVIEWS.map((r) => (
              <div
                key={r.name}
                className="bg-white border border-black/10 rounded-[14px] p-[22px] shadow-sm flex flex-col hover:-translate-y-1 hover:shadow-md transition-all"
              >
                <div className="mb-2.5">
                  <Stars className="text-[#00BE5D]" size={12} />
                </div>
                <h4 className="font-bold text-[15px] text-[#161d34] mb-2">{r.title}</h4>
                <p className="text-[14px] text-[#4A5468] leading-relaxed flex-1 mb-3.5">{r.quote}</p>
                <div className="flex items-center gap-2.5 pt-3 border-t border-black/5 text-[13px]">
                  <div className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-[#D4EFD5] to-[#EAF7E9] flex items-center justify-center font-black text-[14px] text-[#00984A]">
                    {r.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-[#161d34]">{r.name}</div>
                    <div className="font-[family-name:var(--font-mono-os)] text-[10px] tracking-[0.1em] uppercase text-[#8590A0]">
                      {r.meta}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FINAL CTA + FORM ANCHOR ═══════════ */}
      <section id="valuation" className="bg-[#161d34] py-24 relative overflow-hidden">
        <div
          className="absolute -top-[200px] -right-[200px] w-[560px] h-[560px] pointer-events-none"
          style={{
            background: "radial-gradient(circle,rgba(0,190,93,0.18),transparent 60%)",
          }}
        />
        <div
          className="absolute -bottom-[200px] -left-[200px] w-[560px] h-[560px] pointer-events-none"
          style={{
            background: "radial-gradient(circle,rgba(103,142,240,0.14),transparent 60%)",
          }}
        />
        <div className="max-w-[1180px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-[family-name:var(--font-mono-os)] text-[11px] tracking-[0.16em] uppercase text-[#5ee89a] font-medium inline-block mb-3.5">
                ◆ ClearClaim · Free Valuation
              </span>
              <h2 className="font-black text-[clamp(32px,4vw,48px)] tracking-tight text-white mt-3.5 mb-[18px] leading-[1.1]">
                Find Out What Your Family&apos;s Forgotten Shares Are Worth Today
              </h2>
              <p className="text-white/75 text-[17px] leading-relaxed mb-3.5">
                Your valuation report arrives within 24 hours on WhatsApp. Current market value.
                Claim category. Step-by-step path forward.{" "}
                <b className="text-white font-semibold">Free. No documents. No commitment.</b>
              </p>
              <p className="font-black text-[24px] text-[#5ee89a] mt-[18px]">
                Most families are surprised by the wealth hidden in old shares.
              </p>
              <div className="flex gap-8 mt-9 flex-wrap">
                {[
                  { n: "1,250+", l: "Families Served" },
                  { n: "₹150 Cr", l: "Recovered" },
                  { n: "24 hrs", l: "Response Time" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-black text-[34px] text-[#5ee89a]">{s.n}</div>
                    <div className="font-[family-name:var(--font-mono-os)] text-[10px] tracking-[0.14em] uppercase text-white/50">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white text-[#161d34] rounded-[18px] p-8 shadow-lg border border-white/10 text-center">
              <svg className="w-16 h-16 mx-auto mb-[18px]" viewBox="0 0 64 64" fill="none" aria-hidden>
                <circle cx="32" cy="32" r="28" fill="#EAF7E9" stroke="#00BE5D" strokeWidth="2.5" />
                <path
                  d="M22 32 L29 39 L43 25"
                  stroke="#00984A"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <h3 className="font-black text-[24px] text-[#161d34] mb-2">
                Book Your Free Valuation Call
              </h3>
              <p className="text-[14px] text-[#8590A0] mb-7">
                Takes about 2 minutes to submit. We respond on WhatsApp within 24 hours with your
                verified valuation report.
              </p>
              <CtaButton onClick={openForm} variant="blue" className="w-full">
                Book My Free Valuation 
              </CtaButton>
              <div className="flex gap-3.5 justify-center mt-[22px] flex-wrap">
                <div className="flex items-center gap-1.5 font-[family-name:var(--font-mono-os)] text-[12px] tracking-[0.06em] uppercase text-[#8590A0]">
                  <span className="text-[#00BE5D] font-bold">✓</span> 2 min
                </div>
                <div className="flex items-center gap-1.5 font-[family-name:var(--font-mono-os)] text-[12px] tracking-[0.06em] uppercase text-[#8590A0]">
                  <span className="text-[#00BE5D] font-bold">✓</span> No originals
                </div>
                <div className="flex items-center gap-1.5 font-[family-name:var(--font-mono-os)] text-[12px] tracking-[0.06em] uppercase text-[#8590A0]">
                  <span className="text-[#00BE5D] font-bold">✓</span> No commitment
                </div>
              </div>
              <p className="text-[12px] text-[#8590A0] mt-[18px] leading-relaxed">
                Only 3 valuation slots remaining for today. Confidential and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof toast */}
      {/* {showSocialProof && (
        <div className="fixed bottom-6 left-4 sm:left-6 z-[90] animate-in slide-in-from-bottom-4 fade-in duration-500">
          <div className="bg-white border border-[#D8E5DC] shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3 max-w-[300px]">
            <div className="w-10 h-10 rounded-full bg-[#E9F8E7] text-[#008B45] font-extrabold flex items-center justify-center shrink-0">
              H
            </div>
            <div>
              <p className="text-[13px] font-bold text-[#0F1F14]">Harish K. from Chennai, TN</p>
              <p className="text-[12px] text-[#5F6E66]">Just requested a free valuation</p>
              <p className="text-[11px] text-[#95A39B]">17 min ago · Verified by ClearClaim</p>
            </div>
            <button
              type="button"
              onClick={() => setShowSocialProof(false)}
              className="text-[#95A39B] hover:text-[#0F1F14] ml-1"
              aria-label="Dismiss"
            >
              ×
            </button>
          </div>
        </div>
      )} */}

      {/* Success / error toast */}
      {toast && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-[1100] animate-in fade-in duration-300">
          <div className="bg-white/95 p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center max-w-md mx-4 border border-white/20 transform scale-100 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#00BE5D] to-[#008C44]"></div>
            <div className="w-16 h-16 mx-auto bg-[#e6f7ed] rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#00BE5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-extrabold text-[#1a3a1f] mb-3 tracking-tight">Success!</h2>
            <p className="text-gray-600 text-base mb-8 leading-relaxed font-medium">{toast}</p>
            <button
              type="button"
              onClick={() => setToast(null)}
              className="w-full px-6 py-3.5 bg-gradient-to-r from-[#00BE5D] to-[#008C44] text-white rounded-xl font-bold tracking-wide hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Okay, Thanks!
            </button>
          </div>
        </div>
      )}

      {/* Valuation form modal */}
      {showForm && (
        <div className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[92vh] overflow-y-auto relative">
            <button
              type="button"
              onClick={closeForm}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 text-gray-500 hover:text-[#0F1F14] font-bold"
              aria-label="Close"
            >
              ×
            </button>
            <div className="p-6 sm:p-8">
              <h2 className="text-[26px] sm:text-[30px] font-black text-[#161d34] mb-2 pr-8">
                Book Your Free Valuation Call
              </h2>
              <p className="text-[15px] text-gray-500 mb-7">
                No original documents required to get started.
              </p>
              <form onSubmit={onSubmit} className="space-y-4" noValidate>
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={(e) => setForm({ ...form, website: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                />
                <div>
                  <label htmlFor="vName" className="block mb-2 text-[12px] font-black uppercase tracking-[0.06em] text-[#161d34]">
                    Your Name
                  </label>
                  <input
                    id="vName"
                    name="name"
                    type="text"
                    maxLength={80}
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`${inputClass} ${errors.name ? "border-red-500" : ""}`}
                  />
                  {errors.name && <p className="mt-2 text-red-500 text-sm font-semibold">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="vPhone" className="block mb-2 text-[12px] font-black uppercase tracking-[0.06em] text-[#161d34]">
                    Phone Number
                  </label>
                  <input
                    id="vPhone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    placeholder="Enter your phone number"
                    maxLength={14}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/[^\d]/g, "") })}
                    className={`${inputClass} ${errors.phone ? "border-red-500" : ""}`}
                  />
                  {errors.phone && <p className="mt-2 text-red-500 text-sm font-semibold">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="vEmail" className="block mb-2 text-[12px] font-black uppercase tracking-[0.06em] text-[#161d34]">
                    Email Address
                  </label>
                  <input
                    id="vEmail"
                    name="email"
                    type="email"
                    maxLength={120}
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`${inputClass} ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && <p className="mt-2 text-red-500 text-sm font-semibold">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="vCase" className="block mb-2 text-[12px] font-black uppercase tracking-[0.06em] text-[#161d34]">
                    Case Type
                  </label>
                  <select
                    id="vCase"
                    name="case"
                    value={form.case}
                    onChange={(e) => setForm({ ...form, case: e.target.value })}
                    className={`${inputClass} ${errors.case ? "border-red-500" : ""}`}
                  >
                    <option value="">Select your situation</option>
                    <option value="old_certificates">I have old physical share certificates</option>
                    <option value="deceased_family">A family member passed away with shares</option>
                    <option value="unsure">I am unsure of the category</option>
                  </select>
                  {errors.case && <p className="mt-2 text-red-500 text-sm font-semibold">{errors.case}</p>}
                </div>
                <div>
                  <label htmlFor="vMessage" className="block mb-2 text-[12px] font-black uppercase tracking-[0.06em] text-[#161d34]">
                    Message
                  </label>
                  <textarea
                    id="vMessage"
                    name="message"
                    rows={3}
                    maxLength={500}
                    placeholder="Company names, folio numbers, or anything else we should know"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-y min-h-[88px]`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full text-white font-black text-[17px] px-9 py-[18px] rounded-full transition-all hover:-translate-y-0.5 disabled:opacity-60"
                  style={{
                    background: "linear-gradient(180deg, #3D6FF0 0%, #2450C4 100%)",
                    boxShadow: "0 4px 0 #173A8F, 0 8px 24px rgba(61,111,240,0.42)",
                  }}
                >
                  {submitting ? "Submitting…" : "Get My Free Valuation"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Floating Bottom-Right Blinking Sticky CTA Button */}
      <div className="fixed bottom-5 right-5 z-[999]">
        <button
          type="button"
          onClick={openForm}
          className="blink-btn flex items-center justify-center gap-1.5 text-white font-bold text-[13px] sm:text-[14px] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-white/30"
          style={{
            background: "linear-gradient(180deg, #3D6FF0 0%, #2450C4 100%)",
            boxShadow: "0 3px 0 #173A8F, 0 6px 16px rgba(61,111,240,0.45)",
          }}
        >
          Get My Free Valuation
        </button>
      </div>
    </div>
  );
}

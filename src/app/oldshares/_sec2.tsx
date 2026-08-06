"use client";

import type { ReactNode } from "react";

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
          boxShadow:
            "0 4px 0 #173A8F, 0 8px 24px rgba(61,111,240,0.42), inset 0 1px 0 rgba(255,255,255,0.28)",
        }
      : variant === "dark"
        ? {
            background: "linear-gradient(180deg, #0F1F14 0%, #00301A 100%)",
            boxShadow:
              "0 4px 0 #001a0e, 0 8px 24px rgba(0,48,26,0.35), inset 0 1px 0 rgba(255,255,255,0.12)",
          }
        : {
            background: "linear-gradient(180deg, #00BE5D 0%, #008B45 100%)",
            boxShadow:
              "0 4px 0 #00582C, 0 8px 24px rgba(0,190,93,0.35), inset 0 1px 0 rgba(255,255,255,0.28)",
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

export default function OldSharesSec2({ openForm }: { openForm: () => void }) {
  return (
    <>
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
                className="bg-white border border-black/10 rounded-[14px] p-[22px] px-[26px] flex gap-[18px] items-start shadow-sm hover:shadow-md hover:translate-x-1 hover:border-[#00BE5D]/30 transition-all duration-150"
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
      <div className="py-12 bg-[#EAF7E9] text-center -mt-8 pb-16">
        <div className="max-w-[1180px] mx-auto px-6 flex flex-col items-center gap-3.5">
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
      <section className="bg-[#EAF7E9] py-24 pt-8">
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
    </>
  );
}

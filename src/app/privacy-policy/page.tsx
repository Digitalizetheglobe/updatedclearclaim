"use client";

import React from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fdf9] to-[#e6f7ed] font-[sans-serif]">
      {/* Hero Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="md:text-5xl text-3xl font-bold text-[#283655] mb-4">
            Privacy <span className="text-[#00BE5D]">Policy</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Clearclaim Ventures Private Limited is committed to safeguarding your privacy.
            This policy outlines how we handle your personal information.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl p-8 md:p-12 border border-white/20 space-y-10 leading-relaxed text-gray-700">

          <section>
            <p>
              Clearclaim Ventures Private Limited (<strong>Clearclaim</strong>) is committed to safeguarding your
              privacy. This Privacy Policy outlines how we collect, use, and protect your personal
              information when you use our website and services. By accessing or using our platform, you
              agree to the terms outlined in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#283655] mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-[#00BE5D] rounded-full"></span>
              Information We Collect
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Personal Identification", desc: "Name, email, phone number, and address." },
                { label: "Identification Details", desc: "Aadhaar details for mandatory KYC purposes." },
                { label: "Investment Details", desc: "Information about your investments (excluding accounts/amounts)." },
                { label: "Emergency Contacts", desc: "Details of your designated emergency contacts." },
              ].map((item, idx) => (
                <li key={idx} className="bg-[#f0faf4] p-4 rounded-xl border border-[#d1f2e0]">
                  <strong className="text-[#283655] block mb-1">{item.label}</strong>
                  <span className="text-sm opacity-80">{item.desc}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#283655] mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-[#00BE5D] rounded-full"></span>
              How We Use Information
            </h2>
            <div className="space-y-3">
              {[
                "To understand your needs and provide tailored financial services.",
                "For internal record keeping and maintaining your profile.",
                "To enhance our services based on feedback and interactions.",
                "To send updates, account status, and relevant communications.",
                "For promotional activities and market research.",
                "For security monitoring and analyzing usage patterns.",
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#00BE5D] shrink-0"></div>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#283655] mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-[#00BE5D] rounded-full"></span>
              Security & Protection
            </h2>
            <p>
              We ensure the security of your personal information by implementing industry-standard
              physical, electronic, and managerial procedures. Sensitive information, such as investment
              or payment details, is <strong>encrypted</strong> during transmission to prevent unauthorized access.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#283655] mb-3">Control Your Privacy</h3>
              <p className="text-sm mb-4">
                You can opt out of marketing communications at any time. Update your
                preferences by contacting us.
              </p>
              <a
                href="mailto:support@clearclaim.in"
                className="text-[#00BE5D] font-semibold hover:underline"
              >
                support@clearclaim.in
              </a>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#283655] mb-3">Password Security</h3>
              <ul className="text-sm space-y-2">
                <li>• Use the Change Password feature regularly.</li>
                <li>• Never disclose your password to third parties.</li>
                <li>• MFA is enforced via OTP for added security.</li>
              </ul>
            </div>
          </section>

          <div className="border-t border-gray-100 pt-10">
            <h2 className="text-2xl font-bold text-[#283655] mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#00BE5D]/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#00BE5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#283655]">Email Support</h4>
                  <a href="mailto:sales@clearclaim.in" className="text-[#00BE5D] hover:underline text-sm">sales@clearclaim.in</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#00BE5D]/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#00BE5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#283655]">Office Address</h4>
                  <p className="text-sm opacity-80">Vantage Tower, Brahma Corp, Bavdhan, Pune - 411021</p>
                </div>
              </div>
            </div>
          </div>

          <footer className="text-center text-sm text-gray-500 pt-6">
            <p>Effective from: 1st April 2022 | Clearclaim Ventures Private Limited</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

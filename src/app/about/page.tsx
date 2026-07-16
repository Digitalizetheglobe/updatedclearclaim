"use client";
import aboutgif from "../../../public/gif/Clear-claim-about.gif";
import Image from "next/image";
import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import service from "../../../public/images/services-bg-1.jpg";
import shrikant from "../../../public/images/Shrikant_Sir.jpg";
import hardik from "../../../public/images/hardiksir_newone.png";
import Meetourteam from "./meetourteam";
import linkedin from "../../../public/images/linkedin.png";
import CustomHead from '../../components/CustomHead';
import { TrendingUp, Globe, Leaf, Users, ShieldCheck, PhoneCall, Linkedin, Twitter, Instagram } from "lucide-react";

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

export default function About() {
  return (
    <>
      <CustomHead
        pageSlug='/about'
        title='Full Stack JavaScript Developer - Alamin Shaikh'
        content='I am a full stack JavaScript developer specializing in web application development. I write technical articles about JavaScript and freelancing.'
      />
      {/* ABOUT US HERO */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 items-center gap-8 lg:gap-12">

            {/* LEFT — Text Content */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-16 space-y-8"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a2e3b] tracking-tight leading-tight">
                About Us
              </h1>

              <h2 className="text-xl md:text-2xl font-bold text-[#1a2e3b] leading-snug">
                India&apos;s Trusted <span className="text-[#00BE5D]">Share Recovery</span> Experts
              </h2>

              <p className="border-l-[4px] border-emerald-500 pl-6 py-3 text-gray-800 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-r-2xl">
                We help individuals reclaim  unclaimed shares, <span className="text-gray-900 font-bold"> dividends, and investments</span> through a secure and hassle
                free process.
              </p>

              <p className="font-light leading-relaxed">
                From forgotten investments to <span className="text-gray-900 font-semibold"> IEPF claim recovery</span>,  we make the process transparent, simple, and stress
                free.
              </p>
            </motion.div> */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:col-span-3 px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-16 space-y-8"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#161D34] tracking-tight leading-tight">
                About Us
              </h1>

              <h2 className="text-xl md:text-2xl font-bold text-[#161D34] leading-snug">
                India&apos;s Trusted <span className="text-[#00BE5D]">Share Recovery</span>{" "}
                Experts
              </h2>

              <p className="border-l-[4px] border-emerald-500 pl-6 py-3 text-gray-800 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-r-2xl">
                We help individuals reclaim unclaimed shares,{" "}
                <span className="text-gray-900 font-bold">
                  dividends, and investments
                </span>{" "}
                through a secure and hassle free process.
              </p>

              <p className="font-light leading-relaxed text-gray-700">
                From forgotten investments to{" "}
                <span className="text-gray-900 font-semibold">IEPF claim recovery</span>
                , we make the process transparent, simple, and stress free.
              </p>

              {/* Adjusted Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-2xl md:text-xl font-extrabold text-[#1a2e3b]">
                    <AnimatedNumber value={150} suffix="+ Cr" />
                  </div>
                  <div className="text-gray-500 font-semibold text-sm mt-1">
                    Shares Recovered
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-2xl md:text-xl font-extrabold text-[#1a2e3b]">
                    <AnimatedNumber value={1250} suffix="+" />
                  </div>
                  <div className="text-gray-500 font-semibold text-sm mt-1">
                    Clients Assisted
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-2xl md:text-xl font-extrabold text-[#1a2e3b]">
                    <AnimatedNumber value={2500} suffix="+" />
                  </div>
                  <div className="text-gray-500 font-semibold text-sm mt-1">
                    Claims Settled
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Team Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2 relative items-center w-[100%] min-h-[250px] lg:min-h-[450px]"
            >
              <Image
                src="/images/about_team.png"
                alt="ClearClaim Team"
                fill
                className="object-cover object-center rounded-2xl"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* VISSION/MISSION SECTION */}
      {/* VISSION/MISSION SECTION */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-emerald-50 rounded-full blur-3xl opacity-50" />
          <div className="absolute top-40 -right-40 w-80 h-80 bg-emerald-50 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-3xl font-extrabold text-[#283655] mb-4"
            >
              Our Core <span className="text-[#00BE5D]">Purpose</span>
            </motion.h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#00BE5D] to-[#00BE5D]/40 mx-auto mt-6 rounded-full opacity-40 mb-16"></div>

          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-50 to-transparent rounded-bl-3xl transition-transform duration-500 group-hover:scale-110" />

              <div className="relative flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center border border-emerald-100 overflow-hidden relative shadow-sm group-hover:border-[#00BE5D]/50 transition-colors duration-500 flex-shrink-0">
                  <Image src="/images/mission.png" alt="Mission" fill className="object-cover p-2 group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#161D34] group-hover:text-[#00BE5D] transition-colors duration-300">
                  Our Mission
                </h3>
              </div>

              <p className="text-gray-600 text-base leading-relaxed relative z-10 font-normal">
                To make sure that every single invested penny of our customer gets a clear claim.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-50 to-transparent rounded-bl-3xl transition-transform duration-500 group-hover:scale-110" />

              <div className="relative flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center border border-emerald-100 overflow-hidden relative shadow-sm group-hover:border-[#00BE5D]/50 transition-colors duration-500 flex-shrink-0">
                  <Image src="/images/vision.png" alt="Vision" fill className="object-cover p-2 group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#161D34] group-hover:text-[#00BE5D] transition-colors duration-300">
                  Our Vision
                </h3>
              </div>

              <p className="text-gray-600 text-base leading-relaxed relative z-10 font-normal">
                To help society by offering foremost financial safety which improves the quality of life & contributes to economic development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MEET PEOPLE (Founders Section) *      {/* MEET PEOPLE (Founders Section) */}
      <section className="py-10 md:py-16 bg-[#EEF2FC]">
        <div className="max-w-6xl mx-auto px-6">

          {/* 🔹 CARD 1: Shrikant */}
          <div className="flex flex-col md:flex-row items-center justify-center md:items-center gap-6 md:gap-8">

            {/* Socials (Left for Shrikant) */}
            <div className="hidden md:flex flex-col items-center justify-center space-y-4 text-gray-500">
              <Linkedin className="w-4 h-4 hover:text-black cursor-pointer transition-colors" />
              <Twitter className="w-4 h-4 hover:text-black cursor-pointer transition-colors" />
              <Instagram className="w-4 h-4 hover:text-black cursor-pointer transition-colors" />
            </div>

            {/* Mobile Socials (Visible only on mobile) */}
            <div className="flex md:hidden items-center justify-center space-x-4 text-gray-500 mb-2">
              <Linkedin className="w-4 h-4" />
              <Twitter className="w-4 h-4" />
              <Instagram className="w-4 h-4" />
            </div>

            {/* Image Section */}
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden flex-shrink-0 bg-white relative shadow-sm">
              <Image
                src={shrikant}
                alt="Shrikant Pandore"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Content Section */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold uppercase text-[#4A4A4A] tracking-widest mb-1">
                Shrikant Pandore
              </h3>
              <p className="text-xs font-medium text-gray-500 mb-3 tracking-wide">
                Co-Founder • CEO
              </p>

              {/* <a href="mailto:shrikant@clearclaim.in" className="text-xs text-gray-500 underline italic hover:text-black mb-4 inline-block transition-colors">
                shrikant@clearclaim.in
              </a> */}

              <p className="text-base  text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
                Shrikant is the Chief Executive Officer (CEO) of Clearclaim. With a strong vision and strategic acumen, Shrikant has been instrumental in steering the company towards its goals. His leadership style fosters innovation and encourages team collaboration.
              </p>
            </div>
          </div>

          <hr className="border-t border-[#00BE5D]/30 my-10 max-w-3xl mx-auto" />

          {/* 🔹 CARD 2: Hardik */}
          <div className="flex flex-col md:flex-row items-center justify-center md:items-center gap-6 md:gap-8">

            {/* Content Section (Left for Hardik) */}
            <div className="flex-1 text-center md:text-right order-3 md:order-1">
              <h3 className="text-xl font-bold uppercase text-[#4A4A4A] tracking-widest mb-1">
                Hardik Manek
              </h3>
              <p className="text-xs font-medium text-gray-500 mb-3 tracking-wide">
                Co-Founder • COO
              </p>

              {/* <a href="mailto:hardik@clearclaim.in" className="text-xs text-gray-500 underline italic hover:text-black mb-4 inline-block transition-colors">
                hardik@clearclaim.in
              </a> */}

              <p className="text-base text-gray-600 leading-relaxed max-w-xl mx-auto md:ml-auto md:mr-0">
                Hardik plays a pivotal role in operational success, overseeing daily operations and ensuring a smooth claim process. His focus on efficiency and transparency builds strong customer trust.
              </p>
            </div>

            {/* Mobile Socials (Visible only on mobile) */}
            <div className="flex md:hidden items-center justify-center space-x-4 text-gray-500 mb-2 order-2">
              <Linkedin className="w-4 h-4" />
              <Twitter className="w-4 h-4" />
              <Instagram className="w-4 h-4" />
            </div>

            {/* Image Section */}
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden flex-shrink-0 bg-white relative shadow-sm order-1 md:order-2">
              <Image
                src={hardik}
                alt="Hardik Manek"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Socials (Right for Hardik) */}
            <div className="hidden md:flex flex-col items-center justify-center space-y-4 text-gray-500 order-3">
              <Twitter className="w-4 h-4 hover:text-black cursor-pointer transition-colors" />
              <Linkedin className="w-4 h-4 hover:text-black cursor-pointer transition-colors" />
              <Instagram className="w-4 h-4 hover:text-black cursor-pointer transition-colors" />
            </div>

          </div>

        </div>
      </section>

      <Meetourteam />

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 20s linear infinite;
        }
      `}</style>
    </>
  );
}

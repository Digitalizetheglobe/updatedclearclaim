"use client";
import aboutgif from "../../../public/gif/Clear-claim-about.gif";
import Image from "next/image";
import { motion } from "framer-motion";
import service from "../../../public/images/services-bg-1.jpg";
import shrikant from "../../../public/images/shrikant_4.png";
import hardik from "../../../public/images/hardik_4.png";
import Meetourteam from "./meetourteam";
import linkedin from "../../../public/images/linkedin.png";
import CustomHead from '../../components/CustomHead';
import { TrendingUp, Globe, Leaf, Users, ShieldCheck, PhoneCall } from "lucide-react";
//newchanges 
export default function About() {
  return (
    <>
      <CustomHead
        pageSlug='/about'
        title='Full Stack JavaScript Developer - Alamin Shaikh'
        content='I am a full stack JavaScript developer specializing in web application development. I write technical articles about JavaScript and freelancing.'
      />
      {/* WHAT WE DO SECTION */}
      <section className="py-20 bg-slate-50 min-h-screen selection:bg-emerald-100 relative overflow-hidden">
        {/* Subtle Background Accent */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-12 -left-24 w-72 h-72 bg-emerald-50 rounded-full blur-2xl opacity-40"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* TEXT SECTION */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 space-y-8"
            >
              <div className="space-y-4">
                <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs">Our Purpose</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#283655] leading-tight mt-2">
                  Navigating the <span className="text-emerald-500 italic">Evolution</span> of Investment
                </h2>
                <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
              </div>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed md:text-justify">
                <p className="border-l-4 border-emerald-100 pl-6 bg-white/40 py-2 rounded-r-lg">
                  In a nation where aspirations fuel the pursuit of <span className="text-[#283655] font-semibold">financial security</span>, we understand the importance of investing to fulfill those desires. Every individual strives to meet basic needs and secure their future through diverse savings.
                </p>

                <p>
                  From stocks and mutual funds to bonds and gold, India's investment landscape is vast. As the nation progresses, the transition from <span className="bg-emerald-50 text-emerald-800 px-1 rounded font-medium italic">paper-based holdings</span> to modern <span className="text-emerald-600 font-bold">digital platforms</span> has become the standard for transparency and ease.
                </p>

                <p className="text-[#283655]/80 font-medium">
                  At Clearclaim, we bridge the gap between legacy processes and modern convenience. While the transition for a population of 1.4 billion takes time, we ensure that every step you take towards digitalization is seamless and secure.
                </p>
              </div>
            </motion.div>

            {/* IMAGE SECTION - REPLACED WITH CIRCULAR FLOW */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="relative group w-full max-w-lg">
                {/* Decorative Elements */}
                {/* <div className="absolute inset-0 bg-emerald-500 rounded-[2.5rem] rotate-6 group-hover:rotate-3 transition-transform duration-500 opacity-10"></div> */}

                {/* Diagram Wrap */}
                <div className="relative  p-8 md:p-1 min-h-[500px] flex items-center justify-center overflow-hidden">

                  {/* CIRCULAR FLOW DIAGRAM CORE */}
                  <div className="relative w-full aspect-square flex items-center justify-center scale-90 md:scale-100">
                    {/* Background Dashed Circle */}
                    <div className="absolute w-full h-full border-2 border-dashed border-emerald-100 rounded-full animate-spin-slow"></div>

                    {/* Central FLOW Element */}
                    <div className="relative z-20 w-24 h-24 md:w-32 md:h-32 bg-[#1a3a1f] rounded-full flex flex-col items-center justify-center shadow-xl">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" className="animate-pulse">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                      <span className="text-emerald-400 font-black tracking-widest text-[10px] mt-1">FLOW</span>
                    </div>
                    {/* ICONS IN CIRCLE (Rotating Orbit) */}
                    <div className="absolute w-full h-full animate-spin-slow">
                      {/* Matching Dashed Circle */}
                      <div className="absolute top-[10%] left-[10%] w-[80%] h-[80%] border-2 border-dashed border-emerald-100 rounded-full"></div>

                      {[
                        { icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />, top: "10%", left: "50%" },
                        { icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />, top: "30%", left: "84.6%" },
                        { icon: <Leaf className="w-5 h-5 md:w-6 md:h-6" />, top: "70%", left: "84.6%" },
                        { icon: <Users className="w-5 h-5 md:w-6 md:h-6" />, top: "90%", left: "50%" },
                        { icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />, top: "70%", left: "15.4%" },
                        { icon: <PhoneCall className="w-5 h-5 md:w-6 md:h-6" />, top: "30%", left: "15.4%" },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="absolute bg-emerald-500 text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 z-30"
                          style={{ top: item.top, left: item.left, transform: "translate(-50%, -50%)" }}
                        >
                          {/* Counter-rotate icon to keep it upright */}
                          <div className="animate-spin-slow-reverse flex items-center justify-center">
                            {item.icon}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Floating Badge (Visual Proof) */}
                  <div className="absolute bottom-6 left-6 bg-white p-3 md:p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-50 animate-bounce-slow z-40">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-500 rounded-full flex items-center justify-center shadow-inner">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter leading-tight">Secured with</p>
                      <p className="text-xs md:text-sm font-black text-[#283655]">Digital Integrity</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* VISSION/MISSION SECTION */}
      <section className="py-32 bg-[#FBFCFD] relative overflow-hidden">
        {/* Decorative Background Elements */}
        {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-[-10%] w-[40%] h-[40%] bg-emerald-50 rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute bottom-0 left-[-10%] w-[40%] h-[40%] bg-emerald-50 rounded-full blur-[120px] opacity-60"></div>
        </div> */}

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-24">

          {/* MISSION CARD - Text Left, Image Right */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex justify-start w-full group"
          >
            <div className="relative w-full lg:w-[90%] h-auto md:h-64 rounded-r-[3rem] md:rounded-r-full rounded-l-none bg-gradient-to-r from-[#FFFFFF] to-[#00BE5D] border border-gray-100 flex flex-col md:flex-row items-center overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(16,185,129,0.15)]">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Text Side (Left) */}
              <div className="flex-1 py-10 pl-10 md:pl-24 pr-10 md:pr-64 text-left z-10">
                <h3 className="text-3xl md:text-4xl font-black text-black mb-4 tracking-tight">Mission</h3>
                <p className="text-black lg:text-xl font-medium text-lg md:text-lg max-w-lg leading-relaxed  max-w-xl">
                  To make sure that every single invested penny of our customer gets a clear claim.
                </p>
              </div>

              {/* Image Circle (Right Cap) */}
              <div className="relative w-64 h-64 md:w-[280px] md:h-[280px] md:absolute md:right-[-10px] md:top-1/2 md:-translate-y-1/2 flex-shrink-0 group-hover:scale-105 transition-transform duration-700 ease-out z-20 py-8 md:py-0">
                {/* <div className="absolute inset-0 border-[12px] md:border-[20px] border-[#00BE5D] rounded-full z-20 shadow-xl"></div> */}
                <div className="absolute inset-[12px] md:inset-[20px] rounded-full overflow-hidden bg-white z-10 border-[6px] md:border-[12px] border-white shadow-inner">
                  <Image
                    src="/images/mission.png"
                    alt="Mission"
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-1000"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* VISION CARD - Image Left, Text Right, Text Aligned Left */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex justify-end w-full group"
          >
            <div className="relative w-full lg:w-[90%] h-auto md:h-64 rounded-l-[3rem] md:rounded-l-full rounded-r-none bg-gradient-to-r from-[#00BE5D] to-[#FFFFFF] border border-gray-100 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)] flex flex-col md:flex-row items-center overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(16,185,129,0.15)]">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Text Side (Right, but text itself is left-aligned) */}
              <div className="flex-1 py-10 pr-10 md:pr-24 pl-10 md:pl-64 text-left z-10">
                <h3 className="text-3xl md:text-4xl font-black text-black mb-4 tracking-tight ml-8">Vision</h3>
                <p className="text-black lg:text-xl font-medium text-lg md:text-lg max-w-lg leading-relaxed  max-w-xl ml-8">
                  To help society by offering foremost financial safety which improves the quality of life & contributes to economic development.
                </p>
              </div>

              {/* Image Circle (Left Cap) */}
              <div className="relative w-64 h-64 md:w-[280px] md:h-[280px] md:absolute md:left-[-10px] md:top-1/2 md:-translate-y-1/2 flex-shrink-0 group-hover:scale-105 transition-transform duration-700 ease-out z-20 py-8 md:py-0">
                {/* <div className="absolute inset-0 border-[12px] md:border-[20px] border-[#00BE5D] rounded-full z-20 shadow-xl"></div> */}
                <div className="absolute inset-[12px] md:inset-[20px] rounded-full overflow-hidden bg-white z-10 border-[6px] md:border-[12px] border-white shadow-inner">
                  <Image
                    src="/images/vision.png"
                    alt="Vision"
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-1000"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* MEET PEOPLE (Founders Section) */}
      <section className="py-20 bg-[#f6f8f7]">
        <div className="max-w-6xl mx-auto px-6 space-y-14">

          {/* 🔹 CARD 1 */}
          <div className="border border-[#00BE5D] rounded-2xl overflow-hidden flex flex-col md:flex-row bg-white shadow-sm">

            {/* LEFT PANEL with overlapping image */}
            <div className="relative w-full md:w-[260px] h-[300px] bg-white overflow-hidden">
              {/* Green background strip (50%) */}
              <div className="absolute left-0 top-0 w-1/2 h-full bg-[#00BE5D] rounded-tl-2xl"></div>

              {/* Vertical Decorative Text */}
              <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-white/20 text-4xl font-black uppercase whitespace-nowrap z-0">
                CTO
              </div>

              {/* Profile Image (Overlapping both) */}
              <div className="absolute inset-0 z-10">
                <Image
                  src={shrikant}
                  alt="Shrikant Pandore"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#1a3a1f] mb-1">
                Shrikant Pandore
              </h3>
              <p className="text-xs font-bold text-[#00BE5D] mb-4 uppercase tracking-widest opacity-80">
                Co-Founder & CEO
              </p>

              <p className="text-gray-600 lg:text-xl font-medium text-lg md:text-lg leading-relaxed ">
                Shrikant is the Chief Executive Officer (CEO) of Clearclaim. With a strong vision and strategic acumen, Shrikant has been instrumental in steering the company towards its goals. His leadership style fosters innovation and encourages team collaboration.
              </p>
            </div>
          </div>

          {/* 🔹 CARD 2 */}
          <div className="border border-[#00BE5D] rounded-2xl overflow-hidden flex flex-col md:flex-row-reverse bg-white shadow-sm">

            {/* RIGHT PANEL with overlapping image */}
            <div className="relative w-full md:w-[260px] h-[300px] bg-white overflow-hidden">
              {/* Green background strip (50% on the right) */}
              <div className="absolute right-0 top-0 w-1/2 h-full bg-[#00BE5D] rounded-tr-2xl"></div>

              {/* Vertical Decorative Text */}
              <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-white/20 text-4xl font-black uppercase whitespace-nowrap z-0">
                COO
              </div>

              {/* Profile Image (Overlapping both) */}
              <div className="absolute inset-0 z-10">
                <Image
                  src={hardik}
                  alt="Hardik Manek"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center text-left md:text-right">
              <h3 className="text-2xl font-bold text-[#1a3a1f] mb-1">
                Hardik Manek
              </h3>
              <p className="text-xs font-bold text-[#00BE5D] mb-4 uppercase tracking-widest opacity-80">
                Co-Founder & COO
              </p>

              <p className="text-gray-600 lg:text-xl font-medium text-lg md:text-lg leading-relaxed ">
                Hardik plays a pivotal role in operational success, overseeing daily operations and ensuring a smooth claim process. His focus on efficiency and transparency builds strong customer trust.
              </p>
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

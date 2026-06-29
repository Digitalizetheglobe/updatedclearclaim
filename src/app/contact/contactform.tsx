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
import Image from "next/image";
import phoneImg from "../../../public/images/phone-call.png";
import emailImg from "../../../public/images/email.png";
import addressImg from "../../../public/images/location.png";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current || formSubmitting) return;

    const form = formRef.current;
    const first_name = (form.querySelector('[name="first_name"]') as HTMLInputElement)?.value?.trim() ?? "";
    const last_name = (form.querySelector('[name="last_name"]') as HTMLInputElement)?.value?.trim() ?? "";
    const phoneRaw = (form.querySelector('[name="phone"]') as HTMLInputElement)?.value?.replace(/\D/g, "") ?? "";
    const city = (form.querySelector('[name="city"]') as HTMLInputElement)?.value?.trim() ?? "";
    const email = (form.querySelector('[name="email"]') as HTMLInputElement)?.value?.trim() ?? "";
    const message = (form.querySelector('[name="message"]') as HTMLTextAreaElement)?.value?.trim() ?? "";

    const phone_number = phoneRaw ? `+91 ${phoneRaw}` : "";

    const payload = { first_name, last_name, phone_number, city, email, message };

    setFormSubmitting(true);
    fetch("http://localhost:5000/api/contact", {
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
      icon: <MapPin className="w-6 h-6 text-[#00BE5D]" />,
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
    <div className="min-h-screen bg-slate-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#00BE5D]/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-[#00BE5D] font-semibold tracking-wider uppercase text-sm block mb-4">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BE5D] to-[#008C44]">Conversation</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions about claim settlements? Our experts are here to provide free consultation and guide you through every step.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 bg-gradient-to-br from-[#1a3a1f] via-[#2d5a34] to-[#00BE5D] p-8 md:p-12 text-white relative"
          >
            {/* Background Decorative Circles */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-black/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col h-full">
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-10 flex-grow">
                {infoItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target={item.title === "Our Office" ? "_blank" : undefined}
                    rel={item.title === "Our Office" ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 10 }}
                    className="flex items-start group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mr-5 group-hover:bg-white group-hover:text-[#00BE5D] transition-all duration-300 border border-white/20">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white/90 group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-white/70 group-hover:text-white/90 transition-colors mt-1 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Map Preview or Social Placeholder */}
              <div className="mt-12 group relative rounded-2xl overflow-hidden border border-white/20 h-48 sm:h-64 shadow-lg ring-1 ring-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7566.28390458752!2d73.77102345228194!3d18.52248629551362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb9349e1eeb%3A0xf79a3b1ab0fcc2a6!2sClearclaim%20Ventures%20Private%20Limited!5e0!3m2!1sen!2sus!4v1734504174452!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(90%)" }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 flex items-center">
                  <span className="text-xs bg-[#00BE5D] text-white px-2 py-1 rounded font-medium shadow-sm flex items-center">
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
            className="lg:col-span-7 p-8 md:p-12 lg:p-16"
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

              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-sm font-medium text-slate-700 ml-1">
                  Phone Number
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-medium border-r border-slate-200 pr-3">+91</span>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter 10 Digit Number"
                    maxLength={10}
                    pattern="^\d{10}$"
                    onInput={(e) => {
                      const target = e.target as HTMLInputElement;
                      target.value = target.value.replace(/\D/g, "");
                    }}
                    className="w-full rounded-xl py-3 pl-16 pr-4 bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:ring-2 focus:ring-[#00BE5D]/20 focus:border-[#00BE5D] outline-none transition-all duration-200 shadow-sm placeholder:text-slate-400"
                    required
                    title="Phone number must be exactly 10 digits"
                  />
                </div>
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
                <label htmlFor="agree" className="ml-3 text-sm text-slate-600 leading-tight cursor-pointer">
                  I agree to receive updates via email or phone. I understand my data is protected.
                </label>
              </div>

              <motion.button
                type="submit"
                disabled={formSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full group bg-[#00BE5D] text-white rounded-xl py-4 flex items-center justify-center font-bold text-base shadow-xl shadow-[#00BE5D]/20 hover:bg-[#008C44] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
              >
                {formSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing Request...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Get Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </motion.button>
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

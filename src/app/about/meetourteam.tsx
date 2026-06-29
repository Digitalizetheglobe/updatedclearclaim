"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, Variants } from "framer-motion";
import aniket from "../../../public/team/aniket.png";
import dhnyanesh from "../../../public/team/dhnyesh.png";
import dhanshree from "../../../public/team/dhanshree.png";
import vipul from "../../../public/team/vipul.png";
import vishupriya from "../../../public/team/vishupriya.png";
import shanjivani from "../../../public/team/shanjivani.png";
import piyush from "../../../public/team/iyush.png";
import isha from "../../../public/team/sha.png";
import prathmesh from "../../../public/team/rathmesh.png";
import ashwini from "../../../public/team/shwini.png";
import kishor from "../../../public/team/kishor.png";
import swapil from "../../../public/team/wapnil.png";
import suyash from "../../../public/team/suyash.png";
import driraj from "../../../public/team/dhriraj.png";
import harshada from "../../../public/team/harshada.png";
import ganesh from "../../../public/team/ganesh.png";
import chandra from "../../../public/team/chandkant.png";
import amol from "../../../public/team/Amol Rahatkar.jpg";
import hrishikesh from "../../../public/team/Hrishikesh Albhar.png";
import rajshree from "../../../public/team/Rajashree Laygude.png";
import vaibhav from "../../../public/team/vaibhav-kadam.png";
import sarika from "../../../public/team/Sarika Kole.png";
import teammember from "../../../public/team/3.png";
import dipali from "../../../public/team/Dipali Tayade.png";
import poojapawar from "../../../public/team/Pooja Pawar.png";

interface TeamMember {
  name: string;
  src: StaticImageData | string;
  role: string;
}

interface AdvisoryMember {
  name: string;
  role: string;
  image: StaticImageData | string;
}

export default function Meetourteam() {
  const [coreTeam, setCoreTeam] = useState<TeamMember[]>([]);
  const [advisoryTeam, setAdvisoryTeam] = useState<AdvisoryMember[]>([]);


  useEffect(() => {
    // Fetch Core Team
    fetch("http://localhost:5000/api/core-team/active")
      .then((res) => res.ok ? res.json() : null)
      .then((json) => {
        if (json && json.success && Array.isArray(json.data)) {
          const mappedTeam = json.data.map((member: any) => ({
            name: member.fullName,
            src: `http://localhost:5000/uploads/update/${member.photo}`,
            role: member.designation
          }));
          setCoreTeam(mappedTeam);
        }
      })
      .catch(() => { });

    // Fetch Advisory Team
    fetch("http://localhost:5000/api/advisory-team/active")
      .then((res) => res.ok ? res.json() : null)
      .then((json) => {
        if (json && json.success && Array.isArray(json.data)) {
          const mappedAdvisory = json.data.map((member: any) => ({
            name: member.fullName,
            image: `http://localhost:5000/uploads/update/${member.photo}`,
            role: member.designation
          }));
          setAdvisoryTeam(mappedAdvisory);
        }
      })
      .catch(() => { });
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="bg-slate-50 min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      {/* Header Section */}
      <section className="py-20 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              Behind the scenes
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#283655] tracking-tight leading-tight">
              Meet Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a3a1f] via-[#2d5a34] to-[#00BE5D]">
                Core Team
              </span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#1a3a1f] to-[#00BE5D] mx-auto mt-6 rounded-full opacity-40 mb-16"></div>
          </motion.div>
        </div>

        {/* Core Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        >
          {coreTeam.length > 0 ? (
            coreTeam.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative flex items-center bg-white p-2 rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.2)] transition-all duration-300 border border-slate-100 border-l-[12px] border-l-[#00BE5D]"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0">
                  <div
                    className="absolute -inset-[4px]  rounded-full z-0 "

                  ></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-[4px] border-white z-10 shadow-sm">
                    <Image
                      src={member.src}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="px-6 flex-1 min-w-0">
                  <h4 className="text-lg font-bold text-[#283655] group-hover:text-emerald-600 transition-colors duration-300 truncate">
                    {member.name}
                  </h4>
                  <p className="text-sm font-semibold text-emerald-500/80 mt-0.5 truncate uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400 py-10">No core team members found.</div>
          )}
        </motion.div>
      </section>

      {/* Advisory Team Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#283655] tracking-tight leading-tight">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a3a1f] via-[#2d5a34] to-[#00BE5D]">
                Advisory Team
              </span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#1a3a1f] to-[#00BE5D] mx-auto mt-6 rounded-full opacity-40 mb-16"></div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
          >
            {advisoryTeam.length > 0 ? (
              advisoryTeam.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative flex items-center bg-white p-2 rounded-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.2)] transition-all duration-300 border border-slate-100 border-l-[12px] border-l-emerald-500"
                >
                  <div className="relative w-24 h-24 shrink-0">

                    <div className="relative w-full h-full rounded-full overflow-hidden border-[4px] border-white z-10 shadow-sm">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="px-6 flex-1 min-w-0">
                    <h4 className="text-lg font-bold text-[#283655] group-hover:text-emerald-600 transition-colors duration-300 truncate">
                      {member.name}
                    </h4>
                    <p className="text-xs font-semibold text-emerald-500/80 mt-0.5 truncate uppercase tracking-wider">
                      {member.role}
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1 italic line-clamp-1">
                      Strategic domain consultant.
                    </p>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-400 py-10">No advisory members found.</div>
            )}
          </motion.div>
        </div>
      </section>

    </div>
  );
}



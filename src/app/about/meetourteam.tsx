"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

interface TeamMember {
  id: number;
  fullName: string;
  photo: string | null;
  designation: string;
  linkedinUrl?: string;
}

export default function Meetourteam() {
  const [coreTeam, setCoreTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://apicms.clearclaim.in";
        const res = await fetch(`${apiUrl}/api/team/active`, { cache: 'no-store' });
        if (!res.ok) throw new Error("Failed to fetch team");
        const json = await res.json();
        if (json.success && json.data) {
          const allMembers: TeamMember[] = json.data;
          
          const core = allMembers.filter(m => !(m.designation || '').toLowerCase().includes('advisory'));
          
          setCoreTeam(core);
        }
      } catch (error) {
        console.error("Error fetching team:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
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

  if (loading) {
    return (
      <div className="bg-slate-50 min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
        <section className="py-20 px-6 sm:px-10">
          <div className="max-w-7xl mx-auto text-center">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              Behind the scenes
            </span>
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-[#283655] tracking-tight">
              Meet Our{" "}
              <span className="text-[#00BE5D]">
                Core Team
              </span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#00BE5D] to-[#00BE5D]/40 mx-auto mt-6 rounded-full opacity-40 mb-16"></div>
          </div>

          <div className="mt-20 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-full max-w-[280px] mx-auto bg-white p-3 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] animate-pulse"
              >
                <div className="relative w-full aspect-[3/4] rounded-2xl bg-slate-100" />
                <div className="mt-5 pb-2 px-2 text-center">
                  <div className="h-6 w-3/4 bg-slate-200 mx-auto rounded-md" />
                  <div className="h-4 w-1/2 bg-slate-200 mx-auto rounded-md mt-2.5" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

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
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-[#283655] tracking-tight">
              Meet Our{" "}
              <span className="text-[#00BE5D]">
                Core Team
              </span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#00BE5D] to-[#00BE5D]/40 mx-auto mt-6 rounded-full opacity-40 mb-16"></div>
          </motion.div>
        </div>

        {/* Core Team Grid */}
        {coreTeam.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-20 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4"
          >
            {coreTeam.map((member) => (
              <motion.div
                key={member.fullName}
                variants={itemVariants}
                className="group relative w-full max-w-[280px] mx-auto bg-white p-3 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(0,190,93,0.15)] transition-all duration-500 ease-out hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-slate-50">
                  <img
                    src={member.photo ? (member.photo.startsWith('http') ? member.photo : `${process.env.NEXT_PUBLIC_API_URL || "https://apicms.clearclaim.in"}/uploads/update/${member.photo}`) : "/placeholder-user.jpg"}
                    alt={member.fullName}
                    className="object-cover object-top w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                    onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.fullName)}&background=00BE5D&color=fff`; }}
                  />
                  {/* Premium Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#283655]/80 via-[#283655]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Text Section */}
                <div className="mt-5 pb-2 px-2 text-center transition-transform duration-500 ease-out group-hover:-translate-y-1 relative z-10">
                  <h4 className="text-xl font-extrabold text-[#283655] transition-colors duration-300">
                    {member.fullName}
                  </h4>
                  <p className="text-sm font-bold text-[#00BE5D] mt-1.5 uppercase tracking-[0.15em]">
                    {member.designation}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center text-gray-400 py-10">No core team members found.</div>
        )}
      </section>
    </div>
  );
}

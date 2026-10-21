"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export function TeamSection() {
  const team = [
    {
      name: "Miuranga W.A.R",
      id: "IT22209320",
      role: "BSc (Hons) Information Technology",
      university: "SLIIT",
      area: "Tea Leaf Disease Detection & Pattern Analysis",
      model: "YOLOv8s Model (96.1% mAP)",
      isUserComponent: true,
      image: "/team/miuranga.png",
      github: "https://github.com/Ravidu612",
      linkedin: "https://www.linkedin.com/in/ravidu-miuranga-b3a4692bb",
      email: "mailto:ravidu612@gmail.com",
    },
    {
      name: "Gunasekara L.M.N.P",
      id: "IT22267986",
      role: "BSc (Hons) Information Technology",
      university: "SLIIT",
      area: "Labour Management & Welfare Optimization",
      model: "LightGBM + ESP32-S3 IoT (82% Acc)",
      isUserComponent: false,
      image: "/team/gunasekara-lmnp.png",
      github: "https://github.com/Nethmi-02",
      linkedin: "https://www.linkedin.com/in/nethmini-gunasekara-7073bb371",
      email: "mailto:nethminiprabodya3@gmail.com",
    },
    {
      name: "Gunasekara G.N.D",
      id: "IT22279620",
      role: "BSc (Hons) Information Technology",
      university: "SLIIT",
      area: "Tea-Specific Weather & Climate Intelligence System",
      model: "GBR + Random Forest (89% Acc)",
      isUserComponent: false,
      image: "/team/gunasekara-gnd.png",
      github: "https://github.com/NaveenDG2002",
      linkedin: "https://www.linkedin.com/in/naveen-gunasekara-26438a26b/",
      email: "mailto:naveengunasekara62@gmail.com",
    },
    {
      name: "Pathirana I.M.",
      id: "IT22282668",
      role: "BSc (Hons) Information Technology",
      university: "SLIIT",
      area: "AI-Based Tea Sorting & Grading Automation",
      model: "ConvNeXtV2-Tiny (99.7% F1)",
      isUserComponent: false,
      image: "/team/pathirana.png",
      github: "https://github.com/InduniPathirana",
      linkedin: "https://www.linkedin.com/in/induni-pathiran-727968263/",
      email: "mailto:Pathiranainduni925@gamil.com",
    },
  ];

  return (
    <section id="team" className="py-24 relative bg-background border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span>Group ID: R26-IT-118</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Research <span className="text-primary">Team Members</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
            The undergraduate researchers at SLIIT driving individual and collective engineering milestones for TeaGuard AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`glass p-6 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-1.5 transition-all shadow-sm hover:shadow-xl relative overflow-hidden border ${
                member.isUserComponent ? "border-emerald-500/50 bg-emerald-500/5 ring-1 ring-emerald-500/20" : "border-border"
              }`}
            >
              {/* Badge for user's individual component */}
              {member.isUserComponent && (
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  Lead Component
                </div>
              )}

              {/* Decorative top gradient */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-primary/10 to-transparent -z-10" />

              <div className="w-24 h-24 rounded-full overflow-hidden bg-primary/20 flex items-center justify-center mb-4 border-4 border-background shadow-md">
                <img
                  src={member.image}
                  alt={`${member.name} photograph`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="inline-block px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-mono font-bold mb-1.5">
                {member.id}
              </div>

              <h3 className="font-bold text-base text-foreground mb-0.5">{member.name}</h3>
              <p className="text-[11px] text-foreground/50 mb-3 font-mono">{member.role} · {member.university}</p>

              <div className="bg-foreground/5 p-3 rounded-xl text-xs text-foreground/80 font-medium w-full mb-2 flex-1 flex flex-col items-center justify-center border border-border/50">
                <span className="font-semibold text-primary block mb-1">{member.area}</span>
                <span className="text-[10px] font-mono text-foreground/50">{member.model}</span>
              </div>

              <div className="flex items-center gap-2 mt-auto pt-3">
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-background hover:bg-primary/10 hover:text-primary transition-colors border border-border text-foreground/75"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-background hover:bg-blue-500/10 hover:text-blue-500 transition-colors border border-border text-foreground/75"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <FaLinkedin className="w-3.5 h-3.5" />
                  </a>
                )}
                {member.email && (
                  <a
                    href={member.email}
                    className="p-2 rounded-lg bg-background hover:bg-red-500/10 hover:text-red-500 transition-colors border border-border text-foreground/75"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link to Full About Us Page */}
        <div className="text-center">
          <Link
            href="/about-us"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground/5 hover:bg-primary/10 hover:text-primary transition-colors font-semibold text-xs md:text-sm border border-border"
          >
            <span>View Full Group Profile, Supervisors & Achievements</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

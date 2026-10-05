"use client";

import { motion } from "framer-motion";
import { Mail, User } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function TeamSection() {
  const team = [
    {
      name: "Miuranga W.A.R",
      role: "BSc (Hons) Information Technology",
      university: "SLIIT",
      area: "Tea Leaf Disease Detection & Pattern Analysis",
      image: "/team/miuranga.png",
      github: "https://github.com/Ravidu612",
      linkedin: "https://www.linkedin.com/in/ravidu-miuranga-b3a4692bb",
      email: "mailto:ravidu612@gmail.com",
    },
    {
      name: "Gunasekara L.M.N.P",
      role: "BSc (Hons) Information Technology",
      university: "SLIIT",
      area: "Labour Management & Welfare Optimization",
      image: "/team/gunasekara-lmnp.png",
      github: "https://github.com/Nethmi-02",
      linkedin: "https://www.linkedin.com/in/nethmini-gunasekara-7073bb371",
      email: "mailto:nethminiprabodya3@gmail.com",
    },
    {
      name: "Gunasekara G.N.D",
      role: "BSc (Hons) Information Technology",
      university: "SLIIT",
      area: "Tea-Specific Weather & Climate Intelligence System",
      image: "/team/gunasekara-gnd.png",
      github: "https://github.com/NaveenDG2002",
      linkedin: "https://www.linkedin.com/in/naveen-gunasekara-26438a26b/",
      email: "mailto:naveengunasekara62@gmail.com",
    },
    {
      name: "Pathirana I.M.",
      role: "BSc (Hons) Information Technology",
      university: "SLIIT",
      area: "AI-Based Tea Sorting & Grading Automation",
      image: "/team/pathirana.png",
      github: "https://github.com/InduniPathirana",
      linkedin: "https://www.linkedin.com/in/induni-pathiran-727968263/",
      email: "mailto:Pathiranainduni925@gamil.com",
    }
  ];

  return (
    <section id="team" className="py-24 relative bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Research <span className="text-primary">Team</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
          <p className="text-lg text-foreground/70">
            Meet the undergraduate researchers behind TeaGuard AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform shadow-lg relative overflow-hidden"
            >
              {/* Decorative Background for Image */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-primary/10 to-transparent -z-10" />

              <div className="w-30 h-30 rounded-full overflow-hidden bg-primary/20 flex items-center justify-center mb-6 border-4 border-background shadow-md">
                <img
                  src={member.image}
                  alt={`${member.name} photo`}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-bold text-lg mb-1">{member.name}</h3>
              <p className="text-xs text-foreground/50 mb-3 font-mono">{member.role} | {member.university}</p>

              <div className="bg-foreground/5 px-3 py-2 rounded-lg text-sm text-primary font-medium w-full mb-6 flex-1 flex items-center justify-center">
                {member.area}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-background hover:bg-primary/10 hover:text-primary transition-colors border border-border"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-background hover:bg-blue-500/10 hover:text-blue-500 transition-colors border border-border"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                )}
                {member.email && (
                  <a
                    href={member.email}
                    className="p-2 rounded-full bg-background hover:bg-red-500/10 hover:text-red-500 transition-colors border border-border"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { User, Mail } from "lucide-react";

export function SupervisorsSection() {
  const supervisors = [
    {
      title: "Research Supervisor",
      name: "Ms. Uthpala Samarakoon",
      department: "Department of Information Technology",
      specialization: "Senior Lecturer Software Engineering",
      email: "uthpala.s@sliit.lk",
      image: "/supervisors/uthpalas.png",
    },
    {
      title: "Co-Supervisor",
      name: "Ms. Suriyaa Kumari",
      department: "Department of Information Technology",
      specialization: "Lecturer in Software Engineering",
      email: "suriyaa.k@sliit.lk",
      image: "/supervisors/suriyas.png",
    }
  ];

  return (
    <section className="py-24 relative bg-foreground/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Project <span className="text-primary">Supervisors</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {supervisors.map((supervisor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass p-8 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6 relative overflow-hidden group"
            >
              {/* Decoration */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />

              <div className="w-24 h-24 rounded-full overflow-hidden bg-secondary/10 flex items-center justify-center shrink-0 border-4 border-background shadow-md">
                {supervisor.image ? (
                  <img
                    src={supervisor.image}
                    alt={`${supervisor.name} photo`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-10 h-10 text-secondary" />
                )}
              </div>

              <div className="text-center sm:text-left z-10">
                <div className="text-primary font-bold text-sm uppercase tracking-wider mb-2">
                  {supervisor.title}
                </div>
                <h3 className="font-bold text-xl mb-1">{supervisor.name}</h3>
                <p className="text-foreground/60 text-sm mb-4">{supervisor.department} | {supervisor.specialization}</p>

                <a
                  href={`mailto:${supervisor.email}`}
                  className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-foreground/5 hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" /> Email
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

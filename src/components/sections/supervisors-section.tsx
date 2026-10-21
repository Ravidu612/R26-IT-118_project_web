"use client";

import { motion } from "framer-motion";
import { User, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export function SupervisorsSection() {
  const supervisors = [
    {
      title: "Research Supervisor",
      name: "Ms. Uthpala Samarakoon",
      department: "Department of Information Technology",
      specialization: "Senior Lecturer, Software Engineering",
      email: "uthpala.s@sliit.lk",
      image: "/supervisors/uthpalas.png",
    },
    {
      title: "Co-Supervisor",
      name: "Ms. Suriyaa Kumari",
      department: "Department of Information Technology",
      specialization: "Lecturer, Software Engineering",
      email: "suriyaa.k@sliit.lk",
      image: "/supervisors/suriyas.png",
    }
  ];

  return (
    <section className="py-24 relative bg-foreground/5 border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span>Academic Supervision</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Project <span className="text-primary">Supervisors</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
            Guided under the academic supervision of the Department of Information Technology, Faculty of Computing, SLIIT.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {supervisors.map((supervisor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass p-8 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6 relative overflow-hidden group border border-border"
            >
              {/* Decoration */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />

              <div className="w-24 h-24 rounded-2xl overflow-hidden bg-primary/10 flex items-center justify-center shrink-0 border-2 border-primary/20 shadow-md">
                {supervisor.image ? (
                  <img
                    src={supervisor.image}
                    alt={`${supervisor.name} photo`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-10 h-10 text-primary" />
                )}
              </div>

              <div className="text-center sm:text-left z-10 flex-1">
                <div className="text-primary font-bold text-xs font-mono uppercase tracking-wider mb-1">
                  {supervisor.title}
                </div>
                <h3 className="font-bold text-xl mb-1 text-foreground">{supervisor.name}</h3>
                <p className="text-foreground/70 text-xs mb-1 font-semibold">{supervisor.specialization}</p>
                <p className="text-foreground/50 text-xs mb-4">{supervisor.department}</p>

                <a
                  href={`mailto:${supervisor.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-foreground/5 hover:bg-primary/10 hover:text-primary transition-colors border border-border text-foreground"
                >
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  <span>{supervisor.email}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/about-us"
            className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"
          >
            <span>Learn more about supervisory guidance and verified institutional partnerships</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

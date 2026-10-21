"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export function TimelineSection() {
  const timeline = [
    { title: "Topic Approval & TAF Submission", stage: "Milestone 1 · 15%", date: "Jan 2026", status: "completed" },
    { title: "PP1 Presentation & Architecture", stage: "Milestone 2 · 15%", date: "Mar 2026", status: "completed" },
    { title: "PP2 Presentation & Paper Submission", stage: "Milestone 3 · 18%", date: "Jul 2026", status: "completed" },
    { title: "System Integration & IoT Sync", stage: "Core Prototype", date: "Sep 2026", status: "completed" },
    { title: "Wewawatte Field Trials & Validation", stage: "Industry Pilot", date: "Oct 2026", status: "in-progress" },
    { title: "Final Thesis & Code Submission", stage: "Milestone 4 · 32%", date: "Nov 2026", status: "pending" },
    { title: "Final Viva Voce & Defense", stage: "Milestone 5 · 20%", date: "Nov 2026", status: "pending" },
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
            <span>Progress Tracking</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Project <span className="text-primary">Timeline</span> & Milestones
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
            Follow the 16-week research progression from proposal sign-off to final viva voce defense.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative border-l-2 border-primary/20 ml-4 md:ml-1/2">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="mb-8 relative pl-8 md:pl-0"
              >
                <div
                  className={`
                  md:w-1/2 flex flex-col 
                  ${idx % 2 === 0 ? "md:items-end md:pr-12 md:text-right" : "md:ml-auto md:pl-12 md:text-left"}
                `}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 left-[-5px] md:left-1/2 md:-ml-[5px] w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

                  <div
                    className={`glass p-5 rounded-2xl shadow-sm inline-block min-w-[240px] border-l-4 transition-all hover:shadow-md ${
                      item.status === "completed"
                        ? "border-l-emerald-500"
                        : item.status === "in-progress"
                        ? "border-l-amber-500"
                        : "border-l-foreground/20"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1 justify-start md:justify-inherit">
                      <span className="text-[11px] font-mono text-primary font-bold">{item.stage}</span>
                      <span className="text-xs text-foreground/40">•</span>
                      <span className="text-[11px] font-mono text-foreground/60">{item.date}</span>
                    </div>

                    <h3 className="font-bold text-base text-foreground mb-2">{item.title}</h3>

                    <span
                      className={`text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider font-bold inline-flex items-center gap-1 ${
                        item.status === "completed"
                          ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                          : item.status === "in-progress"
                          ? "bg-amber-500/15 text-amber-600 dark:text-amber-400"
                          : "bg-foreground/5 text-foreground/50"
                      }`}
                    >
                      {item.status === "completed" && <CheckCircle2 className="w-3 h-3" />}
                      {item.status === "in-progress" && <Clock className="w-3 h-3" />}
                      {item.status === "pending" && <Calendar className="w-3 h-3" />}
                      <span>{item.status.replace("-", " ")}</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Link to Full Milestones Page */}
        <div className="text-center">
          <Link
            href="/milestones"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-xs md:text-sm hover:bg-primary/90 transition-all shadow-md hover:shadow-primary/25"
          >
            <span>Interactive Assessment Inspector & Dropdown</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

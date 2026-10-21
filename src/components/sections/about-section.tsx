"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, BookOpen, Users2 } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  const features = [
    "Predictive ML analytics for workforce allocation & fatigue mitigation",
    "YOLOv8s computer vision for 6-class tea leaf disease identification",
    "Micro-climate gradient boosting & Random Forest disease outbreak risk",
    "ConvNeXtV2-Tiny optical deep learning for automated tea quality grading"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span>Project Overview</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            About The <span className="text-primary">Research Project</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
            The Sri Lankan tea industry faces critical challenges including labour shortages, 
            crop foliar diseases, unpredictable weather patterns, and inconsistent quality grading. 
            TeaGuard AI addresses these issues through an integrated, intelligent decision support system 
            engineered specifically for Sri Lankan tea estates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group border border-border">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors z-0" />
              <div className="relative z-10">
                <span className="text-xs font-mono text-primary font-bold uppercase tracking-wider block mb-1">
                  Academic Motivation
                </span>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Transforming Ceylon Tea Management
                </h3>
                <p className="text-foreground/75 text-sm leading-relaxed mb-6">
                  To bridge the technological divide in traditional tea plantation management by introducing 
                  state-of-the-art Artificial Intelligence to automate and optimize key operational areas, 
                  improving productivity, worker welfare, and sustainable cultivation.
                </p>
                <ul className="space-y-3 mb-6">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/domain"
                  className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Full Literature Survey & Research Methodology</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              {
                title: "Problem Statement",
                desc: "Manual paper records and subjective human judgment lead to workload imbalances, delayed disease response, and export quality inconsistency.",
              },
              {
                title: "Research Gap",
                desc: "Existing agricultural systems are isolated point solutions lacking physiological worker health monitoring and tea-specific agro-climatic intelligence.",
              },
              {
                title: "Approved Main Objective",
                desc: "Design and evaluate an integrated AI-driven decision support system uniting labor, disease, climate, and tea sorting for Sri Lankan tea estates.",
              },
              {
                title: "Expected Outcomes",
                desc: "A centralized real-time dashboard delivering predictive workforce allocation, instant disease diagnosis, 8-hour weather forecasts, and batch grading reports.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-xl hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md border border-border"
              >
                <h4 className="text-base font-bold text-primary mb-2">{item.title}</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Action Link to About Us */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
          <Link
            href="/about-us"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground/5 hover:bg-primary/10 hover:text-primary transition-colors border border-border font-semibold text-foreground"
          >
            <Users2 className="w-3.5 h-3.5 text-primary" />
            <span>Meet Research Group R26-IT-118 & Supervisors</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}

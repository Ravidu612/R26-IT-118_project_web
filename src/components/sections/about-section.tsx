"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  const features = [
    "Predictive analytics for workforce allocation",
    "Deep Learning CNN for disease detection",
    "Machine learning for climate risk prediction",
    "Computer vision for automated tea grading"
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            About The <span className="text-primary">Project</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
          <p className="text-lg text-foreground/70 leading-relaxed">
            The Sri Lankan tea industry faces critical challenges including labour shortages, 
            crop diseases, unpredictable weather patterns, and inconsistent quality grading. 
            TeaGuard AI addresses these issues through a unified, intelligent decision support system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors z-0" />
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Research Motivation</h3>
                <p className="text-foreground/70 mb-4">
                  To bridge the technological gap in traditional tea estate management by introducing 
                  state-of-the-art Artificial Intelligence to automate and optimize key operational areas, 
                  thereby increasing productivity and sustainability.
                </p>
                <ul className="space-y-3">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
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
              { title: "Problem Statement", desc: "Manual processes and lack of data-driven decision making lead to operational inefficiencies." },
              { title: "Research Gap", desc: "Existing solutions are fragmented and not tailored for Sri Lankan geographical & climatic conditions." },
              { title: "Main Objective", desc: "Develop an intelligent AI-powered decision support system specifically for Sri Lankan tea estates." },
              { title: "Expected Outcomes", desc: "A fully integrated dashboard providing real-time insights, predictions, and actionable recommendations." }
            ].map((item, idx) => (
              <div key={idx} className="glass p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 shadow-md hover:shadow-xl">
                <h4 className="text-lg font-semibold text-primary mb-2">{item.title}</h4>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

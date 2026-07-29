"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function ObjectivesTimeline() {
  const objectives = [
    "Real time monitoring of labour welfare and productivity using IoT and AI",
    "Improve labour allocation and welfare through data-driven insights",
    "Detect diseases early and prevent yield loss using mobile CNN",
    "Improve grading accuracy and quality control automatically",
    "Provide reliable, localized weather predictions for optimal harvesting",
  ];

  return (
    <section id="objectives" className="py-24 relative bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Research <span className="text-primary">Objectives</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
            
            <div className="glass p-8 rounded-2xl border-l-4 border-l-primary shadow-lg relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
              <h3 className="text-xl font-bold mb-3 text-primary">Main Objective</h3>
              <p className="text-foreground/80 text-lg leading-relaxed">
                Develop an intelligent AI-powered decision support system for Sri Lankan tea estate management to modernize the traditional industry.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-6">Sub Objectives</h3>
            <div className="space-y-4">
              {objectives.map((obj, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + (idx * 0.1) }}
                  className="glass-panel p-4 rounded-xl flex items-center gap-4 hover:border-primary/50 transition-colors group"
                >
                  <div className="bg-background rounded-full p-2 shadow-inner group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground/80 group-hover:text-foreground transition-colors">{obj}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

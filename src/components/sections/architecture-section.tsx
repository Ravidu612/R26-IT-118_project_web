"use client";

import { motion } from "framer-motion";
import { Server, Database, BrainCircuit, Cloud, Smartphone, LayoutDashboard, ArrowDown } from "lucide-react";

export function ArchitectureSection() {
  const nodes = [
    { id: "frontend", icon: LayoutDashboard, label: "Frontend", desc: "React Dashboard", col: "col-start-2" },
    { id: "backend", icon: Server, label: "Backend", desc: "Node.js Server", col: "col-start-2" },
    { id: "ai", icon: BrainCircuit, label: "AI Services", desc: "Prediction Models", col: "col-start-2" },
    { id: "db", icon: Database, label: "Database", desc: "MongoDB", col: "col-start-1 row-start-3" },
    { id: "weather", icon: Cloud, label: "External APIs", desc: "Weather Data", col: "col-start-3 row-start-3" }
  ];

  return (
    <section className="py-24 relative bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            System <span className="text-primary">Architecture</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
          <p className="text-lg text-foreground/70">
            A robust, scalable cloud-based architecture connecting the mobile application, web dashboard, and AI microservices.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="flex flex-col items-center justify-center gap-6">
            
            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass p-6 rounded-2xl w-64 text-center shadow-lg border-primary/20 relative z-10"
            >
              <LayoutDashboard className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg">Frontend</h3>
              <p className="text-sm text-foreground/60">React & Next.js</p>
            </motion.div>

            <ArrowDown className="w-6 h-6 text-primary animate-bounce" />

            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass p-6 rounded-2xl w-64 text-center shadow-lg border-primary/20 relative z-10"
            >
              <Server className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg">Backend API</h3>
              <p className="text-sm text-foreground/60">Node.js & Express</p>
            </motion.div>

            <ArrowDown className="w-6 h-6 text-primary animate-bounce" />

            {/* Horizontal Split for AI, DB, API */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl">
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="glass p-6 rounded-2xl text-center shadow-lg border-primary/20"
              >
                <Database className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg">Database</h3>
                <p className="text-sm text-foreground/60">MongoDB</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="glass p-6 rounded-2xl text-center shadow-lg border-primary/20 bg-primary/5"
              >
                <BrainCircuit className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg">AI Services</h3>
                <p className="text-sm text-foreground/60">Python, TensorFlow, OpenCV</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="glass p-6 rounded-2xl text-center shadow-lg border-primary/20"
              >
                <Cloud className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg">External APIs</h3>
                <p className="text-sm text-foreground/60">OpenWeather, Visual Crossing</p>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

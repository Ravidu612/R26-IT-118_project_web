"use client";

import { motion } from "framer-motion";
import { Server, Database, BrainCircuit, Cloud, Smartphone, LayoutDashboard, ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function ArchitectureSection() {
  const [selectedNode, setSelectedNode] = useState(0);

  const architectureNodes = [
    {
      id: "client",
      title: "Presentation Layer",
      subtitle: "Web Dashboard & Mobile App",
      tech: "Next.js 15, React, Tailwind CSS, Flutter",
      description: "Provides plantation managers and field officers with real-time diagnostic alerts, labor allocation heatmaps, and climate notifications.",
      icon: LayoutDashboard,
      badge: "User Interface",
      color: "border-emerald-500/40 text-emerald-500 bg-emerald-500/10"
    },
    {
      id: "api",
      title: "API Gateway & Services",
      subtitle: "Express & Node.js Backend",
      tech: "Node.js, Express, REST APIs, JWT Auth",
      description: "Handles secure request routing, user authentication, data synchronization between estate sensors and cloud services.",
      icon: Server,
      badge: "Backend Core",
      color: "border-blue-500/40 text-blue-500 bg-blue-500/10"
    },
    {
      id: "ai",
      title: "AI Microservices Engine",
      subtitle: "Machine Learning Pipeline",
      tech: "Python, TensorFlow, OpenCV, Scikit-Learn",
      description: "Executes deep learning CNN inference for disease detection, computer vision grading, labor optimization algorithms, and weather risk prediction.",
      icon: BrainCircuit,
      badge: "Deep Learning Core",
      color: "border-purple-500/40 text-purple-500 bg-purple-500/10"
    },
    {
      id: "data",
      title: "Persistence & External Telemetry",
      subtitle: "Database & Weather APIs",
      tech: "MongoDB Atlas, OpenWeather API, Cloudinary",
      description: "Stores historical yield metrics, plantation sensor logs, estate worker profiles, and live meteorological weather data streams.",
      icon: Database,
      badge: "Storage & APIs",
      color: "border-amber-500/40 text-amber-500 bg-amber-500/10"
    }
  ];

  const pipelineSteps = [
    { step: "01", title: "Field Telemetry", desc: "Leaf photos, weather data & worker logs collected on site." },
    { step: "02", title: "API Ingestion", desc: "Secure REST gateway processes payload & authenticates session." },
    { step: "03", title: "AI Model Execution", desc: "CNNs analyze leaf disease & vision models grade tea quality." },
    { step: "04", title: "Actionable Insights", desc: "Real-time decision dashboard advises manager on field actions." }
  ];

  return (
    <section className="py-24 relative bg-background border-t border-border/30 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-4 border border-primary/20">
            <span>System Infrastructure</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            System <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-emerald-500 to-accent">Architecture</span>
          </h2>
          <p className="text-lg text-foreground/70 font-normal leading-relaxed">
            A resilient cloud-based microservices architecture linking field telemetry, deep learning computer vision, and real-time management dashboards.
          </p>
        </motion.div>

        {/* Nodes Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Node Cards Selector (Left 7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {architectureNodes.map((node, idx) => {
              const Icon = node.icon;
              const isSelected = selectedNode === idx;
              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  onClick={() => setSelectedNode(idx)}
                  className={`glass p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "border-primary bg-primary/10 shadow-lg scale-[1.02]"
                      : "border-border/50 hover:border-primary/40 hover:bg-foreground/5"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${node.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-foreground/5 text-foreground/70">
                      {node.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-1">{node.title}</h3>
                  <div className="text-xs font-mono text-primary mb-2">{node.subtitle}</div>
                  <p className="text-xs text-foreground/60 line-clamp-2">{node.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Inspector Card (Right 5 Cols) */}
          <div className="lg:col-span-5">
            <motion.div
              key={selectedNode}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="glass-panel p-8 rounded-3xl border border-primary/30 relative overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-4 text-xs font-mono text-primary font-bold tracking-widest uppercase">
                <Zap className="w-4 h-4" />
                <span>ARCHITECTURAL SPECIFICATION</span>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-2">
                {architectureNodes[selectedNode].title}
              </h3>
              <div className="text-sm font-mono text-foreground/60 mb-6">
                {architectureNodes[selectedNode].subtitle}
              </div>

              <div className="p-4 rounded-xl bg-foreground/5 border border-border/30 mb-6 font-mono text-xs">
                <span className="text-foreground/40 block mb-1">TECH STACK:</span>
                <span className="text-primary font-semibold">{architectureNodes[selectedNode].tech}</span>
              </div>

              <p className="text-sm text-foreground/75 leading-relaxed mb-6 font-normal">
                {architectureNodes[selectedNode].description}
              </p>

              <div className="pt-4 border-t border-border/30 flex items-center justify-between text-xs font-mono text-foreground/50">
                <span>Microservice Status: Active</span>
                <span className="text-emerald-500 font-bold">Latency: &lt; 120ms</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Data Pipeline Flow Steps */}
        <div className="pt-10 border-t border-border/30">
          <div className="text-xs font-mono font-bold text-foreground/50 uppercase tracking-widest text-center mb-8">
            End-to-End Execution Data Flow
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {pipelineSteps.map((step, idx) => (
              <div key={idx} className="glass p-5 rounded-2xl border border-border/40 relative group hover:border-primary/30 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                    STEP {step.step}
                  </span>
                  {idx < 3 && <ArrowRight className="w-4 h-4 text-foreground/30 hidden md:block" />}
                </div>
                <h4 className="font-bold text-sm text-foreground mb-1">{step.title}</h4>
                <p className="text-xs text-foreground/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

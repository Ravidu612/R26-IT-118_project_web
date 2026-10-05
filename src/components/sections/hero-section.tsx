"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Users, Activity, Sparkles, Cpu, ShieldCheck, ThermometerSun } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const highlights = [
    { title: "Disease Scan", status: "Active CNN Model", metric: "98.4% Acc.", icon: ShieldCheck, color: "text-emerald-500 bg-emerald-500/10" },
    { title: "Labour Index", status: "Optimal Allocation", metric: "+32% Prod.", icon: Users, color: "text-blue-500 bg-blue-500/10" },
    { title: "Climate Intel", status: "Micro-Forecast", metric: "26°C / 78% RH", icon: ThermometerSun, color: "text-amber-500 bg-amber-500/10" },
    { title: "Tea Vision", status: "BOPF Grade A", metric: "Computer Vision", icon: Cpu, color: "text-purple-500 bg-purple-500/10" },
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % highlights.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [highlights.length]);

  return (
    <section className="relative min-h-[92dvh] flex items-center justify-center overflow-hidden pt-28 pb-20 bg-grid-pattern">
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left"
          >
            {/* Status Pill */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono font-semibold tracking-wider uppercase backdrop-blur-md shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>SLIIT Research Project 2026 · IT26-118</span>
            </motion.div>

            {/* Display Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.08] text-foreground">
              Smart AI Intelligence for <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-emerald-500 to-accent">Tea Estate</span> Management
            </h1>

            <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl leading-relaxed font-normal">
              An integrated decision support platform empowering Sri Lankan tea plantations with AI disease detection, workforce welfare optimization, micro-climate prediction, and automated tea grading.
            </p>

            {/* CTAs & External Links */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link 
                href="#research"
                className="px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 flex items-center gap-2 group"
              >
                <span>Explore Research Suite</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#team"
                className="px-7 py-3.5 rounded-xl glass hover:bg-primary/10 text-foreground font-semibold transition-all border border-primary/20 hover:border-primary/50 flex items-center gap-2"
              >
                <Users className="w-4 h-4 text-primary" />
                <span>Research Team</span>
              </Link>
              <div className="flex items-center gap-2 pl-2">
                <a 
                  href="https://github.com/Ravidu612/R26-IT-118"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl glass hover:bg-foreground/10 transition-all border border-border group"
                  aria-label="GitHub Repository"
                >
                  <FaGithub className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="#documents"
                  className="p-3.5 rounded-xl glass hover:bg-foreground/10 transition-all border border-border group"
                  aria-label="Documentation"
                >
                  <FileText className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/40">
              <div>
                <div className="text-2xl font-bold font-mono text-primary">4 AI</div>
                <div className="text-xs text-foreground/60 font-medium">Specialized Modules</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-emerald-500">95%+</div>
                <div className="text-xs text-foreground/60 font-medium">Model Accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-accent">SLIIT</div>
                <div className="text-xs text-foreground/60 font-medium">Sri Lanka Research</div>
              </div>
            </div>
          </motion.div>

          {/* Right Interactive AI Demo Widget Card */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="glass-panel p-6 md:p-8 rounded-3xl relative overflow-hidden border border-primary/20 shadow-2xl">
              {/* Top Bar Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/30">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-foreground/50 ml-2">teaguard-ai-v2.0.live</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-mono">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span>SYSTEM ONLINE</span>
                </div>
              </div>

              {/* Main Interactive Screen */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-foreground/60 uppercase tracking-widest">Active Module Feed</span>
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>

                {/* Highlight Tab selector */}
                <div className="grid grid-cols-2 gap-3">
                  {highlights.map((item, idx) => {
                    const Icon = item.icon;
                    const isActive = activeTab === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        className={`p-4 rounded-2xl text-left transition-all duration-300 border ${
                          isActive
                            ? "bg-primary/10 border-primary shadow-md scale-[1.02]"
                            : "glass border-border/40 hover:border-primary/30"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className={`p-2 rounded-xl ${item.color}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-foreground/5 text-foreground/70">
                            {item.metric}
                          </span>
                        </div>
                        <div className="text-xs font-bold text-foreground mb-0.5">{item.title}</div>
                        <div className="text-[11px] text-foreground/60 font-mono">{item.status}</div>
                      </button>
                    );
                  })}
                </div>

                {/* Simulated Live Analytics Graph / Display Box */}
                <div className="p-4 rounded-2xl bg-foreground/5 border border-border/30 mt-4">
                  <div className="flex items-center justify-between mb-3 text-xs font-mono">
                    <span className="text-primary font-bold">MODULE DIAGNOSTICS</span>
                    <span className="text-foreground/50">Processing Live Stream</span>
                  </div>
                  <div className="h-2 w-full bg-foreground/10 rounded-full overflow-hidden mb-3">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-emerald-400 rounded-full"
                      animate={{ width: ["20%", "85%", "60%", "98%"] }}
                      transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
                    />
                  </div>
                  <p className="text-xs text-foreground/70 leading-normal">
                    {activeTab === 0 && "CNN Deep Learning model analyzing leaf spot patterns & blister blight risk."}
                    {activeTab === 1 && "Optimizing estate labor allocation matrix & plucking schedule based on yield."}
                    {activeTab === 2 && "Real-time micro-climate sensors feeding weather risk predictions."}
                    {activeTab === 3 && "Computer Vision inspecting leaf color spectrum, size & grade purity."}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

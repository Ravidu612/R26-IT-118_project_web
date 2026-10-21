"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Users,
  Activity,
  Sparkles,
  Cpu,
  ShieldCheck,
  ThermometerSun,
  BookOpen,
  Calendar,
  Layers,
  GraduationCap,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const highlights = [
    {
      title: "Disease Detection",
      subtitle: "Lead Component (Miuranga W.A.R)",
      status: "YOLOv8s Vision AI",
      metric: "96.1% mAP@0.5",
      icon: ShieldCheck,
      color: "text-emerald-500 bg-emerald-500/10",
      link: "/domain#objectives",
    },
    {
      title: "Labour Management",
      subtitle: "Gunasekara L.M.N.P",
      status: "LightGBM + ESP32-S3",
      metric: "82% Accuracy",
      icon: Users,
      color: "text-blue-500 bg-blue-500/10",
      link: "/domain#objectives",
    },
    {
      title: "Climate Intelligence",
      subtitle: "Gunasekara G.N.D",
      status: "GBR + Random Forest",
      metric: "89% Accuracy",
      icon: ThermometerSun,
      color: "text-amber-500 bg-amber-500/10",
      link: "/domain#objectives",
    },
    {
      title: "Tea Sorting Vision",
      subtitle: "Pathirana I.M",
      status: "ConvNeXtV2-Tiny",
      metric: "99.7% F1-score",
      icon: Cpu,
      color: "text-purple-500 bg-purple-500/10",
      link: "/domain#objectives",
    },
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % highlights.length);
    }, 4000);
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
              <span>R26-IT-118 · SLIIT Final Year Research Project 2026</span>
            </motion.div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.12] text-foreground">
              Intelligent Decision Support System for{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-emerald-500 to-accent">
                Sri Lankan Tea Estate
              </span>{" "}
              Management
            </h1>

            <p className="text-base md:text-lg text-foreground/80 mb-6 max-w-2xl leading-relaxed font-normal">
              <strong>TeaGuard AI</strong> unites computer vision, edge IoT physiological telemetry, meteorological machine learning, and optical grade classification into a unified decision support platform specifically engineered for the Sri Lankan plantation sector.
            </p>

            {/* Academic Component Subtitle */}
            <div className="mb-8 p-3 rounded-xl bg-primary/5 border border-primary/20 text-xs text-foreground/80 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-primary shrink-0" />
              <span>
                <strong>Faculty of Computing, SLIIT</strong> · Department of Information Technology · TIM Research Group
              </span>
            </div>

            {/* Calls to Action Linking to Required Sections */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <Link
                href="/domain"
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-xs md:text-sm hover:bg-primary/90 transition-all shadow-md hover:shadow-primary/30 hover:-translate-y-0.5 flex items-center gap-2 group"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Domain</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/milestones"
                className="px-5 py-3 rounded-xl glass hover:bg-primary/10 text-foreground font-semibold text-xs md:text-sm transition-all border border-primary/20 hover:border-primary/50 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-primary" />
                <span>Milestones</span>
              </Link>

              <Link
                href="/documents"
                className="px-5 py-3 rounded-xl glass hover:bg-primary/10 text-foreground font-semibold text-xs md:text-sm transition-all border border-border hover:border-primary/50 flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-primary" />
                <span>Documents</span>
              </Link>

              <Link
                href="/presentations"
                className="px-5 py-3 rounded-xl glass hover:bg-primary/10 text-foreground font-semibold text-xs md:text-sm transition-all border border-border hover:border-primary/50 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Presentations</span>
              </Link>

              <a
                href="https://github.com/Ravidu612/R26-IT-118"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl glass hover:bg-foreground/10 transition-all border border-border text-foreground/75 hover:text-primary"
                aria-label="GitHub Repository"
                title="Research GitHub Repository"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            </div>

            {/* Verified Research Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border/40">
              <div className="p-2 rounded-lg bg-card border border-border/60">
                <div className="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400">96.1%</div>
                <div className="text-[11px] text-foreground/60 font-medium">YOLOv8s mAP@0.5</div>
                <div className="text-[9px] text-primary font-mono">Disease Scan (Lead)</div>
              </div>
              <div className="p-2 rounded-lg bg-card border border-border/60">
                <div className="text-xl font-bold font-mono text-blue-600 dark:text-blue-400">82%</div>
                <div className="text-[11px] text-foreground/60 font-medium">Labour Stress Acc.</div>
                <div className="text-[9px] text-foreground/50 font-mono">LightGBM + ESP32</div>
              </div>
              <div className="p-2 rounded-lg bg-card border border-border/60">
                <div className="text-xl font-bold font-mono text-amber-600 dark:text-amber-400">89%</div>
                <div className="text-[11px] text-foreground/60 font-medium">Weather Module Acc.</div>
                <div className="text-[9px] text-foreground/50 font-mono">GBR + Random Forest</div>
              </div>
              <div className="p-2 rounded-lg bg-card border border-border/60">
                <div className="text-xl font-bold font-mono text-purple-600 dark:text-purple-400">99.7%</div>
                <div className="text-[11px] text-foreground/60 font-medium">Tea Grading F1</div>
                <div className="text-[9px] text-foreground/50 font-mono">ConvNeXtV2-Tiny</div>
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
                  <span className="text-xs font-mono text-foreground/50 ml-2">TeaGuard-R26-IT-118</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-mono">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span>Online System</span>
                </div>
              </div>

              {/* Four Module Tabs */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={item.title}
                      onClick={() => setActiveTab(idx)}
                      className={`p-3 rounded-xl text-left transition-all relative overflow-hidden border ${
                        isActive
                          ? "bg-primary/10 border-primary shadow-sm"
                          : "bg-background/40 border-border/40 hover:bg-background/80"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`p-1.5 rounded-lg ${item.color}`}>
                          <Icon className="w-3.5 h-3.5" />
                        </span>
                        <span className="font-bold text-xs text-foreground truncate">{item.title}</span>
                      </div>
                      <div className="text-[10px] font-mono text-foreground/50 truncate">{item.subtitle}</div>
                      <div className="text-[11px] font-mono font-bold text-primary mt-1">{item.metric}</div>
                    </button>
                  );
                })}
              </div>

              {/* Active Module Detail */}
              <div className="p-4 rounded-2xl bg-card border border-border/80 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-primary font-bold uppercase tracking-wider">
                    {highlights[activeTab].status}
                  </span>
                  <span className="text-xs font-mono text-foreground/60">{highlights[activeTab].metric}</span>
                </div>

                <h3 className="text-base font-bold text-foreground">
                  {highlights[activeTab].title} — {highlights[activeTab].subtitle}
                </h3>

                <p className="text-xs text-foreground/75 leading-relaxed">
                  {activeTab === 0 &&
                    "Individual research component of Miuranga W.A.R (IT22209320). Employs YOLOv8s computer vision to detect Anthracnose, Algal Leaf, Bird Eye Spot, Blister Blight, Grey Blight, and Red Rust with treatment recommendations."}
                  {activeTab === 1 &&
                    "Research component of Gunasekara L.M.N.P (IT22267986). Combines workforce allocation ML algorithms with an ESP32-S3 + MAX30102 physiological wearable monitoring Heart Rate and SpO₂."}
                  {activeTab === 2 &&
                    "Research component of Gunasekara G.N.D (IT22279620). Synthesizes OpenWeatherMap data to generate 8-hour temperature forecasts and Random Forest tea disease risk scores for Nuwara Eliya, Kandy, and Ratnapura."}
                  {activeTab === 3 &&
                    "Research component of Pathirana I.M (IT22282668). Analyzes optical tea sample imagery using ConvNeXtV2-Tiny to classify tea into 8 commercial grades (BM, BOP, BP, BROKEN_TEA, DUST, etc.)."}
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <Link
                    href={highlights[activeTab].link}
                    className="text-xs text-primary font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read Domain Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                  <span className="text-[10px] font-mono text-foreground/50">Verified in PP2</span>
                </div>
              </div>

              {/* Bottom Quick Links to Pages */}
              <div className="mt-6 pt-4 border-t border-border/40 grid grid-cols-3 gap-2 text-center text-xs">
                <Link
                  href="/domain"
                  className="p-2 rounded-xl bg-background/50 hover:bg-primary/10 hover:text-primary transition-colors border border-border/50 font-medium"
                >
                  Domain
                </Link>
                <Link
                  href="/milestones"
                  className="p-2 rounded-xl bg-background/50 hover:bg-primary/10 hover:text-primary transition-colors border border-border/50 font-medium"
                >
                  Milestones
                </Link>
                <Link
                  href="/about-us"
                  className="p-2 rounded-xl bg-background/50 hover:bg-primary/10 hover:text-primary transition-colors border border-border/50 font-medium"
                >
                  About Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Server, Database, BrainCircuit, Cloud, Smartphone, LayoutDashboard, ArrowDown, ArrowRight, Layers, Cpu, ShieldCheck, Activity } from "lucide-react";
import { useState } from "react";

export function ArchitectureSection() {
  const layers = [
    {
      num: "LAYER 1",
      name: "DATA SOURCES",
      color: "border-blue-500/30 bg-blue-500/5",
      items: ["Worker Data", "IoT HR / SpO₂", "Tea Leaf Images", "Weather Data", "Processed Tea Images"],
    },
    {
      num: "LAYER 2",
      name: "APPLICATION LAYER",
      color: "border-emerald-500/30 bg-emerald-500/5",
      items: ["React / Web Interface", "Node.js", "Express.js", "API Services"],
    },
    {
      num: "LAYER 3",
      name: "DATA & INTEGRATION",
      color: "border-amber-500/30 bg-amber-500/5",
      items: ["MongoDB", "OpenWeatherMap API", "Hugging Face API", "Python ML Services"],
    },
    {
      num: "LAYER 4",
      name: "FOUR INTELLIGENT MODULES",
      color: "border-purple-500/30 bg-purple-500/5",
      items: ["LightGBM (Labour)", "YOLOv8s (Disease)", "Gradient Boosting + Random Forest (Weather)", "ConvNeXtV2-Tiny (Tea Grading)"],
    },
    {
      num: "LAYER 5",
      name: "PREDICTIONS",
      color: "border-indigo-500/30 bg-indigo-500/5",
      items: ["Worker Condition", "Disease + Confidence", "Weather + Disease Risk", "Tea Grade + Confidence"],
    },
    {
      num: "LAYER 6",
      name: "TEAGUARD DECISION SUPPORT",
      color: "border-primary/50 bg-primary/10",
      items: ["Estate Manager Dashboard → Actionable Management Decisions"],
    },
  ];

  const inputStreams = [
    { name: "Worker / IoT", desc: "Heart Rate & SpO₂ telemetries from ESP32-S3 + MAX30102", icon: Activity, color: "text-blue-500" },
    { name: "Tea Leaf", desc: "High-resolution leaf camera images for disease detection", icon: ShieldCheck, color: "text-emerald-500" },
    { name: "Weather", desc: "Historical meteorological logs & OpenWeatherMap feed", icon: Cloud, color: "text-amber-500" },
    { name: "Processed Tea", desc: "Factory optical imagery of tea leaves after processing", icon: Cpu, color: "text-purple-500" },
  ];

  const dataFlowSteps = [
    "DATA COLLECTION",
    "DATA VALIDATION",
    "DATA STORAGE",
    "PREPROCESSING",
    "MODEL INFERENCE",
    "PREDICTION",
    "CONFIDENCE / RISK",
    "RECOMMENDATION",
    "DASHBOARD",
    "MANAGER DECISION"
  ];

  return (
    <section className="py-24 relative bg-background border-t border-border/30 overflow-hidden">
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
            Layered System <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-emerald-500 to-accent">Architecture</span>
          </h2>
          <p className="text-lg text-foreground/75 font-normal leading-relaxed">
            Multi-tiered software architecture connecting field data sources, API middleware, machine learning models, and executive decision dashboards.
          </p>
        </motion.div>

        {/* 6-Layer Architecture Visualizer */}
        <div className="max-w-5xl mx-auto space-y-4 mb-20">
          {layers.map((layer, idx) => (
            <motion.div
              key={layer.num}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`glass p-5 md:p-6 rounded-2xl border ${layer.color} shadow-sm transition-all hover:border-primary/40`}
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-foreground/10 text-foreground/70">
                    {layer.num}
                  </span>
                  <h3 className="font-extrabold text-base md:text-lg text-foreground tracking-tight">{layer.name}</h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {layer.items.map((item, iIdx) => (
                  <span key={iIdx} className="px-3 py-1.5 rounded-xl bg-background/80 text-foreground text-xs font-mono font-medium border border-border/40 shadow-xs">
                    {item}
                  </span>
                ))}
              </div>

              {idx < layers.length - 1 && (
                <div className="flex justify-center -mb-7 mt-3 relative z-10">
                  <ArrowDown className="w-4 h-4 text-primary animate-bounce opacity-70" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Section 8: End-to-End Data Flow */}
        <div className="pt-12 border-t border-border/30">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest block mb-2">TELEMETRY PIPELINE</span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">End-to-End Data Flow Pipeline</h3>
          </div>

          {/* 4 Input Streams */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-5xl mx-auto">
            {inputStreams.map((stream, idx) => {
              const Icon = stream.icon;
              return (
                <div key={idx} className="glass p-5 rounded-2xl border border-border/40 bg-background/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className={`w-4 h-4 ${stream.color}`} />
                    <span className="font-bold text-sm text-foreground">{stream.name} Stream</span>
                  </div>
                  <p className="text-xs text-foreground/60 leading-relaxed">{stream.desc}</p>
                </div>
              );
            })}
          </div>

          {/* 10-Step Sequential Flow */}
          <div className="glass p-6 md:p-8 rounded-3xl border border-primary/20 max-w-5xl mx-auto">
            <div className="text-xs font-mono font-bold text-foreground/50 uppercase tracking-widest mb-4">
              Processing Pipeline Sequence (10 Stages)
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {dataFlowSteps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-xl bg-primary/10 text-primary text-xs font-mono font-bold border border-primary/20">
                    {idx + 1}. {step}
                  </div>
                  {idx < dataFlowSteps.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-foreground/40 shrink-0" />}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

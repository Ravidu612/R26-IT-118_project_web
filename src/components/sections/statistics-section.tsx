"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, CloudRain, Cpu, Users } from "lucide-react";

export function StatisticsSection() {
  const kpis = [
    { value: "82%", metric: "Labour Classification Acc.", model: "LightGBM Classifier", cat: "Labour & Welfare", color: "border-blue-500/30 text-blue-500" },
    { value: "96.1%", metric: "mAP@0.5", model: "YOLOv8s", cat: "Disease Detection", color: "border-emerald-500/30 text-emerald-500" },
    { value: "95.2%", metric: "Precision", model: "YOLOv8s", cat: "Disease Detection", color: "border-emerald-500/30 text-emerald-500" },
    { value: "93.8%", metric: "Recall", model: "YOLOv8s", cat: "Disease Detection", color: "border-emerald-500/30 text-emerald-500" },
    { value: "94.5%", metric: "F1-Score", model: "YOLOv8s", cat: "Disease Detection", color: "border-emerald-500/30 text-emerald-500" },
    { value: "89%", metric: "Weather Module Acc.", model: "GBR + Random Forest", cat: "Weather & Climate", color: "border-amber-500/30 text-amber-500" },
    { value: "99.7%", metric: "Precision", model: "ConvNeXtV2-Tiny", cat: "Tea Grading", color: "border-purple-500/30 text-purple-500" },
    { value: "99.7%", metric: "Recall", model: "ConvNeXtV2-Tiny", cat: "Tea Grading", color: "border-purple-500/30 text-purple-500" },
    { value: "99.7%", metric: "F1-Score", model: "ConvNeXtV2-Tiny", cat: "Tea Grading", color: "border-purple-500/30 text-purple-500" },
  ];

  return (
    <section className="py-24 relative bg-background border-t border-border/30 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-4 border border-primary/20">
            <span>Empirical Benchmarks</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Research Evaluation <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-emerald-500 to-accent">Results & KPIs</span>
          </h2>
          <p className="text-lg text-foreground/75 font-normal leading-relaxed">
            Quantitative evaluation metrics collected across module testing datasets.
          </p>
        </div>

        {/* 9 KPI Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {kpis.map((kpi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`glass p-6 rounded-2xl border ${kpi.color} hover:border-primary/50 transition-all group bg-background/50 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold text-foreground/50 uppercase tracking-wider">{kpi.cat}</span>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-foreground/5 text-primary border border-border/40">
                    {kpi.model}
                  </span>
                </div>
                <div className="text-4xl md:text-5xl font-extrabold font-mono text-foreground mb-2 group-hover:text-primary transition-colors">
                  {kpi.value}
                </div>
              </div>
              <div className="text-sm font-semibold text-foreground/80 border-t border-border/20 pt-3 mt-4">
                {kpi.metric}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

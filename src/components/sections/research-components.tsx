"use client";

import { motion } from "framer-motion";
import { Users2, Leaf, CloudRain, Factory, ArrowRight, CheckCircle2, Cpu, Activity, CpuIcon, AlertCircle, ShieldAlert } from "lucide-react";
import { useState } from "react";

export function ResearchComponents() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const modules = [
    {
      id: "01",
      title: "Tea Leaf Disease Detection & Pattern Analysis",
      subtitle: "YOLOv8s Computer Vision Engine",
      model: "YOLOv8s",
      badge: "Vision AI",
      description: "An image-based computer vision module that detects tea leaf diseases from uploaded images using YOLOv8s and provides confidence-based disease information and treatment-oriented recommendations.",
      pipeline: ["Tea Leaf Image", "Image Processing", "YOLOv8s", "Disease Detection", "Disease Class", "Confidence Score", "Treatment Recommendation", "Dashboard"],
      classes: ["Anthracnose", "Algal Leaf", "Bird Eye Spot", "Blister Blight", "Grey Blight", "Red Rust"],
      metrics: [
        { label: "mAP@0.5", val: "96.1%" },
        { label: "Precision", val: "95.2%" },
        { label: "Recall", val: "93.8%" },
        { label: "F1-Score", val: "94.5%" },
      ],
      icon: Leaf,
      color: "from-emerald-500/15 to-green-500/5 border-emerald-500/30",
      accent: "text-emerald-500 bg-emerald-500/10",
    },
    {
      id: "02",
      title: "Labour Management & Welfare Optimization",
      subtitle: "LightGBM & Physiological IoT Wearable Prototype",
      model: "LightGBM Classifier + ESP32-S3",
      badge: "Workforce & IoT",
      description: "Combines worker task management with an IoT physiological wearable prototype (ESP32-S3 + MAX30102) measuring Heart Rate & SpO₂ to classify worker condition and stress levels.",
      prototypeNotice: "Research prototype for non-invasive worker welfare monitoring",
      components: [
        { name: "Worker Management", items: ["Worker Profile", "Skills", "Experience", "Availability", "Work History", "Daily Tasks → Workforce / Task Support"] },
        { name: "IoT Worker Welfare Prototype", items: ["ESP32-S3 + MAX30102", "Heart Rate & SpO₂", "LightGBM Classifier", "Worker Condition Classification"] }
      ],
      iotDiagram: ["ESP32-S3", "MAX30102", "Battery", "BLE / IoT Communication", "Backend", "MongoDB", "LightGBM", "Dashboard"],
      classes: ["Relaxed", "Emotional Stress", "Cognitive Stress", "Physical Stress"],
      metrics: [
        { label: "Classification Acc.", val: "82%" },
        { label: "Sensors", val: "HR + SpO₂" },
        { label: "Hardware", val: "ESP32-S3" },
      ],
      icon: Users2,
      color: "from-blue-500/15 to-indigo-500/5 border-blue-500/30",
      accent: "text-blue-500 bg-blue-500/10",
    },
    {
      id: "03",
      title: "Tea-Specific Weather & Climate Intelligence",
      subtitle: "Gradient Boosting & Multi-Output Random Forest",
      model: "Gradient Boosting + Multi-output Random Forest",
      badge: "Climate AI",
      description: "Integrates historical weather data and OpenWeatherMap API telemetries (Temp, Humidity, Rainfall, Wind Speed) to generate 8-hour regional forecasts and predict disease infection risks.",
      regions: ["Nuwara Eliya", "Kandy", "Ratnapura"],
      outcomes: ["Irrigation Recommendation", "Fertilizer Recommendation", "Harvest Planning", "Disease Prevention"],
      pipeline: ["Weather Telemetry", "Gradient Boosting Regressor", "Weather Forecast", "Multi-output Random Forest", "Disease Risk", "Actionable Plan"],
      metrics: [
        { label: "Overall Accuracy", val: "89%" },
        { label: "Forecast Window", val: "8 Hours" },
        { label: "Regional Zones", val: "High/Mid/Low" },
      ],
      icon: CloudRain,
      color: "from-amber-500/15 to-orange-500/5 border-amber-500/30",
      accent: "text-amber-500 bg-amber-500/10",
    },
    {
      id: "04",
      title: "AI-Based Tea Sorting & Grading Automation",
      subtitle: "ConvNeXtV2-Tiny Optical Vision Classifier",
      model: "convnextv2_tiny.fcmae_ft_in22k_in1k",
      badge: "Optical Vision",
      description: "Automates factory tea classification from processed tea images using ConvNeXtV2-Tiny to classify tea into 8 industry grades with high fidelity and confidence scoring.",
      pipeline: ["Image Upload", "Preprocessing", "ConvNeXtV2-Tiny", "Feature Representation", "Classification", "Tea Grade", "Confidence", "Dashboard"],
      classes: ["BM", "BOP", "BP", "BROKEN_TEA", "DUST", "FANNING_2", "PF", "PW_DUST"],
      metrics: [
        { label: "Precision", val: "99.7%" },
        { label: "Recall", val: "99.7%" },
        { label: "F1-Score", val: "99.7%" },
      ],
      icon: Factory,
      color: "from-purple-500/15 to-pink-500/5 border-purple-500/30",
      accent: "text-purple-500 bg-purple-500/10",
    }
  ];

  return (
    <section id="research" className="py-24 relative bg-background/50 border-t border-border/30">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-4 border border-primary/20">
            <span>Research Implementation</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Four Intelligent <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-emerald-500 to-accent">Research Modules</span>
          </h2>
          <p className="text-lg text-foreground/75 font-normal leading-relaxed">
            Detailed breakdown of models, pipelines, hardware, and empirical metrics powering the TeaGuard Decision Support System.
          </p>
        </motion.div>

        {/* Module Selector Tabs */}
        <div className="flex flex-wrap gap-3 mb-10 border-b border-border/40 pb-4">
          {modules.map((mod, idx) => {
            const Icon = mod.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-3 px-5 py-3 rounded-2xl font-medium text-sm transition-all duration-300 border ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-lg scale-[1.02]"
                    : "glass text-foreground/75 border-border hover:border-primary/40 hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-bold font-mono">Module {mod.id}</span>
                <span className="hidden sm:inline text-xs opacity-80">| {mod.badge}</span>
              </button>
            );
          })}
        </div>

        {/* Active Module Details Card */}
        {modules.map((mod, idx) => {
          if (idx !== activeTab) return null;
          const Icon = mod.icon;
          return (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`glass-panel p-8 md:p-10 rounded-3xl border bg-gradient-to-br ${mod.color} relative overflow-hidden`}
            >
              {/* Header Info */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-3 rounded-2xl ${mod.accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-foreground/50 uppercase">Module {mod.id} · {mod.badge}</span>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">{mod.title}</h3>
                    </div>
                  </div>
                  <div className="inline-block px-3 py-1 rounded-lg bg-foreground/5 text-primary text-xs font-mono font-semibold border border-border/40 mt-1">
                    PRIMARY MODEL: {mod.model}
                  </div>
                </div>

                {/* Metrics Badges */}
                <div className="flex flex-wrap items-center gap-3">
                  {mod.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="glass p-3 px-4 rounded-xl text-center border border-border/40 bg-background/60">
                      <div className="text-lg font-bold font-mono text-primary">{m.val}</div>
                      <div className="text-[10px] text-foreground/60 font-mono uppercase">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description & Prototype Notice */}
              <p className="text-base text-foreground/80 leading-relaxed mb-6 font-normal max-w-4xl">
                {mod.description}
              </p>

              {mod.prototypeNotice && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-mono border border-amber-500/20 mb-6">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>NOTE: {mod.prototypeNotice}</span>
                </div>
              )}

              {/* Specific Details based on Module */}

              {/* Pipeline Step Flow */}
              {mod.pipeline && (
                <div className="mb-8 pt-6 border-t border-border/30">
                  <div className="text-xs font-mono font-bold text-foreground/50 uppercase tracking-widest mb-4">
                    Execution Pipeline Architecture
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {mod.pipeline.map((pStep, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2">
                        <div className="px-3 py-1.5 rounded-xl bg-background/80 text-foreground text-xs font-mono font-semibold border border-border/40 shadow-sm">
                          {pStep}
                        </div>
                        {pIdx < mod.pipeline.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0" />}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Component Split for Module 02 */}
              {mod.components && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 pt-6 border-t border-border/30">
                  {mod.components.map((c, cIdx) => (
                    <div key={cIdx} className="glass p-6 rounded-2xl border border-border/40 bg-background/50">
                      <h4 className="font-bold text-sm text-primary uppercase font-mono tracking-wider mb-3">
                        {c.name}
                      </h4>
                      <ul className="space-y-2">
                        {c.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-center gap-2 text-xs font-medium text-foreground/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* IoT Diagram for Module 02 */}
              {mod.iotDiagram && (
                <div className="mb-8 pt-4">
                  <div className="text-xs font-mono font-bold text-foreground/50 uppercase tracking-widest mb-3">
                    IoT Wearable Data Flow (ESP32-S3 + MAX30102)
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {mod.iotDiagram.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2">
                        <div className="px-3 py-1.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold border border-blue-500/20">
                          {step}
                        </div>
                        {sIdx < mod.iotDiagram.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-blue-500 shrink-0" />}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Target Classes / Target Regions */}
              {mod.classes && (
                <div className="pt-6 border-t border-border/30">
                  <div className="text-xs font-mono font-bold text-foreground/50 uppercase tracking-widest mb-3">
                    Target Output Classes ({mod.classes.length} Categories)
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {mod.classes.map((cls, cIdx) => (
                      <span key={cIdx} className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-mono font-semibold border border-primary/20">
                        {cls}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {mod.regions && (
                <div className="pt-6 border-t border-border/30">
                  <div className="text-xs font-mono font-bold text-foreground/50 uppercase tracking-widest mb-3">
                    Regional Deployment & 8-Hour Forecasting Zones
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {mod.regions.map((reg, rIdx) => (
                      <span key={rIdx} className="px-3 py-1 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-mono font-semibold border border-amber-500/20">
                        📍 {reg} Elevation Zone
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </motion.div>
          );
        })}

      </div>
    </section>
  );
}

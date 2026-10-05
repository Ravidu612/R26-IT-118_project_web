"use client";

import { motion } from "framer-motion";
import { Users2, Leaf, CloudRain, Factory, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function ResearchComponents() {
  const components = [
    {
      id: "01",
      title: "Tea Leaf Disease Detection & Pattern Analysis",
      subtitle: "Computer Vision & Deep Learning CNN",
      description: "Uses MobileNet & ResNet CNN models to analyze leaf imagery for early diagnosis of Blister Blight, Black Rot, and Pest damage, delivering automated treatment actions.",
      icon: Leaf,
      badge: "Disease Diagnosis",
      metrics: ["98.4% Precision", "Instant Scan", "Treatment Recs"],
      color: "from-emerald-500/20 to-green-500/5 border-emerald-500/30",
      accentColor: "text-emerald-500 bg-emerald-500/10",
      bentoSpan: "md:col-span-2 lg:col-span-2"
    },
    {
      id: "02",
      title: "Labour Management & Welfare Optimization",
      subtitle: "Workforce Analytics & Predictive Planning",
      description: "Employs machine learning to optimize field worker distribution, track daily harvest output, assess worker welfare parameters, and prevent operational bottlenecks.",
      icon: Users2,
      badge: "Human Capital",
      metrics: ["Workforce Allocation", "Welfare Score", "Yield Ratio"],
      color: "from-blue-500/20 to-indigo-500/5 border-blue-500/30",
      accentColor: "text-blue-500 bg-blue-500/10",
      bentoSpan: "md:col-span-1 lg:col-span-1"
    },
    {
      id: "03",
      title: "Tea-Specific Climate & Weather Intelligence",
      subtitle: "Micro-Climate ML Forecasting",
      description: "Integrates localized weather API telemetries and historical climate datasets to forecast frost, heavy rainfall, and humidity shifts tailored to Sri Lankan elevation zones.",
      icon: CloudRain,
      badge: "Environmental AI",
      metrics: ["Micro-Weather", "Frost Warning", "Irrigation Alert"],
      color: "from-amber-500/20 to-orange-500/5 border-amber-500/30",
      accentColor: "text-amber-500 bg-amber-500/10",
      bentoSpan: "md:col-span-1 lg:col-span-1"
    },
    {
      id: "04",
      title: "AI-Based Tea Sorting & Grading Automation",
      subtitle: "Factory Image Vision System",
      description: "Automates the post-harvest sorting process using high-speed optical recognition to classify broken orange pekoe (BOPF), dust, and whole leaves with factory-level accuracy.",
      icon: Factory,
      badge: "Industrial Automation",
      metrics: ["Optical Classification", "Quality Grade A", "Real-Time Sort"],
      color: "from-purple-500/20 to-pink-500/5 border-purple-500/30",
      accentColor: "text-purple-500 bg-purple-500/10",
      bentoSpan: "md:col-span-2 lg:col-span-2"
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
          className="text-left max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-4 border border-primary/20">
            <span>Research Matrix</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Four Pillars of <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-emerald-500 to-accent">TeaGuard AI</span>
          </h2>
          <p className="text-lg text-foreground/70 font-normal leading-relaxed">
            Our multi-disciplinary research framework addresses critical operational challenges in Sri Lanka's tea industry through specialized artificial intelligence modules.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {components.map((comp, idx) => {
            const Icon = comp.icon;
            return (
              <motion.div
                key={comp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 border flex flex-col justify-between ${comp.bentoSpan} bg-gradient-to-br ${comp.color}`}
              >
                {/* Top Row: Icon + Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-2xl ${comp.accentColor}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-foreground/50 block">MODULE {comp.id}</span>
                        <span className="text-xs font-medium text-primary">{comp.badge}</span>
                      </div>
                    </div>
                    <div className="p-2 rounded-full glass group-hover:bg-primary group-hover:text-white transition-all border border-border">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {comp.title}
                  </h3>
                  <div className="text-xs font-mono text-foreground/60 mb-4">{comp.subtitle}</div>
                  
                  <p className="text-sm text-foreground/75 leading-relaxed mb-6 font-normal">
                    {comp.description}
                  </p>
                </div>

                {/* Metrics Chips at Bottom */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/20 mt-auto">
                  {comp.metrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-background/60 text-foreground/80 text-xs font-mono border border-border/40"
                    >
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

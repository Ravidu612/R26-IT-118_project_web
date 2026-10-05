"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Cpu, Server, Layout, Database, Radio } from "lucide-react";

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Stack" },
    { id: "dl", label: "Deep Learning & Vision", icon: Cpu },
    { id: "ml", label: "ML & Analytics", icon: Cpu },
    { id: "backend", label: "Backend & DB", icon: Server },
    { id: "frontend", label: "Frontend", icon: Layout },
    { id: "iot", label: "IoT & Telemetry", icon: Radio },
  ];

  const techList = [
    { name: "YOLOv8s", cat: "dl", level: "Object Detection" },
    { name: "ConvNeXtV2-Tiny", cat: "dl", level: "Tea Grading CNN" },
    { name: "Python", cat: "dl", level: "ML Language" },
    { name: "LightGBM", cat: "ml", level: "Stress Classifier" },
    { name: "Scikit-learn", cat: "ml", level: "Regressors & RF" },
    { name: "Node.js", cat: "backend", level: "Runtime" },
    { name: "Express.js", cat: "backend", level: "API Services" },
    { name: "MongoDB Atlas", cat: "backend", level: "NoSQL Storage" },
    { name: "Next.js", cat: "frontend", level: "Web Framework" },
    { name: "React", cat: "frontend", level: "UI Core" },
    { name: "Tailwind CSS", cat: "frontend", level: "Styling" },
    { name: "Framer Motion", cat: "frontend", level: "Animations" },
    { name: "ESP32-S3", cat: "iot", level: "Microcontroller" },
    { name: "MAX30102", cat: "iot", level: "HR & SpO₂ Sensor" },
    { name: "BLE Communication", cat: "iot", level: "Wireless Telemetry" },
    { name: "OpenWeatherMap API", cat: "iot", level: "Weather Stream" },
    { name: "Hugging Face API", cat: "dl", level: "Model Hosting" },
  ];

  const filteredTech = activeCategory === "all"
    ? techList
    : techList.filter((t) => t.cat === activeCategory);

  return (
    <section className="py-20 relative bg-background/40 border-y border-border/30">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span>Verified Tech Stack</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">
            Technologies & <span className="text-primary">Hardware Stack</span>
          </h2>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 border ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "glass text-foreground/70 border-border hover:border-primary/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {filteredTech.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className="glass p-4 rounded-2xl text-center border border-border/40 hover:border-primary/50 hover:bg-primary/5 transition-all group"
            >
              <div className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                {tech.name}
              </div>
              <div className="text-[11px] font-mono text-foreground/50 mt-1">
                {tech.level}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

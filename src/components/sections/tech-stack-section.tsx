"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Cpu, Server, Layout, Database } from "lucide-react";

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Technologies" },
    { id: "ai", label: "AI & Computer Vision", icon: Cpu },
    { id: "backend", label: "Backend & Services", icon: Server },
    { id: "frontend", label: "Frontend & Mobile", icon: Layout },
    { id: "data", label: "Data & Telemetry", icon: Database },
  ];

  const techList = [
    { name: "TensorFlow", cat: "ai", level: "Deep Learning" },
    { name: "Python", cat: "ai", level: "ML Core" },
    { name: "OpenCV", cat: "ai", level: "Computer Vision" },
    { name: "MobileNet", cat: "ai", level: "CNN Architecture" },
    { name: "Scikit-Learn", cat: "ai", level: "Analytics" },
    { name: "Next.js 15", cat: "frontend", level: "Web Framework" },
    { name: "React", cat: "frontend", level: "UI Library" },
    { name: "Tailwind CSS", cat: "frontend", level: "Styling" },
    { name: "Framer Motion", cat: "frontend", level: "Animations" },
    { name: "Node.js", cat: "backend", level: "Runtime" },
    { name: "Express.js", cat: "backend", level: "REST API" },
    { name: "JWT Auth", cat: "backend", level: "Security" },
    { name: "MongoDB Atlas", cat: "data", level: "Database" },
    { name: "Cloudinary", cat: "data", level: "Image Storage" },
    { name: "OpenWeather API", cat: "data", level: "Weather Feed" },
  ];

  const filteredTech = activeCategory === "all"
    ? techList
    : techList.filter((t) => t.cat === activeCategory);

  return (
    <section className="py-20 relative bg-background/40 border-y border-border/30">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span>Technical Ecosystem</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">
            Engineered with <span className="text-primary">Industry Standards</span>
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {filteredTech.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
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

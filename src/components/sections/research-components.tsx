"use client";

import { motion } from "framer-motion";
import { Users2, Leaf, CloudRain, Factory } from "lucide-react";

export function ResearchComponents() {
  const components = [
    {
      id: "01",
      title: "Labour Management & Welfare Optimization",
      description: "Uses AI and predictive analytics to optimise workforce allocation, employee welfare, attendance, productivity and operational efficiency inside tea estates.",
      icon: Users2,
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: "02",
      title: "Tea Leaf Disease Detection & Pattern Analysis",
      description: "Uses Deep Learning CNN models to detect diseases from images and provide treatment recommendations.",
      icon: Leaf,
      color: "from-green-500 to-emerald-400"
    },
    {
      id: "03",
      title: "Tea-Specific Weather & Climate Intelligence System",
      description: "Predicts weather conditions, climate risks and plantation recommendations using machine learning.",
      icon: CloudRain,
      color: "from-amber-500 to-orange-400"
    },
    {
      id: "04",
      title: "AI-Based Tea Sorting & Grading Automation",
      description: "Automatically classifies tea grades using computer vision and deep learning.",
      icon: Factory,
      color: "from-purple-500 to-pink-400"
    }
  ];

  return (
    <section id="research" className="py-24 relative bg-foreground/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Research <span className="text-primary">Components</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
          <p className="text-lg text-foreground/70">
            Four specialized AI modules working together to revolutionize tea estate management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {components.map((comp, idx) => (
            <motion.div
              key={comp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-300"
            >
              {/* Background Glow */}
              <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${comp.color} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity`} />
              
              <div className="flex items-start gap-6 relative z-10">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${comp.color} text-white shadow-lg shrink-0`}>
                  <comp.icon className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground/40 mb-2">Component {comp.id}</div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{comp.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {comp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

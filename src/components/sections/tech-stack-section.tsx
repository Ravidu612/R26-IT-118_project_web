"use client";

import { motion } from "framer-motion";

export function TechStackSection() {
  const technologies = [
    "React", "Next.js", "Node.js", "Express.js", "MongoDB",
    "Python", "TensorFlow", "OpenCV", "REST API", "JWT",
    "Cloudinary", "OpenWeather API", "Visual Crossing API", "Docker", "GitHub"
  ];

  return (
    <section className="py-20 relative bg-primary/5 border-y border-primary/10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground">
          Powered By Modern <span className="text-primary">Technologies</span>
        </h2>
      </div>

      {/* Infinite scrolling ticker */}
      <div className="flex w-[200%] md:w-[150%] lg:w-[120%] relative overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex gap-4 md:gap-8 whitespace-nowrap px-4"
        >
          {/* Double the array for seamless looping */}
          {[...technologies, ...technologies].map((tech, idx) => (
            <div
              key={idx}
              className="glass px-6 py-4 rounded-xl flex items-center justify-center font-semibold text-foreground/80 hover:text-primary hover:border-primary/50 transition-colors"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

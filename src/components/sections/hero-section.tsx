"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText, Users } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<{w: number, h: number, l: number, t: number, d: number, x: number, y: number}[]>([]);

  useEffect(() => {
    setMounted(true);
    setParticles(
      [...Array(10)].map(() => ({
        w: Math.random() * 100 + 50,
        h: Math.random() * 100 + 50,
        l: Math.random() * 100,
        t: Math.random() * 100,
        d: Math.random() * 10 + 10,
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
      }))
    );
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10 animate-gradient" />
        {/* Floating Particles (Client Side Only) */}
        {mounted && particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20 blur-xl"
            style={{
              width: p.w,
              height: p.h,
              left: `${p.l}%`,
              top: `${p.t}%`,
            }}
            animate={{
              x: [0, p.x],
              y: [0, p.y],
            }}
            transition={{
              duration: p.d,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium backdrop-blur-md"
          >
            SLIIT Final Year Research Project 2026
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-emerald-500 to-accent">
            TeaGuard AI
          </h1>
          
          <h2 className="text-xl md:text-3xl font-medium text-foreground/80 mb-6">
            Intelligent Decision Support System for Sri Lankan Tea Estate Management
          </h2>
          
          <p className="text-lg text-foreground/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            An AI-powered smart plantation management platform designed to improve labour management, 
            tea disease detection, weather intelligence and AI-based tea grading for Sri Lankan tea estates.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="#project"
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-1 flex items-center gap-2"
            >
              Explore Project
            </Link>
            <Link 
              href="#team"
              className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/90 transition-all shadow-lg hover:shadow-secondary/25 hover:-translate-y-1 flex items-center gap-2"
            >
              <Users className="w-4 h-4" /> Meet Team
            </Link>
            <a 
              href="https://github.com/Ravidu612/R26-IT-118"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full glass hover:bg-foreground/5 transition-colors group"
              aria-label="GitHub Repository"
            >
              <FaGithub className="w-5 h-5 text-foreground/80 group-hover:text-foreground transition-colors" />
            </a>
            <a 
              href="#documents"
              className="p-3 rounded-full glass hover:bg-foreground/5 transition-colors group"
              aria-label="Documentation"
            >
              <FileText className="w-5 h-5 text-foreground/80 group-hover:text-foreground transition-colors" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Link href="#about" aria-label="Scroll Down">
          <ArrowDown className="w-8 h-8 text-foreground/50 hover:text-primary transition-colors cursor-pointer" />
        </Link>
      </motion.div>
    </section>
  );
}

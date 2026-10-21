"use client";

import Link from "next/link";
import { Leaf, FileText, Mail, ExternalLink, GraduationCap, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { primaryNavItems } from "./navbar";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/60 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Main Info */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-emerald-600 text-white shadow-md shadow-primary/20">
                <Leaf className="w-5 h-5" />
              </span>
              <span className="font-display font-bold text-2xl tracking-tight text-foreground">
                TeaGuard <span className="text-primary font-extrabold">AI</span>
              </span>
            </Link>

            <p className="text-sm font-semibold text-foreground/80 leading-snug">
              Intelligent Decision Support System for Sri Lankan Tea Estate Management
            </p>

            <p className="text-xs text-foreground/65 leading-relaxed max-w-md">
              A final-year undergraduate research project integrating Artificial Intelligence, Machine Learning,
              IoT physiological monitoring, and computer vision to advance productivity, worker welfare, and disease management in Ceylon tea estates.
            </p>

            <div className="inline-flex flex-wrap items-center gap-2 text-xs font-mono pt-1">
              <span className="px-2.5 py-1 rounded-md bg-foreground/5 border border-border text-foreground/75">
                Group ID: R26-IT-118
              </span>
              <span className="px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary font-semibold">
                TIM Research Group
              </span>
              <span className="px-2.5 py-1 rounded-md bg-foreground/5 border border-border text-foreground/75">
                SLIIT IT4010
              </span>
            </div>
          </div>

          {/* Site Navigation */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-primary">
              Website Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {primaryNavItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-1.5 py-1 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research & Institutional Resources */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-primary">
              Institutional Links
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://www.sliit.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors group"
                >
                  <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                  <span>SLIIT Faculty of Computing</span>
                  <ArrowUpRight className="w-3 h-3 text-foreground/40 group-hover:text-primary shrink-0 ml-auto" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Ravidu612/R26-IT-118"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors group"
                >
                  <FaGithub className="w-4 h-4 text-foreground/80 group-hover:text-primary shrink-0" />
                  <span>Research GitHub Repository</span>
                  <ArrowUpRight className="w-3 h-3 text-foreground/40 group-hover:text-primary shrink-0 ml-auto" />
                </a>
              </li>
              <li>
                <Link
                  href="/documents/research-paper.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors group"
                >
                  <FileText className="w-4 h-4 text-primary shrink-0" />
                  <span>BICAC 2026 Research Paper</span>
                  <ArrowUpRight className="w-3 h-3 text-foreground/40 group-hover:text-primary shrink-0 ml-auto" />
                </Link>
              </li>
              <li>
                <a
                  href="mailto:ravidu612@gmail.com"
                  className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors group"
                >
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <span>Group Lead (ravidu612@gmail.com)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground/60">
          <p>
            © {new Date().getFullYear()} TeaGuard AI Research Team (R26-IT-118). All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span>Sri Lanka Institute of Information Technology (SLIIT)</span>
            <span>•</span>
            <span>Department of Information Technology</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

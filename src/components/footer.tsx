"use client";

import Link from "next/link";
import { Leaf, FileText, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 py-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group inline-flex">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <span className="font-bold text-2xl tracking-tight">
                TeaGuard <span className="text-primary">AI</span>
              </span>
            </Link>
            <p className="text-foreground/70 mb-4 max-w-sm">
              An AI-powered smart plantation management platform designed to improve labour management, 
              tea disease detection, weather intelligence and AI-based tea grading for Sri Lankan tea estates.
            </p>
            <div className="text-sm font-medium text-foreground/50">
              SLIIT Final Year Research Project
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-foreground/70 hover:text-primary transition-colors">About Project</Link></li>
              <li><Link href="#research" className="text-foreground/70 hover:text-primary transition-colors">Research Areas</Link></li>
              <li><Link href="#documents" className="text-foreground/70 hover:text-primary transition-colors">Documents</Link></li>
              <li><Link href="#team" className="text-foreground/70 hover:text-primary transition-colors">Team Members</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors">
                  <FaGithub className="w-4 h-4" /> GitHub Repository
                </a>
              </li>
              <li>
                <a href="#documents" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors">
                  <FileText className="w-4 h-4" /> Research Paper
                </a>
              </li>
              <li>
                <a href="mailto:contact@teaguard.ai" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" /> Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} TeaGuard AI Research Team. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-foreground/60">
            <span>Sri Lanka Institute of Information Technology</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

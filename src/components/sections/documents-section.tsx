"use client";

import { motion } from "framer-motion";
import { FileText, Download, Eye } from "lucide-react";

export function DocumentsSection() {
  const documents = [
    { title: "TAF Report", file: "taf-report.pdf" },
    { title: "Proposal Document Tea Leaf Disease Detection & Pattern Analysis", file: "proposal-doc-1.pdf" },
    { title: "Proposal Document Labour Management & Welfare Optimization", file: "proposal-doc-2.pdf" },
    { title: "Proposal Document Tea-Specific Weather & Climate Intelligence", file: "proposal-doc-3.pdf" },
    { title: "Proposal Document AI-Based Tea Sorting & Grading Automation", file: "proposal-doc-4.pdf" },
    { title: "Progress Presentation", file: "Progress-presentation-slides.pdf" },
    { title: "Progress Presentation 01", file: "Progress-presentation-slides-01.pdf" },
    { title: "Progress Presentation 02", file: "Progress-presentation-slides-02.pdf" },
    { title: "Research Paper", file: "research-paper.pdf" },
    { title: "Poster", file: "poster.pdf" },
    { title: "Progress Reports", file: "progress-reports.pdf" },
    { title: "Final Report", file: "final-report.pdf" },
    { title: "Log Book Member 01", file: "log-book.pdf" },
    { title: "Log Book Member 02", file: "log-book2.pdf" },
    { title: "Log Book Member 03", file: "log-book3.pdf" },
    { title: "Log Book Member 04", file: "log-book4.pdf" },
  ];

  return (
    <section id="documents" className="py-24 relative bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Project <span className="text-primary">Documents</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
          <p className="text-lg text-foreground/70">
            Download or view our research documentation, publications, and presentations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl flex flex-col items-center text-center group hover:border-primary/40 hover:-translate-y-2 transition-all shadow-md hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <FileText className="w-8 h-8" />
              </div>

              <h3 className="font-semibold text-foreground mb-6 h-12 flex items-center justify-center">
                {doc.title}
              </h3>

              <div className="flex gap-3 w-full">
                <a href={`/documents/${doc.file}`} target="_blank" rel="noopener noreferrer" className="flex-1 py-2 px-3 rounded-lg bg-background text-sm font-medium border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" /> View
                </a>
                <a href={`/documents/${doc.file}`} download className="flex-1 py-2 px-3 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-sm shadow-primary/20">
                  <Download className="w-4 h-4" /> PDF
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

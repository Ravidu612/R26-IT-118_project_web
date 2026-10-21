"use client";

import { motion } from "framer-motion";
import { FileText, Download, Eye, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { PdfModal } from "@/components/ui/pdf-modal";

export function DocumentsSection() {
  const [modalPdf, setModalPdf] = useState<{ url: string; title: string } | null>(null);

  const featuredDocuments = [
    {
      title: "Topic Assessment Form (TAF V2.1)",
      category: "Assessment Approval",
      file: "taf-report.pdf",
      status: "Available" as const,
      size: "647 KB",
    },
    {
      title: "BICAC 2026 Research Paper",
      category: "Academic Publication",
      file: "research-paper.pdf",
      status: "Available" as const,
      size: "582 KB",
    },
    {
      title: "Proposal: Tea Leaf Disease Detection",
      category: "Individual Proposal",
      file: "proposal-doc-1.pdf",
      status: "Available" as const,
      size: "1.2 MB",
    },
    {
      title: "Proposal: Labour Management & Welfare",
      category: "Individual Proposal",
      file: "proposal-doc-2.pdf",
      status: "Available" as const,
      size: "1.2 MB",
    },
    {
      title: "Proposal: Weather & Climate Intelligence",
      category: "Individual Proposal",
      file: "proposal-doc-3.pdf",
      status: "Available" as const,
      size: "1.9 MB",
    },
    {
      title: "Proposal: AI-Based Tea Sorting & Grading",
      category: "Individual Proposal",
      file: "proposal-doc-4.pdf",
      status: "Available" as const,
      size: "1.1 MB",
    },
    {
      title: "TeaGuard Research Poster",
      category: "Exhibition & Defense",
      file: "poster.pdf",
      status: "Available" as const,
      size: "1.8 MB",
    },
    {
      title: "Comprehensive Final Thesis",
      category: "Final Dissertation",
      status: "In Preparation" as const,
      note: "Scheduled for Final Submission",
    },
  ];

  return (
    <section id="documents" className="py-24 relative bg-background border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span>Verified Documentation</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Research <span className="text-primary">Documents</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
            Review approved proposal documents, conference manuscripts, and assessment forms. Visit the full library for logbooks and individual chapters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredDocuments.map((doc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass p-6 rounded-2xl flex flex-col justify-between group hover:border-primary/40 hover:-translate-y-1 transition-all shadow-sm hover:shadow-md border border-border"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold">
                    {doc.category}
                  </span>
                  {doc.status === "Available" ? (
                    <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Available
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Pending
                    </span>
                  )}
                </div>

                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                  <FileText className="w-6 h-6" />
                </div>

                <h3 className="font-bold text-sm text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                  {doc.title}
                </h3>
              </div>

              <div className="pt-4 border-t border-border/50">
                {doc.status === "Available" && doc.file ? (
                  <>
                    <div className="text-[11px] font-mono text-foreground/50 mb-3">{doc.size}</div>
                    <div className="flex gap-2 w-full">
                      <button
                        onClick={() => setModalPdf({ url: `/documents/${doc.file}`, title: doc.title })}
                        className="flex-1 py-1.5 px-2.5 rounded-lg bg-background text-xs font-semibold border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-1.5 text-foreground"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Preview</span>
                      </button>
                      <a
                        href={`/documents/${doc.file}`}
                        download
                        className="flex-1 py-1.5 px-2.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>PDF</span>
                      </a>
                    </div>
                  </>
                ) : (
                  <div className="py-2.5 px-2 rounded-lg bg-foreground/5 text-center text-xs text-foreground/50 font-medium">
                    {doc.note}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to Full Documents Library */}
        <div className="text-center">
          <Link
            href="/documents"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-xs md:text-sm hover:bg-primary/90 transition-all shadow-md hover:shadow-primary/25"
          >
            <span>Open Full Documents Library (15+ Items & Logbooks)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <PdfModal
        isOpen={!!modalPdf}
        onClose={() => setModalPdf(null)}
        pdfUrl={modalPdf?.url || null}
        title={modalPdf?.title || ""}
      />
    </section>
  );
}

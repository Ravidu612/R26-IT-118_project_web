"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Eye,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Sparkles,
  BookOpen,
  Calendar,
  Layers,
  ArrowRight,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { PdfModal } from "@/components/ui/pdf-modal";

interface DocumentItem {
  id: string;
  title: string;
  category: "Charter & Proposals" | "Checklists & Assessment" | "Research Paper & Publications" | "Final Documentation" | "Posters & Reports";
  authorOrScope: string;
  date: string;
  file?: string;
  status: "Available" | "Under Review" | "In Preparation";
  description: string;
  fileSize?: string;
}

export default function DocumentsPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const [previewPdf, setPreviewPdf] = React.useState<{ url: string; title: string } | null>(null);

  const documents: DocumentItem[] = [
    // Checklists & Assessment
    {
      id: "taf",
      title: "Topic Assessment Form (TAF V2.1)",
      category: "Checklists & Assessment",
      authorOrScope: "Group R26-IT-118 · Approved by Supervisors",
      date: "January 14, 2026",
      file: "taf-report.pdf",
      status: "Available",
      description: "Official SLIIT IT4010 Topic Assessment Form approved and signed by Ms. Uthpala Samarakoon and Ms. Suriyaa Kumari.",
      fileSize: "647 KB",
    },
    // Proposals
    {
      id: "prop-1",
      title: "Proposal Document: Tea Leaf Disease Detection & Pattern Analysis",
      category: "Charter & Proposals",
      authorOrScope: "Miuranga W.A.R (IT22209320) — Individual Component",
      date: "January 2026",
      file: "proposal-doc-1.pdf",
      status: "Available",
      description: "Detailed proposal for YOLOv8s computer vision detection of 6 tea foliar diseases, severity estimation, and treatment guidance.",
      fileSize: "1.2 MB",
    },
    {
      id: "prop-2",
      title: "Proposal Document: Labour Management & Welfare Optimization",
      category: "Charter & Proposals",
      authorOrScope: "Gunasekara L.M.N.P (IT22267986) — Individual Component",
      date: "January 2026",
      file: "proposal-doc-2.pdf",
      status: "Available",
      description: "Proposal detailing workforce scheduling optimization, NLP grievance categorization, and IoT physiological stress telemetry.",
      fileSize: "1.2 MB",
    },
    {
      id: "prop-3",
      title: "Proposal Document: Tea-Specific Weather & Climate Intelligence",
      category: "Charter & Proposals",
      authorOrScope: "Gunasekara G.N.D (IT22279620) — Individual Component",
      date: "January 2026",
      file: "proposal-doc-3.pdf",
      status: "Available",
      description: "Proposal outlining 8-hour rolling temperature forecasting and multi-output Random Forest disease risk modeling for 3 tea regions.",
      fileSize: "1.9 MB",
    },
    {
      id: "prop-4",
      title: "Proposal Document: AI-Based Tea Sorting & Grading Automation",
      category: "Charter & Proposals",
      authorOrScope: "Pathirana I.M (IT22282668) — Individual Component",
      date: "January 2026",
      file: "proposal-doc-4.pdf",
      status: "Available",
      description: "Proposal for automated optical tea grade classification into 8 commercial categories using ConvNeXtV2-Tiny deep learning.",
      fileSize: "1.1 MB",
    },
    // Research Paper
    {
      id: "paper",
      title: "Research Paper: Intelligent Decision Support System for Sri Lankan Tea Estate Management",
      category: "Research Paper & Publications",
      authorOrScope: "R. Miuranga, N. Prabodhya, N. Gunasekara, I. Pathirane, U. Samarakoon, S. Kumari",
      date: "July 2026",
      file: "research-paper.pdf",
      status: "Available",
      description: "Full research manuscript submitted to BICAC 2026 (Industry Research & Innovation Track, Paper ID: 346) detailing all 4 AI modules and experimental results.",
      fileSize: "582 KB",
    },
    // Poster
    {
      id: "poster",
      title: "TeaGuard Academic Research Poster",
      category: "Posters & Reports",
      authorOrScope: "R26-IT-118 Research Team",
      date: "2026",
      file: "poster.pdf",
      status: "Available",
      description: "Conference and viva exhibition poster summarizing problem statement, system architecture, module accuracies, and findings.",
      fileSize: "1.8 MB",
    },
    // Log Books
    {
      id: "log-1",
      title: "Research Log Book — Miuranga W.A.R",
      category: "Checklists & Assessment",
      authorOrScope: "IT22209320 · Weekly Supervisor Sign-offs",
      date: "2026",
      file: "log-book.pdf",
      status: "Available",
      description: "Official student log book tracking weekly progress, supervisor meetings, and literature study for disease detection.",
      fileSize: "25.8 MB",
    },
    {
      id: "log-2",
      title: "Research Log Book — Gunasekara L.M.N.P",
      category: "Checklists & Assessment",
      authorOrScope: "IT22267986 · Weekly Supervisor Sign-offs",
      date: "2026",
      file: "log-book2.pdf",
      status: "Available",
      description: "Weekly research log book covering labor management, IoT hardware circuit development, and ML stress analysis.",
      fileSize: "26.7 MB",
    },
    {
      id: "log-3",
      title: "Research Log Book — Gunasekara G.N.D",
      category: "Checklists & Assessment",
      authorOrScope: "IT22279620 · Weekly Supervisor Sign-offs",
      date: "2026",
      file: "log-book3.pdf",
      status: "Available",
      description: "Official student log book tracking weather telemetry collection, API integration, and regression model tuning.",
      fileSize: "23.9 MB",
    },
    {
      id: "log-4",
      title: "Research Log Book — Pathirana I.M",
      category: "Checklists & Assessment",
      authorOrScope: "IT22282668 · Weekly Supervisor Sign-offs",
      date: "2026",
      file: "log-book4.pdf",
      status: "Available",
      description: "Official research log book recording tea grading sample imaging, CNN feature extraction, and factory data collection.",
      fileSize: "26.8 MB",
    },
    // Final Documentation (Pending / In Preparation per PDF slide 12)
    {
      id: "final-main",
      title: "Final Thesis: Comprehensive Group Dissertation",
      category: "Final Documentation",
      authorOrScope: "Group R26-IT-118",
      date: "Final Assessment Period (November 2026)",
      file: "R26-IT-118_Common.pdf",
      status: "Available",
      description: "Complete final thesis incorporating introduction, comprehensive literature review, unified system architecture, experimental results, and conclusions.",
      fileSize: "1.25 MB",
    },
    {
      id: "final-ch1",
      title: "Final Individual Report: Tea Leaf Disease Detection",
      category: "Final Documentation",
      authorOrScope: "Miuranga W.A.R (IT22209320)",
      date: "November 2026",
      file: "IT22209320_DRAFT.pdf",
      status: "Available",
      description: "Individual dissertation chapter focusing on YOLOv8s computer vision disease identification and treatment advisory engine.",
      fileSize: "1.58 MB",

    },
    {
      id: "final-ch2",
      title: "Final Individual Report: Labour Management & Welfare Optimization",
      category: "Final Documentation",
      authorOrScope: "Gunasekara L.M.N.P (IT22267986)",
      date: "November 2026",
      file: "Individual Thesis Content nethmi-2.pdf",
      status: "Available",
      description: "Individual dissertation chapter detailing IoT wearable stress telemetry and workforce scheduling algorithms.",
      fileSize: "1.16 MB",

    },
    {
      id: "final-ch3",
      title: "Final Individual Report: Tea-Specific Weather Intelligence",
      category: "Final Documentation",
      authorOrScope: "Gunasekara G.N.D (IT22279620)",
      date: "November 2026",
      file: "Gunasekara_GND_IT22279620_Weather_Intelligence_Thesis.pdf",
      status: "Available",
      description: "Individual dissertation chapter on regional micro-climate forecasting and tea disease outbreak risk estimation.",
      fileSize: "50.9 KB",

    },
    {
      id: "final-ch4",
      title: "Final Individual Report: AI-Based Tea Sorting & Grading",
      category: "Final Documentation",
      authorOrScope: "Pathirana I.M (IT22282668)",
      date: "November 2026",
      file: "Final Report - Induni.pdf",
      status: "Available",
      description: "Individual dissertation chapter evaluating ConvNeXtV2-Tiny optical tea classification and factory validation.",
      fileSize: "1.72 MB",
    },
  ];

  const categories = [
    "All",
    "Charter & Proposals",
    "Checklists & Assessment",
    "Research Paper & Publications",
    "Final Documentation",
    "Posters & Reports",
  ];

  const filteredDocs = documents.filter((doc) => {
    const matchesCat = selectedCategory === "All" || doc.category === selectedCategory;
    const matchesQuery =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.authorOrScope.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs items={[{ label: "Documents" }]} />

        {/* Page Header */}
        <div className="max-w-4xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span>SLIIT Research Library · IT4010</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Project <span className="text-primary">Documents</span> Library
          </h1>
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
            Access verified academic project reports, proposals, checklists, logbooks, research manuscripts, and final dissertation drafts for the TeaGuard AI project (Group ID: <strong>R26-IT-118</strong>).
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="glass p-5 rounded-2xl border border-border mb-8 shadow-xs">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
              <input
                type="text"
                placeholder="Search documents by title, author, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs md:text-sm rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${selectedCategory === cat
                    ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                    : "bg-background text-foreground/70 hover:bg-foreground/5 hover:text-foreground border border-border/60"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredDocs.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="glass p-6 rounded-2xl border border-border/70 hover:border-primary/50 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary font-bold uppercase tracking-wider">
                    {doc.category}
                  </span>

                  {doc.status === "Available" ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Available
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                      <Clock className="w-3.5 h-3.5" /> {doc.status}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-base text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                  {doc.title}
                </h3>

                <p className="text-xs text-foreground/60 font-mono mb-2">{doc.authorOrScope}</p>

                <p className="text-xs text-foreground/75 leading-relaxed mb-4">{doc.description}</p>
              </div>

              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center justify-between text-[11px] text-foreground/55 font-mono mb-3">
                  <span>{doc.date}</span>
                  {doc.fileSize && <span>{doc.fileSize}</span>}
                </div>

                {doc.status === "Available" && doc.file ? (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setPreviewPdf({ url: `/documents/${doc.file}`, title: doc.title })}
                      className="flex-1 py-2 px-3 rounded-xl bg-background border border-border hover:border-primary hover:text-primary text-xs font-semibold text-foreground transition-all flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview</span>
                    </button>
                    <a
                      href={`/documents/${doc.file}`}
                      download
                      className="flex-1 py-2 px-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </a>
                  </div>
                ) : (
                  <div className="py-2 px-3 rounded-xl bg-foreground/5 border border-dashed border-border text-center text-xs text-foreground/50 font-medium">
                    Scheduled for Final Submission
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty state */}
        {filteredDocs.length === 0 && (
          <div className="glass p-12 rounded-2xl border border-dashed border-border text-center my-12">
            <FileText className="w-12 h-12 text-foreground/30 mx-auto mb-3" />
            <h4 className="text-base font-semibold text-foreground mb-1">No documents found</h4>
            <p className="text-xs text-foreground/60 max-w-sm mx-auto mb-4">
              No project documents matched your query &ldquo;{searchQuery}&rdquo;. Try another keyword or clear filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Modal for PDF Preview */}
        <PdfModal
          isOpen={!!previewPdf}
          onClose={() => setPreviewPdf(null)}
          pdfUrl={previewPdf?.url || null}
          title={previewPdf?.title || ""}
        />
      </div>
    </div>
  );
}

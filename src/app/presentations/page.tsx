"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Calendar,
  Download,
  Eye,
  CheckCircle2,
  Clock,
  Layers,
  ArrowRight,
  Presentation,
  FileCheck,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { PdfModal } from "@/components/ui/pdf-modal";
import Link from "next/link";

interface PresentationItem {
  id: string;
  stage: string;
  title: string;
  date: string;
  status: "Completed" | "Scheduled" | "In Preparation";
  file?: string;
  slideCount?: string;
  description: string;
  highlights: string[];
}

export default function PresentationsPage() {
  const [previewPdf, setPreviewPdf] = React.useState<{ url: string; title: string } | null>(null);

  const presentations: PresentationItem[] = [
    {
      id: "pp1",
      stage: "Progress Review 1",
      title: "Progress Presentation 1 (PP1): Architecture & Methodology",
      date: "March 2026",
      status: "Completed",
      file: "Progress-presentation-slides-01.pdf",
      slideCount: "20 Slides",
      description:
        "Comprehensive slide deck presented before the SLIIT academic evaluation panel. Covers domain introduction, literature review findings, overall 4-layer system architecture, dataset collection protocols, and initial AI model training setups.",
      highlights: [
        "Problem Statement & Industry Impact across 4 tea estate operational pain points",
        "Overall system architecture connecting React frontend, Node.js backend, and ML services",
        "Individual student components & research novelty breakdowns",
        "Preliminary progress metrics (80% dataset collection, 70% UI, 65% model training)",
      ],
    },
    {
      id: "pp2",
      stage: "Progress Review 2",
      title: "Progress Presentation 2 (PP2): Model Validation & Results",
      date: "July 2026",
      status: "Completed",
      file: "Progress-presentation-slides-02.pdf",
      slideCount: "20 Slides",
      description:
        "Advanced progress defense demonstrating experimental results, individual module benchmark accuracies, client-server integration, commercialization strategy, and submission to the BICAC 2026 conference.",
      highlights: [
        "Live dashboard preview and end-to-end integration across all 4 intelligent modules",
        "Validated metrics: YOLOv8s (96.1% mAP), LightGBM (82% Acc), Weather (89% Acc), ConvNeXtV2 (99.7% F1)",
        "Commercialization roadmap: Tiered SaaS model, enterprise licensing, TRI partnership",
        "BICAC 2026 Paper Submission (Paper ID: 346, Industry Research & Innovation Track)",
      ],
    },
    {
      id: "pp-combined",
      stage: "Consolidated Review",
      title: "Consolidated Progress Presentation Slide Deck",
      date: "2026",
      status: "Completed",
      file: "Progress-presentation-slides.pdf",
      slideCount: "Comprehensive Deck",
      description:
        "Full unified presentation deck compiling technical architecture, hardware specifications, dataset distributions, and decision support dashboard flows for all 4 project domains.",
      highlights: [
        "Hardware circuit schematics for the ESP32-S3 + MAX30102 physiological wearable",
        "YOLOv8s training loss curves (Box loss, Class loss, DFL loss)",
        "8-hour rolling temperature and disease risk prediction pipelines",
        "Optical tea grading parameter evaluation (HSV color, Gabor filter, contour scaling)",
      ],
    },
    {
      id: "final-presentation",
      stage: "Final Viva Voce",
      title: "Final Presentation & System Demonstration",
      date: "November 2026 (Scheduled)",
      status: "In Preparation",
      description:
        "Final academic defense and live system demonstration for external and internal examiners. Covers full system validation with Wewawatte Estates Co., commercial readiness, and future research directions.",
      highlights: [
        "Live end-to-end demonstration of the production web application and AI APIs",
        "Field trial validation findings and estate manager user feedback",
        "Defense of individual research contributions and technical trade-offs",
        "Commercial deployment roadmap for the Sri Lankan plantation sector",
      ],
    },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs items={[{ label: "Slides of Past Presentations" }]} />

        {/* Page Header */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span>SLIIT Research Presentations · IT4010</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Slides of <span className="text-primary">Past Presentations</span>
          </h1>
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
            Review and download the presentation slide decks delivered by the TeaGuard research group (Group ID: <strong>R26-IT-118</strong>) across project proposal, progress reviews, and upcoming final viva defense.
          </p>
        </div>

        {/* Presentations List */}
        <div className="space-y-8 mb-16">
          {presentations.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass p-6 md:p-8 rounded-2xl border border-border/80 hover:border-primary/40 transition-all shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-2.5 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-mono font-bold uppercase tracking-wider">
                      {item.stage}
                    </span>
                    <span className="text-xs text-foreground/40">•</span>
                    <span className="text-xs font-mono text-foreground/60 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {item.date}
                    </span>
                    {item.slideCount && (
                      <>
                        <span className="text-xs text-foreground/40">•</span>
                        <span className="text-xs font-mono text-foreground/60">{item.slideCount}</span>
                      </>
                    )}
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-foreground">{item.title}</h2>

                  <p className="text-sm text-foreground/80 leading-relaxed">{item.description}</p>

                  <div className="pt-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary block mb-2">
                      Key Content Covered:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-foreground/75">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 lg:w-48 pt-4 lg:pt-0 border-t lg:border-t-0 border-border/50">
                  {item.status === "Completed" && item.file ? (
                    <>
                      <button
                        onClick={() => setPreviewPdf({ url: `/documents/${item.file}`, title: item.title })}
                        className="w-full py-2.5 px-4 rounded-xl bg-background border border-border hover:border-primary hover:text-primary text-xs font-semibold text-foreground transition-all flex items-center justify-center gap-2 shadow-xs"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Preview Deck</span>
                      </button>

                      <a
                        href={`/documents/${item.file}`}
                        download
                        className="w-full py-2.5 px-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-sm shadow-primary/20"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download Slides</span>
                      </a>
                    </>
                  ) : (
                    <div className="w-full p-4 rounded-xl bg-foreground/5 border border-dashed border-border text-center">
                      <Clock className="w-5 h-5 text-amber-500 mx-auto mb-1.5" />
                      <span className="text-xs font-bold text-foreground block">In Preparation</span>
                      <span className="text-[11px] text-foreground/60 leading-tight block mt-1">
                        Slides will be published prior to final viva defense
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for PDF Viewer */}
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

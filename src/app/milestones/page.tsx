"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Award,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  ExternalLink,
  ChevronDown,
  Layers,
  Sparkles,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import Link from "next/link";
import { PdfModal } from "@/components/ui/pdf-modal";

interface MilestoneItem {
  id: string;
  category: string;
  title: string;
  period: string;
  marks: string;
  status: "Completed" | "In Progress" | "Upcoming";
  description: string;
  deliverables: string[];
  evaluationCriteria: string[];
  docLink?: { title: string; url: string };
  slidesLink?: { title: string; url: string };
}

export default function MilestonesPage() {
  const milestones: MilestoneItem[] = [
    {
      id: "proposal",
      category: "Milestone 1",
      title: "Project Proposal & Topic Assessment Form (TAF)",
      period: "January 2026 (Completed: 14/01/2026)",
      marks: "15% Allocated",
      status: "Completed",
      description:
        "Initial project formulation, literature exploration, problem statement validation, and formal submission of the SLIIT IT4010 Topic Assessment Form (TAF V2.1). Approved by Project Supervisor Ms. Uthpala Samarakoon and Co-Supervisor Ms. Suriyaa Kumari.",
      deliverables: [
        "Approved Topic Assessment Form (TAF V2.1)",
        "Four individual component proposals (IT22209320, IT22267986, IT22279620, IT22282668)",
        "Project Charter and feasibility evaluation",
        "Formal proposal presentation to faculty panel",
      ],
      evaluationCriteria: [
        "Novelty and clarity of research problem in Sri Lankan tea estate context",
        "Feasibility of the 4 intelligent modules and hardware requirements",
        "Individual contribution scope and specialization alignment",
      ],
      docLink: { title: "Topic Assessment Form (TAF)", url: "/documents/taf-report.pdf" },
      slidesLink: { title: "Proposal Slides", url: "/documents/proposal-doc-1.pdf" },
    },
    {
      id: "pp1",
      category: "Milestone 2",
      title: "Progress Presentation 1 (PP1)",
      period: "March 2026",
      marks: "15% Allocated",
      status: "Completed",
      description:
        "Comprehensive progress evaluation covering literature review, detailed system architecture design, data collection workflows with Wewawatte Estates Co. and TRI, dataset preparation, and preliminary model development.",
      deliverables: [
        "PP1 Presentation slide deck (20 slides)",
        "Primary dataset acquisition (tea leaves, tea sorting samples, OpenWeatherMap telemetry)",
        "PhysioNet Non-EEG dataset integration for worker stress modeling",
        "Initial YOLOv8s and ConvNeXtV2-Tiny model exploration",
      ],
      evaluationCriteria: [
        "Depth and academic rigor of literature survey across all four domains",
        "Methodology validity and data preprocessing pipeline design",
        "Hardware selection and feasibility of IoT wearable prototype",
      ],
      docLink: { title: "Proposal Doc - Disease Detection", url: "/documents/proposal-doc-1.pdf" },
      slidesLink: { title: "PP1 Presentation Deck", url: "/documents/Progress-presentation-slides-01.pdf" },
    },
    {
      id: "pp2",
      category: "Milestone 3",
      title: "Progress Presentation 2 (PP2)",
      period: "July 2026",
      marks: "18% Allocated",
      status: "Completed",
      description:
        "Evaluation of trained AI/ML models, experimental accuracy benchmarks, web application integration, and submission of the academic research paper to the BICAC 2026 conference.",
      deliverables: [
        "PP2 Presentation slide deck",
        "Trained YOLOv8s disease detector (96.1% mAP@0.5, 95.2% precision, 94.5% F1)",
        "LightGBM worker stress classifier (82% accuracy) + ESP32-S3 firmware",
        "Regional weather forecasting & disease risk regression (89% accuracy)",
        "ConvNeXtV2-Tiny automated tea grading (99.7% F1-score)",
        "BICAC 2026 Research Paper Submission (Paper ID: 346)",
      ],
      evaluationCriteria: [
        "Statistical validity of experimental metrics and confusion matrices",
        "Client-server system integration across React, Node.js, and Flask services",
        "Stakeholder feedback and field validation progress",
      ],
      docLink: { title: "BICAC 2026 Research Paper", url: "/documents/research-paper.pdf" },
      slidesLink: { title: "PP2 Presentation Deck", url: "/documents/Progress-presentation-slides-02.pdf" },
    },
    {
      id: "final-assessment",
      category: "Milestone 4",
      title: "Final Assessment & Dissertation Submission",
      period: "October – November 2026",
      marks: "32% Allocated",
      status: "In Progress",
      description:
        "Comprehensive documentation of the entire research study, including the main comprehensive thesis dissertation, four individual student research chapters, finalized system source code repository, and deployment packaging.",
      deliverables: [
        "Final Research Thesis (Main Dissertation + 4 Individual Chapters)",
        "Finalized Full-Stack Decision Support System codebase",
        "Individual student research log books (Members 1, 2, 3, and 4)",
        "Research poster and deployment artifacts",
      ],
      evaluationCriteria: [
        "Academic quality, structure, and integrity of the dissertation",
        "Completeness of the implemented intelligent decision support system",
        "Robustness of field validation and analysis of limitations",
      ],
      docLink: { title: "Research Poster", url: "/documents/poster.pdf" },
    },
    {
      id: "viva",
      category: "Milestone 5",
      title: "Final Presentation & Viva Voce Defense",
      period: "November 2026 (Scheduled)",
      marks: "20% Allocated",
      status: "Upcoming",
      description:
        "Individual oral examination and live demonstration before an external and internal academic examination panel. Evaluation of individual contributions, theoretical depth, live system defense, and commercial viability.",
      deliverables: [
        "Final Presentation Slides",
        "Live interactive prototype demonstration (all 4 intelligent modules)",
        "Individual viva defense answering examiner inquiries",
        "Commercialization roadmap & industry deployment plan",
      ],
      evaluationCriteria: [
        "Individual mastery of machine learning concepts and research domain",
        "Effectiveness of the live prototype demonstration",
        "Ability to defend design decisions, trade-offs, and future work",
      ],
    },
  ];

  const [selectedMilestoneId, setSelectedMilestoneId] = React.useState<string>("proposal");
  const [modalPdf, setModalPdf] = React.useState<{ url: string; title: string } | null>(null);

  const selectedMilestone = milestones.find((m) => m.id === selectedMilestoneId) || milestones[0];

  const getStatusBadge = (status: MilestoneItem["status"]) => {
    switch (status) {
      case "Completed":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
            <CheckCircle2 className="w-3.5 h-3.5" /> Completed
          </span>
        );
      case "In Progress":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/25">
            <Clock className="w-3.5 h-3.5 animate-spin" /> In Progress
          </span>
        );
      case "Upcoming":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-foreground/10 text-foreground/60 border border-border">
            <Calendar className="w-3.5 h-3.5" /> Upcoming
          </span>
        );
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs items={[{ label: "Milestones" }]} />

        {/* Page Header */}
        <div className="max-w-4xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span>SLIIT IT4010 Research Schedule</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Project <span className="text-primary">Milestones</span> & Assessments
          </h1>
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
            Track all academic assessment stages, evaluation criteria, dates, allocated marks weights, and verified deliverables for the TeaGuard AI research project (Group ID: <strong>R26-IT-118</strong>).
          </p>
        </div>

        {/* =========================================================================
            PDF REQUIREMENT (Page 11): DROP-DOWN SELECTOR TO CHOOSE MILESTONE
        ========================================================================= */}
        <div className="glass p-6 rounded-2xl border-2 border-primary/30 mb-12 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-border">
            <div>
              <span className="text-xs font-mono text-primary font-bold uppercase tracking-wider block">
                Interactive Assessment Inspector
              </span>
              <h2 className="text-lg md:text-xl font-bold text-foreground">
                Select an Assessment from the Drop-Down Menu
              </h2>
            </div>

            {/* The Dropdown Menu */}
            <div className="w-full md:w-80">
              <label htmlFor="milestone-selector" className="sr-only">
                Choose an assessment milestone
              </label>
              <div className="relative">
                <select
                  id="milestone-selector"
                  value={selectedMilestoneId}
                  onChange={(e) => setSelectedMilestoneId(e.target.value)}
                  className="w-full appearance-none rounded-xl bg-background border-2 border-primary/40 px-4 py-3 pr-10 text-sm font-semibold text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer transition-all"
                >
                  {milestones.map((m) => (
                    <option key={m.id} value={m.id} className="bg-background text-foreground py-1">
                      {m.category}: {m.title.split("(")[0].trim()} ({m.marks})
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
              </div>
            </div>
          </div>

          {/* Dynamic Detailed View for Selected Assessment */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMilestone.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold uppercase tracking-wider mb-1">
                    <span>{selectedMilestone.category}</span>
                    <span>•</span>
                    <span>{selectedMilestone.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{selectedMilestone.title}</h3>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1.5 rounded-xl bg-primary/10 text-primary font-bold text-sm border border-primary/25">
                    {selectedMilestone.marks}
                  </span>
                  {getStatusBadge(selectedMilestone.status)}
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                {selectedMilestone.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-4 rounded-xl bg-foreground/5 border border-border">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-primary mb-3">
                    Key Deliverables & Submissions
                  </h4>
                  <ul className="space-y-2 text-xs text-foreground/80">
                    {selectedMilestone.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-foreground/5 border border-border">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-primary mb-3">
                    Evaluation Scope & Assessment Focus
                  </h4>
                  <ul className="space-y-2 text-xs text-foreground/80">
                    {selectedMilestone.evaluationCriteria.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Working links for documents and presentations */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
                {selectedMilestone.docLink && (
                  <button
                    onClick={() => setModalPdf({ url: selectedMilestone.docLink!.url, title: selectedMilestone.docLink!.title })}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View {selectedMilestone.docLink.title}</span>
                  </button>
                )}

                {selectedMilestone.slidesLink && (
                  <button
                    onClick={() => setModalPdf({ url: selectedMilestone.slidesLink!.url, title: selectedMilestone.slidesLink!.title })}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl border border-border bg-card hover:bg-foreground/5 text-foreground transition-all"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                    <span>View {selectedMilestone.slidesLink.title}</span>
                  </button>
                )}

                <Link
                  href="/documents"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs text-foreground/70 hover:text-primary transition-colors ml-auto"
                >
                  <span>Go to Document Library</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* =========================================================================
            COMPLETE MILESTONES ROADMAP / TIMELINE
        ========================================================================= */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono text-primary font-bold uppercase tracking-wider">Assessment Roadmap</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">All Project Assessments Overview</h2>
            </div>
            <div className="text-right hidden sm:block">
              <span className="text-xs text-foreground/60 font-mono">Total IT4010 Weight: 100%</span>
            </div>
          </div>

          <div className="space-y-6">
            {milestones.map((m, idx) => (
              <div
                key={m.id}
                onClick={() => setSelectedMilestoneId(m.id)}
                className={`glass p-6 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                  selectedMilestoneId === m.id
                    ? "border-primary shadow-md bg-primary/5"
                    : "border-border hover:border-primary/40 hover:bg-card"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary font-mono font-bold text-sm shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-primary font-semibold">{m.category}</span>
                        <span className="text-xs text-foreground/40">•</span>
                        <span className="text-xs text-foreground/60">{m.period}</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{m.title}</h3>
                      <p className="text-xs text-foreground/70 line-clamp-2 mt-1 max-w-2xl">{m.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0 justify-between md:justify-end pt-3 md:pt-0 border-t md:border-t-0 border-border/50">
                    <div className="text-right">
                      <span className="text-xs font-mono font-bold text-foreground block">{m.marks}</span>
                    </div>
                    {getStatusBadge(m.status)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for viewing milestone PDF documents */}
        <PdfModal
          isOpen={!!modalPdf}
          onClose={() => setModalPdf(null)}
          pdfUrl={modalPdf?.url || null}
          title={modalPdf?.title || ""}
        />
      </div>
    </div>
  );
}

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Users2,
  Mail,
  GraduationCap,
  Award,
  ExternalLink,
  ShieldCheck,
  Building2,
  FileCheck2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import Link from "next/link";

export default function AboutUsPage() {
  const teamMembers = [
    {
      name: "Miuranga W.A.R",
      id: "IT22209320",
      degree: "BSc (Hons) in Information Technology",
      institution: "SLIIT",
      specialization: "Information Technology Specialization",
      role: "Lead Researcher · Individual Component",
      researchArea: "Tea Leaf Disease Detection & Pattern Analysis",
      model: "YOLOv8s Vision Model (96.1% mAP@0.5, 94.5% F1-score)",
      image: "/team/miuranga.png",
      email: "ravidu612@gmail.com",
      github: "https://github.com/Ravidu612",
      linkedin: "https://www.linkedin.com/in/ravidu-miuranga-b3a4692bb",
      responsibilities: [
        "Collected and curated authentic Sri Lankan tea leaf disease dataset across 6 pathogen classes",
        "Trained and evaluated YOLOv8s object detection architecture for real-time bounding and classification",
        "Developed disease severity grading logic and automated agronomic treatment recommendation engine",
        "Integrated computer vision inference pipeline with the central estate managerial dashboard",
      ],
    },
    {
      name: "Gunasekara L.M.N.P",
      id: "IT22267986",
      degree: "BSc (Hons) in Information Technology",
      institution: "SLIIT",
      specialization: "Information Technology Specialization",
      role: "Researcher · Individual Component",
      researchArea: "Labour Management & Welfare Optimization",
      model: "LightGBM Classifier + ESP32-S3 IoT (82% Accuracy)",
      image: "/team/gunasekara-lmnp.png",
      email: "nethminiprabodya3@gmail.com",
      github: "https://github.com/Nethmi-02",
      linkedin: "https://www.linkedin.com/in/nethmini-gunasekara-7073bb371",
      responsibilities: [
        "Engineered AI-driven workforce allocation algorithms based on worker skills and daily task queue",
        "Built IoT physiological wearable prototype using ESP32-S3 and MAX30102 sensor (Heart Rate & SpO₂)",
        "Trained LightGBM model on PhysioNet dataset to classify worker stress (Relaxed, Emotional, Cognitive, Physical)",
        "Implemented NLP-based worker grievance categorization and priority dispatch system",
      ],
    },
    {
      name: "Gunasekara G.N.D",
      id: "IT22279620",
      degree: "BSc (Hons) in Information Technology",
      institution: "SLIIT",
      specialization: "Information Technology Specialization",
      role: "Researcher · Individual Component",
      researchArea: "Tea-Specific Weather & Climate Intelligence System",
      model: "Gradient Boosting + Multi-Output Random Forest (89% Accuracy)",
      image: "/team/gunasekara-gnd.png",
      email: "naveengunasekara62@gmail.com",
      github: "https://github.com/NaveenDG2002",
      linkedin: "https://www.linkedin.com/in/naveen-gunasekara-26438a26b/",
      responsibilities: [
        "Integrated live OpenWeatherMap API telemetries and historical weather records for Nuwara Eliya, Kandy, and Ratnapura",
        "Built Gradient Boosting Regressor for continuous 8-hour rolling micro-climate temperature forecasting",
        "Trained Multi-output Random Forest model to correlate temperature/humidity thresholds with tea disease risks",
        "Engineered proactive agro-climatic advisories for irrigation, fertilizer timing, and harvest windows",
      ],
    },
    {
      name: "Pathirana I.M",
      id: "IT22282668",
      degree: "BSc (Hons) in Information Technology",
      institution: "SLIIT",
      specialization: "Information Technology Specialization",
      role: "Researcher · Individual Component",
      researchArea: "AI-Based Tea Sorting & Grading Automation",
      model: "ConvNeXtV2-Tiny Optical Classifier (99.7% F1-score)",
      image: "/team/pathirana.png",
      email: "Pathiranainduni925@gmail.com",
      github: "https://github.com/InduniPathirana",
      linkedin: "https://www.linkedin.com/in/induni-pathiran-727968263/",
      responsibilities: [
        "Collected factory-grade processed tea sample imagery under controlled optical conditions",
        "Extracted multi-scale physical features: HSV color space, Gabor texture, contour size, and density",
        "Fine-tuned ConvNeXtV2-Tiny model across 8 commercial tea grades (BM, BOP, BP, BROKEN_TEA, DUST, etc.)",
        "Generated automated batch quality analytics and consistency verification reports for tea factories",
      ],
    },
  ];

  const supervisors = [
    {
      title: "Research Supervisor",
      name: "Ms. Uthpala Samarakoon",
      designation: "Senior Lecturer, Software Engineering",
      department: "Department of Information Technology",
      faculty: "Faculty of Computing, SLIIT",
      email: "uthpala.s@sliit.lk",
      image: "/supervisors/uthpalas.png",
      profileUrl: "https://www.sliit.lk",
    },
    {
      title: "Co-Supervisor",
      name: "Ms. Suriyaa Kumari",
      designation: "Lecturer, Software Engineering",
      department: "Department of Information Technology",
      faculty: "Faculty of Computing, SLIIT",
      email: "suriyaa.k@sliit.lk",
      image: "/supervisors/suriyas.png",
      profileUrl: "https://www.sliit.lk",
    },
  ];

  const achievements = [
    {
      title: "BICAC 2026 Conference Paper Submission",
      subtitle: "Track: Industry Research and Innovation · Paper ID: 346",
      desc: "Full manuscript entitled 'Intelligent Decision Support System for Sri Lankan Tea Estate Management' submitted to the International Conference on Bioinformatics and Computer-Assisted Communication (BICAC 2026).",
      docLink: "/documents/research-paper.pdf",
    },
    {
      title: "Official Topic Assessment Form (TAF V2.1) Approval",
      subtitle: "SLIIT IT4010 Research Project Examination",
      desc: "Research proposal and individual component scopes formally approved and signed off by the Department of Information Technology faculty supervision panel.",
      docLink: "/documents/taf-report.pdf",
    },
    {
      title: "Industry Collaboration with Wewawatte Estates Co.",
      subtitle: "Field Trials & Dataset Collection",
      desc: "Formal partnership with Wewawatte Estates Co. (Pvt) Ltd. for on-site tea plantation observations, plucking worker interviews, and factory tea grade sample acquisition.",
    },
    {
      title: "Technical Advisory from Tea Research Institute (TRI)",
      subtitle: "Talawakelle, Sri Lanka",
      desc: "Technical guidance on pathogen etiology, blister blight spray schedules, and tea agro-climatic standards verified through institutional TRI publications and recommendations.",
    },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs items={[{ label: "About Us" }]} />

        {/* Page Header */}
        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span>Research Group Profile · R26-IT-118</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            About <span className="text-primary">Our Research Group</span>
          </h1>
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
            Meet the undergraduate researchers, academic supervisors, and institutional partners behind the{" "}
            <strong>TeaGuard AI</strong> project at the Sri Lanka Institute of Information Technology (SLIIT).
          </p>
        </div>

        {/* Group Identity Card */}
        <div className="glass p-6 md:p-8 rounded-2xl border border-border mb-16 shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <span className="text-xs font-mono text-primary font-bold uppercase tracking-wider">
                Academic Context & Innovation Group
              </span>
              <h2 className="text-2xl font-bold text-foreground">
                Nexora Innovations · TIM Research Group
              </h2>
              <p className="text-sm text-foreground/80 leading-relaxed">
                TeaGuard AI was conceived and developed by research team <strong>R26-IT-118</strong> within the Technology Integration and Management (TIM) research group at the Faculty of Computing, SLIIT. Operating collaboratively under the identity <strong>Nexora Innovations</strong>, the team specializes in applying Artificial Intelligence, Edge Computing, Computer Vision, and IoT to address socio-economic challenges in Sri Lanka&apos;s primary agricultural industries.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-lg bg-background border border-border text-foreground/70">
                  Course: IT4010 Final Year Research Project
                </span>
                <span className="px-3 py-1 rounded-lg bg-background border border-border text-foreground/70">
                  Academic Year: 2026
                </span>
                <span className="px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary font-bold">
                  Group ID: R26-IT-118
                </span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-background/60 border border-border/80 flex flex-col justify-center space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold">
                <Building2 className="w-4 h-4" />
                <span>Host Institution</span>
              </div>
              <p className="text-xs font-semibold text-foreground">
                Sri Lanka Institute of Information Technology (SLIIT)
              </p>
              <p className="text-[11px] text-foreground/65 leading-relaxed">
                Faculty of Computing · Department of Information Technology<br />
                New Kandy Road, Malabe 10115, Sri Lanka
              </p>
              <a
                href="https://www.sliit.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold hover:underline pt-1"
              >
                <span>Visit SLIIT Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================================
            STUDENT RESEARCHERS (All 4 with authentic data, photos, student IDs)
        ========================================================================= */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono text-primary font-bold uppercase tracking-wider">Undergraduate Researchers</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Project Team Members</h2>
            </div>
            <span className="text-xs font-mono text-foreground/50 hidden sm:block">4 Specialized Domains</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`glass p-6 md:p-7 rounded-2xl border transition-all shadow-sm hover:shadow-lg flex flex-col justify-between ${
                  member.id === "IT22209320" ? "border-emerald-500/40 bg-emerald-500/5 ring-1 ring-emerald-500/20" : "border-border"
                }`}
              >
                <div>
                  {/* Member Header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-primary/10 border-2 border-primary/20 shrink-0 shadow-sm">
                      <img
                        src={member.image}
                        alt={`${member.name} photograph`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-mono font-bold text-primary px-2 py-0.5 rounded bg-primary/10">
                          {member.id}
                        </span>
                        {member.id === "IT22209320" && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold">
                            User Individual Component
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-foreground truncate mt-1">{member.name}</h3>
                      <p className="text-xs text-foreground/60 font-mono">{member.degree}</p>
                      <p className="text-xs text-foreground/50">{member.institution}</p>
                    </div>
                  </div>

                  {/* Research Focus */}
                  <div className="p-3.5 rounded-xl bg-foreground/5 border border-border/70 mb-4">
                    <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider block mb-1">
                      Individual Research Responsibility
                    </span>
                    <h4 className="font-bold text-sm text-foreground">{member.researchArea}</h4>
                    <span className="text-xs text-foreground/70 font-mono block mt-1">{member.model}</span>
                  </div>

                  {/* Detailed Responsibilities */}
                  <div className="space-y-1.5 mb-5">
                    <span className="text-xs font-mono text-foreground/55 font-bold uppercase tracking-wider block">
                      Core Implementation Tasks:
                    </span>
                    {member.responsibilities.map((r, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs text-foreground/75 leading-relaxed">
                        <span className="text-primary font-bold shrink-0">•</span>
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social & Contact Bar */}
                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-1.5 text-xs text-foreground/70 hover:text-primary transition-colors font-mono"
                  >
                    <Mail className="w-3.5 h-3.5 text-primary" />
                    <span>{member.email}</span>
                  </a>

                  <div className="flex items-center gap-2">
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-background border border-border hover:border-primary hover:text-primary transition-colors text-foreground/75"
                        aria-label={`${member.name} GitHub`}
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-background border border-border hover:border-primary hover:text-primary transition-colors text-foreground/75"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <FaLinkedin className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            ACADEMIC SUPERVISORS
        ========================================================================= */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono text-primary font-bold uppercase tracking-wider">Supervision & Guidance</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Project Supervisors</h2>
            </div>
            <span className="text-xs font-mono text-foreground/50 hidden sm:block">Department of IT · SLIIT</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {supervisors.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="glass p-6 md:p-8 rounded-2xl border border-border flex flex-col sm:flex-row items-center sm:items-start gap-6 group hover:border-primary/40 transition-all shadow-sm"
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-primary/10 border-2 border-primary/20 shrink-0 shadow-md">
                  <img
                    src={s.image}
                    alt={`${s.name} photograph`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 text-center sm:text-left space-y-2">
                  <span className="text-xs font-mono text-primary font-bold uppercase tracking-wider block">
                    {s.title}
                  </span>
                  <h3 className="text-xl font-bold text-foreground">{s.name}</h3>
                  <p className="text-xs font-semibold text-foreground/80">{s.designation}</p>
                  <p className="text-xs text-foreground/60">{s.department}</p>
                  <p className="text-xs text-foreground/50">{s.faculty}</p>

                  <div className="pt-2">
                    <a
                      href={`mailto:${s.email}`}
                      className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-foreground/5 hover:bg-primary/10 hover:text-primary transition-colors text-foreground font-medium"
                    >
                      <Mail className="w-3.5 h-3.5 text-primary" />
                      <span>{s.email}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            VERIFIED ACHIEVEMENTS & PARTNERSHIPS
        ========================================================================= */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono text-primary font-bold uppercase tracking-wider">Research Integrity</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Verified Achievements & Collaborations</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((ach, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border border-border/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-primary text-xs font-mono font-bold mb-2">
                    <Award className="w-4 h-4" />
                    <span>{ach.subtitle}</span>
                  </div>
                  <h3 className="font-bold text-base text-foreground mb-2">{ach.title}</h3>
                  <p className="text-xs text-foreground/75 leading-relaxed mb-4">{ach.desc}</p>
                </div>

                {ach.docLink && (
                  <div className="pt-3 border-t border-border/50">
                    <Link
                      href={ach.docLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold hover:underline"
                    >
                      <span>View Official Verification Document</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

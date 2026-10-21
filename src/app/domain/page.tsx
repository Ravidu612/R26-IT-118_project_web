"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Split,
  AlertOctagon,
  Target,
  GitBranch,
  Layers,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Users2,
  CloudRain,
  Factory,
  Cpu,
  Server,
  Database,
  Radio,
  FileText,
  ArrowRight,
  TrendingUp,
  Award,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import Link from "next/link";

export default function DomainPage() {
  const [activeArea, setActiveArea] = React.useState<string>("all");

  const domainSections = [
    { id: "lit-survey", title: "A. Literature Survey", icon: BookOpen },
    { id: "research-gap", title: "B. Research Gap", icon: Split },
    { id: "research-problem", title: "C. Research Problem", icon: AlertOctagon },
    { id: "objectives", title: "D. Research Objectives", icon: Target },
    { id: "methodology", title: "E. Research Methodology", icon: GitBranch },
    { id: "technologies", title: "F. Technologies Used", icon: Layers },
  ];

  const literatureThemes = [
    {
      theme: "1. Smart Agriculture & Tea Estate Management",
      summary:
        "Extensive research demonstrates the potential of AI and IoT in modernizing traditional agricultural domains. However, most existing studies focus either exclusively on large-scale mechanized agriculture or single-point interventions, leaving tea plantations in developing nations dependent on manual record-keeping and subjective decision-making.",
      citations: [
        {
          num: "[1]",
          text: "A. Kamilaris and F. X. Prenafeta-Boldú, 'Deep learning in agriculture: A survey,' Computers and Electronics in Agriculture, vol. 147, pp. 70–90, 2018.",
        },
        {
          num: "[7]",
          text: "Tea Research Institute of Sri Lanka, 'Guidelines for Labor Welfare and Productivity in Tea Estates.' Talawakelle, Sri Lanka: TRI Publications, 2022.",
        },
      ],
    },
    {
      theme: "2. Tea Leaf Disease Detection using Computer Vision",
      summary:
        "Plant pathology studies demonstrate that deep learning Convolutional Neural Networks (CNNs) achieve high detection accuracy on leaf images. However, conventional models are typically evaluated in controlled laboratory conditions on generic crops. TeaGuard leverages YOLOv8s specifically adapted to field-captured tea leaves under varying ambient lighting and leaf orientations.",
      citations: [
        {
          num: "[8]",
          text: "S. P. Mohanty, D. P. Hughes, and M. Salathé, 'Using deep learning for image-based plant disease detection,' Frontiers in Plant Science, vol. 7, Art. no. 1419, Sept. 2016.",
        },
        {
          num: "[9]",
          text: "G. Santhiya and A. Radhakrishnan, 'TEADIS: Deep learning based tea leaf disease classification and segmentation via field observation data,' Boletín Latinoamericano y del Caribe de Plantas Medicinales y Aromáticas, vol. 24, no. 5, pp. 772–789, 2025.",
        },
      ],
    },
    {
      theme: "3. Climate Change & Environmental Monitoring in Tea Growing Regions",
      summary:
        "Agro-climatic research confirms that tea yield and disease outbreak risk are profoundly influenced by micro-climate dynamics, specifically rainfall, humidity, and temperature. While macro-forecasts exist, tea estates require localized 8-hour rolling forecasts paired with proactive risk indicators to guide harvesting and spraying schedules.",
      citations: [
        {
          num: "[15]",
          text: "M. A. Wijeratne, 'Vulnerability of Sri Lanka tea production to global climate change,' Water, Air, and Soil Pollution, vol. 92, pp. 87–94, 1996.",
        },
        {
          num: "[12]",
          text: "M. K. Ali, M. A. Hashmi, H. Anjum, M. Kashif, and T. Ahmad, 'A hybrid approach to tea crop yield prediction using simulation models and machine learning,' Plants, vol. 11, no. 15, 2022.",
        },
        {
          num: "[13]",
          text: "Y. Xing, J. Li, Y. Zhang, Q. Wang, and X. Chen, 'Prediction of changes in suitable habitats for tea plants in China's four major tea-producing regions based on machine learning models,' PLoS ONE, vol. 17, no. 10, 2024.",
        },
      ],
    },
    {
      theme: "4. Worker Welfare & Intelligent Labor Allocation",
      summary:
        "Labor shortages, uneven workload distribution, and physical fatigue severely impact tea plucking productivity. Prior workforce systems in agriculture record only attendance and payroll. TeaGuard innovatively links machine learning task allocation with non-invasive physiological IoT wearables (ESP32-S3 + MAX30102) tracking Heart Rate and SpO₂.",
      citations: [
        {
          num: "[2]",
          text: "M. Sarker, M. A. Rahman, and M. R. Islam, 'Machine learning-based workforce management and productivity analysis,' IEEE Access, vol. 9, pp. 102345–102356, 2021.",
        },
        {
          num: "[3]",
          text: "M. Islam, M. S. Rahman, and M. T. Islam, 'Machine learning-based prediction of worker fatigue in physically demanding environments,' Journal of Occupational Health, vol. 62, no. 1, pp. 1–11, 2020.",
        },
        {
          num: "[6]",
          text: "C. Rajapaksha, S. Perera, and N. Jayawardena, 'Impact of workload distribution on productivity and welfare of tea plucking workers in Sri Lanka,' Asian Journal of Agriculture and Rural Development, vol. 12, no. 3, pp. 210–224, 2022.",
        },
      ],
    },
    {
      theme: "5. Tea Sorting Automation & Market Quality Grading",
      summary:
        "Commercial Ceylon tea valuation depends strictly on grade purity (BOP, FBOP, Dust, Pekoe, etc.). Traditional tactile and visual inspection introduces subjective error. Deep learning architectures like ConvNeXtV2-Tiny enable rapid optical sorting with 99.7% F1-score, bridging factory-level quality control directly into the central estate management dashboard.",
      citations: [
        {
          num: "[10]",
          text: "C. Zhang, J. Wang, G. Lu, S. Fei, T. Zheng, and B. Huang, 'Automated tea quality identification based on deep convolutional neural networks and transfer learning,' Journal of Food Process Engineering, vol. 46, no. 4, Art. no. e14303, 2023.",
        },
        {
          num: "[17]",
          text: "X. Zhang et al., 'Design and operation of a deep-learning-based fresh tea leaf sorting system,' Computers and Electronics in Agriculture, 2023.",
        },
        {
          num: "[18]",
          text: "T. Wu et al., 'Applications of deep learning in tea quality monitoring: A review,' Artificial Intelligence Review, 2025.",
        },
      ],
    },
  ];

  const comparisonData = [
    {
      dimension: "Platform Architecture",
      existing: "Fragmented standalone tools or manual paper logbooks",
      teaguard: "Unified multi-layer Decision Support System (React + Node.js + MongoDB)",
    },
    {
      dimension: "Labor & Welfare",
      existing: "Basic attendance and manual wage registers; no health awareness",
      teaguard: "Predictive ML task allocation + Real-time IoT HR/SpO₂ stress monitoring (82% Acc.)",
    },
    {
      dimension: "Tea Leaf Disease",
      existing: "Manual scouting, delayed lab inspection, widespread foliar damage",
      teaguard: "Real-time YOLOv8s vision scan (96.1% mAP) with actionable treatment guidance",
    },
    {
      dimension: "Weather Intelligence",
      existing: "Broad regional weather reports with no tea-specific guidance",
      teaguard: "Localized 8-hour rolling forecasts + Random Forest disease outbreak risk (89% Acc.)",
    },
    {
      dimension: "Tea Sorting & Grading",
      existing: "Manual visual examination or multi-million rupee optical hardware",
      teaguard: "ConvNeXtV2-Tiny image-based automated 8-grade classification (99.7% F1-score)",
    },
    {
      dimension: "Estate Integration",
      existing: "Siloed data streams; estate managers react to crises after loss occurs",
      teaguard: "Centralized managerial dashboard with proactive notifications and reports",
    },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs items={[{ label: "Domain" }]} />

        {/* Page Header */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span>SLIIT Research Domain · IT4010</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Research <span className="text-primary">Domain</span>
          </h1>
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
            A comprehensive overview of the research domain for the{" "}
            <strong>Intelligent Decision Support System for Sri Lankan Tea Estate Management</strong> (TeaGuard AI, Group ID: <strong>R26-IT-118</strong>),
            encompassing literature review, research gaps, problem formulation, approved objectives, implementation methodology, and verified technologies.
          </p>
        </div>

        {/* Quick Section Jump Navigator */}
        <div className="flex flex-wrap gap-2 p-2 rounded-2xl bg-card border border-border mb-16 shadow-xs sticky top-20 z-30 backdrop-blur-md">
          {domainSections.map((sec) => {
            const Icon = sec.icon;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-foreground/75 hover:bg-primary/10 hover:text-primary transition-all"
              >
                <Icon className="w-3.5 h-3.5 text-primary" />
                <span>{sec.title}</span>
              </a>
            );
          })}
        </div>

        {/* =========================================================================
            SECTION A: LITERATURE SURVEY
        ========================================================================= */}
        <section id="lit-survey" className="scroll-mt-32 mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold">Requirement Area A</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Literature Survey</h2>
            </div>
          </div>

          <div className="glass p-6 md:p-8 rounded-2xl border border-border mb-8">
            <p className="text-foreground/80 leading-relaxed mb-6">
              The Sri Lankan tea industry (Ceylon Tea) represents one of the nation&apos;s principal economic backbones, generating crucial foreign export exchange and supporting hundreds of thousands of rural livelihoods. However, tea cultivation is increasingly vulnerable to compound stressors: declining labor availability, escalating climate variability, severe crop disease outbreaks, and inconsistent factory grading. While recent advancements in Artificial Intelligence (AI), Machine Learning (ML), Deep Learning (DL), and the Internet of Things (IoT) offer transformative potential, the existing body of agricultural literature reveals a persistent limitation — almost all prior solutions address these operational facets in complete isolation.
            </p>

            <div className="space-y-6">
              {literatureThemes.map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-background/60 border border-border/70 hover:border-primary/40 transition-colors">
                  <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-primary font-mono text-sm">{idx + 1}.</span>
                    <span>{item.theme}</span>
                  </h3>
                  <p className="text-sm text-foreground/75 leading-relaxed mb-4">{item.summary}</p>
                  
                  <div className="border-t border-border/50 pt-3 space-y-1.5">
                    <span className="text-xs font-mono text-primary uppercase tracking-wider font-semibold block">Key References:</span>
                    {item.citations.map((cite, cIdx) => (
                      <div key={cIdx} className="text-xs text-foreground/65 font-mono pl-3 border-l-2 border-primary/30">
                        <strong className="text-foreground/80">{cite.num}</strong> {cite.text}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION B: RESEARCH GAP
        ========================================================================= */}
        <section id="research-gap" className="scroll-mt-32 mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
              <Split className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold">Requirement Area B</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Research Gap</h2>
            </div>
          </div>

          <div className="glass p-6 md:p-8 rounded-2xl border border-border mb-8">
            <p className="text-foreground/80 leading-relaxed mb-6">
              A comprehensive examination of existing agricultural management platforms, academic prototypes, and commercial products reveals crucial gaps:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-5 rounded-xl bg-red-500/5 border border-red-500/20">
                <h3 className="font-bold text-base text-red-600 dark:text-red-400 mb-2">
                  Limitations of Existing Approaches
                </h3>
                <ul className="space-y-2.5 text-xs text-foreground/75">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span><strong>Isolated Single-Purpose Systems:</strong> Prior works focus on either disease identification OR weather forecasting OR labor attendance, forcing managers to reconcile incompatible tools.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span><strong>Absence of Physiological Health Monitoring:</strong> Traditional labor software tracks only attendance and wages, completely ignoring worker fatigue, heat stress, and occupational wellbeing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span><strong>Generic Weather vs. Agro-Climatic Guidance:</strong> Commercial weather APIs supply raw temperatures without correlating humidity and rainfall to specific tea disease infection risks (e.g., Blister Blight).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span><strong>Prohibitive Sorting Machinery:</strong> Industrial optical sorters (e.g. Bühler, Satake) require heavy capital expenditure unsuitable for smallholder estates and regional factories.</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                <h3 className="font-bold text-base text-emerald-600 dark:text-emerald-400 mb-2">
                  TeaGuard Innovative Contribution
                </h3>
                <ul className="space-y-2.5 text-xs text-foreground/75">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>First Integrated Tea Estate DSS:</strong> Unifies labor allocation, disease scanning, micro-climate intelligence, and tea sorting into a single synchronized platform.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>IoT Wearable Worker Welfare:</strong> Employs an ESP32-S3 + MAX30102 wearable prototype running LightGBM classification for non-invasive stress/fatigue detection (82% Acc.).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Predictive Disease Outbreak Warning:</strong> Pairs Gradient Boosting temperature forecasts with Random Forest disease risk estimators for Nuwara Eliya, Kandy, and Ratnapura.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Optical Vision Tea Grading:</strong> State-of-the-art ConvNeXtV2-Tiny model achieves 99.7% F1-score across 8 standard commercial tea grades from smartphone or digital camera images.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Comparison Table */}
            <h3 className="text-lg font-bold text-foreground mb-4">Direct Comparative Analysis</h3>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left text-xs">
                <thead className="bg-foreground/5 text-foreground font-semibold border-b border-border">
                  <tr>
                    <th className="p-3.5">Operational Dimension</th>
                    <th className="p-3.5 text-foreground/60">Existing Systems & Conventional Tools</th>
                    <th className="p-3.5 text-primary font-bold">TeaGuard Intelligent Decision Support</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-foreground/5 transition-colors">
                      <td className="p-3.5 font-semibold text-foreground/90">{row.dimension}</td>
                      <td className="p-3.5 text-foreground/70">{row.existing}</td>
                      <td className="p-3.5 text-foreground/90 font-medium bg-primary/5">{row.teaguard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION C: RESEARCH PROBLEM
        ========================================================================= */}
        <section id="research-problem" className="scroll-mt-32 mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
              <AlertOctagon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold">Requirement Area C</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Research Problem</h2>
            </div>
          </div>

          <div className="glass p-6 md:p-8 rounded-2xl border border-border mb-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Problem Statement</h3>
              <p className="text-foreground/80 leading-relaxed">
                Despite Ceylon tea being recognized globally for superior aroma and quality, operational practices across Sri Lankan tea estates and regional factories remain heavily reliant on manual record-keeping, subjective human judgment, and retrospective crisis response. The absence of an integrated, data-driven decision support system limits estate managers&apos; ability to optimize workforce deployment, protect worker health, intercept foliar diseases before widespread infestation, anticipate erratic micro-climates, and guarantee repeatable grading consistency.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-card border border-border">
                <span className="text-xs font-mono text-red-500 font-bold block mb-1">01. LABOR SHORTAGE</span>
                <h4 className="font-bold text-sm text-foreground mb-1">Worker Fatigue & Allocation</h4>
                <p className="text-xs text-foreground/70">Sub-optimal manual plucking task allocation leads to chronic fatigue, low retention, and delayed grievance handling.</p>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border">
                <span className="text-xs font-mono text-amber-500 font-bold block mb-1">02. CROP DISEASES</span>
                <h4 className="font-bold text-sm text-foreground mb-1">Delayed Pathogen Detection</h4>
                <p className="text-xs text-foreground/70">Manual scouting misses early infection stages (e.g. Blister Blight, Grey Blight), leading to widespread yield loss and excessive chemical sprays.</p>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border">
                <span className="text-xs font-mono text-blue-500 font-bold block mb-1">03. CLIMATE ANOMALIES</span>
                <h4 className="font-bold text-sm text-foreground mb-1">Unpredictable Weather Risks</h4>
                <p className="text-xs text-foreground/70">Shifting rainfall and micro-climate patterns disrupt harvest cycles and fertilizer application without localized advisory.</p>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border">
                <span className="text-xs font-mono text-purple-500 font-bold block mb-1">04. QUALITY GRADING</span>
                <h4 className="font-bold text-sm text-foreground mb-1">Manual Grading Inconsistency</h4>
                <p className="text-xs text-foreground/70">Visual inspection by tired operators causes batch-to-batch grading disparity, directly damaging export premium and auction prices.</p>
              </div>
            </div>

            {/* SDG Alignment */}
            <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
              <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" /> United Nations Sustainable Development Goals (SDG) Alignment
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-card border border-border">
                  <span className="font-bold text-primary block">SDG 8</span>
                  <span className="text-foreground/70">Decent Work & Economic Growth via worker welfare monitoring</span>
                </div>
                <div className="p-3 rounded-lg bg-card border border-border">
                  <span className="font-bold text-primary block">SDG 9</span>
                  <span className="text-foreground/70">Industry, Innovation & Infrastructure via AI agricultural digitization</span>
                </div>
                <div className="p-3 rounded-lg bg-card border border-border">
                  <span className="font-bold text-primary block">SDG 12</span>
                  <span className="text-foreground/70">Responsible Consumption & Production via precise chemical spraying</span>
                </div>
                <div className="p-3 rounded-lg bg-card border border-border">
                  <span className="font-bold text-primary block">SDG 13</span>
                  <span className="text-foreground/70">Climate Action through proactive agro-climatic forecasting</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION D: RESEARCH OBJECTIVES
        ========================================================================= */}
        <section id="objectives" className="scroll-mt-32 mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold">Requirement Area D</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Research Objectives</h2>
            </div>
          </div>

          <div className="space-y-6">
            {/* Approved Main Objective */}
            <div className="glass p-6 md:p-8 rounded-2xl border-l-4 border-l-primary border-border shadow-md">
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold block mb-2">Approved Main Objective (IT4010)</span>
              <p className="text-lg md:text-xl font-bold text-foreground leading-relaxed">
                &ldquo;To design and evaluate an Integrated AI-Driven Intelligent Decision Support System for Sri Lankan tea estates that improves labor welfare and productivity, enables tea-specific climate and weather intelligence, supports early tea leaf disease detection using CNN-based image analysis, and automates tea sorting and grading, thereby enhancing operational efficiency, sustainability, and decision-making accuracy across tea estate and factory operations.&rdquo;
              </p>
            </div>

            {/* Approved Sub Objectives */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass p-6 rounded-2xl border border-border flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 font-bold">Sub Objective 01</span>
                    <span className="text-xs text-foreground/50 font-mono">IT22267986</span>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Labor Management & Welfare Optimization</h3>
                  <p className="text-xs text-foreground/70 leading-relaxed mb-4">
                    Develop an AI-driven workforce allocation algorithm combined with an IoT wearable prototype (ESP32-S3 + MAX30102) to monitor physiological stress indicators (Heart Rate, SpO₂) and automate grievance prioritization using NLP.
                  </p>
                </div>
                <div className="pt-3 border-t border-border/50 text-[11px] text-foreground/60 font-mono">
                  Researcher: Gunasekara L.M.N.P · Model: LightGBM (82% Acc.)
                </div>
              </div>

              <div className="glass p-6 rounded-2xl border border-border flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 font-bold">Sub Objective 02</span>
                    <span className="text-xs text-foreground/50 font-mono">IT22279620</span>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Tea-Specific Weather & Climate Intelligence</h3>
                  <p className="text-xs text-foreground/70 leading-relaxed mb-4">
                    Transform live and historical meteorological telemetry for Nuwara Eliya, Kandy, and Ratnapura into rolling 8-hour temperature forecasts and disease infection probabilities using Gradient Boosting and Random Forest regression.
                  </p>
                </div>
                <div className="pt-3 border-t border-border/50 text-[11px] text-foreground/60 font-mono">
                  Researcher: Gunasekara G.N.D · Model: GBR + Random Forest (89% Acc.)
                </div>
              </div>

              <div className="glass p-6 rounded-2xl border-2 border-emerald-500/40 bg-emerald-500/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold">Sub Objective 03 (My Component)</span>
                    <span className="text-xs text-foreground/50 font-mono">IT22209320</span>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Tea Leaf Disease Detection & Pattern Analysis</h3>
                  <p className="text-xs text-foreground/70 leading-relaxed mb-4">
                    Train and evaluate a high-accuracy YOLOv8s computer vision model on Sri Lankan tea leaf disease imagery to detect Anthracnose, Algal Leaf, Bird Eye Spot, Blister Blight, Grey Blight, and Red Rust with treatment recommendations.
                  </p>
                </div>
                <div className="pt-3 border-t border-border/50 text-[11px] text-foreground/60 font-mono">
                  Researcher: Miuranga W.A.R · Model: YOLOv8s (96.1% mAP@0.5, 94.5% F1)
                </div>
              </div>

              <div className="glass p-6 rounded-2xl border border-border flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-500 font-bold">Sub Objective 04</span>
                    <span className="text-xs text-foreground/50 font-mono">IT22282668</span>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">AI-Based Tea Sorting & Grading Automation</h3>
                  <p className="text-xs text-foreground/70 leading-relaxed mb-4">
                    Automate commercial grade categorization (BM, BOP, BP, BROKEN_TEA, DUST, FANNING_2, PF, PW_DUST) from processed tea sample images using ConvNeXtV2-Tiny, providing instant grade identification and batch analytics.
                  </p>
                </div>
                <div className="pt-3 border-t border-border/50 text-[11px] text-foreground/60 font-mono">
                  Researcher: Pathirana I.M · Model: ConvNeXtV2-Tiny (99.7% F1-score)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION E: RESEARCH METHODOLOGY
        ========================================================================= */}
        <section id="methodology" className="scroll-mt-32 mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
              <GitBranch className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold">Requirement Area E</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Research Methodology</h2>
            </div>
          </div>

          <div className="glass p-6 md:p-8 rounded-2xl border border-border mb-8 space-y-8">
            <p className="text-foreground/80 leading-relaxed">
              The project adheres to an experimental engineering research methodology combining empirical field dataset collection, machine learning model fine-tuning, hardware prototyping, client-server integration, and rigorous benchmark validation in partnership with industry stakeholders.
            </p>

            {/* Methodology Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Data Collection & Sources",
                  desc: "Primary field imagery collected in collaboration with Wewawatte Estates Co. and technical advisories from the Tea Research Institute of Sri Lanka (TRI). Secondary datasets include PhysioNet (worker neurological status) and OpenWeatherMap telemetry.",
                },
                {
                  step: "02",
                  title: "Preprocessing & Augmentation",
                  desc: "Image normalization, bounding-box annotations, geometric rotations, color jitter, and contrast adjustments for field robustness. Physiological filtering for HR/SpO2 noise reduction.",
                },
                {
                  step: "03",
                  title: "Model Development & Training",
                  desc: "Trained specialized models: YOLOv8s for disease bounding/classification, LightGBM for stress classification, GBR & Multi-output Random Forest for weather/risk, and ConvNeXtV2-Tiny for tea grading.",
                },
                {
                  step: "04",
                  title: "Client-Server System Architecture",
                  desc: "Modern React.js frontend connected via REST to a Node.js/Express orchestration backend, Python Flask/FastAPI inference microservices, Hugging Face Cloud model hosting, and MongoDB Atlas.",
                },
                {
                  step: "05",
                  title: "Model Evaluation & Benchmarking",
                  desc: "Evaluated using standard empirical metrics: Precision, Recall, F1-score, Mean Average Precision (mAP@0.5), Mean Squared Error (MSE), and validation accuracy against literature baselines.",
                },
                {
                  step: "06",
                  title: "Stakeholder Validation & Limitations",
                  desc: "Field-tested with estate managers, supervisors, and factory operators to confirm workflow practicality. Current limitations include hardware battery life and mobile network constraints in steep terrain.",
                },
              ].map((m, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-background/50 border border-border relative overflow-hidden group hover:border-primary/50 transition-colors">
                  <span className="text-3xl font-black font-mono text-primary/20 group-hover:text-primary/30 transition-colors absolute top-3 right-4">
                    {m.step}
                  </span>
                  <h4 className="font-bold text-base text-foreground mb-2 pr-6">{m.title}</h4>
                  <p className="text-xs text-foreground/70 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>

            {/* Visual Workflow Diagram */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <h4 className="font-bold text-sm uppercase tracking-wider text-primary mb-4">
                Methodology & Data Flow Architecture
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-center">
                {[
                  { phase: "Input Sources", desc: "Leaves, Weather, IoT, Tea Samples" },
                  { phase: "Ingestion & Filter", desc: "Data Validation & Cleaning" },
                  { phase: "Inference Engine", desc: "YOLOv8s, LightGBM, RF, ConvNeXt" },
                  { phase: "Decision Logic", desc: "Treatment & Risk Rule Base" },
                  { phase: "Storage & APIs", desc: "MongoDB Atlas & Express Endpoints" },
                  { phase: "Manager UI", desc: "Interactive Dashboard & Alerts" },
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-lg bg-background border border-border/80 flex flex-col justify-center">
                    <span className="text-[10px] font-mono text-primary font-bold">STEP {i + 1}</span>
                    <strong className="text-xs text-foreground mt-1 mb-0.5">{item.phase}</strong>
                    <span className="text-[11px] text-foreground/60 leading-tight">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION F: TECHNOLOGIES USED
        ========================================================================= */}
        <section id="technologies" className="scroll-mt-32 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold">Requirement Area F</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Technologies Used</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-2xl border border-border">
              <div className="flex items-center gap-2.5 mb-4 text-emerald-600 dark:text-emerald-400 font-bold">
                <Cpu className="w-5 h-5" />
                <h3>Machine Learning & AI</h3>
              </div>
              <ul className="space-y-2 text-xs text-foreground/75">
                <li><strong>YOLOv8s:</strong> Real-time tea leaf disease detection</li>
                <li><strong>ConvNeXtV2-Tiny:</strong> Deep optical tea grade classification</li>
                <li><strong>LightGBM Classifier:</strong> Worker stress and fatigue prediction</li>
                <li><strong>Random Forest:</strong> Regional disease outbreak risk modeling</li>
                <li><strong>Gradient Boosting Regressor:</strong> Micro-climate temperature prediction</li>
                <li><strong>PyTorch & Scikit-learn:</strong> Model training and validation pipelines</li>
              </ul>
            </div>

            <div className="glass p-6 rounded-2xl border border-border">
              <div className="flex items-center gap-2.5 mb-4 text-blue-600 dark:text-blue-400 font-bold">
                <Server className="w-5 h-5" />
                <h3>Backend & API Services</h3>
              </div>
              <ul className="space-y-2 text-xs text-foreground/75">
                <li><strong>Node.js:</strong> Scalable asynchronous JavaScript runtime</li>
                <li><strong>Express.js:</strong> RESTful API routing and middleware</li>
                <li><strong>Python Flask / FastAPI:</strong> ML model serving microservices</li>
                <li><strong>OpenWeatherMap API:</strong> Live regional meteorological feeds</li>
                <li><strong>Hugging Face Inference API:</strong> Cloud vision model deployment</li>
              </ul>
            </div>

            <div className="glass p-6 rounded-2xl border border-border">
              <div className="flex items-center gap-2.5 mb-4 text-amber-600 dark:text-amber-400 font-bold">
                <Database className="w-5 h-5" />
                <h3>Database & Storage</h3>
              </div>
              <ul className="space-y-2 text-xs text-foreground/75">
                <li><strong>MongoDB Atlas:</strong> Cloud NoSQL document database</li>
                <li><strong>Mongoose ODM:</strong> Schema validation and relational data modeling</li>
                <li><strong>Encrypted Payload Storage:</strong> Secure storage of worker logs</li>
                <li><strong>Dataset Warehousing:</strong> Versioned image repositories</li>
              </ul>
            </div>

            <div className="glass p-6 rounded-2xl border border-border">
              <div className="flex items-center gap-2.5 mb-4 text-purple-600 dark:text-purple-400 font-bold">
                <Layers className="w-5 h-5" />
                <h3>Frontend Development</h3>
              </div>
              <ul className="space-y-2 text-xs text-foreground/75">
                <li><strong>Next.js / React:</strong> Component-driven responsive web architecture</li>
                <li><strong>TypeScript:</strong> Static typing for strict data contract safety</li>
                <li><strong>Tailwind CSS:</strong> Flexible utility styling with glassmorphism</li>
                <li><strong>Framer Motion:</strong> Accessible micro-animations and transitions</li>
                <li><strong>Lucide Icons:</strong> Consistent semantic icon system</li>
              </ul>
            </div>

            <div className="glass p-6 rounded-2xl border border-border">
              <div className="flex items-center gap-2.5 mb-4 text-rose-600 dark:text-rose-400 font-bold">
                <Radio className="w-5 h-5" />
                <h3>IoT & Wearable Hardware</h3>
              </div>
              <ul className="space-y-2 text-xs text-foreground/75">
                <li><strong>ESP32-S3 Microcontroller:</strong> Dual-core wearable processor</li>
                <li><strong>MAX30102 Sensor Module:</strong> Photoplethysmography (PPG) HR & SpO₂</li>
                <li><strong>Bluetooth Low Energy (BLE):</strong> Power-efficient telemetry sync</li>
                <li><strong>Li-ion Power Circuit:</strong> Rechargeable battery regulation</li>
              </ul>
            </div>

            <div className="glass p-6 rounded-2xl border border-border">
              <div className="flex items-center gap-2.5 mb-4 text-cyan-600 dark:text-cyan-400 font-bold">
                <GitBranch className="w-5 h-5" />
                <h3>Development & CI/CD</h3>
              </div>
              <ul className="space-y-2 text-xs text-foreground/75">
                <li><strong>Git & GitHub:</strong> Version control, branch policies, and PR review</li>
                <li><strong>Google Colab Pro:</strong> GPU-accelerated model training</li>
                <li><strong>Roboflow:</strong> Dataset annotation, bounding boxes & augmentation</li>
                <li><strong>Vercel & Static Export:</strong> Optimized production deployment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA to Next Section */}
        <div className="glass p-6 rounded-2xl border border-primary/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-base text-foreground">Explore Project Milestones & Assessments</h4>
            <p className="text-xs text-foreground/70">Review the SLIIT IT4010 assessment schedule, marks allocation, and completion status.</p>
          </div>
          <Link
            href="/milestones"
            className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:bg-primary/90 transition-all flex items-center gap-2 shrink-0 shadow-md"
          >
            <span>View Milestones</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

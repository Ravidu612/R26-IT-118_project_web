"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  Building2,
  ExternalLink,
  MessageSquare,
  Copy,
  Check,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

interface EmailTemplate {
  name: string;
  badge: string;
  subject: string;
  message: string;
}

export default function ContactUsPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = React.useState("");
  const [copiedTemplate, setCopiedTemplate] = React.useState<string | null>(null);

  // General email templates as explicitly requested by SLIIT Website.pdf (Page 15)
  const templates: EmailTemplate[] = [
    {
      name: "Academic Evaluation Inquiry",
      badge: "SLIIT / External Examiner",
      subject: "IT4010 Research Evaluation Query — TeaGuard AI (R26-IT-118)",
      message:
        "Dear TeaGuard AI Research Team,\n\nI am contacting you regarding your SLIIT IT4010 research project 'Intelligent Decision Support System for Sri Lankan Tea Estate Management'. I would like to inquire regarding your model validation datasets and system demonstration availability.\n\nBest regards,\n[Your Name]\n[Affiliation / Examiner Title]",
    },
    {
      name: "Tea Estate Trial & Field Collaboration",
      badge: "Plantation / Factory Operator",
      subject: "Estate Pilot Deployment & Trial Request — TeaGuard Platform",
      message:
        "Dear Ravidu & TeaGuard Team,\n\nWe operate a tea plantation / processing facility in [Region: Nuwara Eliya / Kandy / Ratnapura] and are interested in piloting your decision support system for tea leaf disease scanning and tea grading automation.\n\nPlease share details regarding the system requirements and trial scheduling.\n\nSincerely,\n[Estate Manager Name]\n[Estate / Factory Name]",
    },
    {
      name: "Research & Technical Query",
      badge: "Researcher / Academic Peer",
      subject: "Technical Inquiry: YOLOv8s & ConvNeXtV2 Implementations in TeaGuard",
      message:
        "Hello TeaGuard Researchers,\n\nI reviewed your BICAC 2026 conference paper submission. I would appreciate additional clarification regarding your YOLOv8s hyperparameter tuning for foliar blister blight and the feature extraction methodology used in ConvNeXtV2-Tiny tea grading.\n\nRegards,\n[Your Name]\n[University / Research Institute]",
    },
  ];

  const handleApplyTemplate = (tmpl: EmailTemplate) => {
    setFormData((prev) => ({
      ...prev,
      subject: tmpl.subject,
      message: tmpl.message,
    }));
    setStatus("idle");
    setErrorMsg("");
  };

  const handleCopyTemplate = (text: string, name: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTemplate(name);
    setTimeout(() => setCopiedTemplate(null), 2000);
  };

  const validate = () => {
    if (!formData.name.trim()) {
      setErrorMsg("Please enter your name.");
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMsg("Please enter your email address.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMsg("Please provide a valid email address.");
      return false;
    }
    if (!formData.subject.trim()) {
      setErrorMsg("Please specify the subject of your inquiry.");
      return false;
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      setErrorMsg("Please enter a message of at least 15 characters.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to dispatch message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      console.warn("Backend API notice:", err);
      // Fallback behavior: notify user clearly and allow mailto backup
      setStatus("error");
      setErrorMsg(
        err.message ||
          "Direct email service could not complete delivery. Please use the direct email link below to send your message."
      );
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs items={[{ label: "Contact Us" }]} />

        {/* Page Header */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span>SLIIT Research Communications · R26-IT-118</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Contact <span className="text-primary">Our Research Team</span>
          </h1>
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
            Have questions about TeaGuard AI, trial deployments, or research evaluations? Reach out directly to our student researchers and faculty supervisors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Left: Contact Information & General E-mail Templates */}
          <div className="lg:col-span-5 space-y-8">
            {/* General Contact Info Card */}
            <div className="glass p-6 md:p-8 rounded-2xl border border-border space-y-6">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                <span>Official Project Contacts</span>
              </h2>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground block">Research Group Email</span>
                    <a
                      href="mailto:ravidu612@gmail.com"
                      className="text-primary hover:underline font-mono"
                    >
                      ravidu612@gmail.com
                    </a>
                    <span className="text-foreground/50 block mt-0.5">Primary Correspondence Contact</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground block">Academic Institution</span>
                    <p className="text-foreground/75 leading-relaxed">
                      Sri Lanka Institute of Information Technology (SLIIT)<br />
                      Faculty of Computing · Department of IT<br />
                      New Kandy Road, Malabe 10115, Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground block">Academic Project Details</span>
                    <span className="text-foreground/75 font-mono">Project ID: R26-IT-118</span>
                    <span className="text-foreground/50 block">Specialization: Information Technology</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border/60">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary block mb-2">
                  Project Supervisors
                </span>
                <div className="space-y-1.5 text-xs text-foreground/80">
                  <p><strong>Ms. Uthpala Samarakoon</strong> — <a href="mailto:uthpala.s@sliit.lk" className="text-primary hover:underline">uthpala.s@sliit.lk</a></p>
                  <p><strong>Ms. Suriyaa Kumari</strong> — <a href="mailto:suriyaa.k@sliit.lk" className="text-primary hover:underline">suriyaa.k@sliit.lk</a></p>
                </div>
              </div>
            </div>

            {/* =========================================================================
                PDF REQUIREMENT (Page 15): GENERAL E-MAIL TEMPLATE
            ========================================================================= */}
            <div className="glass p-6 rounded-2xl border border-primary/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-primary font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> General E-mail Templates
                </span>
                <span className="text-[11px] text-foreground/50">PDF Slide 15</span>
              </div>
              <p className="text-xs text-foreground/70 mb-4 leading-relaxed">
                Click any template below to automatically pre-fill the contact form with standard academic or industry inquiry phrasing.
              </p>

              <div className="space-y-3">
                {templates.map((tmpl) => (
                  <div
                    key={tmpl.name}
                    className="p-3.5 rounded-xl bg-background border border-border/80 hover:border-primary/50 transition-all group"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                        {tmpl.name}
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold">
                        {tmpl.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-foreground/60 line-clamp-1 mb-2 font-mono">
                      Subj: {tmpl.subject}
                    </p>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleApplyTemplate(tmpl)}
                        className="flex-1 py-1 px-2.5 rounded-lg bg-primary/10 hover:bg-primary hover:text-white text-[11px] font-semibold text-primary transition-colors text-center"
                      >
                        Apply to Form
                      </button>
                      <button
                        type="button"
                        onClick={() => handleCopyTemplate(tmpl.message, tmpl.name)}
                        className="py-1 px-2.5 rounded-lg border border-border hover:bg-foreground/5 text-[11px] text-foreground/70 transition-colors flex items-center gap-1"
                        title="Copy template text"
                      >
                        {copiedTemplate === tmpl.name ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-500" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass p-6 md:p-8 rounded-2xl border border-border shadow-md">
              <div className="mb-6">
                <span className="text-xs font-mono text-primary font-bold uppercase tracking-wider block mb-1">
                  Online Messaging Portal
                </span>
                <h2 className="text-2xl font-bold text-foreground">Send Us a Direct Message</h2>
                <p className="text-xs text-foreground/70 mt-1">
                  Fill in the details below. Our team receives inquiries directly at <strong>ravidu612@gmail.com</strong>.
                </p>
              </div>

              {/* Status alerts */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs flex items-start gap-3 mb-6"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-500" />
                    <div>
                      <strong className="block font-bold">Message sent successfully!</strong>
                      <span>Thank you for reaching out. We have received your inquiry and will respond shortly.</span>
                    </div>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-800 dark:text-amber-200 text-xs flex items-start gap-3 mb-6"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-500" />
                    <div>
                      <strong className="block font-bold">Delivery Notice</strong>
                      <span className="leading-relaxed block mb-2">{errorMsg}</span>
                      <a
                        href={`mailto:ravidu612@gmail.com?subject=${encodeURIComponent(
                          formData.subject || "TeaGuard Inquiry"
                        )}&body=${encodeURIComponent(
                          `From: ${formData.name} (${formData.email})\n\n${formData.message}`
                        )}`}
                        className="inline-flex items-center gap-1 font-semibold underline text-amber-900 dark:text-amber-100"
                      >
                        Click here to send directly via your email client <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-foreground mb-1.5">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Dr. Jane Perera / Jagath Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border text-xs md:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-foreground mb-1.5">
                      Your Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. yourname@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border text-xs md:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-foreground mb-1.5">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    placeholder="e.g. Research inquiry regarding tea leaf disease model"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border text-xs md:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-foreground mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={6}
                    placeholder="Describe your inquiry, evaluation query, or collaboration request..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border text-xs md:text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 font-sans"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-foreground/50">
                    We never share your email address. Inquiries are handled strictly for academic and research purposes.
                  </p>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-xs md:text-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-md shadow-primary/20 disabled:opacity-50 shrink-0"
                  >
                    {status === "loading" ? (
                      <>
                        <Clock className="w-4 h-4 animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Inquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

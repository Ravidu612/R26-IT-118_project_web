"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, MapPin, Mail, Phone, ExternalLink, Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import Link from "next/link";

export function FAQSection() {
  const faqs = [
    {
      question: "What is TeaGuard AI and what problem does it address?",
      answer: "TeaGuard AI is an integrated intelligent decision support system developed for Sri Lankan tea estates (SLIIT Research Project R26-IT-118). It unifies four critical operational areas: labor management & worker welfare, tea leaf disease detection, localized micro-climate intelligence, and automated optical tea grading."
    },
    {
      question: "How does the tea leaf disease detection module work?",
      answer: "Developed as the lead component by Miuranga W.A.R (IT22209320), it employs a YOLOv8s computer vision model trained on field tea leaf images. The system detects six major foliar diseases (Anthracnose, Algal Leaf, Bird Eye Spot, Blister Blight, Grey Blight, Red Rust) with 96.1% mAP@0.5 and delivers immediate agronomic treatment advice."
    },
    {
      question: "How is worker welfare and stress monitored?",
      answer: "Developed by Gunasekara L.M.N.P (IT22267986), the system pairs machine learning workforce allocation with an IoT wearable prototype (ESP32-S3 + MAX30102) measuring Heart Rate and SpO₂ to classify worker stress levels (Relaxed, Emotional, Cognitive, Physical) with 82% accuracy."
    },
    {
      question: "What climate intelligence does the platform provide?",
      answer: "Developed by Gunasekara G.N.D (IT22279620), the system uses historical meteorological data and live OpenWeatherMap API telemetries to generate 8-hour rolling temperature forecasts and Random Forest disease outbreak risk probabilities for Nuwara Eliya, Kandy, and Ratnapura."
    },
    {
      question: "How does automated tea grading replace manual inspection?",
      answer: "Developed by Pathirana I.M (IT22282668), it leverages the ConvNeXtV2-Tiny deep learning vision classifier to grade processed tea into 8 commercial categories (BM, BOP, BP, BROKEN_TEA, DUST, FANNING_2, PF, PW_DUST) with a 99.7% F1-score."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative bg-background border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span>Research Questions</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
            Key questions regarding research scope, AI model architectures, and practical estate integration.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`glass rounded-2xl overflow-hidden transition-all duration-300 border ${
                openIndex === idx ? "border-primary shadow-md" : "border-border/60 hover:border-primary/40"
              }`}
            >
              <button
                className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center bg-background/50 hover:bg-foreground/5 transition-colors cursor-pointer"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="text-sm md:text-base text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 py-4 text-xs md:text-sm text-foreground/75 border-t border-border/50 bg-background/30 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "TeaGuard Project Inquiry",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === "error") {
      setStatus("idle");
      setErrorMsg("");
    }
  };

  const validateForm = () => {
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
      setErrorMsg("Please enter a valid email address.");
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMsg("Please enter your message.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;

    setErrorMsg("");

    if (!validateForm()) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "TeaGuard Project Inquiry", message: "" });
    } catch (err: any) {
      console.warn("Contact form notice:", err);
      setStatus("error");
      setErrorMsg(
        err.message ||
          "Direct message dispatch is currently offline. Please use the direct email link below."
      );
    }
  };

  const contactDetails = [
    {
      icon: Mail,
      title: "Group Primary Email",
      value: "ravidu612@gmail.com",
      link: "mailto:ravidu612@gmail.com",
      actionText: "Send Email",
    },
    {
      icon: MapPin,
      title: "Host Academic Institution",
      value: "SLIIT Malabe Campus, Sri Lanka",
      link: "https://maps.google.com/?q=SLIIT+Malabe",
      actionText: "View on Map",
    },
  ];

  return (
    <section id="contact" className="py-24 relative bg-foreground/5 border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Contact <span className="text-primary">Research Team</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
            Have questions about our research project, trial opportunities, or academic evaluations? Reach out directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel p-8 rounded-2xl border border-border flex flex-col justify-center shadow-md"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-foreground">Send Us a Message</h3>
              <Link
                href="/contact-us"
                className="text-xs text-primary font-semibold hover:underline flex items-center gap-1"
              >
                <span>Use Templates</span>
                <Sparkles className="w-3 h-3" />
              </Link>
            </div>

            <p className="text-xs text-foreground/70 mb-6">
              Inquiries are dispatched directly to <strong>ravidu612@gmail.com</strong>.
            </p>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Message Dispatched!</h4>
                <p className="text-xs text-foreground/70 max-w-sm">
                  Thank you for reaching out. We have received your inquiry and will respond shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setFormData({ name: "", email: "", subject: "TeaGuard Project Inquiry", message: "" });
                  }}
                  className="mt-2 px-6 py-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-xs font-semibold cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="space-y-1.5">
                  <label htmlFor="home-contact-name" className="text-xs font-semibold text-foreground/80">
                    Your Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="home-contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Dr. Jane Perera"
                    disabled={status === "loading"}
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-xs disabled:opacity-50 text-foreground"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="home-contact-email" className="text-xs font-semibold text-foreground/80">
                    Your Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="home-contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    disabled={status === "loading"}
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-xs disabled:opacity-50 text-foreground"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="home-contact-message" className="text-xs font-semibold text-foreground/80">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="home-contact-message"
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    disabled={status === "loading"}
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-xs resize-none disabled:opacity-50 text-foreground"
                  />
                </div>

                {status === "error" && errorMsg && (
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-200 text-xs flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 font-semibold">
                      <AlertCircle className="w-4 h-4 shrink-0 text-amber-500" />
                      <span>{errorMsg}</span>
                    </div>
                    <a
                      href={`mailto:ravidu612@gmail.com?subject=${encodeURIComponent(
                        formData.subject
                      )}&body=${encodeURIComponent(
                        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
                      )}`}
                      className="underline text-primary font-bold pl-6"
                    >
                      Click here to email ravidu612@gmail.com directly
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-md shadow-primary/20 disabled:opacity-60 cursor-pointer text-xs"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Details Cards & Location Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              {contactDetails.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass-panel p-4 rounded-2xl border border-border/70 hover:border-primary/50 transition-all duration-300 flex items-center gap-4 group hover:shadow-md"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-foreground/50 block font-mono">
                        {item.title}
                      </span>
                      <p className="text-xs font-bold text-foreground truncate group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                    <div className="shrink-0 text-foreground/40 group-hover:text-primary transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* SLIIT Campus Location Map */}
            <div className="h-44 glass rounded-2xl overflow-hidden relative border border-border/60 group">
              <iframe
                title="SLIIT Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467112282!2d79.97075587570415!3d6.914677493084883!2m2!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSLIIT%20Malabe%20Campus!5e0!3m2!1sen!2slk!4f13.1!4m1!1e1!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "brightness(0.9) contrast(1.1)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
            </div>

            <div className="p-4 rounded-xl bg-card border border-border text-center">
              <Link
                href="/contact-us"
                className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1.5"
              >
                <span>Open Dedicated Contact Us Page with E-mail Templates</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

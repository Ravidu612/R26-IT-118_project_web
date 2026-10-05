"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, MapPin, Mail, Phone, ExternalLink } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      question: "What is TeaGuard AI?",
      answer: "TeaGuard AI is an intelligent decision support system designed specifically for Sri Lankan tea estates. It integrates four main AI modules to optimize labour management, detect tea leaf diseases, predict climate impacts, and automate tea grading."
    },
    {
      question: "How does disease detection work?",
      answer: "The disease detection module uses Convolutional Neural Networks (CNNs) trained on thousands of annotated tea leaf images. Estate workers can simply take a photo using their smartphone, and the system instantly identifies the disease and suggests treatment."
    },
    {
      question: "Which AI models are used?",
      answer: "We utilize various architectures including custom CNNs for image classification (disease and grading), Time Series forecasting models (LSTM/Prophet) for weather prediction, and predictive analytics for workforce optimization."
    },
    {
      question: "Who can use the system?",
      answer: "The system is designed for estate managers, field supervisors, factory officers, and agricultural researchers in Sri Lanka."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`glass rounded-xl overflow-hidden transition-all duration-300 border ${
                openIndex === idx ? 'border-primary shadow-md' : 'border-border/50'
              }`}
            >
              <button
                className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center bg-background/50 hover:bg-foreground/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 py-4 text-foreground/70 border-t border-border/50 bg-background/30">
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
  const contactDetails = [
    {
      icon: Mail,
      title: "Email Us",
      value: "ravidu612@gmail.com",
      link: "mailto:ravidu612@gmail.com",
      actionText: "Send an Email",
    },
    {
      icon: Phone,
      title: "Call / WhatsApp",
      value: "+94 77 052 8901",
      link: "tel:+94770528901",
      actionText: "Call Direct",
    },
    {
      icon: MapPin,
      title: "Research Location",
      value: "SLIIT Campus, New Kandy Rd, Malabe",
      link: "https://maps.google.com/?q=SLIIT+Malabe",
      actionText: "Open in Maps",
    },
  ];

  return (
    <section id="contact" className="py-24 relative bg-foreground/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
          <p className="text-lg text-foreground/70">
            Have questions about our research project or collaboration opportunities? Reach out directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Contact Details Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between space-y-4"
          >
            {contactDetails.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="glass-panel p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 flex items-center gap-5 group hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-semibold uppercase tracking-wider text-foreground/50 block mb-1">
                      {item.title}
                    </span>
                    <p className="text-lg font-bold text-foreground truncate group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                  <div className="shrink-0 text-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </a>
              );
            })}
          </motion.div>

          {/* SLIIT Campus Location Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 h-full min-h-[320px] glass rounded-2xl overflow-hidden relative border border-border/50 group"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}


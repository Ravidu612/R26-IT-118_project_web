"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Maximize2, X, Image as ImageIcon } from "lucide-react";

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const images = [
    { title: "Ceylon Tea Plantation", src: "/gallery/tea-plantation.jpg", category: "Field Location" },
    { title: "Research & Supervisor Meetings", src: "/gallery/research-meetings.jpg", category: "Academic Review" },
    { title: "Dataset Collection & Labeling", src: "/gallery/dataset-collection.jpg", category: "Data Preparation" },
    { title: "Field Visits & Estate Observations", src: "/gallery/field-visits.jpg", category: "Field Study" },
    { title: "AI Model Training & Loss Curves", src: "/gallery/model-training.jpg", category: "Model Development" },
    { title: "System Architecture & Screenshots", src: "/gallery/system-screenshots.jpg", category: "System Implementation" },
    { title: "Integrated Management Dashboard", src: "/gallery/dashboard.jpg", category: "Decision Support" },
    { title: "Validation Analytics & Graphs", src: "/gallery/graphs.jpg", category: "Evaluation" },
  ];

  return (
    <section id="gallery" className="py-24 relative bg-foreground/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span>Visual Documentation</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Research <span className="text-primary">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
          <p className="text-base md:text-lg text-foreground/70">
            A visual record of our research process — including estate field visits, dataset collection, model training, and prototype dashboard development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border border-border/60 shadow-sm hover:shadow-xl transition-all bg-card"
              onClick={() => setSelectedImage({ src: img.src, title: img.title })}
            >
              <div className="w-full h-full relative overflow-hidden bg-foreground/5 flex items-center justify-center">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                {/* Fallback displayed only if image fails */}
                <div className="hidden flex-col items-center justify-center p-4 text-center text-foreground/60">
                  <ImageIcon className="w-8 h-8 text-primary/60 mb-2" />
                  <span className="text-xs font-medium">{img.title}</span>
                </div>
              </div>

              {/* Hover overlay with title and category */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
                <span className="text-[11px] font-mono text-emerald-300 font-semibold uppercase tracking-wider mb-1">
                  {img.category}
                </span>
                <span className="text-white font-bold text-sm leading-snug flex items-center justify-between">
                  <span>{img.title}</span>
                  <Maximize2 className="w-4 h-4 text-white/80 shrink-0 ml-2" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
            aria-label="Close image viewer"
          >
            <X className="w-6 h-6" />
          </button>

          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-1 flex items-center justify-center p-2 min-h-[350px]">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>
            <div className="bg-zinc-900/90 px-6 py-4 border-t border-white/10 flex items-center justify-between">
              <h4 className="text-white font-semibold text-base">{selectedImage.title}</h4>
              <span className="text-xs text-white/50 font-mono">TeaGuard Research Documentation</span>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

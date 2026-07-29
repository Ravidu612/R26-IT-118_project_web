"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Maximize2, X } from "lucide-react";

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { title: "Tea plantation", src: "/gallery/tea-plantation.jpg" },
    { title: "Research meetings", src: "/gallery/research-meetings.jpg" },
    { title: "Dataset collection", src: "/gallery/dataset-collection.jpg" },
    { title: "Field visits", src: "/gallery/field-visits.jpg" },
    { title: "Model training", src: "/gallery/model-training.jpg" },
    { title: "System screenshots", src: "/gallery/system-screenshots.jpg" },
    { title: "Dashboard", src: "/gallery/dashboard.jpg" },
    { title: "Graphs", src: "/gallery/graphs.jpg" }
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Project <span className="text-primary">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
          <p className="text-lg text-foreground/70">
            A visual journey through our research, from field visits to final system implementation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border border-border/50 shadow-sm hover:shadow-xl transition-all"
              onClick={() => setSelectedImage(img.src)}
            >
              {/* Fallback image style or actual image if provided */}
              <div className="w-full h-full bg-gradient-to-br from-background to-primary/10 flex items-center justify-center text-center relative">
                {/* 
                  When you upload actual images to the public/gallery folder, 
                  uncomment the <img> tag below and remove the placeholder span.
                */}
                <img src={img.src} alt={img.title} className="w-full h-full object-cover absolute inset-0 z-0" onError={(e) => {
                  // Fallback if image not found
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.nextElementSibling) {
                    (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                  }
                }} />
                <span className="text-foreground/40 font-medium z-10 relative px-6 hidden" style={{ display: 'block' }}>{img.title} Placeholder</span>
              </div>
              
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center backdrop-blur-sm">
                <Maximize2 className="w-8 h-8 text-white mb-2" />
                <span className="text-white font-semibold">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 glass rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-5xl w-full aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl flex items-center justify-center border border-white/10"
          >
            {/* 
                Similarly, uncomment this image tag for the fullscreen view when you have the images 
            */}
            <img src={selectedImage} alt="Fullscreen view" className="w-full h-full object-contain absolute inset-0 z-0" onError={(e) => {
              e.currentTarget.style.display = 'none';
              if (e.currentTarget.nextElementSibling) {
                (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
              }
            }} />
            <span className="text-white/50 text-2xl font-medium z-10 relative hidden" style={{ display: 'block' }}>Image Placeholder Fullscreen</span>
          </motion.div>
        </div>
      )}
    </section>
  );
}

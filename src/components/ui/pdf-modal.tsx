"use client";

import * as React from "react";
import { X, Download, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string | null;
  title: string;
}

export function PdfModal({ isOpen, onClose, pdfUrl, title }: PdfModalProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !pdfUrl) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative flex flex-col w-full max-w-5xl h-[90vh] bg-background border border-border rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-card">
            <div className="truncate pr-4">
              <span className="text-xs font-mono text-primary uppercase tracking-wider block">Document Viewer</span>
              <h3 className="font-semibold text-base sm:text-lg text-foreground truncate">{title}</h3>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={pdfUrl}
                download
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download</span>
              </a>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-border bg-background hover:bg-foreground/5 text-foreground transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Open New Tab</span>
              </a>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-foreground/70 hover:text-foreground hover:bg-foreground/10 transition-colors"
                aria-label="Close document viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* PDF Frame */}
          <div className="flex-1 w-full h-full bg-zinc-900/10 dark:bg-zinc-950">
            <iframe
              src={`${pdfUrl}#toolbar=1&navpanes=0`}
              title={title}
              className="w-full h-full border-0"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

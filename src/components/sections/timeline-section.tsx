"use client";

import { motion } from "framer-motion";

export function TimelineSection() {
  const timeline = [
    { title: "Proposal", status: "completed" },
    { title: "Research", status: "completed" },
    { title: "Dataset Collection", status: "completed" },
    { title: "Model Development", status: "completed" },
    { title: "Frontend", status: "completed" },
    { title: "Backend", status: "completed" },
    { title: "Integration", status: "completed" },
    { title: "Testing", status: "completed" },
    { title: "Presentation", status: "pending" },
    { title: "Final Evaluation", status: "pending" },

  ];

  return (
    <section className="py-24 relative bg-foreground/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Project <span className="text-primary">Timeline</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary/20 ml-3 md:ml-1/2">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="mb-8 relative pl-8 md:pl-0"
              >
                <div className={`
                  md:w-1/2 flex flex-col 
                  ${idx % 2 === 0 ? "md:items-end md:pr-12 md:text-right" : "md:ml-auto md:pl-12 md:text-left"}
                `}>
                  <div className="absolute top-1/2 -translate-y-1/2 left-[-5px] md:left-1/2 md:-ml-[5px] w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

                  <div className={`glass p-5 rounded-xl shadow-sm inline-block min-w-[200px] border-l-4
                    ${item.status === 'completed' ? 'border-l-emerald-500' :
                      item.status === 'in-progress' ? 'border-l-amber-500' : 'border-l-primary/20'}
                  `}>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full uppercase tracking-wider font-semibold
                      ${item.status === 'completed' ? 'bg-emerald-500/10 text-emerald-500' :
                        item.status === 'in-progress' ? 'bg-amber-500/10 text-amber-500' : 'bg-foreground/5 text-foreground/40'}
                    `}>
                      {item.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

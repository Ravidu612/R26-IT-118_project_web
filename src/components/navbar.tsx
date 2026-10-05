"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Research", href: "/#research" },
  { name: "Objectives", href: "/#objectives" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Documents", href: "/#documents" },
  { name: "Team", href: "/#team" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 h-16 transition-colors duration-300 ${scrolled || open ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label="TeaGuard AI home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <Leaf className="h-4 w-4" strokeWidth={1.75} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            TeaGuard <span className="text-accent">AI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <Link key={l.name} href={l.href} className="whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-medium text-foreground/75 transition-colors hover:bg-primary/10 hover:text-foreground">
              {l.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className="grid h-9 w-9 place-items-center rounded-full transition-colors hover:bg-primary/10 active:scale-[0.96]" aria-label="Toggle theme">
            <Sun className="h-[18px] w-[18px] dark:hidden" strokeWidth={1.75} />
            <Moon className="hidden h-[18px] w-[18px] dark:block" strokeWidth={1.75} />
          </button>
          <button className="grid h-9 w-9 place-items-center rounded-full transition-colors hover:bg-primary/10 lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="absolute inset-x-0 top-full border-b border-border bg-background px-4 py-3 lg:hidden" aria-label="Mobile">
            {navLinks.map((l) => (
              <Link key={l.name} href={l.href} onClick={() => setOpen(false)} className="block border-b border-border py-3 text-base font-medium last:border-0">
                {l.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

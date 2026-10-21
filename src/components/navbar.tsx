"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Leaf, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Official navigation items matching SLIIT Website.pdf (Page 8)
export const primaryNavItems = [
  { name: "Home", href: "/" },
  { name: "Domain", href: "/domain" },
  { name: "Milestones", href: "/milestones" },
  { name: "Documents", href: "/documents" },
  { name: "Slides of Past Presentations", shortName: "Presentations", href: "/presentations" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-16 transition-all duration-300 ${
        scrolled || open
          ? "bg-background/92 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/70 backdrop-blur-sm border-b border-border/40"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
          aria-label="TeaGuard AI Research Project Home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-emerald-600 text-white shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
            <Leaf className="h-4 w-4" strokeWidth={2} />
          </span>
          <div className="flex flex-col">
            <span className="font-display text-base sm:text-lg font-bold tracking-tight text-foreground leading-tight flex items-center gap-1.5">
              TeaGuard <span className="text-primary font-extrabold">AI</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-primary/10 text-primary hidden sm:inline-block border border-primary/20">
                R26-IT-118
              </span>
            </span>
            <span className="text-[10px] text-foreground/55 font-medium leading-none hidden md:block">
              SLIIT Research Project
            </span>
          </div>
        </Link>

        {/* Desktop Primary Navigation */}
        <nav className="hidden items-center gap-1 xl:gap-1.5 lg:flex" aria-label="Main Navigation">
          {primaryNavItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                  active
                    ? "text-primary bg-primary/10 font-bold shadow-xs"
                    : "text-foreground/75 hover:bg-foreground/5 hover:text-foreground"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.shortName || item.name}
                {active && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-2 right-2 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Controls: Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <Link
            href="/documents/research-paper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg bg-primary/10 text-primary border border-primary/25 hover:bg-primary hover:text-white transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Research Paper</span>
          </Link>

          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="grid h-9 w-9 place-items-center rounded-xl border border-border/60 bg-background/60 transition-colors hover:bg-foreground/5 active:scale-[0.96] text-foreground"
            aria-label="Toggle light or dark theme"
          >
            <Sun className="h-4 w-4 dark:hidden text-amber-500" strokeWidth={2} />
            <Moon className="hidden h-4 w-4 dark:block text-emerald-400" strokeWidth={2} />
          </button>

          <button
            className="grid h-9 w-9 place-items-center rounded-xl border border-border/60 bg-background/60 transition-colors hover:bg-foreground/5 lg:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-border bg-background/98 backdrop-blur-xl px-4 py-3 lg:hidden shadow-xl"
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col space-y-1">
              {primaryNavItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? "bg-primary/15 text-primary font-bold"
                        : "text-foreground/80 hover:bg-foreground/5 hover:text-foreground"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    <span>{item.name}</span>
                    {active && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                  </Link>
                );
              })}
            </div>

            <div className="mt-3 pt-3 border-t border-border/60 flex items-center justify-between text-xs text-foreground/60">
              <span className="font-mono">Project ID: R26-IT-118</span>
              <span className="text-primary font-medium">SLIIT IT4010</span>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

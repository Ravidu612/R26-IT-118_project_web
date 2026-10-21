"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 inline-flex items-center gap-1.5 text-xs md:text-sm text-foreground/60 font-medium">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
      >
        <Home className="h-3.5 w-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="inline-flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-foreground/40 shrink-0" />
            {isLast || !item.href ? (
              <span className="text-foreground font-semibold" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}

"use client";

import { useEffect, useState } from "react";

import type { Heading } from "@/lib/content";
import { cn } from "@/lib/utils";

export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 3) return null;

  return (
    <nav className="text-sm">
      <p className="text-muted-foreground mb-3 text-xs font-semibold tracking-wide uppercase">
        On this page
      </p>
      <ul className="space-y-1.5 border-l">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={cn(
                "-ml-px block border-l py-0.5 leading-snug transition-colors",
                heading.depth === 3 ? "pl-6" : "pl-3",
                activeId === heading.id
                  ? "border-foreground text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground border-transparent",
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

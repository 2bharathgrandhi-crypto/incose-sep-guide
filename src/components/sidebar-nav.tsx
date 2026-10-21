"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check } from "lucide-react";

import type { NavPart } from "@/components/nav-data";
import { useProgress } from "@/lib/use-progress";
import { cn } from "@/lib/utils";

export function SidebarNav({ parts, onNavigate }: { parts: NavPart[]; onNavigate?: () => void }) {
  const pathname = usePathname();
  const { isComplete, hydrated } = useProgress();

  return (
    <nav className="flex flex-col gap-6 pb-12 text-sm">
      {parts.map((part) => (
        <div key={part.name}>
          <p className="text-muted-foreground mb-2 px-3 text-xs font-semibold tracking-wide uppercase">
            {part.name}
          </p>
          <ul className="space-y-0.5">
            {part.chapters.map((chapter) => {
              const href = `/guide/${chapter.slug}`;
              const active = pathname === href;
              const done = hydrated && isComplete(chapter.slug);

              return (
                <li key={chapter.slug}>
                  <Link
                    href={href}
                    onClick={onNavigate}
                    className={cn(
                      "group flex items-start gap-2 rounded-md px-3 py-1.5 leading-snug transition-colors",
                      active
                        ? "bg-accent text-accent-foreground font-medium"
                        : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
                    )}
                  >
                    <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center">
                      {done ? (
                        <Check className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <span
                          className={cn(
                            "size-1.5 rounded-full",
                            active ? "bg-foreground" : "bg-border group-hover:bg-muted-foreground",
                          )}
                        />
                      )}
                    </span>
                    <span>{chapter.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

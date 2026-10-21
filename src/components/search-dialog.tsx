"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

import type { NavPart } from "@/components/nav-data";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

type Hit = {
  href: string;
  title: string;
  context: string;
};

function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/`/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function SearchDialog({ parts }: { parts: NavPart[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((value) => !value);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const index = useMemo(() => {
    const entries: (Hit & { haystack: string })[] = [];

    for (const part of parts) {
      for (const chapter of part.chapters) {
        entries.push({
          href: `/guide/${chapter.slug}`,
          title: chapter.title,
          context: part.name,
          haystack: `${chapter.title} ${part.name} ${chapter.summary}`.toLowerCase(),
        });

        for (const heading of chapter.headings) {
          entries.push({
            href: `/guide/${chapter.slug}#${slugifyHeading(heading)}`,
            title: heading,
            context: chapter.title,
            haystack: `${heading} ${chapter.title}`.toLowerCase(),
          });
        }
      }
    }

    return entries;
  }, [parts]);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return [];
    return index.filter((entry) => entry.haystack.includes(needle)).slice(0, 24);
  }, [index, query]);

  function go(href: string) {
    setOpen(false);
    setQuery("");
    router.push(href);
  }

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className="text-muted-foreground w-9 justify-center px-0 sm:w-56 sm:justify-start sm:px-3"
      >
        <Search className="size-4" />
        <span className="hidden sm:inline">Search the guide…</span>
        <kbd className="bg-muted text-muted-foreground ml-auto hidden rounded px-1.5 py-0.5 font-mono text-[10px] sm:inline">
          ⌘K
        </kbd>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="top-24 max-w-xl translate-y-0 gap-0 p-0" showCloseButton={false}>
          <DialogTitle className="sr-only">Search the guide</DialogTitle>
          <div className="border-b p-3">
            <Input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search chapters and sections…"
              className="border-0 shadow-none focus-visible:ring-0"
            />
          </div>
          <div className="max-h-80 overflow-y-auto p-2">
            {query && results.length === 0 ? (
              <p className="text-muted-foreground p-4 text-sm">
                No matches for “{query}”. Try a process name, an acronym, or a concept.
              </p>
            ) : null}
            {!query ? (
              <p className="text-muted-foreground p-4 text-sm">
                Try “validation”, “MOE”, “configuration management”, or “SysML”.
              </p>
            ) : null}
            <ul>
              {results.map((hit) => (
                <li key={hit.href + hit.title}>
                  <button
                    type="button"
                    onClick={() => go(hit.href)}
                    className="hover:bg-accent w-full rounded-md px-3 py-2 text-left"
                  >
                    <span className="block text-sm">{hit.title}</span>
                    <span className="text-muted-foreground block text-xs">{hit.context}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

"use client";

import { Check, Circle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useProgress } from "@/lib/use-progress";

export function ChapterComplete({ slug }: { slug: string }) {
  const { isComplete, toggle, hydrated } = useProgress();
  const done = hydrated && isComplete(slug);

  return (
    <Button variant={done ? "secondary" : "outline"} size="sm" onClick={() => toggle(slug)}>
      {done ? (
        <>
          <Check className="size-4 text-emerald-600 dark:text-emerald-400" />
          Completed
        </>
      ) : (
        <>
          <Circle className="size-4" />
          Mark as complete
        </>
      )}
    </Button>
  );
}

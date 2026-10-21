"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useProgress } from "@/lib/use-progress";

export function HomeProgress({
  chapters,
}: {
  chapters: { slug: string; title: string }[];
}) {
  const { completed, hydrated, reset } = useProgress();

  const done = hydrated ? completed.length : 0;
  const percentage = Math.round((done / chapters.length) * 100);
  const nextChapter = chapters.find((chapter) => !completed.includes(chapter.slug)) ?? chapters[0];

  return (
    <div className="rounded-xl border p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-medium">Your progress</p>
        <p className="text-muted-foreground text-sm tabular-nums">
          {done} of {chapters.length} chapters
        </p>
      </div>

      <Progress value={percentage} className="mt-4" />

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Button asChild>
          <Link href={`/guide/${nextChapter.slug}`}>
            {done === 0 ? "Start reading" : "Continue"}
          </Link>
        </Button>
        <span className="text-muted-foreground text-sm">
          {done === 0 ? "Chapter 1 — Start Here" : nextChapter.title}
        </span>
        {done > 0 ? (
          <Button variant="ghost" size="sm" className="ml-auto" onClick={reset}>
            Reset
          </Button>
        ) : null}
      </div>
    </div>
  );
}

import Link from "next/link";
import { Clock } from "lucide-react";

import { getParts } from "@/lib/content";

export const metadata = {
  title: "Contents",
  description: "Every chapter of the guide, in order.",
};

export default function ContentsPage() {
  const parts = getParts();

  return (
    <div className="max-w-3xl py-8">
      <h1 className="text-3xl font-semibold tracking-tight">Contents</h1>
      <p className="text-muted-foreground mt-3 text-lg">
        Twenty-one chapters, from what the certification is to what to do in your first ninety days
        on the job.
      </p>

      <div className="mt-10 space-y-10">
        {parts.map((part) => (
          <section key={part.name}>
            <h2 className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
              {part.name}
            </h2>
            <ul className="mt-3 divide-y border-y">
              {part.chapters.map((chapter) => (
                <li key={chapter.slug}>
                  <Link
                    href={`/guide/${chapter.slug}`}
                    className="hover:bg-accent/40 -mx-3 block rounded-md px-3 py-4 transition-colors"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-medium">{chapter.title}</span>
                      <span className="text-muted-foreground flex shrink-0 items-center gap-1 text-xs">
                        <Clock className="size-3" />
                        {chapter.minutes} min
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-1 text-sm text-pretty">
                      {chapter.summary}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

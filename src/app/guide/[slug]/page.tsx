import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";

import { ChapterComplete } from "@/components/chapter-complete";
import { Markdown } from "@/components/markdown";
import { TableOfContents } from "@/components/table-of-contents";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getChapter, getChapters, getNeighbours } from "@/lib/content";
import { getQuestionsForChapter } from "@/lib/questions";

export const dynamicParams = false;

export function generateStaticParams() {
  return getChapters().map((chapter) => ({ slug: chapter.slug }));
}

export async function generateMetadata({ params }: PageProps<"/guide/[slug]">) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) return {};
  return { title: chapter.title, description: chapter.summary };
}

export default async function ChapterPage({ params }: PageProps<"/guide/[slug]">) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) notFound();

  const { previous, next } = getNeighbours(slug);
  const questionCount = getQuestionsForChapter(slug).length;

  return (
    <div className="flex gap-10 py-8">
      <article className="min-w-0 max-w-3xl flex-1">
        <header className="mb-8">
          <Badge variant="secondary" className="mb-3">
            {chapter.part}
          </Badge>
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {chapter.title}
          </h1>
          <p className="text-muted-foreground mt-3 text-lg text-pretty">{chapter.summary}</p>
          <div className="text-muted-foreground mt-5 flex flex-wrap items-center gap-4 text-sm">
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" />
              {chapter.minutes} min read
            </span>
            <ChapterComplete slug={chapter.slug} />
          </div>
        </header>

        <Markdown>{chapter.body}</Markdown>

        {questionCount > 0 ? (
          <div className="bg-muted/40 mt-12 rounded-lg border p-5">
            <p className="font-medium">Drill this chapter</p>
            <p className="text-muted-foreground mt-1 mb-4 text-sm">
              {questionCount} practice question{questionCount === 1 ? "" : "s"} are tagged to this
              chapter. Answering them now is worth more than rereading.
            </p>
            <Button asChild size="sm">
              <Link href={`/practice?topic=${chapter.slug}`}>Practise these questions</Link>
            </Button>
          </div>
        ) : null}

        <nav className="mt-12 flex flex-col gap-3 border-t pt-8 sm:flex-row sm:justify-between">
          {previous ? (
            <Button asChild variant="outline" className="h-auto justify-start py-3 text-left">
              <Link href={`/guide/${previous.slug}`}>
                <ArrowLeft className="size-4 shrink-0" />
                <span className="flex flex-col items-start">
                  <span className="text-muted-foreground text-xs">Previous</span>
                  <span className="text-wrap">{previous.title}</span>
                </span>
              </Link>
            </Button>
          ) : (
            <span />
          )}
          {next ? (
            <Button asChild variant="outline" className="h-auto justify-end py-3 text-right">
              <Link href={`/guide/${next.slug}`}>
                <span className="flex flex-col items-end">
                  <span className="text-muted-foreground text-xs">Next</span>
                  <span className="text-wrap">{next.title}</span>
                </span>
                <ArrowRight className="size-4 shrink-0" />
              </Link>
            </Button>
          ) : null}
        </nav>
      </article>

      <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-56 shrink-0 overflow-y-auto py-8 xl:block">
        <TableOfContents headings={chapter.headings} />
      </aside>
    </div>
  );
}

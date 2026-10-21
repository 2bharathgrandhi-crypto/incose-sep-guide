import Link from "next/link";
import { ArrowRight, BookOpen, Clock, ListChecks, Target } from "lucide-react";

import { HomeProgress } from "@/components/home-progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getChapters, getParts } from "@/lib/content";
import { getQuestions } from "@/lib/questions";

export default function HomePage() {
  const chapters = getChapters();
  const parts = getParts();
  const questions = getQuestions();
  const totalMinutes = chapters.reduce((sum, chapter) => sum + chapter.minutes, 0);

  return (
    <div className="mx-auto max-w-[1500px] px-4">
      <section className="mx-auto max-w-3xl py-16 sm:py-24">
        <Badge variant="secondary" className="mb-5">
          ASEP · CSEP · ESEP
        </Badge>
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Become a systems engineer, and pass the INCOSE SEP exam
        </h1>
        <p className="text-muted-foreground mt-5 text-lg text-pretty sm:text-xl">
          A complete, plain-language guide to the systems engineering body of knowledge — written
          for junior engineers and people moving into the discipline. It covers the certification
          syllabus topic by topic, and it also tells you what to actually do on Monday morning.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={`/guide/${chapters[0].slug}`}>
              Start reading
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/practice">Take a practice set</Link>
          </Button>
        </div>

        <dl className="text-muted-foreground mt-10 grid grid-cols-2 gap-6 text-sm sm:grid-cols-4">
          <div>
            <dt className="flex items-center gap-1.5">
              <BookOpen className="size-4" />
              Chapters
            </dt>
            <dd className="text-foreground mt-1 text-2xl font-semibold">{chapters.length}</dd>
          </div>
          <div>
            <dt className="flex items-center gap-1.5">
              <ListChecks className="size-4" />
              Questions
            </dt>
            <dd className="text-foreground mt-1 text-2xl font-semibold">{questions.length}</dd>
          </div>
          <div>
            <dt className="flex items-center gap-1.5">
              <Target className="size-4" />
              Processes covered
            </dt>
            <dd className="text-foreground mt-1 text-2xl font-semibold">30</dd>
          </div>
          <div>
            <dt className="flex items-center gap-1.5">
              <Clock className="size-4" />
              Reading time
            </dt>
            <dd className="text-foreground mt-1 text-2xl font-semibold">
              {Math.round(totalMinutes / 60)} h
            </dd>
          </div>
        </dl>

        <div className="mt-12">
          <HomeProgress
            chapters={chapters.map((chapter) => ({ slug: chapter.slug, title: chapter.title }))}
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl border-t py-14">
        <h2 className="text-2xl font-semibold tracking-tight">Who this is for</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {[
            {
              title: "You were just made a systems engineer",
              body: "Start with the foundations, then jump to the on-the-job playbook. It tells you what to read, who to talk to, and which unowned gap to fill first.",
            },
            {
              title: "You have an exam date",
              body: "Follow the eight-week plan. The confusable-pairs table and the structural lists are where most of the marks are.",
            },
            {
              title: "You are a specialist going horizontal",
              body: "You already know depth. This gives you the breadth — architecture, interfaces, verification, risk, and the vocabulary to work across disciplines.",
            },
            {
              title: "You manage engineers",
              body: "Read Parts II and IV. You will recognise every failure pattern, and you will have names for them.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border p-5">
              <p className="font-medium">{item.title}</p>
              <p className="text-muted-foreground mt-2 text-sm text-pretty">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl border-t py-14">
        <h2 className="text-2xl font-semibold tracking-tight">What is inside</h2>
        <div className="mt-8 space-y-9">
          {parts.map((part) => (
            <div key={part.name}>
              <h3 className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                {part.name}
              </h3>
              <ul className="mt-3 divide-y border-y">
                {part.chapters.map((chapter) => (
                  <li key={chapter.slug}>
                    <Link
                      href={`/guide/${chapter.slug}`}
                      className="hover:bg-accent/40 -mx-3 block rounded-md px-3 py-3.5 transition-colors"
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="font-medium">{chapter.title}</span>
                        <span className="text-muted-foreground shrink-0 text-xs">
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
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl border-t py-14">
        <div className="bg-muted/40 rounded-xl border p-6">
          <h2 className="text-lg font-semibold">Before you plan your study</h2>
          <p className="text-muted-foreground mt-2 text-sm text-pretty">
            The exam is drawn from the INCOSE Systems Engineering Handbook, and INCOSE periodically
            changes which edition applies. Confirm the current edition and the eligibility, fee, and
            exam rules in the official Certification Program Guide before you buy anything or book a
            date. Everything administrative in this guide is orientation, not authority.
          </p>
          <Button asChild variant="outline" size="sm" className="mt-4">
            <Link href="/guide/02-certification-landscape">
              Read the certification chapter
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

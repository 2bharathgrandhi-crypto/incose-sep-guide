"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, RotateCcw, X } from "lucide-react";

import type { Question } from "@/lib/questions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

type ChapterMeta = { slug: string; title: string; count: number };

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function Quiz({
  questions,
  chapters,
  initialTopic = "all",
}: {
  questions: Question[];
  chapters: ChapterMeta[];
  initialTopic?: string;
}) {
  const [stage, setStage] = useState<"setup" | "running" | "results">("setup");
  const [scope, setScope] = useState<string>(initialTopic);
  const [length, setLength] = useState<number>(20);
  const [instantFeedback, setInstantFeedback] = useState(true);

  const [session, setSession] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const chapterTitle = useMemo(
    () => Object.fromEntries(chapters.map((chapter) => [chapter.slug, chapter.title])),
    [chapters],
  );

  const available = useMemo(
    () => (scope === "all" ? questions : questions.filter((question) => question.chapter === scope)),
    [questions, scope],
  );

  function start() {
    const picked = shuffle(available).slice(0, Math.min(length, available.length));
    setSession(picked);
    setAnswers({});
    setRevealed({});
    setIndex(0);
    setStage("running");
  }

  function choose(question: Question, option: number) {
    if (revealed[question.id]) return;
    setAnswers((current) => ({ ...current, [question.id]: option }));
    if (instantFeedback) setRevealed((current) => ({ ...current, [question.id]: true }));
  }

  const correctCount = session.filter((question) => answers[question.id] === question.answer).length;

  if (stage === "setup") {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Build a question set</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Topic</Label>
              <select
                value={scope}
                onChange={(event) => setScope(event.target.value)}
                className="border-input bg-background focus-visible:ring-ring/50 w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-[3px] focus-visible:outline-none"
              >
                <option value="all">All topics ({questions.length} questions)</option>
                {chapters
                  .filter((chapter) => chapter.count > 0)
                  .map((chapter) => (
                    <option key={chapter.slug} value={chapter.slug}>
                      {chapter.title} ({chapter.count})
                    </option>
                  ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label>Number of questions</Label>
              <div className="flex flex-wrap gap-2">
                {[10, 20, 40, available.length].map((option, position) => (
                  <Button
                    key={`${option}-${position}`}
                    type="button"
                    variant={length === option ? "default" : "outline"}
                    size="sm"
                    onClick={() => setLength(option)}
                    disabled={option > available.length && position !== 3}
                  >
                    {position === 3 ? `All (${available.length})` : option}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-start justify-between gap-6 rounded-lg border p-4">
              <div className="space-y-1">
                <Label htmlFor="feedback">Show the answer immediately</Label>
                <p className="text-muted-foreground text-sm">
                  On for study drilling. Turn it off to simulate exam conditions and see your
                  results only at the end.
                </p>
              </div>
              <Switch id="feedback" checked={instantFeedback} onCheckedChange={setInstantFeedback} />
            </div>

            <Button onClick={start} disabled={available.length === 0} size="lg">
              Start
            </Button>
          </CardContent>
        </Card>

        <p className="text-muted-foreground text-sm">
          These questions are written to mirror the style of the INCOSE SEP knowledge exam —
          definition recall, process placement, and discrimination between similar terms. They are
          study material, not real exam questions.
        </p>
      </div>
    );
  }

  if (stage === "results") {
    const percentage = Math.round((correctCount / session.length) * 100);
    const wrong = session.filter((question) => answers[question.id] !== question.answer);

    const byChapter = new Map<string, { total: number; correct: number }>();
    for (const question of session) {
      const entry = byChapter.get(question.chapter) ?? { total: 0, correct: 0 };
      entry.total += 1;
      if (answers[question.id] === question.answer) entry.correct += 1;
      byChapter.set(question.chapter, entry);
    }

    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>
              {correctCount} of {session.length} correct — {percentage}%
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Progress value={percentage} />

            <div>
              <p className="mb-3 text-sm font-medium">Breakdown by topic</p>
              <ul className="space-y-2 text-sm">
                {[...byChapter.entries()]
                  .sort((a, b) => a[1].correct / a[1].total - b[1].correct / b[1].total)
                  .map(([slug, stats]) => (
                    <li key={slug} className="flex items-center justify-between gap-4">
                      <Link href={`/guide/${slug}`} className="hover:underline">
                        {chapterTitle[slug] ?? slug}
                      </Link>
                      <span
                        className={cn(
                          "tabular-nums",
                          stats.correct === stats.total
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-muted-foreground",
                        )}
                      >
                        {stats.correct}/{stats.total}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button onClick={() => setStage("setup")}>
                <RotateCcw className="size-4" />
                New set
              </Button>
              {wrong.length > 0 ? (
                <Button
                  variant="outline"
                  onClick={() => {
                    setSession(shuffle(wrong));
                    setAnswers({});
                    setRevealed({});
                    setIndex(0);
                    setStage("running");
                  }}
                >
                  Retry the {wrong.length} I got wrong
                </Button>
              ) : null}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Review</h2>
          {session.map((question) => {
            const given = answers[question.id];
            const right = given === question.answer;

            return (
              <Card key={question.id} className={cn(!right && "border-destructive/40")}>
                <CardContent className="space-y-3 pt-6">
                  <div className="flex items-start gap-2">
                    {right ? (
                      <Check className="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <X className="text-destructive mt-0.5 size-4 shrink-0" />
                    )}
                    <p className="font-medium">{question.question}</p>
                  </div>
                  <ul className="space-y-1 text-sm">
                    {question.options.map((option, position) => (
                      <li
                        key={position}
                        className={cn(
                          "rounded px-2 py-1",
                          position === question.answer &&
                            "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
                          position === given &&
                            position !== question.answer &&
                            "bg-destructive/10 text-destructive",
                        )}
                      >
                        {option}
                        {position === given && position !== question.answer ? " — your answer" : ""}
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground text-sm">{question.explanation}</p>
                  <Link
                    href={`/guide/${question.chapter}`}
                    className="text-sm underline underline-offset-4"
                  >
                    Read {chapterTitle[question.chapter] ?? "the chapter"}
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }

  const question = session[index];
  const given = answers[question.id];
  const showAnswer = Boolean(revealed[question.id]);
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="text-muted-foreground flex items-center justify-between text-sm">
          <span>
            Question {index + 1} of {session.length}
          </span>
          <span>{answeredCount} answered</span>
        </div>
        <Progress value={((index + 1) / session.length) * 100} />
      </div>

      <Card>
        <CardContent className="space-y-5 pt-6">
          <Badge variant="secondary">{chapterTitle[question.chapter] ?? question.chapter}</Badge>
          <p className="text-lg font-medium">{question.question}</p>

          <ul className="space-y-2">
            {question.options.map((option, position) => {
              const selected = given === position;
              const isCorrect = position === question.answer;

              return (
                <li key={position}>
                  <button
                    type="button"
                    onClick={() => choose(question, position)}
                    className={cn(
                      "w-full rounded-lg border px-4 py-3 text-left text-sm transition-colors",
                      !showAnswer && selected && "border-foreground bg-accent",
                      !showAnswer && !selected && "hover:bg-accent/50",
                      showAnswer && isCorrect && "border-emerald-500/60 bg-emerald-500/10",
                      showAnswer && selected && !isCorrect && "border-destructive/60 bg-destructive/10",
                    )}
                  >
                    <span className="text-muted-foreground mr-2 font-mono text-xs">
                      {String.fromCharCode(65 + position)}
                    </span>
                    {option}
                  </button>
                </li>
              );
            })}
          </ul>

          {showAnswer ? (
            <div className="bg-muted/50 rounded-lg border p-4 text-sm">
              <p className="mb-1 font-medium">
                {given === question.answer ? "Correct." : "Not quite."}
              </p>
              <p className="text-muted-foreground">{question.explanation}</p>
            </div>
          ) : null}
        </CardContent>
      </Card>

      <div className="flex items-center justify-between gap-3">
        <Button
          variant="outline"
          onClick={() => setIndex((value) => Math.max(0, value - 1))}
          disabled={index === 0}
        >
          <ArrowLeft className="size-4" />
          Previous
        </Button>

        {index === session.length - 1 ? (
          <Button onClick={() => setStage("results")}>See results</Button>
        ) : (
          <Button onClick={() => setIndex((value) => Math.min(session.length - 1, value + 1))}>
            Next
            <ArrowRight className="size-4" />
          </Button>
        )}
      </div>
    </div>
  );
}

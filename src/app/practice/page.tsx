import { Suspense } from "react";

import { Quiz } from "@/components/quiz";
import { PracticeQuiz } from "@/components/practice-quiz";
import { getChapters } from "@/lib/content";
import { getQuestions } from "@/lib/questions";

export const metadata = {
  title: "Practice exam",
  description:
    "Drill the INCOSE SEP knowledge exam by chapter or sit a mixed set, with explanations for every answer.",
};

export default function PracticePage() {
  const questions = getQuestions();
  const chapters = getChapters().map((chapter) => ({
    slug: chapter.slug,
    title: chapter.title,
    count: questions.filter((question) => question.chapter === chapter.slug).length,
  }));

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Practice exam</h1>
      <p className="text-muted-foreground mt-3 text-lg text-pretty">
        Retrieval beats rereading. Drill one chapter right after you read it, then mix topics — the
        real exam tests whether you can tell similar concepts apart.
      </p>

      <div className="mt-8">
        {/* Static export: read ?topic= on the client instead of via searchParams. */}
        <Suspense fallback={<Quiz questions={questions} chapters={chapters} initialTopic="all" />}>
          <PracticeQuiz questions={questions} chapters={chapters} />
        </Suspense>
      </div>
    </div>
  );
}

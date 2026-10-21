import fs from "node:fs";
import path from "node:path";

export type Question = {
  id: string;
  chapter: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

let cache: Question[] | null = null;

export function getQuestions(): Question[] {
  if (!cache) {
    const raw = fs.readFileSync(path.join(process.cwd(), "content", "questions.json"), "utf8");
    cache = JSON.parse(raw) as Question[];
  }
  return cache;
}

export function getQuestionsForChapter(slug: string): Question[] {
  return getQuestions().filter((question) => question.chapter === slug);
}

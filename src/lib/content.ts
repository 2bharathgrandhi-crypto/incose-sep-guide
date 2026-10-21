import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Heading = {
  depth: number;
  text: string;
  id: string;
};

export type Chapter = {
  slug: string;
  title: string;
  part: string;
  order: number;
  minutes: number;
  summary: string;
  body: string;
  headings: Heading[];
  words: number;
};

export type Part = {
  name: string;
  chapters: Chapter[];
};

const CONTENT_DIR = path.join(process.cwd(), "content");

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/`/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function extractHeadings(body: string): Heading[] {
  const headings: Heading[] = [];
  let inFence = false;

  for (const line of body.split("\n")) {
    if (line.trimStart().startsWith("```")) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = /^(#{2,3})\s+(.*)$/.exec(line);
    if (!match) continue;

    const text = match[2].replace(/[*_`]/g, "").trim();
    headings.push({ depth: match[1].length, text, id: slugifyHeading(text) });
  }

  return headings;
}

let cache: Chapter[] | null = null;

export function getChapters(): Chapter[] {
  if (cache) return cache;

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".md"))
    .sort();

  cache = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
      const { data, content } = matter(raw);

      return {
        slug: file.replace(/\.md$/, ""),
        title: String(data.title ?? file),
        part: String(data.part ?? "Guide"),
        order: Number(data.order ?? 0),
        minutes: Number(data.minutes ?? 10),
        summary: String(data.summary ?? ""),
        body: content.trim(),
        headings: extractHeadings(content),
        words: content.split(/\s+/).filter(Boolean).length,
      } satisfies Chapter;
    })
    .sort((a, b) => a.order - b.order);

  return cache;
}

export function getParts(): Part[] {
  const parts: Part[] = [];

  for (const chapter of getChapters()) {
    const existing = parts.find((part) => part.name === chapter.part);
    if (existing) {
      existing.chapters.push(chapter);
    } else {
      parts.push({ name: chapter.part, chapters: [chapter] });
    }
  }

  return parts;
}

export function getChapter(slug: string): Chapter | undefined {
  return getChapters().find((chapter) => chapter.slug === slug);
}

export function getNeighbours(slug: string) {
  const chapters = getChapters();
  const index = chapters.findIndex((chapter) => chapter.slug === slug);

  return {
    previous: index > 0 ? chapters[index - 1] : undefined,
    next: index >= 0 && index < chapters.length - 1 ? chapters[index + 1] : undefined,
  };
}

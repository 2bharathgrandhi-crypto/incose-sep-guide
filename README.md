# The Systems Engineer's Guide

A complete, plain-language guide to systems engineering and the **INCOSE SEP certification**
(ASEP, CSEP, ESEP), written for junior engineers and professionals moving into the discipline.

It is two things at once:

1. **A study companion for the SEP knowledge exam** — the syllabus covered topic by topic, with the
   confusable term pairs, the lists you have to memorise, exam technique, study plans, and a tagged
   practice question bank.
2. **A working reference for the job** — every process explained in terms of what you actually
   produce and which meeting it happens in, plus an on-the-job playbook for your first 90 days.

The guide lives as Markdown in [`content/`](./content) and is readable on its own. This repo also
ships a small Next.js reading app that renders it with navigation, search, reading progress, and a
practice-exam engine.

## Running it locally

```bash
npm install
npm run dev
```

Then open <http://localhost:43127>.

```bash
npm run build      # production build
npm start          # serve the production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

No database, no API keys, no accounts. Reading progress is stored in the browser's local storage.

## What is covered

| Part | Chapters |
| --- | --- |
| **I — Orientation** | How to use the guide; the ASEP/CSEP/ESEP landscape; exam strategy |
| **II — Foundations** | What systems engineering is; systems thinking; life cycles and decision gates; the standards landscape and the 30 ISO/IEC/IEEE 15288 processes |
| **III — Technical Processes** | Mission analysis, stakeholder needs and system requirements; requirements engineering in depth; architecture, design and system analysis; implementation through validation; operation, maintenance and disposal |
| **IV — Management & Organisation** | The eight technical management processes; the agreement and organizational project-enabling processes |
| **V — Methods & Specialties** | Tailoring and application contexts; MBSE, SysML and digital engineering; agile, lean and cross-cutting methods; specialty engineering and the "-ilities" |
| **VI — Practice** | On-the-job playbook; study plans and resources; glossary and acronyms |

All 30 processes of ISO/IEC/IEEE 15288 are covered, in their four groups: Agreement (2),
Organizational Project-Enabling (6), Technical Management (8), and Technical (14).

## Repository layout

```
content/                 the guide itself — one Markdown file per chapter, plus questions.json
src/app/                 Next.js App Router pages (home, /guide, /guide/[slug], /practice)
src/components/          UI: navigation, search, markdown renderer, table of contents, quiz
src/components/ui/       shadcn/ui primitives
src/lib/                 content loading, question loading, progress store
```

### Editing or adding a chapter

Add a Markdown file to `content/` with front matter:

```yaml
---
title: "Chapter title"
part: "Part III — Technical Processes"
order: 12
minutes: 15
summary: "One sentence shown in the contents and in search."
---
```

Chapters are ordered by `order` and grouped by `part`. Headings at `##` and `###` are picked up
automatically for the on-page table of contents and for search.

### Adding practice questions

Append to `content/questions.json`:

```json
{
  "id": "q121",
  "chapter": "11-realization",
  "question": "…",
  "options": ["…", "…", "…", "…"],
  "answer": 2,
  "explanation": "Why the right answer is right."
}
```

`answer` is the zero-based index of the correct option, and `chapter` must match a chapter slug
(the Markdown filename without its extension) so the question appears in that chapter's drill.

## A note on accuracy

This is an independent study companion. It is **not affiliated with or endorsed by INCOSE**, and it
does not replace the *INCOSE Systems Engineering Handbook*, which is the actual basis of the exam.

The technical content tracks ISO/IEC/IEEE 15288 and the Handbook closely, because that material is
stable across editions. Anything administrative — eligibility years, fees, exam length and format,
renewal requirements, and which Handbook edition the exam currently uses — changes over time and is
flagged in the text as something to verify against the current INCOSE Certification Program
materials at [incose.org](https://www.incose.org).

The practice questions are written to mirror the *style* of the knowledge exam. They are study
material, not real exam questions.

## Built with

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, shadcn/ui, and react-markdown.

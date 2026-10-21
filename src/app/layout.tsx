import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import type { NavPart } from "@/components/nav-data";
import { getParts } from "@/lib/content";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Systems Engineer's Guide — INCOSE SEP certification and practice",
    template: "%s · The Systems Engineer's Guide",
  },
  description:
    "A complete, plain-language guide to systems engineering and the INCOSE SEP (ASEP/CSEP/ESEP) certification syllabus, written for junior engineers and people moving into the discipline.",
};

const themeScript = `
try {
  var stored = localStorage.getItem('sep-guide-theme');
  var dark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (dark) document.documentElement.classList.add('dark');
} catch (e) {}
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  const parts: NavPart[] = getParts().map((part) => ({
    name: part.name,
    chapters: part.chapters.map((chapter) => ({
      slug: chapter.slug,
      title: chapter.title,
      minutes: chapter.minutes,
      summary: chapter.summary,
      headings: chapter.headings.filter((heading) => heading.depth === 2).map((heading) => heading.text),
    })),
  }));

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <SiteHeader parts={parts} />
        <div className="flex-1">{children}</div>
        <footer className="text-muted-foreground border-t py-8 text-sm">
          <div className="mx-auto max-w-[1500px] px-4">
            <p>
              An independent study companion. Not affiliated with or endorsed by INCOSE. Always
              confirm certification requirements, exam format, and the current Handbook edition
              against the official INCOSE Certification Program materials.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

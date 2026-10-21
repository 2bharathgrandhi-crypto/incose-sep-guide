import { SidebarNav } from "@/components/sidebar-nav";
import type { NavPart } from "@/components/nav-data";
import { getParts } from "@/lib/content";

export default function GuideLayout({ children }: LayoutProps<"/guide">) {
  const parts: NavPart[] = getParts().map((part) => ({
    name: part.name,
    chapters: part.chapters.map((chapter) => ({
      slug: chapter.slug,
      title: chapter.title,
      minutes: chapter.minutes,
      summary: chapter.summary,
      headings: [],
    })),
  }));

  return (
    <div className="mx-auto flex max-w-[1500px] gap-8 px-4">
      <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-64 shrink-0 overflow-y-auto py-8 lg:block">
        <SidebarNav parts={parts} />
      </aside>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}

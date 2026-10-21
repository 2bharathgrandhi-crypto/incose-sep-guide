"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

import type { NavPart } from "@/components/nav-data";
import { SearchDialog } from "@/components/search-dialog";
import { SidebarNav } from "@/components/sidebar-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function SiteHeader({ parts }: { parts: NavPart[] }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-background/85 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1500px] items-center gap-3 px-4">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 overflow-y-auto p-4">
            <SheetTitle className="mb-4 text-sm">Contents</SheetTitle>
            <SidebarNav parts={parts} onNavigate={() => setOpen(false)} />
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="bg-foreground text-background flex size-7 items-center justify-center rounded-md text-xs font-bold">
            SE
          </span>
          <span className="hidden sm:inline">The Systems Engineer&rsquo;s Guide</span>
          <span className="sm:hidden">SEP Guide</span>
        </Link>

        <div className="ml-auto flex items-center gap-2">
          <SearchDialog parts={parts} />
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
            <Link href="/practice">Practice</Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

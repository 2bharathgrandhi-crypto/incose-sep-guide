"use client";

import { Moon, Sun } from "lucide-react";
import { useCallback, useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";

const EVENT = "sep-guide-theme-change";

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  return () => window.removeEventListener(EVENT, onChange);
}

export function ThemeToggle() {
  const dark = useSyncExternalStore(
    subscribe,
    () => document.documentElement.classList.contains("dark"),
    () => false,
  );

  const toggle = useCallback(() => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("sep-guide-theme", next ? "dark" : "light");
    window.dispatchEvent(new Event(EVENT));
  }, []);

  return (
    <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle dark mode">
      {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  );
}

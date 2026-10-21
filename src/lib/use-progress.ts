"use client";

import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "sep-guide-progress";
const EVENT = "sep-guide-progress-change";
const EMPTY: string[] = [];

/**
 * Snapshots must be referentially stable between notifications, so the parsed
 * value is cached and only replaced when the underlying string changes.
 */
let cachedRaw: string | null = null;
let cachedValue: string[] = EMPTY;

function getSnapshot(): string[] {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    raw = null;
  }

  if (raw !== cachedRaw) {
    cachedRaw = raw;
    try {
      cachedValue = raw ? (JSON.parse(raw) as string[]) : EMPTY;
    } catch {
      cachedValue = EMPTY;
    }
  }

  return cachedValue;
}

function getServerSnapshot(): string[] {
  return EMPTY;
}

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function write(slugs: string[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
  window.dispatchEvent(new Event(EVENT));
}

/**
 * Chapter completion is stored locally so the guide works with no account and
 * no backend. `hydrated` lets callers avoid a server/client markup mismatch.
 */
export function useProgress() {
  const completed = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const hydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  const toggle = useCallback((slug: string) => {
    const current = getSnapshot();
    write(current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug]);
  }, []);

  const reset = useCallback(() => write(EMPTY), []);

  return {
    completed,
    hydrated,
    toggle,
    reset,
    isComplete: (slug: string) => completed.includes(slug),
  };
}

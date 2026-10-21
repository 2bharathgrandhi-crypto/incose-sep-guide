"use client";

import { useSearchParams } from "next/navigation";
import type { ComponentProps } from "react";

import { Quiz } from "@/components/quiz";

type Props = Omit<ComponentProps<typeof Quiz>, "initialTopic">;

export function PracticeQuiz(props: Props) {
  const topic = useSearchParams().get("topic") ?? "all";
  return <Quiz key={topic} {...props} initialTopic={topic} />;
}

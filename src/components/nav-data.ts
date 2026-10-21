export type NavChapter = {
  slug: string;
  title: string;
  minutes: number;
  summary: string;
  headings: string[];
};

export type NavPart = {
  name: string;
  chapters: NavChapter[];
};

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { slugifyHeading } from "@/lib/content";

function headingId(children: React.ReactNode): string {
  const flatten = (node: React.ReactNode): string => {
    if (typeof node === "string" || typeof node === "number") return String(node);
    if (Array.isArray(node)) return node.map(flatten).join("");
    if (node && typeof node === "object" && "props" in node) {
      return flatten((node as { props: { children?: React.ReactNode } }).props.children);
    }
    return "";
  };

  return slugifyHeading(flatten(children));
}

export function Markdown({ children }: { children: string }) {
  return (
    <div className="prose prose-slate dark:prose-invert prose-headings:scroll-mt-24 prose-headings:font-semibold prose-h2:mt-12 prose-h2:border-t prose-h2:pt-8 prose-h2:text-2xl prose-h3:text-lg prose-a:underline-offset-4 prose-table:text-sm prose-th:text-left prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:border-l-4 prose-blockquote:border-sky-500/60 prose-blockquote:bg-sky-500/5 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-md max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => <h2 id={headingId(children)}>{children}</h2>,
          h3: ({ children }) => <h3 id={headingId(children)}>{children}</h3>,
          table: ({ children }) => (
            <div className="not-prose my-6 overflow-x-auto rounded-lg border">
              <table className="w-full border-collapse text-sm">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-muted/60">{children}</thead>,
          th: ({ children }) => (
            <th className="border-b px-4 py-2.5 text-left align-top font-semibold">{children}</th>
          ),
          td: ({ children }) => <td className="border-b px-4 py-2.5 align-top">{children}</td>,
          a: ({ href, children }) => (
            <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              {children}
            </a>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}

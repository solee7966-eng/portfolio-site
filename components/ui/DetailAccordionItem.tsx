import type { ReactNode } from "react";

type DetailAccordionItemProps = {
  title: string;
  children: ReactNode;
};

export function DetailAccordionItem({
  title,
  children,
}: DetailAccordionItemProps) {
  return (
    <details className="rounded-lg border border-border bg-surface shadow-sm [&_summary::-webkit-details-marker]:hidden">
      <summary className="cursor-pointer list-none px-4 py-3.5 text-left text-sm font-semibold text-foreground transition-colors duration-300 ease-out hover:bg-surface-muted/80 sm:px-5">
        {title}
      </summary>
      <div className="space-y-3 border-t border-border px-4 py-4 text-sm leading-relaxed text-muted sm:px-5 sm:py-5">
        {children}
      </div>
    </details>
  );
}

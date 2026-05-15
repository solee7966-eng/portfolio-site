import { Fragment } from "react";

type FlowDiagramProps = {
  steps: readonly string[];
};

export function FlowDiagram({ steps }: FlowDiagramProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-surface-muted px-3 py-4 sm:px-5 sm:py-5">
      <div className="flex w-max max-w-none flex-nowrap items-center gap-2">
        {steps.map((step, index) => (
          <Fragment key={`${step}-${index}`}>
            <span className="shrink-0 rounded-md border border-border bg-surface px-3 py-2 font-mono text-xs text-foreground sm:text-sm">
              {step}
            </span>
            {index < steps.length - 1 ? (
              <span className="shrink-0 text-sm text-muted" aria-hidden>
                →
              </span>
            ) : null}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

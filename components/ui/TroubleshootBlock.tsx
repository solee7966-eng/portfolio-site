type TroubleshootBlockProps = {
  title: string;
  problem: string;
  cause: string;
  solution: string;
  learning: string;
};

function Field({
  label,
  children,
}: {
  label: string;
  children: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-accent">
        {label}
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{children}</p>
    </div>
  );
}

export function TroubleshootBlock({
  title,
  problem,
  cause,
  solution,
  learning,
}: TroubleshootBlockProps) {
  return (
    <article className="rounded-lg border border-border bg-surface p-5 shadow-sm sm:p-6">
      <h3 className="text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <div className="mt-6 space-y-5">
        <Field label="문제 상황">{problem}</Field>
        <Field label="원인 분석">{cause}</Field>
        <Field label="해결 방법">{solution}</Field>
        <Field label="배운 점">{learning}</Field>
      </div>
    </article>
  );
}

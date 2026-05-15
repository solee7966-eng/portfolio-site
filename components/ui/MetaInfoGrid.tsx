export type MetaInfoRow = {
  label: string;
  value: string;
};

type MetaInfoGridProps = {
  rows: readonly MetaInfoRow[];
};

export function MetaInfoGrid({ rows }: MetaInfoGridProps) {
  return (
    <dl className="mt-8 grid gap-3 sm:grid-cols-2">
      {rows.map((row) => (
        <div
          key={row.label}
          className="rounded-lg border border-border bg-surface p-4 shadow-sm"
        >
          <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
            {row.label}
          </dt>
          <dd className="mt-1.5 text-sm leading-snug text-foreground">
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

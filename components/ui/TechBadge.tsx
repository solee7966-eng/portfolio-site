type TechBadgeProps = {
  label: string;
  className?: string;
};

export function TechBadge({ label, className = "" }: TechBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-border bg-surface-muted px-2 py-0.5 text-xs font-medium text-foreground/75 ${className}`}
    >
      {label}
    </span>
  );
}

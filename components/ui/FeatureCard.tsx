type FeatureCardProps = {
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({
  title,
  description,
  className = "",
}: FeatureCardProps) {
  return (
    <article
      className={`rounded-lg border border-border bg-surface p-5 shadow-sm ${className}`}
    >
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}

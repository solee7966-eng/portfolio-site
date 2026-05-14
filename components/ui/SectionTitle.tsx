type SectionTitleProps = {
  title: string;
  subtitle?: string;
  /** Extra Tailwind classes for the wrapper */
  className?: string;
};

export function SectionTitle({
  title,
  subtitle,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

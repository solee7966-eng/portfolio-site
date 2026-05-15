type TechStackBlockProps = {
  heading: string;
  items: readonly string[];
};

export function TechStackBlock({ heading, items }: TechStackBlockProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
        {heading}
      </h3>
      <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

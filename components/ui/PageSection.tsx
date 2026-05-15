import { SectionTitle } from "@/components/ui/SectionTitle";

type PageSectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

export function PageSection({
  id,
  title,
  subtitle,
  children,
  className = "",
}: PageSectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-12 sm:py-14 ${className}`}
    >
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="mt-8">{children}</div>
    </section>
  );
}

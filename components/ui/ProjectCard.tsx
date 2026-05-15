import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/projects";

import { TechBadge } from "./TechBadge";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-sm transition-[border-color,box-shadow] hover:border-accent/35 hover:shadow-md">
      {project.thumbnail ? (
        <div className="relative aspect-video w-full border-b border-border bg-surface-muted">
          <Image
            src={project.thumbnail}
            alt={project.thumbnailAlt ?? project.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            {project.summary}
          </p>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted/90">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
        <Link
          href={project.href}
          className="mt-1 inline-flex text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          View project
          <span
            aria-hidden
            className="ml-1 transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}

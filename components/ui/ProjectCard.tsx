import Link from "next/link";

import type { Project } from "@/data/projects";

import { TechBadge } from "./TechBadge";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col rounded-lg border border-border bg-surface p-5 shadow-sm transition-[border-color,box-shadow] hover:border-accent/35 hover:shadow-md">
      <div className="flex flex-1 flex-col gap-3">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            {project.summary}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
      </div>
      <Link
        href={project.href}
        className="mt-4 inline-flex text-sm font-medium text-accent transition-colors hover:text-accent-hover"
      >
        View project
        <span
          aria-hidden
          className="ml-1 transition-transform group-hover:translate-x-0.5"
        >
          →
        </span>
      </Link>
    </article>
  );
}

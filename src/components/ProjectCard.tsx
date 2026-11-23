import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { ProjectArt } from "./ProjectArt";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return <article className={`project-card ${index % 3 === 1 ? "project-card--offset" : ""}`}>
    <Link href={`/work/${project.slug}`} className="project-visual-link" aria-label={`Read ${project.title} case study`}>
      <ProjectArt project={project} />
      <span className="project-open" aria-hidden="true"><ArrowUpRight size={24}/></span>
    </Link>
    <div className="project-caption"><div><div className="project-meta"><span>{project.kicker}</span><span>{project.year ?? "ARCHIVE"}</span></div><h3><Link href={`/work/${project.slug}`}>{project.title}</Link></h3><p>{project.summary}</p><div className="tag-list">{project.technologies.slice(0,3).map(t=><span key={t}>{t}</span>)}</div></div><ArrowUpRight className="caption-arrow" size={24} aria-hidden="true"/></div>
  </article>;
}

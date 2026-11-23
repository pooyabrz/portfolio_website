import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github, BookOpen, AlertTriangle } from "lucide-react";
import { projects, getProject } from "@/content/projects";
import { ProjectArt } from "@/components/ProjectArt";
import { canonical } from "@/lib/paths";

type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const p=getProject(slug);if(!p)return {title:"Project not found"};return {title:`${p.title} — Case Study`,description:p.summary,alternates:{canonical:canonical(`/work/${p.slug}`)},openGraph:{title:`${p.title} — Pooya Barazandeh`,description:p.summary,url:canonical(`/work/${p.slug}`)}};}
export default async function ProjectPage({params}:Props){const {slug}=await params;const project=getProject(slug);if(!project)notFound();const index=projects.findIndex(p=>p.slug===slug);const next=projects[(index+1)%projects.length];return <div className="case-page wrap">
 <Link href="/work" className="back-link"><ArrowLeft size={17}/> BACK TO ALL PROJECTS</Link>
 <div className="case-heading"><p className="eyebrow">CASE STUDY / {String(index+1).padStart(2,"0")} — {project.kicker}</p><h1>{project.title}<span>.</span></h1><p>{project.summary}</p></div>
 <ProjectArt project={project} detailed/>
 <div className="case-meta"><div><span>YEAR</span><strong>{project.year ?? "Earlier work"}</strong></div><div><span>ROLE</span><strong>{project.role}</strong></div><div><span>STATUS</span><strong>{project.status}</strong></div><div><span>STACK</span><strong>{project.technologies.slice(0,3).join(" / ")}</strong></div></div>
 <div className="case-body"><aside className="case-sidebar"><p className="eyebrow">IN THIS STORY</p><a href="#overview">01. Overview</a><a href="#challenge">02. Challenge</a><a href="#approach">03. Approach</a><a href="#implementation">04. Implementation</a><a href="#outcome">05. Outcome & limits</a><a href="#deep-dive">06. Deep dive</a>{project.githubUrl&&<a className="case-repo" target="_blank" rel="noreferrer" href={project.githubUrl}><Github size={17}/> OPEN REPOSITORY <ArrowUpRight size={16}/></a>}</aside>
 <article className="case-article"><section id="overview"><p className="eyebrow">01 / THE 30-SECOND VERSION</p><h2>What is {project.title}?</h2><p className="case-lead">{project.summary}</p><p>{project.result}</p></section>
 <section id="challenge"><p className="eyebrow">02 / THE CHALLENGE</p><h2>The problem behind it.</h2><p>{project.problem}</p></section>
 <section id="approach"><p className="eyebrow">03 / THINKING IT THROUGH</p><h2>The approach.</h2><p>{project.approach}</p></section>
 <section id="implementation"><p className="eyebrow">04 / BUILDING IT</p><h2>Under the hood.</h2><p>{project.implementation}</p><div className="case-tags">{project.technologies.map(t=><span key={t}>{t}</span>)}</div></section>
 <section id="outcome"><p className="eyebrow">05 / EVIDENCE & BOUNDARIES</p><h2>What it does —<br/><em>and doesn’t.</em></h2><div className="outcome-box"><BookOpen size={25}/><div><h3>Current result</h3><p>{project.result}</p></div></div><div className="limitation-box"><AlertTriangle size={25}/><div><h3>Important limitation</h3><p>{project.limitation}</p></div></div></section>
 <section id="deep-dive"><p className="eyebrow">06 / TECHNICAL NOTES</p><h2>Want to go <em>deeper?</em></h2><p>Expand the notes to explore design considerations and the scope of the implementation.</p>{project.deepDive.map((d,i)=><details key={i} className="deep-dive"><summary>{String(i+1).padStart(2,"0")} <span>{d.title}</span><span aria-hidden="true">+</span></summary><p>{d.body}</p></details>)}</section>
 {project.githubUrl&&<a href={project.githubUrl} className="case-github-btn" target="_blank" rel="noreferrer"><Github size={23}/> VIEW CODE ON GITHUB <ArrowUpRight size={20}/></a>}
 </article></div>
 <Link href={`/work/${next.slug}`} className="next-project"><div><span className="eyebrow">KEEP EXPLORING / NEXT PROJECT</span><h2>{next.title} <ArrowUpRight size={40}/></h2></div><span>0{(index+1)%projects.length+1} / {projects.length}</span></Link>
 </div>}

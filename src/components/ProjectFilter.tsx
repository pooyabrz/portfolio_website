"use client";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { categories, projects } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";
export function ProjectFilter(){const [filter,setFilter]=useState<string>("All");const [term,setTerm]=useState("");const [year,setYear]=useState("All years");
 const results=useMemo(()=>projects.filter(p=>(filter==="All"||p.categories.includes(filter as typeof p.categories[number])) && (year==="All years"||String(p.year)===year) && (p.title+" "+p.summary+" "+p.technologies.join(" ")+" "+p.kicker).toLowerCase().includes(term.trim().toLowerCase())),[filter,term,year]);
 return <><div className="project-filters"><div className="filter-pills" role="group" aria-label="Filter projects by category">{categories.map(c=><button key={c} className={`filter-pill ${filter===c?"filter-pill--active":""}`} aria-pressed={filter===c} onClick={()=>setFilter(c)} type="button">{c}</button>)}</div><div className="filter-row"><label className="project-search"><Search size={18}/><span className="sr-only">Search projects</span><input value={term} placeholder="Search projects..." onChange={e=>setTerm(e.target.value)}/>{term&&<button aria-label="Clear search" onClick={()=>setTerm("")} type="button"><X size={15}/></button>}</label><label className="year-filter"><span className="sr-only">Filter projects by year</span><select value={year} onChange={e=>setYear(e.target.value)}><option>All years</option><option>2026</option><option>2025</option></select></label></div></div>
 <p className="result-count" aria-live="polite">SHOWING {results.length.toString().padStart(2,"0")} OF {projects.length.toString().padStart(2,"0")} PROJECTS</p>
 {results.length?<div className="project-grid project-grid--directory">{results.map((p,i)=><ProjectCard key={p.id} project={p} index={i}/>)}</div>:<div className="no-results"><p>No projects match those filters.</p><button className="button button-dark" type="button" onClick={()=>{setFilter("All");setTerm("");setYear("All years");}}>Clear filters</button></div>}
 </>}

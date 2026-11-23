"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Command, FileDown, Github, Mail, Moon, Search, Sun, X } from "lucide-react";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";
import { asset } from "@/lib/paths";

const pages = [ { label: "Home", url: "/", group: "Pages" },{label:"Selected work",url:"/work",group:"Pages"},{label:"About me",url:"/about",group:"Pages"},{label:"The lab",url:"/lab",group:"Pages"},{label:"Contact",url:"/contact",group:"Pages"} ];
export function CommandPalette(){
 const [open,setOpen]=useState(false);const [query,setQuery]=useState("");const [selected,setSelected]=useState(0);
 const router=useRouter(); const inputRef=useRef<HTMLInputElement>(null); const trigger=useRef<HTMLButtonElement>(null);
 const entries=useMemo(()=>[
  ...pages.map(p=>({...p, type:"navigate" as const})),
  ...projects.map(p=>({label:p.title, url:`/work/${p.slug}`,group:"Projects",type:"navigate" as const})),
  {label:"Download resume",url:asset("CV.pdf"),group:"Actions",type:"download" as const},
  {label:"GitHub profile",url:profile.github,group:"Actions",type:"external" as const},
  {label:"Email me",url:`mailto:${profile.email}`,group:"Actions",type:"external" as const},
  {label:"Switch theme",url:"theme",group:"Actions",type:"theme" as const}
 ],[]);
 const results=useMemo(()=>entries.filter(item=>(item.label+" "+item.group).toLowerCase().includes(query.trim().toLowerCase())).slice(0,12),[entries,query]);
 const close=useCallback(()=>{setOpen(false);setQuery("");setSelected(0);requestAnimationFrame(()=>trigger.current?.focus());},[]);
 const execute=useCallback((item:typeof entries[number])=>{
  if(item.type==="theme"){
   const root=document.documentElement; const next=root.dataset.theme==="dark"?"light":"dark";root.dataset.theme=next;
   try{localStorage.setItem("pb-theme",next);}catch{} window.dispatchEvent(new Event("pb-theme-updated"));
  }else if(item.type==="navigate")router.push(item.url);
  else if(item.type==="download") {const a=document.createElement("a");a.href=item.url;a.download="Pooya-Barazandeh-CV.pdf";a.click();}
  else if(item.type==="external")window.open(item.url,item.url.startsWith("mailto:")?"_self":"_blank","noopener,noreferrer");
  close();
 },[router,close]);
 useEffect(()=>{
  const onKey=(e:KeyboardEvent)=>{
   if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();setOpen(v=>!v);}
   if(e.key==="Escape"&&open){e.preventDefault();close();}
  };window.addEventListener("keydown",onKey);return ()=>window.removeEventListener("keydown",onKey);
 },[open,close]);
 useEffect(()=>{if(!open)return; const old=document.body.style.overflow;document.body.style.overflow="hidden";inputRef.current?.focus();return()=>{document.body.style.overflow=old;};},[open]);
 useEffect(()=>{setSelected(0);},[query]);
 return <><button ref={trigger} className="command-trigger" type="button" onClick={()=>setOpen(true)} aria-label="Open command palette"><Search size={17}/><span>Explore</span><kbd><Command size={12}/> K</kbd></button>
  {open&&<div className="palette-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)close();}}>
   <section className="command-dialog" role="dialog" aria-modal="true" aria-label="Command palette" onKeyDown={e=>{if(e.key==="Tab"){const els=Array.from(e.currentTarget.querySelectorAll<HTMLElement>('button,input,[href]'));const first=els[0],last=els[els.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}}}>
     <div className="command-search"><Search size={20}/><input ref={inputRef} value={query} onChange={e=>setQuery(e.target.value)} onKeyDown={e=>{if(e.key==="ArrowDown"){e.preventDefault();setSelected(s=>Math.min(results.length-1,s+1));}if(e.key==="ArrowUp"){e.preventDefault();setSelected(s=>Math.max(0,s-1));}if(e.key==="Enter"&&results[selected])execute(results[selected]);}} placeholder="Search pages, projects, actions..." aria-label="Search"/><button type="button" onClick={close} aria-label="Close search"><X size={19}/></button></div>
     <div className="command-results" role="listbox" aria-label="Search results">{results.length?results.map((r,i)=><button key={r.group+r.label} className={`command-result ${i===selected?"is-selected":""}`} type="button" role="option" aria-selected={i===selected} onMouseEnter={()=>setSelected(i)} onClick={()=>execute(r)}><span className="command-result-icon">{r.type==="download"?<FileDown size={17}/>:r.type==="theme"?<Moon size={17}/>:r.label==="GitHub profile"?<Github size={17}/>:r.label==="Email me"?<Mail size={17}/>:<ArrowUpRight size={17}/>}</span><span>{r.label}<small>{r.group}</small></span><ArrowUpRight size={15}/></button>):<p className="command-empty">No matches. Try a project title or page.</p>}</div>
     <p className="command-footer">↑ ↓ to move <span>↵ to open</span><span>esc to close</span></p>
   </section></div>}
 </>;
}

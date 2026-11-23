"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "@/content/profile";
import { asset } from "@/lib/paths";
import { ThemeControls } from "./ThemeControls";
import { CommandPalette } from "./CommandPalette";

const nav=[{label:"Home",href:"/"},{label:"Work",href:"/work"},{label:"About",href:"/about"},{label:"Lab",href:"/lab"},{label:"Contact",href:"/contact"}];
export function Header(){
 const [menu,setMenu]=useState(false);const [scrolled,setScrolled]=useState(false);const pathname=usePathname();
 useEffect(()=>{setMenu(false);},[pathname]);
 useEffect(()=>{const f=()=>setScrolled(window.scrollY>28);f();window.addEventListener("scroll",f,{passive:true});return()=>window.removeEventListener("scroll",f);},[]);
 useEffect(()=>{const old=document.body.style.overflow;if(menu)document.body.style.overflow="hidden";return()=>{document.body.style.overflow=old;};},[menu]);
 useEffect(()=>{if(!menu)return;const f=(e:KeyboardEvent)=>{if(e.key==="Escape")setMenu(false);};document.addEventListener("keydown",f);return()=>document.removeEventListener("keydown",f);},[menu]);
 return <><header className={`site-header ${scrolled?"site-header--compact":""}`}>
   <div className="header-inner wrap"><Link className="wordmark" href="/" aria-label="Pooya Barazandeh home"><strong>pb<span>.</span></strong><span className="wordmark-caption">POOYA / BARAZANDEH</span></Link>
     <nav className="desktop-nav" aria-label="Main navigation">{nav.map(l=><Link key={l.href} aria-current={pathname===l.href?"page":undefined} className={pathname===l.href?"is-active":""} href={l.href}>{l.label}</Link>)}</nav>
     <div className="header-actions"><CommandPalette/><ThemeControls compact/><a className="language-shortcut" href={asset("classic/fa.html")} lang="fa" title="Persian portfolio edition">فا</a><Link className="header-contact" href="/contact">LET'S TALK <ArrowUpRight size={16}/></Link><button className="mobile-menu-toggle" type="button" aria-expanded={menu} aria-controls="mobile-site-navigation" aria-label={menu?"Close menu":"Open menu"} onClick={()=>setMenu(v=>!v)}>{menu?<X size={25}/>:<Menu size={25}/>}</button></div>
   </div>
 </header>
 <div id="mobile-site-navigation" className={`mobile-nav-panel ${menu?"mobile-nav-panel--open":""}`} aria-hidden={!menu}>
  <nav aria-label="Mobile navigation">{nav.map((l,i)=><Link key={l.href} tabIndex={menu?0:-1} onClick={()=>setMenu(false)} href={l.href}><span>0{i+1}</span>{l.label}<ArrowUpRight size={23}/></Link>)}</nav>
  <div className="mobile-preferences"><span>CHANGE THE LOOK</span><ThemeControls/></div>
  <div className="mobile-nav-bottom"><span>{profile.availability}</span><a tabIndex={menu?0:-1} href={`mailto:${profile.email}`}>EMAIL ME <ArrowUpRight size={16}/></a></div>
 </div>
 <nav className="mobile-bottom-nav" aria-label="Quick navigation"><Link href="/" aria-label="Home" aria-current={pathname==="/"?"page":undefined}>Home</Link><Link href="/work" aria-current={pathname.startsWith("/work")?"page":undefined}>Work</Link><Link href="/lab" aria-current={pathname==="/lab"?"page":undefined}>Lab</Link><Link href="/contact" aria-current={pathname==="/contact"?"page":undefined}>Contact</Link></nav>
 </>;
}

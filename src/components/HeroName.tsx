"use client";
import { useState } from "react";
export function HeroName(){const [active,setActive]=useState(-1);
 return <h1 className="hero-name" aria-label="Pooya Barazandeh"><span className="hero-name-line" aria-hidden="true">{"POOYA".split("").map((c,i)=><span key={i} className={`hero-letter ${active===i?"hero-letter--active":""}`} onPointerEnter={()=>setActive(i)} onPointerLeave={()=>setActive(-1)} onClick={()=>setActive(active===i?-1:i)}>{c}</span>)}</span><span className="hero-name-line hero-name-line--last" aria-hidden="true">{"BARAZANDEH".split("").map((c,i)=><span key={i} className={`hero-letter ${active===i+5?"hero-letter--active":""}`} onPointerEnter={()=>setActive(i+5)} onPointerLeave={()=>setActive(-1)} onClick={()=>setActive(active===i+5?-1:i+5)}>{c}</span>)}</span></h1>}

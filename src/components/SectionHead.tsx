import type { ReactNode } from "react";
export function SectionHead({number,eyebrow,title,description,action}: { number:string; eyebrow:string; title:ReactNode; description?:string; action?:ReactNode }) {
  return <div className="section-head"><div><p className="eyebrow">{number} / {eyebrow}</p><h2 className="section-title">{title}</h2>{description&&<p className="section-description">{description}</p>}</div>{action&&<div className="section-action">{action}</div>}</div>;
}

import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { canonical } from "@/lib/paths";
export default function sitemap():MetadataRoute.Sitemap{const pages=["/","/work","/about","/lab","/contact"];return [...pages.map(p=>({url:canonical(p),changeFrequency:"monthly" as const,priority:p==="/"?1:.7})),...projects.map(p=>({url:canonical(`/work/${p.slug}`),changeFrequency:"monthly" as const,priority:p.featured?.8:.6}))];}
